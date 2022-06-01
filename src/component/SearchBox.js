import React from "react";
import { connect } from "react-redux";
import { Input, Spacer } from "@nextui-org/react";
import {ACTIONS} from '../action'

const SearchBox = ({handleSearch}) => {
  const handleChange =  (e) => {
    console.log("search text:: ", e.target.value)
    handleSearch(e.target.value)
  }
  return (
    <div style={{width: '50%', margin: 'auto', marginBottom: '40px'}}>
      <Input size="lg" fullWidth placeholder="search fruits" onChange={handleChange}/>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
handleSearch: (searchText) => dispatch({
type: ACTIONS.SEARCH_PRODUCT,
payload: {
  searchText
}
})
})

export default connect(null, mapDispatchToProps)(SearchBox)