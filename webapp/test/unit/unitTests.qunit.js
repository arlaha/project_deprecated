/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapbtpdemo/project_deprecated/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
