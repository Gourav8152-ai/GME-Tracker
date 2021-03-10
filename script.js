fetch("https://www.alphavantage.co/query?function=OVERVIEW&symbol=GME&apikey=2FBPQENDR7N511Z2")
.then((resp) => resp.json())
.then(function(data)  {
    console.log(data)
  if(typeof data.Description !== "undefined") {
        document.getElementById("company-description").innerHTML = data.Description;
        document.getElementById("Employees-count").innerHTML = data.FullTimeEmployees;
    document.getElementById("Gross-Profit").innerHTML = data.GrossProfitTTM;
    document.getElementById("Shares-float").innerHTML = data.SharesFloat;
    document.getElementById("Revenue-per-share").innerHTML = data.RevenuePerShareTTM;
  }else {
    document.getElementById("company-description").innerHTML = "API IS GOING ROUND N ROUND HAHA 😂!!"
    document.getElementById("Employees-count").innerHTML = "RUKO ZARA SABAR KARO"
  }
})

fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=GME&apikey=2FBPQENDR7N511Z2")
.then((resp) => resp.json())
.then(function(data)  {
    console.table(data['Time Series (Daily)'])
  // let dato = []
  // dato = data['Time Series (Daily)']
  // let len = dato.length 
  let close = []
  let open = []
  let date = []
  for(var item in data['Time Series (Daily)']){
    date.push(data[item])
    open.push(data['Time Series (Daily)'][item]["1. open"])
    close.push(data['Time Series (Daily)'][item]["4. close"])
  }
    console.log(date)
    console.log(open)
    console.log(close)
    
  var ctx = document.getElementById('stock-tracker');
  var data = {
    labels: date,
    datasets: [{
          label: "Opening Stock",
          fill: false,
          lineTension: 0.1,
          // backgroundColor: "rgba(225,0,0,0.4)",
          borderColor: "#7ed6df", // The main line color
          borderCapStyle: 'square',
          borderDash: [], // try [5, 15] for instance
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "black",
          pointBackgroundColor: "white",
          pointBorderWidth: 0.5,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: "black",
          pointHoverBorderColor: "white",
          pointHoverBorderWidth: 1,
          pointRadius: 2,
          pointHitRadius: 5,
          // notice the gap in the data and the spanGaps: true
          data: open,
          spanGaps: true,
        }, {
          label: "Closing Stock",
          fill: false,
          lineTension: 0.1,
          // backgroundColor: "rgba(225,0,0,0.4)",
          borderColor: "#ff7675", // The main line color
          borderCapStyle: 'square',
          borderDash: [], // try [5, 15] for instance
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "black",
          pointBackgroundColor: "white",
          pointBorderWidth: 0.5,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: "black",
          pointHoverBorderColor: "white",
          pointHoverBorderWidth: 1,
          pointRadius: 2,
          pointHitRadius: 5,
          // notice the gap in the data and the spanGaps: false
          data: close,
          spanGaps: true,
        }

      ]
    };
          var myChart = new Chart(ctx, {
              type: 'line',
              data: data,
              options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero: true
                          }
                      }]
                  }
              }
          });
})
 
