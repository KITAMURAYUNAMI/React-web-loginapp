import {
  Center,
  Spinner,
  Wrap,
  WrapItem,
  useDisclosure
} from "@chakra-ui/react";
import { memo, FC, useEffect, useCallback } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllusers } from "../../hooks/useAllusers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUser } from "../../hooks/useSelectUser";
import { LoginUserContext } from "../../providers/LoginUserProvider";
import { useLoginUser } from "../../hooks/userLoginUser";

export const UserManagement: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllusers();
  const { onSelectUser, selctedUser } = useSelectUser();
  const { loginuser } = useLoginUser();

  useEffect(() => getUsers(), []); //最初の一回のみ発動
  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen]
  );
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageUrl="https://picsum.photos/800 "
                name={user.username}
                fullname={user.name}
                onClick={onClickUser}
                id={user.id}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal
        user={selctedUser}
        isOpen={isOpen}
        onClose={onClose}
        isAdmin={loginuser?.isAdmin}
      />
    </>
  );
});

//カードをクリックした際の詳細説明が出る処理をしている
