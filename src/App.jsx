import Header from "./components/Header";
import { ways } from "./data";
import WayToTeach from "./components/WayToTeach";
import Button from "./components/Button/Button";
export default function App() {
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
          <Button>
            <span>
              <h3>111</h3>
              <h4>222</h4>
            </span>
          </Button>
          <Button>Подход</Button>
          <Button>Доступность</Button>
          <Button>Концентрация</Button>
        </section>
      </main>
    </div>
  );
}
