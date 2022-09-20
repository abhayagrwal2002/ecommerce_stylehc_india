import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe("pk_test_51Ldt6jSGaIAxUNc5glpUgSKcoBOMvCZjR5f3fLNNwtZks1e0earF82USApDcyQKIuG6dX1Bbh5ZOrKlxGt1ym61900PYYC0Gmq");
  }

  // console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  return stripePromise;
}

export default getStripe;