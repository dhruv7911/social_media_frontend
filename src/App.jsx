import { useState } from "react"
import "./App.css"
import Signup from "./containers/Signup/Signup"

function App() {
  const [count, setCount] = useState(0)

  return <div className="app"><Signup/></div>
}

export default App
