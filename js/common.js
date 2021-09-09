$(document).ready(function () {
    
    // Tab Script
    
    $(".tabList li").click(function () {
        var contClass = $(this).attr("data-rel");
        $(".tabList li").removeClass("activeList");
        $(this).addClass("activeList");
        $(".tabcontent").hide();
        $("." + contClass).show();
    });
    
    // Menu script
    
    $(".deviceShow").click(function(){
        $(".nav").toggle(200);
    })
    
    // Spectrum Script
    
    $("#heading1,#heading6").spectrum({
        color: "#FB0A11",
        preferredFormat: "hex",
        showInput: true,
        showPalette: true,
        palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]],
        hide: function(c) {
            var $color = c.toHexString();
            colorEdit($color);
        }
    });
    $("#heading2,#heading3,#heading4,#heading5").spectrum({
        color: "#ffffff",
        preferredFormat: "hex",
        showInput: true,
        showPalette: true,
        palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]],
        hide: function(c) {
            var $color = c.toHexString();
            colorEdit($color);
        }
    });
    $("#sidebar1,#sidebar4").spectrum({
        color: "#FB0A11",
        preferredFormat: "hex",
        showInput: true,
        showPalette: true,
        palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]],
        hide: function(c) {
            var $color = c.toHexString();
            colorEdit($color);
        }
    });
    $("#sidebar2,#sidebar3").spectrum({
        color: "#ffffff",
        preferredFormat: "hex",
        showInput: true,
        showPalette: true,
        palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]],
        hide: function(c) {
            var $color = c.toHexString();
            colorEdit($color);
        }
    });
    $("#sidebar5").spectrum({
        color: "#000000",
        preferredFormat: "hex",
        showInput: true,
        showPalette: true,
        palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]],
        hide: function(c) {
            var $color = c.toHexString();
            colorEdit($color);
        }
    });
    $("#sidebar6").spectrum({
        color: "#F4C9C2",
        preferredFormat: "hex",
        showInput: true,
        showPalette: true,
        palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]],
        hide: function(c) {
            var $color = c.toHexString();
            colorEdit($color);
        }
    });
    $("#main1").spectrum({
        color: "#F4C9C2",
        preferredFormat: "hex",
        showInput: true,
        showPalette: true,
        palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]],
        hide: function(c) {
            var $color = c.toHexString();
            colorEdit($color);
        }
    });
    $("#main2,#main3").spectrum({
        color: "#FB0A11",
        preferredFormat: "hex",
        showInput: true,
        showPalette: true,
        palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]],
        hide: function(c) {
            var $color = c.toHexString();
            colorEdit($color);
        }
    });
    $("#main4").spectrum({
        color: "#ffffff",
        preferredFormat: "hex",
        showInput: true,
        showPalette: true,
        palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]],
        hide: function(c) {
            var $color = c.toHexString();
            colorEdit($color);
        }
    });
    $("#main5").spectrum({
        color: "#daa631",
        preferredFormat: "hex",
        showInput: true,
        showPalette: true,
        palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]],
        hide: function(c) {
            var $color = c.toHexString();
            colorEdit($color);
        }
    });
    $(".sp-choose").text("Set color");
    
    // Color editw Script
    
    $(".sp-replacer").on("click", function(){
        var inputId = $(this).siblings("input").attr("id");
        var inputVal = $(this).parent(".inputField").find("input").attr("title");
        $(".currentSp").val(inputId);
        $(".currentSp").attr("title",inputVal);
    });
    
});
function colorEdit($color){
    var $title = $(".currentSp").attr("title");
    var $value = $(".currentSp").val();
    if($title == "bgColor"){
        $("."+$value).css("background-color",$color);
    }else{
        $("."+$value).css("color",$color);
    }
}