/*
Template Name: Olester
Author: <a href="https://www.os-templates.com/">OS Templates</a>
Author URI: https://www.os-templates.com/
Licence: Free to use under our free template licence terms
Licence URI: https://www.os-templates.com/template-terms
File: Mobile Menu JS

Thanks to:
"Convert a Menu to a Dropdown for Small Screens" from Chris Collier - http://css-tricks.com/convert-menu-to-dropdown/
"Submenu's with a dash" Daryn St. Pierre - http://jsfiddle.net/bloqhead/Kq43X/
*/

$('<form action="#"><select /></form>').appendTo("#navigation");$("<option />",{selected:"selected",value:"",text:"MENU"}).appendTo("#navigation select");$("#navigation a").each(function(){var e=$(this);if($(e).parents("ul ul ul").length>=1){$("<option />",{value:e.attr("href"),text:"- - - "+e.text()}).appendTo("#navigation select")}else if($(e).parents("ul ul").length>=1){$("<option />",{value:e.attr("href"),text:"- - "+e.text()}).appendTo("#navigation select")}else if($(e).parents("ul").length>=1){$("<option />",{value:e.attr("href"),text:""+e.text()}).appendTo("#navigation select")}else{$("<option />",{value:e.attr("href"),text:e.text()}).appendTo("#navigation select")}});$("#navigation select").change(function(){if($(this).find("option:selected").val()!=="#"){window.location=$(this).find("option:selected").val()}})