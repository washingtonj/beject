import * as fn from './functions'
import type * as Fn from './functions'

type Hooks<T> = {
  afterRun?: (data: T) => void;
}

type Clear<T> = Omit<T, 'input'>

/**
 *  A generic utility function to manage an array of objects.
 * 
 *  @template T - The type of the objects within the array.
 *  @param {T[]} [data=[]] - The initial data for the array.
 *  @param {Hooks<T[]>} [hooks] - An optional object with hooks for the operations.
 * 
 *  @returns {Object} The return object contains functions for managing the array of objects.
 * 
 */
function beject<T = any>(data: T[] = [], hooks?: Hooks<T[]>) {
  return {
    create(params: Clear<Fn.CreateProps<T>>) {
      const out = fn.create({ input: data, ...params })
      hooks?.afterRun?.(out)
      return out
    },

    update(params: Clear<Fn.UpdateProps<T>>) {
      const out = fn.update({ input: data, ...params })
      hooks?.afterRun?.(out)
      return out
    },

    remove(params: Clear<Fn.RemoveProps<T>>) {
      const out = fn.remove({ input: data, ...params })
      hooks?.afterRun?.(out)
      return out
    },

    updateByKey(params: Clear<Fn.UpdateByKeyProps<T>>) {
      const out = fn.updateByKey({ input: data, ...params })
      hooks?.afterRun?.(out)
      return out
    },

    createKeepRemove<_, K extends keyof T>(params: Clear<Fn.CreateKeepRemoveProps<T, K>>) {
      const out = fn.createKeepRemove({ input: data, ...params })
      hooks?.afterRun?.(out)
      return out
    }
  }
}

export default beject;