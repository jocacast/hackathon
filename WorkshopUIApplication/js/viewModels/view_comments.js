/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * view_comments module
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojlistview', 'ojs/ojcollectiontabledatasource', 'ojs/ojmodel','ojs/ojdialog'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function view_commentsContentViewModel() {
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




    }

    return view_commentsContentViewModel;
});
