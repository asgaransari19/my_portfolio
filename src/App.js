import "./App.css";
import { Header } from "./Componants/header";
import Home from "./pages/Home";
import { ParticlesBg } from "./Componants/particlesBg";
import { Aboutus } from "./pages/aboutUs";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { pagePaths } from "./utils/util";
import Contact from "./pages/contact";
// import ContactUs from "";
import { Teams } from "./pages/team";
import { ContactUs } from "./Componants/contactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<Home />}> */}
        <Route path={pagePaths.root} element={<Home />} />
        <Route path={pagePaths.home} element={<Home />} />
        <Route path={pagePaths.about} element={<Aboutus />} />
        <Route path={pagePaths.skills} element={<Skills />} />
        <Route path={pagePaths.projects} element={<Projects />} />
        F <Route path={pagePaths.contact} element={<Contact />} />
        F <Route path={pagePaths.team} element={<Teams />} />
        F <Route path={pagePaths.contactus} element={<ContactUs />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// <div className="App">

//   <header className="App-header">
//     <img src="images/fan2.jpg" className="App-logo" alt="logo" />
//   </header>
// </div>
