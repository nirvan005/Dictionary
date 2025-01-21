import { useContext, useEffect } from "react";
import { DictContext } from "../store/DictContext";
import OutputHeader from "./OutputHeader";
import OutputContent from "./OutputContent";

function Output({ setBegin }) {
  const { found } = useContext(DictContext);
  useEffect(() => {
    found && setBegin(false);
  }, [setBegin, found]);

  if (found) {
    return (
      <>
        <div className="output-container mt-3 mx-auto">
          <OutputHeader />
          <OutputContent />
        </div>
      </>
    );
  }
}
export default Output;
