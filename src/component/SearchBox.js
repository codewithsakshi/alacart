import React from "react";
import { Input, Spacer } from "@nextui-org/react";

export const SearchBox = () => {
  return (
    <div style={{width: '50%', margin: 'auto', marginBottom: '40px'}}>
      <Input size="lg" fullWidth placeholder="search fruits" disabled />
    </div>
  );
};
