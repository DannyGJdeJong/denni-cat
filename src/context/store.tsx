import React, { createContext, useReducer, useContext } from "react";

export type ExampleType = {
  foo: string;
  bar: string;
};

// Initial state for the context store
const initialState = Object.freeze({
  Example: {} as ExampleType,
});

// Types for the reducer
export type State = typeof initialState;
type SetExamplePayload = ExampleType;
type Actions = SetExampleAction;

export interface SetExampleAction {
  type: "SETEXAMPLE";
  payload: SetExamplePayload;
}

type Dispatch = React.Dispatch<Actions>;
type ProviderProps = Omit<React.ProviderProps<State>, "value">;

const Context = createContext<State | undefined>(undefined);
const DispatchContext = createContext<Dispatch | undefined>(undefined);

const Reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "SETEXAMPLE":
      return {
        ...state,
        Example: action.payload,
      };
  }
};

export const StateProvider = ({ children }: ProviderProps): React.ReactElement => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </Context.Provider>
  );
};

export const useStore = (): State => {
  const state = useContext(Context);

  if (state === undefined) {
    throw new Error("User should be defined");
  }
  return state;
};

export const useDispatch = (): React.Dispatch<Actions> => {
  const dispatch = useContext(DispatchContext);

  if (dispatch === undefined) {
    throw new Error("useSessionDispatch can only be called inside a SessionProvider.");
  }
  return dispatch;
};

export const useStoreDispatch = (): [State, Dispatch] => [useStore(), useDispatch()];
