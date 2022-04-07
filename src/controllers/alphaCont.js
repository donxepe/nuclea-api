const { Json } = require('../db')

const putAlpha = async(req, res) => {
    try {
        const content = req.body;

        const sortedContent = Object.keys(content).sort().reduce(
            (obj, key) => {
                obj[key] = content[key];
                return obj;
            },
            {}
        );

        const [newJSON, nJ] = await Json.findOrCreate({
            where:{
                content: JSON.stringify(sortedContent)
            }
        });
        

        res.json(sortedContent);
    } catch (error) {
        res.send(error);

    }
}

module.exports = {
    putAlpha
}