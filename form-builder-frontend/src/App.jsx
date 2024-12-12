import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormEditor from './pages/FormEditor';
import FormPreview from './pages/FormPreview';
import SubmitForm from './pages/SubmitForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormEditor />} />
        <Route path="/preview/:id" element={<FormPreview />} />
        <Route path="/submit/:id" element={<SubmitForm />} />
      </Routes>
    </Router>
  );
}

export default App;