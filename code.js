var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var Sofia = createSprite(20,35,20,20);
var cup = createSprite(380,365,30,50);
var c1 = createSprite(45,10,10,70);
var c2 = createSprite(40,105,120,10);                           
var c3 = createSprite(95,70,10,60);
var c4 = createSprite(150,10,10,90);
var c5 = createSprite(143,105,86,10);
var c6 = createSprite(197,50,95,10);
var c7 = createSprite(240,105,10,120);
var c8 = createSprite(200,170,90,10);
var c9 = createSprite(160,190,10,50);
var c10 = createSprite(100,229,10,104);
var c11 = createSprite(80,172,50,10);
var c12 = createSprite(30,240,130,10);
var c13 = createSprite(160,277,130,10);
var c14 = createSprite(220,217,130,10);
var c15 = createSprite(280,275,10,120);
var c16 = createSprite(225,335,120,10);
var c17 = createSprite(118,335,140,10);
var c18 = createSprite(53,315,10,50);
var c19 = createSprite(335,370,10,130);
var c20 = createSprite(335,270,10,130);
var c21 = createSprite(317,70,165,10);
var c22 = createSprite(335,170,10,90);
Sofia.shapeColor = "Pink";
Sofia.scale = 1.0;
cup.shapeColor = "Yellow";
cup.scale = 1.0;
c1.shapeColor = "blue";
c2.shapeColor = "orange";
c3.shapeColor = "pink";
c4.shapeColor = "orange";
c5.shapeColor = "blue";
c6.shapeColor = "yellow";
c7.shapeColor = "blue";
c8.shapeColor = "black";
c9.shapeColor = "yellow";
c10.shapeColor = "white";
c11.shapeColor = "blue";
c12.shapeColor = "yellow";
c13.shapeColor = "pink";
c14.shapeColor = "black";
c15.shapeColor = "yellow";
c16.shapeColor = "orange";
c17.shapeColor = "red";
c18.shapeColor = "pink";
c19.shapeColor = "blue";
c20.shapeColor = "black";
c21.shapeColor = "gold";
c22.shapeColor = "brown";

edges = createEdgeSprites();
function draw() 
{
  background("purple");
  
  Sofia.velocityX = 0;
  Sofia.velocityY = 0;

 
 if(keyDown("LEFT_ARROW")) 
{
  Sofia.velocityX = -3;
  Sofia.velocityY = 0;
}
  
  if (keyDown("RIGHT_ARROW"))
{
  Sofia.velocityX = 3;
  Sofia.velocityY = 0;
}
  if (keyDown("UP_ARROW")) 
{
  Sofia.velocityX = 0;
  Sofia.velocityY = -3;
}
  
  if (keyDown("DOWN_ARROW")) 
{
  Sofia.velocityX = 0;
  Sofia.velocityY = 3;
}

if (Sofia.isTouching(c1) || Sofia.isTouching(c2) || Sofia.isTouching(c3) || Sofia.isTouching(c4) || Sofia.isTouching(c5) || Sofia.isTouching(c6) || Sofia.isTouching(c7) || Sofia.isTouching(c8) || Sofia.isTouching(c9) || Sofia.isTouching(c10) || Sofia.isTouching(c11) || Sofia.isTouching(c12) || Sofia.isTouching(c13) || Sofia.isTouching(c14) || Sofia.isTouching(c15) || Sofia.isTouching(c16) || Sofia.isTouching(c17) || Sofia.isTouching(c18) || Sofia.isTouching(c19) || Sofia.isTouching(c20) || Sofia.isTouching(c21) || Sofia.isTouching(c22)) 
{
  Sofia.x = 20;
  Sofia.y = 35;
}

if (Sofia.isTouching(cup))
{
  textSize("25");
  text("You've won!" , 90,315);
}

if (Sofia.isTouching(cup)) 
{
  Sofia.velocityX = 0;
  Sofia.velocityY = 0;
}


  
 // createEdgeSprites();
  Sofia.bounceOff(edges);
  
  drawSprites();
}



 



  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
