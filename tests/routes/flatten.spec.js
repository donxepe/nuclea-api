const { expect } = require('chai');
const session  = require('supertest-session');
const app = require('../../src/app');
const { Json, conn } = require('../../src/db')

const agent = session(app)
const json = {
    "fruit": "apple",
    "animal": "zebras",
    "city-list": [
        "sunnyvale",
        "sanjose"
        ]
    }

    describe('Flatten route', () => {
        before(() => conn.authenticate()
        .catch((err) => {
          console.error('Unable to connect to the database:', err);
        }));
        beforeEach(() => Json.sync({ force: true }))
        describe('POST /flatten', () => {
          it('should get 200', () =>
            agent.post('/flatten').send(json).expect(200)
          );
          it('should get 400 if no input is given', () =>
            agent.post('/flatten').expect(400)
          )
        });
      });