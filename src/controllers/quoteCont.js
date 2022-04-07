const { Author, Quote } = require('../db');
const axios = require('axios');


const postQuote = async (req, res) => {
    try {
        let randomQuote = await axios.get('http://programming-quotes-api.herokuapp.com/quotes/random')
        

        //const [ author, en , id ] = await randomQuote.data
        const quote = await JSON.stringify(randomQuote.data.en)
        const id = await randomQuote.data.id
        const author = await randomQuote.data.author

        const [newQuote, nQ] = await Quote.findOrCreate({
            where: {
                quote,
                id
            }
        })

        const [newAuthor, nA] = await Author.findOrCreate({
            where: {
                name: author
            }
        })

        nQ && await newQuote.setAuthor(newAuthor)

        const resQuote = {
            author ,
            id: newQuote.id,
            quote: JSON.parse(newQuote.quote),
            consultation_date: newQuote.consultation_date,
        }

        res.json(resQuote)

    } catch (err) {
        res.send(err)
    }
}

module.exports = {
    postQuote
}