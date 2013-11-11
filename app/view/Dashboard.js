Ext.define('mjgApp.view.Dashboard', {
    extend: 'Ext.Container',
    xtype: 'dashboard',

    config: {
        title: null,
        layout: 'vbox',
        items: [
		{
		    xtype: 'cover',
		    flex: 1,
		    itemCls: 'my-cover-item',
		    //These are just for demo purposes.
		    id: 'coverHistory',
		    height:  300 ,
		    width: '100%',
		    //height: (Ext.os.deviceType !== 'Phone')? 300: undefined,
		    //width: (Ext.os.deviceType !== 'Phone')? 800: undefined,
		    //end-demo
		    itemTpl : [
				'<div style="width:200px;height:200px;border-style:solid;border-width:1px;background-color:white;padding:5px 5px 5px 5px;">',
                    '<div style="font-size:14px;font-weight:bold;color:#146BA8;font-style:italic;">{company}</div>',
                    '<div style="font-size:10px;font-weight:bold;color:#146BA8;">{title}</div>',
                    '<div style="font-size:10px;font-weight:bold;color:#000000;">{tenure}</div>',
                    '<div style="font-size:10px;margin:5px 0px 0px 0px;">{summary} </div>',
                    '<button co="{co}" name="{company}" class="more" style="font-size:10px;margin:5px 0px 0px 140px;">more</button>',
				'</div>'
		    ],
		    store: Ext.create("Ext.data.Store", { 
		        fields: ['co', 'company', 'title', 'tenure', 'summary'],
		        data: [
                    { co: 'hitachi', company: 'Hitachi Consulting', title: 'Senior Manager/Architect', tenure: 'Oct 2009 - Present', summary: 'Senior Manager with Hitachi Consulting based in the Houston office. Involved in assisting and mentoring clients in the development and implementation of solutions that utilize Microsoft SharePoint related technologies including ASP.NET and HTML5.' },
                    { co: 'img', company: 'The Information Management Group', title: 'Partner', tenure: 'Sept 1997- Oct 2009', summary: 'Director of Emerging Technologies, responsible for fostering an understanding of how new and emerging technologies could be utilized for IMG and its clients.  Lead Technical Trainer focusing on Microsoft Development technologies.' },
                    { co: 'bismarck', company: 'The Bismarck Group', title: 'Founder', tenure: 'Mar 1995 - Sept 1997', summary: 'Chief Technology Officer, responsible for providing Client Server software integration services to high growth, information-centric organizations and for building solutions that could be sold as \'Customizable Software Products\'.' },
                    { co: 'lante', company: 'Lante Corporation', title: 'Director of Consulting', tenure: 'Nov 1992 - Mar 1995', summary: 'Director of Consulting, responsible for the entire consulting organization, including all aspects of project execution, profit and loss (utilization) responsibility,  performance reviews,  recruiting,  and staffing.' },
                    { co: 'andersen', company: 'Andersen Consulting', title: 'Manager', tenure: 'May 1984 - Nov 1992', summary: 'Staff Consultant and Manager in the Chicago office, spending first 4 years on a variety of medium and large systems development projects. Promoted to a Project Manager after four years and moved to role with Emerging Technologies Group.' }
		        ]
		    }),

		    selectedIndex: 2
		    //listeners:{
		    //    itemdoubletap: function(){
		    //        console.log('itemdbltap', arguments);
		    //    },
		    //    itemtap: function(cover, idx){
		    //        console.log('itemtap', arguments);
		    //    },
		    //    scope: this
		    //}
		}
 
        ],
        listeners: {
            activate: function (newActiveItem, me, oldActiveItem, eOpts) {
                var me = newActiveItem;
                //com.setTitle(me, 'Welcome Marc');
                try {
                }
                catch (exception) {
                }
            }
        }
    }

});

$(function () {
    $('body').on('click', '.more', function () {

        var co = $(this).attr('co');
        var name = $(this).attr('name');

        var overlay = Ext.Viewport.add({ xtype: 'basepanel', title: name, src: 'resources/images/' + co + '.jpg' });
        overlay.show();
        overlay.remove();
    });
});