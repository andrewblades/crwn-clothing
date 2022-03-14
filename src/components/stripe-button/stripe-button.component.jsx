import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J8VQwHC1RszmTAcaqlAsMDGZ45kEbF66RfgFXpoUIbXLliImq53L3U8Kfja43KBr9QQXLRwdqJG51HgtjYDB1ZF00wkk7Zwew'
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckout 
        label= 'Pay Now'
        name = 'CRWN Clothing'
        billingAddress
        shippingAddress
        image = ""
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panel= 'Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton