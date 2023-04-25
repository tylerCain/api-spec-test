import { HashRouter, Routes, Route } from "react-router-dom"
import "swagger-ui-react/swagger-ui.css"
import Home from "./routes/home"
import APISpec from "./routes/apiSpec"
import HomeBar from "./navbar/navbar"


function App() {
  return (
    <HashRouter>
      <HomeBar />
      <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/spec1" element={<APISpec url="https://petstore3.swagger.io/api/v3/openapi.json" />} />
      </Routes>
    </HashRouter>
  )
  /*return (
    <SwaggerUI url="https://petstore3.swagger.io/api/v3/openapi.json" />
  )*/
  
}

export default App
