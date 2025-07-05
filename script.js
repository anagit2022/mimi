let screens = {};
let buttons = {};
let breastbook = {
  pg: [
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/breast0.png?v=1746261431104",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/breast1.png?v=1746261466833",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/breast2.png?v=1746261485625",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/breast3.png?v=1746261498950",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/breast4.png?v=1746261506744",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/breast5.png?v=1746261512856",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/breastq.png?v=1746261731064",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/breast6.png?v=1746261591222",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/breastq1.png?v=1746261736982",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/breast7.png?v=1746261599446",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/breast8.png?v=1746261676252",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/breast9.png?v=1746261719307",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/breastq2.png?v=1746261741377",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/breastq3.png?v=1746261766096",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/breast10.png?v=1746333699785",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/breast11.png?v=1746333779553",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/breast12.png?v=1746333783843",
  ],
  pgloaded: [],
  flangepg :[
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/flange.png?v=1746438337334",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/flange1.png?v=1746438340375",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/flange2.png?v=1746438350546",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/flange3.png?v=1746438356512",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/flange4.png?v=1746438361603",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/flange5%20(1).png?v=1746439467649",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/flange6.png?v=1746438376709",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/flange7.png?v=1746438381976",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/flange8.png?v=1746438387211",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/flange9.png?v=1746438390991",
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/flange10.png?v=1746438395135",
  ],
  flangepgloaded: [],
};
let milkbook ={
  pg :["https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/milk0.png?v=1746340965754",
       "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/milk1%20(1).png?v=1746340972189",
      "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/milk2%20(1).png?v=1746340976902",
       "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/milk3%20(1).png?v=1746340981151",
       "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/milk4%20(2).png?v=1746340990009",
       "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/milk5%20(1).png?v=1746341005329",
      ],
  pgloaded: [],
};

let currentState = "welcome";
let currentbreastpg = 0;
let currentflangepg = 0;
let currentmilkpg = 0;
let isVideoPlaying = false;

