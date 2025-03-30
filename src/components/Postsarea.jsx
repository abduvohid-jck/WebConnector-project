import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function Postsarea() {
  let [posts, setPosts] = useState([]);
  let [post, setPost] = useState("");
  let token = localStorage.getItem("token");
  let [me, setMe] = useState([]);
  useEffect(() => {
    axios
      .get(`https://nt-devconnector.onrender.com/api/profile/me`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => setMe(res.data));
  }, []);

  function Posts() {
    axios
      .get(`https://nt-devconnector.onrender.com/api/posts`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => setPosts(res.data));
  }
  function Delete(post_id) {
    axios
      .delete(`https://nt-devconnector.onrender.com/api/posts/${post_id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then(() => {
        Posts();
      });
  }
  useEffect(() => {
    Posts();
  }, []);
  function PostPost(e) {
    e.preventDefault();
    axios
      .post(
        `https://nt-devconnector.onrender.com/api/posts`,
        {
          text: post,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then(() => {
        Posts();
      });
  }
  console.log(posts);
  console.log(me);

  return (
    <div>
      <div className="w-[1036px] m-auto mt-[96px]">
        <h1 className="text-[48px] font-[700] text-[#17a2b8] mb-[16px]">
          Posts
        </h1>
        <p className="flex items-center text-[#333333] mb-[16px] text-[24px] gap-[5px]">
          <FaUser /> Welcome to the community
        </p>
        <form onSubmit={PostPost}>
          <input
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="Create a post"
            className="border-[1px] border-[#ccc] border-[solid]  w-[100%] p-[6.4px] text-[1.2rem]"
          ></input>
          <button className="bg-[#343A40] mt-[16px] py-[6.4px] px-[20.8px] text-white mb-[16px]">
            Submit
          </button>
        </form>
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
              <p className="ml-[32px] mb-[16px]">{post.text}</p>
              <div>
                <Link
                  to={`/posts/${post._id}`}
                  className="ml-[32px] text-white text-[16px] bg-[#17a2b8] px-[20.800px] py-[6.400px] mt-[160px]"
                >
                  Discussion
                </Link>
                {post.user === me.user._id && (
                  <button
                    onClick={() => Delete(post._id)}
                    className="ml-[32px] text-white text-[16px] bg-[red] px-[20.800px] py-[9px]"
                  >
                    <FaTimes />
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Postsarea;
