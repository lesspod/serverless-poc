import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  createdAt: Number,
  updatedAt: Number
});

const formatPost = {
  __v: 0
};

class Post {
  constructor() {
    this.Post = mongoose.model('post', postSchema, 'post');
  }

  create(post) {
    let now = Date.now();
    post.createdAt = now;
    post.updatedAt = now;

    let newPost = new this.Post(post);
    return newPost.save();
  }

  fetchPosts({ limit, skip } = { limit: 10, skip: 0 }) {
    return this.Post.find({}, formatPost)
      .limit(limit)
      .skip(skip);
  }

  getById(_id) {
    return this.Post.findOne({ _id }, formatPost);
  }

  delete(_id) {
    return this.Post.remove({ _id });
  }

  update(id, data) {
    return this.Post.findOneAndUpdate({ _id }, data, { new: true });
  }
}

export default Post;
