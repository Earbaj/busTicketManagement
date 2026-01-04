# 🚌 Bus Ticket Booking System - API Documentation
📖 Overview
A comprehensive REST API for a modern bus ticket booking system with user authentication, ticket management, payment integration, and real-time notifications.

# 🌟 Features
* 🔐 Authentication & Authorization
User registration & login with JWT

* Role-based access control (User/Admin)

* Password reset functionality

* Token refresh mechanism

# 🚌 Bus & Trip Management
* Bus operators management

* Bus fleet management (AC/Non-AC, seating capacity)

* Route management (source to destination)

* Trip scheduling with departure/arrival times

* Real-time seat availability

# 🎫 Ticket Booking System
* Browse available trips

* Seat selection with visual layout

* Passenger information management

* Booking confirmation & e-ticket generation

* Booking history & status tracking

# 💳 Payment Integration
* bKash payment gateway integration

* Payment status tracking (Pending/Success/Failed)

* Transaction history

* Refund processing

# 🔔 Notifications System
* Real-time notifications 

* Booking confirmations

* Payment receipts

* Trip reminders & updates

* System announcements

# 👤 User Management
* Profile management

* Booking history

* Favorite routes

* User preferences

# 📊 Admin Dashboard
* System analytics & reports

* User management

* Revenue tracking

* Trip management

* Notification broadcasting

# 🛠️ Tech Stack
* Technology	Purpose
* Node.js	Runtime Environment
* Express.js	Web Framework
* MongoDB	Database
* Mongoose	ODM for MongoDB
* JWT	Authentication
* bcryptjs	Password Hashing
* Jest	Testing Framework
* Socket.io	Real-time Notifications
* Redis	Caching & Rate Limiting
# 🚀 Quick Start
* Prerequisites
 - Node.js (v18 or higher)

 - MongoDB (Local or Atlas)

 - npm or yarn

# Installation

### 1.Clone the repository

```bash
git clone https://github.com/yourusername/bus-ticket-api.git
cd bus-ticket-api
```

### 2.Install dependencies

```bash
npm install
```
### 3.Configure environment variables

# Edit .env with your configuration
  * Start the development server

```bash
npm run dev
```
  * Access the API

```bash
http://localhost:5000
```
  * ⚙️ Environment Variables
     - Create a .env file in the root directory:
env
# Server Configuration
 - PORT=5000
 - NODE_ENV=development
 - APP_URL=http://localhost:5000

# Database
 - MONGO_URI=mongodb://localhost:27017/busticket
 - or for MongoDB Atlas
 - MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/busticket

# JWT Configuration
 - JWT_SECRET=your_super_secret_jwt_key_change_in_production
 - JWT_EXPIRES_IN=24h
 - JWT_REFRESH_SECRET=your_refresh_secret_key
 - JWT_REFRESH_EXPIRES_IN=7d

# bKash Payment Configuration
 - BKASH_APP_KEY=your_bkash_app_key
 - BKASH_APP_SECRET=your_bkash_app_secret
 - BKASH_USERNAME=your_bkash_username
 - BKASH_PASSWORD=your_bkash_password

# Email Configuration (for notifications)
 - SMTP_HOST=smtp.gmail.com
 - SMTP_PORT=587
 - SMTP_USER=your_email@gmail.com
 - SMTP_PASS=your_email_password

# Redis Configuration (for caching & rate limiting)
 * REDIS_URL=redis://localhost:6379
 * 📚 API Endpoints
## 🔐 **Authentication**

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | User login | No |
| POST | `/api/auth/logout` | User logout | Yes |
| POST | `/api/auth/refresh-token` | Refresh JWT token | Yes |
| POST | `/api/auth/forgot-password` | Request password reset | No |
| POST | `/api/auth/reset-password` | Reset password with token | No |

