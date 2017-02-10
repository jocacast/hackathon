/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * edit_employee_dialog module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojinputtext', 'ojs/ojdialog'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function edit_employee_dialogContentViewModel() {
        var self = this;
        self.createViewModel = function (params, valueAccessor) {
            var model =
                    {
                        employeeRecord: {
                            firstName: ko.observable(),
                            lastName: ko.observable(),
                            gender: ko.observable('M'),
                            birthDate: ko.observable(),
                            hiredate: ko.observable()
                        },
                        submitEmployee: function (data, event, parentVM) {
                            console.log(data);
                            console.log(event);
                            var myModel = parentVM.collection.get(data.employeeRecord.employeeID);
                            var simpleEmployeeRecord = {
                            employeeID: model.employeeRecord.employeeID,
                            firstName: ko.utils.unwrapObservable(model.employeeRecord.firstName),
                            lastName: ko.utils.unwrapObservable(model.employeeRecord.lastName),
                            gender: ko.utils.unwrapObservable(model.employeeRecord.gender),
                            birthDate: ko.utils.unwrapObservable(model.employeeRecord.birthDate),
                            hiredate: ko.utils.unwrapObservable(model.employeeRecord.hiredate)
                        };
                        myModel.save(simpleEmployeeRecord, {
                            success: function(myModel, response, options) {
                                $('#edit-employee-dialog').ojDialog('close');
                            },
                            error: function(jqXHR, textStatus, errorThrown) {
                                alert("Update failed with: " + textStatus);                            
                            }
                        });

                        

                        },
                        cancelEmployee: function (data, event) {
                            console.log(data);
                            console.log(event);
                            $('#edit-employee-dialog').ojDialog('close');
                        }
                    };
            self.employeeRecord = model.employeeRecord;
            return Promise.resolve(model);
        };

    }

    return {'edit_employee_dialogViewModel':
          edit_employee_dialogContentViewModel};
});
