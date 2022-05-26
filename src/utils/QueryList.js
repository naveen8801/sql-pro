export const getQueryList = () => {
  return [
    `SELECT * FROM customers;`,
    `SELECT address, city FROM customers;`,
    `SELECT DISTINCT country FROM customers;`,
    `SELECT COUNT(DISTINCT country) FROM Customers;`,
    `SELECT * FROM Customers
    WHERE Country='Germany' AND City='Berlin';`,
    `Custom Query`,
  ];
};
