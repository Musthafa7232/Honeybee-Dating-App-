export const stripePayment = async (stripe, email, price,pack) => {
    const session = await stripe.checkout.sessions.create({
      customer_email: `${email}`,
      submit_type: 'pay',
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: `${price}`,
          quantity:1
        },
      ],
      mode: 'payment',
      success_url: `http://localhost:5173/HoneyVip?pack=${pack}`, 
      cancel_url: `http://localhost:5173/HoneyVip?canceled=true`, 
    });
    return session;
  };
  