const User = require('../Model/User');

//inserindo dados
exports.post = async (req, res, next) => {
    const { name, email } = req.body;

   const user = await User.create({ name, email }).then((res) => {

        res.status(201).send(user);

    }).catch((error) => {

        res.status(401).send(error);
    })
};
//buscando
exports.get = async (req, res, next) => {

    try {
        const user = await User.findAll()
        res.status(201).send(user);   
    } catch (error) {
        res.status(401).send(error);
    }

};
//alterando
exports.put = async (req, res, next) => {

    const { id } = req.params;
    const { name, email } = req.body;

    const users = await User.findOne({where: {id}});
    const user = await User.update({ name, email }, { where: { id } });
    res.send(user);

};
//deletando
exports.delete = async (req, res, next) => {
    try {
        const { id } = req.params;

        await User.destroy({ where: { id } });
        res.send('user deletado')

    } catch (error) {
        res.send(error)
    }
};