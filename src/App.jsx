
import './App.css';
import NavigationBar from './pages/components/NavigationBar';
import Main from './pages/Main'; 
import Projects from './pages/Projects'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>       
      </div>
    </BrowserRouter>
  );
}

export default App;
