const updateDish = async (ctx, next) => {
  console.log('update')
  ctx.body = 'Update dish'
}

module.exports = {
  updateDish
}