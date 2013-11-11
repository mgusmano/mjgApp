Ext.define('mjgApp.view.ImageCallout', {
    extend: 'Ext.Panel',
    xtype: 'imagecallout',

    initialize: function () {
        this.items.items[0].setTitle(this.getTitle());
        var i = this.getSrc();
        var theStart = 'resources/images/';
        var s = i.indexOf(theStart) + theStart.length;
        var e = i.indexOf('.');
        var theImage = i.substring(s, e);
        this.setContentEl(theImage);
    },

    config: {
        title: null,
        html: null,
        src: null,
        modal: true,
        hideOnMaskTap: true,
        showAnimation: {
            type: 'popIn',
            duration: 250,
            easing: 'ease-out'
        },
        hideAnimation: {
            type: 'popOut',
            duration: 250,
            easing: 'ease-out'
        },

        listeners: {
            tap: function () {
                debugger;
                this.hide();
            }
        },

        centered: true,
        width: (Ext.os.deviceType == 'Phone') ? '95%' : 800,
        height: Ext.os.deviceType == 'Phone' ? '95%' : 300,
        //width: '60%',
        //height: '50%',
        //width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 290 : 800,
        //height: Ext.filterPlatform('ie10') ? '30%' : Ext.os.deviceType == 'Phone' ? 490 : 400,
        styleHtmlContent: true,
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                pack: 'center',
                title: '',
                items: [
                   {xtype: 'spacer'} ,
                   {
                       xtype: 'button',
                       width: 32,
                       iconCls: "delete",
                       ui: "plain",
                       style: {
                           background: 'transparent',
                           color: '#ffffff',
                           padding: '0 0 0 0'
                       },
                       listeners: {
                           tap: function () {
                               this.up('panel').hide();
                           }
                       }
                   }
                ]
            }
        ],
        scrollable: true
    }
});

$(function () {
    $('body').on('click', '.pastwork', function () {
        debugger;
        Ext.getCmp(this.id).hide();
    });
});