import "./App.css";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { dataset1 } from "./components/List/List.fixtures";

function App() {
  return (
    <div className="App">
      <Header />
      <List
        data={dataset1}
        renderer={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}

export default App;
