import { Button } from "@chakra-ui/react";
import { FC, memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  isDisabled?: boolean;
  loading?: boolean;
  onClick: () => void;
};

export const PrimaryBtn: FC<Props> = memo((props) => {
  const { children, onClick, isDisabled = false, loading = false } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      isLoading={loading}
      isDisabled={isDisabled || loading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
});
//isDisabedがtureの時のloadingの時にはボタンが押せない
