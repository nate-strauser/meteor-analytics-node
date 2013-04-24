Package.describe({
    summary: "analytics-node npm packaged for meteor"
});

Package.on_use(function (api) {
    //api.use('jquery', 'client');
    api.add_files([
        'lib/analytics-node.js'
    ], 'server'
    );

});
Npm.depends({'analytics-node':"0.4.0"});