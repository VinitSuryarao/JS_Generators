
// Generator Function
function *GetData(){
    console.log("Message 1");
    yield 'Yeild 1';
    console.log("Message 2");
    yield 'Yeild 2';
}

let Gen= GetData();

// Exe First Stmt Pause at First Yeild
console.log(Gen.next()); 
// Exe First Stmt Pause at second Yeild
console.log(Gen.next());
// Last stmt shows end of stmt
console.log(Gen.next());