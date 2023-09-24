
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Results from "./pages/results";
import Details from "./pages/details";
import Profile from "./pages/profile";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Aboutus from './pages/aboutus';
import NotFound from './pages/notFound';
import Footer from './components/Footer';

import bg from './assets/images/mainbg.jpg';

function App() {
  return (
    <>
    <Navbar/>
    <div className='w-full h-screen relative'>
      <img src={bg} className='w-full h-full object-cover' alt='background' />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/80'>
      
        </div>
        </div>

       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/results" element={<Results />} />
          <Route path="/details" element={<Details />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path='*' element={<NotFound/>}/>
       </Routes>
       <Footer/>
    </>
  );
}

export default App;
