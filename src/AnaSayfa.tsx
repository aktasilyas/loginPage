import React from "react";
import { Link } from "react-router-dom";
interface Props {
  onLogout: () => void;
}

const AnaSayfa: React.FC<Props> = ({ onLogout }) => {
  debugger;
  return (
    <div>
      <h2>Hoşgeldiniz!</h2>
      <button onClick={onLogout}>Çıkış Yap</button>
      <p>
        <Link to="/about">Hakkımızda</Link> sayfasına gitmek için tıklayın.
      </p>
    </div>
  );
};

export default AnaSayfa;
