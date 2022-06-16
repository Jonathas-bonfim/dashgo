import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      {showProfileData &&
        <Box mr="4" textAlign="right">
          <Text>Jônathas Bonfim</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            jonathas.bonfim@gmail.com
          </Text>
        </Box>
      }
      <Avatar size="md" name="Jônathas Bonfim" src="https://avatars.githubusercontent.com/u/58302084?v=4" />
    </Flex>
  );
}