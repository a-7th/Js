import { PI, getCircumference, getArea, getVolume } from './mathUtil.js';

const btn = document.getElementById('btn');
const output = document.getElementById('output');

console.log('JS LOADED');

btn.addEventListener('click', () => {
  const radius = 10;

  const circumference = getCircumference(radius);
  const area = getArea(radius);
  const volume = getVolume(radius);

  output.innerText =
    `PI: ${PI}\n` +
    `Circumference: ${circumference.toFixed(2)} cm\n` +
    `Area: ${area.toFixed(2)} cm²\n` +
    `Volume: ${volume.toFixed(2)} cm³`;
});
