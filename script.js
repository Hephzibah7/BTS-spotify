

//Initialize the variables
let index=0; 
let audioElement=new Audio('song0.mp3');
let masterPlay=document.getElementById('masterPlay');
let progressbar=document.getElementById('progressbar');
let gif=document.getElementById('gif');
let songitems=document.getElementsByClassName('songitem');
let mastersong=document.getElementById('mastersong');
let song=[
    {songname:"Fake Love", filepath:"song0.mp3"},
    {songname:"Blood Sweat & Tears", filepath:"song1.mp3"},
    {songname:"Mic Drop", filepath:"song2.mp3"},
    {songname:"Boy with Luv", filepath:"song3.mp3"},
    {songname:"ON", filepath:"song4.mp3"},
    {songname:"Dynamite", filepath:"song5.mp3"},
]


//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add('fa-pause');  
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');  
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate' , ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value=progress;
}) 
progressbar.addEventListener('change', ()=>{
    audioElement.currentTime=progressbar.value*audioElement.duration/100;

})
const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songitemplaying')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('songitemplaying')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
       makeAllPlays();
       index=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        console.log('song'+index+'.mp3')
        audioElement.src='song'+index+'.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        mastersong.innerText=song[index].songname;
    })
})
document.getElementById('next').addEventListener('click', ()=>{
    if(index>9)
    index=0;
    else
    index=index+1;
    audioElement.src='song'+index+'.mp3';
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    mastersong.innerText=song[index].songname;

})
document.getElementById('previous').addEventListener('click', ()=>{
    if(index<0)
    index=0;
    else
    index=index-1;
    audioElement.src='song'+index+'.mp3';
    console.log('song'+index+'.mp3');
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
  mastersong.innerText=song[index].songname;
})
