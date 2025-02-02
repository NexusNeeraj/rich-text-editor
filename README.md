# 1️⃣ Project Title
- FAQ with Multilingual Support

# 2️⃣ Project Description
This project is a Node.js/Express.js-based FAQ management system that allows users to store and  manage FAQs with multilingual support. It includes:

    
    ✅ WYSIWYG editor support using CKEditor.  
    ✅ Multi-language translations using Google Translate API.  
    ✅ REST API with language query support (`?lang=hi`, `?lang=bn`).  
    ✅ Admin panel for managing FAQs.  
    ✅ Caching using Redis for fast responses. 
    ✅ Docker support for containerized deployment.  
    ✅ Unit tests with Mocha/Chai.
    


# 3️⃣ Tech Stack
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Caching**: Redis  
- **Translation**: Google Translate API  
- **Admin Panel**: AdminJS  
- **Testing**: Mocha, Chai  
- **Deployment**: Docker, Heroku/AWS  

# 4️⃣ Installation Guide
🔹 Prerequisites
- Install Node.js
- Install Docker
- MongoDB (or use Docker for MongoDB)
- Redis (or use Docker for Redis)


# 5️⃣ Local Setup
📥 Clone the repository
    
    git clone https://github.com/NexusNeeraj/faq-multilingual.git
    cd faq-multilingual

📦 Install dependencies

    npm install
    @adminjs/express
    @adminjs/mongoose": "^4.1.0
    adminjs": "^7.8.15
    axios": "^1.7.9
    cors": "^2.8.5
    dotenv": "^16.4.7
    express": "^4.21.2
    express-basic-auth": "^1.2.1
    ioredis": "^5.4.2
    mongoose": "^8.9.`

🔑 Set up .env file

    MONGO_URI=mongodb://localhost:27017/faqDB
    REDIS_HOST=localhost
    GOOGLE_TRANSLATE_API_KEY=your_api_key_here

🚀 Start the server
    
    npm start

6️⃣ Docker Setup
🐳 Run using Docker Compose

    docker-compose up --build

7️⃣ API Endpoints
🔹 Fetch FAQs

- curl http://localhost:8000/api/faqs/

🔹 Fetch FAQs in Hindi

    curl http://localhost:8000/api/faqs/?lang=hi
    
🔹 Fetch FAQs in Bengali

    curl http://localhost:8000/api/faqs/?lang=bn

🔹 Add an FAQ

    curl -X POST http://localhost:8000/api/faqs/ -H "Content-Type: application/json" -d '{
    "question": "What is Node.js?",
    "answer": "<p>Node.js is a runtime environment.</p>"
    }'

# 8️⃣ Admin Panel

📌 Login
  
      Open http://localhost:8000/admin
      Username: admin
      Password: password

# 9️⃣ Running Unit Tests

    npm test