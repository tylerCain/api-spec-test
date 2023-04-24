{
    "openapi": "3.0.0",
    "info": {
        "version": "1.0",
        "title": "Mock API",
        "description": "Mock API"
    },
    "paths": {
        "/api/entity/{id}": {
            "get": {
                "summary": "Get item",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "schema": {
                            "type": "string",
                            "example": "123"
                        },
                        "description": "The id of the item to retrieve"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "item successfully retrieved",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/responseBody"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "Customer details not found"
                    }
                }
            }
        }
    },
    "components": {
        "schemas": {
            "responseBody": {
                "type": "object",
                "description": "some input"
            }
        }
    }
}
