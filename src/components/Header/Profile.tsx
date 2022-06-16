import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex
      align="center"
    >
      <Box mr="4" textAlign="right">
        <Text>Jônathas Bonfim</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          jonathas.santos.bonfim@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Jônathas Bonfim" src="https://avatars.githubusercontent.com/u/58302084?v=4" />
    </Flex>
  );
}