## 👤 **User Profile**

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/users/profile` | Get user profile | Yes |
| PUT | `/api/users/profile` | Update user profile | Yes |
| GET | `/api/users/bookings` | Get user bookings | Yes |
| GET | `/api/users/notifications` | Get user notifications | Yes |

## 🚌 **Buses & Operators**

| Method | Endpoint | Description | Auth Required | Role Required |
|--------|----------|-------------|---------------|---------------|
| GET | `/api/buses` | Get all buses | No | - |
| POST | `/api/buses` | Create new bus | Yes | Admin |
| GET | `/api/buses/:id` | Get bus details | No | - |
| PUT | `/api/buses/:id` | Update bus | Yes | Admin |
| DELETE | `/api/buses/:id` | Delete bus | Yes | Admin |
| GET | `/api/operators` | Get all operators | No | - |
| POST | `/api/operators` | Create operator | Yes | Admin |

## 🗺️ **Routes**

| Method | Endpoint | Description | Auth Required | Role Required |
|--------|----------|-------------|---------------|---------------|
| GET | `/api/routes` | Get all routes | No | - |
| POST | `/api/routes` | Create route | Yes | Admin |
| GET | `/api/routes/:id` | Get route details | No | - |
| GET | `/api/routes/search` | Search routes by criteria | No | - |

## 🚍 **Trips & Schedules**

| Method | Endpoint | Description | Auth Required | Role Required |
|--------|----------|-------------|---------------|---------------|
| GET | `/api/trips` | Get available trips | No | - |
| POST | `/api/trips` | Create trip | Yes | Admin |
| GET | `/api/trips/:id` | Get trip details | No | - |
| GET | `/api/trips/search` | Search trips by criteria | No | - |
| GET | `/api/trips/:id/seats` | Get seat availability | No | - |

## 🎫 **Bookings**

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/bookings` | Create booking | Yes |
| GET | `/api/bookings` | Get user bookings | Yes |
| GET | `/api/bookings/:id` | Get booking details | Yes |
| POST | `/api/bookings/:id/cancel` | Cancel booking | Yes |
| GET | `/api/bookings/:id/ticket` | Get e-ticket | Yes |

## 💳 **Payments**

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/payments/create` | Create payment | Yes |
| POST | `/api/payments/verify` | Verify payment | Yes |
| GET | `/api/payments/history` | Payment history | Yes |
| POST | `/api/payments/refund` | Request refund | Yes |

## 🔔 **Notifications**

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/notifications` | Get notifications | Yes |
| PUT | `/api/notifications/:id/read` | Mark as read | Yes |
| DELETE | `/api/notifications/:id` | Delete notification | Yes |

## 👨‍💼 **Admin Endpoints**

| Method | Endpoint | Description | Auth Required | Role Required |
|--------|----------|-------------|---------------|---------------|
| GET | `/api/admin/stats` | System statistics | Yes | Admin |
| GET | `/api/admin/users` | List all users | Yes | Admin |
| PUT | `/api/admin/users/:id` | Update user | Yes | Admin |
| POST | `/api/admin/broadcast` | Broadcast notification | Yes | Admin |
| GET | `/api/admin/reports` | Generate reports | Yes | Admin |

## 🔒 **Authentication Flow**

### 1. Registration

**Request:**
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123!",
  "phone": "+8801712345678",
  "gender": "male",
  "age": 28
}
```

**Response:**
```json
{
  "success": true,
  "message": "Registration successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

### 2. Login

**Request:**
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "SecurePass123!"
}
```

### 3. Using Authenticated Endpoints

Add this header to all authenticated requests:

```
Authorization: Bearer <your_jwt_token>
```

**Example:**
```http
GET /api/users/profile
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

---

## 🚌 **Bus Booking Flow**

### Step 1: Search for Trips
```http
GET /api/trips/search?from=Dhaka&to=Chittagong&date=2024-01-20
```

### Step 2: View Trip Details
```http
GET /api/trips/507f1f77bcf86cd799439011
```

### Step 3: Check Seat Availability
```http
GET /api/trips/507f1f77bcf86cd799439011/seats
```

### Step 4: Create Booking
```http
POST /api/bookings
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "tripId": "507f1f77bcf86cd799439011",
  "seats": ["A1", "A2"],
  "passengers": [
    {
      "name": "John Doe",
      "phone": "+8801712345678",
      "gender": "male",
      "age": 28
    }
  ],
  "boardingPoint": "Gabtoli Bus Counter",
  "droppingPoint": "Chittagong Bus Terminal"
}
```

### Step 5: Make Payment
```http
POST /api/payments/create
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "bookingId": "507f1f77bcf86cd799439012",
  "paymentMethod": "bkash",
  "amount": 2400
}
```

### Step 6: Confirm Payment
```http
POST /api/payments/verify
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "paymentId": "BKASH_TXN_123456",
  "bookingId": "507f1f77bcf86cd799439012"
}
```

