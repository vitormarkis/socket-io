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
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
})

serverHttp.listen(process.env.SERVER_PORT, () =>
  console.log("Server is running on port " + process.env.SERVER_PORT)
)

io.on("connection", (socket) => {
  console.log(socket.id)
})
