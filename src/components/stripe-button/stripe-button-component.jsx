import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {
    const priceInCents = price * 100;
    const publishableKey = 'pk_test_mvNT6e8jnS0EnXx2a5urVoRf00rKyN4XuY';

    const handleToken = token =>{
        console.log(token);
        alert('congratulations payment successfull');
    }
    
    return(
        <StripeCheckout 
            label='Pay Now'
            panelLabel='Pay Now'
            name='QUEEN BRAND Ltd.'
            decsription={`Total Price Is $${price}`}
            shippingAddress
            billingAddress
            amount={priceInCents}
            stripeKey={publishableKey}
            token={handleToken}
        />
    )
}

export default StripeButton;