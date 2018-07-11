'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

window.onload = function () {
  var hi = document.getElementById('kkyu');
  hi.addEventListener('click', function () {
    alert("플레이팅에서 forever working 파이팅");
    console.log('hi');
  });

  var obj = {
    'test1': 1,
    'test2': 2,
    'test3': 3,
    'test4': 4,
    'test5': 5,
    'test6': 6
  };

  console.log(_extends({}, obj));
  console.log('안녕 나는 바벨이 아니야');
};