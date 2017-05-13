const test = require('tape');
const D = require('../index.js');

test('D', t => {
    const d = D({a: {b: [{c: 'hello'}]}});

    d.all.defined.all.the.time = 'world';

    t.equal('hello world', `${d.a.b[0].c} ${d.all.defined.all.the.time}`);

    t.end();
});
