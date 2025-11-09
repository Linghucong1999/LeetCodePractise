const a = (func, a) => {
    return function (...args) {
        console.log(args)
        func(args)
    }
}

const b = a((a) => {
    console.log( a)
}, 1);
b(2, 3, 4, 5)