const rank = (grades) => {
 const sorted = [...grades].sort((a, b) => b-a);
 const list = [];
 let ranking = 0;

 grades.forEach((grade) => {
     const currentIndex = sorted.findIndex((n) => n === grade);
     if(sorted[currentIndex] === sorted[currentIndex + 1]) {
         ranking = currentIndex;
         list.push(ranking  + 1);
     } else {
         if(ranking > 0) {
             list.push(ranking);
         } else {
             list.push(currentIndex + 1);
         }
     }
 });

 return list;
}

console.log(rank([87, 89, 90, 100, 76]));
console.log(rank([60, 89, 89, 78, 65]));