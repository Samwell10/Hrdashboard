import './App.css';
import Layout from './components/Layout/Layout';
import Sidebar from './components/Layout/Sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom'
import Router from './routes';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router/>
      </div>
    </BrowserRouter>
  );
}

export default App;
