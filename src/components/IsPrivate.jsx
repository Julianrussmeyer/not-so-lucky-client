import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function IsPrivate({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading)
    return (
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-2xl text-center">
          <span className="loader"></span>
        </div>
      </div>
    );

  if (!user) {
    return <Navigate to="/auth" />;
  } else {
    return children;
  }
}

export default IsPrivate;
