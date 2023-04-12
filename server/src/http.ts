import express from "express"
import dotenv from "dotenv"
import http from "http"
import { Server } from 'socket.io'

dotenv.config()

const app = express()
const serverHttp = http.createServer(app)

const io = new Server(serverHttp)

export { serverHttp, io }