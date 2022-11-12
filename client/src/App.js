import Home from "./component/pages/home/Home";
import Single from "./component/pages/single/Single";
import Write from "./component/pages/write/Write";
import Topbar from "./component/topbar/Topbar";
import Settings from "./component/pages/settings/Settings";
import Login from "./component/pages/login/Login";
import Register from "./component/pages/register/register";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/single" element={<Single/>}/>
        <Route path="/write" element={<Write/>}/>
      </Routes>
    </Router>
  );
}

export default App;
