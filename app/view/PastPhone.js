Ext.define('mjgApp.view.PastPhone', {
    extend: 'Ext.Carousel',
    xtype: 'pastphone',
    config: {
        bufferSize: 2,
        direction: 'horizontal',
        items: [
            { xtype: 'container', padding: '15 15 15 15', contentEl: 'a', style: { backgroundColor: '#FFFFFF' } },
            { xtype: 'container', padding: '15 15 15 15', contentEl: 'b' },
            { xtype: 'container', padding: '15 15 15 15', contentEl: 'c', style: { backgroundColor: '#FFFFFF' } },
            { xtype: 'container', padding: '15 15 15 15', contentEl: 'd' },
            { xtype: 'container', padding: '15 15 15 15', contentEl: 'e', style: { backgroundColor: '#FFFFFF' } },
            { xtype: 'container', padding: '15 15 15 15', contentEl: 'f' }
            //{ xtype: 'container', padding: '15 15 15 15', contentEl: 'g', style: { backgroundColor: '#FFFFFF' } }
        ]
    }
});