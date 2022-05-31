import { products } from "../products";
import CardItem from "./CardItem";
import { Grid } from "@nextui-org/react";

export function Cards() {
  return (
    <Grid.Container gap={2} justify="flex-start">
      {products.map((item) => {
        return (
          <CardItem
            key={item.id}
            name={item.productName}
            price={item.Price}
            imgurl={item.imgUrl}
            id={item.id}
          />
        );
      })}
    </Grid.Container>
  );
}
