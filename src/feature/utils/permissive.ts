import { FeatureState, FeatureOption } from "../feature.types";

export function getPermissive(state: FeatureState) {
  return Object.values(state)
    .filter((config) => config?.active && config?.dependencies?.length)
    .map((config: FeatureOption) => config.dependencies)
    .flat(1)
    .reduce((prev, current) => {
      if(!current) return prev
      // @ts-expect-error: type issue
      prev[current] = { ...state[current], active: true, isDependency: true };
      return prev;
    }, {} as FeatureState);
}