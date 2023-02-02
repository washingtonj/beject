type Hooks<T> = {
  afterRun?: (data: T) => void;
}

/**
 *  A generic utility function to manage an array of objects.
 * 
 *  @template T - The type of the objects within the array.
 *  @param {T[]} [data=[]] - The initial data for the array.
 *  @param {Hooks<T[]>} [hooks] - An optional object with hooks for the operations.
 * 
 *  @returns {Object} The return object contains functions for managing the array of objects.
 */
export function beject<T = any>(data: T[] = [], hooks?: Hooks<T[]>) {
  /**
   *  Create a new object within the array. 
   *  It takes in the existing array and the new object, 
   *  and returns a new array with the newly added object.
   * 
   *  @param {T} object - The new object to be added to the array.
   * 
   *  @returns {Object} The return object contains functions for managing the array of objects.
   */
  function create(object: T) {
    const newData = [object, ...data];
    hooks?.afterRun?.(newData);
    return beject(newData);
  }

  /**
   *  Remove an existing object from the array. 
   *  It takes in the existing array and the object to be removed, 
   *  and returns a new array with the object removed
   * 
   *  @param {number} index - The index of the object in the array to be removed.
   * 
   *  @returns {Object} The return object contains functions for managing the array of objects.
   */
  function remove(index: number) {
    const newData = [...data];
    newData.splice(index, 1);
    hooks?.afterRun?.(newData);
    return beject(newData);
  }

  /**
   *  Update an existing object within the array. 
   *  It takes in the existing array, the object to be updated, and the updated object,   
   *  and returns a new array with the updated object
   * 
   *  @param {number} index - The index of the object in the array to be updated.
   *  @param {T} object - The updated object.
   * 
   *  @returns {Object} The return object contains functions for managing the array of objects.
   */
  function update(index: number, object: T) {
    const newData = [...data];
    newData.splice(index, 1, object);
    hooks?.afterRun?.(newData);
    return beject(newData);
  }

  /**
   *  Alter the value of a key in an object within the array. 
   *  It takes in the existing array, the object to be updated, 
   *  and the key-value pair to be changed, and returns a new array with the updated object.
   * 
   *  @param {number} index - The index of the object in the array to be updated.
   *  @param {keyof T} key - The key of the object to be updated.
   *  @param {any} value - The new value for the key.
   * 
   */
  function updateByKey(index: number, key: keyof T, value: any) {
    const item = data.find((_, idx) => idx === index);
    if (!item) return beject(data);
    item[key] = value;
    return beject(update(index, item).data)
  }

  return {
    create,
    remove,
    update,
    updateByKey,
    data
  };
}
