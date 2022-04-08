const { Json } = require('../db')

const postAlpha = (req, res) => {
    try {
        const content = req.body;
        if(!Object.keys(content).length) throw 'no inputs'

        const flatContent = Object.keys(content).reduce(
            (obj, key) => {
                obj[key] = Array.isArray(content[key]) ? content[key].join(',') : content[key]
                return obj
            },
            {}
        );

        res.json(flatContent)

    } catch(err) {
        if (err === 'no inputs') res.status(400).send(err)
        else res.send(err);
    }
}

module.exports = {
    postAlpha
}

