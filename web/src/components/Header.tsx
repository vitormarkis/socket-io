import React from 'react';
import { useAuth } from '../contexts/Auth';

const Header: React.FC = () => {
  const [username, setUsername] = React.useState("")
  const [isLogging, setIsLogging] = React.useState(false)
  const { user, login, logout } = useAuth()
  
  return (
    <div className="shadow-lg bg-white relative z-10">
        <div className="max-w-7xl w-full px-4 py-3 flex items-center justify-between mx-auto">
          <div>
            <p className="font-bold my-auto">Logo</p>
          </div>
          <div className="flex gap-2 items-center text-sm">
            {user || isLogging ? null : (
              <input
                type="text"
                value={username}
                className="px-4 py-2 rounded-lg border outline-none border-zinc-300 shadow-lg"
                placeholder="Seu username..."
                onChange={e => setUsername(e.target.value)}
              />
            )}
            {isLogging ? (
              <div className="h-5 rounded-lg bg-zinc-400 animate-pulse w-48" />
            ) : user ? (
              <p>
                Seja bem-vindo <span className="text-teal-500 font-medium">{user.username}</span>
              </p>
            ) : null}
            {user ? (
              <button
                onClick={() => logout()}
                className="px-4 py-2 border border-black w-20 bg-black text-white rounded-lg"
              >
                Sair
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsLogging(true)
                  login(username).then(() => setUsername("")).finally(() => setIsLogging(false))
                }}
                className="px-4 py-2 border border-black w-20 bg-black text-white rounded-lg"
              >
                Entrar
              </button>
            )}
          </div>
        </div>
      </div>
  )
}

export default Header;