import React from "react";
import { Flex, Icon, Button, Text, Box } from "../../components";

export default (props) => (
  <Button variant="invisible" onClick={props.onClick}>
    <Flex alignItems="center" justifyContent="flex-start">
      <Box width="32px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31">
          <title>i-additional-big</title>
          <rect
            x="0.65"
            y="0.65"
            width="29.7"
            height="29.7"
            rx="7.35"
            fill="#fff"
          />
          <path
            d="M23.38,31.33h-15a8,8,0,0,1-8-8v-15a8,8,0,0,1,8-8h15a8,8,0,0,1,8,8v15A8,8,0,0,1,23.38,31.33Zm-15-29.7a6.71,6.71,0,0,0-6.7,6.7v15A6.71,6.71,0,0,0,8.38,30h15a6.71,6.71,0,0,0,6.7-6.7v-15a6.7,6.7,0,0,0-6.7-6.7Z"
            transform="translate(-0.38 -0.33)"
            fill="#204ef0"
          />
          <path
            d="M23.38,15.18H17.45a.92.92,0,0,1-.92-.92V8.33h-1.3v5.93a.92.92,0,0,1-.92.92H8.38v1.3h5.93a.92.92,0,0,1,.92.92v5.93h1.3V17.4a.92.92,0,0,1,.92-.92h5.93Z"
            transform="translate(-0.38 -0.33)"
            fill="#204ef0"
          />
        </svg>
      </Box>
      <Box width="120px" p={1}>
        <Text color="primary">New Output</Text>
      </Box>
    </Flex>
  </Button>
);
