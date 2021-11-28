import { useContext, useMemo } from "react";
import { FeatureContext } from "../feature.context";
import { FeatureState } from "../feature.types";
import { getPermissive } from "../utils/permissive";
import { getRestrictive } from "../utils/restrictive";

export const useFeature = (feature: keyof FeatureState) => {
  const { state } = useContext(FeatureContext);

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

  // @ts-expect-error: testing
  return {
    ...state.features,
    ...dependencies,
  }[feature];
};