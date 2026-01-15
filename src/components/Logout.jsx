import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    alert("Logout berhasil");
    navigate("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
