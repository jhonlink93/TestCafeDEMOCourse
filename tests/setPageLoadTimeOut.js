fixture('set page timeout Fixture')
    .page('https://devexpress.github.io/testcafe/example');

test.timeouts( {pageLoadTimeout: 0, pageRequestTimeout: 0, ajaxRequestTimeout: 2000} )    // <- this line
('set page timeout test', async t => { 
    await t
        .navigateTo('https://devexpress.github.io/testcafe/')   
});