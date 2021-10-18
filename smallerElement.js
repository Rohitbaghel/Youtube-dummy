function runProgram(input) {
  input = input.split("\n");
  let size = +input[0].trim();
  let line = 1;
  for (let i = 0; i < size; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    //    console.log(arr)
    console.log(nerarestsmallertoleft(n, arr))
  }
 
}
function nerarestsmallertoleft(n, arr) {
  let stack1 = [];
  let left = [];
  for (let i = 0; i < n; i++) {
    while (stack1.length != 0 && arr[stack1[stack1.length - 1]] >= arr[i]) {
      stack1.pop();
    }
    if (stack1.length == 0) {
      left[i] = -1;
    } else {
      left[i] = stack1[stack1.length - 1];
    }
    stack1.push(i);
  }
  // 



  let stack2 = [];
  let right = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack2.length != 0 && arr[stack2[stack2.length - 1]] >= arr[i]) {
      stack2.pop();
    }
    if (stack2.length == 0) {
      right[i] = -1;
    } else {
      right[i] = stack2[stack2.length - 1];
    }
    stack2.push(i);
  }
  // 


  let answer = []
  for(let i = 0;i <left.length;i++) {
      if(left[i] == -1 && right[i] == -1) {
          answer[i] = -1
      }else if(left[i] == -1){
          answer[i] =arr[right[i]];
      }else if(right[i] == -1){
          answer[i] = arr[left[i]]
      }else{
          let temp1 = Math.abs(i-left[i])
          let temp2 = Math.abs(i-right[i])
          if(temp1 == temp2){
              answer[i] = arr[left[i]]
          }else{
             if(temp1 < temp2){
               answer[i] = arr[left[i]]
             }else{
               answer[i] = arr[right[i]]
             }
          }
      }
  }
  return answer.join(' ');
}

if (process.env.USERNAME === "Aashu Baghel") {
  runProgram(`1
    8
    39 27 11 4 24 32 32 1`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
