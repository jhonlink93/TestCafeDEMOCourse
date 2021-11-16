fixture('Navigate Example')
    .page('https://devexpress.github.io/testcafe/example')

test('Navigate to the second page', async t => {
    await t
        .navigateTo('http://www.google.com')
});