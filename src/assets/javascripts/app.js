import '../stylesheets/app.scss';
import Chart from 'chart.js';

const COLORS = {
  // physical: getComputedStyle(document.body).getPropertyValue('--physical'),
  border: 'rgba(255, 255, 255, 1)',
  physical: 'rgba(154, 205, 50, 0.75)',
  financial: 'rgba(65, 105, 225, 0.75)',
  intellectual: 'rgba(102, 51, 153, 0.75)',
  emotional: 'rgba(220, 20, 60, 0.75)',
  social: 'rgba(255, 140, 0, 0.75)',
  spiritual: 'rgba(255, 215, 0, 0.75)'
};
Object.freeze(COLORS);

let ctx = document.getElementById('myChart');
let data = [
  95, 10, 75, 75, 10, 100,
  100, 95, 100, 100, 100, 80,
  95, 45, 80, 95, 90, 50,
  50, 50, 50, 50, 70, 100,
  50, 50, 5, 100, 50, 40,
  15, 0, 0, 0, 100, 50
];

let myChart = new Chart(ctx, {
  type: 'polarArea',
  options: {},
  data: {
    // labels: [
    //   'Physical',
    //   'Financial',
    //   'Intellectual',
    //   'Emotional',
    //   'Social',
    //   'Spiritual'
    // ],
    datasets: [{
      // label: 'Amount',
      data: data,
      backgroundColor: [
        COLORS.physical, COLORS.physical, COLORS.physical, COLORS.physical, COLORS.physical, COLORS.physical,
        COLORS.financial, COLORS.financial, COLORS.financial, COLORS.financial, COLORS.financial, COLORS.financial,
        COLORS.intellectual, COLORS.intellectual, COLORS.intellectual, COLORS.intellectual, COLORS.intellectual, COLORS.intellectual,
        COLORS.emotional, COLORS.emotional, COLORS.emotional, COLORS.emotional, COLORS.emotional, COLORS.emotional,
        COLORS.social, COLORS.social, COLORS.social, COLORS.social, COLORS.social, COLORS.social,
        COLORS.spiritual, COLORS.spiritual, COLORS.spiritual, COLORS.spiritual, COLORS.spiritual, COLORS.spiritual
      ],
      borderWidth: 0
    }]
  }
});

console.log("Loaded app.js");
