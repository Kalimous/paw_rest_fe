import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './views/SignIn';
import Main from './views/main';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="*" element={<div>페이지를 찾을 수 없습니다.</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
