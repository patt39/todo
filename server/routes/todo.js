const express = require('express');
const TodoController = require('../Controller/TodoController');
const router = express.Router();

router.get('/todos', TodoController.index);
router.post('/todos', TodoController.store);
router.get('/todos/:slug', TodoController.show);
router.put('/todos/:slug', TodoController.update);
router.get('/todos/:slug/status', TodoController.statusChange)
router.delete('/todos/:slug', TodoController.destroy);


module.exports = router;