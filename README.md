# Project Overview

This project is a web application built with Node.js, Express.js, and Next.js. The backend is handled by Express.js, while the frontend is built using Next.js.

 ## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ignacioisasmendi/Challenge-DevelopsToday
   ```
2. **Install Dependencies:**
   <br>Backend
   
   ```bash
   cd BE
   npm install
   ```
   Frontend
   
   ```bash
   cd FE
   npm install
   ```

3. **Configure Environment Variables:**
   <br>Backend<br>
    Open .env file in the backend folder.
    Replace the placeholder values with your actual credentials:
   
   ```bash
    PORT=5005
    BASIC_USER=restapi
    BASIC_PASS=restapi
   ```
    Frontend<br>
    Open .env file in the frontend folder.
    Replace the placeholder values with your actual credentials:
   
   ```bash
    SERVER_URL=http://localhost:5005/api
    NEXT_BASIC_USERNAME=restapi
    NEXT_BASIC_PASSWORD=restapi
   ```
   
4. **Run the project**
   <br>Backend
   
   ```bash
   cd BE
   npm run dev
   ```
   Frontend
   
   ```bash
   cd FE
   npm run dev
   ```
   <br>


The frontend will be running in http://localhost:3000 and the backend in http://localhost:5005
   
