let obj = {
  name: 12,
  age: 12,
};
let arr = [{ "tasks": "" }];
let st = JSON.stringify(arr);
let pt = JSON.stringify([...JSON.parse(st || "[]"), { "name": "12","age":122 }]);
let taskss = Array.from(JSON.parse(pt));
taskss.forEach((task) => {
  console.log(task);
});
