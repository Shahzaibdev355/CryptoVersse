import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import "./index.css";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
let Model = ({ open, onClose, maxWidth, children, title }) => {
  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth={maxWidth}
      fullWidth
      style={{ backgroundColor: "#1C1C1C80" }}
    >
      <DialogContent dividers className="modal-main">
        <div className="modal-main-typography">
          <div
            className="modal-header"
            style={{ borderBottomWidth: title !== "" ? "0.7px" : "0px" }}
          >
            <p>{title}</p>
            <Button
              variant="text"
              disableRipple={true}
              className="modal-close-btn"
              onClick={onClose}
            >
              <CloseIcon style={{ color: "#FEFEFE" }} />
            </Button>
          </div>
          {children}
        </div>
      </DialogContent>
    </BootstrapDialog>
  );
};
export default Model;
