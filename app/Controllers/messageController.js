const { messageService } = require('../Services');

module.exports = {

    // GET /api/messages
    find: async function (req, res, next){
        try{
            const messages = await messageService.find({...req.query});
            res.json(messages);
        }catch(error){
            error.msg = "failed to create resource";
            next(error);
        }
    },

    // GET /api/messages/:id
  findOne: async function (req, res, next) {
    try {
      const message = await messageService.findOne(req.params.id);
      if (message == null) res.status(404).json("not found");
      else res.json(message);
    } catch (error) {
      error.msg = "failed to retrieve resource";
      next(error);
    }
  },

  // POST /api/messages
  save: async function (req, res, next) {
    try {       
      const message = await messageService.save(req.body);
      res.json(message);
    } catch (error) {
      error.msg = "failed to create resource";
      next(error);
    }
  },

  // DELETE /api/message/:id
  delete: async function (req, res, next) {
    try {
      const message = await messageService.delete(req.params.id);
      if (message == null) res.status(404).json("not found");
      else res.json("message deleted");
    } catch (error) {
      error.msg = "failed to delete resource";
      next(error);
    }
  },
}