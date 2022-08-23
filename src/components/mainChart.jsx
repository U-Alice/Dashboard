import { Line } from "react-chartjs-2";
import 'chart.js'
// import Chart from "chart.js/auto"
import Chart from "chart.js/auto"
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Users",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "transparent",
    
      borderColor: "rgba(75,192,192,1)",
      tension:0.4
    },
    {
      label: "Projects",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#40d59e",
      tension:0.4
    }
  ]
};

export default function MainChart() {
  return (
    <div className="App">
      <Line data={data}/>
    </div>
  );
}