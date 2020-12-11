import StripeCheckout from 'react-stripe-checkout';

const MY_PUBLISHABLE_STRIPEKEY = 'pk_test_51Hx61WGN0gwIiqs1CPPLoxLMtOPeyvSgQfpdniY2yqU4tTqWUdwsyIRwfpwx4y6XT4shyONc8yQaZGUrutsDTQav00ncvv8nSj'

const StripeButton = ({price}) => {
    const token = token => {
        console.log(token);
        alert('Payment success');
    }

    const priceForStripe = price * 100;

    return (
        <StripeCheckout 
            label="Buy things"
            name="CRWN-Clothing"
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            stripeKey={MY_PUBLISHABLE_STRIPEKEY}
            token={token}
            amount={priceForStripe}
        />
    )
};

export default StripeButton;