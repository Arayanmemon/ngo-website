
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Support from "./pages/Support";
import Awards from "./pages/Awards";
import ProfileInfo from "./pages/ProfileInfo";
import Profile from "./pages/Profile";
import Volunteers from "./pages/Volunteers";
import YourProjects from "./pages/YourProjects";
import AddProjects from "./pages/AddProjects";

export default function App() {


  return (
    <div
      className="body min-h-[100vh]" 
      style={
        {backgroundImage: "linear-gradient(rgba(91, 147, 166, 1), rgba(0, 0, 0, 0))"}
      }
    >
      <BrowserRouter>
      <Routes>
        <Route path="/" >
        <Route index element={<Dashboard />} />
          <Route path="/support" element={<Support/>}/>
          <Route path="/awards" element={<Awards/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/profileinfo" element={<ProfileInfo/>}/>
          <Route path="/volunteers" element={<Volunteers/>}/>
          <Route path="/yourprojects" element={<YourProjects/>}/>
          <Route path="/addprojects" element={<AddProjects/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
