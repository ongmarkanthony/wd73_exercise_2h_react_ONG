import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationForm from './pages/registration'; 
import ProfileCreation from './pages/profile';
import DocumentUpload from './pages/documentUpload'; 
import TaskCheckList from './pages/taskCheckList'; 
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/profile" element={<ProfileCreation/>} />
          <Route path="/documentUpload" element={<DocumentUpload />} />
          <Route path="/taskCheckList" element={<TaskCheckList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
