import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';
import CosPlan from './components/CosPlan';
import Login from './components/Login';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
import Expenses from './components/Expenses';
import Page404 from './components/Page404';
import Home from './components/Home';
import { CurrentUserProvider } from './contexts/CurrentUserContext';

function App() {
  return (
    <BrowserRouter>
      <CurrentUserProvider>
        <>
            <Navbar />
            <div className="py-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cosplan" element={<CosPlan />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/expenses" element={<Expenses />} />
                <Route path="/user-profile" element={<UserProfile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </div>
        </>
      </CurrentUserProvider>
    </BrowserRouter>
  );
}

export default App;
