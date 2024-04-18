import Header from "./components/Header";
import { ways, differences } from "./data";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
import { useState } from "react";

export default function App() {
  const [contentType, setContentType] = useState(null);
  // let content = "Нажми на кнопку";
  console.log("App Render");

  function handleClick(type) {
    // console.log("button clickted", type);
    setContentType(type);
    console.log(content);
    // content = type;
  }

  // let tabContent = null;
  // if (contentType) {
  //   tabContent = <p>{differences[contentType]}</p>
  // } else {
  //   tabContent = <p>Нажми на кнопку</p>
  // }


  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш підхід до навчання</h3>
          <ul>
            {ways.map((way) => (
              <WayToTeach
                key={way.title}
                {...way}
              />
            ))}
          </ul>
        </section>
        <section>
          <h3>Чим ми відрізняємося</h3>
          <Button isActive= {contentType === "way"} onClick={() => handleClick("way")}>Подход</Button>
          <Button isActive= {contentType === "easy"} onClick={() => handleClick("easy")}>Доступность</Button>
          <Button isActive= {contentType === "program"} onClick={() => handleClick("program")}>Концентрация</Button>
          
          {/* v1 */}
          {/* {contentType ? (
            <p>{differences[contentType]}</p>
          ) : (
            <div>Нажми на кнопку</div>
          )} */}
          
          {/* v2 */}
          {/* {!contentType ? <p>Нажми на кнопку</p> : null}
          {contentType ? <p>differences[contentType]</p> : null} */}
          
         
          {!contentType && <p>Нажми на кнопку</p>}
          {contentType && <p>{differences[contentType]}</p>}
          

          {/* v4 tabContent */}
          {/* {tabContent} */}
        </section>
      </main>
    </div>
  );
}
