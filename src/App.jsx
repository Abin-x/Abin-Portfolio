import './App.css';
import { Route,Routes } from 'react-router-dom';
import Header from './components/Ui/Header/header';
import Home from './Pages/Home/home';
import About from './Pages/About/about';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App