/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * new_employee_dialog module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojinputtext', 'ojs/ojdialog'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function new_employee_dialogContentViewModel() {
        var self = this;

        self.employeeRecord = {
            firstName: '',
            lastName: '',
            gender: 'M',
            birthDate: '',
            hiredate: ''
        };
        self.submitEmployee = function (data, event, parentVM) {
            console.log(data);
            console.log(event);
            parentVM.collection.create(data.employeeRecord, {wait: true,
                contentType: 'application/json',
                success: function (model, response) {
                    $('#new-employee-dialog').ojDialog('close');
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert('Error in Create: ' + textStatus);
                }
            });
        };


        self.cancelEmployee = function (data, event) {
            console.log(data);
            console.log(event);
            $('#new-employee-dialog').ojDialog('close');
        };




    }

    return new_employee_dialogContentViewModel;
});
