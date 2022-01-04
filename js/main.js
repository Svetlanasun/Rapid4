$(function() {

	$('.menu-burger__header').click(function(){		
        $('.menu-burger__header').toggleClass('open-menu');
        $('#header__nav1').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});

$('.header__logo_phone').click(function(){		
        $('.header__logo_phone').toggleClass('open-menu');
        $('#header__nav2').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});


$('.select_device').click(function(){		
	$(".step_1").css("display","none");
		$(".step_3").css("display","block");
});
$('.select_location').click(function(){		
	$(".step_1").css("display","none");
		$(".step_2").css("display","block");
});


$('#tab-btn-1').prop('checked', true);
$('#tab-btn-1').click(function(){
	if ($(this).is(':checked')){
		$(".store__main").css("display","none");
		$("#store__main_1").css("display","block");
	} 
});   
$('#tab-btn-2').click(function(){
	if ($(this).is(':checked')){
		$(".store__main").css("display","none");
		$("#store__main_2").css("display","block");
	} 
}); 
$('#tab-btn-3').click(function(){
	if ($(this).is(':checked')){
		$(".store__main").css("display","none");
		$("#store__main_3").css("display","block");
	} 
}); 
$('#tab-btn-4').click(function(){
	if ($(this).is(':checked')){
		$(".store__main").css("display","none");
		$("#store__main_4").css("display","block");
	} 
});  





function clickTabs(tab,block){
$(".step_1").css("display","block");
	$(".step_2").css("display","none");
	$(".step_3").css("display","none");
	$(".step_4").css("display","none");
	if (tab.is(':checked')){
		$(".fix__device_main").css("display","none");
		block.css("display","block");
	} 
}



$('#tab-btn-fix-1').click(function(){
	clickTabs($('#tab-btn-fix-1'),$("#fix__device_main_1"));
	if ($('#tab-btn-fix-1').is(':checked')){
$('#fix__device_tabs_img_1').attr("src","./img/tabs/active/phone.png");
$('#fix__device_tabs_img_2').attr("src","./img/tabs/tablet.png");
$('#fix__device_tabs_img_3').attr("src","./img/tabs/computer.png");
$('#fix__device_tabs_img_4').attr("src","./img/tabs/other.png");
}
});

$('#tab-btn-fix-2').click(function(){
		clickTabs($('#tab-btn-fix-2'),$("#fix__device_main_2"));
if ($('#tab-btn-fix-2').is(':checked')){
$('#fix__device_tabs_img_2').attr("src","./img/tabs/active/tablet.png");
$('#fix__device_tabs_img_1').attr("src","./img/tabs/phone.png");
$('#fix__device_tabs_img_3').attr("src","./img/tabs/computer.png");
$('#fix__device_tabs_img_4').attr("src","./img/tabs/other.png");
}

		
}); 
$('#tab-btn-fix-3').click(function(){
	clickTabs($('#tab-btn-fix-3'),$("#fix__device_main_3"));
	if ($('#tab-btn-fix-3').is(':checked')){
$('#fix__device_tabs_img_3').attr("src","./img/tabs/active/computer.png");
$('#fix__device_tabs_img_1').attr("src","./img/tabs/phone.png");
$('#fix__device_tabs_img_2').attr("src","./img/tabs/tablet.png");
$('#fix__device_tabs_img_4').attr("src","./img/tabs/other.png");
}

	
}); 
$('#tab-btn-fix-4').click(function(){
		clickTabs($('#tab-btn-fix-4'),$("#fix__device_main_4"));
		if ($('#tab-btn-fix-4').is(':checked')){
$('#fix__device_tabs_img_4').attr("src","./img/tabs/active/other.png");
$('#fix__device_tabs_img_1').attr("src","./img/tabs/phone.png");
$('#fix__device_tabs_img_2').attr("src","./img/tabs/tablet.png");
$('#fix__device_tabs_img_3').attr("src","./img/tabs/computer.png");
}

		
});  

 $('.select_device').click(function(){	
		$(".step_1").css("display","none");
		$(".step_3").css("display","block");	
}); 
  $('.select_location').click(function(){	
		$(".step_1").css("display","none");
		$(".step_2").css("display","block");	
}); 
   $('.list__address_div').click(function(){	
		$(".step_2").css("display","none");
		$(".step_3").css("display","block");	
}); 
      $('.select_brand_model').click(function(){	
      	$(".step_3").css("display","none");
		$(".step_4").css("display","block");	
});


      $('.question__button').click(function(){	
      	$(".overlay").fadeIn(300);
      	$(".modal").fadeIn(300);      
      }); 
      $('.modal__close').click(function(){	
      	$(".overlay").fadeOut(300);
      	$(".modal").fadeOut(300);      
      }); 
      $('#modal_contact').click(function(){	
      	$(".overlay").fadeOut(300);
      	$(".modal").fadeOut(300);      
      }); 
      


function Accordion(className) {
	var accordion = className;
var i;

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function() {
    
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
}
Accordion($(".list__address_div"));
Accordion($(".accordion__button"));





$( ".fix__device_main_div_icon" ).hover(
  function() {  	
  	let el = $(this).find(".fix__device_main_icon");
  	let src = el.attr("src");  	
  	let arr =src.split('/');  	
		arr.splice(3, 0, "active");
		let newSrc=arr.join().replaceAll(',','/')
		// console.log(newSrc);  
    el.attr("src",newSrc);
   }
, function() {
		let el = $(this).find(".fix__device_main_icon");
  	let src = el.attr("src");
  	let arr =src.split('/');  	
		arr.splice(3, 1);
		let newSrc=arr.join().replaceAll(',','/')
     el.attr("src",newSrc);
}
    );




if ($('#tab-btn-fix-1').is(':checked')){
$('#fix__device_tabs_img_1').attr("src","./img/tabs/active/phone.png")
}
else{
	$('#fix__device_tabs_img_1').attr("src","./img/tabs/phone.png")
}

$( ".fix__device_item" ).hover(
  function() {
  	let el = $(this).find(".fix__device_tabs_img");
  	let src = el.attr("src");
  	
  	let arr =src.split('/');  	
  	if (arr.indexOf('active') == -1) {
    // Выполнение кода, если элемент в массиве найден

		arr.splice(3, 0, "active");
		let newSrc=arr.join().replaceAll(',','/')
		// console.log(newSrc);  
     el.attr("src",newSrc);
     }
     if ($('#tab-btn-fix-1').is(':checked')){
$('#fix__device_tabs_img_1').attr("src","./img/tabs/active/phone.png")
}
if ($('#tab-btn-fix-2').is(':checked')){
$('#fix__device_tabs_img_2').attr("src","./img/tabs/active/tablet.png")
}
if ($('#tab-btn-fix-3').is(':checked')){
$('#fix__device_tabs_img_3').attr("src","./img/tabs/active/computer.png")
}
if ($('#tab-btn-fix-4').is(':checked')){
$('#fix__device_tabs_img_4').attr("src","./img/tabs/active/other.png")
}

   }
, function() {

let el = $(this).find(".fix__device_tabs_img");
  	let src = el.attr("src");
  	let arr =src.split('/');  	
		arr.splice(3, 1);
		let newSrc=arr.join().replaceAll(',','/')
     el.attr("src",newSrc);


if ($('#tab-btn-fix-1').is(':checked')){
$('#fix__device_tabs_img_1').attr("src","./img/tabs/active/phone.png")
}
if ($('#tab-btn-fix-2').is(':checked')){
$('#fix__device_tabs_img_2').attr("src","./img/tabs/active/tablet.png")
}
if ($('#tab-btn-fix-3').is(':checked')){
$('#fix__device_tabs_img_3').attr("src","./img/tabs/active/computer.png")
}
if ($('#tab-btn-fix-4').is(':checked')){
$('#fix__device_tabs_img_4').attr("src","./img/tabs/active/other.png")
}
     
}
    );



});