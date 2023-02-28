import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Posts from './components/Posts';
import Footer from './components/Footer';
import ItemComponent from './components/Demo';
import ViewComponent from './components/viewcomponent';
function App() {
  return (
    <div className='App'>
      
        <Header/>
        
          
        <Routes>
        <Route path="/" element={<ItemComponent/>}></Route>
        <Route path="/searchitem" element={<Posts/>}></Route>
        <Route path="/viewitem" element={<ViewComponent/>}></Route>
      </Routes>
          
        
        <Footer/>
      
    </div>
  );
}

export default App;
