const { Json } = require('../db')

const postAlpha = (req, res) => {
    try {
        const content = req.body;

        const flatContent = Object.keys(content).reduce(
            (obj, key) => {
                if (Array.isArray(content[key])) {
                    obj[key] = content[key].join(',')
                } else {
                    obj[key] = content[key]
                }
                return obj
            },
            {}
        );

        res.json(flatContent)

    } catch(err) {
        res.send(error);
    }
}

module.exports = {
    postAlpha
}

