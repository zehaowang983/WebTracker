import { useFirebase } from "~firebase/hook"
import { MemoryRouter } from "react-router-dom"

import { Routing } from "~routes"

export default function IndexPopup() {
  // const { user, isLoading, onLogin, onLogout } = useFirebase()

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 16,
      }}
    >
    <MemoryRouter>
      <Routing />
    </MemoryRouter>
    </div>
    //   <h1>
    //     Welcome to Web Agent Evaluation <a href="https://www.plasmo.com">Platform</a> Extension!
    //   </h1>
    //   {!user ? (
    //     <button onClick={() => onLogin()}>Log in</button>
    //   ) : (
    //     <button onClick={() => onLogout()}>Log out</button>
    //   )}
    //   <div>
    //     {isLoading ? "Loading..." : ""}
    //     {!!user ? (
    //       <div>
    //         Welcome to Plasmo, {user.displayName} your email address is{" "}
    //         {user.email}
    //       </div>
    //     ) : (
    //       ""
    //     )}
    //   </div>

    //   <footer>Crafted by @PlamoHQ</footer>
  )
}


