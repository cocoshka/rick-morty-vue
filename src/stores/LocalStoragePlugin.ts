import 'pinia'
import type { PiniaPlugin } from 'pinia';

declare module 'pinia' {
  export interface DefineStoreOptionsBase<S, Store> {
    // allow defining a number of ms for any of the actions
    localStorage?: boolean
  }
}

const plugin: PiniaPlugin = ({store, options}) => {
  if (options.localStorage) {
    const localId = `pinia_${store.$id}`;
    
    store.$subscribe((evt, state) => {
      localStorage.setItem(localId, JSON.stringify(state))
    })
    
    const savedState = localStorage.getItem(localId);
    if (savedState) return JSON.parse(savedState);
  }
}

export default plugin;