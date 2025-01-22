import React, { useState } from "react";
// import {
//   Navbar,
//   Footer,
//   SelectDropdwon,
//   AnimatedNumbersCountr,
//   AccordionCustom,
//   Model,
//   RangeSlider,
// } from "../../component";

import Header from "../../component/Header";

import Footer from "../../component/Footer";

import Model from "../../component/model";


import {
  HeaderImage,
  WhitepaperHeaderImg,
  whitepaperBackground,
  whitepaperMarket,
  whitepaperSecurity ,
  PromptCard1,
  PromptCard2,
  PromptCard3,
  PromptCard4,
  WhatWeOffer,
  NftgenerationImage,
  StyleImage,
  LogoPng,
} from "../../asset/images";
import "./index.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import {
  Setting,
  Help,
  Copy,
  SelectedIcon,
  Gallery,
  Gallery2,
  Gallery3,
  Help2,
  Solana,
  Copy2,
  Document,
} from "../../asset/svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import CheckIcon from "@mui/icons-material/Check";

const Whitepaper = () => {
  const [connetWalletModal, setConnectWalletModal] = useState(false);
  const [connectLoading, setConnectLoading] = useState(false);
  const [connectLoadingDone, setConnectLoadingDone] = useState(false);

  // const location = useLocation();
  // const showNavbar =
  //   location.pathname === "/" || location.pathname === "/whitepaper" || location.pathname==="/Roadmap";

  return (
    <div className="home-container">
      {/* {showNavbar && <Header onClick={() => setConnectWalletModal(true)} />} */}

      <div className="whitepaper-header">
        <div className="whitepaper-header-div-img">
          <img src={WhitepaperHeaderImg} />
        </div>

        <div className="whitepaper-main-heading">
          <p className="whitepaper-header-title">
            Revolutionizing AI and Blockchain:{" "}
            <span>
              <br />
            </span>
            The Intersection of NFTs, AI, and{" "}
            <span>
              <br />
            </span>
            Cryptocurrency (WIP)  
          </p>
        </div>
      </div>

      <Grid container spacing={0}>
        {/* <Grid item xs={1} sm={1} md={1} lg={1} xl={1} /> */}

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="whitepaper-main">
            <div className="whitepaper-sec1-column">
              <div className="whitepaper-sec1-row1">
                <h2>Introduction</h2>
              </div>

              <div className="whitepaper-sec1-row2">
                <div>
                  <p>
                    CryptoverseAi is a groundbreaking initiative aimed at redefining the digital asset {" "}
                    <span>
                      <br />
                    </span>
                    landscape. This Solanabased AI token uniquely integrates artificial intelligence and {" "}
                    <span>
                      <br />
                    </span>
                    bots to facilitate the creation of user
                    generated art, virtual reality (VR) products,{" "}
                    <span>
                      <br />
                    </span>
                    and services. By harnessing the capabilities of AI, Cryptoverse
                    AI enables users to{" "}
                    <span>
                      <br />
                    </span>
                    explore and create in ways previously unimaginable, pushing
                    the boundaries of digital{" "}
                    <span>
                      <br />
                    </span>
                    creativity and engagement. 
                  </p>
                </div>

                <div>
                  <p>
                    Our project stands at the confluence of several transformative technologies
                    —blockchain, 
                    <span>
                      <br />
                    </span>
                    AI, and VReach contributing to a robust ecosystem that promises
                    to revolutionize how 
                    <span>
                      <br />
                    </span>
                    digital assets are created, traded, and experienced. In
                    an age where digital ownership 
                    <span>
                      <br />
                    </span>
                    and immersive experiences are becoming increasingly significant, CryptoverseAi offers 
                    <span>
                      <br />
                    </span>
                    a compelling solution that caters to both creators and
                    consumers, fostering a vibrant 
                    <span>
                      <br />
                    </span>
                    community of innovation and expression. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Grid>

        {/* <Grid item xs={1} sm={1} md={1} lg={1} xl={1} /> */}
      </Grid>

      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />

        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <div className="whitepaper-Background-main">
            <Grid container spacing={7}>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <p className="whitepaper-Background-heading">Background </p>
                <p className="whitepaper-Background-text">
                  The journey of Cryptoverse-Ai begins with its foundation on the Solana blockchain,
                  chosen for its high throughput, low transaction costs, and scalability. 
                  Solana's architecture allows Cryptoverse-Ai to handle the complex demands 
                  of AI integration and the high volume of transactions expected in a thriving 
                  digital economy. 
                  <br /><br/>
                  Cryptoverse-Ai is pioneering as the first Solana-based token that incorporates
                  multiple AI APIs on the internet. By leveraging the power of AI, the project offers 
                  unparalleled capabilities in automating and enhancing the creation of digital art 
                  and VR experiences. This integration not only democratizes access to sophisticated 
                  tools for users but also ensures that the platform remains at the forefront of 
                  technological advancements. 
                
                </p>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <img src={whitepaperBackground} className="whitepaper-Background-image" />
              </Grid>
            </Grid>
          </div>

          <div className="whitepaper-Background-main">
            <Grid container spacing={7}>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <img src={whitepaperMarket} className="whitepaper-Background-image-2" />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <p className="whitepaper-Background-heading">Market Analysis </p>
                <p className="whitepaper-Background-text">
                The impact of technology on the economy and society has been profound throughout 
                human history. As Raoul Pal, a former Goldman Sachs hedge fund guru, aptly noted, 
                AI stands out as one of the most transformative forces, with the potential to drive
                exponential changes across various sectors. The integration of AI into blockchain
                technology and NFTs marks a significant leap forward, opening up new avenues
                for innovation and economic growth. 
                <br/><br/>
                Cryptoverse-Ai is wellpositioned to capitalize on this trend. The global market for
                AI is projected to grow substantially in the coming years, driven by advancements in 
                machine learning, natural language processing, and automation. Similarly, the NFT 
                market has seen explosive growth, with digital artists, collectors, and investors 
                recognizing the value and potential of unique digital assets. By combining these two 
                burgeoning fields, Cryptoverse-Ai addresses a growing demand for AI-enhanced, 
                blockchain-based solutions. 
                <br/><br/>
                Moreover, the project's focus on user-generated content and VR experiences taps into 
                another rapidly expanding market. The global VR market is expected to experience 
                significant growth, driven by advancements in hardware and software, as well as
                increasing consumer interest in immersive experiences. Cryptoverse-Ai's unique
                proposition of AI-driven VR creation tools positions it as a leader in this emerging
                space, offering users a platform to create, share, and monetize their virtual 
                creations. 
                </p>
              </Grid>
            </Grid>
          </div>

          <div className="whitepaper-Background-main">
            <Grid container spacing={7}>
              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <p className="whitepaper-Background-heading">Security Issues </p>
                <p className="whitepaper-Background-text">
                Ensuring the security of users' assets and data is a top priority for Cryptoverse-Ai. To 
                achieve this, the project will implement rigorous security measures, including continuous 
                code audits and penetration tests. By regularly examining and testing the platform's 
                codebase, we aim to identify and address potential vulnerabilities before they can be 
                exploited. 
                <br/><br/>
                In addition to technical security measures, Cryptoverse-Ai will adhere to industry best 
                practices and regulatory requirements to ensure compliance and build trust with users. 
                This includes implementing robust encryption protocols, secure key management practices, 
                and comprehensive user authentication mechanisms. By maintaining a strong focus on 
                security and compliance, Cryptoverse-Ai aims to provide a safe and reliable platform for 
                users to engage with and invest in digital assets. 
                </p>
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                <img src={whitepaperSecurity} className="whitepaper-Background-image-3" />
              </Grid>
            </Grid>
          </div>





          <div className="whitepaper-conclusion-main">
            <Grid container spacing={7}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <p className="whitepaper-conclusion-heading">Conclusion </p>
                <p className="whitepaper-conclusion-text">
                CryptoverseAi is poised to make a significant impact in the digital asset space,  with a goal of achieving a market cap of $100 million to $2 billion in this cycle. 
                <br/><br/>
                This ambitious target reflects the project's potential to drive innovation and economic growth in the rapidly evolving fields of AI, blockchain, and VR. <span><br/></span>
                Recognizing the inherent uncertainties in forecasting, we have provided a range to account for both positive and negative potential events. The dynamic <span><br/></span>
                nature of the digital asset market, influenced by technological advancements, regulatory developments, and market sentiment, necessitates a flexible <span><br/></span>
                and adaptable approach to forecasting. By staying attuned to these variables and continuously innovating, Cryptoverse-Ai aims to navigate the <span><br/></span>
                complexities of the deliver value to its users and stakeholders. 
                </p>
              </Grid>

            
            </Grid>
          </div>















          <Footer />

        </Grid>

        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
      </Grid>

      <Model
        open={connetWalletModal}
        onClose={() => setConnectWalletModal(false)}
        maxWidth="xs"
        title=""
      >
        <div className="home-modal-logo">
          <img src={LogoPng} />
        </div>
        {!connectLoadingDone ? (
          <div>
            <p className="connect-modal-title">Connect to Cryptoverse</p>
            <Button
              variant="contained"
              className="home-solna-connect-btn"
              disableRipple={true}
              onClick={() => {
                setConnectLoading(true);
                setTimeout(() => {
                  setConnectLoading(false);
                  setConnectLoadingDone(true);
                }, 2000);
              }}
            >
              <img src={Solana} />
              {connectLoading ? "Connecting..." : "Solana Wallet"}
            </Button>
          </div>
        ) : (
          <div>
            <div className="home-connecting-box">
              <div className="home-connecting-box-header">
                <div></div>
                <p>0x05c41sa5cfas....5c12a11178a1c5wa12</p>
              </div>
              <div className="home-connecting-footer">
                <Button
                  variant="contained"
                  className="home-connecting-footer-btn"
                  disableRipple={true}
                >
                  <img src={Copy2} />
                  Copy address
                </Button>
                <Button
                  variant="contained"
                  className="home-connecting-footer-btn"
                  disableRipple={true}
                >
                  <img src={Document} />
                  View on explorer
                </Button>
              </div>
            </div>
            <div className="home-solna-connect-diconnect-box">
              <p>Connected with Solana Wallet</p>
              <Button
                variant="contained"
                className="home-disconnect-btn"
                disableRipple={true}
                onClick={() => setConnectLoadingDone(false)}
              >
                Disconnect
              </Button>
            </div>
          </div>
        )}
      </Model>
    </div>
  );
};

export default Whitepaper;
