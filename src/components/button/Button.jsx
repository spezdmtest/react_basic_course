import "./Button.css";

// export default function Button({text}) {
//   return <button className="button">{text}</button>;
// }
export default function Button({ children }) {
  function handleClick() {
    console.log("button clicked");
  }

  // const handleMouseEnter = () => console.log("entered");

  return (
    <button
      className="button"
      onClick={handleClick}
      // onMouseEnter={handleMouseEnter}
      onDoubleClick={() => console.log("double")}>
      {children}
    </button>
  );
}
