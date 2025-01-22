import React, { useEffect, useState } from "react";
import AfterGenerateImageNavbar from "../../component/after-genderate-image-navbar";
import "./index.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AfterGenerateImageCard1,
  AfterGenerateImageCard2,
  AfterGenerateImageCard3,
  AfterGenerateImageCard4,
  AfterGenerateImageCard5,
} from "../../asset/images";

const MyNft = () => {
  // console.log("api:", images);

  const navigate = useNavigate();
  

  // const [list, setList] = useState([
  //   {
  //     img: AfterGenerateImageCard1,
  //     isSelected: false,
  //     title: "ArtCrypto",
  //     text: "Cyber Kangaroo In space, sci-fi style, purple colors",
  //   },
  //   {
  //     img: AfterGenerateImageCard2,
  //     isSelected: false,
  //     title: "ArtCrypto",
  //     text: "Cyber Kangaroo In space, sci-fi style, purple colors",
  //   },
  //   {
  //     img: AfterGenerateImageCard3,
  //     isSelected: false,
  //     title: "ArtCrypto",
  //     text: "Cyber Kangaroo In space, sci-fi style, purple colors",
  //   },
  //   {
  //     img: AfterGenerateImageCard4,
  //     isSelected: false,
  //     title: "ArtCrypto",
  //     text: "Cyber Kangaroo In space, sci-fi style, purple colors",
  //   },
  //   {
  //     img: AfterGenerateImageCard5,
  //     isSelected: false,
  //     title: "ArtCrypto",
  //     text: "Cyber Kangaroo In space, sci-fi style, purple colors",
  //   },
  // ]);


  const location = useLocation();

  const itemType = ["All", "Draft", "Favorites"];



  const [itemTypeSelected, setItemTypeSelected] = useState("All");



  
  useEffect(() => {
    if (location.state?.selectedTab) {
      setItemTypeSelected(location.state.selectedTab);
    }
  }, [location.state]);



  const [list, setList] = useState([
    {
      img: AfterGenerateImageCard5,
      isSelected: true,
      title: "Single Item",
      text: "Cyber Kangaroo In space, sci-fi style, purple colors",
      type: "Draft", // Define the type
    },
    {
      img: AfterGenerateImageCard3,
      isSelected: true,
      title: "Single Item",
      text: "Cyber Kangaroo In space, sci-fi style, purple colors",
      type: "Favorites", // Define the type
    },
    {
      img: AfterGenerateImageCard5,
      isSelected: true,
      title: "Single Item",
      text: "Cyber Kangaroo In space, sci-fi style, purple colors",
      type: "All", // Define the type
    },
  ]);

  // Function to toggle the selection state of an image
  const toggleSelection = (index) => {
    const updatedList = list.map((item, idx) =>
      idx === index ? { ...item, isSelected: !item.isSelected } : item
    );
    setList(updatedList);
  };

  // Filter the list based on the selected itemType
  const filteredList =
    itemTypeSelected === "All"
      ? list
      : list.filter((item) => item.type === itemTypeSelected);

  return (
    <div className="after-generate-mage-container">
      <AfterGenerateImageNavbar />
      <div className="after-generate-mage-container-inner">
        <div className="profile-type-list-main">
          <div>
            <div>
              {itemType.map((val, index) => (
                <Button
                  variant="contained"
                  className={
                    val === itemTypeSelected
                      ? "page-type--list-selected-btn"
                      : "page-type-list-btn"
                  }
                  disableRipple={true}
                  key={index}
                  onClick={() => setItemTypeSelected(val)}
                >
                  {val}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Render Grid based on filteredList */}
        <Grid container spacing={3}>
          {filteredList.map((val, index) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2.4} // Adjust grid sizes as needed
            >
              <div className="a-g-i-p-card">
                <img src={val.img} alt={val.title} />
                <div>
                  <Button
                    variant="contained"
                    className="a-g-i-p-card-check-btn"
                    disableRipple={true}
                    onClick={() => toggleSelection(index)}
                  >
                    <div
                      style={{
                        borderColor: val.isSelected
                          ? "transparent"
                          : "#D9D9D933",
                        background: val.isSelected
                          ? "linear-gradient(to right, #ff7357, #ff2957)"
                          : "transparent",
                      }}
                    >
                      {val.isSelected && (
                        <CheckIcon style={{ height: "15px", width: "15px" }} />
                      )}
                    </div>
                  </Button>
                  <Button
                    variant="contained"
                    className="a-g-i-p-card-nft-btn"
                    disableRipple={true}
                    onClick={() => console.log("Mint NFT")}
                  >
                    <Link to="/mintNft" style={{color: 'white', textDecoration: 'none'}}>Mint NFT</Link>
                  
                  </Button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <br />
    </div>
  );
};
export default MyNft;
