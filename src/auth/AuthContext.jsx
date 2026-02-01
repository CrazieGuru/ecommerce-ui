import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, getMe, refreshTokenFn, registerUser } from "../api/auth.api";
  // Register method
  
  const AuthContext = createContext(null);
  
  export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isGuest, setIsGuest] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshTokenTimer, setRefreshTokenTimer] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  
  // Check if user is already logged in on mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("access_token");
      if (token) {
        try {
          const me = await getMe();
          setUser(me.data);
          setupTokenRefresh();
        } catch (error) {
          console.log("Token invalid, clearing storage");
          localStorage.clear();
        }
      }
      setIsLoading(false);
    };

    checkAuth();

    return () => {
      if (refreshTokenTimer) clearTimeout(refreshTokenTimer);
    };
  }, []);

  // Setup auto token refresh
  const setupTokenRefresh = () => {
    if (refreshTokenTimer) clearTimeout(refreshTokenTimer);
    
    // Refresh token every 14 minutes (token expires in 15 minutes)
    const timer = setTimeout(async () => {
      try {
        await refreshToken();
      } catch (error) {
        console.log("Token refresh failed, logging out");
        logout();
      }
    }, 14 * 60 * 1000);
    
    setRefreshTokenTimer(timer);
  };

  const register = async (fullname,email,password) => {
    // formData: { firstName, lastName, email, password }
    const formData = { fullname, email, password };
    console.log("Registering with", formData);
    const res = await registerUser(formData);
    // Optionally, you can auto-login or just show a message
    // For security, usually prompt user to verify email and login manually
    return res.data;
  };
  

  const login = async (email, password) => {
    console.log("Logging in with", email, password);
    const res = await loginUser({ email, password });
    localStorage.setItem("access_token", res.data.access_token);
    localStorage.setItem("refresh_token", res.data.refresh_token);
    
    const me = await getMe();
    setUser(me.data);
    setIsGuest(false);
    
    setupTokenRefresh();
  };

  const refreshToken = async () => {
    try {
      const refreshTok = localStorage.getItem("refresh_token");
      if (!refreshTok) {
        throw new Error("No refresh token");
      }

      const res = await refreshTokenFn({ refresh_token: refreshTok });
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
      
      setupTokenRefresh();
      return res.data;
    } catch (error) {
      localStorage.clear();
      setUser(null);
      throw error;
    }
  };

  const guestLogin = () => {
    localStorage.clear();
    setUser({ role: "GUEST" });
    setIsGuest(true);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setIsGuest(false);
    if (refreshTokenTimer) clearTimeout(refreshTokenTimer);
  };

  const openLoginModal = (message = "") => {
    setLoginMessage(message);
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
    setLoginMessage("");
  };

  return (
    <AuthContext.Provider
      value={{ 
        user, 
        isGuest, 
        login, 
        guestLogin, 
        logout, 
        refreshToken, 
        register,
        isLoading,
        showLoginModal,
        setShowLoginModal,
        openLoginModal,
        closeLoginModal,
        loginMessage
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
