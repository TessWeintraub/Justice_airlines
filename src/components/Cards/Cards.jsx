import "./Cards.css";
import "../SelectionWhere/SelectionWhere.css";
import { useSelector } from "react-redux";

export default function Cards() {
    const flights = useSelector((state) => state.productReducer)
    const filterFlights = useSelector((state) => state.filterProductReducer)

    const filteredProduct =
        !filterFlights
            ? flights
            : flights.filter((element) =>
                element.where.includes(filterFlights.whereCategory)
                &
                element.whereFor.includes(filterFlights.whereForCategory))



  return (
    <section className="cards">
      <h1 className="cards__h1">Рейсы</h1>

      {filteredProduct.map((flight) => (
        <div className="card" key={flight.id}>
          <p className="card-cities">
            <strong>Направление:</strong> {flight.where} - {flight.whereFor}
          </p>
          <p className="card-time">
            <strong>Время в пути:</strong> {flight.time} часа
          </p>
          <p className="card-price">
            <strong>Стоимость билета</strong> {flight.price}₽
          </p>
        </div>
      ))}
    </section>
  );
}
