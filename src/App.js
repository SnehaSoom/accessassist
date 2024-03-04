import React from 'react';
import FileUpload from './components/FileUpload';
import BoundingBox from './components/BoundingBox';
import TextImageEditing from './components/TextImageEditing';
import SaveChanges from './components/SaveChanges';

const App = () => {
  return (
    <div>
      <h1>File Editor</h1>
      <FileUpload />
      <BoundingBox />
      <TextImageEditing />
      <SaveChanges />
    </div>
  );
};

export default App;
