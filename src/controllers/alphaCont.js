const { Json } = require('../db')

const putAlpha = async(req, res) => {
    try {
        const content = req.body;

        const [newJSON, nJ] = await Json.findOrCreate({
            where:{
                content: JSON.stringify(content)
            }
        });
        
        if (nJ) {
            var sortedContent = Object.keys(content).sort().reduce(
                (obj, key) => {
                    obj[key] = content[key];
                    return obj;
                },
                {}
            );

            newJSON.update({
                sorted_content : JSON.stringify(sortedContent)
            })
            console.log('calculated answer')

        } else {
            var sortedContent = JSON.parse(newJSON.sorted_content)
            console.log('answer was in cache')
        }

        res.json(sortedContent);

    } catch (error) {

        res.send(error);

    }
}

module.exports = {
    putAlpha
}