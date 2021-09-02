export default function InputField({ children, hook, settings }) {
  const { autofocus, autocomplete, name, placeholder, type } = settings;
  const [state, setState] = hook;

  return (
    <label>
      {children}
      <input
        autoFocus={autofocus}
        autoComplete={autocomplete}
        onChange={(event) => setState(event.target.value)}
        name={name}
        placeholder={placeholder}
        type={type}
        value={state}
      />
    </label>
  );
}

/**
 * Bad example:
 * By calling props withouth taking the time to destructure it,
 * we don't have a single place where we can quickly look up
 * the properties that this component has.
 * Instead, we need to scroll up and down inside the return JSX
 * to hunt down each property of the props.
 */
// export default function InputFieldWithProps(props) {
//     return (
//         <label>
//           {props.children}
//           <input
//             onChange={(event) => props.hook.setState(event.target.value)}
//             placeholder={props.hook.placeholder}
//             type={props.settings}
//             value={props.hook.state}
//           />
//         </label>
//       );
// }
