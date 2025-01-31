import { useAuthStore } from "../../store/AuthUser";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";

const HomePage = () => {
  const { user } = useAuthStore();
  return <>{user ? <HomeScreen /> : <AuthScreen />}</>;
};

export default HomePage;
