# Frontend Assessment Kiyado

This project is a Simple E-commerce application built using the React.

## Table of Contents

-   [Installation](#installation)
-   [Environment Variables](#environment-variables)
-   [Running the Project](#running-the-project)
-   [Technologies Used](#technologies-used)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/prajilk/assessment-kiyado.git
    cd assessment-kiyado
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Environment Variables

Create `.env` files in the directories with the following configurations:

### `.env` file (.env)

```
VITE_SERVER_URL = http://localhost:3000
```

## Running the Project

### Run the server:

Open a terminal, then start the json-server:

```
npx json-server -w data/db.json -p 3000
```

### Run the client:

Open another terminal, then start the client:

```
npm run dev
```

### Access the application:

Open your browser and navigate to http://localhost:5173.

## Technologies Used

### Fronend:

-   React (Vite)
-   React-Query for data fetching
-   Axios
-   Redux for state management
-   Tailwindcss for styling
-   Shadcn for UI Components
-   Lucide-react for icons

### Backend:

-   Json-Server
