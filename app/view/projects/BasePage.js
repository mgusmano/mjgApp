Ext.define('mjgApp.view.projects.BasePage', {
    extend: 'Ext.Container',
    xtype: 'basepage',
    style: { backgroundColor: '#FFFFFF' },

    initialize: function () {
        this.down('image').setSrc('resources/images/' + this.getImage());
        this.down('#theHeader').setHtml(this.getHeader());
    },

    config: {
        image: null,
        header: null,
        padding: '0 5 0 5', layout: 'vbox',
        items: [
            { xtype: 'container', itemId: 'theHeader', margin: '5 5 5 5', style: { textAlign: 'center', fontSize: '10px' } },
            {
                xtype: 'image', flex: 1, cls: 'my-carousel-item-img', 
                listeners: {
                    tap: function () {
                        var overlay = Ext.Viewport.add({ xtype: 'basepanel', title: 'Project Details', src: this.getSrc() });
                        overlay.show();
                        overlay.remove();
                    }
                }
            },
           { xtype: 'container', margin: '5 5 5 5', style: { textAlign: 'center', fontSize: '10px' }, html: "Tap on the image to see details on this project." },
           { xtype: 'container', height: 20 }
        ]
    }


});