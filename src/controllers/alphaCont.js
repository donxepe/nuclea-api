const { Json } = require('../db')

const putAlpha = async(req, res) => {
    try {
        const content = req.body;

        if(!Object.keys(content).length) throw 'no inputs'

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
        if (error === 'no inputs') res.status(400).send(error)
        else res.send(error);

    }
}

module.exports = {
    putAlpha
}