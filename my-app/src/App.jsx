import React from 'react';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './UI/Navbar';
import Colors from './Components/Colors';
import Error from './Components/Error';

import rasm1 from "./Images/rasm1.png"
import rasm2 from "./Images/rasm2.png"
import rasm3 from "./Images/rasm3.png"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Features from './Components/Features';


import rasm10 from "./Images/colors img/10.webp"
import rasm11 from "./Images/colors img/11.webp"
import rasm12 from "./Images/colors img/12.webp"
import rasm13 from "./Images/colors img/13.webp"
import rasm14 from "./Images/colors img/14.webp"
import rasm15 from "./Images/colors img/15.webp"
import rasm16 from "./Images/colors img/16.webp"
import rasm18 from "./Images/colors img/18.webp"




const App = () => {
  return (

    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path='/' element={<Home img={rasm2}></Home>} />
          <Route path='/about' element={<About img={rasm1}></About>} />

          <Route path='/colors' element={<Colors
            img1={rasm10} img2={rasm11} img3={rasm12}
            img4={rasm13} img5={rasm14} img6={rasm15}
            img7={rasm16} img8={rasm18}></Colors>} />

          <Route path='/*' element={<Error />} />


          <Route path='/features' element={<Features img={rasm3}></Features>} />




        </Routes>



      </BrowserRouter>





    </div>
  );
};

export default App;