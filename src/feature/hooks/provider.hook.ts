import { useMemo, useReducer } from "react";
import { reducer } from "../feature.reducer";
import { FeatureState } from "../feature.types";

export const useFeatureProvider = (fullState: FeatureState) => {
  const [state, dispatch] = useReducer(reducer, fullState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return contextValue;
};