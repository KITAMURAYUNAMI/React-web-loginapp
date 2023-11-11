import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType
} from "../providers/LoginUserProvider";

export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);
//本来は各ページでuseContextをしてそれに型指定をするという流れをしなければならないが、ここでその二つの作業を一回にまとめている
//useContextとはグローバルなstateを使いますよという宣言
