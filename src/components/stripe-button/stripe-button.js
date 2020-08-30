import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HLdwGK5aZAR40vbQinn5dJrR7CeLbeYmmXxH06xxQ6GM4Rd2oopBgunrQ3Qt7cyYy6SS6LHVnSnufPaPUWPmosM00ZVJEBScp';

    const onToken = (token) =>{
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CLICK_FASHION'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;