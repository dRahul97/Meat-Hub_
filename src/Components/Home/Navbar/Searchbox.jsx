import React from "react";
import { Stack, InputRightElement, InputGroup, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Searchbox = () => {
  return (
    <div>
      {/* <Input placeholder="Search for any deleicious product" w={300} h={9} icon={ } />

      <IconButton
        aria-label="Search database"
        icon={<SearchIcon />}
        size="sm"
      /> */}
      <Stack>
        <InputGroup>
          <Input
            w={380}
            placeholder="Search for any deleicious product"
            pb={1}
          />
          <InputRightElement children={<SearchIcon color="red.500" />} />
        </InputGroup>
      </Stack>
    </div>
  );
};

export default Searchbox;
