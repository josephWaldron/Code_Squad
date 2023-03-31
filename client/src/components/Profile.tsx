import Cookies from "js-cookie";
import { Alert, Button } from "react-bootstrap";
import getUser from "../hooks/getUser";
import ProgressBar from "./Progress";

const Profile = () => {
  const { user, error } = getUser();
  const justIn = Cookies.get("new") !== undefined && Cookies.get("new") !== "";
  const handleLogout = () => {
    Cookies.remove("hash");
    const expirationTime = new Date(Date.now() + 5000); // Set expiration time 5 seconds from now
    Cookies.set("new", "true", { expires: expirationTime });
    window.location.href = "/";
  };
  return (
    <>
      {justIn && <Alert>You have successfully logged in. Welcome!</Alert>}
      {user && (
        <h1>
          Welcome {user.firstName} {user.lastName}!
        </h1>
      )}
      {error && <p>Error: {error}</p>}
      <ProgressBar user={user} course="Java" />
      <Button onClick={handleLogout}>Log Out</Button>
    </>
  );
};

export default Profile;
