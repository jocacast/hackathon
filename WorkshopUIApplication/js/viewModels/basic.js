/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * basic module
 'ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomposite', 'jet-composites/demo-card/loader'],
 *
 **/
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojcomposite', 'jet-composites/demo-card/loader'
], function (oj, ko, $) {
    /**
     * The view model for the main content view template
     */
    function basicContentViewModel() {
        var self = this;
            self.employees = [
      {
        name: 'Deb Raphaely',
        avatar: null,
        title: 'Purchasing Director',
        work: '5171278899',
        email: 'deb.raphaely@oracle.com'
      },
      {
        name: 'Adam Fripp',
        avatar: null,
        title: 'IT Manager',
        work: '6501232234',
        email: 'adam.fripp@oracle.com'
      }
    ];
    }

    
    return basicContentViewModel;
});
