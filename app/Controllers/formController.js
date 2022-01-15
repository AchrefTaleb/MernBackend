const { formService } = require('../Services');

module.exports = {

    // GET /api/forms
    find: async function (req, res, next){
        try{
            const forms = await formService.find({...req.query});
            res.json(forms);
        }catch(error){
            error.msg = "failed to create resource";
            next(error);
        }
    },

    // GET /api/forms:id
  findOne: async function (req, res, next) {
    try {
      const form = await formService.findOne(req.params.id);
      if (form == null) res.status(404).json("not found");
      else res.json(form);
    } catch (error) {
      error.msg = "failed to retrieve resource";
      next(error);
    }
  },

  // POST /api/forms
  save: async function (req, res, next) {
    try {      
      const form = await formService.save(req.body);
      res.json(form);
    } catch (error) {
      error.msg = "failed to create resource";
      next(error);
    }
  },

  // DELETE /api/form/:id
  delete: async function (req, res, next) {
    try {
      const form = await formService.delete(req.params.id);
      if (form == null) res.status(404).json("not found");
      else res.json("form deleted");
    } catch (error) {
      error.msg = "failed to delete resource";
      next(error);
    }
  },

  // PUT /api/forms/:id
  update: async function (req, res, next) {
    try {
      const form = await formService.update(req.params.id, req.body);
      if (form == null) res.status(404).json("not found");
      else res.json(form);
    } catch (error) {
      error.msg = "failed to update resource";
      next(error);
    }
  },
}