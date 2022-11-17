$(function () {
    // Change Password tips
    function bottompopupScale () {
        $(".bottompopup").addClass("slideUp");
    }
    setTimeout(bottompopupScale,1500)
    $(".bottompopup .icon-clear").click(function(){
        $(".bottompopup").hide();
    });
    $(".bottompopup .btn-default").click(function(){
        $(".bottompopup").hide();
    });
});
$(function () {
    // 切換 dropdown
    // $(".c-lobby-dropdown > .c-lobby-btn").on("touchstart, click", function(){
    //     $(this).parent().toggleClass("is-open");
    // });
    $(".c-lobby-dropdown > .c-lobby-btn:not(.c-lobby-btn--icon)").on("click", function(){
        $(this).parent().attr("data-open") == "true" ? $(this).parent().attr("data-open","false") : $(this).parent().attr("data-open","true");
    });
});
$(function () {

    // .balance open
    $(".c-lobby-tabbar__item:nth-child(2)").on("click", function(){
        $(this).attr("data-selected") == "true" ? $(this).attr("data-selected","false") : $(this).attr("data-selected","true");

        // $(".c-lobby-balance").attr("data-open") == "true" ? $(".c-lobby-balance").attr("data-open","false") : $(".c-lobby-balance").attr("data-open","true");

        var $balance = $(this).parent().siblings(".c-gc-balance");
        $balance.attr("data-open") == "true" ? $balance.attr("data-open", "false") : $balance.attr("data-open","true");
    });

    // Click .c-lobby-overlay to close popup
    $(".c-lobby-overlay").on("click", function(){
        $(this).siblings().attr("data-open","false");
        $(".c-lobby-tabbar__item").removeAttr("data-selected");
    });

    // .more open
    // $(".c-lobby-tabbar__item:last-child").on("click", function(){
    //     $(".c-lobby-more").attr("data-open") == "true" ? $(".c-lobby-more").attr("data-open","false") : $(".c-lobby-more").attr("data-open","true");
    // });

    // Click open Saba Sports
    $(".c-lobby-icon.c-lobby-icon-saba-logo").on("click", function(){
        $("html").attr("data-c-frame") == "open" ? $("html").removeAttr("data-c-frame") : $("html").attr("data-c-frame","open");
        $(".c-frame").attr("data-open") == "true" ? $(".c-frame").attr("data-open","false") : $(".c-frame").attr("data-open","true");
    });
});
$(function () {
    // 切換 dark mode
    $(".c-lobby-switch-darkmode").on("click", function(){
        var $thisHtml = $(this).closest("html");
        if($thisHtml.attr("data-darkmode") == "true") {
            $thisHtml.removeAttr("data-darkmode");
            return false;
        }else{
            $thisHtml.attr("data-darkmode","true");
            return false;
        }
        // $("html").attr("data-darkmode") == "true" ? $("html").removeAttr("data-darkmode") : $("html").attr("data-darkmode", "true");
        // var $thisHtml = $(this).closest("html");
        // $thisHtml.attr("data-darkmode") == "true" ? $thisHtml.removeAttr("data-darkmode") : $thisHtml.attr("data-darkmode", "true");
    });

});
$(function () {
    // Me - Setting 開啟
    $(".c-lobby-tabbar .c-lobby-tabbar__item:last-child .c-lobby-tabbar__btn").on("touchstart, click", function(){
        $(".page-setting").attr("data-status", "is-open").closest("body").attr("data-status", "is-page-open");
    });

    // Me - Setting 關閉
    $(".c-lobby-tabbar .c-lobby-tabbar__item:first-child .c-lobby-tabbar__btn").on("touchstart, click", function(){
        $(".page-setting").removeAttr("data-status", "is-open").closest("body").removeAttr("data-status", "is-page-open");
    });


    // .c-page-list .c-btn 切換 / 同步打開 Switch 與 Textfield
    $(".c-page:not(:nth-child(8)):not(:nth-child(9)):not(:nth-child(10)):not(:nth-child(12)) .c-page-list__item .c-btn").on("touchstart, click", function(){
        $(this).attr("data-selected") == "true"
        ? $(this).attr("data-selected", "false").siblings(".c-page-list__subitem").attr("data-open", "false").siblings(".c-btn").find(".c-switch-btn").attr("data-switch", "off")
        : $(this).attr("data-selected", "true").siblings(".c-page-list__subitem").attr("data-open", "true").siblings(".c-btn").find(".c-switch-btn").attr("data-switch", "on")

        $(this).closest(".c-page-list__item").siblings(".c-page-list__item").find(".c-btn").attr("data-selected", "false").siblings(".c-page-list__subitem").attr("data-open", "false");
    });

    // Textfield-Group Click 收合 c-keypad
    $(".c-textfield-group").on("touchstart, click", function(){
        $(this).closest(".c-page-list__subitem").find(".c-keypad").attr("data-open") == "true" ? $(this).closest(".c-page-list__subitem").find(".c-keypad").attr("data-open", "false") : $(this).closest(".c-page-list__subitem").find(".c-keypad").attr("data-open", "true");
    });
    $(".c-page-list__subitem .c-keypad .c-keypad__btn:nth-child(11)").on("touchstart, click", function(){
        $(this).closest(".c-keypad").attr("data-open","false");
    });

    // Textfield Click Selected 狀態
    $(".c-textfield-group .c-textfield").on("touchstart, click", function(){
        $(this).attr("data-selected","true");
    });
    $(".c-textfield-group .c-textfield").on("mouseout", function(){
        $(this).attr("data-selected","false");
    });


    // Me - 關閉
    $(".c-page .c-page__header .c-header-bar >.c-btn").on("touchstart, click", function(){
        $(this).closest(".c-page").attr("data-open", "false");
    });

    // Me - Nickname Edit 開啟
    $(".c-me-account__info .c-text-group .c-btn").on("touchstart, click", function(){
        $(this).closest("#MePage").find("#MeSubPage").children(".c-page:nth-child(1)").attr("data-open", "true");
    });

    // Me - Message 開啟
    $(".c-me-account > .c-btn").on("touchstart, click", function(){
        $(this).closest("#MePage").find("#MeSubPage").children(".c-page:nth-child(2)").attr("data-open", "true");
    });

    // Me - Odds Type Setting 開啟
    $(".c-me-bet-setting__content .c-me-bet-setting__item:nth-child(1) .c-btn").on("touchstart, click", function(){
        $(this).closest("#MePage").find("#MeSubPage").children(".c-page:nth-child(3)").attr("data-open", "true");
    });

    // Me - Default Stake Setting 開啟
    $(".c-me-bet-setting__content .c-me-bet-setting__item:nth-child(2) .c-btn").on("touchstart, click", function(){
        $(this).closest("#MePage").find("#MeSubPage").children(".c-page:nth-child(4)").attr("data-open", "true");
    });

    // Me - Personalize Quick Bet Setting 開啟
    $(".c-me-bet-setting__content .c-me-bet-setting__item:nth-child(3) .c-btn").on("touchstart, click", function(){
        $(this).closest("#MePage").find("#MeSubPage").children(".c-page:nth-child(5)").attr("data-open", "true");
    });

    // Me - Better Odds Setting 開啟
    $(".c-me-bet-setting__content .c-me-bet-setting__item:nth-child(4) .c-btn").on("touchstart, click", function(){
        $(this).closest("#MePage").find("#MeSubPage").children(".c-page:nth-child(6)").attr("data-open", "true");
    });

    // Me - Event Sorting Setting 開啟
    $(".c-me-bet-setting__content .c-me-bet-setting__item:nth-child(5) .c-btn").on("touchstart, click", function(){
        $(this).closest("#MePage").find("#MeSubPage").children(".c-page:nth-child(7)").attr("data-open", "true");
    });

    // Me - Sport Sorting Setting 開啟
    $(".c-me-bet-setting__content .c-me-bet-setting__item:nth-child(6) .c-btn").on("touchstart, click", function(){
        $(this).closest("#MePage").find("#MeSubPage").children(".c-page:nth-child(8)").attr("data-open", "true");
    });

    // Me - Password Edit 開啟
    $(".c-me-list .c-me-list__item:first-child .c-me-list__value .c-btn").on("touchstart, click", function(){
        $(this).closest("#MePage").find("#MeSubPage").children(".c-page:nth-child(9)").attr("data-open", "true");
    });

    // Me - Password gesturePassword 開啟
    $(".c-page:nth-child(9) .c-page__container .c-page-list .c-switch-btn").on("touchstart, click", function(){
        $(this).closest("#MeSubPage").children(".c-page:nth-child(10)").attr("data-open", "true");
    });

    // Me - Language Setting 開啟
    $(".c-me-list .c-me-list__item:nth-child(2) .c-me-list__value .c-btn").on("touchstart, click", function(){
        $(this).closest("#MePage").find("#MeSubPage").children(".c-page:nth-child(11)").attr("data-open", "true");
    });

    // Me - Contact us 開啟
    $(".c-me-list .c-me-list__item:nth-child(3) .c-me-list__value .c-btn").on("touchstart, click", function(){
        $(this).closest("#MePage").find("#MeSubPage").children(".c-page:nth-child(12)").attr("data-open", "true");
    });


    $(".c-me-wallet__main .c-btn--icon").on("touchstart, click", function(){
        $(this).closest(".c-me-wallet").attr("data-open") == "true" ? $(this).closest(".c-me-wallet").attr("data-open", "false") : $(this).closest(".c-me-wallet").attr("data-open", "true");
    });
});
$(function () {
    // msg--noconnect - Show
    // setTimeout(function(){
    //     $(".c-msg.c-msg--noconnect").attr("data-show","true");

    //     // msg--noconnect - Remove after 5secs
    //     setTimeout(function(){
    //         $(".c-msg.c-msg--noconnect").removeAttr("data-show");
    //     },8000);
    // },2500);

    // msg--reconnect - Show
    // setTimeout(function(){
    //     $(".c-msg.c-msg--reconnect").attr("data-show","true");

    //     // msg--reconnect - Remove after 5secs
    //     setTimeout(function(){
    //         $(".c-msg.c-msg--reconnect").removeAttr("data-show");
    //     },8000);
    // },11500);

    // msg--um - Show
    setTimeout(function(){
        $(".c-gc-msg.c-gc-msg--um").attr("data-open","true");
    },2500);
    $(".c-gc-msg.c-gc-msg--um .c-gc-icon--clear").on("click", function(){
        $(this).closest(".c-gc-msg--um").attr("data-open","false");
    });
});
$(function () {
    // 判斷 Scroll高度 超過 header + banner 收合 navigation
    $(document).scroll(function () {
        var cbanner = $(".c-lobby-banner-swiper").height();
        var cheader = $(".c-lobby-header").height();
        // var cnav = $(".c-lobby-navigation").height();
        var total = cbanner + cheader;
        window.scrollY > total ? $(".c-lobby-navigation").attr("data-sticky", "true") : $(".c-lobby-navigation").attr("data-sticky","false");
    })


    // 點擊 Navigation 使相對應 product 顯示
    // $(".c-lobby-navigation__item").on("click", function(){
    //     var eqIndex = $(".c-lobby-page__content [class*= 'c-product-']").eq($(this).index());

    //     $(this).attr("data-selected","true").siblings().attr("data-selected","false");
    //     eqIndex.attr("data-selected","true").siblings("[class*= 'c-product-']").attr("data-selected","false");

    //     // 判斷 product 在selected 的相對位置
    //     var n = $(this).index();
    //     // console.log(n)

    //     $('[class*= "c-product-"]:gt('+ n +')').attr("data-queue","after");
    //     $('[class*= "c-product-"]:lt('+ n +')').attr("data-queue","before");
    // });
});
$(function () {
    // Click .c-newbie 內 .c-newbie__btn 移除 .c-newbie
    $(".c-newbie .c-newbie__btn").on("click", function(){
        $(".c-newbie").remove();
    });
});
$(function () {
    // 顯示 sabapapa popup，增加 [data-show="true"]
    setTimeout(function(){
        $(".pp-a--bottom-right").attr("data-show","true");
    }, 3000);

    // 關閉 popup
    $(".pp-a__btn--close").on("click", function(){
        $(".pp-a").removeAttr("data-show");
    });
    
});
$(function () {
    var animationEnd = "animationend oAnimationEnd animationend webkitAnimationEnd";

    $(".c-gc-toast__header .c-gc-icon--arrow-bottom").on("click", function(){
        $(this).closest(".c-gc-toast").attr("data-collapsed","true");
        $(this).closest(".c-gc-toast").attr("data-collapsing","true").one(animationEnd, function(){
            $(this).closest(".c-gc-toast").removeAttr("data-collapsing","true");
        });
    });

    $(".c-gc-toast__float-icon").on("click", function(){
        $(this).closest(".c-gc-toast").attr("data-collapsed","false");
        $(this).closest(".c-gc-toast").attr("data-expanding","true").one(animationEnd, function(){
            $(this).closest(".c-gc-toast").removeAttr("data-expanding","true");
        });
    });
});
$(function () {
    // Click .c-lobby-top-promobar 內 .c-btn__close 移除 data-c-lobby-top-promobar="true"
    $(".c-lobby-top-promobar .c-lobby-top-promobar__close").on("click", function(){
        $("html").removeAttr("data-top-promobar");
    });
});