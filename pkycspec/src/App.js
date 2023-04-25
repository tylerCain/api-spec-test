import { BrowserRouter, Routes, Route } from "react-router-dom"
import "swagger-ui-react/swagger-ui.css"
import Home from "./routes/home"
import APISpec from "./routes/apiSpec"
import HomeBar from "./navbar/navbar"


function App() {
  return (
    <BrowserRouter basename="/home">
      <HomeBar />
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/spec1" element={<APISpec url="https://petstore3.swagger.io/api/v3/openapi.json" />} />
      </Routes>
    </BrowserRouter>
  )
  /*return (
    <SwaggerUI url="https://petstore3.swagger.io/api/v3/openapi.json" />
  )*/
  
}

export default App
