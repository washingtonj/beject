# Beject

Beject provides a simple way to interact with arrays of objects in JavaScript. With it, you can create, update, remove, and change objects in an array in a pure way, receiving an existing array and returning a new one with the altered values.

## Installation


You can install the beject package using npm:

    npm install beject

## Usage

Here are some examples of how to use beject:

#### Creating a new object in an array

    const beject = require('beject');

    const array = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
    const newObject = { id: 3, name: 'Jim' };
    const newArray = beject(array).create(newObject);

    // output
    [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Jim' }]

#### Removing an object in an array

    const beject = require('beject');

    const array = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
    const indexToRemove = 1;
    const newArray = beject(array).remove(indexToRemove);

    // output
    [{ id: 1, name: 'John' }]

#### Updating an object in an array

    const beject = require('beject');

    const array = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
    const indexToUpdate = 1;
    const updatedObject = { id: 1, name: 'John Doe' };
    const newArray = beject(array).update(array, indexToUpdate, updatedObject);

    // output
    [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane' }]

#### Changing a key value in an object

    const beject = require('beject');

    const array = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
    const indexToBeUpdated = 1;
    const key = 'name';
    const value = 'John Doe';
    const newArray = beject(array).updateByKey(indexToBeUpdated, key, value);

    // output
    [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane' }]

## License

Beject is licensed under the MIT License.
