import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Footer } from "./components/Footer";
import "./components/style.css";
import { Form } from "./components/Form";
import { Post } from "./components/Card";
import { Loader } from "./components/Loader";
import { ContextAPIProvider } from "./store/Context";
import DashBoard from "./components/DashBoard";
import NoPost from "./components/NoPost";
const App = () => {
  const [selectOption, setselectOption] = useState("Dashboard");
  const OnetineFetch = useRef(true);
  // const Loader = useRef(true);
  const [loader, setloader] = useState(true);
  return (
    <>
      {loader && selectOption ===  "Home" ? <Loader /> :null}
      <Navbar />
      <Sidebar setselectOption={setselectOption} selectOption={selectOption} />

      <div className="BodyPart md:ml-[16%] pt-[6em]">
        <ContextAPIProvider>
          {selectOption === "Dashboard" ? <DashBoard setselectOption = {setselectOption} /> : null}
          {selectOption === "Create Post" ? <Form setselectOption = {setselectOption}/> : null}
          {selectOption === "Home" ? (
            <div className="PostMain">
              {loader && selectOption ===  "Home" ?  <NoPost /> :null}
              <Post
                selectOption={selectOption}
                OnetineFetch={OnetineFetch}
                setloader={setloader}
                loader = {loader}
              />
            </div>
          ) : null}
        </ContextAPIProvider>

        <Footer />
      </div>
    </>
  );
};

export default App;
