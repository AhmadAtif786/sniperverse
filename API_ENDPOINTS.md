# API Endpoints for Snipe History & Analytics

## Required Backend Endpoints

### 1. Get Snipe History
**Endpoint:** `GET /api/v1/user/snipe-history`
**Headers:** `Authorization: Bearer {token}`
**Query Parameters:**
- `user_id` (required): User ID
- `limit` (optional): Number of records to return (default: 50)
- `offset` (optional): Number of records to skip (default: 0)

**Expected Response:**
```json
{
  "snipe_history": [
    {
      "id": 1,
      "user_id": 123,
      "token_address": "So11111111111111111111111111111111111111112",
      "token_name": "Sample Token",
      "token_symbol": "SMPL",
      "amount_sol": 1.5,
      "slippage": 5,
      "result": "success",
      "transaction_hash": "5J7X...",
      "error_message": null,
      "created_at": "2024-01-15T10:30:00Z"
    }
  ],
  "total": 100,
  "limit": 50,
  "offset": 0
}
```

### 2. Get Snipe Analytics
**Endpoint:** `GET /api/v1/user/snipe-analytics`
**Headers:** `Authorization: Bearer {token}`
**Query Parameters:**
- `user_id` (required): User ID

**Expected Response:**
```json
{
  "total_snipes": 150,
  "successful_snipes": 120,
  "failed_snipes": 30,
  "success_rate": 80.0,
  "total_volume": 45.5,
  "successful_volume": 38.2,
  "average_slippage": 3.2,
  "unique_tokens": 25,
  "pnl_data": [
    {
      "date": "2024-01-15",
      "pnl": 0.5,
      "volume": 2.5
    }
  ],
  "token_distribution": [
    {
      "token_address": "So11111111111111111111111111111111111111112",
      "token_symbol": "SMPL",
      "snipe_count": 10,
      "total_volume": 5.2
    }
  ]
}
```

## Database Schema (SnipeHistory)

```python
@dataclass
class SnipeHistory:
    id: int
    user_id: int
    token_address: str
    token_name: str
    token_symbol: str
    amount_sol: float
    slippage: int
    result: str
    transaction_hash: str = None
    error_message: str = None
    created_at: str = None
```

## Frontend Data Expectations

The frontend expects the following data structure from the API:

1. **Snipe History Array**: List of snipe transactions with all fields from the schema
2. **Analytics Object**: Aggregated statistics and PnL data
3. **Token Distribution**: Breakdown of snipes by token
4. **Time-based Filtering**: Support for filtering by date ranges (1d, 7d, 30d, 90d, all)

## Authentication

All endpoints require Bearer token authentication in the Authorization header.

## Error Handling

Expected error responses:
```json
{
  "message": "Error description",
  "status": "error"
}
```

## Rate Limiting

Consider implementing rate limiting for these endpoints to prevent abuse.
