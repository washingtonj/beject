export type CreateProps<T> = {
  /** The existent array of objects. */
  input: T[];

  /** The new object to be created. */
  object: T;

  /** Define the way the object is inserted into the array */
  position?: 'first' | 'last';
}


/**
 * Create a new object within the array.
 * It takes in the existing array and the new object,
 * and returns a new array with the newly added object.
 */
export function create<T>(props: CreateProps<T>) {
  const { input, object, position = 'first' } = props;

  if (position === 'first') {
    const output = [object, ...input];
    return output;
  }

  const output = [...input, object];
  return output;
}