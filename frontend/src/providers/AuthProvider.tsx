import { axiosInstance } from "@/lib/axios";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";

const updateAPiToken = (token: string | null) => {
  if (token)
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  else delete axiosInstance.defaults.headers.common["Authorization"];
};

function AuthProvider() {
  const { getToken, userId } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = await getToken();
        updateAPiToken(token);
      } catch (error) {
        updateAPiToken(null)
        console.log("Error in auth provider", error);
      } finally{
        setLoading(false);
      }
    };

    initAuth()
  }, [getToken]);
  return <div></div>;
}

export default AuthProvider;
