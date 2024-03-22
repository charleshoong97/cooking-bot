import { Typography } from "@mui/material";
import moment from "moment";
import CustomBox from "./shared/box";
import { useSelector } from "react-redux";

export default function Order({ order }) {
  //   const orderList = useSelector((state) => state.order);

  //   const currentOrder = orderList.find((o) => o.name === order.name);

  return (
    <CustomBox>
      <div style={{ position: "relative" }}>
        <Typography variant="body1">{order.name}</Typography>
        <Typography style={{ fontSize: 12 }}>
          {moment(order.createdOn).format("hh:mm:ss A")}
        </Typography>

        <div
          style={{
            visibility: order.VIP ? "visible" : "hidden",
            position: "absolute",
            top: "-6px",
            right: "-12px",
            width: 10,
            height: 10,
            backgroundColor: "yellow",
            borderRadius: 10,
          }}
        />
      </div>
    </CustomBox>
  );
}
