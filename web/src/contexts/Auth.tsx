import React, { useCallback } from "react"

export interface IUser {
  username: string
}

interface IUserContext {
  user: IUser | null
  login: (username: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = React.createContext({} as IUserContext)

export function AuthProvider(props: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<IUser | null>(null)

  const login = useCallback(
    async (username: string) => {
      await new Promise(resolve => setTimeout(resolve, 1200))
      setUser({ username })
    },
    [user]
  )

  const logout = useCallback(async () => {
    await new Promise(resolve => setTimeout(resolve, 200))
    setUser(null)
  }, [user])

  return (
    <AuthContext.Provider
      children={props.children}
      value={{ login, logout, user }}
    />
  )
}

export const useAuth = () => React.useContext(AuthContext)
