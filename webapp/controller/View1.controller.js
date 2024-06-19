sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
],
function (Controller, MessageBox, MessageToast) {
    "use strict";

    return Controller.extend("sap.btp.demo.projectdeprecated.controller.View1", {
        onInit: function () {

        },
        onButtonPress: function (oContext) {
            MessageBox.error("Added since version 1.28.0. initialFocus, this option sets the action name, the text of the button or the control that gets the focus as first focusable element after the MessageBox is opened. The usage of sap.ui.core.Control to set initialFocus is deprecated since version 1.30.4.verticalScrolling is deprecated since version 1.30.4. VerticalScrolling, this option indicates if the user can scroll vertically inside the MessageBox when the content is larger than the content area.", {
				actions: ["Manage Products", MessageBox.Action.CLOSE],
				emphasizedAction: "Manage Products",
				onClose: function (sAction) {
					MessageToast.show("Action selected: " + sAction);
				},
				dependentOn: this.getView(),
                verticalScrolling : true
			});
        }
    });
});
