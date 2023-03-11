import {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount , decrementByAmount} from "../counter/counterSlice";

const Counter = () => {
  const [amount , setAmount] = useState()
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      {countValue}
      <br />

      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment </button>
      
      
      <br />
      <br />


      <input type="number" value={amount} onChange={(e)=>  setAmount(e.target.value)} />
      <button onClick={() => dispatch(incrementByAmount(amount))}>Increment By Amount </button>
      <button onClick={() => dispatch(decrementByAmount(amount))}>Decrement By Amount </button>

    </div>
  );
};
export default Counter;
