const { Message } = require('../Models');

module.exports = {

    find: async function (queryParams){
        const {filter, skip, limit} = buildParams(queryParams);
        return await Message.find( filter).populate('form').populate('form').populate('page')
      .skip(skip)
      .limit(limit);
    },

    findOne: (id) => Message.findOne({ _id: id }).populate('form').populate('page'),

    save: async function (messageData) {
        const message = new Message({ ...messageData });
        await message.save();
        return message;
      },
      
      delete: (id) => Message.findOneAndDelete({ _id: id }),    
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