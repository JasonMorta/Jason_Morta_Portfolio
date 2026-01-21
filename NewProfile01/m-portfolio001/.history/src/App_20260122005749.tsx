import Navigation from "./components/Navigation";
import './App.css'
import { Outlet } from "react-router-dom";


export default function App() {

  return (
    <>
      <Navigation />
      <main>
        <Outlet /> {/* Renders the active page */}
      </main>
    </>
  )
}


