# 🧮 Math API

A simple TypeScript + Express API that provides basic math operations with input validation using Joi. Includes unit tests for services and integration tests for routes using Jest and Supertest.

---

## 📦 Features

- TypeScript + Express server
- Math operations: addition, subtraction, multiplication, division
- Input validation with Joi
- Clear separation of concerns: `controllers`, `services`, `routes`, `middlewares`, `validators`
- Error handling with custom HTTP status codes
- Unit tests (Jest)
- Integration tests for full API
- Docker support

---

## 🛠️ Project Structure

```
src/
├── middlewares/
│   └── error.middleware.ts
├── controllers/
│   └── math.controller.ts
├── routes/
│   └── math.routes.ts
├── services/
│   └── math.service.ts
├── validators/
│   └── math.validation.ts
├── tests/
│   ├── integration/
│   │   └── math.api.test.ts
│   └── unit/
│       └── math.service.test.ts
├── index.ts
├── app.ts
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Server runs on [http://localhost:3000](http://localhost:3000)

---

## 🧪 Running Tests

```bash
npm run test
```

Includes:
- Unit tests for service logic
- Integration tests for controller endpoints

---

## 🐳 Docker Support

Build and run:

```bash
docker build -t math-api .
docker run -p 3000:3000 math-api
```

---

## 📬 API Endpoints

All endpoints expect `a` and `b` as numbers in the body:

```
POST /api/math/add
POST /api/math/subtract
POST /api/math/multiply
POST /api/math/divide
```

### Example Request:
```json
POST /api/math/add
{
  "a": 5,
  "b": 3
}
```

### Example Response:
```json
{
  "result": 8
}
```

---

## 📋 Validation & Error Handling

- Uses Joi to validate `a` and `b` are required and must be numbers.
- Returns `400 Bad Request` if validation fails.
- Other internal errors return `500 Internal Server Error`.

---

## 🧑‍💻 Author

Created by Dor Mor.