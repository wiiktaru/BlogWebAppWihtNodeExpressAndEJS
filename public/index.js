$(document).ready(function () {
  $(".delete").click(function () {
    const blogId = $(this).data("id");
    $(`#${blogId}`).addClass("hidden");
  });
});

// TODO add functionality for blog editing
$(".edit").click(function () {
  $("#edit-form-container").removeClass("hidden");
});
