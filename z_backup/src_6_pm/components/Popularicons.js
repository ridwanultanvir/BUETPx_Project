import { ReactComponent as Search } from "../assets/icons/search.svg";

const Ssearch = ({ clas, onClick }) => (
    <div className={clas} onClick={onClick}>
      <Search />
    </div>
  );

  export {

    Ssearch,
 
  };