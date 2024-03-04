import React from 'react';

const SaveChanges = ({ editedContent }) => {
  const handleSave = () => {
    // Save edited content back into the original file format
  };

  return (
    <div>
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
};

export default SaveChanges;
