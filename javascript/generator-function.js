function* generator(i) {
    while (true){
        yield i++;
    }
  }
  
  const gen = generator(10);
  
for(let i = 0; i < 10; i++){
    console.log(gen.next().value);
}