
// Promises
// algo que se va a cumplir
const myfetch = (url, options) => new Promise((resolve, reject) => {
    
    return reject(Error('Failed')); 
    
    setTimeout(() => {
        resolve({
         name: 'Luke Skywalker'
        });
     }, 1000);
  })
  /*
  myfetch('url')
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
  */
    /*
    async function callAPI() {
          try{
            // codigo imperativo
            const data = await myfetch('url');
            console.log(data);
          }catch(error){
            console.log(error.message);     
          }
    }
  
    callAPI();
    */
    async function callAPI() {
          try{
            const starwarsCharacters=[];
            const result = await Promise.all([
              fetch('https://swapi.dev/api/people/1'),
              fetch('https://swapi.dev/api/people/2'),
              fetch('https://swapi.dev/api/people/3'),
              fetch('https://swapi.dev/api/people/4'),
            ]);
            console.log(result);
            // result es un arreglo de promises
            for await (data of result) {
              const character = await data.json()
              console.log(character);
              starwarsCharacters.push(character.name)
            }
            console.log(starwarsCharacters);
            // 300ms
            // await fetch('https://swapi.dev/api/people/1');
            // 250ms
            //await fetch('https://swapi.dev/api/people/2');
            // 250ms
            //await fetch('https://swapi.dev/api/people/3');
            // 250ms
            //await fetch('https://swapi.dev/api/people/4');
          }catch(error){
            console.log(error.message);     
          }
    }
  callAPI();
  
  
   
  
  
  
  
  
  console.log('My promise processing...');
  
  /*
  switch(){
      case:
      break;
  }
  */
  
  // console.log(promise);
  
  