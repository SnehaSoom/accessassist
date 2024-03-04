import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    // Additional validation logic can be added here
  };

  return (
    <div>
      <input type="file" accept=".pdf,.ppt,.pptx" onChange={handleFileChange} />
      {file && <p>File selected: {file.name}</p>}
    </div>
  );
};

export default FileUpload;
