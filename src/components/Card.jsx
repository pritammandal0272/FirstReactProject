import { useContext, useRef, useState } from "react";
import { ContextAPI } from "../store/Context";

export const Post = ({ selectOption, OnetineFetch,setloader,loader }) => {
  const [deleteDot, setdeleteDot] = useState(false);
  const Flag = useRef(true);
  const Index = useRef();
  const { StateReducer, DeletePost, DefaltFetchPost, PhotoApi } =
    useContext(ContextAPI);
  let FecthingData = () => {
    Promise.all([
      fetch("https://dummyjson.com/posts?limit=100"),
      fetch("https://picsum.photos/v2/list?limit=100"),
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([Data1, Data2]) => {
        DefaltFetchPost(Data1, Data2);
        setloader(false)
      });
  };
  if (selectOption === "Home" && OnetineFetch.current) {
    FecthingData();
    OnetineFetch.current = false;
  }

  return (
    <>
      {StateReducer.map((ArrayItems) => {
        return (
          <div key={ArrayItems.id} className={`max-w-sm m-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 ${loader ?"hidden":null}`}>
            <a href="#" className="relative">
              <img className="rounded-t-lg" src={ArrayItems.url} alt="" />
              <svg
                className="w-5 h-5 absolute top-2 left-[90%] text-red-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
                onClick={() => {
                  if (Flag.current) {
                    setdeleteDot(true);
                    Flag.current = false;
                    Index.current = StateReducer.indexOf(ArrayItems);
                  } else {
                    setdeleteDot(false);
                    Flag.current = true;
                  }
                }}
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdown"
                className={`absolute top-8 left-[80%] z-10 text-base w-[17%] list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 ${
                  deleteDot && Index.current == StateReducer.indexOf(ArrayItems)
                    ? "visible"
                    : "hidden"
                }`}
              >
                <ul className="py-0 w-fit">
                  <li>
                    <div
                      className="px-2 py-2 w-4 text-red-600"
                      onClick={() => {
                        return DeletePost(StateReducer.indexOf(ArrayItems));
                      }}
                    >
                      Delete
                    </div>
                  </li>
                </ul>
              </div>
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {ArrayItems.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {ArrayItems.body}
              </p>
              <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex gap-10">
                <div>
                  <h3 className="text-orange-500">Likes</h3>
                  <p> {ArrayItems.reactions.likes}</p>
                </div>
                <div>
                  <h3 className="text-orange-500">DisLikes</h3>
                  <p> {ArrayItems.reactions.dislikes}</p>
                </div>
                <div>
                  <h3 className="text-orange-500">Views</h3>
                  <p> {ArrayItems.views}</p>
                </div>
              </div>
              <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <h3 className="text-orange-500 mb-2">Tages</h3>
                <div className="flex gap-1 flex-wrap">
                  {ArrayItems.tags.map((items) => {
                    return (
                      <span key={items}
                        id="badge-dismiss-default"
                        className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100 rounded-sm dark:bg-blue-900 dark:text-blue-300"
                      >
                        {items}
                        <button
                          type="button"
                          className="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-xs hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
                          data-dismiss-target="#badge-dismiss-default"
                          aria-label="Remove"
                        >
                          <svg
                            className="w-2 h-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                          </svg>
                          <span className="sr-only">Remove badge</span>
                        </button>
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
