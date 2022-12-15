import React from "react";
import { IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Searchbox = () => {
  return (
    <div
      style={{
        border: "1px solid lightgray",
        width: "400px",
        padding: "5px 20px",
        borderRadius: "4px",
        backgroundColor: "lightgray",
      }}
    >
      <input
        style={{
          backgroundColor: "lightgray",
          paddingRight: "145px",
        }}
        type="text"
        placeholder="Search for any deleicious product"
      />
      <IconButton
        aria-label="Search database"
        icon={<SearchIcon />}
        size="sm"
        bg="lightgray"
      />
    </div>
  );
};

export default Searchbox;
