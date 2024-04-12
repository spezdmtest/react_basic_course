import "./Button.css";

// export default function Button({text}) {
//   return <button className="button">{text}</button>;
// }
export default function Button({children}) {
  function handleClick(){
    console.log("button clicked");
  }
  return <button className="button" onClick={handleClick}>{children}</button>;
}
