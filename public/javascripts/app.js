(function($) {
    window.Timesheet = Backbone.Model.extend({
        
    });

    window.TimesheetView = Backbone.View.extend({
        template: '#timesheet-template',
        tag: 'li',
        className: 'timesheet',

        initialize: function() {
            _.bindAll(this, 'render');
            this.initializeTemplate();
        },

        initializeTemplate: function() {
            this.template = _.template($(this.template).html());
        },

        render: function() {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
    });

    window.TimesheetCollection = Backbone.Collection.extend({
        model: Timesheet,
        url: '/timesheets'
    });

    window.TimesheetCollectionView = Backbone.View.extend({
        tagName: 'section',
        className: 'timesheetCollection',

        initialize: function() {
            _.bindAll(this, 'render');
            this.template = _.template($('#sheetCollection-template').html());
            this.collection.bind('reset', this.render);
        },

        render: function() {
            var $timesheets,
                collection = this.collection;

            $(this.el).html(this.template({}));
            $timesheets = this.$(".timesheets");
            this.collection.each(function(timesheet) {
                var view = new TimesheetView({ model: timesheet,
                                               collection: collection });
                $timesheets.append(view.render().el);
            });

            return this;
        }
    });

    window.timesheets = new TimesheetCollection();

    window.OhSheet = Backbone.Router.extend({
        routes: {
            '': 'home',        
        },
        
        initialize: function() {
            this.timesheetsView = new TimesheetCollectionView({
                collection: window.timesheets 
            });
        },
        
        home: function() {
            $('#content').empty();
            $('#content').append(this.timesheetsView.render().el);
        }
    });

    $(document).ready(function() {
        window.App = new OhSheet();
        Backbone.history.start({pushState: true});
        window.App.home();
    });
})(jQuery);
