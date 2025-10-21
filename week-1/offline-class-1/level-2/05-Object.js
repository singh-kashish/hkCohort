// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);
  // Does the object have the specified property as its own property (not inherited)?
  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);

  obj.addOwnedProperty = "addedValue";
  console.log("After adding a new property directly:", obj);
  console.log("New Object after adding property directly:", obj.hasOwnProperty("key1"));
}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
const obj2  = Object.create(sampleObject);
const obj3 = {
  __proto__ : sampleObject,
}
console.log(obj3.key1);
console.log(obj3.hasOwnProperty("key1"));
console.log(sampleObject.hasOwnProperty("key2"));
Object.freeze(sampleObject);
console.log('frozeCheck>',Object.isFrozen(sampleObject));
sampleObject.key1="change";
console.log('afterFreezeOnSampleObject>',sampleObject.key1);
objectMethods(sampleObject);
obj3.key1="change";
objectMethods(obj3);
sampleObject.key1="change"; // won't change as sampleObject is frozen
sampleObject.newKey="newValue"; // won't add new property as sampleObject is frozen
console.log('afterFreezeOnSampleObject>',sampleObject.key1);
console.log('afterNoFreezeOnOnh3>',obj3.key1);
const user = {
  name: 'Alice',
  age: 30,
  address: {
      city: 'New York',
      zip: '10001'
  }
};

Object.freeze(user);

// Attempts to modify the frozen object
user.age = 31; // Fails silently in non-strict mode, throws TypeError in strict mode
user.country = 'USA'; // Fails silently in non-strict mode, throws TypeError in strict mode
delete user.name; // Fails silently in non-strict mode, throws TypeError in strict mode

console.log('age',user.age); // Output: 30
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
// Output:
// name: Alice
// age: 30
// address: [object Object]

// Note: The nested object 'address' is not frozen, so its properties can still be modified
user.address.city = 'Los Angeles';
console.log('city',user.address.city); // Output: Los Angeles

for(let key in user){
  if(user[key] && typeof user[key] === 'object'){
    console.log(user[key]);
  }
  console.log(`${key}: ${user[key]}`);
} 
// Output:
// name: Alice
// age: 30
// address: [object Object]

