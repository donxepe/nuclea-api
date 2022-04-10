const { expect } = require('chai');
const session  = require('supertest-session');
const app = require('../../src/app');
const { Quote, Author, conn } = require('../../src/db')

const agent = session(app)


    describe('Quote route', () => {
        before(() => conn.authenticate()
        .catch((err) => {
          console.error('Unable to connect to the database:', err);
        }));
        beforeEach(() => Author.sync({ force: true}))
        beforeEach(() => Quote.sync({ force: true }))
        describe('POST /quote', () => {
          it('should get 200', () =>
            agent.post('/quote').expect(200)
          );
          it('should get JSON as a response', () =>
            agent.post('/quote').expect(200)
            .expect("Content-Type", /json/)
          )
        });
      });