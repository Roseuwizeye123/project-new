import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';

const App = () => {
  return (
    <>
<BrowserRouter>
  <Routes>
    <Route path="/"element ={<Main />} >
<Route index element ={<Home />}/>
<Route path="/about"element ={<About />}/>
<Route path="/contact"element ={<Contact/>}/>
</Route>

  </Routes>
</BrowserRouter>
</>
  )
}

export default App
