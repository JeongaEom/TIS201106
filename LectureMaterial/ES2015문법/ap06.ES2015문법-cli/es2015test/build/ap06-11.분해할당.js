"use strict";

/*
 (구조) 분해 할당에 대해서 알아본다.


*/
// 배열에 있는 요쇼를 개별 변수로 만들기
var points = [20, 30, 40];
var x1 = points[0];
var y1 = points[1];
var z1 = points[2];
console.log(x1, y1, z1); //20, 30, 40

var x2 = points[0],
  y2 = points[1],
  z2 = points[2]; //const [x2, y2, z2] = [20, 30, 40];
console.log(x2, y2, z2); //20, 30, 40

//두번째 값 무시하기
var x3 = points[0],
  z3 = points[2]; //[20, 30, 40];
console.log(x3, z3); //20, 40

// 두번째, 세번째 값 무시하기
var x4 = points[0],
  w4 = points[3]; // [20, 30, 40];
console.log(x4, w4); // 20, undefined

/**
 * 객체 분해 할당 사용법을 연습
 */

var car = {
  type: 't',
  color: 's',
  model: 2021
};

// ES5 에서의 객체 분해 할당
var type1 = car.type;
var color1 = car.color;
var model1 = car.model;
console.log(type1, color1, model1);

// ES2015 에서의 객체 분해 할당 {} 사용해서
// const {type, color, model} = {type: 't', color: 's',model: 2021};
var type = car.type,
  color = car.color,
  model = car.model;
console.log(type, color, model);

// ES2015 에서의 객체 분해 할당 {} 사용해서
// const {type:type2, color:color2, model:mode2, gear: gear2} = {type: 't', color: 's',model: 2021};
var type2 = car.type,
  color2 = car.color,
  model2 = car.model,
  gear2 = car.gear;
console.log(type2, color2, model2, gear2); // t, s, 2021, undefined

var func1 = function func1(_ref) {
  var type = _ref.type,
    color = _ref.color;
  console.log('type', type);
  console.log('color', color);
};
func1(car);