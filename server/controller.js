module.exports = {
  getAll: (req, res) => {
    req.app.get('db').getAll().then(users => {
      res.status(200).send(users)
    }).catch(err => console.log(err))
  }
}