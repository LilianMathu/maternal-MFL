import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileLayout from "./Layouts/ProfileLayout/ProfileLayout";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";

function App() {
  const isLoggedIn = true;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/*"
            element={isLoggedIn ? <ProfileLayout /> : <AuthLayout />}
          />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
