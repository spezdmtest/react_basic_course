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
          <Button onClick={() => handleClick("way")}>Подход</Button>
          <Button onClick={() => handleClick("easy")}>Доступность</Button>
          <Button onClick={() => handleClick("program")}>Концентрация</Button>
          <p>{differences[contentType]}</p>
        </section>
      </main>
    </div>
  );
}
