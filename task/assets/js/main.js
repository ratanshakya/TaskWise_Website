$(document).ready(function(){
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 20) {
            $(".boardMainWrapper").addClass("scrDown");
        } else {
            $(".boardMainWrapper").removeClass("scrDown");
        }
    });
    $(".mainLoginWrapper").height($(window).height());

    $(".btnSignin").click(function(){
        $(this).parent().addClass("active");
        $(this).parent().next().slideDown();
        $(".loginWindowWrapper").addClass("removeOpacity");
    });

    
    $(".btnOtherSignin").popUp();
    // $(".popupwindow").popUp();
    // $('.miniCards').each(function(){
    //   var miniCardLength = $(this).text();
    //   var getPers = Math.min(10 * (miniCardLength), 100) + "%";
 
    //   $(this).css('height', getPers);
    // });

    // $("ul.boardNavigationContainer > li.boardNavigationItem > a.boardMenu").click(function(){
    //     if($(this).parent().hasClass("active")){
    //         $("ul.boardNavigationContainer > li.boardNavigationItem.hasChild").removeClass("active");
    //         $("ul.boardNavigationContainer > li.boardNavigationItem ul.boardChildNavigationContainer").removeClass("slideDown");
    //     } else{
    //         $("ul.boardNavigationContainer > li.boardNavigationItem.hasChild").removeClass("active");
    //         $("ul.boardNavigationContainer > li.boardNavigationItem ul.boardChildNavigationContainer").removeClass("slideDown");
    //         $(this).parent().addClass("active");
    //         $(this).next().addClass("slideDown");
    //     }
    // });
    // $("ul.boardNavigationContainer > li.boardNavigationItem ul.boardChildNavigationContainer li a.boardChildMenu").click(function(){
    //     if($(this).parent().parent().parent().hasClass("active")){
    //         $("ul.boardNavigationContainer > li.boardNavigationItem.hasChild").removeClass("active");
    //         $("ul.boardNavigationContainer > li.boardNavigationItem ul.boardChildNavigationContainer").removeClass("slideDown");
    //     }
    // });
    // const $menu = $("ul.boardNavigationContainer > li.boardNavigationItem > a.boardMenu, ul.boardNavigationContainer > li.boardNavigationItem ul.boardChildNavigationContainer *");
    // $(document).mouseup(e => {
    //     if (
    //       !$menu.is(e.target) && $menu.has(e.target).length === 0
    //     ) {
    //       // ... nor a descendant of the container
    //       $menu.parent().removeClass("active");
    //       $menu.next().removeClass("slideDown");
    //     }
    //   });
      
    //   /*=== Custom Popup ===*/

    //   var customSharePopup = $("#customSharePopup");
    //   var customPopupBtnShare = $('.customPopupBtn.share');
    //   var customPopupContent = $(".customPopupContent");

    //   $(customPopupBtnShare).click(function(){
    //     $(customSharePopup).show();
    //   });
    //   $(".customPopupContent > span.icon-add").click(function(){
    //     $(customSharePopup).hide();
    //   });

    //   var customBoardPopup = $("#customBoardPopup");
    //   var custBoardPopupBtnShare = $('.custBoardPopupBtn.share');
      
    //   var custTaskPopupBtnShare = $('.custTaskPopupBtn.share');
    //   var customTaskPopup = $("#customTaskPopup");

    //   $(custTaskPopupBtnShare).click(function(){
    //     $(customTaskPopup).show();
    //   });


    //   $(custBoardPopupBtnShare).click(function(){
    //     $(customBoardPopup).show();
    //   });

    //   $('.chkShareShow').click(function(){
    //     if($(this).prop("checked") == true){
    //         $('.shareEmailTable').slideDown();
    //     }
    //     else if($(this).prop("checked") == false){
    //         $('.shareEmailTable').slideUp();
    //     }
    // });

    //   $(document).mouseup(e => {
    //     if (
    //       !customPopupContent.is(e.target) && // if the target of the click isn't the container...
    //       customPopupContent.has(e.target).length === 0 && !$menu.is(e.target) && $menu.has(e.target).length === 0
    //     ) {
    //       // ... nor a descendant of the container
    //       $(customSharePopup).hide();
    //       $(customBoardPopup).hide();
    //       $(customTaskPopup).hide();
    //     }
        

    //   });

      /*=== Custom Popup ===*/

      $(".accessDropdownContainer button").click(function(){
         $(this).next().slideToggle(); 
      });
      
      
    /*$(".cardTitle").click(function(){
        $(".boardOverlay").addClass("overlayOpen");
    });

    $(".cardTitle").click(function(){
        $(this).find("dropdown-menu").popUp();
    });*/
});