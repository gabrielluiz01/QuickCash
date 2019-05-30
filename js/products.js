$(document).ready(function(){
 
$("#mostrar").click(function(event){
 var link = $(this);
 
if(link.attr("id").match("esconder"))
 $(".containerCash").hide("slow");
else
 $(".containerCash").show("slow");
 
event.preventDefault();
 
 });
 
})
$(document).ready(function(){
 
$("#card").click(function(event){
 var link = $(this);
 
if(link.attr("id").match("esconder"))
 $(".containerCard").hide("slow");
else
 $(".containerCard").show("slow");
 
event.preventDefault();
 
 });
 
})
$(document).ready(function(){
 
$("#account").click(function(event){
 var link = $(this);
 
if(link.attr("id").match("esconder"))
 $(".containerAccount").hide("slow");
else
 $(".containerAccount").show("slow");
 
event.preventDefault();
 
 });
 
})