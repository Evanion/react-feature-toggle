export interface FeatureOption {
  active: boolean;
  description?: string;
  dependencies?: string[];
  isDependency?: boolean;
  disabledByDependencies?: boolean;
  configuredActive?: boolean;
  initiallyActive? : boolean;
}

export interface FeatureState {
  features: Record<string, FeatureOption>,
  config: {
    permissive?: boolean
  }
}

export interface ActionProps<T = string> {
  action: FeatureAction;
  feature: T;
}

export enum FeatureAction {
  Activate = "feature.action.activate",
  Deactivate = "feature.action.deactivate",
}

export interface Context {
  state: FeatureState;
  dispatch: React.Dispatch<ActionProps>;
}