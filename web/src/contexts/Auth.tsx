import React, { useCallback, useMemo } from "react"

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
  const [user, setUser] = React.useState<IUser | null>(
    (JSON.parse(localStorage.getItem("user")!) as IUser) ?? null
  )

  const login = useCallback(
    async (username: string) => {
      await new Promise(resolve => setTimeout(resolve, 1200))
      localStorage.setItem("user", JSON.stringify({ username }))
      setUser({ username })
    },
    [user]
  )

  const logout = useCallback(async () => {
    await new Promise(resolve => setTimeout(resolve, 200))
    localStorage.removeItem("user")
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
