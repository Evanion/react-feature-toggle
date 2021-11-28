import { createContext } from "react";
import { Context } from './feature.types'

const contextObject = {} as Context

export const FeatureContext = createContext(contextObject);