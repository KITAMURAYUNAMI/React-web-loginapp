import { memo, FC, useState, ChangeEvent } from "react";
import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { PrimaryBtn } from "../atoms/button/PrimaryBtn";
import { useAuth } from "../../hooks/useAuth";

export const Login: FC = memo(() => {
  const { login, loading } = useAuth();

  const [userId, setuserId] = useState("");
  const onchangeuserId = (e: ChangeEvent<HTMLInputElement>) =>
    setuserId(e.target.value);
  const onClicklogin = () => login(userId);
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={3} py={3} px={10}>
          <Input
            placeholder="ユーザーID"
            value={userId}
            onChange={onchangeuserId}
          />
          <PrimaryBtn
            isDisabled={userId === ""} //入力欄が空の時打てなくなる
            loading={loading}
            onClick={onClicklogin}
          >
            ログイン
          </PrimaryBtn>
        </Stack>
      </Box>
    </Flex>
  );
});

//Dividerでカードぽくできる
//Stackで中の要素の幅を等間隔に配置できる
