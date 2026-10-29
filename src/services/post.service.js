
import { postsRepository } from "../repositories/post.repository.js";

class PostsService {
  async getAll() {
    return await postsRepository.getAll();
  }

  async getById(id) {
    const post = await postsRepository.getById(id);

    if (!post) {
      const error = new Error("Post não encontrado.");
      error.status = 404;
      throw error;
    }

    return post;
  }

  async create({ url_imagem, descricao }) {
    if (
      typeof url_imagem !== "string" ||
      url_imagem.trim() === ""
    ) {
      const error = new Error(
        "A URL da imagem é obrigatória."
      );
      error.status = 400;
      throw error;
    }

    if (
      descricao !== undefined &&
      descricao !== null &&
      typeof descricao !== "string"
    ) {
      const error = new Error(
        "A descrição deve ser um texto."
      );
      error.status = 400;
      throw error;
    }

    return await postsRepository.create({
      url_imagem: url_imagem.trim(),
      descricao
    });
  }

  async update(id, dados) {
    const { url_imagem, descricao } = dados;

    if (
      url_imagem === undefined &&
      descricao === undefined
    ) {
      const error = new Error(
        "Informe ao menos um campo para atualizar."
      );
      error.status = 400;
      throw error;
    }

    if (
      url_imagem !== undefined &&
      (
        typeof url_imagem !== "string" ||
        url_imagem.trim() === ""
      )
    ) {
      const error = new Error(
        "A URL da imagem deve ser um texto não vazio."
      );
      error.status = 400;
      throw error;
    }

    if (
      descricao !== undefined &&
      descricao !== null &&
      typeof descricao !== "string"
    ) {
      const error = new Error(
        "A descrição deve ser um texto ou null."
      );
      error.status = 400;
      throw error;
    }

    const post = await postsRepository.update(id, {
      url_imagem:
        url_imagem === undefined
          ? undefined
          : url_imagem.trim(),
      descricao
    });

    if (!post) {
      const error = new Error("Post não encontrado.");
      error.status = 404;
      throw error;
    }

    return post;
  }

  async delete(id) {
    const post = await postsRepository.delete(id);

    if (!post) {
      const error = new Error("Post não encontrado.");
      error.status = 404;
      throw error;
    }

    return post;
  }
}

export const postsService = new PostsService();