---

## 📱 **Example Curl Commands**

### Registration
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "SecurePass123!",
    "phone": "+8801712345678",
    "gender": "male",
    "age": 28
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "SecurePass123!"
  }'
```

### Search Trips
```bash
curl -X GET "http://localhost:5000/api/trips/search?from=Dhaka&to=Chittagong&date=2024-01-20"
```

### Create Booking (with token)
```bash
curl -X POST http://localhost:5000/api/bookings \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN_HERE" \
  -d '{
    "tripId": "507f1f77bcf86cd799439011",
    "seats": ["A1", "A2"],
    "passengers": [
      {
        "name": "John Doe",
        "phone": "+8801712345678",
        "gender": "male",
        "age": 28
      }
    ],
    "boardingPoint": "Gabtoli Bus Counter",
    "droppingPoint": "Chittagong Bus Terminal"
  }'
```

---

## 🎯 **Response Status Codes**

| Code | Meaning | Description |
|------|---------|-------------|
| 200 | OK | Request successful |
| 201 | Created | Resource created successfully |
| 400 | Bad Request | Invalid input parameters |
| 401 | Unauthorized | Authentication required |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Resource not found |
| 409 | Conflict | Resource already exists |
| 500 | Internal Server Error | Server error |

---

### 🧪 Testing
* Run Tests
bash
# Run all tests
* npm test

# Run tests with coverage
* npm run test:coverage

# Run specific test suite
* npm run test:integration
* npm run test:unit

# Watch mode
* npm run test:watch
* Test Categories
* Unit Tests: Models, utilities, middleware

- Integration Tests: API endpoints, database operations

- E2E Tests: Complete user flows

## 🧪 **Testing with Postman**

1. **Import the Postman collection**
   - Download the collection from `/postman/bus-ticket-api.postman_collection.json`
   - Import into Postman: `File → Import → Select file`

2. **Set up environment variables in Postman**
   ```json
   {
     "baseUrl": "http://localhost:5000/api",
     "adminToken": "your_admin_jwt_token",
     "userToken": "your_user_jwt_token",
     "bookingId": "",
     "tripId": ""
   }
   ```

3. **Testing workflow:**
   - Create variables in Postman environment
   - Run requests in sequence:
     1. Register admin/user
     2. Login to get tokens
     3. Test protected endpoints

---

## 📁 **Project Structure**

```bash
bus-ticket-api/
├── 📂 src/                          # Source Code
│   ├── 🚀 app.js                    # Express app configuration
│   ├── ⚙️ server.js                 # Server entry point
│   ├── 📂 config/                   # Configuration files
│   │   ├── 🗄️ database.js           # Database connection
│   │   └── 🔧 constants.js          # Application constants
│   ├── 📂 middleware/               # Custom middleware
│   │   ├── 🔐 auth.js               # Authentication middleware
│   │   ├── ❌ errorHandler.js       # Error handling middleware
│   │   └── ✅ validation.js         # Request validation
│   ├── 📂 models/                   # Database Models (Mongoose)
│   │   ├── 👤 user.model.js         # User model
│   │   ├── 🚌 bus.model.js          # Bus model
│   │   ├── 🗺️ trip.model.js         # Trip model
│   │   ├── 🎫 booking.model.js      # Booking model
│   │   └── 💳 payment.model.js      # Payment model
│   ├── 📂 controllers/              # Route Controllers
│   │   ├── 🔑 auth.controller.js    # Authentication controller
│   │   ├── 👤 user.controller.js    # User controller
│   │   ├── 🚌 bus.controller.js     # Bus controller
│   │   └── 🎫 booking.controller.js # Booking controller
│   ├── 📂 routes/                   # API Routes
│   │   ├── 🛣️ auth.routes.js        # Auth routes
│   │   ├── 🛣️ user.routes.js        # User routes
│   │   ├── 🛣️ bus.routes.js         # Bus routes
│   │   └── 🛣️ booking.routes.js     # Booking routes
│   ├── 📂 services/                 # Business Logic Layer
│   │   ├── ⚙️ auth.service.js       # Auth service
│   │   ├── ⚙️ booking.service.js    # Booking service
│   │   └── ⚙️ payment.service.js    # Payment service
│   ├── 📂 utils/                    # Utility Functions
│   │   ├── 🗝️ jwt.js                # JWT utilities
│   │   ├── ✅ validation.js         # Validation utilities
│   │   └── 🛠️ helpers.js            # Helper functions
│   └── 📂 sockets/                  # WebSocket handlers
│       └── 🔔 notifications.js      # Notification socket events
├── 📂 tests/                        # Test Suites
│   ├── 📂 unit/                     # Unit Tests
│   │   ├── ✅ user.model.test.js    # User model tests
│   │   ├── ✅ auth.service.test.js  # Auth service tests
│   │   └── ✅ utils.test.js         # Utility tests
│   ├── 📂 integration/              # Integration Tests
│   │   ├── 🔗 auth.test.js          # Auth integration tests
│   │   ├── 🔗 booking.test.js       # Booking integration tests
│   │   └── 🔗 payment.test.js       # Payment integration tests
│   └── ⚙️ setup.js                  # Test setup configuration
├── 📂 postman/                      # API Testing Files
│   ├── 📄 bus-ticket-api.postman_collection.json
│   └── 📄 bus-ticket-api.postman_environment.json
├── 📂 docker/                       # Docker Configuration
│   ├── 🐳 Dockerfile
│   └── 🐳 docker-compose.yml
├── 📄 .env.example                  # Environment variables template
├── 📄 .gitignore                    # Git ignore file
├── 📄 package.json                  # Dependencies and scripts
├── 📄 README.md                     # Project documentation
└── 📄 jest.config.js               # Jest configuration
```

## 🐳 **Docker Deployment**

### 1. Build Docker Image
```bash
docker build -t bus-ticket-api .
```

### 2. Run with Docker Compose
```bash
docker-compose up -d
```

### 3. Docker Compose Configuration
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - MONGO_URI=mongodb://mongodb:27017/busticket
      - REDIS_URL=redis://redis:6379
      - JWT_SECRET=${JWT_SECRET}
    depends_on:
      - mongodb
      - redis
    volumes:
      - ./logs:/app/logs

  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db
      - ./mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js:ro
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=admin123

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    command: redis-server --appendonly yes

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - app

volumes:
  mongodb_data:
  redis_data:
  app_logs:
```

