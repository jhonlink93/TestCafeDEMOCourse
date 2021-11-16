import { Selector } from "testcafe";

const url = "http://the-internet.herokuapp.com/upload";
const fileUpload = Selector("#file-upload");
const fileUploadButton = Selector("#file-submit");
const uploadedFile = Selector("#uploaded-files");

fixture("File Upload")
.page(url);

test("File Upload", async t => {
    await t
    .setFilesToUpload(fileUpload, "firstTest.js")
    .clearUpload(fileUpload)
    .setFilesToUpload(fileUpload, "navigateTest.js")
    .click(fileUploadButton)
    .expect(uploadedFile.innerText).eql("navigateTest.js");
});