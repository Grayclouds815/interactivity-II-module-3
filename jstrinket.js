
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let shelves = [140, 260, 380];
let placed = [];

let options = ["smitski", "jar", "frog", "shell"];
let currentIndex = 0;
let selected = "star";

// images
let trinketImages = {};

function preload() {
  trinketImages["smiski"] = loadImage(     );
  trinketImages["jar"] = loadImage(      );
  trinketImages["frog"] = loadImage(        );
  trinketImages["shell"] = loadImage(       );
  trinketImages["smiski"] = loadImage(     );
  trinketImages["jar"] = loadImage(      );
  trinketImages["frog"] = loadImage(        );
  trinketImages["shell"] = loadImage(       );
  trinketImages["smiski"] = loadImage(     );
  trinketImages["jar"] = loadImage(      );
  trinketImages["frog"] = loadImage(        );
  trinketImages["shell"] = loadImage(       );
}

function setup() {
  createCanvas(700, 500);
}

function draw() {
  background(238, 234, 230);

  drawFrame();

  for (let y of shelves) {
    drawShelf(y);
  }

  for (let t of placed) {
    t.display();
  }

  drawMenu();
}

//-- shelf 

function drawFrame() {
  noStroke();
  fill(155, 125, 100);

  rect(130, 90, 20, 340, 10);
  rect(550, 90, 20, 340, 10);
}

function drawShelf(y) {
  noStroke();

  fill(175, 145, 115);
  rect(130, y, 440, 20, 6);

  fill(145, 115, 90);
  rect(130, y + 14, 440, 6, 4);

  fill(135, 105, 85);
} 

//-- trinkets 

class Trinket {
  constructor(x, y, type) {
    this.x = x;
    this.y = snapToShelf(y);
    this.type = type;
    this.img = trinketImages[type];
    this.size = 40;
  }

  display() {
    imageMode(CENTER);

    // -- shadow
    noStroke();
    fill(0, 0, 0, 35);
    ellipse(this.x, this.y + 12, this.size * 0.8, 8);

    // image
    if (this.img && this.img.width > 0) {
      image(this.img, this.x, this.y, this.size, this.size);
    } else {
      fill(200, 180, 255);
      ellipse(this.x, this.y, this.size);

      fill(80);
      textAlign(CENTER);
      textSize(10);
      text(this.type, this.x, this.y + 4);
    }
  }
}

function snapToShelf(y) {
  let closest = shelves[0];
  let minDist = abs(y - shelves[0]);

  for (let s of shelves) {
    let d = abs(y - s);
    if (d < minDist) {
      minDist = d;
      closest = s;
    }
  }

  return closest - 10;
}

//-- menu 

function drawMenu() {
  let cx = 80;
  let cy = 60;

  selected = options[currentIndex];

  textAlign(CENTER);
  fill(80);
  textSize(14);
  text("trinket", cx, 20);

  // buttons
  drawArrow(cx - 40, cy, -1);
  drawArrow(cx + 40, cy, 1);

  // preview box
  fill(220, 210, 230);
  rect(cx - 20, cy - 20, 40, 40, 8);

  let img = trinketImages[selected];

  if (img && img.width > 0) {
    imageMode(CENTER);
    image(img, cx, cy, 30, 30);
  } else {
    fill(180);
    ellipse(cx, cy, 30);
  }

  fill(80);
  textSize(10);
  text(selected, cx, cy + 35);
}

function drawArrow(x, y, dir) {
  fill(200, 180, 255);
  rect(x - 15, y - 15, 30, 30, 8);

  fill(80);
  noStroke();

  if (dir === -1) {
    triangle(x + 5, y - 8, x - 5, y, x + 5, y + 8);
  } else {
    triangle(x - 5, y - 8, x + 5, y, x - 5, y + 8);
  }
}

//--interaction 

function mousePressed() {
  let cx = 80;
  let cy = 60;

  //-- LEFT
  if (dist(mouseX, mouseY, cx - 40, cy) < 20) {
    currentIndex--;
    if (currentIndex < 0) currentIndex = options.length - 1;
    return;
  }

  //-- RIGHT
  if (dist(mouseX, mouseY, cx + 40, cy) < 20) {
    currentIndex++;
    if (currentIndex >= options.length) currentIndex = 0;
    return;
  }

  //-- PLACE TRINKET
  if (mouseY > 120 && mouseY < 420) {
    placed.push(new Trinket(mouseX, mouseY, selected));
  }
}

//-- add a way to save their shelf to the computer as jackson showed on demo and add text to explain this interaction 
//-- make the shelves perferated like image example 
//-- put in all png images and make it able to run pngs 
//-- upload to repo 