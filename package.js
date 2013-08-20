Package.describe({
    summary: "analytics-node npm packaged for meteor"
});

Package.on_use(function (api) {
    //api.use('jquery', 'client');
    api.add_files([
        'lib/analytics-node.js'
    ], 'server'
    );
    if (typeof api.export !== 'undefined') {
		api.export("ANALYTICS_NODE", "server");
	}
});
Npm.depends({'analytics-node':"0.5.0"});