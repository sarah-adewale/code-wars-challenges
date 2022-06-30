// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n){
    //  let cnt = 0;
    //     for(let i = 1; i <= n; i++){
    //       if(!(n % i)) cnt++;
    //     }
    //     return cnt;
     let cnt = 0;
        for(let i = 1; i*i <= n; i++){
          if(i*i == n) cnt++;
          else if(!(n % i)) cnt += 2;
        }
        return cnt;
}

console.log(getDivisorsCnt(1))
console.log(getDivisorsCnt(10))
console.log(getDivisorsCnt(11))
console.log(getDivisorsCnt(54))
