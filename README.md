# EJS Product Store

This is a simple web application that displays a list of products and their details. It is built with Node.js, Express, and EJS.

## Features

*   Displays a list of products.
*   Shows detailed information for each product.
*   Uses EJS for templating.
*   Serves static files using Express.

## Technologies Used

*   **Node.js:** JavaScript runtime environment.
*   **Express:** Web framework for Node.js.
*   **EJS:** Embedded JavaScript templating.
*   **Nodemon:** Utility that monitors for any changes in your source and automatically restarts your server.

## Getting Started

### Prerequisites

*   Node.js and npm installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Uttamdevsharma/ejs-product-store.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd ejs-product-store
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

To run the application in development mode (with automatic server restarts), use the following command:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Routes

*   `GET /`: Displays the list of all products.
*   `GET /product/:id`: Displays the details of a specific product.
