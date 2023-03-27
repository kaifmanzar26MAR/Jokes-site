// PROMISES
// GET https://icanhazdadjoke.com/

const jokes=document.querySelector('#joke');
const jokeBtn=document.querySelector('#jokeBtn');

// using Promise
// const generateJokes=()=>{
//     const setHeader={
//         headers:{
//             Accept:"application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com/',setHeader)
//     .then((res)=>res.json())//if accepted
//     .then((data)=>{
//             jokes.innerHTML=data.joke;
//     }).catch((error)=>{//if rejected
//         console.log(error);
//     })
// }

// using async await

const generateJokes= async ()=>{
    try{//if accepted
        const setHeader={
            headers:{
                Accept:"application/json"
            }
        }
        const res=await fetch('https://icanhazdadjoke.com/',setHeader);
        const data=await res.json();
        jokes.innerHTML=data.joke;
        
        var msg=new SpeechSynthesisUtterance(jokes.textContent);
        speechSynthesis.speak(msg)
        
    }catch(err){//if rejected
        console.log(`the error is ${err}`);
    }
    
    
}

jokeBtn.addEventListener('click',generateJokes);

generateJokes();