function preload() {
  screens.welcome = loadImage(
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/welcome.png?v=1746245642455"
  );
  screens.onboard1 = loadImage(
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/onboard1.png?v=1746245669784"
  );
  screens.onboard2 = loadImage(
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/onboard2.gif?v=1746246216897"
  );
  screens.onboard3 = loadImage(
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/onbboard3.gif?v=1746247169495"
  );
  screens.onboard4 = loadImage(
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/onboard4.gif?v=1746247364709"
  );
  screens.bookscreen = loadImage(
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/bookscreen.png?v=1746259393566"
  );
  screens.momscreen = loadImage(
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/momscreen.png?v=1746259454703"
  );
  screens.breastfeedsub = loadImage(
    "https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/breastfeedingsubub.png?v=1746372994396"
  );
  for (let filename of breastbook.pg) {
    //load and push the image into the imagelist
    breastbook.pgloaded.push(loadImage(filename));
  }

  breastbook.video1 = createVideo(
    "https://cdn.glitch.me/321a6354-9808-437f-b0bb-2526be898291/massage.mp4?v=1746335212919"
  );
  breastbook.video2 = createVideo(
    "https://cdn.glitch.me/321a6354-9808-437f-b0bb-2526be898291/express.mp4?v=1746286919337"
  );
  breastbook.video3 = createVideo(
    "https://cdn.glitch.me/321a6354-9808-437f-b0bb-2526be898291/colostrumcollect.mp4?v=1746286564586"
  );
  breastbook.video4 = createVideo(
    "https://cdn.glitch.me/321a6354-9808-437f-b0bb-2526be898291/effectivelatch.mp4?v=1746286100028"
  );
  breastbook.video5 = createVideo(
    "https://cdn.glitch.me/321a6354-9808-437f-b0bb-2526be898291/unlatch.mp4?v=1746286010581"
  );
  breastbook.video6 = createVideo(
    "https://cdn.glitch.me/321a6354-9808-437f-b0bb-2526be898291/burping.mp4?v=1746285923627"
  );
  breastbook.video7 = createVideo(
    "https://cdn.glitch.me/321a6354-9808-437f-b0bb-2526be898291/otherpositions.mp4?v=1746286412106"
  );
  for (let filename of breastbook.flangepg) {
    //load and push the image into the imagelist
    breastbook.flangepgloaded.push(loadImage(filename));
  }
  for (let filename of milkbook.pg) {
    //load and push the image into the imagelist
    milkbook.pgloaded.push(loadImage(filename));
  }
  milkbook.video1 = createVideo("https://cdn.glitch.global/321a6354-9808-437f-b0bb-2526be898291/milkclean(2).mp4?v=1746343068800");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //play button
  buttons.start = { x: 20, y: 588, width: 350, height: 61 };
  // next onboard
  buttons.nexton = { x: 297, y: 590, width: 95, height: 90 };
  //mom button
  buttons.mom = { x: 20, y: 81, width: 348, height: 140 };
  // breastbook button
  buttons.breastbook = { x: 20, y: 81, width: 166, height: 149 };
  // breast flange
  buttons.flangebook = { x: 20, y: 81, width: 350, height: 113 };
  // breastfeeding
  buttons.breastfeeding = { x: 20, y: 255, width: 350, height: 113 };
  //next pg
  buttons.nextpg = { x: 297, y: 590, width: 95, height: 64 };
  // prev pg
  buttons.prevpg = { x: 0, y: 590, width: 95, height: 64 };
  //left arrow
  buttons.back = { x: 21, y: 19, width: 72, height: 52 };
  // milk book
  buttons.milkbook = { x: 208, y: 81, width: 162, height: 149};
  // hideo video elements
  breastbook.video1.play();
  breastbook.video1.pause();
  breastbook.video1.time(0);
  breastbook.video1.hide();

  breastbook.video2.play();
  breastbook.video2.pause();
  breastbook.video2.time(0);
  breastbook.video2.hide();

  breastbook.video3.play();
  breastbook.video3.pause();
  breastbook.video3.time(0);
  breastbook.video3.hide();

  breastbook.video4.play();
  breastbook.video4.pause();
  breastbook.video4.time(0);
  breastbook.video4.hide();

  breastbook.video5.play();
  breastbook.video5.pause();
  breastbook.video5.time(0);
  breastbook.video5.hide();

  breastbook.video6.play();
  breastbook.video6.pause();
  breastbook.video6.time(0);
  breastbook.video6.hide();

  breastbook.video7.play();
  breastbook.video7.pause();
  breastbook.video7.time(0);
  breastbook.video7.hide();
  // milkbook video
  milkbook.video1.play();
  milkbook.video1.pause();
  milkbook.video1.time(0);
  milkbook.video1.hide();
  
}

