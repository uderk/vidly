const Joi = require('joi')
// validate genre
function validateGenre(genre) {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  })
  return schema.validate(genre)
}

module.exports = validateGenre
