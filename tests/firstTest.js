const { fixture } = require("testcafe");

fixture('First Fixture')
    .page("https://devexpress.github.io/testcafe/example/");

    test('First Test', async t => {
        await t
            .typeText('#developer-name', 'John Smith')
            .click('#windows')
            .click('#submit-button');
            //.expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
    });