import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL, instance } from "../../core/axios/axios";
import sweetAlert from "../../core/utils/sweetAlert";

export const __getPosts = createAsyncThunk(
  "getPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await instance.get("/api/post");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getDetailPost = createAsyncThunk(
  "getDetailPost",
  async (payload, thunkAPI) => {
    try {
      // console.log(payload, "payload");
      const data = await baseURL.get(`/api/post/${payload}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postPosts = createAsyncThunk(
  "postPosts",
  async (payload, thunkAPI) => {
    try {
      console.log("payload", payload);
      const { title, price, content, image } = payload;
      const postData = new FormData();
      postData.append("file", image); //entries
      // appen 키값 file 중요! 백엔드와 맞춰야함!
      // postData.append("title",payload.title);
      // postData.append("files", images);

      const data = await baseURL.post(
        `/api/post?title=${encodeURIComponent(
          title
        )}&content=${encodeURIComponent(content)}&price=${encodeURIComponent(
          price
        )}`,
        postData
      );
      if (data.request.status === 200) {
        sweetAlert(1000, "success", "코디 작성 성공");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __modifyPosts = createAsyncThunk(
  "modifyPosts",
  async (payload, thunkAPI) => {
    try {
      console.log("payload", payload);
      const { title, price, content, image, num } = payload;
      const postData = new FormData();
      postData.append("file", image); //entries
      // appen 키값 file 중요! 백엔드와 맞춰야함!
      // postData.append("title",payload.title);
      // postData.append("files", images);

      const data = await baseURL.put(
        `/api/post/${num}?title=${encodeURIComponent(
          title
        )}&content=${encodeURIComponent(content)}&price=${encodeURIComponent(
          price
        )}`,
        postData
      );
      if (data.request.status === 200) {
        sweetAlert(1000, "success", "코디 작성 성공");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteyPosts = createAsyncThunk(
  "deletePosts",
  async (payload, thunkAPI) => {
    try {
      const data = await baseURL.delete(`/api/post/${payload}`);
      // const data = await axios.delete(`http://localhost:3001/post/${payload}`);
      if (data.request.status === 200) {
        sweetAlert(1000, "success", "코디 삭제 성공");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postComment = createAsyncThunk(
  "postComment",
  async (payload, thunkAPI) => {
    try {
      //payload 글번호
      // console.log(payload, "댓글 palyload");
      const content = payload.content;
      const postId = payload.postId;
      const data = await baseURL.post(`/api/comment/${postId}`, {
        content: content,
      });
      // const data = await axios.delete(`http://localhost:3001/post/${payload}`);
      if (data.request.status === 200) {
        sweetAlert(1000, "success", "댓글 작성 성공");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __modifyComment = createAsyncThunk(
  "modifyComment",
  async (payload, thunkAPI) => {
    try {
      // console.log(payload, "게시글 수정");
      // payload 댓글번호임
      const content = payload.content;
      const commentId = payload.commentId;
      const data = await baseURL.put(`/api/comment/${commentId}`, { content });
      if (data.request.status === 200) {
        sweetAlert(1000, "success", "댓글 수정 성공");
      }
      data.data.postId = payload.postId;
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComment = createAsyncThunk(
  "deleteComment",
  async (payload, thunkAPI) => {
    try {
      // payload 댓글번호임
      console.log(payload, "payload");
      const data = await baseURL.delete(`/api/comment/${payload.commentId}`);
      if (data.request.status === 200) {
        sweetAlert(1000, "success", "댓글 삭제 성공");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postLike = createAsyncThunk(
  "postLike",
  async (payload, thunkAPI) => {
    try {
      console.log(payload, "payload");
      const data = await baseURL.post(`/api/post/like/${payload}`);
      if (data.request.status === 200) {
        sweetAlert(1000, "success", "게시글 좋아요~! ");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __commentLike = createAsyncThunk(
  "commentLike",
  async (payload, thunkAPI) => {
    try {
      console.log(payload, "payload");
      const data = await baseURL.post(`/api/comment/like/${payload}`);
      if (data.request.status === 200) {
        sweetAlert(1000, "success", "댓글 좋아요~! ");
      }
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      sweetAlert(1000, "error", error.response.data.msg);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  postList: [],
  detailPost: {},
  isLoading: false,
  error: null,
  isSuccess: false,
};

const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(__getPosts.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
    });
    builder.addCase(__getPosts.fulfilled, (state, action) => {
      state.postList = action.payload.postList;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(__getPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.isSuccess = false;
    });
    builder.addCase(__getDetailPost.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
    });
    builder.addCase(__getDetailPost.fulfilled, (state, action) => {
      state.detailPost = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(__getDetailPost.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
    });
    builder.addCase(__postPosts.fulfilled, (state, action) => {
      state.postList.push(action.payload);
    });

    builder.addCase(__postComment.fulfilled, (state, action) => {
      const currPostId = action.meta.arg.postId;
      state.postList = state.postList.map((post) => {
        if (post.num !== currPostId) {
          return post;
        } else {
          post.commentList.push(action.payload);
          return post;
        }
      });
    });
    builder.addCase(__modifyComment.fulfilled, (state, action) => {
      const currPostId = action.payload.postId;

      const currPostIndex = state.postList.find((post) => {
        return post.num === currPostId;
      });

      const targetPost = state.postList.find((post) => {
        return post.num === currPostId;
      });

      const copyPostList = [...state.postList];

      const targetCommentIdx = targetPost.commentList.findIndex((comment) => {
        return action.payload.num === comment.num;
      });
      targetPost.commentList[targetCommentIdx] = action.payload;

      copyPostList[currPostIndex] = targetPost;
      state.postList = copyPostList;

      state.postList = [...state.postList, targetPost];
    });
    builder.addCase(__deleteComment.fulfilled, (state, action) => {
      const { commentId, postId } = action.meta.arg;

      const currPostIndex = state.postList.findIndex((post) => {
        return post.num === postId;
      });

      const targetPost = state.postList.find((post) => {
        return post.num === postId;
      });

      const targetCommentIdx = targetPost.commentList.findIndex((comment) => {
        return commentId === comment.num;
      });

      const copyPostList = [...state.postList];
      copyPostList[currPostIndex].commentList.splice(targetCommentIdx, 1);
      state.postList = copyPostList;
    });

    builder.addCase(__postLike.fulfilled, (state, action) => {
      const copy = { ...state.detailPost };
      copy.postLikeCheck = action.payload.likeCheck;
      copy.likeCount = action.payload.likeCheck
        ? copy.likeCount + 1
        : copy.likeCount - 1;
      state.detailPost = copy;
    });
    builder.addCase(__commentLike.fulfilled, (state, action) => {
      const commentId = action.meta.arg;

      const targetComment = state.detailPost.commentList.find((comment) => {
        // console.log(comment);
        return comment.num === commentId;
      });
      const targetCommentIdx = state.detailPost.commentList.findIndex(
        (comment) => {
          return (comment.num = commentId);
        }
      );
      const copyCommentList = [...state.detailPost.commentList];
      targetComment.commentLikeCheck = action.payload.likeCheck;

      copyCommentList[targetCommentIdx] = targetComment;

      state.detailPost.commentList = copyCommentList;
    });
  },
});
export const { changeInputField } = postSlice.actions;

const postReducer = postSlice.reducer;

export default postReducer;
