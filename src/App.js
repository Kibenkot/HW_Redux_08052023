import React from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import { addItemPayloadAction, minusItemPayloadAction, plusItemPayloadAction } from './store/basketReducer';



function App() {

const basket = useSelector(store => store.basket)
// console.log(basket);

let dispatch =useDispatch()

const handeleAddRecord = () =>{
  const newItem = prompt();
  if(newItem.length > 0){
    dispatch(addItemPayloadAction(newItem))
  }else{
    alert('Значение не может быть пустым!')
  }
}

  return (
    <div className='container'>
      <button className='add_item' onClick={handeleAddRecord}>Добавить товар</button>
       <div>
        {
            basket.map(el=>
              <div className='item' key={el.id}>
                <p>{el.title}</p>
                <div className='count_button'>
                <button disabled={el.count >= 25} onClick={()=>dispatch(plusItemPayloadAction(1, el.id))}>+</button>
                <p>{el.count}</p>
                <button disabled={el.count < 1} onClick={() => dispatch(minusItemPayloadAction(1, el.id))}>-</button>
                </div>
              </div>
              )
        }
       </div>
    </div>
  )
}

export default App