import { createContext, useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import api from "../lib/api";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const login = async (body) => {
    try {
      setLoading(true);
      const response = await api.post("/auth/login", body);
      if (response.status === 200) {
        setUser(response.data.user);
        localStorage.setItem("authToken", response.data.token);
        navigate("/user")
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (body) => {
    try {
      setLoading(true);
      const response = await api.post("/auth/signup", body);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const verify = async () => {
    try {
      setLoading(true);
      const response = await api.get("/auth/verify");
      if (response.status === 200) {
        setUser(response.data.user);
      }
    } catch (error) {
      localStorage.clear();
      setUser(null);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
    navigate("/auth")
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      verify();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
