import { Box, Container, Img, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../Home/Knowmore.module.css";

export const Knowmore = () => {
  return (
    <>

      {/* <Container minWidth="90%" style={{}} > */}
      <Container minWidth="90%" style={{marginTop:"400px"}} >
        <br/>
        <br/>
        <Box >
          <Text
            fontSize={{
              sm: "16px",
              md: "18px",
              lg: "19px",
              xl: "20px",
              base: "14px"
            }}
            style={{
              textAlign: "left",
              marginTop:"80px"
             
            }}
            padding="10px"
            marginLeft="30px"
            
          >
          There's more
          </Text>
        </Box>
        <Box
          style={{
            textAlign: "left"
          }}
        >
          <Text
            fontSize={{
              sm: "15px",
              md: "16px",
              lg: "17px",
              xl: "18px",
              base: "14px"
            }}
            padding="10px"
            marginLeft="30px"
            marginTop="-25px"
          >
         
            <span style={{borderBottom:"3px solid red"}}>to</span><span style={{borderBottom:"3px solid red"}}> renting</span>
          </Text>
          <Box
            style={{
              // border: "1px solid tomato",
              backgroundColor: "tomato",
              width: "6%"
            }}
             marginLeft="44px"
             
          ></Box>
        </Box>
        <SimpleGrid
          style={{
            gap: "2%",
            marginTop: "2%"
          }}
          columns={{ sm: 2, md: 2, lg: 3, xl: 3, base: 2 }}
        >
          <Box
            id={styles.mainBox}
            style={{
              padding: "10px"
            }}
          >
            <Img
              width={{
                sm: "80px",
                md: "90px",
                lg: "100px",
                xl: "100px",
                base: "70px"
              }}
              src="https://media2.giphy.com/media/j4qI5b6Mrlx5GOVidc/giphy.gif?cid=790b76119f5e1de76114ede8e5e5cc73fbac4c9ce79e32e6&rid=giphy.gif&ct=s"
            />
            <Box
              style={{
                width: "95%",
                margin: "auto",
                textAlign: "left"
              }}
            >
              {" "}
              <Text
                fontSize={{
                  sm: "16px",
                  md: "18px",
                  lg: "19px",
                  xl: "20px",
                  base: "14px"
                }}
              >
                Finest-quality products
              </Text>
            </Box>
            <Box
              style={{
                width: "96%",
                margin: "auto",
                marginTop: "2%",
                textAlign: "left"
              }}
            >
              <Text
                fontSize={{
                  sm: "14px",
                  md: "14px",
                  lg: "15px",
                  xl: "15px",
                  base: "13px"
                }}
                style={{
                  color: "#717171",
                  fontFamily: "sans-serif"
                }}
              >
                Quality matters to you, and us! That's why we do a strict
                quality-check for every product.
              </Text>
            </Box>
          </Box>

          <Box
            id={styles.mainBox}
            style={{
              padding: "10px"
            }}
          >
            <Img
              width={{
                sm: "80px",
                md: "90px",
                lg: "100px",
                xl: "100px",
                base: "70px"
              }}
              src="https://cdn-icons-png.flaticon.com/512/6553/6553960.png"
            />
            <Box
              style={{
                width: "95%",
                margin: "auto",
                textAlign: "left"
              }}
            >
              {" "}
              <Text
                fontSize={{
                  sm: "16px",
                  md: "18px",
                  lg: "19px",
                  xl: "20px",
                  base: "14px"
                }}
              >
                Free relocation
              </Text>
            </Box>
            <Box
              style={{
                width: "96%",
                margin: "auto",
                marginTop: "2%",
                textAlign: "left"
              }}
            >
              <Text
                fontSize={{
                  sm: "14px",
                  md: "14px",
                  lg: "15px",
                  xl: "15px",
                  base: "13px"
                }}
                style={{
                  color: "#717171",
                  fontFamily: "sans-serif"
                }}
              >
                Changing your house or even your city? We'll relocate your
                rented products for free.
              </Text>
            </Box>
          </Box>

          <Box
            id={styles.mainBox}
            style={{
              padding: "10px"
            }}
          >
            <Img
              width={{
                sm: "80px",
                md: "90px",
                lg: "100px",
                xl: "100px",
                base: "70px"
              }}
              src="https://www.avicsoftware.com/assets/images/icons/idx-icon-02.svg"
            />
            <Box
              style={{
                width: "95%",
                margin: "auto",
                textAlign: "left"
              }}
            >
              {" "}
              <Text
                fontSize={{
                  sm: "16px",
                  md: "18px",
                  lg: "19px",
                  xl: "20px",
                  base: "14px"
                }}
              >
                Free maintenance
              </Text>
            </Box>
            <Box
              style={{
                width: "96%",
                margin: "auto",
                marginTop: "2%",
                textAlign: "left"
              }}
            >
              <Text
                fontSize={{
                  sm: "14px",
                  md: "14px",
                  lg: "15px",
                  xl: "15px",
                  base: "13px"
                }}
                style={{
                  color: "#717171",
                  fontFamily: "sans-serif"
                }}
              >
                Keeping your rented products in a spick and span condition is on
                us, so you can sit back and relax.
              </Text>
            </Box>
          </Box>

          <Box
            id={styles.mainBox}
            style={{
              padding: "10px",
              marginTop:"50px"
            }}
          >
            <Img
              width={{
                sm: "80px",
                md: "90px",
                lg: "100px",
                xl: "100px",
                base: "70px"
              }}
              src="https://i.pinimg.com/736x/2c/2c/f6/2c2cf60e98e4a0bd717f8d8c61ea1116.jpg"
            />
            <Box
              style={{
                width: "95%",
                margin: "auto",
                textAlign: "left"
              }}
            >
              {" "}
              <Text
                fontSize={{
                  sm: "16px",
                  md: "18px",
                  lg: "19px",
                  xl: "20px",
                  base: "14px"
                }}
              >
                Cancel anytime
              </Text>
            </Box>
            <Box
              style={{
                width: "96%",
                margin: "auto",
                marginTop: "2%",
                textAlign: "left"
              }}
            >
              <Text
                fontSize={{
                  sm: "14px",
                  md: "14px",
                  lg: "15px",
                  xl: "15px",
                  base: "13px"
                }}
                style={{
                  color: "#717171",
                  fontFamily: "sans-serif"
                }}
              >
                Pay only for the time you use the product and close your
                subscription without any hassle.
              </Text>
            </Box>
          </Box>

          <Box
            id={styles.mainBox}
            style={{
              padding: "10px",
              marginTop:"50px"
            }}
          >
            <Img
              width={{
                sm: "80px",
                md: "90px",
                lg: "100px",
                xl: "100px",
                base: "70px"
              }}
              src="https://cdn-icons-png.flaticon.com/512/895/895437.png"
            />
            <Box
              style={{
                width: "95%",
                margin: "auto",
                textAlign: "left"
              }}
            >
              {" "}
              <Text
                fontSize={{
                  sm: "16px",
                  md: "18px",
                  lg: "19px",
                  xl: "20px",
                  base: "14px"
                }}
              >
                Easy return on delivery
              </Text>
            </Box>
            <Box
              style={{
                width: "96%",
                margin: "auto",
                marginTop: "2%",
                textAlign: "left"
              }}
            >
              <Text
                fontSize={{
                  sm: "14px",
                  md: "14px",
                  lg: "15px",
                  xl: "15px",
                  base: "13px"
                }}
                style={{
                  color: "#717171",
                  fontFamily: "sans-serif"
                }}
              >
                If you don't like the product on delivery, you can return it
                right away—no questions asked.
              </Text>
            </Box>
          </Box>

          <Box
            id={styles.mainBox}
            style={{
              padding: "10px",
               marginTop:"50px"
            }}
          >
            <Img
              style={{
                borderRadius: "50%"
              }}
              width={{
                sm: "80px",
                md: "90px",
                lg: "100px",
                xl: "100px",
                base: "70px"
              }}
              src="https://www.iconpacks.net/icons/1/free-mobile-phone-icon-760-thumb.png"
            />
            <Box
              style={{
                width: "95%",
                margin: "auto",
                textAlign: "left"
              }}
            >
              {" "}
              <Text
                fontSize={{
                  sm: "16px",
                  md: "18px",
                  lg: "19px",
                  xl: "20px",
                  base: "14px"
                }}
              >
                Keep upgrading
              </Text>
            </Box>
            <Box
              style={{
                width: "96%",
                margin: "auto",
                marginTop: "2%",
                textAlign: "left"
              }}
            >
              <Text
                fontSize={{
                  sm: "14px",
                  md: "14px",
                  lg: "15px",
                  xl: "15px",
                  base: "13px"
                }}
                style={{
                  color: "#717171",
                  fontFamily: "sans-serif"
                }}
              >
                Bored of the same product? Upgrade to try another, newer design
                and enjoy the change!
              </Text>
            </Box>
          </Box>
        </SimpleGrid>

        <Box
          marginTop={{
            sm: "8%",
            md: "3%",
            lg: "3%",
            xl: "3%",
            base: "10%"
          }}
          style={{
            textAlign: "left"
          }}
        >
          <Text
            id={styles.more}
            style={{
              color: "#31c3c5",
              marginLeft:"20px"
            }}
            fontSize={{
              sm: "16px",
              md: "18px",
              lg: "20px",
              xl: "22px",
              base: "15px"
            }}
          >
            Know More
          </Text>
        </Box>
      </Container>
    </>
  );
};
