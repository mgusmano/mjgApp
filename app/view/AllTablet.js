Ext.define('mjgApp.view.AllTablet', {
    extend: 'Ext.Container',
    xtype: 'alltablet',
    contentEl: 'fliparea',
    isLoaded: false,
    listeners: {
        painted: function (element, eOpts) {
            debugger;
            if (this.isLoaded === false) {
                this.isLoaded = true;
                var $container = $('#flip'),
                    $pages = $container.children().hide();

                debugger;
                Modernizr.load({
                    test: Modernizr.csstransforms3d && Modernizr.csstransitions,
                    yep: ['js/jquery.tmpl.min.js', 'js/jquery.history.js', 'js/core.string.js', 'js/jquery.touchSwipe-1.2.5.js', 'js/jquery.flips.js'],
                    nope: 'css/fallback.css',
                    callback: function (url, result, key) {
                        debugger;
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
});