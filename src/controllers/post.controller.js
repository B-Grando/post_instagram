
import { postsService } from "../services/post.service.js";

function handleError(res, error, mensagem) {
  console.error(error);

  return res.status(error.status || 500).json({
    error: error.status
      ? error.message
      : mensagem
  });
}

export const postsController = {
  async getAll(req, res) {
    try {
      const posts = await postsService.getAll();
      return res.status(200).json(posts);
    } catch (error) {
      return handleError(
        res,
        error,
        "Erro ao buscar os posts."
      );
    }
  },

  async getById(req, res) {
    try {
      const post = await postsService.getById(
        req.params.id
      );

      return res.status(200).json(post);
    } catch (error) {
      return handleError(
        res,
        error,
        "Erro ao buscar o post."
      );
    }
  },

  async create(req, res) {
    try {
      const post = await postsService.create(req.body);

      return res.status(201).json(post);
    } catch (error) {
      return handleError(
        res,
        error,
        "Erro ao criar o post."
      );
    }
  },

  async update(req, res) {
    try {
      const post = await postsService.update(
        req.params.id,
        req.body
      );

      return res.status(200).json(post);
    } catch (error) {
      return handleError(
        res,
        error,
        "Erro ao atualizar o post."
      );
    }
  },

  async delete(req, res) {
    try {
      const post = await postsService.delete(
        req.params.id
      );

      return res.status(200).json({
        mensagem: "Post excluído com sucesso.",
        post
      });
    } catch (error) {
      return handleError(
        res,
        error,
        "Erro ao excluir o post."
      );
    }
  }
};
