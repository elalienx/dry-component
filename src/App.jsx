// NPM Packages
import { useState } from "react";

// Project files
import InputField from "./components/InputField";
import formData from "./data/formData.json"; // moved to the data folder
import "./css/sakura.css"; // added Sakura CSS for a quick layout

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="App">
      <header>
        <h1>3R DRY</h1>
        <p>Name state: "{name}".</p>
        <p>Email state: "{email}".</p>
        <p>Password state: "{password}".</p>
      </header>

      <hr />

      <form>
        <InputField hook={[name, setName]} settings={formData.name}>
          Full name
        </InputField>
        <InputField hook={[email, setEmail]} settings={formData.email}>
          Email
        </InputField>
        <InputField hook={[password, setPassword]} settings={formData.password}>
          Password
        </InputField>
        <InputField hook={[address, setAddress]} settings={formData.address}>
          Shipping address
        </InputField>
      </form>
    </div>
  );
}
