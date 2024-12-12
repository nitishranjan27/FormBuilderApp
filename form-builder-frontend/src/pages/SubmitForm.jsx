import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../utils/api';

const SubmitForm = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [responses, setResponses] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await api.get(`/${id}`);
        setForm(response.data);

        // Initialize responses with empty values
        const initialResponses = {};
        response.data.questions.forEach((q, index) => {
          initialResponses[index] = '';
        });
        setResponses(initialResponses);
      } catch (error) {
        console.error('Error fetching form:', error);
      }
    };

    fetchForm();
  }, [id]);

  const handleChange = (index, value) => {
    setResponses({ ...responses, [index]: value });
  };

  const handleSubmit = async () => {
    try {
      await api.post(`/submit/${id}`, { responses });
      alert('Form submitted successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="p-8">
      {form ? (
        <>
          <h1 className="text-2xl font-bold mb-4">{form.title}</h1>
          {form.questions.map((q, index) => (
            <div key={index} className="border p-4 mb-4">
              <p className="mb-2">{q.questionText}</p>
              <input
                type="text"
                className="border p-2 w-full"
                onChange={(e) => handleChange(index, e.target.value)}
                value={responses[index]}
              />
            </div>
          ))}
          <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2">
            Submit
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SubmitForm;