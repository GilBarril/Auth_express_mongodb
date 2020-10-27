const Post = require('../models/Post')

exports.list = (req, res) => {
    Post.find()
        .select('_id post_title post_text')
        .then(response => res.send(response))
        .catch(err =>{
            res.status(500).send(err)
        });
}

exports.insert = (req, res) => {
    new Post(req.body).save()
        .then(response => res.send(response))
        .catch(err =>{
            res.status(500).send(err)
        });
}

exports.delete = (req, res) => {
    Post.deleteOne({_id:req.params.postId})
    .then(() => res.send(req.params.postId))
    .catch(err =>{
        res.status(500).send(err)
    })
}

exports.self = (req, res) => {
    Post.find({_id: req.user})
        .select('_id post_title post_text')
        .then(result => res.send(result))
        .catch(err => {
            console.log(res)
            res.status(500).send(res)
        })
}
