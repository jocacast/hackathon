/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * new_contact_dialog module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojinputtext', 'ojs/ojdialog'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function new_contact_dialogContentViewModel() {
        var self = this;
        self.contactRecord = {
            name: '',
            telephone: '',
            email: '',
            facebookPage: '',
            service: '',
            score: 5,
        };
        self.submitContact = function (data, event, parentVM) {
            console.log(data);
            console.log(event);
            parentVM.collection.create(data.contactRecord, {wait: true,
                contentType: 'application/json',
                success: function (model, response) {
                    $('#new-contact-dialog').ojDialog('close');
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Error in Create: ' + textStatus);
                }
            });

        };

        self.cancelContact = function (data, event) {
            console.log(data);
            console.log(event);
            $('#new-contact-dialog').ojDialog('close');
        };




    }

    return new_contact_dialogContentViewModel;
});
