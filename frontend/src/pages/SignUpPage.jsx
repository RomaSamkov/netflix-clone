import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="hero-bg h-screen w-full">
      <header className="mx-auto max-w-6xl flex items-center justify-between p-4">
        <Link to={"/"}>
          <img src="/netflix-logo.png" alt="logo" className="w-52" />
        </Link>
      </header>
      <div className="flex justify-center items-center mt-20 mx-3">
        <div className="w-full max-w-md"></div>
      </div>
    </div>
  );
};

export default SignUpPage;
