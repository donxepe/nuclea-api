const { Author, Quote } = require('../db')

const getQuotes = async (req,res) => {
    try {

        const quotes = await Author.findAll({ include: Quote, order: [
            ['name','ASC'],
            [Quote, 'consultation_date', 'DESC']
        ]})
        const authors = quotes.reduce( (obj, aut)  => {
            obj[aut.name] = aut.quotes.map(q => {
                const { id, quote, consultation_date } = q
                return {
                    id,
                    quote: JSON.parse(quote),
                    consultation_date
                }
            })
            return obj
        },{})

        

        res.json(authors)
        
    } catch(err){

    }
}

module.exports = {
    getQuotes
}