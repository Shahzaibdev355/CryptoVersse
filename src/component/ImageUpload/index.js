import React, { useRef } from 'react'
import { Upload } from "../../asset/svg";
import "./style.css"; 

const ImageUpload = ({ handleFileChange, formData }) => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };
console.log(formData?.image,"formData?.image")
  return (
    <div className="dropzone">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        accept=".jpeg, .jpg, .png"
      />
      <div className="file-drag-main" style={{ width: "100%", height: "100%" }} onClick={handleImageClick}>
        {formData?.image ?
          <img style={{ width: "100%", height: "100%", objectFit: "fill" }} src={URL.createObjectURL(formData?.image)} alt="Upload" /> :
          <>
            <img src={Upload} alt="Upload" />
            <p className="upload-button-title">
              Drag and drop or <span>choose file</span> to upload
            </p>
            <p className="upload-button-format">
              Format Supports: jpeg, jpg, png
            </p>
          </>
        }
      </div>
    </div>
  );
};

export default ImageUpload