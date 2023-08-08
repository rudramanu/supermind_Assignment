import React from "react";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const Create = () => {
  const onsubmitHandler = () => {};
  return (
    <div>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input placeholder="Enter name" onClick={() => onsubmitHandler}></Input>
      </FormControl>
    </div>
  );
};

export default Create;
