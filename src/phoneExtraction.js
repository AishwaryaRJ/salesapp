function phoneNumber(S) {
     let ans = "";
    for (let i of S) {
      if (parseInt(i) >= 0 && parseInt(i) <= 9) {
        ans += i;
      }
    }
    if (ans.length > 10) {
      ans = ans.slice(-10);
    }
    return ans;
}


const S = gets();

const result = phoneNumber(S);

console.log(result)