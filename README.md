# jtcob
jtcob is Json To Csv On Browser function



## Usage

```javascript
var userListJson = [
  {
      "id": 1,
      "name": "AAA",
      "favorite_fruits": "Apple"
  },
  {
      "id": 2,
      "name": "BBB",
      "favorite_fruits": "Banana"
  },
  {
      "id": 3,
      "name": "CCC",
      "favorite_fruits": "Orange"
  }
];

console.log(window.jtcob(userListJson)); // csv converted data
```

↓ csv converted data

```csv
id,name,favorite_fruits
1,AAA,Apple
2,BBB,Banana
3,CCC,Orange
```



## Example

See [example](example/index.html)

