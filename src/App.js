import logo from "./logo.svg";
import {
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Tooltip,
  Bar,
} from "recharts";
import "./App.css";

const data = [
  { timestamp: "2023-01-01T00:00:00Z", value: 10 },
  { timestamp: "2023-01-02T00:00:00Z", value: 12 },
  { timestamp: "2023-01-03T00:00:00Z", value: 5 },
  { timestamp: "2023-02-03T00:00:00Z", value: 12 },
  { timestamp: "2023-02-04T00:00:00Z", value: 13 },
  { timestamp: "2023-03-05T00:00:00Z", value: 2 },
  { timestamp: "2023-04-06T00:00:00Z", value: 4 },
  { timestamp: "2023-04-07T00:00:00Z", value: 6 },
  { timestamp: "2023-04-08T00:00:00Z", value: 7 },
  { timestamp: "2023-05-09T00:00:00Z", value: 11 },
  { timestamp: "2023-05-010T00:00:00Z", value: 9 },
  { timestamp: "2023-06-011T00:00:00Z", value: 4 },
  { timestamp: "2023-06-012T00:00:00Z", value: 7 },
  { timestamp: "2023-06-03T00:00:00Z", value: 12 },
  { timestamp: "2023-06-04T00:00:00Z", value: 4 },
];

function App() {
  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
}

export default App;
