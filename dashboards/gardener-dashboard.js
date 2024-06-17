// Bar Graph
let xValues = ["R1", "R2", "R3", "R4", "R5"];
let yValues = [55, 40, 44, 24, 50];
// var barColors = ["blue", "blue", "blue", "blue", "blue"];
let barColors = "blue";

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        legend: { display: false },
        responsive: true,
        maintainAspectRatio: false
    }
});

// Collapsed sidebar
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}