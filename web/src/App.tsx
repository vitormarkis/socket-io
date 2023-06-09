import React, { useEffect } from "react"
import { io } from "socket.io-client"
import { SubmitHandler, useForm } from "react-hook-form"
import { useAuth } from "./contexts/Auth"
import { reqAuth } from "./helpers"
import Header from "./components/Header"
import { IMessage, messageSchema } from "./schemas/messages"
import { LoaderFunctionArgs, useParams } from "react-router-dom"

const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3030"

export const socket = io(URL as string)

export function loader({ params }: LoaderFunctionArgs) {
  const room = params?.room ?? "home"
  socket.emit("join_room", room)
  return null
}

const App: React.FC = () => {
  const [messages, setMessages] = React.useState([] as IMessage[])
  const { register, handleSubmit, reset } = useForm<IMessage>()
  const { user } = useAuth()

  const { room } = useParams()

  useEffect(() => {
    socket.on("receive_message", data => {
      const { message, username } = messageSchema.parse(data)

      setMessages(prev => [...prev, { message, username }])
    })
  }, [socket])

  const submitHandler = async (formData: IMessage) => {
    try {
      const { onSuccess } = await reqAuth(user)
      onSuccess(() => {
        reset()
        setMessages(prev => [...prev, formData])
        socket.emit("send_message", { ...formData, room })
      })
    } catch (error) {
      if (error instanceof Error) alert(error)
    }
  }

  return (
    <div className="h-screen bg-slate-900 flex flex-col ">
      <Header />
      <div className="flex items-center justify-center">
        <div className="flex flex-col max-w-2xl w-full border-slate-700 border-x shadow-lg h-full">
          <div className="h-[calc(100vh_-_62px)] relative grow bg-slate-800 overflow-hidden">
            <div className="overflow-x-hidden overflow-y-scroll flex flex-col gap-3 h-full scroll-thin">
              <div className="px-5 pt-5 flex flex-col gap-3 leading-none">
                {messages.map(msg => (
                  <>
                    {user && user.username === msg.username ? (
                      <div className="flex flex-col border-b bg-white rounded-lg max-w-11/12 p-2 gap-1 border-slate-700 self-end">
                        <p className="text-stone-800 font-bold text-right text-sm">{msg.username}</p>
                        <p className="text-stone-600">{msg.message}</p>
                      </div>
                    ) : (
                      <div className="flex flex-col border-b bg-white rounded-lg max-w-11/12 p-2 gap-1 border-slate-700">
                        <p className="text-stone-800 font-bold text-sm">{msg.username}</p>
                        <p className="text-stone-600">{msg.message}</p>
                      </div>
                    )}
                  </>
                ))}
                <div className="basis-[90px] shrink-0" />
              </div>
              <form
                onSubmit={handleSubmit(submitHandler)}
                className="p-6 flex flex-col absolute w-full bottom-0 bg-gradient-to-b from-transparent to-black/50"
              >
                {user ? (
                  <input
                    type="text"
                    hidden
                    {...register("username")}
                    defaultValue={user.username}
                  />
                ) : null}
                <div className="flex gap-4">
                  <input
                    type="text"
                    {...register("message")}
                    className="bg-white shadow-xl shadow-black/30 placeholder:text-zinc-500 outline-none px-6 py-2 rounded-lg border border-zinc-400 text-stone-800 w-full"
                    placeholder="Sua mensagem..."
                  />
                  <button
                    type="submit"
                    className="bg-white rounded-lg w-fit ml-auto text-black px-6 py-2 shadow-lg shadow-black/30"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
