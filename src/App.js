
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Calendar from './components/Calendar'

function App() {
  return (
    <div className="App flex flex-col min-h-screen bg-chetwode-blue-100">
      <Navbar />
      <Calendar />
      <Footer />
    </div>
  );
}

export default App;
