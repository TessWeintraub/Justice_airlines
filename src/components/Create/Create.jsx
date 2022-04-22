import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom"
import "./Create.css"
import {useDispatch, useSelector} from "react-redux";
import {addProductAction} from "../../store/action";

const Create = () => {
    const flights = useSelector((state) => state.productReducer).length + 1;
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const where = useRef(null)
    const whereFor = useRef(null)
    const time = useRef(null)
    const price = useRef(null)


    const addFlight = (where,whereFor,time,price) => {
        if((where.length & whereFor.length) & (time.length & price.length)){
            dispatch(addProductAction({
                    id: flights,
                    where: where,
                    whereFor: whereFor,
                    time: time,
                    price: price
              }))
                navigate('../main-page')
    }}

    return (
        <main className="main">
            <section className="create__section wrapper">
                <div>
                    <label htmlFor="where">Введите место прилета</label>
                    <input ref={where} type='text' placeholder="Санкт-Петербург" className="create__section__input" id="where"/>
                </div>
                <div>
                    <label htmlFor="whereFor">Введите место отлета</label>
                    <input ref={whereFor} type='text' placeholder="Ростов-на-Дону" className="create__section__input" id="whereFor"/>
                </div>
                <div>
                    <label htmlFor="time">Введите время в пути</label>
                    <input ref={time} type='number' placeholder="4" className="create__section__input" id="time"/>
                </div>
                <div>
                    <label htmlFor="price">Введите стоимость</label>
                    <input ref={price} type='number' placeholder="3500" className="create__section__input" id="price"/>
                </div>
                <button className="create__section__button" onClick={()=>{addFlight(
                    where.current.value,
                    whereFor.current.value,
                    time.current.value,
                    price.current.value
                )}}>Добавить</button>
            </section>
        </main>
    );
};

export default Create;