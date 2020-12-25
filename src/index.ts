import { runTodo } from "./todo/todo";
import { runFunction } from "./functions"
import { runTuples } from "./tuples";
import { runEnums } from "./enums";
import { runLiteralValueTypes } from "./literal-value-types";
import { runTypeUnion } from "./type-union";
import { runShapeType } from "./shape-types";
import { runTypeIntersections } from "./type-intersections";
import { runClasses } from "./classes";
import { runClassesInheritance } from "./classes-inheritance";
import { runInterfaceClasses } from "./interface-classes";
import { runDynamicProperties } from "./dynamic-properties";
import { runGenerics } from "./generics";

runTodo();
console.log('---------------------------------------------------------------');

runFunction();
console.log('---------------------------------------------------------------');

runTuples();
console.log('---------------------------------------------------------------');

runEnums();
console.log('---------------------------------------------------------------');

runLiteralValueTypes();
console.log('---------------------------------------------------------------');

runTypeUnion();
console.log('---------------------------------------------------------------');

runShapeType();
console.log('---------------------------------------------------------------');

runTypeIntersections();
console.log('---------------------------------------------------------------');

runClasses();
console.log('---------------------------------------------------------------');

runClassesInheritance();
console.log('---------------------------------------------------------------');

runInterfaceClasses();
console.log('---------------------------------------------------------------');

runDynamicProperties();
console.log('---------------------------------------------------------------');

runGenerics();
console.log('---------------------------------------------------------------');