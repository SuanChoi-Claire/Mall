import { useParams } from "react-router-dom";
import ModifyComponent from "./ModifyComponent";

const ModifyPage = () => {
  const { tno } = useParams();
  return (
    <div className="p-4 w-full bg-white">
      <div className="text-3xl font-extrabold">Todo Modify Page</div>
      <ModifyComponent tno={tno} />
    </div>
  );
};

export default ModifyPage;

// 초반에 사용했던 페이지이동
// import { useNavigate } from "react-router-dom";

// const ModifyPage = ({ tno }) => {
//   const navigate = useNavigate();
//   const moveToRead = () => {
//     navigate({ pathname: `/todo/read/${tno}` });
//   };
//   const moveToList = () => {
//     navigate({ pathname: `/todo/list` });
//   };

//   return <div className="text-3xl font-extrabold">Todo Modify Page</div>;
// };

// export default ModifyPage;
