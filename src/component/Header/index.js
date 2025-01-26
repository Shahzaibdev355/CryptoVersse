import React, { useState } from "react";
import "./index.css";
import { Wallet } from "../../asset/svg";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

import { Link as ScrollLink } from "react-scroll";

import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import { useAuth } from "../../hooks/useAuth";
import { Wallet2 } from "../../asset/svg";
import { formatToken } from "../../utils/TokenFormater";
import { LogoPng, profilePlaceHolder } from "../../asset/images";

const Header = ({ onClick }) => {
  const navigate = useNavigate();
  const {
    store: { user, status },
  } = useAuth();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const List = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Features",
      path: "features-section",
      // scroll: true,
    },

    // This link will be showed when user is login
    {
      title: "  MyNft",
      path: "myNft",
    },

    {
      title: "How It Works",
      path: "",
    },
    {
      title: "RoadMap",
      path: "/Roadmap",
    },
    {
      title: "Whitepaper",
      path: "/whitepaper",
    },
    {
      title: "FAQ",
      path: "faq-section",
    },
  ];

  const handleClick = (item) => {
    if (item.scroll) {
      // Scroll to the section
      ScrollLink.scrollTo(item.path, {
        smooth: true,
        duration: 500,
      });
    } else if (item.external) {
      // Open external link
      window.location.href = item.path;
    } else {
      // Navigate using react-router
      navigate(item.path);
    }
  };

  return (
    <div className="navbar-container">
      {isMatch ? (
        <div className="navbar-container-inner" id="navbar-container-inner">
          <img src={LogoPng} className="navbar-logo" style={{ border: "" }} />
          <IconButton
            onClick={() => {
              setIsDrawerOpen(true);
            }}
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
        </div>
      ) : (
        <Grid container spacing={0}>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
          <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
            <div className="navbar-container-inner">
              <Link to="/">
                <img
                  src={LogoPng}
                  className="navbar-logo"
                  style={{ border: "" }}
                />
              </Link>
              <div>
                {/* {List.map((val, index) => {
                  if (!user?.walletAddress && val.path === "myNft") return
                  return (
                    <>
                    
                      {val.title === "FAQ" ? (
                        <a href={val.path} className="navbar-link" key={index}>
                          {val.title}
                        </a>
                      ) : (
                        <Link  to={val.path} className="navbar-link" key={index}>
                          {val.title}
                        </Link>
                      )}
                    </>


                  );
                })} */}

                {/* ======================New code with Link Scroll Feature====================== */}

                {List.map((val, index) => {
                  // Skip "myNft" link if the user is not logged in
                  if (!user?.walletAddress && val.path === "myNft") return;

                  // Scrollable links for sections within the page
                  const isScrollable = ["Features", "FAQ"].includes(val.title);

                  return isScrollable ? (
                    <ScrollLink
                      key={index}
                      to={val.path}
                      smooth={true}
                      duration={500}
                      className="navbar-link"
                    >
                      {val.title}
                    </ScrollLink>
                  ) : (
                    // Navigation links for other pages
                    <Link key={index} to={val.path} className="navbar-link">
                      {val.title}
                    </Link>
                  );
                })}
              </div>

              {user?.walletAddress ? (
                // <Button
                //   variant="contained"
                //   className="after-g-i-n-wallet-btn"
                //   disableRipple={true}
                //   onClick={onClick}
                // >
                //   <img src={Wallet2} />
                //   {formatToken(user?.walletAddress)}
                // </Button>
                <Button
                  variant="contained"
                  className="after-g-i-n-wallet-btn"
                  disableRipple={true}
                  onClick={onClick}
                >
                  <img src={Wallet2} />
                  {formatToken(user?.walletAddress)}

                  <Link
                    to="/profile"
                    className="after-g-i-n-wallet-btn-profile-btn-link"
                  >
                    <img
                      src={profilePlaceHolder}
                      className="after-g-i-n-wallet-btn-profile-btn"
                    />
                  </Link>
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className="navbar-wallet-btn"
                  disableRipple={true}
                  onClick={onClick}
                >
                  <img src={Wallet} />
                  <p>
                    {status === "pending" ? "Connecting..." : "Connect Wallet"}
                  </p>
                </Button>
              )}
            </div>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
        </Grid>
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
              {List.map((val, index) => {
                // Skip "myNft" link if the user is not logged in
                if (!user?.walletAddress && val.path === "myNft") return null;

                // Determine if the link should scroll to a section within the page
                const isScrollable = ["Features", "FAQ"].includes(val.title);

                return (
                  <li key={index}>
                    {isScrollable ? (
                      // Scrollable links for "Features" and "FAQ"
                      <ScrollLink
                        to={val.path}
                        smooth={true}
                        duration={500}
                        className="side-menu-page"
                        style={{ paddingLeft: "10px", textDecoration: "none" }}
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        <span className="side-menu-page-title">
                          {val.title}
                        </span>
                      </ScrollLink>
                    ) : (
                      // Navigation links for other pages
                      <Button
                        variant="text"
                        className="side-menu-page"
                        onClick={() => {
                          setIsDrawerOpen(false);
                          navigate(val.path);
                        }}
                      >
                        <span className="side-menu-page-title">
                          {val.title}
                        </span>
                      </Button>
                    )}
                  </li>
                );
              })}

              <br />
            </ul>
            <div style={{ margin: "15px" }}>
              {/* <Button
                variant="contained"
                className="navbar-wallet-btn"
                disableRipple={true}
                onClick={() => {
                  setIsDrawerOpen(false);
                  onClick();
                }}
              >
                <img src={Wallet} />
                <p>Connect Wallet</p>
              </Button> */}

              {user?.walletAddress ? (
               
                <Button
                  variant="contained"
                  className="after-g-i-n-wallet-btn"
                  disableRipple={true}
                  onClick={onClick}
                >
                  <img src={Wallet2} />
                  {formatToken(user?.walletAddress)}

                  <Link
                    to="/profile"
                    className="after-g-i-n-wallet-btn-profile-btn-link"
                  >
                    <img
                      src={profilePlaceHolder}
                      className="after-g-i-n-wallet-btn-profile-btn"
                    />
                  </Link>
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className="navbar-wallet-btn"
                  disableRipple={true}
                  onClick={onClick}
                >
                  <img src={Wallet} />
                  <p>
                    {status === "pending" ? "Connecting..." : "Connect Wallet"}
                  </p>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
export default Header;
