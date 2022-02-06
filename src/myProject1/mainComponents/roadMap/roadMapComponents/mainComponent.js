
import { Routes, Route } from "react-router-dom"
import Component from "./component"
import './main.css'

export default function MainComponent() {
   return (
      <div>
         <header className="text-center fw-light font-monospace bg-black mb-2 pb-2 pt-2" style={{ color: 'yellow' }}>
            <h5 >RoadMap.</h5>
            <h5>React-Router | React-Bootstrap </h5>
         </header>

         <Routes>
            <Route path='/*' element={<Component />} />
         </Routes>
      </div >
   )
}