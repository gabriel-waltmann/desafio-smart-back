# Desafio Smart Back

A RESTful API built with Node.js, Express, TypeScript, and PostgreSQL for product management.

## 🎯 Project Overview

This is a backend API for managing products with full CRUD operations. The application provides endpoints to create, read, update, and delete products, with support for filtering and pagination.

## 🛠 Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript
- **PostgreSQL** - Relational database
- **Sequelize** - ORM for database operations
- **Docker** - Container platform for database
- **pnpm** - Fast, disk space efficient package manager

## 📁 Project Structure

```
desafio-smart-back/
├── config/              # Configuration files
│   └── config.js        # Sequelize configuration
├── migrations/          # Database migrations
├── seeders/             # Database seeders
├── src/
│   ├── index.ts         # Application entry point
│   ├── controllers/     # Request handlers
│   │   └── ProductController.ts
│   ├── db/              # Database configuration
│   │   ├── config.ts    # Database connection config
│   │   ├── int.ts       # Database initialization
│   │   └── models/      # Sequelize models
│   │       └── ProductModel.ts
│   ├── entities/        # TypeScript interfaces
│   │   └── ProductEntity.ts
│   ├── routes/          # API routes
│   │   ├── index.ts     # Main router
│   │   └── ProductRoutes.ts
│   └── services/        # Business logic
│       └── ProductService.ts
├── docker-compose.yml   # Docker configuration
├── env.example          # Environment variables template
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
└── README.md
```

## 📦 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v23 or higher)
- **pnpm** (v10.19.0 or higher)
- **Docker** and **Docker Compose** (for running PostgreSQL)

## 🚀 Installation

1. **Clone the repository**

```bash
git clone https://github.com/gabriel-waltmann/desafio-smart-back.git
cd desafio-smart-back
```

2. **Install dependencies**

```bash
pnpm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```bash
cp env.example .env
```

## ⚙️ Configuration

### Database Configuration

The PostgreSQL database is configured via Docker Compose with the following defaults:

- **Host:** localhost
- **Port:** 5432
- **Database:** db
- **User:** postgres
- **Password:** 123456

You can modify these settings in `docker-compose.yml`.

## 🏃 Running the Application

### 1. Start the Database

Start the PostgreSQL container using Docker Compose:

```bash
docker-compose up -d
```

### 2. Run Migrations (if available)

```bash
pnpm sequelize-cli db:migrate
```

### 3. Start the Development Server

```bash
pnpm dev
```

The API will be available at `http://localhost:3000`

### 4. Start the Production Server

Build and start:

```bash
pnpm start
```

## 📚 API Routes

### Base URL

```
http://localhost:3000
```

### Health Check

#### GET `/`

Check if the API is running.

**Response:**
```json
{
  "message": "Api is running on port 3000!"
}
```

---

### Products

All product routes are prefixed with `/product`

#### 1. Get All Products

**GET** `/product`

Retrieve all products with optional filtering.

**Query Parameters:**
- `name` (optional): Filter by product name
- `category` (optional): Filter by category
- `minPrice` (optional): Minimum price filter
- `maxPrice` (optional): Maximum price filter

**Example Request:**
```bash
GET /product?minPrice=10&maxPrice=100
```

**Success Response (200):**
```json
{
  "products": [
    {
      "id": 1,
      "name": "Product Name",
      "price": 99.99,
      "category": "electronics",
      "estoque": 50,
      "discount": 10.0,
      "createdAt": "2025-10-26T00:00:00.000Z",
      "updatedAt": "2025-10-26T00:00:00.000Z"
    }
  ]
}
```

---

#### 2. Get Product by ID

**GET** `/product/:id`

Retrieve a specific product by its ID.

**URL Parameters:**
- `id` (required): Product ID

**Example Request:**
```bash
GET /product/1
```

**Success Response (200):**
```json
{
  "product": {
    "id": 1,
    "name": "Product Name",
    "price": 99.99,
    "category": "electronics",
    "estoque": 50,
    "discount": 10.0,
    "createdAt": "2025-10-26T00:00:00.000Z",
    "updatedAt": "2025-10-26T00:00:00.000Z"
  }
}
```

**Error Response (500):**
```json
{
  "error": "Product not found!"
}
```

---

#### 3. Create Product

**POST** `/product`

Create a new product.

**Request Body:**
```json
{
  "name": "Product Name",
  "price": 99.99,
  "category": "electronics",
  "estoque": 50,
  "discount": 10.0
}
```

**Required Fields:**
- `name` (string): Product name
- `price` (number): Product price
- `category` (string): Product category
- `estoque` (number): Stock quantity
- `discount` (number): Discount percentage

**Success Response (201):**
```json
{
  "product": {
    "id": 1,
    "name": "Product Name",
    "price": 99.99,
    "category": "electronics",
    "estoque": 50,
    "discount": 10.0,
    "createdAt": "2025-10-26T00:00:00.000Z",
    "updatedAt": "2025-10-26T00:00:00.000Z"
  }
}
```

**Error Response (500):**
```json
{
  "error": "Name is required!"
}
```

---

#### 4. Update Product

**PUT** `/product/:id`

Update an existing product.

**URL Parameters:**
- `id` (required): Product ID

**Request Body:**
```json
{
  "name": "Updated Product Name",
  "price": 89.99,
  "category": "electronics",
  "estoque": 45,
  "discount": 15.0
}
```

**Required Fields:**
- `name` (string): Product name
- `price` (number): Product price
- `category` (string): Product category
- `estoque` (number): Stock quantity
- `discount` (number): Discount percentage

**Success Response (201):**
```json
{
  "product": {
    "id": 1,
    "name": "Updated Product Name",
    "price": 89.99,
    "category": "electronics",
    "estoque": 45,
    "discount": 15.0,
    "createdAt": "2025-10-26T00:00:00.000Z",
    "updatedAt": "2025-10-26T00:00:00.000Z"
  }
}
```

**Error Response (500):**
```json
{
  "error": "Product not found!"
}
```

---

#### 5. Delete Product

**DELETE** `/product/:id`

Delete a product by ID.

**URL Parameters:**
- `id` (required): Product ID

**Example Request:**
```bash
DELETE /product/1
```

**Success Response (200):**
```json
{
  "message": "Product deleted"
}
```

**Error Response (500):**
```json
{
  "error": "Product id is required!"
}
```

---

## 🗄️ Database

### Product Schema

```typescript
{
  id: number,           // Auto-generated primary key
  name: string,         // Product name
  price: number,        // Product price
  category: string,     // Product category
  estoque: number,      // Stock quantity
  discount: number,     // Discount percentage
  createdAt: Date,      // Creation timestamp
  updatedAt: Date,      // Last update timestamp
  deletedAt: Date       // Soft delete timestamp
}
```

### Stopping the Database

To stop the PostgreSQL container:

```bash
docker-compose down
```

To stop and remove all data:

```bash
docker-compose down -v
```

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

Gabriel Waltmann
