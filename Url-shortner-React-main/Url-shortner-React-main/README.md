## Project Name: #LINKIFY - URL Shortener with Full Authentication using React and Node.js

### Overview:

#LINKIFY is a feature-rich URL shortener that incorporates full authentication using React for the frontend and Node.js for the backend. The application allows users to shorten URLs, manage their links, and benefit from a secure authentication system using JSON Web Tokens (JWT).

### Features:

1. **URL Shortening:**
   - Users can shorten long URLs for easy sharing.
   - Shortened URLs redirect to the original links.

2. **User Authentication:**
   - Robust authentication system with user registration and login.
   - Passwords are securely hashed for enhanced security.

3. **JWT Authorization:**
   - JSON Web Tokens are employed for secure and stateless user authentication.
   - Tokens are generated upon successful login and stored securely on the client side.

4. **Dashboard:**
   - Authenticated users can manage and track their shortened URLs through a personalized dashboard.

5. **Link Analytics:**
   - Basic analytics provide insights into the performance of shortened URLs.
   - Users can view statistics, including the number of clicks on their links.

### Screenshots:

![Screenshot 1](https://i.ibb.co/sg7DFrd/Screenshot-102.png)
![Screenshot 2](https://i.ibb.co/Sfp04tx/Screenshot-103.png)
![Screenshot 3](https://i.ibb.co/r3qDP6B/Screenshot-105.png)
![Screenshot 4](https://i.ibb.co/q9wmPmC/Screenshot-106.png)
![Screenshot 5](https://i.ibb.co/pnSBSL6/Screenshot-107.png)

### Tech Stack:

- **Frontend:**
  - React
  - React Router for navigation
  - Axios for API calls

- **Backend:**
  - Node.js
  - Express.js for server setup
  - MongoDB for data storage
  - Mongoose for MongoDB object modeling
  - JWT for authentication

### Installation:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/linkify-url-shortener.git
   cd linkify-url-shortener
   ```

2. **Setup Frontend:**
   ```bash
   cd frontend
   npm install
   ```

3. **Setup Backend:**
   ```bash
   cd backend
   npm install
   ```

4. **Configure Environment Variables:**
   - Create a `.env` file in the `backend` directory and configure the following variables:
     - `MONGODB_URI`: MongoDB connection URI
     - `JWT_SECRET`: Secret key for JWT token generation

5. **Run the Application:**
   - Start the frontend:
     ```bash
     cd frontend
     npm start
     ```
   - Start the backend:
     ```bash
     cd backend
     npm start
     ```

6. **Access the Application:**
   - Open your browser and navigate to `http://localhost:3000` to use the #LINKIFY URL shortener with full authentication.

### API Endpoints:

- **Authentication:**
  - `POST /api/auth/register`: Register a new user.
  - `POST /api/auth/login`: Log in and receive a JWT token.

- **URL Shortening:**
  - `POST /api/urls/shorten`: Shorten a long URL.
  - `GET /api/urls/:shortCode`: Retrieve the original URL associated with a short code.

- **User Dashboard:**
  - `GET /api/dashboard`: Retrieve user-specific data for the dashboard.

### Future Improvements:

- Implement URL expiration for short links.
- Add support for custom short URLs.
- Enhance link analytics with more detailed metrics.
- Implement forgot password functionality.

### Contributors:

- List contributors and their roles in the project.

### License:

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the license terms.

### Acknowledgments:
