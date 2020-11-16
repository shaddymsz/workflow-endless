import logo from './endless-logo.png';
import './App.css';
import Sidebar from './component/sidebar';
import Header from './component/header';
import Landing from './component/default';

function App() {
  return (
    <div className="App"> 
    <Header />     
        <Sidebar/>
        <Landing/>
    </div>
  );
}

export default App;
