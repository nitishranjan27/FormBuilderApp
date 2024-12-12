import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../utils/api';

const FormPreview = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await api.get(`/${id}`);
        setForm(response.data);
      } catch (error) {
        console.error('Error fetching form:', error);
      }
    };

    fetchForm();
  }, [id]);

  return (
    <div className="p-8">
      {form ? (
        <>
          {form.headerImage && (
            <img src={`http://localhost:5000/uploads/${form.headerImage}`} alt="Header" className="w-full h-48 mb-4 border-2 border-gray-300 rounded-lg" />
          )}
          <h1 className="text-3xl font-bold mb-4">{form.title}</h1>
          {form.questions.map((q, index) => (
            <div key={index} className="border p-4 mb-4">
              <p className="mb-2">{q.questionText}</p>
              {q.image && (
                <img src={`http://localhost:5000/uploads/${q.image}`} alt="Question" className="w-full h-32 object-cover mb-2" />
              )}
            </div>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FormPreview;