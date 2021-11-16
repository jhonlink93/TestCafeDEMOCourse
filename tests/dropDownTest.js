import { Selector } from "testcafe";

const interfaceSelector = Selector("select#preferred-interface");
const interfaceOption = interfaceSelector.find("option");

fixture("Dropdown test")
    .page("https://devexpress.github.io/testcafe/example");

test("Dropdown test", async t => {
    await t
        .click(interfaceSelector)
        .click(interfaceOption.withText("Both"));
});