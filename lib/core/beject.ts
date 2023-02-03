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
 * 
 */
function beject<T = any>(data: T[] = [], hooks?: Hooks<T[]>) {
  /**
   *  Create a new object within the array. 
   *  It takes in the existing array and the new object, 
   *  and returns a new array with the newly added object.
   * 
   *  @param {T} object - The new object to be added to the array.
   * 
   *  @returns {Object} The return object contains functions for managing the array of objects.
   * 
   * @example
   * 
   * const data = [
   * { id: 1, name: 'John' },
   * { id: 2, name: 'Jane' },
   * { id: 3, name: 'Jack' },
   * ];
   * 
   * const newData = beject(data).create({ id: 4, name: 'New' });
   * 
   * // newData.data = [
   * //  { id: 4, name: 'New' },
   * //  { id: 1, name: 'John' },
   * //  { id: 2, name: 'Jane' },
   * //  { id: 3, name: 'Jack' },
   * // ];
   */
  function create(object: T): ReturnType<typeof beject<T>> {
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
   *  @returns {object} The return object contains functions for managing the array of objects.
   * 
   *  @example
   *  
   * const data = [
   * { id: 1, name: 'John' },
   * { id: 2, name: 'Jane' },
   * { id: 3, name: 'Jack' },
   * ];
   * 
   * const newData = beject(data).remove(1);
   * 
   * // newData.data = [
   * //  { id: 1, name: 'John' },
   * //  { id: 3, name: 'Jack' },
   * // ];
   */
  function remove(index: number): ReturnType<typeof beject<T>> {
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
   *
   *  @example
   * 
   * const data = [
   * { id: 1, name: 'John' },
   * { id: 2, name: 'Jane' },
   * { id: 3, name: 'Jack' },
   * ];
   * 
   * const newData = beject(data).update(1, { id: 2, name: 'New' });
   * 
   * // newData.data = [
   * //  { id: 1, name: 'John' },
   * //  { id: 2, name: 'New' },
   * //  { id: 3, name: 'Jack' },
   * // ];
   */
  function update(index: number, object: T): ReturnType<typeof beject<T>> {
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
   * @returns {Object} The return object contains functions for managing the array of objects.
   * 
   * @example
   * 
   * const data = [
   * { id: 1, name: 'John' },
   * { id: 2, name: 'Jane' },
   * { id: 3, name: 'Jack' },
   * ];
   * 
   * const newData = beject(data).updateByKey(1, 'name', 'New');
   * 
   * // newData.data = [
   * //  { id: 1, name: 'John' },
   * //  { id: 2, name: 'New' },
   * //  { id: 3, name: 'Jack' },
   * // ];
   * 
   */
  function updateByKey(index: number, key: keyof T, value: any): ReturnType<typeof beject<T>> {
    const item = data.find((_, idx) => idx === index);
    if (!item) return beject(data);
    item[key] = value;
    return beject(update(index, item).data)
  }


  /**
   * Create, keep, and remove objects within the array.
   * It takes in the existing array, the array of items to be created,
   * the key to match the items to the existing objects, and the new object to be created,
   * and returns a new array with the updated objects.
   * 
   * @param {Array<string | number>} items - The array of items to be created.
   * @param {keyof T} matchKey - The key to match the items to the existing objects.
   * @param {T} newObject - The new object to be created.
   * 
   * @returns {Object} The return object contains functions for managing the array of objects.
   * 
   * @example
   * 
   * const data = [
   *  { id: 1, name: 'John' },
   * { id: 2, name: 'Jane' },
   * { id: 3, name: 'Jack' },
   * ];
   * 
   * const newData = beject(data).CreateKeepRemove([1, 2, 4], 'id', { name: 'New' });
   * 
   * // newData.data = [
   * //  { id: 1, name: 'John' },
   * //  { id: 2, name: 'Jane' },
   * //  { id: 4, name: 'New' },
   * // ];
   */
  function createKeepRemove<_, K extends keyof T>(
    items: Array<string | number>,
    matchKey: K,
    newObject: Omit<T, K>
  ): ReturnType<typeof beject<T>> {
    const keepData: T[] = [];
    const newData: T[] = [];

    items.forEach((item) => {
      const isKeep = data.find(dataItem => dataItem[matchKey] === item);
      if (isKeep) keepData.push(isKeep);
      if (!isKeep) newData.push({ ...newObject, [matchKey]: item } as T);
    })

    const mergedData = [...keepData, ...newData];

    hooks?.afterRun?.(mergedData);
    return beject(mergedData);
  }

  return {
    create,
    remove,
    update,
    updateByKey,
    createKeepRemove,
    data
  };
}

export default beject;