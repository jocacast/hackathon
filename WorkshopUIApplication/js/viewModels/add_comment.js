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

        self.commentRecord = {
            comment: '',
            min: 0,
            max:10,
            value : ko.observable(10),
            rawValue: ko.observable()
        };
        self.submitComment = function (data, event) {
            console.log(data);
            console.log(event);

        };

        self.cancelComment = function (data, event) {
            console.log(data);
            console.log(event);
        };
    }
    
    

    return add_commentContentViewModel;
});
