'use strict';

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];
  const results = [];

  // Solution
  for (let i = 0; i < sampleSize; i++) {
    const randomDiceSide = Math.floor(Math.random() * 6);
    valueCounts[randomDiceSide] += 1;
  }

  for (const valueCount of valueCounts) {
    const possibility = ((valueCount / sampleSize) * 100).toFixed(2);
    results.push(possibility);
  }
  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];

  // Solution
  for (const sampleSize of sampleSizes) {
    const experimentResult = runExperiment(sampleSize);
    console.log(experimentResult, sampleSize);
  }
}

main();
