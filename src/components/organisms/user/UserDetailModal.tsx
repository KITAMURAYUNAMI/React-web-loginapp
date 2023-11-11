import {
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Input,
  ModalFooter
} from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { User } from "../../../types/api/user";
import { PrimaryBtn } from "../../atoms/button/PrimaryBtn";

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: FC<Props> = memo((props) => {
  const { user, isOpen, onClose, isAdmin = false } = props;
  const onClickupdata = () => alert("aa");

  const [username, setusername] = useState("");
  const [name, setname] = useState("");
  const [email, setmail] = useState("");
  const [phone, setphone] = useState("");

  useEffect(() => {
    setusername(user?.username ?? "");
    setname(user?.name ?? "");
    setmail(user?.email ?? "");
    setphone(user?.phone ?? "");
  }, [user]);

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) =>
    setusername(e.target.value);
  const onChangename = (e: ChangeEvent<HTMLInputElement>) =>
    setname(e.target.value);
  const onChangeemail = (e: ChangeEvent<HTMLInputElement>) =>
    setmail(e.target.value);
  const onChangephone = (e: ChangeEvent<HTMLInputElement>) =>
    setphone(e.target.value);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom" //カードの出かたを変更できる
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>なまえ</FormLabel>
              <Input
                value={username}
                onChange={onChangeUsername}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input
                value={name}
                onChange={onChangename}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>mail</FormLabel>
              <Input
                value={email}
                onChange={onChangeemail}
                isReadOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>電話番号</FormLabel>
              <Input
                value={phone}
                onChange={onChangephone}
                isReadOnly={!isAdmin}
              />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <PrimaryBtn onClick={onClickupdata}>更新</PrimaryBtn>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
});
