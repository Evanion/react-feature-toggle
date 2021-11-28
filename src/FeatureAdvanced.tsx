import * as React from "react";
import { FeatureAction } from "./feature/feature.types";
import { useFeatureAdvanced } from "./feature/hooks";

export const FeatureAdvanced: React.FC = () => {
  const { state, dispatch } = useFeatureAdvanced();
  const toggle = (feature: string) => () =>
    // @ts-expect-error: testing
    state[feature].active
      ? dispatch({ action: FeatureAction.Deactivate, feature })
      : dispatch({ action: FeatureAction.Activate, feature });

  const stateArray = Object.entries(state);
  return (
    <div>
      {stateArray.map(([key, value]) => (
        <div key={key}>
          <div>
            <h3 style={{ textTransform: "capitalize" }}>{key}</h3>
            <p color="grey">
              {/*
          // @ts-expect-error: resting */}
              [{value?.dependencies?.join(", ")}] {JSON.stringify(value, null, 2)}
            </p>
          </div>
          <input
            type="checkbox"
            onChange={toggle(key)}
            // @ts-expect-error: resting
            checked={value.active}
            // @ts-expect-error: resting
            disabled={value.isDependency}
          />
        </div>
      ))}
    </div>
  );
};
