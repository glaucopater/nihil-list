import { Key, useState } from "react";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { rendererBigDataser } from "./components/List/List.fixtures";
import CustomContext from "./contexts/UserContext";
import "./App.css";
import { bigDataSet } from "./data/bigdataset";
 
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
    <CustomContext.Provider
      value={{ store: selectedItems, updateStore: handleUpdateStore }}
    >
      <div className="App">
        <Header />
        <List data={bigDataSet} renderer={rendererBigDataser} />
      </div>
    </CustomContext.Provider>
  );
}

export default App;
