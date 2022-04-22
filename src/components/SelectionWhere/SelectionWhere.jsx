import {useDispatch, useSelector } from "react-redux";
import {useRef} from "react";
import {filterProductAction} from "../../store/action";
import "./SelectionWhere.css";

export default function SelectionWhere() {
  const flights = useSelector((state) => state.productReducer);
  const whereCategories = [...new Set(flights.map((item)=> item.where))];
  const whereForCategories = [...new Set(flights.map((item)=> item.where))];
  const whereCategory = useRef(null);
  const whereForCategory = useRef(null);
  const dispatch = useDispatch()

    const filteredFlights = (whereCategory,whereForCategory) => {
        dispatch(filterProductAction({whereCategory,whereForCategory}))
    };

  return (
    <section className="section-where">
      <h1 className="section-where__h1">Откуда</h1>
      <select className="section-where__select" ref={whereCategory}>
        <option value={''} className="selection-where__option">Все</option>
        {whereCategories.map((category, index) => <option className="selection-where__option" key={index}>{category}</option>)}
      </select>
      <h1 className="section-whereFor__h1">Куда</h1>
      <select className="section-whereFor__select" ref={whereForCategory}>
        <option value={''} className="selection-where__option">Все</option>
          {whereForCategories.map((category, index) => <option className="selection-where__option" key={index}>{category}</option>)}
      </select>
      <button  onClick={() => {filteredFlights(whereCategory.current.value,whereForCategory.current.value)}} className="section-where__button">
        Найти
      </button>
    </section>
  );
}
