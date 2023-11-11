import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";
import { User } from "../types/api/user";
type Loginuser = User & { isAdmin: boolean };

export type LoginUserContextType = {
  loginuser: Loginuser | null;
  setloginuser: Dispatch<SetStateAction<Loginuser | null>>;
};

export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [loginuser, setloginuser] = useState<Loginuser | null>(null);
  return (
    <LoginUserContext.Provider value={{ loginuser, setloginuser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
//ここでは全部のページからloginuser, setloginuserを参照できるようにしている
