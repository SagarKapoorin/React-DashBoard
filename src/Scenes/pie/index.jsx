import { Box } from "@mui/material";
import Header from "../../Components/Header";
import PieChart from "../../Components/pieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="95vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
