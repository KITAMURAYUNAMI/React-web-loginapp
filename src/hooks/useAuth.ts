import { useCallback, useState } from "react";
import axios from "axios";
import { User } from "../types/api/user";
import { useNavigate } from "react-router-dom";
import { useMessage } from "./useMessage";
import { useLoginUser } from "../hooks/userLoginUser";

export const useAuth = () => {
  const navigate = useNavigate();
  const { showMessage } = useMessage();
  const [loading, setloading] = useState(false); //ローディング画面の作成,logingの値がtrueの時にロードの文字を出す
  const { setloginuser } = useLoginUser();
  const login = useCallback((id: string) => {
    setloading(true);

    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          const isAdmin = res.data.id === 10 ? true : false;
          setloginuser({ ...res.data, isAdmin });
          showMessage({ title: "ログインに成功", status: "success" });
          navigate("/home");
        } else {
          showMessage({
            title: "ユーザが見つかりませんでした",
            status: "error"
          });
        }
      })
      .catch(() => showMessage({ title: "ログインに失敗", status: "error" }))
      .finally(() => setloading(false));
  }, []);
  return { login, loading };
};
