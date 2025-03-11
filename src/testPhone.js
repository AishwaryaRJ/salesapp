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
console.log(phoneNumber("(091)-1234-789")); 
console.log(phoneNumber("+911001001001"));        
console.log(phoneNumber("002-1-2-3-4-5-6-7-8-9-0"));  

ans.slice(ans.length - 10)