import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomeLayout from './components/HomeLayout';
// import Login from './components/Login';
// import Register from './components/Register';
// import Dashboard from './components/Dashboard';
// import Logout from './components/Logout';
import { Dashboard, HomeLayout, Landing, Login, Logout, Register } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
