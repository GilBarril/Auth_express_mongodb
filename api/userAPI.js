const User = require('../models/User')

exports.self = (req, res) => {
    User.find({_id: req.user})
        .select('_id user_name')
        .then(result => res.send(result))
        .catch(err => {
            console.log(res)
            res.status(500).send(res)
        })
}