function draw() {
  //background("#FCF8F1");
  if (currentState === "welcome") {
    welcome();
  } else if (currentState === "onboard1") {
    onboard1();
    stopbreastvideo();
  } else if (currentState === "onboard2") {
    onboard2();
    stopbreastvideo();
  } else if (currentState === "onboard3") {
    onboard3();
    stopbreastvideo();
  } else if (currentState === "onboard4") {
    onboard4();
    stopbreastvideo();
  } else if (currentState === "bookscreen") {
    bookscreen();
    stopbreastvideo();
  } else if (currentState === "momscreen") {
    momscreen();
    stopbreastvideo();
  } else if (currentState === "breastsub") {
    breastsub();
    stopbreastvideo();
  } else if (currentState === "breastbookscreen") {
    breastbookscreen();
    if (currentbreastpg === 3) {
      //breastbook.video1.play();
      breastbook.video1.loop();
      breastbook.video2.pause();
      breastbook.video3.pause();
      breastbook.video4.pause();
      breastbook.video5.pause();
      breastbook.video6.pause();
      breastbook.video7.pause();
      displayvideo(breastbook.video1);
    } else if (currentbreastpg === 4) {
      breastbook.video1.pause();
      breastbook.video2.loop();
      breastbook.video3.pause();
      breastbook.video4.pause();
      breastbook.video5.pause();
      breastbook.video6.pause();
      breastbook.video7.pause();
      displayvideo(breastbook.video2);
    } else if (currentbreastpg === 5) {
      breastbook.video2.pause();
      breastbook.video3.loop();
      breastbook.video1.pause();
      breastbook.video4.pause();
      breastbook.video5.pause();
      breastbook.video6.pause();
      breastbook.video7.pause();
      displayvideo(breastbook.video3);
    } else if (currentbreastpg === 6) {
      breastbook.video1.pause();
      breastbook.video2.pause();
      breastbook.video3.pause();
      breastbook.video4.pause();
      breastbook.video5.pause();
      breastbook.video6.pause();
      breastbook.video7.pause();
    } else if (currentbreastpg === 7) {
      breastbook.video3.pause();
      breastbook.video4.loop();
      breastbook.video1.pause();
      breastbook.video2.pause();
      breastbook.video5.pause();
      breastbook.video6.pause();
      breastbook.video7.pause();
      displayvideo(breastbook.video4);
    } else if (currentbreastpg === 8) {
      breastbook.video1.pause();
      breastbook.video2.pause();
      breastbook.video3.pause();
      breastbook.video4.pause();
      breastbook.video5.pause();
      breastbook.video6.pause();
      breastbook.video7.pause();
    } else if (currentbreastpg === 9) {
      breastbook.video5.loop();
      breastbook.video3.pause();
      breastbook.video4.pause();
      breastbook.video1.pause();
      breastbook.video2.pause();
      breastbook.video6.pause();
      breastbook.video7.pause();
      
      displayvideo(breastbook.video5);
    } else if (currentbreastpg === 10) {
      breastbook.video3.pause();
      breastbook.video4.pause();
      breastbook.video5.pause();
      breastbook.video1.pause();
      breastbook.video2.pause();
      breastbook.video7.pause();
      breastbook.video6.loop();
      displayvideo(breastbook.video6);
    } else if (currentbreastpg === 11) {
      breastbook.video3.pause();
      breastbook.video1.pause();
      breastbook.video2.pause();
      breastbook.video4.pause();
      breastbook.video5.pause();
      breastbook.video6.pause();
      breastbook.video7.loop();
      displayvideo(breastbook.video7);
    }
  }else if (currentState === "flangebookscreen") {
    flangebookscreen();
    stopbreastvideo();
    
  } else if (currentState === "milkbookscreen") {
    milkbookscreen();
    stopbreastvideo();
    if(currentmilkpg === 5 )
      {
        milkbook.video1.loop();
        displayvideo(milkbook.video1);
      }
  } 
}
function welcome() {
  image(screens.welcome, 0, 0);
}
function onboard1() {
  image(screens.onboard1, 0, 0);
}
function onboard2() {
  image(screens.onboard2, 0, 0);
}
function onboard4() {
  image(screens.onboard4, 0, 0);
}
function onboard3() {
  image(screens.onboard3, 0, 0);
}
function bookscreen() {
  image(screens.bookscreen, 0, 0);
}
function momscreen() {
  image(screens.momscreen, 0, 0);
}
function breastsub() {
  image(screens.breastfeedsub, 0, 0);
}
function breastbookscreen() {
  image(breastbook.pgloaded[currentbreastpg], 0, 0);
  console.log(currentbreastpg);
}
function flangebookscreen() {
  image(breastbook.flangepgloaded[currentflangepg], 0, 0);
  console.log(currentbreastpg);
}
function milkbookscreen() {
  image(milkbook.pgloaded[currentmilkpg], 0, 0);
  console.log(currentmilkpg);
}
function nextbreastpg() {
  currentbreastpg = currentbreastpg + 1;
  if (currentbreastpg > breastbook.pgloaded.length - 1) {
    currentbreastpg = 0;
  }
}
function prevbreastpg() {
  currentbreastpg = currentbreastpg - 1;
  if (currentbreastpg < 0) {
    currentbreastpg = 0;
  }
}
function nextflangepg() {
  currentflangepg = currentflangepg + 1;
  if (currentflangepg > breastbook.flangepgloaded.length - 1) {
    currentflangepg = 0;
  }
}
function prevflangepg() {
  currentflangepg = currentflangepg - 1;
  if (currentflangepg < 0) {
    currentflangepg = 0;
  }
}
function nextmilkpg() {
  currentmilkpg = currentmilkpg + 1;
  if (currentmilkpg > milkbook.pgloaded.length - 1) {
    currentmilkpg = 0;
  }
  
}

