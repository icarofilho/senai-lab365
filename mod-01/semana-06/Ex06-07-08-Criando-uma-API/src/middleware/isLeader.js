const isLeader = async (req, res, next) => {
  const {
    body: { cargo },
  } = req;

  if (cargo.toLowerCase() != "lider") {
    res.status(400).send({ message: "Usuário não é líder" });
    return;
  }
  next();
};

module.exports = { isLeader };
