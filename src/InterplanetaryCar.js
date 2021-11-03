function getGridDimensions(gridShape)
{
  let dimensions = gridShape.split(',');
  let gridHasTwoDimensions = dimensions.length == 2;
  if (!gridHasTwoDimensions)
    dimensions.push("");
  return dimensions.map((dim)=>getDimensionInt(dim));
}

function getDimensionInt(gridDimension)
{
  let defaultDimension = 5;
  let dimension = parseInt(gridDimension);
  if (isNaN(dimension))
    dimension = defaultDimension;
  return dimension;
}

function validateGridShape(gridShape)
{
  let gridDimensions = getGridDimensions(gridShape);
  return gridDimensions.join(',');
}


function getPositionsInt(pos)
{
  let defaultInitPos = 0;
  let initPos = parseInt(pos);
  if(isNaN(initPos))
    initPos = defaultInitPos;
  return initPos;
}

function getInitOrientation(orientation)
{
  let validOrientations = ["N","E","S","O"];
  let defuaultOrientation = "N";
  if (!validOrientations.includes(orientation))
  {
    orientation = defuaultOrientation;
  }
  return orientation;
}

function getInitialPosition(initPos)
{
  let position = initPos.split(',');
  let posHasTwoDimensions = position.length == 2;
  if (!posHasTwoDimensions)
    position.push("0N");
  let initOrientation = position[1][position[1].length-1];
  position[1] = position[1].substring(0,position[1].length-1);
  initOrientation = getInitOrientation(initOrientation);
  return position.map((pos)=>getPositionsInt(pos)).join(',') + initOrientation;
}

function validateInitPos(initPos)
{
  let initialPosition = getInitialPosition(initPos);
  return initialPosition;
}

function splitCommandParts(command)
{
  let commandParts = command.split('/');
  let commandIsComplete = commandParts.length == 3;
  if (!commandIsComplete)
    commandParts = ["","",""];
  return commandParts;
}


function getOrientation(initPos)
{
  let orientationIndex = initPos.length - 1
  return initPos[orientationIndex];
}

function getX(pos)
{
  return parseInt(pos.split(',')[0]);
}

function getY(pos)
{
  return parseInt(pos.split(',')[1]);
}

function getInsideGridValue(x,xLimitGrid)
{
  if (x<=0)
  {
    x = 0;
  }
  else if (x>=xLimitGrid)
  {
    x = xLimitGrid;
  }
  return x;
}

function isPosInsideGrid(pos,gridShape)
{
  let x = getX(pos);
  let y = getY(pos);
  let gridDimensions = getGridDimensions(gridShape); 
  return (gridDimensions[0] <= x && x >= 0 )&& (gridDimensions[1] <= y && y >= 0);
}

function getValidPos(gridShape,pos)
{
  let x = getX(pos);
  let y = getY(pos);
  let orientation = getOrientation(pos)
  let gridDimensions = getGridDimensions(gridShape); 
  x = getInsideGridValue(x,gridDimensions[0]);
  y = getInsideGridValue(y,gridDimensions[1]);
  pos = x.toString() + "," + y.toString() + orientation;
  return pos;
}

function jump(initPos)
{
  let orientationJumps = {
    'N':(pos)=>{pos[1]=pos[1]+2; return pos;},
    'E':(pos)=>{pos[0]=pos[0]+2; return pos;},
    'S':(pos)=>{pos[1]=pos[1]-2; return pos;},
    'O':(pos)=>{pos[0]=pos[0]-2; return pos;}
  }
  let orientation = getOrientation(initPos);
  let x = getX(initPos);
  let y = getY(initPos);
  let actualPos = [x,y]
  let jumpFunction = orientationJumps[orientation];
  let newPos = jumpFunction(actualPos);
  return newPos.join(',')+orientation;
}

function goAhead(initPos)
{
  let orientationSteps = {
    'N':(pos)=>{pos[1]=pos[1]+1; return pos;},
    'E':(pos)=>{pos[0]=pos[0]+1; return pos;},
    'S':(pos)=>{pos[1]=pos[1]-1; return pos;},
    'O':(pos)=>{pos[0]=pos[0]-1; return pos;}
  }
  let orientation = getOrientation(initPos);
  let x = getX(initPos);
  let y = getY(initPos);
  let actualPos = [x,y]
  let goAheadFunction = orientationSteps[orientation];
  let newPos = goAheadFunction(actualPos);
  return newPos.join(',')+orientation;
}

function validateMovementCommands(movementCommands)
{
  let validMovementCommands = ['I','D','A','S']
  let movementCommandsValidated = "";
  for(let i=0;i<movementCommands.length;i++){
    let character = movementCommands[i];
    if (validMovementCommands.includes(character))
    {
      movementCommandsValidated = movementCommandsValidated + character;
    }
  }
  return movementCommandsValidated;
}

function getMovementCommandsList(movementCommands)
{
  let movementCommandsList = [];
  movementCommands = validateMovementCommands(movementCommands);
  for(let i=0;i<movementCommands.length;i++){
    let character = movementCommands[i];
    movementCommandsList.push(character);
  }
  return movementCommandsList;
}

function rotateCar(pos,rotateCommand)
{
  let orientations = ['N','E','S','O'];
  let orientation = getOrientation(pos);
  let orientationIndex = orientations.indexOf(orientation);
  if (rotateCommand == 'D')
  {
    orientationIndex = orientationIndex + 1;
    if(orientationIndex>=orientations.length)
    {
      orientationIndex = 0;
    }
  }
  else if (rotateCommand == 'I')
  {
    orientationIndex = orientationIndex - 1;
    if(orientationIndex<0)
    {
      orientationIndex = orientations.length-1;
    }
  }
  let newOrientation = orientations[orientationIndex];
  let newPos = pos.substring(0,pos.length-1)+newOrientation;
  return newPos;
}

function executeCommands(command)
{
  let movementFunctions = {'S':jump,
    'A':goAhead,
    'D':(pos)=>{return rotateCar(pos,'D')},
    'I':(pos)=>{return rotateCar(pos,'I')}
  }
  let commandParts = splitCommandParts(command);
  let gridShape = validateGridShape(commandParts[0]);
  let initPos = validateInitPos(commandParts[1]);
  let movementCommands = getMovementCommandsList(commandParts[2]);
  let actualPos = initPos;
  movementCommands.forEach(movementCommand => {
    let movementFunction = movementFunctions[movementCommand];
    actualPos = movementFunction(actualPos);
    actualPos = getValidPos(gridShape,actualPos);
  });
  let finalPos = actualPos;
  return finalPos;
}

export {splitCommandParts,validateGridShape,validateInitPos,executeCommands,isPosInsideGrid,getValidPos,validateMovementCommands,getMovementCommandsList};
