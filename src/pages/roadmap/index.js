import React, { useState } from "react";



import Header from "../../component/Header";

import Footer from "../../component/Footer";

import Model from "../../component/model";



import {
  HeaderImage,
  WhitepaperHeaderImg,
  whitepaperBackground,
  whitepaperMarket,
  whitepaperSecurity,
  PromptCard1,
  PromptCard2,
  PromptCard3,
  PromptCard4,
  WhatWeOffer,
  NftgenerationImage,
  StyleImage,
  LogoPng,
  roadMapPipeline,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  roadmap5,
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

const Roadmap = () => {
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

            <div className="roadmap-heading">
                <h2>Road Maps Business Infographic</h2>
            </div>

          <div className="roadmap-main">
            <img src={roadMapPipeline} className="roadmap-pipe" />
            <div className="roadmap-pipe-row">
              <div className="roadmap-phase1">
                <h2>Launch</h2>

                <div className="roadmap-phase1-paragraph">
                  <p className="roadmap-phase1-para1">
                    <strong>Action: </strong> Launching{" "}
                    <span>
                      <br />
                    </span>{" "}
                    website with NFTs and{" "}
                    <span>
                      <br />
                    </span>{" "}
                    AI integration.
                  </p>
                  <p className="roadmap-phase1-para2">
                    <strong>Marketing: </strong> Initiate{" "}
                    <span>
                      <br />
                    </span>{" "}
                    campaigns on Twitter{" "}
                    <span>
                      <br />
                    </span>
                    and Telegram to build{" "}
                    <span>
                      <br />
                    </span>
                    an initial audience and{" "}
                    <span>
                      <br />
                    </span>{" "}
                    community engagement.
                  </p>
                </div>

                <img src={roadmap1} />
                <span className="roadmap-phase-number">01</span>
              </div>

              <div className="roadmap-phase2">
                <span className="roadmap-phase-number">02</span>
                <img src={roadmap2} />

                <h2>Expansion</h2>
                {/* <div className="roadmap-phase2-paragraph"> */}
                <p className="roadmap-phase2-para1">
                  <strong>Action: </strong>
                  Develop and
                  <span>
                    <br />
                  </span>
                  launch another web
                  <span>
                    <br />
                  </span>
                  app (Details to be
                  <span>
                    <br />
                  </span>
                  announced-).
                </p>
                <p className="roadmap-phase2-para2">
                  <strong>Marketing: </strong>
                  Continue
                  <span>
                    <br />
                  </span>
                  leverage social media,
                  <span>
                    <br />
                  </span>
                  YouTube and Medium
                  <span>
                    <br />
                  </span>
                  for deeper content
                  <span>
                    <br />
                  </span>
                  engagement.
                </p>
                {/* </div> */}
              </div>

              <div className="roadmap-phase3">
                <span className="roadmap-phase-number">03</span>
                <img src={roadmap3} />

                <h2>
                  Mobile App <br />
                  Development
                </h2>
                <div className="roadmap-phase3-paragraph">
                  <p className="roadmap-phase3-para1">
                    <strong>Action: </strong>
                    Develop and
                    <span>
                      <br />
                    </span>
                    release a mobile app for
                    <span>
                      <br />
                    </span>
                    both iOS and Android.
                  </p>
                  <p className="roadmap-phase3-para2">
                    <strong>Growth: </strong>
                    Increase
                    <span>
                      <br />
                    </span>
                    listings on more
                    <span>
                      <br />
                    </span>
                    decentralized
                    <span>
                      <br />
                    </span>
                    exchanges (DEXs).
                  </p>
                  <p className="roadmap-phase3-para3">
                    <strong>Exchange Submission: </strong>
                    <span>
                      <br />
                    </span>
                    Submit applications for
                    <span>
                      <br />
                    </span>
                    listing on major
                    <span>
                      <br />
                    </span>
                    centralized exchanges
                    <span>
                      <br />
                    </span>
                    like Coinbase, Kraken,
                    <span>
                      <br />
                    </span>
                    KuCoin and Gemini.
                  </p>
                </div>
              </div>

              <div className="roadmap-phase4">
                <h2>
                  Strategic <br /> Partnerships
                </h2>

                <div className="roadmap-phase4-paragraph">
                  <p className="roadmap-phase4-para1">
                    <strong>Action: </strong>
                    Forge
                    <span>
                      <br />
                    </span>
                    partnerships with other
                    <span>
                      <br />
                    </span>
                    cryptocurrency projects,
                    <span>
                      <br />
                    </span>
                    tech companies, and
                    <span>
                      <br />
                    </span>
                    influencers.
                  </p>
                  <p className="roadmap-phase4-para2">
                    <strong>Enhancements: </strong>
                    <span>
                      <br />
                    </span>
                    Continuously update the
                    <span>
                      <br />
                    </span>
                    app with user feedback
                    <span>
                      <br />
                    </span>
                    and new features.
                  </p>
                </div>

                <img src={roadmap4} />
                <span className="roadmap-phase-number">04</span>
              </div>

              <div className="roadmap-phase5">
                <span className="roadmap-phase-number">05</span>
                <img src={roadmap5} />

                <h2>
                  Big <br /> Announcement
                </h2>
                <p className="roadmap-phase5-para1">
                  <strong>Teaser: </strong>
                  Prepare a
                  <span>
                    <br />
                  </span>
                  massive announcement
                  <span>
                    <br />
                  </span>
                  that will share the crypto
                  <span>
                    <br />
                  </span>
                  world-
                </p>
              </div>
            </div>
          </div>
        </Grid>

        {/* <Grid item xs={1} sm={1} md={1} lg={1} xl={1} /> */}
      </Grid>

      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />

        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
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

export default Roadmap;
