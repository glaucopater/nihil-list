import { Key, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { dataset1, dataset2 } from "./components/List/List.fixtures";
import UserContext from "./contexts/UserContext";

function App() {
  const [selectedItems, setSelectedItems] = useState<any>();

  const handleUpdateStore = (e: Key | null | undefined) => {
    setSelectedItems(e);
  };


  return (
    <UserContext.Provider
      value={{ store: selectedItems, updateStore: handleUpdateStore }}
    >
      <div className="App">
        <Header />
        <List
          data={dataset1}
          renderer={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <List
          data={dataset2}
          renderer={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </UserContext.Provider>
  );
}

export default App;
