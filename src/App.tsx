import "./App.css";
import { Header } from "./components/Header";
import { List } from "./components/List";

function App() {
  return (
    <div className="App">
      <Header />
      <List
        data={[]}
        renderer={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}

export default App;
