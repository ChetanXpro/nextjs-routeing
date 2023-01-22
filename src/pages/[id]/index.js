import axios from "axios";
import Router, { useRouter } from "next/router";
import React from "react";

export const getServerSideProps = async ({ params }) => {
  const id = params.id;

  const res = await axios.get(`http://localhost:3000/api/hero/${id}`);
  console.log(res.data);
  return {
    props: { heros: res.data.heros },
  };
};
const index = ({ heros }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:3000/api/hero/${id}`);
    console.log(res.data);

    router.push("/");
  };
  return (
    <div>
      {heros.superHero}
      <button onClick={()=>handleDelete(heros._id)}>Delete this shit</button>
    </div>
  );
};

export default index;
