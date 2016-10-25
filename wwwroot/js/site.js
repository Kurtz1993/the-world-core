(function () {
  var ele = $('#username');
  ele.text("Luis Hernandez");

  var main = $('#main');
  main.on("mouseenter", function () {
    main.css("background-color", "#888");
  });
  main.on("mouseleave", function () {
    main.css("background-color", "");
  });

  var menuItems = $('.menu-item > a');
  menuItems.on("click", function() {
    var me = $(this);
    alert(me.text());
  });
})();