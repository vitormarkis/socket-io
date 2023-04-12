import express from "express"
import dotenv from "dotenv"
import http from "http"
import { Server } from "socket.io"
import cors from "cors"

dotenv.config()

const app = express()
app.use(cors())
const serverHttp = http.createServer(app)

const io = new Server(serverHttp, {
  cors: {
    origin: "*",
  },
})

io.on("connection", (socket) => {
  console.log(`Usuário fez conexão: ${socket.id}`)

  socket.on("send_message", (payload) => {
    socket.broadcast.emit("receive_message", payload)
  })
})

serverHttp.listen(process.env.SERVER_PORT, () =>
  console.log("Server is running on port " + process.env.SERVER_PORT)
)
