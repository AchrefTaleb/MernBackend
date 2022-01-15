const { pageService } = require('../Services');

module.exports = {

    // GET /api/pages
    find: async function (req, res, next){
        try{
            const pages = await pageService.find({...req.query});
            res.json(pages);
        }catch(error){
            error.msg = "failed to create resource";
            next(error);
        }
    },

    // GET /api/pages/:id
  findOne: async function (req, res, next) {
    try {
      const page = await pageService.findOne(req.params.id);
      if (page == null) res.status(404).json("not found");
      else res.json(page);
    } catch (error) {
      error.msg = "failed to retrieve resource";
      next(error);
    }
  },

  // POST /api/pages
  save: async function (req, res, next) {
    try {       
      const page = await pageService.save(req.body);
      res.json(page);
    } catch (error) {
      error.msg = "failed to create resource";
      next(error);
    }
  },

  // DELETE /api/page/:id
  delete: async function (req, res, next) {
    try {
      const page = await pageService.delete(req.params.id);
      if (page == null) res.status(404).json("not found");
      else res.json("page deleted");
    } catch (error) {
      error.msg = "failed to delete resource";
      next(error);
    }
  },

  // PUT /api/pages/:id
  update: async function (req, res, next) {
    try {
      const page = await pageService.update(req.params.id, req.body);
      if (page == null) res.status(404).json("not found");
      else res.json(page);
    } catch (error) {
      error.msg = "failed to update resource";
      next(error);
    }
  },
}