import NavarMenu from './Components/NavarMenu';
import './App.css';
import Introduction from './Components/Introduction/Introduction';
import Services from './Components/Services/Services';
import DynamicForm from './Components/DynamicForm';


//import { useState } from 'react';
//import { useEffect } from 'react';

function App() {

  return (
    <>
    <NavarMenu/>
    <Introduction/>
    <Services/>
    <DynamicForm/>
    </>
  );
}

export default App;
