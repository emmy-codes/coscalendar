
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Calendar from './components/Calendar'
import CosPlan from './components/CosPlan';
import Login from './components/Login';
import Signup from './components/Signup';
import UserProfile from './components/UserProfile';
import Expenses from './components/Expenses';

function App() {
  return (
    <div className="App flex flex-col min-h-screen bg-chetwode-blue-100">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/cosplanning" element={<CosPlan />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/expenses" element={<Expenses />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
