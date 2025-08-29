# AWS Versioned Lambda

A simple AWS Lambda function that returns a list of products via API Gateway.

## Description

This Lambda function serves as an API endpoint that returns a JSON array of products including gaming consoles, smartphones, laptops, and audio devices. Each product contains information about id, name, price, currency, and category.

## Setup

### Prerequisites

- Node.js 22+
- pnpm
- AWS CLI configured with appropriate permissions
- AWS Lambda function named `aws-versioned-lambda` already created

### Installation

```bash
pnpm install
```

## Build & Deploy

### Build the function
```bash
pnpm run build
```

### Create deployment package
```bash
pnpm run zip
```

### Update Lambda function
```bash
pnpm run update
```

### Deploy (build + zip + update)
```bash
pnpm run deploy
```

### Clean up
```bash
pnpm run clean
```

## Project Structure

- `src/index.ts` - Main Lambda function handler
- `dist/` - Compiled JavaScript output
- `lambda.zip` - Deployment package
- `tsconfig.json` - TypeScript configuration

## API Response

The Lambda function returns a JSON array of products:

```json
[
  {
    "id": 1,
    "name": "Nintendo Wii",
    "price": "299.99",
    "currency": "USD",
    "category": "Gaming Console"
  },
  ...
]
```

## Technologies

- TypeScript
- AWS Lambda
- esbuild for bundling
- pnpm for package management