import {splitCommandParts,validateGridShape,validateInitPos,executeCommands,getValidPos,isPosInsideGrid,validateMovementCommands,getMovementCommandsList} from "./InterplanetaryCar.js"

describe("Split de la cadena de comandos", () => {
  it("TEST1: Debe retornar una lista las tres partes de los comandos de entrada", () => {
    expect(splitCommandParts("5,5/1,2N/IAIAIAIAA")).toEqual(["5,5","1,2N","IAIAIAIAA"]);
  });
  it("TEST2: Debe retornar una lista las tres partes de los comandos de entrada", () => {
    expect(splitCommandParts("5,5/1,2N/IAIAA")).toEqual(["5,5","1,2N","IAIAA"]);
  });
  it("TEST3: Listar las tres partes de los comandos, considerando alguno faltante", () => {
    expect(splitCommandParts("5,5//IAIAIAIAA")).toEqual(["5,5","","IAIAIAIAA"]);
  });
});

describe("Comando con partes faltantes (Falta '/') 5,5/1,2NIAIA ", () => {
  it("TEST1: Retornar una lista con tres cadenas vacias", () => {
    expect(splitCommandParts("5,5/1,2NIAIAIAIAA")).toEqual(["","",""]);
  });
});

describe("Validar la entrada del tamaño de la grilla", () => {
  it("TEST1: Retornar la forma (dimensiones) de la grilla", () => {
    expect(validateGridShape("5,5")).toEqual("5,5");
  });
  it("TEST2: Retornar dimensiones de la grilla por defecto", () => {
    expect(validateGridShape("")).toEqual("5,5");
  });
  it("TEST3: Retornar dimensiones de la grilla por defecto", () => {
    expect(validateGridShape("escribe-n,escribe-m")).toEqual("5,5");
  });
  it("TEST4: Retornar una dimensiones de la grilla por defecto", () => {
    expect(validateGridShape("6,escribe-m")).toEqual("6,5");
  });
  it("TEST5: Retornar una dimensiones de la grilla por defecto", () => {
    expect(validateGridShape(",7")).toEqual("5,7");
  });
  it("TEST6: Retornar dimensiones de la grilla por defecto", () => {
    expect(validateGridShape("anything")).toEqual("5,5");
  });
});

describe("Validar la entrada de la posicion inicial del auto", () => {
  it("TEST1: Retornar la posicion inicial del auto", () => {
    expect(validateInitPos("1,2N")).toEqual("1,2N");
  });
  it("TEST2: Retornar la posicion inicial del auto por defecto", () => {
    expect(validateInitPos("")).toEqual("0,0N");
  });
  it("TEST3: Retornar la posicion inicial del auto por defecto", () => {
    expect(validateInitPos("escribe-n,escribe-mDir")).toEqual("0,0N");
  });
  it("TEST4: Retornar la posicion inicial del auto por defecto", () => {
    expect(validateInitPos("6,escribe-mDir")).toEqual("6,0N");
  });
  it("TEST5: Retornar la posicion inicial del auto por defecto", () => {
    expect(validateInitPos("0,7E")).toEqual("0,7E");
  });
  it("TEST6: Retornar la posicion inicial del auto por defecto", () => {
    expect(validateInitPos("0,7F")).toEqual("0,7N");
  });
});


describe("Validar si la posicion inicial se encuentra en los limites de la grilla", () => {
  it("TEST1: Debe retornar false si la posicion esta fuera de la grilla", () => {
    expect(isPosInsideGrid("5,5","7,7N")).toEqual(false);
  });
  it("TEST2: Debe retornar true si la posicion esta dentro de la grilla", () => {
    expect(isPosInsideGrid("5,5","0,0N")).toEqual(true);
  });
  it("TEST3: Debe retornar true si la posicion esta dentro de la grilla", () => {
    expect(isPosInsideGrid("5,5","5,5N")).toEqual(true);
  });
  it("TEST4: Debe retornar el extremo mas al borde correspondiente", () => {
    expect(getValidPos("5,5","7,7N")).toEqual("5,5N");
  });
  it("TEST5: Debe retornar el extremo mas al borde correspondiente", () => {
    expect(getValidPos("6,6","7,7N")).toEqual("6,6N");
  });
  it("TEST6: Debe retornar el extremo mas al borde correspondiente", () => {
    expect(getValidPos("5,5","1,7E")).toEqual("1,5E");
  });
});

