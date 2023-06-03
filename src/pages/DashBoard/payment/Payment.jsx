import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/UseCart";


// TODO Provide publish key
const stripePromise = loadStripe(import.meta.env.VITE_payment_Getway_pk);

const Payment = () => {
  const [cart]=useCart();
  const total = cart.reduce((sum,item)=>sum + item.price,0);
  const price = parseFloat(total.toFixed(2))


  return (
    <div>
      <SectionTitle
        subHeading={"Please Process"}
        heading={"Payment"}
      ></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
