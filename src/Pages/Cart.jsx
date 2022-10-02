import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Img,
  SimpleGrid,
  Box,
  Text,
  useToast,
  Checkbox,
} from "@chakra-ui/react";










const Cart = () => {
  
  const { isOpen, onOpen, onClose } = useDisclosure()


return (
    <>


<Modal onClose={onClose} isOpen={isOpen}    size={{sm:"sm",md: "md",lg: 'lg',base : "xs"}}  isCentered>
          <ModalOverlay />
          <ModalContent  pos="absolute"  right="0"      >
            <ModalHeader  style={{padding:"24px 50px"}}>Choose payment mode </ModalHeader>
            <ModalCloseButton style={{margin:"15px 80px"}}  />
            <ModalBody >
             <Box   style={{
              backgroundColor: "#f5f7fa",
              borderRadius:"10%",
              padding:'10%',
             }}>
              <Text style={{fontWeight:"330"}} fontSize={{
                 sm: "12px",
                 md: "13px",
                 lg: "15px",
                 xl: "15px",
                 base : "15px"
              }}>Total Amount Payable</Text>
              <Text style={{fontWeight:"bolder"}} fontSize={{
                 sm: "16px",
                 md: "18px",
                 lg: "20px",
                 xl: "22px",
                 base : "14px"
              }}>₹ {3058}</Text>
              <Checkbox style={{fontWeight:"normal",margin:"20px 0px"}}>  <Text style={{fontWeight:"normal"}} fontSize={{
                 sm: "10px",
                 md: "12px",
                 lg: "13px",
                 xl: "13px",
                 base : "14px"
              }}>I hereby agree to RentoMojo <span style={{color:"teal"}}>terms and conditions.</span> </Text></Checkbox>
             
             
              <Text style={{fontWeight:"500"}} fontSize={{
                 sm: "12px",
                 md: "13px",
                 lg: "14px",
                 xl: "14px",
                 base : "15px"
              }}>Net Banking, Debit Card & Credit Card</Text> 
                <Box
              style={{
                width: "100%",
                padding: "2%",
                borderRadius: "8px",
                margin: "3% 0",
                backgroundColor:"white"
              }}
            >
              <Box
                style={{
                  display: "flex",
                  padding:"8px 5%",
                  gap:"10px"
                  // marginTop: "3%",
                }}
              >
                <Img width="25%" src="https://www.rentomojo.com/public/images/cart/payment/razorpay.png"></Img>
                <Text
                  style={{fontWeight:"330"}}
                  fontSize={{
                    sm: "10px",
                    md: "12px",
                    lg: "13px",
                    xl: "13px",
                    base : "13px"
                  }}
                >
                 Credit card / Debit card / Netbanking
                </Text>
                <Text
                  style={{fontWeight:"bold"}}
                  fontSize={{
                    sm: "12px",
                    md: "13px",
                    lg: "15px",
                    xl: "20px",
                    base : "15px"
                  }}
                >
                 {`>`}
                </Text>
              </Box>

             
              <hr />
              <Box
                style={{
                  display: "flex",
                  gap:"10px",
                  paddingLeft:"10px",
                  margin:"2%"
                }}
              >
                <Img width="3.5%" src="https://www.rentomojo.com/public/images/radical-cart/icons/red__bg-info-icon.svg"></Img>
                <Text
                  style={{fontWeight:"330"}}
                  fontSize={{
                    sm: "12px",
                    md: "13px",
                    lg: "10px",
                    xl: "10px",
                    base : "15px"
                  }}
                >
               CRED: Up to Rs.100/- cashback. T&C Apply.
                </Text>
              </Box>
              </Box>
            

              <Text style={{fontWeight:"500",marginTop:"%"}} fontSize={{
                 sm: "12px",
                 md: "13px",
                 lg: "14px",
                 xl: "14px",
                 base : "15px"
              }}>Wallets</Text> 
                <Box
              style={{
                width: "100%",
                padding: "2%",
                borderRadius: "8px",
                marginTop: "3%",
                backgroundColor:"white"
              }}
            >
              <Box
                style={{
                  display: "flex",
                  padding:"8px 5%",
                  gap:"10px",
                  justifyContent:"space-between"
                  // marginTop: "3%",
                }}
              >
                <Img width="23%" src="https://www.rentomojo.com/public/images/cart/payment/amazon-pay.png"></Img>
                <Text
                  style={{fontWeight:"330"}}
                  fontSize={{
                    sm: "10px",
                    md: "12px",
                    lg: "13px",
                    xl: "13px",
                    base : "13px"
                  }}
                >
                Pay via Amazon Pay
                </Text>
                <Text
                  style={{fontWeight:"bold"}}
                  fontSize={{
                    sm: "12px",
                    md: "13px",
                    lg: "15px",
                    xl: "20px",
                    base : "15px"
                  }}
                >
                 {`>`}
                </Text>
              </Box>
              </Box>

              
                <Box
              style={{
                width: "100%",
                padding: "2%",
                borderRadius: "8px",
                marginTop: "3%",
                backgroundColor:"white"
              }}
            >
              <Box
                style={{
                  display: "flex",
                  padding:"8px 5%",
                  gap:"10px",
                  justifyContent:"space-between"
                  // marginTop: "3%",
                }}
              >
                <Img width="25%" src="https://www.rentomojo.com/public/images/cart/payment/mobikwik.png"></Img>
                <Text
                  style={{fontWeight:"330"}}
                  fontSize={{
                    sm: "10px",
                    md: "12px",
                    lg: "13px",
                    xl: "13px",
                    base : "13px"
                  }}
                >Pay via Mobikwik
                </Text>
                <Text
                  style={{fontWeight:"bold"}}
                  fontSize={{
                    sm: "12px",
                    md: "13px",
                    lg: "15px",
                    xl: "20px",
                    base : "15px"
                  }}
                >
                 {`>`}
                </Text>
              </Box>

             
              <hr />
              <Box
                style={{
                  display: "flex",
                  gap:"10px",
                  paddingLeft:"10px",
                  margin:"2%"
                }}
              >
                <Img width="3.5%" src="https://www.rentomojo.com/public/images/radical-cart/icons/red__bg-info-icon.svg"></Img>
                <Text
                  style={{fontWeight:"330"}}
                  fontSize={{
                    sm: "12px",
                    md: "13px",
                    lg: "10px",
                    xl: "10px",
                    base : "15px"
                  }}
                >
              Use KWIK20 to get additional 20% cashback (Max ₹75)
                </Text>
              </Box>
              </Box>


              <Box
              style={{
                width: "100%",
                padding: "2%",
                borderRadius: "8px",
                marginTop: "3%",
                backgroundColor:"white"
              }}
            >
              <Box
                style={{
                  display: "flex",
                  padding:"8px 5%",
                  gap:"10px",
                  justifyContent:"space-between"
                  // marginTop: "3%",
                }}
              >
                <Img width="23%" src="https://www.rentomojo.com/public/images/cart/payment/paytm.png"></Img>
                <Text
                  style={{fontWeight:"330"}}
                  fontSize={{
                    sm: "10px",
                    md: "12px",
                    lg: "13px",
                    xl: "13px",
                    base : "13px"
                  }}
                >
                Pay via Paytm
                </Text>
                <Text
                  style={{fontWeight:"bold"}}
                  fontSize={{
                    sm: "12px",
                    md: "13px",
                    lg: "15px",
                    xl: "20px",
                    base : "15px"
                  }}
                >
                 {`>`}
                </Text>
              </Box>
              </Box>

              <Box  
              style={{
                width: "100%",
                padding: "2%",
                borderRadius: "8px",
                marginTop: "3%",
                backgroundColor:"white"
              }}
            >
              <Box
                style={{
                  display: "flex",
                  padding:"8px 5%",
                  gap:"10px",
                  justifyContent:"space-between"
                  // marginTop: "3%",
                }}
              >
                <Img width="23%" src="https://www.rentomojo.com/public/images/cart/payment/phonepe.png"></Img>
                <Text
                  style={{fontWeight:"330"}}
                  fontSize={{
                    sm: "10px",
                    md: "12px",
                    lg: "13px",
                    xl: "13px",
                    base : "13px"
                  }}
                >
                Pay via Phonepe
                </Text>
                <Text
                  style={{fontWeight:"bold"}}
                  fontSize={{
                    sm: "12px",
                    md: "13px",
                    lg: "15px",
                    xl: "20px",
                    base : "15px"
                  }}
                >
                 {`>`}
                </Text>
              </Box>
              </Box>
              
             </Box>
                  
            </ModalBody>
          </ModalContent>
        </Modal>  






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
          height={"auto"}
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
          <Box
           style={{ width: "80%", margin: "auto", marginTop: "8%" }}>
            <Button
          
              id="buy"
              style={{
                backgroundColor: "#dc3226",
                color: "white",
                width: "100%",
              }}
             
            >
              <Box
             onClick={onOpen}
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