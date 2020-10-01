
import { randomThrow } from '../utils.js';

const test = QUnit.test;

test('does random throw function work', (expect) => {

    const options = ['rock', 'paper', 'scissors'] ;
    const actual = randomThrow();
    expect.equal(options.includes(actual), true);



});