let a = JSON.stringify("oeuaoueu","thosue")
let arr = [{task:"hello",completed:false},{
  task:"hii",completed:false
}]
let b = JSON.stringify([...arr,{task:"hey",completed:false}])
let parsed = JSON.parse(b)
console.log(parsed)