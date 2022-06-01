import io from "socket.io-client";
import cookie from "./cookie";
const socket = io({
  path: '/api/tts_io',
  transports: ["websocket", "polling"],
  query: {
    token:
      sessionStorage.getItem("token") ||
      localStorage.getItem("token") ||
      cookie.getItem('token')
  }
});
//socket.io-client send message to server




// socket.on('commit', (...args) => {
//   if ($vm) {
//     $vm.$store.commit(...args);
//   } 
// })

// socket.on('dispatch', (...args) => {
//   if ($vm) {
//     $vm.$store.dispatch(...args);
//   }
// })

export default socket;