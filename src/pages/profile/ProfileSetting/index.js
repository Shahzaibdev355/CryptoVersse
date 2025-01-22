import React, { useEffect, useState } from 'react'
import "./index.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Copy3, Ethereum, Help } from "../../../asset/svg";
import { useAuth } from '../../../hooks/useAuth';
import { toast } from 'react-toastify';
import { useCloudinary } from '../../../hooks/UseCloudinary';
import { PlaceHolder } from '../../../asset/svg';
const ProfileSetting = () => {
    const { store: { user, status }, UpdateProfile } = useAuth()
    const { UploadSingleImage } = useCloudinary()
    const [ProfileDetail, setProfileDetail] = useState({})
    const [ImageBlob, setImageBlob] = useState()

    const WalletsBalanceList = [
        {
            id: "0x817a715266616sad6s1ad5fa1...fv",
            title: "ETHEREUM",
        },
        {
            id: "0x817a715266616sad6s1ad5fa1...fv",
            title: "ETHEREUM",
        },
        {
            id: "0x817a715266616sad6s1ad5fa1...fv",
            title: "ETHEREUM",
        },
        {
            id: "0x817a715266616sad6s1ad5fa1...fv",
            title: "ETHEREUM",
        },
    ];

    const handleChange = (e) => {
        setProfileDetail({ ...ProfileDetail, [e.target.name]: e.target.value })
    }
    const handleImageChange = (e) => {
        setImageBlob(URL?.createObjectURL(e.target.files[0]))
        setProfileDetail({ ...ProfileDetail, "profilePicUrl": e.target.files[0] })
    }

    const handleRemoveImage = (e) => {
        setProfileDetail({ ...ProfileDetail, "profilePicUrl": "" })
        setImageBlob("")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!ProfileDetail?.fullName) return toast.error("Name Is Required")
        if (!ProfileDetail?.email) return toast.error("Email Is Required")
        let image = ProfileDetail?.profilePicUrl
        if (typeof ProfileDetail?.profilePicUrl !== "string") {
            const formData = new FormData();
            formData.append('image', ProfileDetail?.profilePicUrl);
            image = await UploadSingleImage(formData)
        }
        const body = await {
            fullName: ProfileDetail?.fullName || "",
            email: ProfileDetail?.email || null,
            profilePicUrl: image || "",
            bio: ProfileDetail?.bio || "",
            websiteLink: ProfileDetail?.websiteLink || "",
            twitterUserName: ProfileDetail?.twitterUserName || "",
            discordUserName: ProfileDetail?.discordUserName || "",
            instagramUserName: ProfileDetail?.instagramUserName || "",
        }
        await UpdateProfile(body)
    }

    useEffect(() => {
        if (!Object.keys(user)?.length) return
        setProfileDetail(user)
    }, [user])

    console.log(status,"status")
    return (
        <div>
            <div className="profile-line" />
            <Grid container spacing={5}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <p className="profile-form-heading">Details</p>
                    <div className="profile-form-box">
                        <div className="profile-form-box-inner-1">
                            <div className="profile-show-profile-main">
                                <img className="profile-show-profile-box" src={ImageBlob ? ImageBlob : ProfileDetail?.profilePicUrl ? ProfileDetail?.profilePicUrl : PlaceHolder} />
                                <div>
                                    <p className="user-name">{user?.fullName}</p>
                                    <p className="user-email">{user?.email}</p>
                                </div>
                            </div>
                            <label className="attachments-button">
                                <input type="file" hidden onChange={(e) => handleImageChange(e)} />
                                <span>Update image</span>
                            </label>
                            {ProfileDetail?.profilePicUrl ?
                                <Button variant="contained" disableRipple={true} className="remove-image-btn" onClick={handleRemoveImage}>Remove image</Button>
                                : null}
                            <form>
                                <p className="profile-form-main-title">Basic Information</p>
                                <label className="profile-input-title">Display Name</label>
                                <div className="profile-input">
                                    <input value={ProfileDetail?.fullName} type="text" placeholder="Enter Name" onChange={handleChange} name="fullName" />
                                </div>
                                <label className="profile-input-title">Bio</label>
                                <div className="profile-input">
                                    <input value={ProfileDetail?.bio} type="text" placeholder="Enter Bio" onChange={handleChange} name="bio" />
                                </div>
                                <label className="profile-input-title">Email</label>
                                <div className="profile-input">
                                    <input value={ProfileDetail?.email} type="email" placeholder="Enter Email" onChange={handleChange} name="email" />
                                </div>
                                <p className="profile-form-main-title">Social Links</p>
                                <label className="profile-input-title">Website Link</label>
                                <div className="profile-input">
                                    <input value={ProfileDetail?.websiteLink} type="url" placeholder="http : //" onChange={handleChange} name="websiteLink" />
                                </div>
                                <label className="profile-input-title">X (Twitter)</label>
                                <div className="profile-input">
                                    <input value={ProfileDetail?.twitterUserName} type="text" placeholder="@username" onChange={handleChange} name="twitterUserName" />
                                </div>
                                <label className="profile-input-title">Discord</label>
                                <div className="profile-input">
                                    <input type="text" value={ProfileDetail?.discordUserName} placeholder="Enter your discord username" onChange={handleChange} name="discordUserName" />
                                </div>
                                <label className="profile-input-title">Instagram</label>
                                <div className="profile-input">
                                    <input type="text" value={ProfileDetail?.instagramUserName} placeholder="Enter your instagram username" onChange={handleChange} name="instagramUserName" />
                                </div>
                                <div className="profile-form-footer">
                                    <Button variant="contained" disableRipple={true} className="profile-form-footer-cancel-btn">Cancel</Button>
                                    <input type="submit" value={status === "pending" ? "Saving" : "Save"} className="profile-form-footer-save-btn" onClick={(e) => handleSubmit(e)} />
                                </div>
                            </form>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <p className="profile-form-heading">Wallets & Balance</p>
                    <div className="profile-form-box">
                        <div className="profile-form-box-inner-2">
                            {WalletsBalanceList.map((val, index) => {
                                return (
                                    <div key={index} className="profile-waller-card">
                                        <div>
                                            <img src={Ethereum} />
                                            <div>
                                                <p className="profile-waller-card-id">{val.id}</p>
                                                <p className="profile-waller-card-title">
                                                    {val.title}
                                                </p>
                                            </div>
                                        </div>
                                        <img src={Copy3} />
                                    </div>
                                );
                            })}
                            <div className="profile-waller-card-line" />
                            <div className="profile-waller-card-total-main">
                                <div>
                                    <div className="profile-waller-card-total-title-main">
                                        <p className="profile-waller-card-total-title">
                                            Credit balance
                                        </p>
                                        <img src={Help} />
                                    </div>
                                    <p className="profile-waller-card-total-value">0</p>
                                </div>
                                <div>
                                    <p
                                        className="profile-waller-card-total-title"
                                        style={{ textAlign: "right" }}
                                    >
                                        crypto-ai coin Balance
                                    </p>
                                    <p
                                        className="profile-waller-card-total-value"
                                        style={{ textAlign: "right" }}
                                    >
                                        0.00 coin / $0.00
                                    </p>
                                </div>
                            </div>
                            <p className="profile-waller-card-history">
                                Credits Purchase History
                            </p>
                            <div className="profile-waller-card-history-card">
                                <p>ID</p>
                                <p>Created</p>
                                <p>Type</p>
                            </div>
                            <p
                                className="profile-waller-card-history"
                                style={{
                                    borderTopWidth: "0.7px",
                                    borderTopStyle: "solid",
                                }}
                            >
                                Referral History
                            </p>
                            <div
                                className="profile-waller-card-history-card"
                                style={{ paddingBottom: "45px" }}
                            >
                                <p>ID</p>
                                <p>Created</p>
                                <p>Type</p>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProfileSetting