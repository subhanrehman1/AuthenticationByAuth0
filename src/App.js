import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./Dashboard";
import LoginBtn from "./LoginBtn";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="ui segment">
      <Routes>
        <Route path="/" exact element={<LoginBtn />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
