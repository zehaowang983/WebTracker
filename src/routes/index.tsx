import { Route, Routes } from "react-router-dom"

import { SignIn } from "./signin"
import { SignUp } from "./signup"

export const Routing = () => (
  <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
  </Routes>
)