const { fixture } = require("testcafe");
import { Selector } from "testcafe";
const developerName = Selector("#developerName");
const osOption = Selector("#windows");
const submitButton = Selector("#submitButton");
fixture('First Fixture')
    .page("https://devexpress.github.io/testcafe/example/");

    test('First Test', async t => {
        await t
            .typeText(developerName, 'John Smith')
            .click(osOption)
            .click(submitButton)
            .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
    });