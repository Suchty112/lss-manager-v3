(function () {
    $('head').prepend('<link href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic" rel="stylesheet" type="text/css">')

    $('body').prepend(
        '<style type="text/css" rel="stylesheet" id="lss-layout-nacht-01-style">' +
        '.well{background-image:none !important}div[id$="_outer"] .btn-default:focus,div[id$="_outer"] .btn-default:hover {color:#ee212a} div[id$="_outer"] ' +
        '.btn-default {background-color:#1d212a !important;color:#b9b9b9} .input-group-addon,.modal-content {border:0; background-color:#13151b}.table-striped>tbody>tr:nth-of-type(odd),' +
        '.lightbox_iframe,.dropdown-menu>li>a{border:0;background-color:#191F3A!important;color:#b9b9b9}.panel-heading, .panel-footer{background-color:#1d212a !important; color:#b9b9b9!important}' +
        '.navbar-default,.input-group-addon,.missionSideBarEntry,.panel-body{background-color:#13151b!important;color:#b9b9b9!important}#lost-menu a,.well,.dropdown-menu,.nav-tabs>li>a {color:#f5f5f5;background-color:#1d212a!important}.map_position_mover{color:#b9b9b9!important}' +
        'html,body,#missions_outer,#buildings_outer,#chat_outer,#radio_outer,#bigMapWindow,#lightbox_box,.close{background-color:#0a0b0e !important;color:#b9b9b9}' +
        'html,body.dark,#missions_outer,#buildings_outer,#chat_outer,#radio_outer,#bigMapWindow,#lightbox_box,.close{background-color:#0a0b0e !important;color:#b9b9b9}' +
        'html,body.dark,#iframe-inside-container,#iframe-bottom-content,.navbar,.navbar-default,.navbar-fixed-bottom{background-color:#13151b!important;color:#b9b9b9!important}' + //im Iframe aka in den Einsätzen und bei allianz geht es noch nicht
        'input,textarea{background-color:#151a31!important;border:0} .progress {background-color: #486683!important}' +
        '.alert {filter;brightness(.7);-webkit-filter;brightness(.7);}' +
        '.leaflet-tile { filter: invert(1) grayscale(.7); -webkit-filter: invert(1) grayscale(.7); }' +
        '</style>'
    );
})();
