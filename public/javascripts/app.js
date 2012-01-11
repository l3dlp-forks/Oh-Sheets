$(function(){
    //Models
    window.Timesheet = Backbone.Model.extend({
        initialize: function(){
            this.days = new SheetDays;
        }
    });

    window.SheetDays = Backbone.Collection.extend({
        model:SheetDay
    });

    window.SheetDay =  Backbone.Model.extend({
        initialize: function() {
            this.activities = new SheetActivities;
        }
    });

    window.SheetActivities = Backbone.Collection.extend({
        model: SheetActivity
    });

    window.SheetActivity = Backbone.Model.extend({
        defaults: function(){
            return {
                timeStart: "9:00am",
                timeEnd: "5:00pm",
                projectName: "",
                projectVersion: "1.0",
                projectPlatform: "iPhone",
                activityName: ""
            };
        }

    });

    window.WorkingTimesheet = new Timesheet;

    //Views
    window.ActivityView = Backbone.View.extend({
        tagName: "li",

        template: _.template($('#activity-template').html()),

    });

})();
