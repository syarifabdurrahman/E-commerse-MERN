import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "70%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form
        style={{
          height: "100vh",
          width: "70%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          style={{ padding: "10px", marginBottom: "5px" }}
          type={"text"}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          style={{ padding: "10px", marginBottom: "5px" }}
          type={"password"}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick} style={{ padding: "4px" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
