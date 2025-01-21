import Heading from "./components/heading";
import "./App.css";
import SearchBox from "./components/SearchBox";
import ContextProvider, { DictContext } from "./store/DictContext";
import Output from "./components/Output";
import NotFound from "./components/NotFound";
import BeginMessage from "./components/BeginMessage";
import { useState } from "react";
function App() {
  let [begin, setBegin] = useState(true);
  return (
    <>
      <ContextProvider>
        <div className="container">
          <Heading />
          <SearchBox />
          {begin && <BeginMessage />}
          <Output setBegin={setBegin} />
          {!begin && <NotFound />}
        </div>
      </ContextProvider>
    </>
  );
}

export default App;
