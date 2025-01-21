import { useContext, useEffect } from "react";
import { DictContext } from "../store/DictContext";

function NotFound() {
  const { found } = useContext(DictContext);

  // useEffect(() => {
  //   !found && setBegin(false);
  // }, [setBegin]);

  if (!found) {
    return (
      <>
        <div className="notfound mt-5 ms-5">Word not Found</div>
        <div className="errorMessage ms-5">
          Ensure that you have spelled it Correctly
        </div>
      </>
    );
  }
}
export default NotFound;
