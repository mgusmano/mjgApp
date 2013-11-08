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
                title: 'HTML5 Work',
                iconCls: 'home',
                xtype: 'carousel',
                bufferSize: 2,
                direction: 'horizontal',
                items: [
                    {
                        xtype: 'container',
                        padding: '5 5 5 5',
                        html:
                        '<div style="font-size:20px;font-weight:bold;color:#146BA8;font-style:italic;">Marc Gusmano</div>' +
                        '<div style="font-size:14px;font-weight:bold;">Senior SharePoint and HTML5 Architect</div>' +
                        '<br/>' +
                        '<div style="font-weight:bold;color:#146BA8;font-style:italic;">Summary:</div>' +
                        '<div style="font-weight:bold;font-size:10px;">' +
                            'Marc Gusmano is a Senior Manager with Hitachi Consulting based in the Houston office.  Mr. Gusmano is involved in assisting and mentoring clients in the development and implementation of solutions that utilize WMicrosoft SharePoint related technologies including ASP.NET and HTML5.'+
                        '<br/>' +
                        '<br/>' +
                            'Mr. Gusmano is extensively involved with custom HTML5 development efforts, combining his knowledge of the underlying SharePoint architecture with his experience building HTML5 Single Page Applications to assist clients in the planning, design and development of custom solutions.' +
                        '<br/>'
                    },
                    {
                        xtype: 'container', padding: '0 5 0 5', layout: 'vbox',
                        items: [
                            { xtype: 'container', margin: '5 5 5 5', style: { textAlign: 'center', fontSize: '10px' }, html: "Tap on the image to see details on this project." },
                            {
                                xtype: 'image', flex: 1, cls: 'my-carousel-item-img', src: 'resources/images/' + '7-EMSPEED12.png',
                                listeners: {
                                    tap: function () {
                                        var overlay = Ext.Viewport.add({ xtype: 'basepanel', title: 'Project Details', image: this.getSrc() });
                                        overlay.show();
                                        overlay.remove();
                                    }
                                }
                            },
                            { xtype: 'container', height: 28 }
                        ]
                    },
                    {
                        xtype: 'container', padding: '0 5 0 5', layout: 'vbox',
                        items: [
                            { xtype: 'container', margin: '5 5 5 5', style: { textAlign: 'center', fontSize: '10px' }, html: "Tap on the image to see details on this project." },
                            {
                                xtype: 'image', flex: 1, cls: 'my-carousel-item-img', src: 'resources/images/' + '6-EMSPEED-POC.jpg',
                                listeners: {
                                    tap: function () {
                                        var overlay = Ext.Viewport.add({ xtype: 'basepanel', title: 'Project Details', image: this.getSrc() });
                                        overlay.show();
                                        overlay.remove();
                                    }
                                }
                            },
                            { xtype: 'container', height: 28 }
                        ]
                    },
                    {
                        xtype: 'container', padding: '0 5 0 5', layout: 'vbox',
                        items: [
                            { xtype: 'container', margin: '5 5 5 5', style: { textAlign: 'center', fontSize: '10px' }, html: "Tap on the image to see details on this project." },
                            {
                                xtype: 'image', flex: 1, cls: 'my-carousel-item-img', src: 'resources/images/' + '5-EMSPEED10.jpg',
                                listeners: {
                                    tap: function () {
                                        var overlay = Ext.Viewport.add({ xtype: 'basepanel', title: 'Project Details', image: this.getSrc() });
                                        overlay.show();
                                        overlay.remove();
                                    }
                                }
                            }, { xtype: 'container', height: 28 }
                        ]
                    },
                    {
                        xtype: 'container', padding: '0 5 0 5', layout: 'vbox',
                        items: [
                            { xtype: 'container', margin: '5 5 5 5', style: { textAlign: 'center', fontSize: '10px' }, html: "Tap on the image to see details on this project." },
                            {
                                xtype: 'image', flex: 1, cls: 'my-carousel-item-img', src: 'resources/images/' + '4-NalcoEquip.jpg',
                                listeners: {
                                    tap: function () {
                                        var overlay = Ext.Viewport.add({ xtype: 'basepanel', title: 'Project Details', image: this.getSrc() });
                                        overlay.show();
                                        overlay.remove();
                                    }
                                }
                            },
                            { xtype: 'container', height: 28 }
                        ]
                    },
                    {
                        xtype: 'container', padding: '0 5 0 5', layout: 'vbox',
                        items: [
                            { xtype: 'container', margin: '5 5 5 5', style: { textAlign: 'center', fontSize: '10px' }, html: "Tap on the image to see details on this project." },
                            {
                                xtype: 'image', flex: 1, cls: 'my-carousel-item-img', src: 'resources/images/' + '3-scheduler.jpg',
                                listeners: {
                                    tap: function () {
                                        var overlay = Ext.Viewport.add({ xtype: 'basepanel', title: 'Project Details', image: this.getSrc() });
                                        overlay.show();
                                        overlay.remove();
                                    }
                                }
                            },
                            { xtype: 'container', height: 28 }
                        ]
                    },
                    {
                        xtype: 'container', padding: '0 5 0 5', layout: 'vbox',
                        items: [
                            { xtype: 'container', margin: '5 5 5 5', style: { textAlign: 'center', fontSize: '10px' }, html: "Tap on the image to see details on this project." },
                            {
                                xtype: 'image', flex: 1, cls: 'my-carousel-item-img', src: 'resources/images/' + '2-atlas.jpg',
                                listeners: {
                                    tap: function () {
                                        var overlay = Ext.Viewport.add({ xtype: 'basepanel', title: 'Project Details', image: this.getSrc() });
                                        overlay.show();
                                        overlay.remove();
                                    }
                                }
                            },
                            { xtype: 'container', height: 28 }
                        ]
                    },
                    {
                        xtype: 'container', padding: '0 5 0 5', layout: 'vbox',
                        items: [
                            { xtype: 'container', margin: '5 5 5 5', style: { textAlign: 'center', fontSize: '10px' }, html: "Tap on the image to see details on this project." },
                            {
                                xtype: 'image', flex: 1, cls: 'my-carousel-item-img', src: 'resources/images/' + '1-EMSIX.png',
                                listeners: {
                                    tap: function () {
                                        var overlay = Ext.Viewport.add({ xtype: 'basepanel', title: 'Project Details', image: this.getSrc() });
                                        overlay.show();
                                        overlay.remove();
                                    }
                                }
                            },
                            { xtype: 'container', height: 28 }
                        ]
                    }
                ]
            },





            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Welcome to Sencha Touch 2'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                    {
                        xtype: 'video',
                        url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
                        posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
                    }
                ]
            }
        ]
    }
});
