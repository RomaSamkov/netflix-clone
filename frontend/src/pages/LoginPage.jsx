import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/AuthUser";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuthStore();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };
  return (
    <div className="hero-bg h-screen w-full">
      <header className="mx-auto max-w-6xl flex items-center justify-between p-4">
        <Link to={"/"}>
          <img src="/netflix-logo.png" alt="logo" className="w-52" />
        </Link>
      </header>
      <div className="flex justify-center items-center mt-20 mx-3">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
          <h1 className="text-center text-white text-2xl mb-4">Login</h1>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-300 block"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@mail.com"
                className="w-full px-3 py-2 mt-1 rounded-md  border border-gray-700 bg-transparent 
                text-white focus:outline-none focus:ring-2"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-300 block"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******"
                className="w-full px-3 py-2 mt-1 rounded-md  border border-gray-700 bg-transparent 
                text-white focus:outline-none focus:ring-2"
              />
            </div>
            <button
              className="w-full py-2 bg-red-600 text-white font-semibold rounded-md
							hover:bg-red-700 cursor-pointer
						"
            >
              Login
            </button>
          </form>
          <div className="text-center text-gray-400">
            Don&apos;t have an account ?{" "}
            <Link to={"/signup"} className="text-red-500 hover:underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
