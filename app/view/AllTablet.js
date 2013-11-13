Ext.define('mjgApp.view.AllTablet', {
    extend: 'Ext.Container',
    xtype: 'alltablet',
    id:'allTablet',

    initialize: function () {
        if (this.getIsLoaded() === false) {
            this.setIsLoaded(true);
            var $container = $('#flip'),
                $pages = $container.children().hide();
            Modernizr.load({
                test: Modernizr.csstransforms3d && Modernizr.csstransitions,
                yep: ['js/jquery.tmpl.min.js', 'js/jquery.history.js', 'js/core.string.js', 'js/jquery.touchSwipe-1.2.5.js', 'js/jquery.flips.js'],
                nope: 'css/fallback.css',
                callback: function (url, result, key) {
                    if (url === 'css/fallback.css') {
                        $pages.show();
                    }
                    else if (url === 'js/jquery.flips.js') {
                        $('#flip').flips();
                    }

                }
            });
        }
        this.callParent(arguments);
        this.setContentEl('fliparea');
    },

    config: {
        bodyStyle: { backgroundColor: '#FFFFFF' },
        //contentEl: 'fliparea',
        isLoaded: false,
        listeners: {

            activate2: function (newActiveItem, me, oldActiveItem, eOpts) {
                if (this.getIsLoaded() === false) {
                    this.setIsLoaded(true);
                    var $container = $('#flip'),
                        $pages = $container.children().hide();
                    Modernizr.load({
                        test: Modernizr.csstransforms3d && Modernizr.csstransitions,
                        yep: ['js/jquery.tmpl.min.js', 'js/jquery.history.js', 'js/core.string.js', 'js/jquery.touchSwipe-1.2.5.js', 'js/jquery.flips.js'],
                        nope: 'css/fallback.css',
                        callback: function (url, result, key) {
                            if (url === 'css/fallback.css') {
                                $pages.show();
                            }
                            else if (url === 'js/jquery.flips.js') {
                                $('#flip').flips();
                            }

                        }
                    });
                }
            }
        }
    }
});

$(function () {
    $('body').on('click', '.img-cont', function () {
        alert('img-cont');
    });
});