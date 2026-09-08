window.ml_webform_success_45677846 = function () {
  const container = document.querySelector(".ml-subscribe-form-45677846");
  const form = container?.querySelector(".row-form");
  const success = container?.querySelector(".row-success");

  if (form) form.hidden = true;
  if (success) success.hidden = false;
};

fetch("https://assets.mailerlite.com/jsonp/1650855/forms/198001845813118674/takel", {
  mode: "no-cors",
}).catch(() => {});
