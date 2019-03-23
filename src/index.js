module.exports = function getZerosCount(number, base) {
  // your implementation

  /* ?let number = 0;
   for (let i = 5; n/i >= 1; i *= 5)
     number += Math.floor(n/i);
   return number;
   Дано целое число N от 1 до 10^7 и номер base от 2 до 256.
   необходимо посчитать количество нулей в конце числа, которое получается путем высиления факториала числа-N в base-системе счисления
   */

  let Zeros = 0;

  for (i = 5; number / i >= 1; i *= 5)
    Zeros += Math.floor(number / i);
  return Zeros;


}