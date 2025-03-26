import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

function Postsarea() {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    let token = localStorage.getItem("token");
    axios
      .get(`https://nt-devconnector.onrender.com/api/posts`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <div>
      <div className="w-[1036px] m-auto mt-[96px]">
        <h1 className="text-[48px] font-[700] text-[#17a2b8] mb-[16px]">
          Posts
        </h1>
        <p className="flex items-center text-[#333333] mb-[16px] text-[24px] gap-[5px]">
          <FaUser /> Welcome to the community
        </p>
      </div>

      {posts.map((post) => {
        return (
          <div
            key={post._id}
            className="w-[1036px] m-auto border-[1px] border-[solid] border-[#ccc] p-[16px] mb-[16px] flex items-center"
          >
            <div className=" w-[194.08px]">
              <img
                className="h-[100px] w-[100px] rounded-[100%] m-auto"
                src={post.avatar}
                alt="Avatar"
              />
              <p className="text-center mt-[5px] text-[#17a2b8] font-[700]">
                {post.name}
              </p>
            </div>
            <div>
              <p className="ml-[32px]">{post.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Postsarea;
