
import { pool } from "../database/db.js";

class PostsRepository {
  async getAll() {
    return await db("posts")
      .select("*")
      .orderBy("criado_em", "desc");
  }

  async getById(id) {
    return await db("posts")
      .where({ id })
      .first();
  }

  async create({ url_imagem, descricao }) {
    const [post] = await db("posts")
      .insert({
        url_imagem,
        descricao: descricao ?? null
      })
      .returning("*");

    return post;
  }

  async update(id, { url_imagem, descricao }) {
    const dados = {};

    if (url_imagem !== undefined) {
      dados.url_imagem = url_imagem;
    }

    if (descricao !== undefined) {
      dados.descricao = descricao;
    }

    const [post] = await db("posts")
      .where({ id })
      .update(dados)
      .returning("*");

    return post;
  }

  async delete(id) {
    const [post] = await db("posts")
      .where({ id })
      .del()
      .returning("*");

    return post;
  }
}

export const postsRepository = new PostsRepository();
