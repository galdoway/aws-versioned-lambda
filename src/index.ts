import { Context, APIGatewayProxyCallback, APIGatewayEvent, APIGatewayProxyCallbackV2 } from 'aws-lambda';


const products = [
  {
    id: 1, // <- New property
    name: "Nintendo Wii",
    price: "299.99",
    currency: "USD",
    category: "Gaming Console", // <- New property
  },
  {
    id: 2,
    name: "PlayStation 5",
    price: "499.99",
    currency: "USD",
    category: "Gaming Console",
  },
  {
    id: 3,
    name: "Xbox Series X",
    price: "499.99",
    currency: "USD",
    category: "Gaming Console",
  },
  {
    id: 4,
    name: "iPhone 16 Pro",
    price: "1099.00",
    currency: "USD",
    category: "Smartphone",
  },
  {
    id: 5,
    name: "MacBook Air M3",
    price: "1299.00",
    currency: "USD",
    category: "Laptop",
  },
  {
    id: 6,
    name: "Sony WH-1000XM5 Headphones",
    price: "399.99",
    currency: "USD",
    category: "Audio",
  }
];

export const handler = (event: APIGatewayEvent, context: Context, callback: APIGatewayProxyCallbackV2): void => {

  callback(null, {
    statusCode: 200,
    body: JSON.stringify(products),
  });
};
