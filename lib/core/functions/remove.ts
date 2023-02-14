export type RemoveProps<T> = {
  /** The existent array of objects. */
  input: T[];

  /** The index of the object in the array to be removed. */
  index: number;
}

/**
 *  Remove an existing object from the array. 
 *  It takes in the existing array and the object to be removed, 
 *  and returns a new array with the object removed
 */
export function remove<T>(props: RemoveProps<T>) {
  const { input, index } = props;
  const output = [...input];
  output.splice(index, 1);
  return output;
}