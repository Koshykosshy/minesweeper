'use client';

import { useState } from 'react';
import styles from './page.module.css';

const calcTotal = (arr: number[], counter: number) => {
  let result = 0;
  for (let i = 0; i < 5; i++) {
    result += arr[i];
  }
  return result + counter;
};

const down = (n: number) => {
  if (n < 0) {
    return;
  } else {
    console.log(n);
    return down(n - 1);
  }
};
down(10);

let result = 0;
const sum1 = (n: number): number => {
  if (n < 0) {
    return result;
  } else {
    result += n;
    return sum1(n - 1);
  }
};
console.log(sum1(10));

let result2 = 0;
const sum2 = (start: number, end: number): number => {
  if (end < start) {
    return result2;
  } else {
    result2 += end;
    return sum2(start, end - 1);
  }
};
console.log(sum2(4, 10));

const sum3 = (a: number, b: number): number => {
  return ((a + b) * (b - a + 1)) / 2;
};
console.log(sum3(3, 10));

export default function Home() {
  const [sampleCounter, setsampleCounter] = useState(0);

  const [numbers, setNumbers] = useState([0, 0, 0, 0, 0]);
  console.log(numbers);

  const clickHandler = () => {
    const newNumbers = structuredClone(numbers);
    newNumbers[sampleCounter % 5] += 1;
    setNumbers(newNumbers);
    setsampleCounter((sampleCounter + 1) % 14);
    console.log(sampleCounter);
  };

  const total = calcTotal(numbers, sampleCounter);
  console.log(total);

  return (
    <div className={styles.container}>
      <div
        className={styles.sampleCell}
        style={{ backgroundPosition: `${-30 * sampleCounter}px` }}
      />
      <button onClick={() => clickHandler()}>クリック</button>
    </div>
  );
}
