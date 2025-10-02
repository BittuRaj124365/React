import { Box, Text, Heading, Stack, HStack, Icon } from "@chakra-ui/react";
import { MdDashboard } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
export default function Sidenav() {
  const navLinks = [
    {
      icon: MdDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transaction",
      link: "/transaction",
    },
  ];
  return (
    <>
      <Stack
        justify="space-between"
        boxShadow="lg"
        maxW="13rem"
        h="100vh"
        bg="azure"
        borderRadius="10px"
      >
        <Box>
          <Heading
            as="h1"
            size="4xl"
            fontSize="25px"
            textAlign="center"
            margin="2px"
          >
            Crypto Dashboard
          </Heading>
          <Box mt="4" mx="1">
            {navLinks.map((nav) => (
              <HStack
                marginLeft="3"
                py="3"
                px="4"
                borderRadius={5}
                key={nav.text}
                _hover={{
                  bg: "#f3f3f7",
                  color: "#171717",
                }}
                color={"#797e82"}
              >
                <Icon as={nav.icon} />
                <Text fontSize="15px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            ))}
          </Box>

          <Box mt="4" mx="1" mb="6">
            <HStack
              marginLeft="3"
              py="3"
              px="4"
              borderRadius={5}
              _hover={{
                bg: "#f3f3f7",
                color: "#171717",
              }}
              color={"#797e82"}
            >
              <Icon as={BiSupport} />
              <Text fontSize="15px" fontWeight="medium">
                Support
              </Text>
            </HStack>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
