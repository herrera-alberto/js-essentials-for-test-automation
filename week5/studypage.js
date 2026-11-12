"use strict";

const shoppingCart = {
  owner: "Alice",
  discountRate: 0.10, // 10% off coupon
  items: [
    { name: "Laptop", price: 1000 },
    { name: "Mouse",  price: 50 },
    { name: "Keycap", price: 20 }
  ],

  // METHOD 1: Regular Function
  // Why? So it can CREATE its own 'this' context pointing directly to shoppingCart.
  calculateTotal: function() {
    let subtotal = 0;

    // METHOD 2: Arrow Function inside .forEach()
    // Why? So it has NO BINDING of its own and INHERITS 'this' from calculateTotal.
    this.items.forEach((item) => {
      console.log(`${this.owner}'s cart has: ${item.name} ($${item.price})`);
      subtotal += item.price;
    });

    // Calculate final price using the discount rate
    const savings = subtotal * this.discountRate;
    const finalTotal = subtotal - savings;

    return finalTotal;
  }
};

// --- RUNNING THE CODE ---
const totalToPay = shoppingCart.calculateTotal();
console.log(`Total after discount: $${totalToPay}`);