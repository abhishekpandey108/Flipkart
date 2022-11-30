import Header from './components/header/Header';
import Home from './components/home/Home';
import DeatailView from './components/details/DeatailView';
import DataProvider from './context/DataProvider';
import Cart from './components/cart/Cart';
import {Box} from '@mui/material';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <DataProvider>
       <BrowserRouter> 
        <Header />
     
        <Box style={{marginTop: '55px'}}>
          <Routes>
            <Route path = '/' element={<Home />}  />
            <Route path = '/product/:id' element={<DeatailView />}  />
            <Route path = '/cart' element={<Cart />} />
          </Routes>
        </Box>

      </BrowserRouter>
    </DataProvider>
  );
}

export default App;