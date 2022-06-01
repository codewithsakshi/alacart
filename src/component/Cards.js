import {connect} from 'react-redux'
import CardItem from "./CardItem";
import { Grid } from "@nextui-org/react";

const Cards = ({products}) => {
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

const mapStateToProps = (state) => ({
  products: state.products
})

export default connect(mapStateToProps)(Cards)
