window.onload = function () {
  const hi = document.getElementById('kkyu');
  hi.addEventListener('click', function(){
      alert("플레이팅에서 forever working 파이팅")
      console.log('hi')
  })

  const obj = {
    'test1': 1,
    'test2': 2,
    'test3': 3,
    'test4': 4,
    'test5': 5,
    'test6': 6,
  }

  console.log({ ...obj })
  console.log('안녕 나는 바벨이 아니야')
}

