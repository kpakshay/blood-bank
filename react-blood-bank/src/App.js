import './App.css';
import React from "react";
import { Switch, Route } from "react-router-dom";
// import Navbar from './main.js';
import Navbar from './components/navbar';
import HomeComponent from './HomeComponent';
function App() {
  return (
    <div className="App">
      <HomeComponent/>
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <Navbar />
     {/* < AccessibleTabs1/> */}
      {/* <Switch>
         <Route exact path="/home" component={Dashboard} />
         {<h3>Helloooo</h3>}
      </Switch> */} 
    {/* </div> */}
  //   <BrowserRouter>
  //   <Link to="/"> Dashboard</Link>
  //   <Link to="/aboutus"> About Us</Link>
  //   <Link to="/contactus"> Contact Us</Link>
  //   <Link to="/user/5/course/2"> User</Link>
  //   <Routes>
  //     <Route path="/" element={<Dashboard />} />

  //     <Route path="/aboutus" element={<AboutUs />}>
  //       <Route path="" element={<AboutUsIndex />} />
  //       <Route path="history" element={<History />} />
  //       <Route path="branches" element={<Branches />} />
  //     </Route>

  //     <Route path="/contactus" element={<ContactUs />} />
  //     <Route path="/user/:userId/course/:courseId" element={<User />} />
  //   </Routes>
  // </BrowserRouter>
//   );
// }

export default App;
