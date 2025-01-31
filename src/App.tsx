import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './views/SignIn';
import Main from './views/main';
import SignUp from './views/SignUp';
import './App.css'
import Register from './views/main/menu/Register'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/Register" element={<Register />}/>
      </Routes>
    </Router>
  );
};
export default App
