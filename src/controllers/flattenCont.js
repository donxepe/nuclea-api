const { Json } = require('../db')

const postAlpha = (req, res) => {
    try {
        const content = req.body;

        const flatContent = Object.keys(content).reduce(
            (obj, key) => {
                obj[key] = Array.isArray(content[key]) ? content[key].join(',') : content[key]
                return obj
            },
            {}
        );

        res.json(flatContent)

    } catch(err) {
        res.send(err);
    }
}

module.exports = {
    postAlpha
}

