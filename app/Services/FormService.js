const { Form } = require('../Models');

module.exports = {

    find: async function (queryParams){
        const {filter, skip, limit} = buildParams(queryParams);
        return await Form.find(filter)
      .skip(skip)
      .limit(limit);
    },

    findOne: (id) => Form.findOne({ _id: id }),

    save: async function (formData) {
        const form = new Form({ ...formData });
        await form.save();
        return form;
      },

      delete: (id) => Form.findOneAndDelete({ _id: id }),

      update: (id, formData) => Form.findOneAndUpdate({ _id: id }, formData),
    
}

function buildParams(queryParams) {
    const { _page, _limit, title } = queryParams;
    const page = parseInt(_page);
    const limit = parseInt(_limit);
    if (limit < 0) {
      limit = 0;
    }
    if (page < 0) {
      page = 0;
    }
    const skip = page * limit;
    const filter = {};
    if (title) filter["title"] = title;
    return { filter, skip, limit };
  }