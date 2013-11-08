Ext.define('mjgApp.view.projects.BasePanel', {
    extend: 'Ext.Panel',
    xtype: 'basepanel',

    initialize: function () {
        this.items.items[0].setTitle(this.getTitle());

        var theHtml = '';
        switch(this.getImage())
        {
            case 'resources/images/' + '7-EMSPEED12.png':
                theHtml = 'hi';
                break;
            case 'resources/images/' + '1-EMSIX.png':

                theHtml =
                '<div style="font-weight:bold;color:#146BA8;font-style:italic;">Large Oil and Gas Provider - Houston, TX</div>' +

                '<div style="display:table;width:100%">' +
                  '<div style="display:table-cell;text-align:left;font-weight:bold">' +
                    '<span style="padding:5px 5px 5px 0px;width:30px;">Senior SharePoint Architect</span>' +
                  '</div>' +
                  '<div style="display:table-cell;text-align:right;font-weight:bold">' +
                    '<span style="padding:10px 5px 5px 5px;width:30px;">Oct 2009 - Dec 2009</span>' +
                  '</div>' +
                '</div>' +


                '<div style="margin:10px 0px 0px 0px;font-weight:bold;font-size:10px;">' +
                    'Architected and implemented a Document Management System utilizing SharePoint Enterprise Search.  The application utilized the SharePoint Profile System to provide for personalized search results.  The display of search results utilized a custom faceted search experience, with result data displayed in tabular format to allow for sorting.  An AJAX-enabled interface added to the custom search experience.  The custom Search experience was created with custom Visual Studio controls.' +
                '</div>' +


                '<div style="margin:10px 0px 0px 0px;font-weight:bold;color:#146BA8;font-style:italic;">Technologies Used:</div>' +

                '<div style="font-weight:bold;font-size:10px;">' +
                    'Microsoft.Net (C#) 3.5, SQL Server2008 SharePoint 2007, Visual Studio 2008, ASP.NET AJAX ' +
                '</div>';
                break;
            default:
                theHtml = this.getImage() + Ext.os.deviceType;
        }


        this.setHtml(theHtml);


    },

    config: {
        title: null,
        html: null,
        image: null,
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
        centered: true,
        width: (Ext.os.deviceType == 'Phone') ? '90%' : 800,
        height: Ext.os.deviceType == 'Phone' ? '90%' : 300,
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