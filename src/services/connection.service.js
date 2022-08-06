import io from "socket.io-client";

class ConnectionService {
  isConnecting = false;
  socket = null;

  isConnected() {
    return this.socket && this.socket.connected || false;
  }

  init(url) {
    if (this.isConnecting || this.socket) {
      return;
    }

    this.socket = io(url, {
      withCredentials: true
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
