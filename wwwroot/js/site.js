(function () {
  var $sidebarAndWrapper = $("#sidebar,#wrapper");

  $("#sidebar-toggle").on("click", function () {
    $sidebarAndWrapper.toggleClass("hide-sidebar");

    if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
      $(this).text("Show Sidebar");
    } else {
      $(this).text("Hide Sidebar");
    }
  });

})();