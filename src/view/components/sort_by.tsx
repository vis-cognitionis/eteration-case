import React, { useState } from "react";
import { FormControlLabel } from "@mui/material";

import CustomContainer from "core/components/containers/container";
import RadioButton from "core/components/buttons/radio_button";
import Text from "core/components/typography/typography";

const items = [
  { name: "Old to new" },
  { name: "New to old" },
  { name: "Price hight to low" },
  { name: "Price low to high" },
];

const SortBy = () => {
  const [selectedItem, setSelectedItem] = useState<string>(items[0].name);

  return (
    <CustomContainer sx={{ marginTop: "14px" }} content="Sort By">
      {items.map((item) => {
        return (
          <FormControlLabel
            key={item.name}
            sx={{ marginLeft: 0 }}
            control={
              <RadioButton
                disableRipple
                checked={item.name === selectedItem}
                onClick={() => setSelectedItem(item.name)}
                defaultChecked
              />
            }
            label={
              <Text
                sx={{ paddingLeft: "8px" }}
                variant="body2"
                content={item.name}
              />
            }
          />
        );
      })}
    </CustomContainer>
  );
};
export default SortBy;
