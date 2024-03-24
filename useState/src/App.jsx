import { Counter } from "./components/Counter";
import { Welcome } from "./components/Welcome";



export function App() {
  return (
    <div>
      <Welcome />
      <hr/>
      <Counter />
    </div>
  );
}