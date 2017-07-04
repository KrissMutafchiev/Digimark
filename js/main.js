/**
 * Created by krisd3v on 3.7.2017 г..
 */
$(document).ready(function () {
   function init() {

   }


   // Button color on click changes
   $('.btn-header').mousedown(function () {
       var btn = $(this);
       btn.css('background-color','#0A97D6');
   }).mouseup(function () {
       var btn = $(this);
       btn.css('background-color','#01bad6');
   });




    init()
});
