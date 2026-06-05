const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, groundObject;
var world;
var paper;
var paperImg;
var dustbinImg;

function preload() {
  paperImg = loadImage("assets/img/paper.png");
  dustbinImg = loadImage("assets/img/dustbingreen.png");
}

function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);

  console.log("p5 setup running");
  try {
    var s = document.getElementById("status");
    if (s) s.innerText = "p5 setup running";
  } catch (e) {}

  engine = Engine.create();
  world = engine.world;

  groundObject = new ground(width / 2, 670, width, 20);
  dustbinObj = new dustbin(1200, 650, dustbinImg);
  paper = new Paper(200, 500, 25, paperImg);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(230);
  // debug indicator
  if (frameCount % 60 === 0) {
    console.log("frame", frameCount);
  }
  try {
    var s = document.getElementById("status");
    if (s) s.innerText = "p5 running (frame " + frameCount + ")";
  } catch (e) {}

  paper.display();
  groundObject.display();
  dustbinObj.display();
}

function keyPressed() {
  // UP_ARROW: pequena força controlada
  if (keyCode === UP_ARROW) {
    const targetX = dustbinObj.bottomBody.position.x;
    const targetY =
      dustbinObj.bottomBody.position.y - dustbinObj.dustbinHeight / 2;
    const dx = targetX - paper.body.position.x;
    const dy = targetY - paper.body.position.y;
    let forceX = dx * 0.0006;
    let forceY = dy * 0.0009;
    forceY += -0.03;
    forceX = Math.max(Math.min(forceX, 0.06), -0.06);
    forceY = Math.max(Math.min(forceY, 0.06), -0.12);
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: forceX,
      y: forceY,
    });
  }

  // SPACE (code 32): enviar direto para o lixeiro usando velocidade;
  if (keyCode === 32) {
    const targetX = dustbinObj.bottomBody.position.x;
    const targetY =
      dustbinObj.bottomBody.position.y - dustbinObj.dustbinHeight / 2;
    const dx = targetX - paper.body.position.x;
    const dy = targetY - paper.body.position.y;
    const mag = Math.sqrt(dx * dx + dy * dy);
    if (mag > 0) {
      const speed = 12;
      const vx = (dx / mag) * speed;
      const vy = (dy / mag) * speed;
      Matter.Body.setVelocity(paper.body, { x: vx, y: vy });
      Matter.Body.setAngularVelocity(paper.body, 0);
    }
  }
}

function mousePressed() {
  // Ao clicar, também definir uma velocidade dirigida ao centro do lixeiro
  const targetX = dustbinObj.bottomBody.position.x;
  const targetY =
    dustbinObj.bottomBody.position.y - dustbinObj.dustbinHeight / 2;
  const dx = targetX - paper.body.position.x;
  const dy = targetY - paper.body.position.y;
  const mag = Math.sqrt(dx * dx + dy * dy);
  if (mag > 0) {
    const speed = 8;
    const vx = (dx / mag) * speed;
    const vy = (dy / mag) * speed;
    Matter.Body.setVelocity(paper.body, { x: vx, y: vy });
    Matter.Body.setAngularVelocity(paper.body, 0);
  }
}
