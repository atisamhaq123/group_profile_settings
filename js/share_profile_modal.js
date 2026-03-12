require(['jquery'], function ($) {
    
    $(document).on('click', '.open_share_profile_modal', function () {
        $("#share-profile-popup").removeClass("d-none");
        $(".backdrop-level-2").addClass("active");
    });
    
    $(document).on('click', '.share-profile-popup .close_box', function () {
        $("#share-profile-popup").addClass("d-none");
        $(".backdrop-level-2").removeClass("active");

    });

});