import { useState } from "react";
import {
  ChartContainer,
  Button,
  ButtonContainer,
  ChartMainContainer,
} from "../styles/index";

import { Line } from "react-chartjs-2";
import sourceData from "../data/sourceData";

import zoomPlugin from "chartjs-plugin-zoom";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  zoomPlugin,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  CategoryScale,
  Legend
);

const Charts = () => {
  const [data, setData] = useState(sourceData);

  const onChangeDay = () => {
    setData(data.slice(0, 1));
    console.log(data);
  };
  const onChangeWeekly = () => {
    setData(data.slice(0, 7));

    console.log(data);
  };
  const onChangeMonthly = () => {
    setData(data.slice(0, 30));

    console.log(data);
  };

  return (
    <>
      <ChartContainer>
        <ChartMainContainer>
          <Line
            data={{
              labels: data.map((each) => each.timestamp),
              datasets: [
                {
                  label: "time Stamps",
                  data: data.map((each) => each.value),
                  backgroundColor: "#58D68D",
                  borderColor: "#3498DB",
                  tension: 0.6,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                zoom: {
                  pan: {
                    enabled: true,
                    mode: "xy",
                    speed: 0.1,
                  },
                  zoom: {
                    wheel: {
                      enabled: true,
                    },
                    pinch: {
                      enabled: true,
                    },
                    mode: "xy",
                  },
                },
              },
            }}
          />
        </ChartMainContainer>
        <ButtonContainer>
          <Button onClick={onChangeMonthly}>Monthly</Button>
          <Button onClick={onChangeWeekly}>Weekly</Button>
          <Button onClick={onChangeDay}>Daily</Button>
        </ButtonContainer>
      </ChartContainer>
    </>
  );
};

export default Charts;
