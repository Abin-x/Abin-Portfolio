import './App.css';
import Header from './components/Ui/Header/header.jsx';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/home.jsx';
import Footer from './components/Ui/Footer/footer.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App