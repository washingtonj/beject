export type UpdateProps<T> = {
  /** The existent array of objects. */
  input: T[];

  /** The index of the object in the array to be updated. */
  index: number;

  /** The updated object. */
  object: T;
}

/**
 *  Update an existing object within the array. 
 *  It takes in the existing array, the object to be updated, and the updated object,   
 *  and returns a new array with the updated object
 */
export function update<T>(props: UpdateProps<T>) {
  const { input, index, object } = props;
  const output = [...input];
  output[index] = object;
  return output;
}