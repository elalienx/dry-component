// NPM Package
import { useState } from "react";

export default function InputField({ settings, handler }) {
  const [state, setState] = useState("");

  function updateParent(value) {
    console.log("InputField.jsx updateParent() value:", value);

    setState(value);
    handler(settings.key, value);
  }

  return (
    <label>
      {settings.label}
      <input
        {...settings}
        value={state}
        onChange={(event) => updateParent(event.target.value)}
      />
    </label>
  );
}
