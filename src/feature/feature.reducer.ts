import { FeatureAction, ActionProps, FeatureState } from "./feature.types";

export const reducer = (state: FeatureState, action: ActionProps) => {
  switch (action.action) {
    case FeatureAction.Activate:
      return {
        ...state,
        features: {
          ...state.features,
          [action.feature]: { ...state.features[action.feature], active: true },
        },
        
      };

    case FeatureAction.Deactivate:
      return {
        ...state,
        features: {
          ...state.features,
          [action.feature]: { ...state.features[action.feature], active: false },
        },
        
      };
    default:
      return state;
  }
};
