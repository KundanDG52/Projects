import { useAuth } from "../context/AuthContext";
import Login from "./Login";

function ProtectedRoute({ children }) {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Login />;
  }
  return children;
}

export default ProtectedRoute;
