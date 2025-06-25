# Express Products API

## How to Run
```bash
npm install
cp .env.example .env
node server.js
```

## Endpoints

- `GET /api/products` – List all (supports `?category`, `?search`, `?page`, `?limit`)
- `GET /api/products/:id` – Get one by ID
- `POST /api/products` – Create (requires API key + validation)
- `PUT /api/products/:id` – Update
- `DELETE /api/products/:id` – Delete

### Headers

```
x-api-key: 123456
Content-Type: application/json
```

### Sample Request

```json
{
  "name": "iPhone 15",
  "description": "Latest model",
  "price": 1199,
  "category": "electronics",
  "inStock": true
}
```