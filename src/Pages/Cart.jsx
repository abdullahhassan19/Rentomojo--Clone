import React from "react";

import {
  SimpleGrid,
  Box,
  Text,
  Img,
  Button,
} from "@chakra-ui/react";

const Cart = () => {

return (
    <>
    <Box style={{ width: "100%", backgroundColor: "#f5f7fa", padding: "5%" }}>
      <SimpleGrid
        style={{ width: "90%", margin: "auto", marginTop: "4%", gap: "2%" }}
        columns={{
          sm: 1,
          md: 2,
          lg: 2,
          xl: 2,
          base: 1,
        }}
      >
        <Box
          height={{
            sm: "600px",
            md: "550px",
            lg: "500px",
            xl: "500px",
            base: "450px",
          }}
          style={{
            padding: "10%",
            borderRadius: "8px",
            backgroundColor: "white",
            width: "110%",
          }}
        >
          <Box style={{ display: "flex" }}>
            <Img
              width="7%"
              src="https://www.rentomojo.com/public/images/radical-cart/icons/summary__icon.svg"
            />
            <Text
              style={{ fontWeight: "bold" }}
              fontSize={{
                sm: "15px",
                md: "18px",
                lg: "19px",
                xl: "20px",
                base: "14px",
              }}
            >
              Order Sumarry
            </Text>
          </Box>
          <Box style={{ display: "flex", marginTop: "3%" }}>
            <Text
              style={{ fontWeight: "bold" }}
              fontSize={{
                sm: "15px",
                md: "18px",
                lg: "19px",
                xl: "20px",
                base: "14px",
              }}
            >
              Total Products :0
      
            </Text>
          </Box>
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 2, xl: 2, base: 1 }}
            style={{ marginTop: "4%", justifyContent: "space-evenly" }}
          >
            <Box
              style={{
                border: "1px solid #e2eaf0",
                width: "90%",
                padding: "2%",
                borderRadius: "8px",
                marginTop: "2%",
              }}
            >
              <Text
                style={{}}
                fontSize={{
                  sm: "15px",
                  md: "18px",
                  lg: "19px",
                  xl: "20px",
                  base: "14px",
                }}
              >
                Payable Now
              </Text>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "3%",
                }}
              >
                <Text
                  style={{}}
                  fontSize={{
                    sm: "14px",
                    md: "17px",
                    lg: "18px",
                    xl: "19px",
                    base: "12px",
                  }}
                >
                  Refundable Deposit
                </Text>
                <Text
                  style={{ fontWeight: "bold" }}
                  fontSize={{
                    sm: "13px",
                    md: "16px",
                    lg: "17px",
                    xl: "18px",
                    base: "12px",
                  }}
                >
                  100
                </Text>
              </Box>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "3%",
                }}
              >
                <Text
                  style={{}}
                  fontSize={{
                    sm: "14px",
                    md: "17px",
                    lg: "18px",
                    xl: "18px",
                    base: "12px",
                  }}
                >
                  Delivery Charges
                </Text>
                <Text
                  style={{ fontWeight: "bold" }}
                  fontSize={{
                    sm: "13px",
                    md: "16px",
                    lg: "17px",
                    xl: "18px",
                    base: "12px",
                  }}
                >
                  $100
                </Text>
              </Box>
            </Box>
            <Box
              style={{
                border: "1px solid #e2eaf0",
                width: "90%",
                padding: "2%",
                borderRadius: "8px",
                marginTop: "2%",
              }}
            >
              <Text
                style={{}}
                fontSize={{
                  sm: "15px",
                  md: "18px",
                  lg: "19px",
                  xl: "20px",
                  base: "14px",
                }}
              >
                Monthly payable
              </Text>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "3%",
                }}
              >
                <Text
                  style={{}}
                  fontSize={{
                    sm: "14px",
                    md: "17px",
                    lg: "18px",
                    xl: "19px",
                    base: "12px",
                  }}
                >
                  Products Rent
                </Text>
                <Text
                  style={{ fontWeight: "bold" }}
                  fontSize={{
                    sm: "13px",
                    md: "16px",
                    lg: "17px",
                    xl: "18px",
                    base: "12px",
                  }}
                >
                    0
                 
                </Text>
              </Box>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "3%",
                }}
              >
                <Text
                  style={{}}
                  fontSize={{
                    sm: "14px",
                    md: "17px",
                    lg: "18px",
                    xl: "18px",
                    base: "12px",
                  }}
                >
                  GST
                </Text>
                <Text
                  style={{ fontWeight: "bold" }}
                  fontSize={{
                    sm: "13px",
                    md: "16px",
                    lg: "17px",
                    xl: "18px",
                    base: "12px",
                  }}
                >
                  $100
                </Text>
              </Box>
              <hr />
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: "3%",
                }}
              >
                <Text
                  style={{}}
                  fontSize={{
                    sm: "14px",
                    md: "17px",
                    lg: "18px",
                    xl: "18px",
                    base: "12px",
                  }}
                >
                  Total Monthly Rent
                </Text>
                <Text
                  style={{ fontWeight: "bold" }}
                  fontSize={{
                    sm: "13px",
                    md: "16px",
                    lg: "17px",
                    xl: "18px",
                    base: "12px",
                  }}
                >
                    0
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
          <Box style={{ width: "80%", margin: "auto", marginTop: "8%" }}>
            <Button
           
              id="buy"
              style={{
                backgroundColor: "#dc3226",
                color: "white",
                width: "100%",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Text
                  style={{}}
                  fontSize={{
                    sm: "14px",
                    md: "17px",
                    lg: "18px",
                    xl: "18px",
                    base: "12px",
                  }}
                >
             0
                </Text>
                <Text
                  style={{}}
                  fontSize={{
                    sm: "13px",
                    md: "16px",
                    lg: "17px",
                    xl: "18px",
                    base: "12px",
                  }}
                >
                  Proceed
                </Text>
              </Box>
            </Button>
          </Box>
        </Box>

        <Box style={{ height: "100%", borderRadius: "8px", width: "90%" }}>
          <Box
            style={{
              display: "flex",
              borderRadius: "8px",
              backgroundColor: "white",
              width: "80%",
              margin: "auto",
              justifyContent: "space-evenly",
              padding: "3%",
            }}
          >
            <Img
              width="10%"
              src="https://www.rentomojo.com/public/images/radical-cart/icons/coupon__icon.svg"
            />
            <Text
              fontSize={{
                sm: "15px",
                md: "17px",
                lg: "18px",
                xl: "20px",
                base: "13px",
              }}
            >
              Have a coupon code?
            </Text>
            <Img
              width="10%"
              src="https://www.rentomojo.com/public/images/radical-cart/icons/right__chevron.svg"
            />
          </Box>

          <Box
            style={{
              borderRadius: "8px",
              backgroundColor: "white",
              width: "80%",
              margin: "auto",
              marginTop: "5%",
              padding: "3%",
            }}
          >
            <Box
              style={{
                width: "80%",
                textAlign: "center",
                margin: "auto",
                backgroundColor: "#dc3226",
                color: "white",
                borderRadius: "5px",
              }}
            >
              <Text
                fontSize={{
                  sm: "13px",
                  md: "14px",
                  lg: "15px",
                  xl: "16px",
                  base: "12px",
                }}
              >
                Only few left in stock. Hurry up!
              </Text>
            </Box>
          </Box>

          
        </Box>
      </SimpleGrid>
    </Box>
    
    </>
)
    

};

export default Cart;