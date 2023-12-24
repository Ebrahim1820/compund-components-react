import { createContext, useContext, useState } from "react";

// How to create COMPUND COMPONENT

// 1. Create a context
const CounterContext = createContext();

// 2. Create parent componrnt
function Counter({ children }) {
  const [count, setCount] = useState(0);
  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);

  return (
    <CounterContext.Provider
      value={{
        count,
        increase,
        decrease,
      }}
    >
      <span>{children}</span>
    </CounterContext.Provider>
  );
}
// 3. Create a child components to help implementing
// the common to task

function Count() {
  const { count } = useContext(CounterContext);
  return <span>{count}</span>;
}

function Label({ children }) {
  return <span>{children}</span>;
}

function Increase({ icon }) {
  const { increase } = useContext(CounterContext);
  return <button onClick={increase}>{icon}</button>;
}

function Decrease({ icon }) {
  const { decrease } = useContext(CounterContext);
  return <button onClick={decrease}>{icon}</button>;
}

// 4. Add the cbild components as properties to parent component

Counter.Count = Count;
Counter.Increase = Increase;
Counter.Label = Label;
Counter.Decrease = Decrease;

export default Counter;
