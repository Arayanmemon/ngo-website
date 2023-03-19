import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Support from "./pages/Support";
import Awards from "./pages/Awards";
import NGOProfile from "./pages/NGOProfile";
import Profile from "./pages/Profile";
import Volunteers from "./pages/Volunteers";
import YourProjects from "./pages/YourProjects";
import AddProjects from "./pages/AddProjects";
import EditProfile from "./pages/EditProfile";
import SupportChat from "./pages/SupportChat";

export default function App() {
  return (
    <div
      className="body min-h-[100vh]"
      
    >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="/support" element={<Support />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ngoprofile" element={<NGOProfile />} />
            <Route path="/volunteers" element={<Volunteers />} />
            <Route path="/yourprojects" element={<YourProjects />} />
            <Route path="/addprojects" element={<AddProjects />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/SupportChat" element={<SupportChat/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
