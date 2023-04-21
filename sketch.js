var bg
var ship
var iceberg
var fireball, ship, bg
var icebergsGroup

function preload() {
  bgImage = loadImage("ocean.png")
  shipImage = loadImage("ship.png")
  icebergImage = loadImage("iceberg.png")
  fireballImage = loadImage("fireball.png")
}

function setup() {
  createCanvas(1000, 600);

  bg = createSprite(width / 2, 560, width, height)
  bg.addImage("ground", bgImage)
  bg.scale = 0.2
  bg.velocityX = -2


  ship = createSprite(110, height - 200)
  ship.addImage("ship", shipImage)
  ship.scale = 0.1

  icebergsGroup = new Group()

}


function draw() {
  background(5);
  if (bg.x < 375) {
    bg.x = 500;
  }

  if (keyDown("space")) {
    shoot()
  }

  spawnicebergs()


  drawSprites()
}



function shoot() {
  fireball = createSprite(ship.x, ship.y)
  fireball.addImage("fireball", fireballImage)
  fireball.scale = 0.3
  fireball.velocityX = 3
}


function spawnicebergs() {
  if (frameCount % 100 === 0) {
    iceberg = createSprite(1000, height - 245)
    iceberg.addImage(icebergImage)
    iceberg.scale = 0.2
    iceberg.velocityX = -3
    icebergsGroup.add(iceberg)
  }
}