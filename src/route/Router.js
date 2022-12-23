import { Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Write from "../pages/Write";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Post from "../pages/Post";
import Chat from "../pages/Chat";
import PostList from "../pages/PostList";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<div>메인페이지</div>} />
      <Route path="/main" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/write" element={<Write />} />
      <Route path="/postList" element={<PostList />} />
      <Route path="/post" element={<Post />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="*" element={<div>이거 404 페이지요</div>} />
    </Routes>
  );
};

export default Router;
