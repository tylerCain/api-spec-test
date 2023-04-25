import SwaggerUI from "swagger-ui-react"
import HomeBar from "../navbar/navbar"

const APISpec = ({ url }) => (
    <div className="App">
      <SwaggerUI url={url} />
    </div>
)

export default APISpec