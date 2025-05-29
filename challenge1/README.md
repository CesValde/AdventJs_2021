# Counting sheeps to sleep

> With the thrill of Christmas coming, we've been having a hard time sleeping lately. Let's try to use this little trick that will help us sleep faster.

Consider a list / array of sheep. Each sheep has a name and a color. Make a function that returns a list with all the sheep that are colored `rojo` **and that also** your name contains both the letters `n` AND `a`, regardless of order, capital letters or spaces.

For example, if we have the sheep:

```javascript
const sheeps = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' }
];
```

When executing the method you should return the following:

```javascript
const filteredSheep = contarOvejas(sheeps);

console.log(filteredSheep);

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
```

Remember. Must contain the two letters 'a' and 'n' in the name. Do not count sheep that only has one of the letters, it must have both.