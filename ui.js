
  const boxWrapper = document.getElementsByClassName("box-wrapper")[0];
  const homeIcon = document.getElementsByClassName("fa-camera-retro");
  console.log(boxWrapper); 
  
  
  boxWrapper.addEventListener('animationstart', (event) => {
      console.log("Animation Startted", event);
     
  });
  
  let counter = 0;
  boxWrapper.addEventListener('animationiteration', (event) => {
    // console.log("animation_iteration", event);
    let borderCounter = document.getElementsByClassName("border-counter")[0];
    console.log("Debug: Animationstart : ui.js")
    console.log(this);
    // console.log("---------------------")
    // console.log(counter)
    borderCounter.innerHTML = `Times Border has Rotated: ${counter++}` 
  });
  
  boxWrapper.addEventListener('animationend', (ev) => {
     console.log("animation end", ev);
  });
  
  boxWrapper.addEventListener('animationcancel', (ev) => {
      console.log("Animation canceled" , ev); 
  });

  // jQuery not working in this scope 
  //  homeIcon.css({
  //   "background":"#000"
  // })

// removed doc ready function

// Select href attribute to modify 

// function findVideo(){
//     let videoLink = document.querySelector("a[href='https://www.youtube.com']");

//     console.log(videoLink);
    
//     const video_slugs = ["/watch?v=7xv3-vwa029x","/watch?v=Zeew1_sz04" ];
//     const video_index = 1; 
    
//     if (video_index > 2){
//         console.log("Video_Index is less than 2")
//     }
// }