import { IUser } from "../contexts/Auth"

type TFunction = (...args: any[]) => any | Promise<any>

interface PromiseResponse<T> {
  onSuccess: (callback: T) => void
}

export const reqAuth = <T extends TFunction>(user: IUser | null) =>
  new Promise<PromiseResponse<T>>((resolve, reject) => {
    if (user) {
      return resolve({ onSuccess: (callback: T) => callback() })
    } else {
      return reject(new Error("Entre em uma conta para conseguir enviar mensagens."))
    }
  })
