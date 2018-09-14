$(document).ready(function() {
  console.log("ready!");
});
var $about = $("#about");
var $projects = $("#projects");
var $social = $("#social");
var $contact = $("#contact");

$about.on("click", function() {
  window.location = "/about";
});
$projects.on("click", function() {
  window.location = "/projects";
});
$social.on("click", function() {
  window.location = "/socialmedia";
});
$contact.on("click", function() {
  window.location = "/contact";
});
