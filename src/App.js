import "./App.css";
import {Routes,BrowserRouter, Route} from 'react-router-dom'
import Layout from "./Layout/Layout";
import HomePage from "./pages/Home/HomePage";
import { useEffect, useState } from "react";
import DarkProvider from "./component/Context/DarkProvider";
import Country from "./pages/country/Country";


function App() {
 

  return (
  // <div className={theme}>
     <BrowserRouter>
     <DarkProvider>
      <Layout>
        <Routes>
          
           <Route path="/" element={<HomePage />} />
          <Route path="/contry/:name" element={<Country/>} />
          
        </Routes>
      </Layout>
     </DarkProvider>
      
    </BrowserRouter>
  // </div>
   
  );
}

export default App;
