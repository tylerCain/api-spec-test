import { SwaggerUIBundle } from 'swagger-ui-dist'

const swaggerFunction = () => {
  window.onload = () => {
    const swaggerUI = SwaggerUIBundle({
      urls: [
        {
          name: "Example 1",
          url: "api-spec.json",
        },
        {
          name: "Example 2",
          url: "api-spec1.json",
        },
      ],
      dom_id: '#swagger-ui',
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIBundle.SwaggerUIStandalonePreset
      ],
      plugins: [
        SwaggerUIBundle.plugins.DownloadUrl
      ],
      deepLinking: true,
      layout: "StandaloneLayout"
    })
    window.ui = swaggerUI
  }
}

export default swaggerFunction