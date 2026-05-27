const {User} = require('../../models')

const getAll = async(req, res) => {
  try {
    const usuarios = await User.findAll({
      attributes: ["id", "nickname", "name", "email"]
    })
    res.status(200).json(usuarios);
  } catch(e) {
    res.status(500).json({
      error: e.message
    })
  }
}

const getById = async(req, res) => {
  try {
    const usuario = await User.findByPk(req.params.id, {
      attributes: ["id", "nickname", "name", "email"],
    });
    if (!usuario) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(usuario);
  } catch (e) {
    res.status(500).json({
      error: e.message
    })
  }
}

const create = async (req, res) => {
  try {
    const {nickname, name, email, password} = req.body;
    const usuario = await User.create({
      nickname, 
      name,
      email,
      password
    })
    res.status(201).json(usuario)
  } catch(e) {
    res.status(500).json({
      error: e.message
    })
  }
}

const update = async(req, res) => {
  try {
    const {nickname, name, email, password} = req.body;
    const usuario = await User.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: "User not found" });
    }
    await usuario.update({
      nickname, name, email, password
    });
    res.status(200).json(usuario);
  } catch(e) {
    res.status(500).json({
      error: e.message
    })
  }
}

const remove = async(req, res) => {
  try {
    const usuario = await User.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: "User not found" });
    }
    await usuario.destroy();
    res.status(200).json({
      message: "Usuario eliminado con éxito."
    });
  } catch(e) {
    res.status(500).json({
      error: e.message
    })
  }
}

module.exports = {
  create,
  getById,
  getAll,
  update,
  remove
}
