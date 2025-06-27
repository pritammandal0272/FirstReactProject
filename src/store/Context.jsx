import { act, createContext, useReducer, useRef } from "react";
export const ContextAPI = createContext();
const ReducerFunction = (state, action) => {
  let UpdateState = state;
  if (action.type === "ADD") {
    if (
      action.payload.url != "" &&
      action.payload.title != "" &&
      action.payload.body != "" &&
      action.payload.tags != ""
    ) {
      UpdateState = [
        {
          url: action.payload.url,
          views: 0,
          title: action.payload.title,
          reactions: { likes: 0, dislikes: 0 },
          tags: action.payload.tags,
          body: action.payload.body
        },...UpdateState
      ];
    }
  } else if (action.type === "FETCH_VALUE") {
    UpdateState = [...UpdateState,action.payload.join];
    console.log(UpdateState);
    
  } else if (action.type === "DELETE") {
    UpdateState = UpdateState.filter(
      (e) => UpdateState.indexOf(e) != action.payload.Index
    );
  }
  return UpdateState.flat();
};
export const ContextAPIProvider = ({ children }) => {
  const [StateReducer, DispatchReducer] = useReducer(ReducerFunction, []);
  const NameInput = useRef();
  const ImageInput = useRef();
  const TitleInput = useRef();
  const TagesInput = useRef();
  const PostContentInput = useRef();
  const DescriptionInput = useRef();

  const addPost = () => {
    event.preventDefault;
    const AddPost = {
      type: "ADD",
      payload: {
        url: ImageInput.current,
        views: 0,
        title: TitleInput.current.value,
        reactions: { likes: 0, dislikes: 0 },
        tags: TagesInput.current.value.split(" "),
        body: PostContentInput.current.value,
      },
    };
    DispatchReducer(AddPost);
  };

  const DeletePost = (Index) => {
    const DeletePostElement = {
      type: "DELETE",
      payload: {
        Index,
      },
    };
    DispatchReducer(DeletePostElement);
  };

  const DefaltFetchPost = (DataApi, ImageApi) => {
    for (let i = 0; i < DataApi.posts.length; i++) {
      DataApi.posts[i].url = ImageApi[i].download_url;
    }
    const DefaltFetch = {
      type: "FETCH_VALUE",
      payload: {
        join: DataApi.posts,
      },
    };
    console.log(DataApi.posts);

    DispatchReducer(DefaltFetch);
    console.log(DataApi.posts);
  };
  const PhotoApi = (Data) => {
    // console.log(Data);
  };
  return (
    <>
      <ContextAPI.Provider
        value={{
          NameInput,
          ImageInput,
          TitleInput,
          TagesInput,
          PostContentInput,
          addPost,
          StateReducer,
          DeletePost,
          DefaltFetchPost,
          PhotoApi,
          DescriptionInput
        }}
      >
        {children}
      </ContextAPI.Provider>
    </>
  );
};
// const DefaultValue = [
//   {
//     Name: "Madhab Mandal",
//     Image: "src/assets/a.png",
//     Title: "This is my First React Project..",
//     PostContent: "I am Pritam Mandal",
//     Description: "This is Descrription",
//     Tages: ["#jio", "#Vi"],
//   },
//   {
//     Name: "Madhab Mandal",
//     Image: "src/assets/a.png",
//     Title: "This is my First React Project..",
//     PostContent: "I am Pritam Mandal",
//     Description: "This is Descrription",
//     Tages: ["#jio", "#Vi"],
//   },
//   {
//     Name: "Madhab Mandal",
//     Image: "src/assets/a.png",
//     Title: "This is my First React Project..",
//     PostContent: "I am Pritam Mandal",
//     Description: "This is Descrription",
//     Tages: ["#jio", "#Vi"],
//   },
// ];
