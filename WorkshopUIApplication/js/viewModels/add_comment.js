/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * add_comment module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojinputtext', 'ojs/ojdialog', 'ojs/ojslider'
], function (oj, ko, $) {
    /**
     * The view model for the main content view template
     */
        
    function add_commentContentViewModel() {
        var self = this;
        var url = 'http://slc12mev.us.oracle.com:7003/MDCTipServicesHackaton/webresources/lookComments';
        
        var model = oj.Model.extend({
        idAttribute: 'commentID',
        urlRoot: url
        });
        
        self.collection = new oj.Collection(null, {
            url: url,
            model: model
        });        
        self.dataSource = new oj.CollectionTableDataSource(self.collection);
        
        
        self.commentRecord = {
            comment: '',
            min: 0,
            max:10,
            value : ko.observable(10),
            rawValue: ko.observable()
        };
        self.submitComment = function (data, event, parentVM) {
            console.log(data);
            console.log(event);
            console.log(url)
            self.collection.create(data.commentRecord, {wait:true,
        contentType: 'application/json',
        success: function (model, response) {
            $('#add-comment-dialog').ojDialog('close');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Error in Create: ' + textStatus);                    
        }
    });                        


        };

        self.cancelComment = function (data, event) {
            console.log(data);
            console.log(event);
            $('#add-comment-dialog').ojDialog('close');
        };
    }
    
    

    return add_commentContentViewModel;
});
