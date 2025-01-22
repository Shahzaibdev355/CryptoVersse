import React from "react";
import "./index.css";
import { LogoPng, FooterSocialIcon  } from "../../asset/images";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Twitter, LinkedIn, GitHub, Facebook } from "@mui/icons-material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  const List = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Features",
      path: "",
    },
    {
      title: "How It Works",
      path: "",
    },
    {
      title: "Tokens",
      path: "",
    },
    {
      title: "FAQ",
      path: "",
    },
  ];
  return (
    <div className="footer-container">
      <div className="footer-logo">
        <Link to="/">
          <img src={LogoPng} />
        </Link>
      </div>
      <div className="footer-page-list">
        {List.map((val, index) => {
          return (
            <Link key={index} to={val.path} className="footer-page-list-link">
              {val.title}
            </Link>
          );
        })}
      </div>


      <div className="footer-page-icons-row">
          <Twitter/>
          <LinkedIn/>
          <GitHub/>
          <Facebook/>
          <FontAwesomeIcon icon={faDribbble}  className="footer-page-icons-row-svg-dribble"/>
          <img src={FooterSocialIcon} />
      </div>



      <div className="footer-list-main">
        <Grid container spacing={3}>
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
            <p className="footer-list-title">Product</p>
            <Link to="" className="footer-page-link">
              Lorem Ipsum
            </Link>
            <Link to="" className="footer-page-link">
              Lorem
            </Link>
            <Link to="" className="footer-page-link">
              Dolor Sit Amet
            </Link>
            <Link to="" className="footer-page-link">
              Dolor Lorem
            </Link>
            <Link to="" className="footer-page-link">
              Ipsum dolor{" "}
            </Link>
            <Link to="" className="footer-page-link">
              Lorem
            </Link>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
            <p className="footer-list-title">Explore</p>
            <Link to="" className="footer-page-link">
              Resources
            </Link>
            <Link to="" className="footer-page-link">
              Blog
            </Link>
            <Link to="" className="footer-page-link">
              Documents
            </Link>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
            <p className="footer-list-title">Community</p>
            <Link to="" className="footer-page-link">
              Community Central
            </Link>
            <Link to="" className="footer-page-link">
              Support
            </Link>
            <Link to="" className="footer-page-link">
              Help
            </Link>
            <Link to="" className="footer-page-link">
              My info
            </Link>
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
            <p className="footer-list-title">Company</p>
            <Link to="" className="footer-page-link">
              About us
            </Link>
            <Link to="" className="footer-page-link">
              Partners
            </Link>
            <Link to="" className="footer-page-link">
              Customers
            </Link>
            <Link to="" className="footer-page-link">
              Contact us
            </Link>
          </Grid>
        </Grid>
      </div>
      <div className="footer-input-container">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={2} lg={2} xl={3} />
        <Grid item xs={12} sm={12} md={8} lg={8} xl={6}>
          <div className="footer-input-main">
            <input placeholder="Subscribe Now" />
            <Button variant="contained" className="footer-send-btn">
              Send Now
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2} xl={3} />
      </Grid>
      </div>
      <p className="copyright">Copyrighted © 2024 Cryptoverse </p>
    </div>
  );
};
export default Footer;
