import React from "react";
import Stripe from "react-stripe-checkout";
import axios from "axios";
function payment() {
async function handleToken(token) {
console.log(token);
await axios.post("http://localhost:8080/api/payment/charge", "", {        
  
headers: {
  token: token.id,
  amount: 1000,
},}).then(() => {
   alert("Payment Success");
   }).catch((error) => {
   alert(error);
   });
}
return (

<div className="Payment">

<Stripe
stripeKey="pk_test_51Mm7aEHKILrkPIJDn8VWqFuyWSYXUL3k8JrkQIYyIsBpsxzJ9xgwi0T7bQZYgqugdJC0dKWkbYYbFpzHmGDQxiTD003c7mSDY2"
token={handleToken}
/>

</div>
);
}
export default payment;
