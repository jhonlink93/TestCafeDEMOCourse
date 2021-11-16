const { fixture } = require("testcafe");
import { Selector } from "testcafe";
const developerName = Selector("#developer-name");
const osOption = Selector("#windows");
const submitButton = Selector("#submit-button");
fixture.meta('version', 1)('First Fixture')
    .page("https://devexpress.github.io/testcafe/example/");

test.meta('env', 'prod')
.page("https://devexpress.github.io/testcafe/example/")
    ('First Test', async t => {
        await t
            .typeText(developerName, 'John Smith')
            .click(osOption)
            .click(submitButton)
            .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
    });
test
.page("https://devexpress.github.io/testcafe/example/")
    ('First Test', async t => {
        await t
            .typeText(developerName, 'John Smith')
            .click(osOption)
            .click(submitButton)
            .expect(Selector('#article-header').innerText).eql('Thank you, John Smith!');
    });