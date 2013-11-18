/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/





function getQueryStrings() {
    var assoc = {};
    var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
    var queryString = location.search.substring(1);
    var keyValues = queryString.split('&');

    for (var i in keyValues) {
        var key = keyValues[i].split('=');
        if (key.length > 1) {
            assoc[decode(key[0])] = decode(key[1]);
        }
    }
    return assoc;
};

var qs = getQueryStrings();
var myParam = qs["key"];
if (myParam === undefined || myParam === null) {
    myParam = 'none';
};
var org = '';
var info = '';






switch (myParam) {
    case 'v784lt2':
        org = 'Validus'
        info = '(847)331-2020<br />mgusmano@yahoo.com';
        doDB();
        break;
    case 'l923lk9':
        org = 'LogicNation'
        info = '(847)331-2020<br />mgusmano@yahoo.com';
        doDB();
        break;
    case 'm411lw7':
        org = 'MB2X'
        info = '(847)331-2020<br />mgusmano@yahoo.com';
        doDB();
        break;

    case 'mg21451':
        org = 'mjg'
        info = 'EMail: mgusmano@hitachiconsulting.com';
        doDB();
        break;
    case 'd861bx2':
        org = 'Dave Bost'
        info = '(847)331-2020<br />mgusmano@yahoo.com';
        doDB();
        break;
    case 't156lw5':
        org = 'monster'
        info = '(847)331-2020<br />mgusmano@yahoo.com';
        doDB();
        break;
    case 't982lq1':
        org = 'org2'
        info = '(847)331-2020<br />mgusmano@yahoo.com';
        doDB();
        break;
    case 't065lk5':
        org = 'org3'
        info = '(847)331-2020<br />mgusmano@yahoo.com';
        doDB();
        break;
    default:
        org = 'badKey';
        info = '(847)331-2020<br />mgusmano@yahoo.com';
        doDB();
}

window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
    var e = errorMsg + ' ' + url + ' ' + lineNumber;
    window.location.href = "http://www.azurewebsites.net/SiteUnavailable.htm?e=" + e;
    return false;
}

function doDB() {
    try {
        writeIt(theIp);

        //$.ajax({
        //    type: "GET",
        //    url: 'http://smart-ip.net/geoip-json?callback=?',
        //    dataType: 'json',
        //    success: function (data) {
        //        writeIt(data.host);
        //    },
        //    failure: function (data) {
        //        writeIt('none');
        //    }
        //});
    }
    catch (e) {
        var item = {
            error: $.param(e)
        };
        logTable.insert(item)
        .done(function (item) {
            if (item.org === 'badKey') {
                window.location.href = "http://www.azurewebsites.net/SiteUnavailable.htm?e=e";
            }
        })

    }
};

function writeIt(theIp) {
    var client = new WindowsAzure.MobileServiceClient("https://mjgapp.azure-mobile.net/", "HQlvofWBFPgZYxHoMoRbbHoQTefBwq84");

    var ip = theIp;
    var href = window.location.href;
    var appname = window.navigator.appName;
    var useragent = window.navigator.userAgent;
    var devicetype = Ext.os.deviceType;
    var osname = Ext.os.name;
    var datetime = new Date().toString();
    var item = {
        org: org,
        devicetype: devicetype,
        osname: osname,
        datetime: datetime,
        ip: ip,
        key: myParam,
        href: href,
        useragent: useragent,
        error: ''
    };
    var logTable = client.getTable('log');
    logTable.insert(item)
    .done(function (item) {
        if (item.org === 'badKey') {
            window.location.href = "http://www.azurewebsites.net/SiteUnavailable.htm?e=b";
        }
    })
};

Ext.application({
    name: 'mjgApp',

    requires: [
        'Ext.MessageBox'
    ],

    views: [
        'Main',
        'Cover',
        'Dashboard',
        'AllTablet',
        'CurrentTablet',
        'CurrentPhone',
        'PastPhone',
        'ImagePanel',
        'ImageCallout',
        'Details'
],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function () {

        //this.doDB();

        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        Ext.Viewport.bodyElement.on('resize', Ext.emptyFn, this, { buffer: 1 });
        Ext.Viewport.on('orientationchange', function (me, orientation, width, height, eOpts) {
            Ext.getCmp('coverHistory').refresh();
        });



        // Initialize the main view
        Ext.Viewport.add(Ext.create('mjgApp.view.Main'));



        //var menu = Ext.create("Ext.Menu", {
        //    width: '265px',
        //    scrollable: 'vertical',
        //    cls: 'mainmenu x-header-dark',
        //    layout: 'vbox',
        //    style: {
        //        backgroundColor: '#061f31'
        //    },
        //    items: [
        //        { xtype: 'container', margin: '0 20 0 20', defaults: { xtype: "menubutton" }, items: items },
        //        {
        //            xtype: 'container', margin: '0 20 0 20',
        //            items: [
        //                { text: 'one' },
        //                { text: 'two' }
        //            ]
        //        }
        //    ]


        //});
        //Ext.Viewport.setMenu(menu, { side: 'left', reveal: true });


    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
