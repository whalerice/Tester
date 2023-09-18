function solution(array) {
  var answer = 0;

  if (array.length === 1) return array[0];

  const obj = array.reduce((누산값, 현재요소, index, arr) => {
    누산값[현재요소] = (누산값[현재요소] || 0) + 1;
    return 누산값;
  }, {});

  const maxinum = Math.max(...Object.values(obj));
  const mode = Object.keys(obj).filter((e) => obj[e] === maxinum);

  answer = mode.length > 1 ? -1 : Number(mode[0]);
  console.log(answer);

  return answer;
}

solution([1, 2, 3, 3, 3, 3, 4, 4]);
solution([1, 1, 2, 2]);
