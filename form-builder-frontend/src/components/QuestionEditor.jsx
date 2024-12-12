import React from 'react';

const QuestionEditor = ({ question, index, onUpdate, onDelete }) => {
  const handleTextChange = (e) => {
    onUpdate(index, { ...question, questionText: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    onUpdate(index, { ...question, image: file });
  };

  return (
    <div className="border p-4 mb-4">
      <input
        type="text"
        placeholder="Enter question text"
        className="border p-2 w-full mb-2"
        value={question.questionText}
        onChange={handleTextChange}
      />
      <div className="mb-2">
        <label className="block mb-1">Upload Image for Question</label>
        <input type="file" onChange={handleImageChange} />
      </div>
      <button onClick={() => onDelete(index)} className="bg-red-500 text-white px-2 py-1">
        Delete Question
      </button>
    </div>
  );
};

export default QuestionEditor;