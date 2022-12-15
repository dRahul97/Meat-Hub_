import React from "react";
import { useToast } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";

const Cart = () => {
  const toast = useToast();
  //   const positions = ["top"];
  return (
    <div style={{ display: "flex" }}>
      <img
        src="https://www.licious.in/img/rebranding/cart_icon.svg"
        alt="Cart"
      />
      <Wrap>
        <WrapItem>
          <div
            style={{ padding: "10px", cursor: "pointer", fontSize: "14px" }}
            onClick={() =>
              toast({
                title: `Cart is Empty`,
                position: "top",
                isClosable: true,
              })
            }
          >
            Cart
          </div>
        </WrapItem>
      </Wrap>
    </div>
  );
};

// function PositionExample() {
//   const toast = useToast();
//   const positions = [
//     "top",
//     "top-right",
//     "top-left",
//     "bottom",
//     "bottom-right",
//     "bottom-left",
//   ];
// }
export default Cart;
