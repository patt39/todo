const models = require('../models')
const { v4: uuidv4 } = require("uuid");



/** Qui recupero tutti i dati **/
const index = async (req, res) => {

    try {
        let todos = await models.todo.findAll({
            order: [
                ['createdAt', 'DESC'],
            ],
        });
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error,
        });
    }
}

/** Qui salvaguardo i dati nella database **/
const store = async (req, res) => {

    let item = {
        title: req.body.title,
        body: req.body.body,
        slug: uuidv4(),
        status: false
    }

    try {

        const todos = await models.todo.create(item)
        res.status(200).json({
            message: "Data save successfully",
            result: todos,
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error,
        });
    }

}


/** Ici je Show une donner les donners de la base de donner **/
const show = async (req, res) => {

    try {
        const todo = await models.todo.findOne({ where: { slug: req.params.slug } })
        res.status(200).json(todo);

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error,
        });
    }

}

/** Qui faccio l'update del todo*/
const update = async (req, res) => {
    let item = req.params.slug;

    let dataUpdate = {
        title: req.body.title,
        body: req.body.body,
        slug: uuidv4(),
    }

    try {
          await models.todo.update(dataUpdate, { where: { slug: item } })
        res.status(200).json({
            message: "Data save successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error,
        });
    }

}

const statusChange = async (req, res) => {

    try {

        const todo = await models.todo.findOne({ where: { slug: req.params.slug } });
        if (!todo) {
            return res.status(400).json({ message: "This task doesn't exist" });
        }

        const dataUpdate = { status: !todo.status }

        await todo.update(dataUpdate)
        
        res.status(200).json({ todo });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error,
        });
    }
}

/** Qui faccio la delete */
const destroy = async (req, res) => {

    try {
        await models.todo.destroy({ where: { slug: req.params.slug} })
        res.status(200).json({
            message: "Data deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong",
            error: error,
        });
    }

}

module.exports = {
    index: index,
    store: store,
    show: show,
    statusChange: statusChange,
    update: update,
    destroy: destroy
};