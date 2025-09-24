import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { loginApi, registerApi, decodeToken } from '../api/fakeAuth';
import jwtDecode from 'jwt-decode'; 
const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [user, setUser] = useState(() => {
    if (token) return decodeToken(token) || null;
    return null;
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!token) {
      setUser(null);
      localStorage.removeItem('token');
      return;
    }
    const payload = decodeToken(token);
    if (!payload || payload.exp * 1000 < Date.now()) {
      // expired
      setToken(null);
      setUser(null);
      localStorage.removeItem('token');
    } else {
      setUser(payload);
      localStorage.setItem('token', token);
    }
  }, [token]);
  const login = useCallback(async ({ email, password }) => {
    setLoading(true);
    try {
      const res = await loginApi({ email, password });
      setToken(res.token);
      setLoading(false);
      return { ok: true };
    } catch (err) {
      setLoading(false);
      return { ok: false, message: err.message || 'Login failed' };
    }
  }, []);
  const register = useCallback(async ({ email, password }) => {
    setLoading(true);
    try {
      await registerApi({ email, password });
      setLoading(false);
      return { ok: true };
    } catch (err) {
      setLoading(false);
      return { ok: false, message: err.message || 'Register failed' };
    }
  }, []);
  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  }, []);
  return (
    <AuthContext.Provider value={{ token, user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}