import React from 'react';

const FormHeader = ({ title, imageUrl }) => {
  return (
    <div className="mb-6 text-center">
      {imageUrl && <img src={imageUrl} alt="Form Header" className="w-full h-48 object-cover mb-4" />}
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  );
};

export default FormHeader;