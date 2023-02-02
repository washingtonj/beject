type Hooks<T> = {
  afterRun?: (data: T) => void;
}


export function beject<T = any>(data: T[] = [], hooks?: Hooks<T[]>) {
  /**
 *  Create a new object within the array. 
 *  It takes in the existing array and the new object, 
 *  and returns a new array with the newly added object.
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
