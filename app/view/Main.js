var isLoaded = false;
Ext.define('mjgApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [





            {
                xtype: 'container',
                title: 'Companies',
                iconCls: 'info',
                contentEl: 'header',
                listeners: {
                    painted: function (element, eOpts) {
                        if (isLoaded === false) {
                            isLoaded = true;
                            var $container  = $( '#flip' ),
                                $pages      = $container.children().hide();
     
                            Modernizr.load({
                                test: Modernizr.csstransforms3d && Modernizr.csstransitions,
                                yep : ['js/jquery.tmpl.min.js','js/jquery.history.js','js/core.string.js','js/jquery.touchSwipe-1.2.5.js','js/jquery.flips.js'],
                                nope: 'css/fallback.css',
                                callback : function( url, result, key ) {
             
                                    if( url === 'css/fallback.css' ) {
                                        $pages.show();
                                    }
                                    else if( url === 'js/jquery.flips.js' ) {
                                        $( '#flip' ).flips();
                                    }
     
                                }
                            });
                        }
                    }
                }
            },

            {
                xtype: 'container',
                title: 'Companies',
                iconCls: 'info',
                contentEl: 'qrcode',
                listeners: {
                    painted: function (element, eOpts) {
                        $('#qrcode').qrcode({ width: 264, height: 264, text: "{projectId:97266}" });
                    }
                }
            },


            {
                title: 'Current Work',
                iconCls: 'home',
                xtype: 'carousel',
                //itemLength: 100,
                bufferSize: 2,
                direction: 'horizontal',
                items: [
                    {
                        xtype: 'container',
                        padding: '5 5 5 5',
                        contentEl: 'summary'
                    },
                    { xtype: 'basepage', image: 'SharePointRest.png', header: 'SharePoint REST API Remote List Reader' },
                    { xtype: 'basepage', image: 'EMSPEED12.png', header: 'HTML5 Single Page Application' },
                    { xtype: 'basepage', image: 'EMSPEEDPOC.jpg', header: 'HTML5 Graphical Proof of Concept' },
                    { xtype: 'basepage', image: 'EMSPEED10.jpg', header: 'HTML5/Silverlight Web Application' },
                    { xtype: 'basepage', image: 'NalcoEquip.jpg', header: 'ASP.NET/Silverlight Web Application' },
                    { xtype: 'basepage', image: 'Scheduler.jpg', header: 'Silverlight/SharePoint Web Application' },
                    { xtype: 'basepage', image: 'Atlas.jpg', header: 'SharePoint Custom Search Web Application' },
                    { xtype: 'basepage', image: 'EMSIX.png', header: 'ASP.NET/AJAX Web Application' }
                ]
            },
            {
                xtype: 'dashboard',
                title: 'Companies',
                iconCls: 'info'
            },


            {
                title: 'Past Work',
                iconCls: 'favorites',
                xtype: 'carousel',
                //itemLength: 100,
                bufferSize: 2,
                direction: 'horizontal',
                items: [
                    { xtype: 'container', padding: '5 5 5 5', contentEl: 'a' },
                    { xtype: 'container', padding: '5 5 5 5', contentEl: 'b' },
                    { xtype: 'container', padding: '5 5 5 5', contentEl: 'c' },
                    { xtype: 'container', padding: '5 5 5 5', contentEl: 'd' },
                    { xtype: 'container', padding: '5 5 5 5', contentEl: 'e' },
                    { xtype: 'container', padding: '5 5 5 5', contentEl: 'f' },
                    { xtype: 'container', padding: '5 5 5 5', contentEl: 'g' }
]
            }


        ]
    }
});
