
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
      className="body bg-gradient-to-b from-slate-700 to-slate-50 min-h-[100vh]"
      style={{
        backgroundColor:
          "linear-gradient(180deg, #1C244D 0%, rgba(58, 143, 143, 0) 100%)",
      }}
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
