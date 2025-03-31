import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isAuthDone: boolean;
  logIn: () => void;
  logOut: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthDone, setAuthDone] = useState(
    !!localStorage.getItem("isAuthDone") // Retrieve stored value
  );

  const logIn = () => {
    localStorage.setItem("isAuthDone", "true");
    setAuthDone(true);
  };

  const logOut = () => {
    localStorage.removeItem("isAuthDone");
    setAuthDone(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthDone, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
