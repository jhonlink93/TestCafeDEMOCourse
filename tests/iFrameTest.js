import { Selector } from "testcafe";
const iframe = Selector("iframe#mce_0_ifr");
const textarea = Selector("body#tinymce.mce-content-body ");

fixture("iFrame Test")
.page("http://the-internet.herokuapp.com/iframe");

test("iFrame Test", async t => {
    await t
    .switchToIframe(iframe)
    .click(textarea)
    .pressKey("ctrl+a delete")
    .typeText(textarea, "Hello World!")
    .expect(textarea.textContent).eql("Hello World!")
    .switchToMainWindow();
});