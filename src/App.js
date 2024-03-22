import { Divider, Grid, Stack, Typography } from "@mui/material";
import "./App.css";
import { useSelector } from "react-redux";
import Bot from "./components/bot";
import Completed from "./components/completed";
import Customer from "./components/customer";
import Manager from "./components/manager";
import Order from "./components/order";

const managerList = [
  {
    name: "manager 1",
  },
];

const customerList = [
  {
    name: "Customer 1",
    lvl: "NORMAL",
  },
  {
    name: "Customer 2",
    lvl: "VIP",
  },
];

function App() {
  const orderList = useSelector((state) => state.order);
  const botList = useSelector((state) => state.bot);
  const completedList = useSelector((state) => state.completed);

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      style={{ padding: "5px 10px" }}
    >
      <Stack direction={"column"} spacing={{ xs: 1, sm: 2, md: 2 }}>
        <Typography variant="h4" textAlign={"center"}>
          User
        </Typography>

        {managerList?.map((manager, index) => (
          <Manager key={index} manager={manager} />
        ))}

        <Divider variant="middle" />

        {customerList?.map((customer, index) => (
          <Customer key={index} customer={customer} />
        ))}
      </Stack>

      <Divider flexItem orientation="vertical" />

      <Stack
        direction={"column"}
        spacing={{ xs: 1, sm: 2 }}
        style={{ minWidth: 280 }}
      >
        <Typography variant="h4" textAlign={"center"}>
          Cooking Bot
        </Typography>

        {botList?.map((bot, index) => (
          <Bot key={index} bot={bot} />
        ))}
      </Stack>

      <Divider flexItem orientation="vertical" />

      <Grid container>
        <Grid item sm={5}>
          <Typography variant="h4" textAlign={"center"}>
            Pending Order
          </Typography>

          <Grid
            container
            spacing={2}
            style={{
              height: "fit-content",
            }}
          >
            {orderList?.map((order, index) => (
              <Grid key={index} item xs={12} xl={6}>
                <Order key={index} order={order} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item sm={1} style={{ display: "contents" }}>
          <Divider
            flexItem
            variant="middle"
            orientation="vertical"
            style={{ marginRight: 32 }}
          />
        </Grid>

        <Grid item sm={5}>
          <Typography variant="h4" textAlign={"center"}>
            Completed Order
          </Typography>

          <Grid
            container
            spacing={2}
            style={{
              height: "fit-content",
            }}
          >
            {completedList.map((order, index) => (
              <Grid key={index} item xs={12} xl={6}>
                <Completed key={index} completed={order} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default App;
