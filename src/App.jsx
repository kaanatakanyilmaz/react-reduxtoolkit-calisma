import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import { increment, decrement } from "./redux/slice";

function App() {
  const { value } = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div></div>
      <h1>Sayaç</h1>
      <h2>{value}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}

export default App;
