import { update } from './update'

export type UpdateByKeyProps<T> = {
  /** The existent array of objects. */
  input: T[];

  /** The index of the object in the array to be updated. */
  index: number

  /** The key of the object to be updated. */
  key: keyof T;

  /** The new value for the key. */
  value: any;
}

/**
 *  Alter the value of a key in an object within the array. 
 *  It takes in the existing array, the object to be updated, 
 *  and the key-value pair to be changed, and returns a new array with the updated object.
 */
export function updateByKey<T>(props: UpdateByKeyProps<T>) {
  const { input, index, key, value } = props

  const item = input.find((_, idx) => idx === index);
  if (!item) return input;
  item[key] = value;

  return update({ input, index, object: item })
}