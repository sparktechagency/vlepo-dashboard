import { Navigate, useLocation } from "react-router-dom";
import { useGetProfileQuery } from "../redux/features/auth/authApi";
 

const PrivateRoute = ({ children }:{children:React.ReactNode}) => {
  const location = useLocation(); 
  const { data:profile, isLoading, isFetching, isError } =useGetProfileQuery(undefined)   

  
  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  if (isError || !profile) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (profile?.role === "ADMIN" || profile?.role === "SUPER_ADMIN") {
    return children; 
  }

  
  return <Navigate to="/login" />;
};

export default PrivateRoute;