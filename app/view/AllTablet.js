Ext.define('mjgApp.view.AllTablet', {
    extend: 'Ext.Container',
    xtype: 'alltablet',
    id:'allTablet',

    initialize: function () {
        if (this.getIsLoaded() === false) {
            this.setIsLoaded(true);
            var $container = $('#flip'),
                $pages = $container.children().hide();
            Modernizr.load({
                test: Modernizr.csstransforms3d && Modernizr.csstransitions,
                yep: ['js/jquery.tmpl.min.js', 'js/jquery.history.js', 'js/core.string.js', 'js/jquery.touchSwipe-1.2.5.js', 'js/jquery.flips.js'],
                nope: 'css/fallback.css',
                callback: function (url, result, key) {
                    if (url === 'css/fallback.css') {
                        $pages.show();
                    }
                    else if (url === 'js/jquery.flips.js') {
                        $('#flip').flips();
                    }

                }
            });
        }
        this.callParent(arguments);
        this.setContentEl('fliparea');
    },

    config: {
        bodyStyle: { backgroundColor: '#FFFFFF' },
        //contentEl: 'fliparea',
        isLoaded: false,
        isPainted: false,

        listeners: {

            painted: function (me, eOpts) {
                if (this.getIsPainted() === false) {
                    this.setIsPainted(true);
                    if (Ext.browser.is.IE) {
                        $('#theBrowser').html('this page does not work in Internet Explorer</br>use a WebKit browser (Chrome, FireFox or Safari)');
                    }
                    if (Ext.browser.is.WebKit) {
                        if (Ext.os.deviceType != 'Phone') {
                            if (Ext.os.deviceType != 'Tablet') {
                                $('#theBrowser').html('best viewed on iPad (but works great here too!)');
                                $("#buttonMobile").append('<button class="launch f16" onclick="v2pocbuild()">See live demo</button>')
                                $("#buttonEMSPEED12").append('<button class="launch f16" onclick="mjguitester()">See live demo</button>')
                            }
                            else {

                               
                                $("#buttonMobile").append('<br/><a target="_blank" class="lnk f30" href="http://v2pocbuild.azurewebsites.net/">See live demo (best on a mobile phone)</a>')
                                $("#buttonEMSPEED12").append('<br/><a target="_blank" class="lnk f30" href="http://mjguitester.azurewebsites.net/sites/97370/Portal.aspx">See live demo (best on the desktop)</a>')

                                //$("#buttonMobile").append('<span style="color:red;" class="f16" >Live demo at http://v2pocbuild.azurewebsites.net </span>')
                                //$("#buttonEMSPEED12").append('<span style="color:red;" class="f16" >Live demo at http://mjguitester.azurewebsites.net/sites/97370/Portal.aspx </span>')
                            }
                        }
                    }
                }
            }
        }
    }
});

//$(function () {
//    $('body').on('click', '.img-cont', function () {
//        var theBack = $(this).attr('back');
//        if (theBack != undefined) {
//            var overlay = Ext.Viewport.add({ xtype: 'details', title: 'Project Details', src: 'resources/images/' + 'f' + theBack + '.png', id: 'gmobile' });
//            overlay.show();
//            overlay.remove();
//        }
//    });
//});

function v2pocbuild() {
    window.open('http://v2pocbuild.azurewebsites.net/', 'demo', 'height=568,width=320,left=50,top=50,titlebar=no,toolbar=no,menubar=no,location=no,directories=no,status=no')
}

function mjguitester() {
    var h = screen.height - 200;
    var w = screen.width - 100;
    window.open('http://mjguitester.azurewebsites.net/sites/97370/Portal.aspx', 'demo', 'height=' + h  + ',width=' + w + ',left=50,top=50,titlebar=no,toolbar=no,menubar=no,location=no,directories=no,status=no')
}