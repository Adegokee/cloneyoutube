
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import MovieContext from './Movie';
import ListContext from './components/ListContext';
import NavBar from './components/NavBar';
import Form from './components/Form';
import Header from './components/Header';

function App() {
  return (
   
    <Routes>
      <Route path="/"  element={

<MovieContext>
  <Form />
  <Header/>
<ListContext />

</MovieContext> 
      }/>
    
    
    </Routes>
        
     

  
  );
}

export default App;
