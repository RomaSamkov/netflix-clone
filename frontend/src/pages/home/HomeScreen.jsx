import { useAuthStore } from "../../store/AuthUser";

const HomeScreen = () => {
  const { logout } = useAuthStore();
  return (
    <>
      <div>HomeScreen</div>
      <button onClick={logout}>Logout</button>
    </>
  );
};

export default HomeScreen;
