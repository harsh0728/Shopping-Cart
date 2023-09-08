import { useDispatch, useSelector } from "react-redux";
import { remove, add } from "../redux/slices/CartSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(add())}>add</button>
      <br />
      <br />
      <div>{count}</div>
      <br />
      <br />
      <button onClick={() => dispatch(remove())}>remove</button>
    </div>
  );
};

export default Counter;
