import { FormikProps } from 'formik';
import { beject } from '../../core/beject'

/**
 * The `Plugin` function is a generic function that takes two type parameters: `T` and `K`.
 * 
 * @template T extends FormikProps<any>
 * @template K extends keyof T['values']
 * 
 * @param {T} instance - A type that must have a `FormikProps` interface.
 * @param {K} key - A key in the `values` object of `instance`.
 * 
 * @returns {ReturnType<beject<T['values'][K]>>} Returns the result of calling `beject` with `instance.values[key]` and an `afterRun` option that updates the `instance`'s field value with the data returned by `beject`.
 */
function Plugin<T extends FormikProps<any>, K extends keyof T['values']>(instance: T, key: K) {
  return beject<T['values'][K]>(instance.values[key], {
    afterRun: (data) => instance.setFieldValue(key as string, data)
  })
}

export default Plugin