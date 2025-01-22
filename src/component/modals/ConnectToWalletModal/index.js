import React, { useState } from 'react'
import { Solana, Copy2, Document, } from "../../../asset/svg";
import { LogoPng, } from "../../../asset/images";
import { Button } from '@mui/material';
import Model from '../../model';
import { useAuth } from '../../../hooks/useAuth';
import { formatToken } from '../../../utils/TokenFormater';
const ConnectToWalletModal = ({ connetWalletModal, setConnectWalletModal, connectLoadingDone, setConnectLoading, setConnectLoadingDone, connectLoading }) => {
    const { store: { user, status, logoutStatus }, connectToWallet, disconnectWallet } = useAuth()

    const checkPhantomAvailability = () => {
        if (window.solana && window.solana.isPhantom) {
            return true;
        }
        return false;
    };
    const connectPhantomWallet = async () => {
        const isPhantomAvailable = checkPhantomAvailability();

        if (!isPhantomAvailable) return window.location.assign("https://phantom.app/?utm_source=localhost:3000");;
        try {
            const resp = await window?.solana?.connect();
            const pubKey = resp?.publicKey?.toString();
            const obj = await {
                walletAddress: pubKey,
                role: "USER",
                type: "USER"
            }
            await connectToWallet(obj);
        } catch (error) {
            console.error("Failed to connect Phantom Wallet:", error);
        }
    };
    const HandleLogout = async () => {
        await disconnectWallet();
    }

    const postPublicKeyToServer = async (pubKey) => {
        //   try {
        //     const response = await fetch('http://localhost:5000/api/save-wallet', {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json',
        //       },
        //       body: JSON.stringify({ publicKey: pubKey }),
        //     });

        //     const data = await response.json();
        //     console.log("Server response:", data);
        //   } catch (error) {
        //     console.error("Error posting public key to the server:", error);
        //   }
    };

    return (
        <Model
            open={connetWalletModal}
            onClose={() => setConnectWalletModal(false)}
            maxWidth="xs"
            title=""
        >
            <div className="home-modal-logo">
                <img src={LogoPng} />
            </div>
            {!user?.walletAddress ? (
                <div>
                    <p className="connect-modal-title">Connect to Cryptoverse</p>
                    <Button
                        variant="contained"
                        className="home-solna-connect-btn"
                        disableRipple={true}
                        onClick={() => connectPhantomWallet()}
                    >
                        <img src={Solana} />
                        {status === "pending" ? "Connecting To Wallet" : "Solana Wallet"}
                    </Button>
                </div>
            ) : (
                <div>
                    <div className="home-connecting-box">
                        <div className="home-connecting-box-header">
                            <div></div>
                            <p>{formatToken(user?.walletAddress)}</p>
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
                            onClick={() => HandleLogout()}
                        >
                            {logoutStatus === "Pending" ? "Disconnection" : "Disconnect"}
                        </Button>
                    </div>
                </div>
            )}
        </Model>
    )
}

export default ConnectToWalletModal