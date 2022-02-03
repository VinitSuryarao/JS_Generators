
// Generator Function
function *GetData(){
    yield 'Yeild 1';
    yield 'Yeild 2';
    yield 'Yeild 3';
}

let Gen= GetData();

// Exe First Stmt 
console.log(Gen.next()); 
// Skip Second Stmt
Gen.next()
// Exe Third Stmt
console.log(Gen.next());