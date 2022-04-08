const { expect } = require('chai');
const session  = require('supertest-session');
const { request } = require('../../src/app');
const app = require('../../src/app');
const { Quote, Author, conn } = require('../../src/db')

const agent = session(app)


    describe('QuoteS route', () => {
        before(() => conn.authenticate()
        .catch((err) => {
          console.error('Unable to connect to the database:', err);
        }));
        before(() => Quote.sync({ force: true }))
        before(() => Author.sync({ force: true}))
        before(() => agent.post('/quote'))
        before(() => agent.post('/quote'))
        before(() => agent.post('/quote'))
        before(() => agent.post('/quote'))
        describe('GET /quotes', () => {
          it('should get 200', () =>
            agent.get('/quotes').expect(200)
          );
          it('should get JSON as a response', () =>
            agent.get('/quotes').expect(200)
            .expect("Content-Type", /json/)
          )
          it('should return all (4) authors', async () =>{
              const res = agent.get('/quotes')
              .end(function(err,res){
                  expect(Object.keys(res.body)).to.have.lengthOf(4)
              })
            
          })
        });
      });