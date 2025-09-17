import './css/App.css';
import { RegisterForm } from './components/registerForm.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { LoginForm } from './components/loginForm.jsx';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/register" element={<RegisterForm/>}></Route>
          <Route path="/login" element={<LoginForm/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