describe("Validar la secuencia de comandos de movimiento", () => {
  it("TEST1: Debe retornar una cadena solamente con los comandos validos", () => {
    expect(validateMovementCommands("IAIAIAIAA")).toEqual("IAIAIAIAA");
  });
  it("TEST2: Debe retornar una cadena solamente con los comandos validos", () => {
    expect(validateMovementCommands("IAIAfsIAIAA")).toEqual("IAIAIAIAA");
  });
});


describe("Obtener la lista de comandos de movimiento", () => {
  it("TEST1: Obtener la lista de comandos de movimiento", () => {
    expect(getMovementCommandsList("IAIAIAIAA")).toEqual(["I","A","I","A","I","A","I","A","A"]);
  });
  it("TEST2: Obtener la lista de comandos de movimiento", () => {
    expect(getMovementCommandsList("IAIAIsdsdfaAIAA")).toEqual(["I","A","I","A","I","A","I","A","A"]);
  });
});

describe("Validar salto del auto con el comando A", () => {
  it("TEST1: Modificar la posición final con el ingresodel comando A (un solo comando)", () => {
    expect(executeCommands("5,5/0,0N/A")).toEqual("0,1N");
  });
});


describe("Validar salto del auto con el comando A repetido una o mas veces", () => {
  it("TEST1: Modificar la posición final con el ingreso del comando AA", () => {
    expect(executeCommands("5,5/0,0N/AA")).toEqual("0,2N");
  });
  it("TEST2: Modificar la posición final con el ingreso del comando AAA", () => {
    expect(executeCommands("5,5/0,0N/AAA")).toEqual("0,3N");
  });
  it("TEST3: Cuando se supere el limite con AAAAAA debe devolver el borde correspondiente en la pos final", () => {
    expect(executeCommands("5,5/0,0N/AAAAAA")).toEqual("0,5N");
  });
});



describe("Validar salto del auto con el comando S", () => {
  it("TEST1: Modificar la posición final con el ingresodel comando S avanzando 2 posiciones", () => {
    expect(executeCommands("5,5/1,2N/S")).toEqual("1,4N");
  });
  it("TEST2: Modificar la posición final con el ingresodel comando S avanzando 2 posiciones", () => {
    expect(executeCommands("5,5/0,0N/S")).toEqual("0,2N");
  });
  it("TEST3: Modificar la posición final con el ingresodel comando S avanzando 2 posiciones", () => {
    expect(executeCommands("5,5/0,0N/SS")).toEqual("0,4N");
  });
});


describe("Modificar la orientacion del auto", () => {
  it("TEST1: Debe devolver el auto apuntando al Este E", () => {
    expect(executeCommands("5,5/0,0N/D")).toEqual("0,0E");
  });
  it("TEST2: Debe devolver el auto apuntando al Sur S", () => {
    expect(executeCommands("5,5/0,0N/DD")).toEqual("0,0S");
  });
  it("TEST3: Debe devolver el auto apuntando al Oeste O", () => {
    expect(executeCommands("5,5/0,0N/DDD")).toEqual("0,0O");
  });
  it("TEST4: Debe devolver el auto apuntando al Norte N", () => {
    expect(executeCommands("5,5/0,0N/DDDD")).toEqual("0,0N");
  });
  it("TEST5: Giro a la izquierda, debe devolver el auto apuntando al Norte N", () => {
    expect(executeCommands("5,5/0,0N/IIII")).toEqual("0,0N");
  });
});

describe("Combinar comandos de movimiento", () => {
  it("TEST1: Debe devolver 1,3N", () => {
    expect(executeCommands("5,5/1,2N/IAIAIAIAA")).toEqual("1,3N");
  });
  it("TEST2: Debe devolver 5,1E", () => {
    expect(executeCommands("5,5/3,3E/AADAADADDA")).toEqual("5,1E");
  });
  it("TEST3: Comandos incorrectos. Debe devolver 5,1E", () => {
    expect(executeCommands("5,5/3,3E/AAaDdsafdaAADsdsADDA")).toEqual("5,1E");
  });
});
