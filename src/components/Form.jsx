import { useContext, useState } from "react";
import { ContextAPI } from "../store/Context";
import { Sucess } from "./Sucess";

export const Form = ({setselectOption}) => {
  const {
    ImageInput,
    TitleInput,
    DescriptionInput,
    TagesInput,
    PostContentInput,
    addPost,
  } = useContext(ContextAPI);
  const [SucessBox, setSucessBox] = useState();
  return (
    <>
      <Sucess SucessBox={SucessBox} setSucessBox={setSucessBox} setselectOption = {setselectOption} />
      <form class="max-w-lg border-4 border-sky-300 p-4 bg-slate-500 rounded-xl mt-14 mx-2 md:m-auto">
        <div class="mb-2">
          <label
            for="image"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Image
          </label>
          <input
            onChange={(e) => {
              ImageInput.current = URL.createObjectURL(e.target.files[0]);
            }}
            type="file"
            id="image"
            accept="image/*"
            ref={ImageInput}
            placeholder="Enter Post title here.."
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-2">
          <label
            for="Title"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input
            type="text"
            ref={TitleInput}
            id="Title"
            placeholder="Enter Post title here.."
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-2">
          <label
            for="Post_Content"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Post Content
          </label>
          <textarea
            rows={4}
            type="text"
            ref={PostContentInput}
            id="Post_Content"
            placeholder="Enter Post Content here.."
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          ></textarea>
        </div>
        <div class="mb-2">
          <label
            for="Description"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Description (Optional)
          </label>
          <input
            type="text"
            ref={DescriptionInput}
            id="Description"
            placeholder="Enter Description here.."
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-2">
          <label
            for="Tages"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Tages (Formet : Tag space Tag ....)
          </label>
          <input
            type="text"
            ref={TagesInput}
            id="Tages"
            placeholder="Enter Tages here.."
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            addPost();
            if (
              ImageInput.current != null &&
              TitleInput.current.value != "" &&
              PostContentInput.current.value != "" &&
              TagesInput.current.value != ""
            ) {
              setSucessBox(true);
            }
          }}
        >
          Create & Upload Post
        </button>
      </form>
    </>
  );
};
