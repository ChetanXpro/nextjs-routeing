import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
const index = () => {
  const router = useRouter();
  const [hero, setHero] = useState("");
  const handleSubmit = async () => {
    const data = await axios.post("http://localhost:3000/api/hero", {
      superHero: hero,
    });
    router.push("/");
    console.log(data.data);
  };

  return (
    <div>
      <input onChange={(e) => setHero(e.target.value)} type="text" />
      <button onClick={handleSubmit}>Create</button>
    </div>
  );
};

export default index;
