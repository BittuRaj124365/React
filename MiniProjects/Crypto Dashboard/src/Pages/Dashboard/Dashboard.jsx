import React from "react";
import Sidenav from "../../Component/Sidenav";
import Topnav from "../../Component/Topnav";
import { Box, Flex } from "@chakra-ui/react";
const Dashboard = () => {
  return (
    <>
    <Flex> 
      <Sidenav />
      <Box flexGrow={1}>
        {/* <Topnav/>  */}
      </Box>
    </Flex>
    </>
  );
};
export default Dashboard;
