import Navigation from "./components/Navigation";
import './App.css'
import { Outlet } from "react-router-dom";


function App() {

  return (
    <>
      <Navigation />
      <main>
        <Outlet /> {/* Renders the active page */}
      </main>
    </>
  )
}

export default App
