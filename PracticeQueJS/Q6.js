// Sequential async data fetching
// Using async/await to:
// Get a user
// Fetch that user’s orders
// Fetch details for an order
// Each step waits for the previous one before continuing, then logs the final result.

async function getUser() {
  return { id: 1, name: "Ram" };
}

async function getOrders(userId) {
  return [
    { id: 101, userId, total: 200 },
    { id: 102, userId, total: 150 }
  ]
}

async function getOrderDetails(orderId) {
  return {orderId,items: ["Shoes", "Hat"],status: "Delivered"
  }
}

async function fetchDataSequentially() {
  const user = await getUser()             
  console.log(user)

  const orders = await getOrders(user.id);      
  console.log(orders)

  const orderDetails = await getOrderDetails(orders[0].id); 
  console.log(orderDetails)

  console.log("Final Result:", { user, orders, orderDetails });
}

fetchDataSequentially()
