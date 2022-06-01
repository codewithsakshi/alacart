import { products } from "../products";
import CardItem from "./CardItem";
import { Grid } from "@nextui-org/react";
import { useState } from "react";

export function Cards() {
  const [productsData, setProductdata] = useState(products);
   
  const filteredProductData = (text) => {
   const filteredData = productsData.filter((product) => product.name.toLowerCase.includes(text.toLowerCase))
   setProductdata(filteredData)
  }

  return (
    <Grid.Container gap={2} justify="flex-start">
      {productsData.map((item) => {
        return (
          <CardItem
            key={item.id}
            name={item.productName}
            price={item.Price}
            imgurl={item.imgUrl}
            id={item.id}
            filteredProductData={filteredProductData}
          />
        );
      })}
    </Grid.Container>
  );
}
