import React, { useEffect, useState } from "react";
import  AfterGenerateImageNavbar  from "../../component/after-genderate-image-navbar";
import "./bootstrap.min.css"
import "./index.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AfterGenerateImageCard1,
  AfterGenerateImageCard2,
  AfterGenerateImageCard3,
  AfterGenerateImageCard4,
  AfterGenerateImageCard5,
  NftStoreImg3,
  NftStoreImg4,
  NftStoreImg5,
  NftStoreImg6,
  NftStoreLogo4,
  solanaLogo
} from "../../asset/images";
import { faArrowRight, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollToTop from "../../component/ScrollToTop";



// import { Grid, Button, Typography } from "@mui/material";

const BuySellNft = () => {

  <ScrollToTop/>

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isTransactionSucessOpen, setIsTransactionSucessModalOpen] =
    useState(false);

    
  useEffect(() => {
    // Add or remove `modal-open` class on body to disable background scroll
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openTransactionSucessModal = () =>
    setIsTransactionSucessModalOpen(true);

  const closeTransactionSucessModal = () =>
    setIsTransactionSucessModalOpen(false);

  const doneTransactionSucessModal = () => {
    setIsTransactionSucessModalOpen(false);
    setIsModalOpen(false);
    navigate("/profile")
  };

  return (
    <div className="buy-sell-nft-container">
      <AfterGenerateImageNavbar />

      <div className="buy-sell-nft-container-inner">
        <div className="buy-sell-nft-row">
          <Grid
            container
            spacing={2}
            justifyContent="center" // Centers the columns horizontally
            alignItems="center" // Centers the columns vertically
          >
            <Grid
              item
              xs={12}
              sm={4}
              className="buy-sell-nft-column1"
              style={{ border: "" }}
            >
              <img src={NftStoreImg3} />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              className="buy-sell-nft-column2-grid"
              style={{ border: "" }}
            >
              <div className="buy-sell-nft-column2">
                <div className="mt-4 mt-lg-0 ms-0">
                  <div>
                    <h1 className="nft-buy-sell-name">Artcrypto</h1>
                  </div>
                  <div className="row my-2">
                    <div className="col-12 col-lg-5">
                      <div className="d-flex align-items-center my-2">
                        <div>
                          <img
                            className="buy-sell-showcase-image"
                            src={NftStoreImg5}
                            alt
                          />
                        </div>
                        <div className="buy-sell-showcase-text">
                          <small>Collection</small>
                          <h6 className="buy-sell-nft-checkmark">
                            Plato <img src={NftStoreLogo4} className alt />{" "}
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-5">
                      <div className="d-flex align-items-center my-2">
                        <div>
                          <img
                            className="buy-sell-showcase-image"
                            src={NftStoreImg5}
                            alt
                          />
                        </div>
                        <div className="buy-sell-showcase-text">
                          <small>Owner</small>
                          <h6>0xhg34...nGj2</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="buy-sell-light-text">
                    <p>
                      Breathing Space joyfully brings the unique blend of DeFi,
                      Collect-to-Earn and Play-to-Earn Abstract is known for to
                      the Neo N3 ecosystem: the most feature-complete blockchain
                      platform for building decentralized applications for the
                      smart economy of tomorrow.
                    </p>
                  </div>
                </div>

                <div className="buy-sell-detail-column">
                  <div className="buy-sell-detail-heading-row">
                    <h1>Details</h1>
                  </div>

                  <div className="buy-sell-detail-row">
                    <div className="col-8">
                      <div className="my-2">
                        <p className="buy-sell-light-text">Contract</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="my-2 mx-0 mx-lg-2 text-end">
                        <div className="d-inline-block text-end me-2">
                          <h6 className="fw-normal">0x85F0...9E2D</h6>
                        </div>
                        <button className="d-inline-block bg-transparent border-0 align-self-start">
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="buy-sell-detail-contract-icon"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="buy-sell-detail-row">
                    <div className="col-8">
                      <div className="my-2">
                        <p className="buy-sell-light-text">Token Standard</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="my-2 mx-0 mx-lg-2 text-end">
                        <div className="d-inline-block text-end me-2">
                          <h6 className="fw-normal">ERC-721</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="buy-sell-detail-row">
                    <div className="col-8">
                      <div className="my-2">
                        <p className="buy-sell-light-text">Blockchain</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="my-2 mx-0 mx-lg-2 text-end">
                        <div className="d-inline-block text-end me-2">
                          <h6 className="fw-normal">BNB Chain</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="buy-sell-pricing-column">
                  <div className="buy-sell-pricing-row">
                    <p>Price</p>
                    <div className="buy-sell-pricing-column2">
                      <h2>1.12 SOLANA</h2>
                      <p>$ 366.86</p>
                    </div>
                  </div>

                  <button className="buy-sell-mint-btn" onClick={openModal}>Mint NFT</button>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>

      {/* Bid Dialoge Box */}
      {isModalOpen && (
        <div className="buy-sell-pop-up-bid-box-overlay">
          <div className="buy-sell-pop-up-bid-box">
            <div className="buy-sell-pop-up-bid-box-head">
              <h4>Bid</h4>
              <button onClick={closeModal}>
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
            <div className="buy-sell-pop-up-image-bid-box">
              <img src={NftStoreImg3} alt />
            </div>
            <div className="buy-sell-pop-up-middle-bid-box">
              <div className="buy-sell-bid-info">
                <small className="buy-sell-light-text">Your Balance</small>
                <p className="fw-semibold">10.2 BUSD</p>
              </div>
              <div className="buy-sell-bid-info">
                <small className="buy-sell-light-text">
                  The minimum bid price is
                </small>
                <p className="fw-semibold">1.1 BUSD</p>
              </div>
              <div className="buy-sell-pop-up-middle-box-input">
                <input type="text" placeholder="Place Bid" />
                <div className="buy-sell-pop-up-middle-box-input-placeholder">
                  <img src={solanaLogo} alt /> BUSD
                </div>
              </div>
              <small className="buy-sell-light-text mx-2">$ 382.12</small>
              <div className="mt-4">
                <small className="buy-sell-light-text mx-2">
                  Once a bid is placed, it cannot be withdraw.
                </small>
              </div>
            </div>
            <button
              className="buy-sell-pop-up-bid-box-button"
              onClick={openTransactionSucessModal}
            >
              Bid
            </button>
          </div>
        </div>
      )}



 {/* Transaction Success Dialoge Box */}
 {isTransactionSucessOpen && (
        <div className="buy-sell-pop-up-lab-transaction-box-overlay">
          <div className="container buy-sell-transaction-box">
            <div className="buy-sell-transaction-box-head">
              <h4>Transaction Success</h4>
              <small className="nftstore-lab-light-text">
                You successfully bidded the NFT.
              </small>
              <button onClick={closeTransactionSucessModal}>
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
            <div className="buy-sell-transaction-middle-box">
              <div className="buy-sell-transaction-row">
                <div className="col-6">
                  <small className="buy-sell-light-text">Status</small>
                  <p className="mt-2 nftstore-lab-secondary-text fw-semibold">
                    Completed
                  </p>
                </div>
                <div className="col-6">
                  <small className="buy-sell-light-text">
                    Transaction ID
                  </small>
                  <p className="mt-2 fw-semibold">
                    0x184C...ddE66
                    <button className="buy-sell-transaction-middle-box-go-button ms-1">
                      <FontAwesomeIcon icon={faArrowRight} />
                      {/* <i className="fa fa-arrow-right" /> */}
                    </button>
                  </p>
                </div>
                </div>
                <div className="buy-sell-transaction-middle-box-divider" />

                <div className="buy-sell-transaction-row">
                <div className="col-6">
                  <small className="buy-sell-light-text">
                    NFT contract
                  </small>
                  <p className="mt-2 fw-semibold">Doodle Apes</p>
                </div>
                <div className="col-6">
                  <small className="buy-sell-light-text">Token ID</small>
                  <p className="mt-2 fw-semibold">5</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button
                className="buy-sell-transaction-box-button"
                onClick={doneTransactionSucessModal}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};
export default BuySellNft;
