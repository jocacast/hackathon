/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * myhello module
 */
define(['ojs/ojcore', 'knockout', 'viewModels/edit_employee_dialog', 'ojs/ojlistview', 'ojs/ojcollectiontabledatasource', 'ojs/ojmodel'
], function (oj, ko, editEmployeeModelFactory) {
    /**
     * The view model for the main content view template
     */
    function myhelloContentViewModel() {
        var self = this;
        self.firstName = ko.observable("Planet");
        self.lastName = ko.observable("Earth");
        self.fullName = ko.pureComputed(function () {
            return this.firstName() + " " + this.lastName();
        }, this);

        var parse = function (response) {
            var returnResponse = {};
            if (response.status) {
                //This comes from submit                
                if (response.status === 'Success') {
                    if (response.employeeID) {
                        returnResponse.employeeID = response.employeeID;
                    }
                    if (response.created) {
                        returnResponse.created = response.created;
                    }
                }
            } else {
                //This comes from query
                returnResponse = response;
            }
            return returnResponse;
        };

        var url = 'http://slc01ewu.us.oracle.com:7001/emp/resources/employees';
        var model = oj.Model.extend({
            idAttribute: 'employeeID',
            urlRoot: url,
            parse: parse
        });

        self.collection = new oj.Collection(null, {
            url: url,
            model: model
        });

        self.dataSource = new oj.CollectionTableDataSource(self.collection);

        self.newEmployee = function (data, event) {
            console.log(data);
            console.log(event);
            $('#new-employee-dialog').ojDialog('open');
        };
        self.editEmployee = function (data, event) {
            console.log(data);
            console.log(event);
            self.editEmployeeModelFactory.employeeRecord.employeeID = data.employeeID;
            self.editEmployeeModelFactory.employeeRecord.firstName(data.firstName);
            self.editEmployeeModelFactory.employeeRecord.lastName(data.lastName);
            self.editEmployeeModelFactory.employeeRecord.birthDate(data.birthDate);
            self.editEmployeeModelFactory.employeeRecord.hiredate(data.hiredate);

            $('#edit-employee-dialog').ojDialog('open');
        };

        self.editEmployeeModelFactory =
                new editEmployeeModelFactory.edit_employee_dialogViewModel();

        self.deleteEmployee = function (data, event) {
            console.log(data);
            console.log(event);
            var model = self.collection.get(data.employeeID);
            if (model) {
                self.collection.remove(model);
                model.destroy();
            }

        };

    }
    return myhelloContentViewModel;
});
