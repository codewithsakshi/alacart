import React from "react"
import { Button, Text, Spacer } from "@nextui-org/react"
import {FaMinus} from "react-icons/fa"

export const CartTotal = () => {

    return(
        <div className="cart_total">
            <div>
        <Text  size={35}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
        >Cart Totals</Text>
        <div className="totalcart_text">
            <p>Subtotal</p>
            <p>300</p>
        </div>
        <div  className="totalcart_text">
            <p>Total Discount</p>
            <FaMinus className="text-white" />
            <p>100</p>
        </div>
        <div  className="total_orderprice_sec totalcart_text">
            <p>Total Order Price</p>
            <p>200</p>
        </div>
        </div>
        <div>
            <Spacer y={2}></Spacer>
        <Text  size={20}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
          }}
          weight="bold"
          >Shipping</Text>
        <div  className="totalcart_text">
            <p>Next Day</p>
            <p>11</p>
        </div>
        <div  className="totalcart_text">
            <p>Shipping To India</p>
            <FaMinus className="text-white" />
        </div>
        <div  className="totalcart_text">
            <Text  size={20}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
        >Order Total</Text>
            <p>211</p>
        </div>
        </div>
        <Spacer y={1}></Spacer>
        <Button size="lg" className="checkout_btn">GO TO CHECKOUT </Button>
        </div>
    )
}