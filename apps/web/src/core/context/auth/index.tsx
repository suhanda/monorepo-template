import { AuthState } from "@/core/entities/auth";
import { createContext, useContext, useState, PropsWithChildren } from "react";

interface AuthContextType extends AuthState {
  user?: string;
  login: (username: string) => void;
  logout: () => void;
  token: string;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [user, setUser] = useState<string>();

  const login = (username: string) => {
    setUser(username);
  };

  const logout = () => {
    setUser(undefined);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: true, token: "" }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
