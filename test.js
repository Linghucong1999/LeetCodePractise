setTimeout(() => console.log(1))

new Promise(resolve => {
  resolve()
  console.log(2)
}).then(() => {
  console.log(3)
  Promise.resolve().then(_ => {
    console.log(4)
  }).then(_ => {
    Promise.resolve().then(_ => {
      console.log(5)
    })
  })
})

console.log(6)