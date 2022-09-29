import { Key, useState } from "react";
import { Header } from "./components/Header";
import { List } from "./components/List";
import CustomContext from "./contexts/CustomContext";
import "./App.css";
import { bigdataset, rendererBigDataset } from "./data/bigdataset";

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
        <List data={bigdataset} renderer={rendererBigDataset} />
      </div>
    </CustomContext.Provider>
  );
}

export default App;
