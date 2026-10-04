import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "./components/Cards";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`,
    );

    setUserData(response.data);
  };
  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printUserData = (
    <h3 className="text-gray-400 font-semibold absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2">
      loading....{" "}
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map((elem) => {
      return (
        <div key={elem.id}>
          <Cards elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="bg-black text-white overflow-auto h-screen p-4">
      <div className="flex flex-wrap gap-5 pt-3 h-[85%]">{printUserData}</div>
      <div className="flex justify-center items-center p-4 gap-5">
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className="bg-amber-400 text-black active:95 text-sm rounded cursor-pointer px-4 py-2"
        >
          Prev
        </button>
        <h3>Page {index}</h3>
        <button
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
          }}
          className="bg-amber-400 text-black active:scale-95  text-sm rounded cursor-pointer px-4 py-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
