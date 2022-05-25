import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";

import {
  MoreHoriz,
  ChatBubbleOutline,
  Repeat,
  FavoriteBorderOutlined,
  PublishOutlined,
} from "@mui/icons-material";

const Post = () => {
  return (
    <div className="post">
      <Avatar
        src="https://static.remove.bg/remove-bg-web/588fbfdd2324490a4329d4ad22d1bd436e1d384a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
        className="post__avatar"
      />
      <div className="post__content">
        <div className="post__header">
          <div className="post__titles">
            <h3>John Doe</h3>
            <h4>@johndoe</h4>
          </div>

          <MoreHoriz classNames="post__options" />
        </div>
        <div className="post__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          ipsam sed fugit non blanditiis quam earum doloremque quibusdam totam
          maxime!
        </div>
        <div className="post__media">
          <img
            src="https://static.remove.bg/remove-bg-web/588fbfdd2324490a4329d4ad22d1bd436e1d384a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
            alt=""
          />
        </div>
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorderOutlined fontSize="small" />
          <PublishOutlined fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default Post;