### Git Workflow
1. Create feature branch from develop
2. Make changes with descriptive commits
3. Run tests before pushing
4. Create pull request for review
5. Merge after approval

### 📊 API Rate Limiting

|Endpoint Type	|Rate Limit	    |Window     |
|---------------|---------------|-----------|
|Authentication	| 10 requests	| 15 minutes|
|Public APIs	| 100 requests	| 1 minute  |
|User APIs	    | 60 requests	| 1 minute  |
|Admin APIs	    | 30 requests	| 1 minute  |

---

### 🔐 Security Best Practices
1. HTTPS: Always use HTTPS in production
2. CORS: Configure proper CORS settings
3. Helmet: Security headers middleware
4. Input Validation: Validate all user inputs
5. SQL Injection: Use parameterized queries
6. XSS Protection: Sanitize user inputs
7. Rate Limiting: Prevent brute force attacks
8. JWT Security: Store tokens securely

### 📱 Mobile App Integration
Flutter/Dart Example
```dart
import 'package:http/http.dart' as http;

class BusTicketAPI {
  final String baseUrl = "https://api.yourdomain.com/api";
  String? token;
  
  Future<void> login(String email, String password) async {
    final response = await http.post(
      Uri.parse('$baseUrl/auth/login'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        'email': email,
        'password': password,
      }),
    );
    
    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      token = data['token'];
      // Store token securely
    }
  }
  
  Future<List<Trip>> searchTrips(String from, String to, String date) async {
    final response = await http.get(
      Uri.parse('$baseUrl/trips/search?from=$from&to=$to&date=$date'),
      headers: {'Authorization': 'Bearer $token'},
    );
    
    // Parse response
  }
}
```

### 📞 Support & Contact
1. Issue Reporting
2. Check existing issues on GitHub
3. Create new issue with:
4. Description of the problem
5. Steps to reproduce
6. Expected vs actual behavior
7. Screenshots if applicable

### Contributing
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit pull request

### Contact
**Email: earbajsaria3@gmail.com**

### 🙏 Acknowledgments

+ MongoDB for the robust database
+ Open source contributors
+ Testing libraries maintainers

# 🚀 Happy Coding! Build amazing bus booking experiences!