function prevmilkpg() {
  currentmilkpg = currentmilkpg - 1;
  if (currentmilkpg < 0) {
    currentmilkpg = milkbook.pgloaded.length - 1;
  }
  
}
function displayvideo(video) {
  image(video, 41, 169, 309, 431);
}
function stopbreastvideo() {
  breastbook.video1.pause();
  breastbook.video2.pause();
  breastbook.video3.pause();
  breastbook.video4.pause();
  breastbook.video5.pause();
  breastbook.video6.pause();
  breastbook.video7.pause();
  //milkbook.video1.pause();
}

function mousePressed() {
  //screen 1 to 2
  if (currentState === "welcome") {
    if (
      mouseX > buttons.start.x &&
      mouseX < buttons.start.x + buttons.start.width &&
      mouseY > buttons.start.y &&
      mouseY < buttons.start.y + buttons.start.height
    ) {
      currentState = "onboard1";
    }
  } else if (currentState === "onboard1") {
    if (
      mouseX > buttons.nexton.x &&
      mouseX < buttons.nexton.x + buttons.nexton.width &&
      mouseY > buttons.nexton.y &&
      mouseY < buttons.nexton.y + buttons.nexton.height
    ) {
      currentState = "onboard2";
    }
  } else if (currentState === "onboard2") {
    if (
      mouseX > buttons.nexton.x &&
      mouseX < buttons.nexton.x + buttons.nexton.width &&
      mouseY > buttons.start.y &&
      mouseY < buttons.nexton.y + buttons.nexton.height
    ) {
      currentState = "onboard3";
    }
  } else if (currentState === "onboard3") {
    if (
      mouseX > buttons.nexton.x &&
      mouseX < buttons.nexton.x + buttons.nexton.width &&
      mouseY > buttons.start.y &&
      mouseY < buttons.nexton.y + buttons.nexton.height
    ) {
      currentState = "onboard4";
    }
  } else if (currentState === "onboard4") {
    if (
      mouseX > buttons.nexton.x &&
      mouseX < buttons.nexton.x + buttons.nexton.width &&
      mouseY > buttons.nexton.y &&
      mouseY < buttons.nexton.y + buttons.nexton.height
    ) {
      currentState = "bookscreen";
    }
  } else if (currentState === "bookscreen") {
    if (
      mouseX > buttons.mom.x &&
      mouseX < buttons.mom.x + buttons.mom.width &&
      mouseY > buttons.mom.y &&
      mouseY < buttons.mom.y + buttons.mom.height
    ) {
      currentState = "momscreen";
    }
  } else if (currentState === "momscreen") {
    if (
      mouseX > buttons.back.x &&
      mouseX < buttons.back.x + buttons.back.width &&
      mouseY > buttons.back.y &&
      mouseY < buttons.back.y + buttons.back.height
    ) {
      currentState = "bookscreen";
    } else if (
      mouseX > buttons.breastbook.x &&
      mouseX < buttons.breastbook.x + buttons.breastbook.width &&
      mouseY > buttons.breastbook.y &&
      mouseY < buttons.breastbook.y + buttons.breastbook.height
    ) {
      currentState = "breastsub";
    }else if (
      mouseX > buttons.milkbook.x &&
      mouseX < buttons.milkbook.x + buttons.milkbook.width &&
      mouseY > buttons.milkbook.y &&
      mouseY < buttons.milkbook.y + buttons.milkbook.height
    ) {
      currentState = "milkbookscreen";
    }
  } else if (currentState === "breastsub") {
    if (
      mouseX > buttons.back.x &&
      mouseX < buttons.back.x + buttons.back.width &&
      mouseY > buttons.back.y &&
      mouseY < buttons.back.y + buttons.back.height
    ) {
      currentState = "momscreen";
    } else if (
      mouseX > buttons.breastfeeding.x &&
      mouseX < buttons.breastfeeding.x + buttons.breastfeeding.width &&
      mouseY > buttons.breastfeeding.y &&
      mouseY < buttons.breastfeeding.y + buttons.breastfeeding.height
    ) {
      currentState = "breastbookscreen";
    }else if (
      mouseX > buttons.flangebook.x &&
      mouseX < buttons.flangebook.x + buttons.flangebook.width &&
      mouseY > buttons.flangebook.y &&
      mouseY < buttons.flangebook.y + buttons.flangebook.height
    ) {
      currentState = "flangebookscreen";
    }
  } else if (currentState === "breastbookscreen") {
    if (
      mouseX > buttons.nextpg.x &&
      mouseX < buttons.nextpg.x + buttons.nextpg.width &&
      mouseY > buttons.nextpg.y &&
      mouseY < buttons.nextpg.y + buttons.nextpg.height
    ) {
      nextbreastpg();
    } else if (
      mouseX > buttons.prevpg.x &&
      mouseX < buttons.prevpg.x + buttons.prevpg.width &&
      mouseY > buttons.prevpg.y &&
      mouseY < buttons.prevpg.y + buttons.prevpg.height
    ) {
      prevbreastpg();
    }
    if (
      mouseX > buttons.back.x &&
      mouseX < buttons.back.x + buttons.back.width &&
      mouseY > buttons.back.y &&
      mouseY < buttons.back.y + buttons.back.height
    ) {
      currentState = "breastsub";
      currentbreastpg = 0;
    }
  }else if (currentState === "flangebookscreen") {
    if (
      mouseX > buttons.nextpg.x &&
      mouseX < buttons.nextpg.x + buttons.nextpg.width &&
      mouseY > buttons.nextpg.y &&
      mouseY < buttons.nextpg.y + buttons.nextpg.height
    ) {
      nextflangepg();
    } else if (
      mouseX > buttons.prevpg.x &&
      mouseX < buttons.prevpg.x + buttons.prevpg.width &&
      mouseY > buttons.prevpg.y &&
      mouseY < buttons.prevpg.y + buttons.prevpg.height
    ) {
      prevflangepg();
    }
    if (
      mouseX > buttons.back.x &&
      mouseX < buttons.back.x + buttons.back.width &&
      mouseY > buttons.back.y &&
      mouseY < buttons.back.y + buttons.back.height
    ) {
      currentState = "breastsub";
      currentflangepg = 0;
    }
  }else if (currentState === "milkbookscreen") {
    if (
      mouseX > buttons.nextpg.x &&
      mouseX < buttons.nextpg.x + buttons.nextpg.width &&
      mouseY > buttons.nextpg.y &&
      mouseY < buttons.nextpg.y + buttons.nextpg.height
    ) {
      nextmilkpg();
    } else if (
      mouseX > buttons.prevpg.x &&
      mouseX < buttons.prevpg.x + buttons.prevpg.width &&
      mouseY > buttons.prevpg.y &&
      mouseY < buttons.prevpg.y + buttons.prevpg.height
    ) {
      prevmilkpg();
    }
    if (
      mouseX > buttons.back.x &&
      mouseX < buttons.back.x + buttons.back.width &&
      mouseY > buttons.back.y &&
      mouseY < buttons.back.y + buttons.back.height
    ) {
      currentState = "momscreen";
      currentmilkpg = 0;
    }
  }
}

// Touch support for mobile devices
function touchStarted() {
  mousePressed();
  return false;
}
