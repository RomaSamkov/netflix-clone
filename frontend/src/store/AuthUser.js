import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";
const apiUrl = import.meta.env.VITE_API_URL;

export const useAuthStore = create((set) => ({
  user: null,
  isSigningUp: false,
  isCheckingAuth: true,
  isLoggingOut: false,
  isLoggingIn: false,

  signup: async (credentials) => {
    set({ isSigningUp: true });
    try {
      const response = await axios.post(
        `${apiUrl}/api/v1/auth/signup`,
        credentials
      );
      set({ user: response.data.user, isSigningUp: false });
      toast.success("Account is created.");
    } catch (error) {
      toast.error(error.response.data.message || "Signup is failed");
      set({ isSigningUp: false, user: null });
    }
  },

  login: async (credentials) => {
    set({ isLoggingIn: true });
    try {
      const response = await axios.post(
        `${apiUrl}/api/v1/auth/login`,
        credentials
      );
      set({ user: response.data.user, isLoggingIn: false });
      toast.success("Login is successful.");
    } catch (error) {
      toast.error(error.response.data.message || "Login is failed");
      set({ isLoggingIn: false, user: null });
    }
  },

  logout: async () => {
    set({ isLoggingOut: true });
    try {
      await axios.post(`${apiUrl}/api/v1/auth/logout`);
      set({ user: null, isLoggingOut: false });
      toast.success("Logout is successful.");
    } catch (error) {
      set({ isLoggingOut: false });
      toast.error(error.response.data.message || "Logout is failed.");
    }
  },

  authCheck: async () => {
    set({ isCheckingAuth: true });

    try {
      const response = await axios.get(`/api/v1/auth/authCheck`);
      set({ user: response.data.user, isCheckingAuth: false });
    } catch (error) {
      set({ isCheckingAuth: false, user: null });
      console.log("Error in check: ", error.message);
    }
  },
}));
