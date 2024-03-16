import "./App.css";
import logo from "./assets/stockkeep.png";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {};

  return (
    <body className="flex justify-center items-center  bg-center h-screen bg-[url('./assets/background.png')] bg-cover bg-fixed">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded-[40px] shadow-lg w-96">
          <img src={logo} alt="Logo" className="mx-auto h-[50px] my-7" />
          <div className="my-9">
            <h2 className="text-2xl text-center poppins-bold">Welcome back</h2>
            <p className="text-[#888888] text-center mb-6 poppins-regular">
              Login to access your account
            </p>
          </div>
          <input
            type="email"
            className="w-full h-[50px] bg-[#2184d523] px-4 py-2 rounded-[8px] mb-4 poppins-regular placeholder:text-[#2185D5] text-[15px] hover:border-[#2185D5] "
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-full h-[50px] bg-[#2184d523] px-4 py-2 rounded-[8px] mb-4 poppins-regular placeholder:text-[#2185D5] text-[15px] "
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-[#2185D5] rounded-[8px] mr-2 poppins-regular"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <span className="text-[#888888] text-[14px] poppins-regular">
                Remember me
              </span>
            </label>
            <a
              href="#"
              className="text-[14px] text-[#2185D5] hover:underline poppins-semibold"
            >
              Forgot password ?
            </a>
          </div>
          <button
            className="w-full h-[50px] bg-[#2185D5] text-white py-2 rounded-[8px] hover:bg-[#196aac] my-5 poppins-regular"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </body>
  );
}
export default App;
