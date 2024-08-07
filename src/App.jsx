import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import { Routes, Route } from "react-router-dom";
import AddPuppy from "./pages/AddPuppy";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home token={token} setToken={setToken} />} />
        <Route path="/details/:id" element={<Details />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/addPlayer" element={<AddPuppy />} />
        </Route>
        <Route path="/addPlayer" element={<AddPuppy />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
