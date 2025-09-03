# 💰 Cash Register - FreeCodeCamp

This is the **Cash Register** project from the **JavaScript Algorithms and Data Structures** curriculum on [FreeCodeCamp](https://www.freecodecamp.org/).

## 📌 Objective

Build a function that simulates a **cash register** and returns the change due depending on:
- the purchase price,
- the amount of cash given by the customer,
- and the available cash in the drawer.

The function should return an object with:
- `status`: `"OPEN"`, `"CLOSED"`, or `"INSUFFICIENT_FUNDS"`,
- `change`: an array of currency units to be returned.

## 🧾 Function Requirements

The function must have:



- `price`: purchase price  
- `cash`: cash provided by the customer  
- `cid`: cash-in-drawer, a 2D array listing the currency units and the amount available  

Example of `cid`:
```javascript
[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.10],
  ["QUARTER", 4.25],
  ["ONE", 90.00],
  ["FIVE", 55.00],
  ["TEN", 20.00],
  ["TWENTY", 60.00],
  ["ONE HUNDRED", 100.00]
]
```

## ✅ Expected Output

The function should return an object like this:

```javascript
{
  status: "OPEN",
  change: [["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]
}
```

Possible statuses:
- **OPEN** → return change with remaining money left in drawer  
- **CLOSED** → return all money in drawer (exact change, drawer empty after transaction)  
- **INSUFFICIENT_FUNDS** → not enough money in drawer to give change  

## 🚀 How to Run

1. Clone this repository
   ```bash
   git clone https://github.com/your-username/cash-register.git
   ```
2. Open the project folder
3. Run the code with Node.js or directly in the browser console:
   ```bash
   npm start
   ```

## 🏆 FreeCodeCamp Project

This project is part of the **JavaScript Algorithms and Data Structures Certification**.  
It demonstrates skills in:
- working with arrays and objects,
- Learning intermediate OOP,
- implementing algorithms with conditionals and loops.
