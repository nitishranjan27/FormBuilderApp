import React, { useState } from 'react';
import api from '../utils/api';
import { useNavigate } from 'react-router-dom';
import QuestionEditor from '../components/QuestionEditor';

const FormEditor = () => {
  const [title, setTitle] = useState('');
  const [headerImage, setHeaderImage] = useState(null);
  const [image, setImage] = useState(null);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  // Handle header image upload
  const handleHeaderImageChange = (e) => {
    const file = e.target.files[0];
    setHeaderImage(file);
  };
  // Handle question image upload
  const handleImageChange = (e) => {
    const imagefile = e.target.files[0];
    setImage(imagefile);
  };

  const addTextQuestion = (e) => {
    setQuestions([...questions, { type: 'text', questionText: '', image: image }]);
  };

  const updateQuestion = (index, updatedQuestion) => {
    const newQuestions = [...questions];
    newQuestions[index] = updatedQuestion;
    setQuestions(newQuestions);
  };

  const deleteQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const createForm = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      if (headerImage) {
        formData.append('headerImage', headerImage);
      }
      formData.append('questions', JSON.stringify(questions));

      const response = await api.post('/create', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Form created successfully!');
      navigate(`/preview/${response.data.form._id}`);
    } catch (error) {
      console.error('Error creating form:', error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Create a Form</h1>
      <input
        type="text"
        placeholder="Form Title"
        className="border p-2 w-full mb-4"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Upload Header Image</label>
        <input type="file" onChange={handleHeaderImageChange} />
      </div>

      <button onClick={addTextQuestion} className="bg-blue-500 text-white px-4 py-2 mb-4">
        Add Text Question
      </button>

      {questions.map((q, index) => (
        <QuestionEditor
          key={index}
          question={q}
          index={index}
          onUpdate={updateQuestion}
          onDelete={deleteQuestion}
        />
      ))}

      <button onClick={createForm} className="bg-green-500 text-white px-4 py-2">
        Create Form
      </button>
    </div>
  );
};

export default FormEditor;