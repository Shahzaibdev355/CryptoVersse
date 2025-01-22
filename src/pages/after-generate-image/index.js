import React, { useState } from "react";
import AfterGenerateImageNavbar from "../../component/after-genderate-image-navbar";
import "./index.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper core styles
import "swiper/css/free-mode"; // For smooth dragging

import {
  buySellNftImg1,
  buySellNftImg2,
} from "../../asset/images";


import { Link, useNavigate } from "react-router-dom";
import { useStabilityAi } from "../../hooks/useStabilityAi";
import ScrollToTop from "../../component/ScrollToTop";



const AfterGenerateImage = () => {

  <ScrollToTop/>

  const navigate = useNavigate();
  const { store: { nfts, status }, } = useStabilityAi()



  const cardsData = [
    {
      imgSrc: buySellNftImg1,
      title: "Abstract Art",
      price: "200",
    },
    {
      imgSrc: buySellNftImg2,
      title: "Portrait Art",
      price: "400",
    },
    {
      imgSrc: buySellNftImg2,
      title: "Modern Art",
      price: "300",
    },
    {
      imgSrc: buySellNftImg2,
      title: "Modern Art",
      price: "300",
    } ,
    {
      imgSrc: buySellNftImg2,
      title: "Modern Art",
      price: "300",
    }  ,
    {
      imgSrc: buySellNftImg2,
      title: "Modern Art",
      price: "300",
    }  ,
    {
      imgSrc: buySellNftImg2,
      title: "Modern Art",
      price: "300",
    }  ,
    {
      imgSrc: buySellNftImg2,
      title: "Modern Art",
      price: "300",
    }  ,
  ];




  return (
    <div className="after-generate-mage-container">
      <AfterGenerateImageNavbar />
      <div className="after-generate-mage-container-inner">


      <div className="generate-image-buy-sell-carousel">
          <div className="generate-image-buy-sell-carousel-heaading">
            <p>Buy or Sell</p>
          </div>

          {/* <div className="generate-image-buy-sell-carousel-row"> */}

          {/* <div className="generate-image-buy-sell-carousel-img-card">
                  <img src={buySellNftImg1}/>
                  <div className="generate-image-buy-sell-carousel-img-card-row">
                      <h4>Abstract Art</h4>
                      <p>200</p>
                  </div>
            </div>

            <div className="generate-image-buy-sell-carousel-img-card">
                  <img src={buySellNftImg2}/>
                  <div className="generate-image-buy-sell-carousel-img-card-row">
                      <h4>Potrait Art</h4>
                      <p>400</p>
                  </div>
            </div> */}

          {/* </div> */}

          <Swiper
            spaceBetween={20}
            slidesPerView={"auto"} // Automatically adjusts for fixed card widths
            freeMode={true}
            grabCursor={true}
            className="my-swiper"
          >
            {cardsData.map((card, index) => (
              <SwiperSlide key={index} className="carousel-slide">
                <Link to="/mintNft" style={{textDecoration: 'none'}}>
                  <div className="generate-image-buy-sell-carousel-img-card">
                    <img src={card.imgSrc} alt={card.title} />
                    <div className="generate-image-buy-sell-carousel-img-card-row">
                      <h4>{card.title}</h4>
                      <p>{card.price}</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


        <div className="a-g-i-p-header">
          <p>Mint Your NFT</p>
          <div>
            <p>Select multiple images to mint</p>
            <Button
              variant="contained"
              className="a-g-i-p-header-btn"
              disableRipple={true}
              onClick={() => navigate("/profile")}
            >
              <div>Mint NFT’s</div>
            </Button>
          </div>
        </div>
        {status === "pending" ? <div style={{ justifyContent: "center", display: "flex", alignItems: "center", color: "white", fontSize: "50px" }}>Loading...</div> :
          <Grid container spacing={3}>
            {nfts?.length ? nfts?.map((el, index) => {
              return (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={12 / 2}
                  md={12 / 3}
                  lg={12 / 4}
                  xl={12 / 5}
                >
                  <div className="a-g-i-p-card">
                    <img src={el?.url} />
                    <div>
                      <Button
                        variant="contained"
                        className="a-g-i-p-card-check-btn"
                        disableRipple={true}

                      >
                        <div style={{ borderColor: "#D9D9D933", background: "linear-gradient(to right, #ff7357, #ff2957)" }}>
                          {/* {val.isSelected && ( */}
                          <CheckIcon style={{ height: "15px", width: "15px" }} />
                          {/* )} */}
                        </div>
                        <p>{"ArtCrypto"}</p>
                      </Button>
                      <Button
                        variant="contained"
                        className="a-g-i-p-card-nft-btn"
                        disableRipple={true}
                        onClick={() => navigate("/profile")}
                      >
                        <div>Mint NFT</div>
                      </Button>
                    </div>
                    <p>{el?.prompt}</p>
                  </div>
                </Grid>
              );
            }) : null}
          </Grid>
        }

      </div>
      <br />
    </div>
  );
};
export default AfterGenerateImage;
