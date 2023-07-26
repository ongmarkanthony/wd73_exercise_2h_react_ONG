import React, { useState } from "react";

const DocumentUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      console.log("Selected File:", selectedFile);
    } else {
      alert("Please select a file before uploading.");
    }
  };

  return (
    <div>
      <h2>Document Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default DocumentUpload;
