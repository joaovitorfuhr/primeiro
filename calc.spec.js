const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { soma } = require('./calc');

lab.test('retorno da soma de 2 e 3 deve ser 5', (done) => {

    Code.expect(soma(2, 3)).to.equal(5);
    done();
});

lab.test('retorno da soma de 1 e a deve ser 1a', (done) => {

    Code.expect(soma(1, a)).to.equal(1a);
    done();
});

lab.test('retorno da multiplica de 2 e 3 deve ser 6', (done) => {

    Code.expect(soma(2, 3)).to.equal(6);
    done();
});

lab.test('retorno da divisao de 6 e 3 deve ser 2', (done) => {

    Code.expect(soma(6, 3)).to.equal(2);
    done();
});

lab.test('retorno da subtracao de 3 e 3 deve ser 0', (done) => {

    Code.expect(soma(3, 3)).to.equal(0);
    done();
});


lab.test('retorno da raiz de 64 deve ser 8', (done) => {

    Code.expect(soma(64)).to.equal(8);
    done();
});

lab.test('retorno da porcentagem de 70 de 100 deve ser 70', (done) => {

    Code.expect(soma(70, 100)).to.equal(70);
    done();
});


lab.test('retorno da soma de 1 e  deve ser 1', (done) => {

    Code.expect(soma(1, )).to.equal(1);
    done();
});

lab.test('retorno da media aritmetica de 2 e 4 deve ser 3,', (done) => {

    Code.expect(soma(2, 4)).to.equal(2);
    done();
});

lab.test('retorno da soma de 1,5 e 2 deve ser 3,5', (done) => {

    Code.expect(soma(1,5, 2)).to.equal(3,5);
    done();
});
