import Header from "./components/Header";
import {ways} from "./data"

function WayToTeach(props) {
  return (
    <li>
      <p>
        <strong>{props.title}</strong>{props.description}
      </p>
    </li>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Наш підхід до навчання</h3>
          <ul>
            <WayToTeach title = {ways[0].title} description = {ways[0].description} />   
            <WayToTeach title = {ways[1].title} description = {ways[1].description} />   
            <WayToTeach title = {ways[2].title} description = {ways[2].description} />   
            <WayToTeach title = {ways[3].title} description = {ways[3].description} />   
            {/* <WayToTeach title = "111" description = "222"/>
            <WayToTeach title = "333" description = "444"/> */}
            {/* <li>
              <p>
                <strong>Фільтрація інформації та технологій. </strong>З
                величезної кількості інформації та навичок в ІТ ви отримуєте
                тільки те, що необхідно і працює.
              </p>
            </li>
            <li>
              <p>
                <strong>Формат навчання. </strong>У той час як інші пропонують
                50 сторінок тексту та 2-годинні вебінари, ми даємо вам стільки ж
                знань в одному ретельно продуманому відео за 15 хвилин.
              </p>
            </li> */}
          </ul>
        </section>
      </main>
    </div>
  );
}
