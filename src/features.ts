import { configureStore } from "./feature";

const state = {
  config: {
    permissive: false
  },
  features:{
    auction: {
      active: false,
    },
    'auction.create': {
      active: true,
      dependencies: ['auction']
    },
    'auction.view': {
      active: false,
      dependencies: ['auction']
    }
  }
}

export const store = configureStore(state)

export type RootState = typeof state.features