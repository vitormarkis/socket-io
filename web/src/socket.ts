import { io } from "socket.io-client"
// import dotenv from "dotenv"
// dotenv.config()

const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3030"

export const socket = io({ host: URL })
