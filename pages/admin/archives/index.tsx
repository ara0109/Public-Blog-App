import { useState } from "react";
import Admin from "..";
import Archives from "../../../admin/archives";


const Page = () => {
  return (
    <Admin page={<Archives />} />
  );
};

export default Page;
