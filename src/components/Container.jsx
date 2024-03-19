import principal from "../App.module.css";
import Aside from "./Aside";
import Main from "./Main";
import Right from "./Right";

const Container = () => {
  return (
    <div className={`${principal.containerBox}`}>
      <Aside />
      <Main />
      <Right />
    </div>
  );
};

export default Container;
