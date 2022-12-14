/*
 (구조) 분해 할당에 대해서 알아본다.


*/
// 배열에 있는 요쇼를 개별 변수로 만들기
const points = [20, 30, 40];
const x1 = points[0];
const y1 = points[1];
const z1 = points[2];
console.log(x1, y1, z1); //20, 30, 40

const [x2, y2, z2] = points; //const [x2, y2, z2] = [20, 30, 40];
console.log(x2, y2, z2); //20, 30, 40

//두번째 값 무시하기
const [x3, , z3] = points; //[20, 30, 40];
console.log(x3, z3); //20, 40

// 두번째, 세번째 값 무시하기
const [x4, , , w4] = points; // [20, 30, 40];
console.log(x4, w4); // 20, undefined

/**
 * 객체 분해 할당 사용법을 연습
 */

const car = {
  type: 't',
  color: 's',
  model: 2021,
};

// ES5 에서의 객체 분해 할당
const type1 = car.type;
const color1 = car.color;
const model1 = car.model;
console.log(type1, color1, model1);

// ES2015 에서의 객체 분해 할당 {} 사용해서
// const {type, color, model} = {type: 't', color: 's',model: 2021};
const { type, color, model } = car;
console.log(type, color, model);

// ES2015 에서의 객체 분해 할당 {} 사용해서
// const {type:type2, color:color2, model:mode2, gear: gear2} = {type: 't', color: 's',model: 2021};
const { type: type2, color: color2, model: model2, gear: gear2 } = car;
console.log(type2, color2, model2, gear2); // t, s, 2021, undefined


const func1 = ( { type, color} ) => {
  console.log('type' , type);
  console.log('color', color);
}
func1(car);
