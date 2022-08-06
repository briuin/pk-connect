import io from "socket.io-client";

class ConnectionService {
  isConnecting = false;
  socket = null;
  user = {
    username: ''
  };

  isConnected() {
    return this.socket && this.socket.connected || false;
  }

  setUser(user) {
    this.user = user;
    console.log(user, user.username)
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
