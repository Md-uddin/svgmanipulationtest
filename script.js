const svgBox = document.getElementById('svg-container');
console.log(svgBox, 'script is loaded');
let height = 400;
const input = document.getElementById('input');
console.log(input)
const setHeight = 
  (e) => {
    if (e.target.value > 100) {
      if (e.target.value > 1500) {
        return alert("please enter a value below 1500px")
      }
      height = e.target.value;
      svgBox.style.height = `${ height }px`;
    } else {
      alert('Please Enter a value above 100px')
    }
  
  }
///adding event listener to input
input.addEventListener("change",(e)=>setHeight(e))