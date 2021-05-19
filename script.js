const memeImage = document.querySelector('#memeImage');
const nextBtn = document.querySelector('#nextBtn');
 
window.addEventListener('load', function(){

    const api = "https://meme-api.herokuapp.com/gimme/2"
    fetch(api)
    .then(res => res.json())
    .then(data =>{
        let memes= data.memes[0].url;
        memeImage.src = memes;
        console.log("hello bro")
    })
})




nextBtn.addEventListener('click', function (){
    
    const api = "https://meme-api.herokuapp.com/gimme/2"
    fetch(api)
    .then(res => res.json())
    .then(data =>{
        let memes= data.memes[0].url;
        console.log(memes)
        memeImage.src = memes;
    })

})