import io from "socket.io-client";
import { BehaviorSubject } from 'rxjs';

class ConnectionService {
  isConnecting = false;
  socket = null;
  user = {
    username: ''
  };
  isAuthenticatedSubject = new BehaviorSubject(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  isConnected() {
    return this.socket && this.socket.connected || false;
  }

  isAuthenticated() {
    return this.user && this.user.username;
  }

  logout(options = {redirectToHomepage: true}) {
    localStorage.removeItem("token");
    this.user = {};
    this.isAuthenticatedSubject.next(false);
    if (options.redirectToHomepage) {
      location.href = "/";
    }
  }

  setUser(user) {
    this.user = user;
    this.isAuthenticatedSubject.next(true);
    if (this.socket) {
      this.socket.emit("updateUserInfo", {
        username: user.username
      });
    }
  }

  init(url) {
    if (this.isConnecting || this.socket) {
      return;
    }

    const tokenJSON = localStorage.getItem("token");
    const token = tokenJSON && JSON.parse(tokenJSON).value;

    this.socket = io(url, {
      withCredentials: true,
      transportOptions: {
        polling: {
          extraHeaders: {
            Authorization: `Bearer ${token}`,
          }
        }
      }
    });
    this.isConnecting = true;
    this.socket.on("connect", this.onConnect);
  }

  onConnect(socket) {
    this.isConnecting = false;
    console.log("connected");
  }
}

export default new ConnectionService();
