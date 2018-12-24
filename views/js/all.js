$("#myonoffswitch").click(function () {
    $(".tab").hide();
    if ($("#myonoffswitch").is(':checked')) {
        $("#yes").show();
    } else {
        $("#no").show();
    }
    //alert($('#myonoffswitch').attr('checked'));
});
