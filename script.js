const svgBox = document.getElementById('svg-container');
console.log(svgBox, 'script is loaded');
const input = document.getElementById('input');
const svginput = document.getElementById("svg-input");
const svginput2 = document.getElementById("svg-input2")
shape = document.getElementsByTagName("svg")[0];
//setting initial shape of svg
// shape.setAttribute("viewBox", "0 0 1370px 1170px");
/////functions
let height = 1170;
let width= 1370;
const setSvgHeight = (e) => {
  // console.log(e.target.value);
  height = e.target.value
  shape.setAttribute("viewBox", `0 0 ${width} ${height}`);

};
const setSvgWidth = (e) => {
  console.log(e.target.value);
  width = e.target.value
  shape.setAttribute("viewBox", `0 0 ${width} ${height}`);


};

////setting height of svg
svginput.addEventListener("input", (e) => setSvgHeight(e));
svginput2.addEventListener("input", (e) => setSvgWidth(e));