import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProviders";

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
};

export const EditButton = () => {
  const { isAdmin } = useContext(AdminFlagContext);
  console.log(useContext(AdminFlagContext));

  return (
    <button style={style} disabled={!isAdmin}>
      수정
    </button>
  );
};
