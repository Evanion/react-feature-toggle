import { useContext, useMemo } from "react";
import { FeatureContext } from "../feature.context";
import { getPermissive } from "../utils/permissive";
import { getRestrictive } from "../utils/restrictive";

export const useFeatureAdvanced = () => {
  const { state, dispatch } = useContext(FeatureContext);

  const dependencies = useMemo(
    () =>
      typeof state === "undefined"
        ? {}
        : typeof state.config === "undefined"
        ? {}
        : state.config.permissive
        // @ts-expect-error: testing
        ? getPermissive(state.features)
        // @ts-expect-error: testing
        : getRestrictive(state.features),
    [state]
  );
  return {
    state: {
      ...state.features,
      ...dependencies,
    },
    dispatch,
  };
};