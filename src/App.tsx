import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './Routes/Routes';
import './App.css'


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
};
export default App
