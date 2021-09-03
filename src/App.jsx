// NPM Package
import { useState } from "react";

// Project files
import InputField from "./components/InputField";
import "./css/sakura.css";

export default function App() {
  const [user, setUser] = useState({}); // email, password

  const emailSettings = {
    key: "email",
    label: "Email",
    type: "text",
    placeholder: "john@yahoo.com",
  };
  const passwordSettings = {
    key: "password",
    label: "Password",
    type: "number",
    placeholder: "12345678",
  };

  // Method
  function updateUser(key, value) {
    console.log("App.jsx updateUser() key:", key);
    console.log("App.jsx updateUser() value:", value);

    const updatedUser = user;
    updatedUser[key] = value;

    setUser({ ...updatedUser });
  }

  return (
    <div className="App">
      <h1>Cleaner input field</h1>
      <p>Email: {user.email}</p>
      <p>Pass: {user.password}</p>

      <form>
        <InputField
          handler={(key, value) => updateUser(key, value)}
          settings={emailSettings}
        />
        <InputField
          handler={(key, value) => updateUser(key, value)}
          settings={passwordSettings}
        />
      </form>
    </div>
  );
}
