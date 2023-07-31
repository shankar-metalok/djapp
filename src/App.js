import logo from './logo.svg';
import './App.css'; 
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './components/home'
import Header from './components/header'
import Cart from './components/cart'



import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
     
         <BrowserRouter>
              <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
         </BrowserRouter>
    </Provider>
  );
}

export default App;
