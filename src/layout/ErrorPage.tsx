import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);

  return null;
};

export default ErrorPage;
