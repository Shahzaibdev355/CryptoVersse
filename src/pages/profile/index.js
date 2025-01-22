import React from "react";
import Button from "@mui/material/Button";
import PublicProfile from "./PublicProfile";
import ProfileSetting from "./ProfileSetting";
import { useSearchParams } from "react-router-dom";
import AfterGenerateImageNavbar from "../../component/after-genderate-image-navbar";
const Profile = () => {
  const [param, setParam] = useSearchParams()

  let facing = param.get("facing") || "Public"

  return (
    <div className="after-generate-mage-container">
      <AfterGenerateImageNavbar exploreHide={true} />
      <div className="after-generate-mage-container-inner">
        <div className="profile-header">
          <div>
            <div>
              <Button variant="contained" disableRipple={true} onClick={() => setParam({ facing: "Public" })} className={facing === "Public" ? "page-type-selected-btn" : "page-type-btn"}>Public Profile</Button>
              <Button variant="contained" disableRipple={true} onClick={() => setParam({ facing: "Setting" })} className={facing === "Setting" ? "page-type-selected-btn" : "page-type-btn"}> Profile Setting</Button>
            </div>
          </div>
        </div>
        {facing === "Public" ? <PublicProfile />
          : facing === "Setting" ? <ProfileSetting />
            : null}
      </div>
      <br />
    </div>
  );
};
export default Profile;
