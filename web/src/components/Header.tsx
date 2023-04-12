import React from 'react';
import { useAuth } from '../contexts/Auth';

const Header: React.FC = () => {
  const [username, setUsername] = React.useState("")
  const [isLogging, setIsLogging] = React.useState(false)
  const { user, login, logout } = useAuth()
  
  return (
    <div className="shadow-lg bg-slate-900 text-white relative z-10 border-b border-slate-700">
        <div className="max-w-7xl w-full px-4 py-3 flex items-center justify-between mx-auto">
          <div>
            <p className="flex gap-2 items-center text-xl font-semibold font-spec">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" viewBox="0 0 256 256"><path d="M232,64H203.31l26.35-26.34a8,8,0,0,0-11.32-11.32L192,52.69V24a8,8,0,0,0-16,0V56.57a64,64,0,0,0-77.2,10.12l0,0,0,0,0,0c-40.1,39.39-70.25,133.08-73.19,142.45a16,16,0,0,0,21.26,21.26c9.37-2.94,103.18-33.13,142.47-73.21A64,64,0,0,0,199.43,80H232a8,8,0,0,0,0-16Zm-54.12,82c-8.94,9.12-21.25,17.8-34.85,25.73l-25.38-25.39a8,8,0,0,0-11.32,11.32l22.09,22.09c-40.87,21.19-86.32,35.42-87,35.63A7.93,7.93,0,0,0,40,216a7.93,7.93,0,0,0,.59-1.41c.29-.93,28-89.58,64-130.67l33.77,33.77a8,8,0,0,0,11.32-11.32L116.18,72.88A48,48,0,0,1,177.88,146Z"></path></svg>
            Realchat
            </p>
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
                Seja bem-vindo <span className="text-teal-300 font-medium">{user.username}</span>
              </p>
            ) : null}
            {user ? (
              <button
                onClick={() => logout()}
                className="px-4 py-2 border border-black w-20 bg-white text-black rounded-lg"
              >
                Sair
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsLogging(true)
                  login(username).then(() => setUsername("")).finally(() => setIsLogging(false))
                }}
                className="px-4 py-2 border border-black w-20 bg-white text-black rounded-lg"
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