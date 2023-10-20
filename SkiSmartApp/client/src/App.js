import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Results from "./pages/Results";
import Details from "./pages/Details";
import Profile from "./pages/Profile";
import Signin from "./pages/SignIn";
import Signup from "./pages/SignUp";
import Aboutus from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

import bg from './assets/images/mainbg.jpg';

function App() {
  return (
    <>
      <Navbar />
      <div className='w-full h-screen relative'>
        <img src={bg} className='w-full h-full object-cover' alt='background' />
        <div className='absolute w-full h-full top-0 left-0 flex flex-col justify-center'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
            <Route path="/details" element={<Details />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}


export default App;