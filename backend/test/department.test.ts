import { expect } from 'chai';
import { it, describe } from 'mocha'
import { agent as request } from 'supertest';


import Application from '../src/app';
const app = new Application()


describe('#department/:id', () => {

    it('Should return success', async () => {
        const res = await request(app.service).get('/v1/department/2').send();
        expect(res.status).to.equal(200);
        expect(res.body).not.to.be.empty;
        expect(res.body).to.be.a('object')
        expect(res.body.id).to.equal('2')
        expect(res.body.error).to.be.undefined;
    })
})