import React, { useState } from "react";

const UploadDataset = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleUpload = () => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataset = JSON.parse(reader.result);
      onUpload(dataset);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" accept=".json" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload Dataset</button>
    </div>
  );
};

export default UploadDataset;
