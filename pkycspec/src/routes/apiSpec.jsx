import SwaggerUI from "swagger-ui-react"

const APISpec = ({ url }) => (
  //Add back button
  <div className="App">
    <SwaggerUI url={url} />
  </div>
)

export default APISpec