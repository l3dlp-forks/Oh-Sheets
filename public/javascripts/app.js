(function($) {
    window.Timesheet = Backbone.Model.extend({
        
    });

    window.TimesheetView = Backbone.View.extend({

    });

    window.TimesheetCollection = Backbone.Collection.extend({
        model: Timesheet,
        url: "/timesheets"
    });

})(jQuery);
