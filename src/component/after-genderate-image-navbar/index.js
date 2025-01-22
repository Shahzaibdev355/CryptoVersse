import React, { useState } from "react";

import "./index.css";
import "./../SelectDropdown/index.css"

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { LogoPng, profilePlaceHolder } from "../../asset/images";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Wallet2 } from "../../asset/svg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth } from "../../hooks/useAuth";
import { formatToken } from "../../utils/TokenFormater";

const AfterGenerateImageNavbar = ({ exploreHide }) => {
  const location = useLocation();

  // Determine active route
  const isGenerateActive = location.pathname === "/after-generate-image";
  const isMyNftActive = location.pathname === "/myNft";

  const { store: { user } } = useAuth()
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  // State to manage the selected dropdown option
  const [show, setShow] = useState(false);

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  // for new component myNft navigation
  const handleNavigateToMyNft = (tab) => {
    navigate("/myNft", { state: { selectedTab: tab } });
  };

  return (
    <div className="after-generate-image-navbar-container">
      {!isMatch ? (
        <div className="after-generate-image-navbar-container-inner">
          <Button
            variant="contained"
            className="after-g-i-n-back-btn"
            disableRipple={true}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIcon />
            <div />
            <img src={LogoPng} />
          </Button>
          <div className="after-g-i-n-middle">
            <div>
              <Link
                to="/after-generate-image"
                className="after-g-i-n-page-title-main"
                style={{ flexDirection: "column" }}
              >
                <p
                  className={`after-g-i-n-page-title ${isGenerateActive ? "after-g-i-n-page-active" : ""
                    }`}
                >
                  Generate
                </p>
                {isGenerateActive && (
                  <div className="after-g-i-n-page-active-line" />
                )}

                {/* {isMyNftActive && ( <div className="after-g-i-n-page-line" />)} */}
              </Link>
              <div className="after-g-i-n-page-line" />
            </div>

            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link className="after-g-i-n-page-title-main">
                <p
                  onClick={() => setShow(!show)}
                  className={`after-g-i-n-page-title ${isMyNftActive ? "after-g-i-n-page-active" : ""
                    }`}
                >
                  My NFT
                </p>

                <ArrowDropDownIcon style={{ color: "#FEFEFE" }} />
                {/* {isMyNftActive && <div className="after-g-i-n-page-active-line" />} */}
              </Link>
              <div className="after-g-i-n-page-line" />

              {show && (
                <div
                  className="dropdown-content-2"
                  id="dropdown-content"
                  style={{ border: "" }}
                >
                  <div className="dropdown-content-items-main">
                    <div>
                      {[
                        { heading: "All", tab: "All" },
                        { heading: "Draft", tab: "Draft" },
                        { heading: "Favourites", tab: "Favorites" },
                      ].map((val, index) => (
                        <Button
                          variant="text"
                          disableRipple={true}
                          className="dropdown-item"
                          key={index}
                          style={{
                            borderBottomWidth: index < 2 ? "0.7px" : "0px", // Adjusting for the number of items
                            borderBottomColor: "#FFFFFF33",
                          }}
                          onClick={() => handleNavigateToMyNft(val.tab)}
                        >
                          <div>
                            <p className="dropdown-item-heading">
                              {val.heading}
                            </p>
                            <p className="dropdown-item-title">{val.title}</p>
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <Button
            variant="contained"
            className="after-g-i-n-wallet-btn"
            disableRipple={true}
          >
            <img src={Wallet2} />
            {formatToken(user?.walletAddress)}

            <Link to="/profile" className="after-g-i-n-wallet-btn-profile-btn-link" >
              <img src={profilePlaceHolder} className="after-g-i-n-wallet-btn-profile-btn" />
            </Link>

          </Button>
        </div>
      ) : (
        <div className="after-generate-image-navbar-container-inner">
          <Button
            variant="contained"
            className="after-g-i-n-back-btn"
            disableRipple={true}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIcon />
            <div />
            <img src={LogoPng} />
          </Button>
          <IconButton
            onClick={() => {
              setIsDrawerOpen(true);
            }}
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
        </div>
      )}
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
        <div>
          <div className="sider-content-wraper">
            <div className="drawer-header-main">
              <IconButton
                onClick={() => {
                  handleDrawerClose();
                }}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <ul className="side-menu-ul">
              <li>
                <Link
                  className="after-g-i-n-page-title-main"
                  style={{ flexDirection: "column" }}
                  onClick={() => {
                    setIsDrawerOpen(false);
                  }}
                >
                  <p className="after-g-i-n-page-active">Generate</p>
                  <div className="after-g-i-n-page-active-line" />
                </Link>
              </li>
              {!exploreHide && (
                <li>
                  <div className="after-g-i-n-drawer-title">
                    <Link
                      className="after-g-i-n-page-title-main"
                      onClick={() => {
                        setIsDrawerOpen(false);
                      }}
                    >
                      <p
                        className="after-g-i-n-page-title"
                        style={{ color: "#2d151a" }}
                      >
                        Explore
                      </p>
                      <ArrowDropDownIcon style={{ color: "#2d151a" }} />
                    </Link>
                    <div className="after-g-i-n-page-line" />
                  </div>
                </li>
              )}
              <li>
                <div className="after-g-i-n-drawer-title">
                  <Link
                    className="after-g-i-n-page-title-main"
                    onClick={() => {
                      setIsDrawerOpen(false);
                    }}
                  >
                    <p
                      className="after-g-i-n-page-title"
                      style={{ color: "#2d151a" }}
                    >
                      My NFT
                    </p>
                    <ArrowDropDownIcon style={{ color: "#2d151a" }} />
                  </Link>
                  <div className="after-g-i-n-page-line" />
                </div>
              </li>
              <li>
                <div className="after-g-i-n-drawer-title">
                  <Link
                    className="after-g-i-n-page-title-main"
                    onClick={() => {
                      setIsDrawerOpen(false);
                    }}
                  >
                    <p
                      className="after-g-i-n-page-title"
                      style={{ color: "#2d151a" }}
                    >
                      Template
                    </p>
                    <ArrowDropDownIcon style={{ color: "#2d151a" }} />
                  </Link>
                  <div className="after-g-i-n-page-line" />
                </div>
              </li>
              <br />
            </ul>
            <div style={{ margin: "15px" }}>
              <Button
                variant="contained"
                className="after-g-i-n-wallet-btn"
                disableRipple={true}
              >
                <img src={Wallet2} />
                0x05avc....aswa12
              </Button>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
export default AfterGenerateImageNavbar;
