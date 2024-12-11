# PoolTogether Prize Pool Analytics

Analytics dashboard for PoolTogether prize pool contributions across multiple chains.

## Features

- Track contributions across Ethereum, Optimism, Arbitrum, and Base
- Filter by time range (24h, 7d, 90d)
- View contribution amounts and frequencies by vault
- Export data to CSV
- Real-time updates with caching

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Add your Alchemy API keys to `.env`
4. Start the development server: `npm start`

## Environment Variables

Create a `.env` file in the root directory and add:

```
REACT_APP_ALCHEMY_KEY_ETHEREUM=your_ethereum_key
REACT_APP_ALCHEMY_KEY_OPTIMISM=your_optimism_key
REACT_APP_ALCHEMY_KEY_ARBITRUM=your_arbitrum_key
REACT_APP_ALCHEMY_KEY_BASE=your_base_key
```

## License

MIT