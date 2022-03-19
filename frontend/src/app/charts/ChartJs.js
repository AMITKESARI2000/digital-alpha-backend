import React, { Component } from 'react';
import ComponentsSidebar from '../shared/ComponentsSidebar';
import axios from 'axios';
import {Line, Bar, HorizontalBar, Doughnut, Pie } from 'react-chartjs-2';


 const retrieve=({})=>{
        const ciks = ['0000796343','0001459417'] 

        let master_dict={}

        let search_List=[
            'EarningsPerShareBasic','SellingAndMarketingExpense'
            ]
        let Base_URL="https://data.sec.gov/api/xbrl/companyfacts/CIK"
        let data_dict={}

        for(let cik in ciks)
        {
            let URL=`${Base_URL}f${cik}.json`
            let data_json=axios.get(URL).json()
            let values=data_json['facts']['us-gaap']
            
            
            for(let item in search_List){
                data_dict[item]={}
                data_dict[item]['description']=values[item]['description']
                let cur_dict=values[item]['units']
                let cur_key=cur_dict.keys()[0]
                let cur_list=cur_dict[cur_key]
                cur_list.reverse()
                let k=0
                for(let i in cur_list){
                    if(k>2)
                        break
                    if(i['form']==="10-K"){
                        data_dict[item][k]=i['val']
                        k+=1
                    }
                }
            }      
                      
            master_dict[cik]=data_dict
        }    

        console.log(master_dict)
   }
export class ChartJs extends Component {

  barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 39, 20, 10, 25, 18],
        backgroundColor: "#560bd0",
        borderColor: "#560bd0",
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  barChartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            max: 80,
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 0.6,
          ticks: {
            beginAtZero: true,
            fontSize: 11,
          },
        },
      ],
    },
  };

  horizontalBarChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 39, 20, 10, 25, 18],
        backgroundColor: [
          "#560bd0",
          "#007bff",
          "#00cccc",
          "#cbe0e3",
          "#74de00",
          "#f10075",
        ],
        borderColor: [
          "#560bd0",
          "#007bff",
          "#00cccc",
          "#cbe0e3",
          "#74de00",
          "#f10075",
        ],
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  horizontalBarChartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 10,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 11,
            max: 80,
          },
        },
      ],
    },
  };

  horizontalBarChartData2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [12, 39, 20, 10, 25, 18],
        backgroundColor: [
          "#560bd0",
          "#007bff",
          "#74de00",
          "#f10075",
          "#74de00",
          "#f10075",
        ],
      },
      {
        data: [22, 30, 25, 30, 20, 40],
        backgroundColor: "#cad0e8",
      },
    ],
  };

  horizontalBarChartOptions2 = {
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 11,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 11,
            max: 80,
          },
        },
      ],
    },
  };

  stackedBarChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [10, 24, 20, 25, 35, 50],
        backgroundColor: "#314d83",
        borderWidth: 1,
        fill: true,
      },
      {
        data: [10, 24, 20, 25, 35, 50],
        backgroundColor: "#007bff",
        borderWidth: 1,
        fill: true,
      },
      {
        data: [20, 30, 28, 33, 45, 65],
        backgroundColor: "#cad0e8",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  stackedBarChartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
            fontSize: 11,
          },
        },
      ],
      xAxes: [
        {
          barPercentage: 0.5,
          stacked: true,
          ticks: {
            fontSize: 11,
          },
        },
      ],
    },
  };

  horizontalStackedBarChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [10, 24, 20, 25, 35, 50],
        backgroundColor: "#314d83",
        borderWidth: 1,
        fill: true,
      },
      {
        data: [10, 24, 20, 25, 35, 50],
        backgroundColor: "#007bff",
        borderWidth: 1,
        fill: true,
      },
      {
        data: [20, 30, 28, 33, 45, 65],
        backgroundColor: "#cad0e8",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  horizontalStackedBarChartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            max: 80,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
            fontSize: 11,
          },
        },
      ],
    },
  };

  lineChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
        borderColor: "#f10075",
        borderWidth: 1,
        fill: false,
      },
      {
        data: [10, 20, 25, 55, 50, 45, 35, 30, 45, 35, 55, 40],
        borderColor: "#007bff",
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  lineChartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            max: 80,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 11,
          },
        },
      ],
    },
  };

  areaChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
        borderColor: "#f10075",
        borderWidth: 1,
        backgroundColor: "rgba(241,0,117,.3)",
      },
      {
        data: [10, 20, 25, 55, 50, 45, 35, 37, 45, 35, 55, 40],
        borderColor: "#007bff",
        borderWidth: 1,
        backgroundColor: "rgba(0,123,255,.3)",
      },
    ],
  };

  areaChartOptions = {
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            max: 80,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontSize: 11,
          },
        },
      ],
    },
  };

  doughnutPieData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        data: [20, 20, 30, 5, 25],
        backgroundColor: [
          "#560bd0",
          "#007bff",
          "#00cccc",
          "#cbe0e3",
          "#74de00",
        ],
      },
    ],
  };

  doughnutPieOptions = {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  render() {
    return (
      <div>
        <button onClick={retrieve} className="btn btn-primary">
          Get Sum
        </button>
        <div className="container d-flex p-md-0">
          <ComponentsSidebar />
          <div className="az-content-body pd-lg-l-40 d-flex flex-column">
            <div className="az-content-breadcrumb">
              <span>Components</span>
              <span>Charts</span>
              <span>ChartJS Charts</span>
            </div>
            <h2 className="az-content-title">ChartJS Charts</h2>
            <div className="az-content-label mg-b-5">Bar Chart</div>
            <p className="mg-b-20">Below is the basic bar chart example.</p>
            <div className="row row-sm">
              <div className="col-sm-8 col-md-6 col-xl-4">
                <div className="ht-200 ht-lg-250">
                  <Bar
                    data={this.barChartData}
                    options={this.barChartOptions}
                  />
                </div>
              </div>
              {/* col-6 */}
            </div>
            {/* row */}
            <hr className="mg-y-30" />
            <div className="az-content-label mg-b-5">Horizontal Bar Chart</div>
            <p className="mg-b-20">
              Below is the horizontal bar chart example.
            </p>
            <div className="row row-sm">
              <div className="col-sm-8 col-md-6">
                <div className="chartjs-wrapper-demo">
                  <HorizontalBar
                    data={this.horizontalBarChartData}
                    options={this.barChartOptions}
                  />
                </div>
              </div>
              {/* col-6 */}
              <div className="col-sm-8 col-md-6 mg-t-20 mg-md-t-0">
                <div className="chartjs-wrapper-demo">
                  <HorizontalBar
                    data={this.horizontalBarChartData2}
                    options={this.horizontalBarChartOptions2}
                  />
                </div>
              </div>
              {/* col-6 */}
            </div>
            {/* row */}
            <hr className="mg-y-30" />
            <div className="az-content-label mg-b-5">Stacked Bar Chart</div>
            <p className="mg-b-20">
              Below are the vertical and horizontal bar chart example.
            </p>
            <div className="row row-sm">
              <div className="col-sm-8 col-md-6">
                <div className="chartjs-wrapper-demo">
                  <Bar
                    data={this.stackedBarChartData}
                    options={this.stackedBarChartOptions}
                  />
                </div>
              </div>
              {/* col-6 */}
              <div className="col-sm-8 col-md-6 mg-t-20 mg-md-t-0">
                <div className="chartjs-wrapper-demo">
                  <HorizontalBar
                    data={this.horizontalStackedBarChartData}
                    options={this.horizontalStackedBarChartOptions}
                  />
                </div>
              </div>
              {/* col-6 */}
            </div>
            {/* row */}
            <hr className="mg-y-30" />
            <div className="row row-sm">
              <div className="col-sm-8 col-md-6">
                <div className="az-content-label mg-b-5">Line Chart</div>
                <p className="mg-b-20">
                  Below is the basic line chart example.
                </p>
                <div className="chartjs-wrapper-demo">
                  <Line
                    data={this.lineChartData}
                    options={this.lineChartOptions}
                  />
                </div>
              </div>
              {/* col-6 */}
              <div className="col-sm-8 col-md-6 mg-t-20 mg-md-t-0">
                <div className="az-content-label mg-b-5">Area Chart</div>
                <p className="mg-b-20">
                  Below is the basic area chart example.
                </p>
                <div className="chartjs-wrapper-demo">
                  <Line
                    data={this.areaChartData}
                    options={this.areaChartOptions}
                  />
                </div>
              </div>
              {/* col-6 */}
            </div>
            {/* row */}
            <hr className="mg-y-30" />
            <div className="az-content-label mg-b-5">Pie &amp; Donut Chart</div>
            <p className="mg-b-20">
              Below are an example of data in a pie and donut chart.
            </p>
            <div className="d-md-flex">
              <div className="chartjs-wrapper-demo mg-b-20 mg-md-b-0 mg-md-r-30 mg-xl-r-40">
                <Doughnut
                  data={this.doughnutPieData}
                  options={this.doughnutPieOptions}
                />
              </div>
              <div className="chartjs-wrapper-demo">
                <Pie
                  data={this.doughnutPieData}
                  options={this.doughnutPieOptions}
                />
              </div>
            </div>
            <div className="ht-40"></div>
          </div>
          {/* az-content-body */}
        </div>
        {/* container */}
      </div>
    );
  }
}

export default ChartJs



/*
import requests

ciks=['0000796343','0001459417']


headers = requests.utils.default_headers()


headers.update(
    {
        'User-Agent': 'My User Agent 1.0',
    }
)

master_dict={}

search_List=[
    'EarningsPerShareBasic','SellingAndMarketingExpense'
    
    ]
    

Base_URL="https://data.sec.gov/api/xbrl/companyfacts/CIK"

data_dict={}

for cik in ciks:
    URL=Base_URL+f"{cik}.json"
    print(URL)
    data_json=requests.get(URL,headers=headers).json()
    values=data_json['facts']['us-gaap']
    
    
    for item in search_List:
        print(item)
        data_dict[item]={}
        data_dict[item]['description']=values[item]['description']
        cur_dict=values[item]['units']
        cur_key=list(cur_dict.keys())[0]
        cur_list=cur_dict[cur_key]
        
        k=0
        for i in reversed(cur_list):
            if(k>2):
                break
            if(i['form']=="10-K" and (int(str(i['end'])[0:4])-int(str(i['start'])[0:4])==1)):
                data_dict[item][k]=i['val']
                
                k+=1
            
              
    master_dict[cik]=data_dict
    

print(master_dict)
*/