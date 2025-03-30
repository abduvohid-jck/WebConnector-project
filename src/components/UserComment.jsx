import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function UserComment() {
  let { id } = useParams();
  let [post, setPost] = useState({});
  let [comment, setComment] = useState("");
  let token = localStorage.getItem("token");
  function Data() {
    axios
      .get(`https://nt-devconnector.onrender.com/api/posts/${id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => setPost(res.data));
  }
  useEffect(() => {
    Data();
  }, []);
  function PostComment(e) {
    e.preventDefault();
    axios
      .post(
        `https://nt-devconnector.onrender.com/api/posts/comment/${post._id}`,
        {
          text: comment,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then(() => {
        Data();
        setComment("");
      });
  }

  return (
    <div>
      <div className="w-[1036px] mt-[96px] m-auto">
        <Link
          to="/posts"
          className="text-[16px] bg-[#F4F4F4] py-[6.4px] px-[20.8px]"
        >
          Back To Posts
        </Link>
        <div
          key={post._id}
          className="w-[1036px] m-auto border-[1px] border-[solid] border-[#ccc] p-[16px] mb-[16px] flex items-center my-[16px]"
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
            <Link
              to={`/posts/${post._id}`}
              className="ml-[32px] text-white text-[16px] bg-[#17a2b8] px-[20.800px] py-[6.400px] mt-[160px]"
            >
              Discussion
            </Link>
          </div>
        </div>
        <div className="my-[16px] p-[8px] bg-[#17a2b8]">
          <p className="text-[18.72px] font-[700] text-white">
            Leave a Comment
          </p>
        </div>
        <form onSubmit={PostComment}>
          <input
          value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment the post"
            className="border-[1px] border-[#ccc] border-[solid]  w-[100%] p-[6.4px] text-[1.2rem]"
          ></input>
          <button className="bg-[#343A40] mt-[16px] py-[6.4px] px-[20.8px] text-white">
            Submit
          </button>
        </form>
        {post.comments?.map((comment) => {
          return (
            <div
              key={comment._id}
              className="w-[1036px] m-auto border-[1px] border-[solid] border-[#ccc] p-[16px] mb-[16px] flex items-center my-[16px]"
            >
              <div className=" w-[194.08px]">
                <img
                  className="h-[100px] w-[100px] rounded-[100%] m-auto"
                  src={comment.avatar}
                  alt="Avatar"
                />
                <p className="text-center mt-[5px] text-[#17a2b8] font-[700]">
                  {comment.name}
                </p>
              </div>
              <div>
                <p className="ml-[32px]">{comment.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserComment;
