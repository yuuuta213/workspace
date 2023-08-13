function hoge(arg) {
  return String(arg);
}
console.log(hoge(1000));
//2
const object1 = {};
console.log(object1.property1);
const object2 = {
  property1: null
};
console.log(object2.property1);
//5
const object4 = {
  numberProperty: 1
};
console.log(object4.numberProperty);
console.log(object4.stringProperty);
//8
const object6 = {
  numberProperty: 1,
  stringProperty: 'string'
};
object6.numberProperty = 2;
const object7 = object6;
object7.stringProperty = 'abither string';
console.log(object6);
//9
const stringList = ['hoge', 'hoooge'];
stringList.forEach(function (str, index) {
  console.log(`${index}: ${str}`);
});
//10
const newList = stringList.map(function (str, index) {
  return str.replace('g', 'ggg');
});
console.log(newList);
//論理演算子
// &&(AND) ||(OR)
const value = 1;
console.log(null); //null
console.log(value); //1
console.log(undefined); //undefined
console.log(value); //1
console.log(0); //0
console.log(value); //1
console.log(value); //1
console.log(1000); //1000
console.log(value); //1
console.log('hoge'); //hoge
//Null合体演算子（？？）
console.log('default'); //default
console.log('default'); //default
console.log(true); //true
console.log(false); //false
console.log(1); //1
console.log(0); //0
console.log(1); //1
console.log(2); //2
console.log(2); //2
console.log(1); //1
{
  console.log('else');
} //->else
{
  console.log('true');
} // ->true
//SWICH
const condition3 = 'huga';
switch (condition3) {
  case 'hoge':
    console.log('hoge found');
    break;
  case 'huga':
    console.log('huga found');
    break;
  default:
    console.log('not found');
}
//for
const list = ['hoge', 'huga'];
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
} // ->hoge ->huga
//for of
const lists = ['hoge', 'huga'];
for (const item of lists) {
  console.log(item);
}
//try/catch
try {
  throw new Error('sample error');
  console.log('sucess');
}
catch (error) {
  console.log('error');
}
finally {
  console.log('finish process');
}
const arrowFunction1 = (arg1, arg2) => arg1 === 1 || arg2 === 'string1';
console.log(arrowFunction1(1, 'string1')); // ->true
//Class
class NewClass {
  constructor() {
    this.property = 'property';
  }
  method() {
    return this.property;
  }
}
const instance = new NewClass();
instance.property; //-> 'property'
instance.method(); // -> 'property'

//async/await
const asyncFunctio = async () => {
  const response = await fetch(
    'https://api.publicapis.org/entries'
  );
  const json: string = await response, json();

}
