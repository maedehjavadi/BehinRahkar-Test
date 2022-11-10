import axios from "axios";
import { useCallback, useState } from "react";

const useAuth = () => {
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  // const location = useLocation();
  const [loading, setLoading] = useState(false);
  const accessToken = window.localStorage.getItem("accessToken");

  const login = useCallback(async (username: string, password: string) => {
    setLoading(true);
    await axios
      .post("https://reqres.in/api/login", { email: username, password })
      .then((response) => setToken(response?.data?.token));
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setToken = useCallback((accToken: string | null) => {
    if (accToken) {
      localStorage.setItem("accessToken", accToken);
    } else {
      localStorage.removeItem("accessToken");
    }
  }, []);

  const initialize = async () => {
    setLoading(true);
    if (accessToken && isValidToken(accessToken)) {
      //   setToken(accessToken);
    }
    setLoading(false);
  };

  function isValidToken(accessToken: string) {
    if (!accessToken) {
      return false;
    }
    // const decoded = jwtDecode<{ exp: number }>(
    //   localStorage.getItem("accessToken")!
    // );
    // const currentTime = Date.now() / 1000;

    return true;
  }

  return {
    login,
    initialize,
    loading,
    isAuthenticated: accessToken ? isValidToken(accessToken) : false,
    logout,
  };
};

export default useAuth;
