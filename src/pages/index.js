import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/hero");
  // console.log(res.data.heros);
  return {
    props: { heros: res.data.heros },
  };
};
const index = ({ heros }) => {
  const router = useRouter();
  console.log(heros);
  return (
    <div>
      <div>
        {heros.map((i) => (
          <div onClick={() => router.push(`/${i._id}`)} key={i._id}>
            <h2>{i.superHero}</h2>
          </div>
        ))}
      </div>
      <button onClick={() => router.push("/add")}>add</button>
    </div>
  );
};

export default index;
