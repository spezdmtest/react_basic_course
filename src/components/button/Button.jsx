import "./Button.css";

// export default function Button({text}) {
//   return <button className="button">{text}</button>;
// }
export default function Button({ children, onClick, isActive }) {
  // console.log("Botton Component Render");
  return (
    <button
      className={isActive ? "button active" : "button"}
      onClick={onClick}
      // onMouseEnter={handleMouseEnter}
      // onDoubleClick={() => console.log("dbl")}
      >
      {children}
    </button>
  );
}
