import axios from "axios";

import { ExampleType, SetExampleAction } from "../context/store";

export const getExample = async (dispatch: React.Dispatch<SetExampleAction>): Promise<boolean> => {
  try {
    // Retrieve example data
    const res = await axios.get<ExampleType>("/example", { withCredentials: true });

    if (res) {
      dispatch({ type: "SETEXAMPLE", payload: res.data });
    }

    return !!res;
  } catch (e) {
    console.log(`GET /example failed ${e}`);
    return false;
  }
};
