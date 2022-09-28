import { Key, useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { dataset2 } from "./components/List/List.fixtures";
import UserContext from "./contexts/UserContext";

function App() {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleUpdateStore = (e: Key | null | undefined) => {
    const val = e as unknown as number;

    // basic toggle mode for the selection feature
    const updatedSelectedItems = !selectedItems?.includes(val)
      ? [...selectedItems, val]
      : selectedItems.filter((item) => item !== val);

    setSelectedItems(updatedSelectedItems);
  };

  return (
    <UserContext.Provider
      value={{ store: selectedItems, updateStore: handleUpdateStore }}
    >
      <div className="App">
        <Header />
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
