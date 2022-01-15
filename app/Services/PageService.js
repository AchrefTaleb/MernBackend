const { Page } = require('../Models');

module.exports = {

    find: async function (queryParams){
        const {filter, skip, limit} = buildParams(queryParams);
        return await Page.find( filter).populate('form')
      .skip(skip)
      .limit(limit);
    },

    findOne: (id) => Page.findOne({ _id: id }).populate('form'),

    save: async function (pageData) {
        const page = new Page({ ...pageData });
        await page.save();
        return page;
      },
      
      delete: (id) => Page.findOneAndDelete({ _id: id }),

      update: (id, pageData) => Page.findOneAndUpdate({ _id: id }, pageData),
    
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