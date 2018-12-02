import joi from 'joi';
import { Router } from 'express';
import authMiddleware from '../middlewares/authMiddleware';
import { PostModel } from '../models';
import { postSchema } from '../validators/post';
const router = Router();

router.post('/', [authMiddleware], async (req, res) => {
  try {
    let { body } = req;
    let data = joi.validate(body, postSchema);

    if (data.error) {
      return res.boom.badRequest(data.error.message);
    }

    const Post = new PostModel();
    await Post.create(body);

    return res.json({
      message: 'post sucessfully created'
    });
  } catch (e) {
    console.log('error: ', e);
    res.boom.badRequest(e);
  }
});
export default router;

router.get('/', async (req, res) => {
  try {
    let { limit, skip } = req.query;
    let Post = new PostModel();
    let posts = await Post.fetchPosts({ limit, skip });
    return res.json({
      message: { posts }
    });
  } catch (e) {
    console.log('error:', e);
    res.boom.badRequest(e);
  }
});

router.get('/:id', async (req, res) => {
  try {
    let { id } = req.params;
    let Post = new PostModel();
    let post = await Post.getById(id);
    return res.json({
      message: { post }
    });
  } catch (e) {
    console.log('error: ', e);
    res.boom.badRequest(e);
  }
});

router.delete('/:id', [authMiddleware], async (req, res) => {
  try {
    let { id } = req.params;
    let Post = new PostModel();
    await Post.delete(id);
    return res.json({
      message: 'Successfully deleted the post'
    });
  } catch (e) {
    console.log('error :', e);
    res.boom.badRequest(e);
  }
});
