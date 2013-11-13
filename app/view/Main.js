Ext.define('mjgApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.data.Store',
        'Ext.TitleBar',
        'Ext.Video'
    ],

    initialize: function () {
        this.create();
        this.callParent(arguments);
    },

    create: function () {
        var theItems = [];
        var theChild = {};

        if (Ext.os.deviceType != 'Phone') {
            theChild = {};
            theChild.xtype = 'alltablet';
            theChild.title = 'Home';
            theChild.iconCls = 'home';
            theItems.push(theChild);

            theChild = {};
            theChild.xtype = 'currenttablet';
            theChild.title = 'Current';
            theChild.iconCls = 'favorites';
            theItems.push(theChild);
        }
        else {
            theChild = {};
            theChild.xtype = 'currentphone';
            theChild.title = 'Current';
            theChild.iconCls = 'home';
            theItems.push(theChild);

            theChild = {};
            theChild.xtype = 'pastphone';
            theChild.title = 'Past';
            theChild.iconCls = 'favorites';
            theItems.push(theChild);

        }

        theChild = {};
        theChild.xtype = 'dashboard';
        theChild.title = 'Companies';
        theChild.iconCls = 'info';
        theChild.theFont = 'f30';

        theItems.push(theChild);

        this.add(theItems);
    },


    config: {
        tabBarPosition: 'bottom',
        xitems: [
 
            //{
            //    xtype: 'container',
            //    title: 'Companies',
            //    iconCls: 'info',
            //    contentEl: 'qrcode',
            //    listeners: {
            //        painted: function (element, eOpts) {
            //            $('#qrcode').qrcode({ width: 264, height: 264, text: "{projectId:97266}" });
            //        }
            //    }
            //},

        ]
    }
});
