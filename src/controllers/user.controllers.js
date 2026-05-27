const {User} = require('../../models')

const getAll = async(req, res) => {
  try {
    const usuarios = await User.findAll({
      attributes: ["nickname", "email"]
    })
    res.status(200).json(usuarios);
  } catch(e) {
    res.status(500).json({
      error: e.message
    })
  }
}

const getById = async(req, res) => {
  const usuario = req.usuario;
  res.status(200).json(usuario);
}

const create = async (req, res) => {
  try {
    const {nickname, email, password} = req.body;
    const usuario = await User.create({
      nickname, 
      email,
      password
    })
    res.status(200).json(usuario, {
      message: "Usuario creado con éxito."
    })
  } catch(e) {
    res.status(500).json({
      error: e.message
    })
  }
}

const update = async(req, res) => {
  try {
    const {id} = req.params; 
    const {nickname, email, password} = req.body;
    const usuario = req.usuario;
    await usuario.update({
      nickname, email, password
    });
    res.status(200).json(usuario, {
      message: "Producto actualizado con exito."
    });
  } catch(e) {
    res.status(500).json({
      error: e.message
    })
  }
}

const remove = async(req, res) => {
  try {
    const {id} = req.params; 
    const usuario = req.usuario;
    await usuario.destroy();
    res.status(200).json({
      message: "Producto eliminado con éxito."
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
