import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DiseaseDetail from './pages/DiseaseDetail';
import AllDiseases from './pages/AllDiseases';
import BodySystems from './pages/BodySystems';
import CommonQuestions from './pages/CommonQuestions';
import About from './pages/About';
import SearchResults from './pages/SearchResults';
import BodySystemDiseases from './pages/BodySystemDiseases';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/disease/:id" element={<DiseaseDetail />} />
          <Route path="/diseases" element={<AllDiseases />} />
          <Route path="/body-systems" element={<BodySystems />} />
          <Route path="/body-system/:systemId" element={<BodySystemDiseases />} />
          <Route path="/common-questions" element={<CommonQuestions />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;