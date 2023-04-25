import SwaggerUI from "swagger-ui-react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "swagger-ui-react/swagger-ui.css"
import Home from "./routes/home"
import APISpec from "./routes/apiSpec"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/spec1" element={<APISpec url="https://petstore3.swagger.io/api/v3/openapi.json" />} />
      </Routes>
    </BrowserRouter>
  )
  /*return (
    <SwaggerUI url="https://petstore3.swagger.io/api/v3/openapi.json" />
  )*/
  
}

export default App
