// https://www.omnicalculator.com/conversion/cm-to-m

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const mRadio = document.getElementById('mRadio');
const cmRadio = document.getElementById('cmRadio');

let m;
let cm = v; 

// labels of the inpust
const variable = document.getElementById('variable');

mRadio.addEventListener('click', function() {
  variable.textContent = 'cm';
  cm = v;
  result.textContent = '';
});

cmRadio.addEventListener('click', function() {
  variable.textContent = 'm';
  m = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(mRadio.checked)
    result.textContent = `m = ${computem().toFixed(5)}`;

  else if(cmRadio.checked)
    result.textContent = `cm = ${computecm().toFixed(5)}`;
})

// calculation

function computem() {
  return Number(cm.value) / 100;
}

function computecm() {
  return Number(m.value) * 100;
}