const { fixture } = require("testcafe");

fixture('Set test speed')
    .page("https://devexpress.github.io/testcafe/example/");

test('Test speed', async t => {
    await t
        .setTestSpeed(0.5)
        .typeText('#developer-name', 'John Smith')
        .click('#windows')
        .click('#submit-button');
    //.expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
});