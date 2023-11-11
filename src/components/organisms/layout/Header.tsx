import { memo, FC, useCallback } from "react";
import { Flex, Heading, Link, Box, useDisclosure } from "@chakra-ui/react";
import { MenuIconBtn } from "../../atoms/button/MemuIconbtn";
import { MenuDrawer } from "../../molecules/MenuDrawer";
import { useNavigate } from "react-router-dom";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const onClickSetting = useCallback(() => navigate("/home/setting"), []);

  const onClickUserMnagement = useCallback(
    () => navigate("/home/UserMnagement"),
    []
  );
  const onClickHome = useCallback(() => navigate("/home"), []); //stateで関数を渡すときにはcallbackを使って再レンダリング対策
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
        color="gray.50"
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickUserMnagement}>ユーザー一覧</Link>
          </Box>
          <Link onClick={onClickSetting}>設定</Link>
        </Flex>

        <MenuIconBtn onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickSetting={onClickSetting}
        onClickUserMnagement={onClickUserMnagement}
        onClickHome={onClickHome}
      />
    </>
  );
});
