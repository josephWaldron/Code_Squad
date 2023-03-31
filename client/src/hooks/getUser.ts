import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import backendClient from "../services/backend-client";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  java: number;
  python: number;
}

const getUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = Cookies.get("hash");
        const response = await backendClient.get(`/user/${userId}`);
        const user: User = response.data;
        setUser(user);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data ?? "An unknown error occurred");
        } else {
          setError("An unknown error occurred");
        }
      }
    };
    fetchUser();
  }, []);

  return { user, error };
};

export default getUser;
