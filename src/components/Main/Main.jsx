import "./Main.css";
import "../../styles.css";
import SelectionWhere from "../SelectionWhere/SelectionWhere";

import Cards from "../Cards/Cards";

export default function Main() {
  return (
    <main className="main">
      <section className="main-content wrapper">
        <SelectionWhere />
         <Cards />

      </section>
    </main>
  );
}
