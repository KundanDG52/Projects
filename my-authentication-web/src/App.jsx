import Login from "./components/Login";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";

import { useAuth } from "./context/AuthContext";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ) : (
        <Login />
      )}
    </>
  );
}
export default App;
