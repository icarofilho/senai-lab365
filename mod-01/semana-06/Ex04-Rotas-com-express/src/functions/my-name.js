exports.myName = async (req, res) => {
  const {
    params: { name },
  } = req;
  if (!name) {
    throw new Error("no name provided");
  }
  console.log(`Rota de API criada pelo(a): ${name}`);
  res.status(200).send(`Rota de API criada pelo(a): ${name}`);
  return;
};
