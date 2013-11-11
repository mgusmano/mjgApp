Ext.define('mjgApp.view.PastPhone', {
    extend: 'Ext.Carousel',
    xtype: 'pastphone',
    config: {
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
});