Ext.define('mjgApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
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

        if (Ext.os.deviceType === 'Phone') {
            theChild = {};
            theChild.xtype = 'currentphone';
            theChild.title = 'Current Work';
            theChild.iconCls = 'home';
            theItems.push(theChild);

            theChild = {};
            theChild.xtype = 'pastphone';
            theChild.title = 'Past Work';
            theChild.iconCls = 'favorites';
            theItems.push(theChild);
        }
        else {
            theChild = {};
            theChild.xtype = 'alltablet';
            theChild.title = 'Work';
            theChild.iconCls = 'home';
            theItems.push(theChild);

            theChild = {};
            theChild.xtype = 'currenttablet';
            theChild.title = 'Current Work';
            theChild.iconCls = 'favorites';
            theItems.push(theChild);
        }

        theChild = {};
        theChild.xtype = 'dashboard';
        theChild.title = 'Companies';
        theChild.iconCls = 'info';
        theItems.push(theChild)

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
