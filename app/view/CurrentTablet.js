Ext.define('mjgApp.view.CurrentTablet', {
    extend: 'Ext.Carousel',
    xtype: 'currenttablet',
    config: {
        bufferSize: 2,
        direction: 'horizontal',
        items: [
            //{ xtype: 'basepage', image: 'SharePointRest.png', header: 'SharePoint REST API Remote List Reader' },
            { xtype: 'basepage', image: 'EMSPEED12.png', header: 'HTML5 Single Page Application' },
            { xtype: 'basepage', image: 'EMSPEEDPOC.jpg', header: 'HTML5 Graphical Proof of Concept' },
            { xtype: 'basepage', image: 'EMSPEED10.jpg', header: 'HTML5/Silverlight Web Application' },
            { xtype: 'basepage', image: 'NalcoEquip.jpg', header: 'ASP.NET/Silverlight Web Application' },
            { xtype: 'basepage', image: 'Scheduler.jpg', header: 'Silverlight/SharePoint Web Application' },
            { xtype: 'basepage', image: 'Atlas.jpg', header: 'SharePoint Custom Search Web Application' },
            { xtype: 'basepage', image: 'EMSIX.png', header: 'ASP.NET/AJAX Web Application' }
        ]
    }
});