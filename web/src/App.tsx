import React from "react"
import { io } from "socket.io-client"
import { SubmitHandler, useForm } from "react-hook-form"
import { useAuth } from "./contexts/Auth"
import { reqAuth } from "./helpers"
import Header from "./components/Header"

const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3030"

export const socket = io("http://localhost:3030")

interface IMessage {
  username: string
  message: string
}

const App: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<IMessage>()
  const { user } = useAuth()

  const submitHandler = async (formData: IMessage) => {
    try {
      const { onSuccess } = await reqAuth(user)
      onSuccess(() => {
        reset()
        console.log(formData)
      })
    } catch (error) {
      if (error instanceof Error) alert(error)
    }
  }

  return (
    <div className="h-screen bg-zinc-200 flex flex-col ">
      <Header />
      <div className="flex items-center justify-center">
        <div className="flex flex-col max-w-4xl w-full border-zinc-300 border-x shadow-lg h-full">
          <div className="h-[calc(100vh_-_48px)] relative grow bg-white overflow-hidden">
            <div className="overflow-x-hidden overflow-y-scroll flex flex-col gap-3 h-full scroll-thin">
              <div className="px-5 ">
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eveniet facilis atque accusamus
                  veritatis sit hic ullam nobis repudiandae non ipsam harum, cum officiis molestiae quae pariatur
                  laudantium accusantium sint?
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eveniet facilis atque accusamus
                  veritatis sit hic ullam nobis repudiandae non ipsam harum, cum officiis molestiae quae pariatur
                  laudantium accusantium sint?
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eveniet facilis atque accusamus
                  veritatis sit hic ullam nobis repudiandae non ipsam harum, cum officiis molestiae quae pariatur
                  laudantium accusantium sint?
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eveniet facilis atque accusamus
                  veritatis sit hic ullam nobis repudiandae non ipsam harum, cum officiis molestiae quae pariatur
                  laudantium accusantium sint?
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eveniet facilis atque accusamus
                  veritatis sit hic ullam nobis repudiandae non ipsam harum, cum officiis molestiae quae pariatur
                  laudantium accusantium sint?
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eveniet facilis atque accusamus
                  veritatis sit hic ullam nobis repudiandae non ipsam harum, cum officiis molestiae quae pariatur
                  laudantium accusantium sint?
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eveniet facilis atque accusamus
                  veritatis sit hic ullam nobis repudiandae non ipsam harum, cum officiis molestiae quae pariatur
                  laudantium accusantium sint?
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eveniet facilis atque accusamus
                  veritatis sit hic ullam nobis repudiandae non ipsam harum, cum officiis molestiae quae pariatur
                  laudantium accusantium sint?
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eveniet facilis atque accusamus
                  veritatis sit hic ullam nobis repudiandae non ipsam harum, cum officiis molestiae quae pariatur
                  laudantium accusantium sint?
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eveniet facilis atque accusamus
                  veritatis sit hic ullam nobis repudiandae non ipsam harum, cum officiis molestiae quae pariatur
                  laudantium accusantium sint?
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eveniet facilis atque accusamus
                  veritatis sit hic ullam nobis repudiandae non ipsam harum, cum officiis molestiae quae pariatur
                  laudantium accusantium sint?
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eveniet facilis atque accusamus
                  veritatis sit hic ullam nobis repudiandae non ipsam harum, cum officiis molestiae quae pariatur
                  laudantium accusantium sint?
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eveniet facilis atque accusamus
                  veritatis sit hic ullam nobis repudiandae non ipsam harum, cum officiis molestiae quae pariatur
                  laudantium accusantium sint?
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eveniet facilis atque accusamus
                  veritatis sit hic ullam nobis repudiandae non ipsam harum, cum officiis molestiae quae pariatur
                  laudantium accusantium sint?
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eveniet facilis atque accusamus
                  veritatis sit hic ullam nobis repudiandae non ipsam harum, cum officiis molestiae quae pariatur
                  laudantium accusantium sint?
                </div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, eveniet facilis atque accusamus
                  veritatis sit hic ullam nobis repudiandae non ipsam harum, cum officiis molestiae quae pariatur
                  laudantium accusantium sint?
                </div>
                <div>Lorem ips</div>um dolor sit amet consectetur adipisicing elit. Amet, eveniet facilis atque
                accusamus veritatis sit hic ullam nobis repudiandae non ipsam harum, cum officiis molestiae quae
                pariatur laudantium accusantium sint?
              </div>
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
                  className="bg-black rounded-lg w-fit ml-auto font-thin text-white px-6 py-2 shadow-lg shadow-black/30"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
