import { FormikProps } from 'formik';
import Beject from '../core/beject'

/**
 * The `Plugin` function is a generic function that takes two type parameters: `T` and `K`.
 * 
 * @template T extends FormikProps<any>
 * @template K extends keyof T['values']
 * 
 * @param {T} instance - A type that must have a `FormikProps` interface.
 * @param {K} key - A key in the `values` object of `instance`.
 * 
 * @returns {ReturnType<Beject<T['values'][K]>>} Returns the result of calling `beject` with `instance.values[key]` and an `afterRun` option that updates the `instance`'s field value with the data returned by `beject`.
 */
function Plugin<T extends FormikProps<any>, K extends keyof T['values']>(instance: T, key: K): ReturnType<typeof Beject<T['values'][K][0]>> {
  return Beject<T['values'][K][0]>(instance.values[key], {
    afterRun: (data) => instance.setFieldValue(key as string, data)
  })
}

export default Plugin
