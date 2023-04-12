import React from "react"
import { io } from "socket.io-client"
import { SubmitHandler, useForm } from "react-hook-form"

const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3030"

export const socket = io("http://localhost:3030")

interface IMessage {
  username: string
  message: string
}

const App: React.FC = () => {
  const [username, setUsername] = React.useState("vitormarkis")
  const { register, handleSubmit, reset } = useForm<IMessage>()

  const submitHandler: SubmitHandler<IMessage> = async formData => {}

  return (
    <div className="h-screen bg-zinc-200 flex flex-col">
      <div className="shadow-lg bg-white">
        <div className="max-w-7xl w-full px-4 py-3 flex items-center justify-between mx-auto">
          <div><p className="font-bold my-auto">Logo</p></div>
          <div></div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col max-w-4xl w-full border-zinc-300 border-x shadow-lg h-full">
          <div className="h-[calc(100vh_-_48px_-_90px)] grow bg-indigo-300 flex flex-col gap-3 overflow-x-hidden overflow-y-scroll scroll-thin">
            <p className="h-12 py-6 bg-red-500">MSG</p>
            <p className="h-12 py-6 bg-red-500">MSG</p>
            <p className="h-12 py-6 bg-red-500">MSG</p>
            <p className="h-12 py-6 bg-red-500">MSG</p>
            <p className="h-12 py-6 bg-red-500">MSG</p>
            <p className="h-12 py-6 bg-red-500">MSG</p>
            <p className="h-12 py-6 bg-red-500">MSG</p>
            <p className="h-12 py-6 bg-red-500">MSG</p>
            <p className="h-12 py-6 bg-red-500">MSG</p>
            <p className="h-12 py-6 bg-red-500">MSG</p>
            <p className="h-12 py-6 bg-red-500">MSG</p>
            <p className="h-12 py-6 bg-red-500">MSG</p>
            <p className="h-12 py-6 bg-red-500">MSG</p>
            <p className="h-12 py-6 bg-red-500">MSG</p>
            <p className="h-12 py-6 bg-red-500">MSG</p>
            <p className="h-12 py-6 bg-red-500">MSG</p>
            <p className="h-12 py-6 bg-red-500">MSG</p>
            <p className="h-12 py-6 bg-red-500">MSG</p>
            <p className="h-12 py-6 bg-red-500">MSG</p>
            <p className="h-12 py-6 bg-red-500">MSG</p>
          </div>
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="rounded-lg p-6 flex flex-col"
        >
          <input
            type="text"
            hidden
            {...register("username")}
            defaultValue={username}
          />
          <div className="flex gap-4">
          <input
            type="text"
            {...register("message")}
            className="bg-transparent outline-none px-6 py-2 rounded-lg border border-zinc-400 text-stone-800 w-full"
            placeholder="Sua mensagem..."
          />
          <button
            type="submit"
            className="bg-green-600 rounded-lg w-fit ml-auto font-thin text-white px-6 py-2 shadow-lg shadow-black/30"
          >
            Enviar
          </button>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default App
