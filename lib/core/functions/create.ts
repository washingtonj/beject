export type CreateProps<T> = {
  /** The existent array of objects. */
  input: T[];

  /** The new object to be created. */
  object: T;
}


/**
 * Create a new object within the array.
 * It takes in the existing array and the new object,
 * and returns a new array with the newly added object.
 */
export function create<T>(props: CreateProps<T>) {
  const { input, object } = props;
  const output = [object, ...input];
  return output;
}