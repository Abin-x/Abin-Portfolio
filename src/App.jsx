import './App.css';
import Header from './components/Ui/Header/header.jsx';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/home.jsx';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App