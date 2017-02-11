/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * contacts module
 */

define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojlistview',
  'ojs/ojcollectiontabledatasource', 'ojs/ojmodel', 'ojs/ojknockout',
  'ojs/ojinputtext', 'ojs/ojjsontreedatasource', 'ojs/ojbutton'
], function (oj, ko, $) {
  /**
   * The view model for the main content view template
   */

  function contactsContentViewModel() {
    var self = this;
    
    var parse = function (response) {
      var returnResponse = {};
      if (response.status) {
        //This comes from submit                
        if (response.status === 'Success') {
          if (response.name) {
            returnResponse.contactID = response.contactID;
          }
          if (response.created) {
            returnResponse.contactID = response.contactID;
          }
        }
      } else {
        //This comes from query
        returnResponse = response;
      }
      return returnResponse;
    };


    var url = 'http://slc12mev.us.oracle.com:7003/MDCTipServicesHackaton/webresources/wscontacts';
    var model = oj.Model.extend({
      idAttribute: 'contactID',
      urlRoot: url,
      parse: parse
    });

    self.collection = new oj.Collection(null, {
      url: url,
      model: model
    });

    self.newContact = function (data, event) {
      console.log(data);
      console.log(event);
      $('#new-contact-dialog').ojDialog('open');
    };
    self.viewComments = function (data, event) {
      console.log(data);
      console.log(event);
      $('#view-comments-dialog').ojDialog('open');
    };

    self.addComment = function (data, event) {
      console.log(data);
      console.log(event);
      $('#add-comment-dialog').ojDialog('open');
    };

    //old data source
    //self.dataSource = new oj.CollectionTableDataSource(self.collection);

    self.data = {};
    self.dataSource = ko.observable();
    

    self.handleAttached = function (info) {
      console.log('handler');
      $.getJSON(url, function (data) {
        self.data = data;
        console.log(data)
        /*
        var map = data.map(function(item){
          return {attr:item};
        })
        self.dataSource(new oj.JsonTreeDataSource(map));
        */
        self.dataSource(new oj.ArrayTableDataSource(data));
       
      });
      
    };
    
    var filters = ['services'];//TODO: add more filters
    var filterFunc = {};
    
    filterFunc['services'] = function(model) {
      return ( model.get("service").toLowerCase().includes(self.filter().toLowerCase()))}; 
            
    //text box value
    self.filter = ko.observable('');
    

    self.handleKeyUp = function ()
    {     
      var text = self.filter();
      var results = [];
      var collection = new oj.Collection(self.data);

      results = results.concat(collection.filter(filterFunc['services']));
      var filteredCollection = new oj.Collection(results);
      //self.dataSource = new oj.ArrayTableDataSource(filteredCollection);
      self.dataSource(new oj.CollectionTableDataSource(filteredCollection));   
    };
  }  

  return contactsContentViewModel;
});
