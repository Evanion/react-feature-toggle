import * as React from "react";
import { FeatureContext } from "./feature.context";
import { FeatureState } from "./feature.types";
import { useFeatureProvider } from "./hooks";

interface Props {
  features: FeatureState
  children: React.ReactNode
}

export const FeatureProvider: React.FC<Props> = ({ features, children }) => {
  const contextValue = useFeatureProvider(features)
  return <FeatureContext.Provider value={contextValue} children={children} />;
};
