import { FeatureState } from "../feature.types";

export function getRestrictive(state: FeatureState) {
  const featureKeyArr = Object.keys(state);
  const featureArr = featureKeyArr.map(
    // @ts-expect-error: testing
    (key) => [key, state[key]]
  );
  return featureArr
    .filter(([_key, feature]) => (feature?.active || feature?.disabledByDependencies) && feature?.dependencies?.length)
    .reduce((acc, [key, feature]) => {
      const configuredActive = feature.configuredActive || feature.active
      // @ts-expect-error: testing
      feature.active = feature.dependencies.reduce((previous, current) => {
        if (!previous) return previous;
        // @ts-expect-error: testing
        return state[current].active;
      }, configuredActive);
      feature.disabledByDependencies = !feature.active && configuredActive;
      feature.configuredActive = configuredActive
      // @ts-expect-error: testing
      acc[key] = feature;
      return acc;
    }, {} as FeatureState);
}