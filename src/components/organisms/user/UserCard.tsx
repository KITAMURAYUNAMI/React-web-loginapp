import { Box, Stack, Image, Text } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";

type Props = {
  id: number;
  imageUrl: string;
  name: string;
  fullname: string;
  onClick: (id: number) => void;
};

export const UserCard: FC<Props> = memo((props) => {
  const { id, imageUrl, name, fullname, onClick } = props;
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onClick(id)}
    >
      <Stack textAlign="center">
        <Image
          borderRadius="full"
          src={imageUrl}
          boxSize="160px"
          alt={name}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" color="gray">
          {fullname}
        </Text>
      </Stack>
    </Box>
  );
});
