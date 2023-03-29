import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
interface User {
  data: {
    id: string;
    get_user: {
      first_name: string;
    };
    key: string;
  };
}

interface Props {
  onLogin: (data: User) => void;
}

const Login: React.FC<Props> = ({ onLogin }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Backend tarafında kullanıcı adı ve şifre bilgilerini kontrol etmek için istek atabilirsiniz
    try {
      debugger;
      const response = await axios.post(
        `https://app.tripy.mobi/api/auth/login-with-password?email=${username}&password=${password}&app=Management&lat=39.939467218170364&lon=32.824049948033284`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const user: User = {
        data: response.data,
      };
      onLogin(user);
      toast.success(`Hoşgeldin ${user.data.get_user.first_name}`);
    } catch (error) {
      // Hata durumlarını ele almak için uygun bir şekilde işleme koyabilirsiniz
      debugger;
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Giriş Yap</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Kullanıcı Adı:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Şifre:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default Login;
