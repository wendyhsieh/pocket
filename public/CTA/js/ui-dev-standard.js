// Mobile Standard - Core 新增 ui-dev js
// -------------------------------------------------------
$(function() {
    // Loading Layer
    // setTimeout(function(){
    //     $(".preloader-full").remove();
    // },1000);

    // $(".preloader-full").on("touchstart, click", function () {
    //     $(this).remove();
    // });

    // Components
    // ------------------------

    // .c-tab 選擇切換
    $(".c-tabs__content .c-tab .c-btn").on("click", function(){
        $(this).closest(".c-tab").attr("data-selected","true").siblings(".c-tab").attr("data-selected","false");
    });

    // OddsPage
    // ------------------------
    // egamer tooltip 收合
    $(".c-match-option .btn-egamer").on("touchstart, click", function(e){
        $(this).children(".tooltip").toggleClass("in");
        e.stopPropagation();
    });

    // Favorite icon 切換
    $(".c-odds-table .btn-favorit").on("touchstart, click", function(e){
        $(this).children(".icon-favorit").toggleClass("on");
        e.stopPropagation();
    });

    // league 收合
    $(".c-league__header").on("touchstart, click", function(e){
        $(this).closest(".c-league").attr("data-open") == "true" ? $(this).closest(".c-league").attr("data-open", "false") : $(this).closest(".c-league").attr("data-open","true");
        $(this).siblings(".collapse").toggleClass("in").attr("aria-expanded") == "true" ? $(this).siblings(".collapse").attr("aria-expanded", "false") : $(this).siblings(".collapse").attr("aria-expanded","true");
    });

    // match 收合
    $(".c-match__header").filter(function(){

        // 排除 .btn-video, .btn-gv, .btn-time-machine
        return $(this).find(".btn-video, .btn btn-gv, .btn-time-machine, btn-live-streamer");

    }).on("click", function(){
        $(this).closest(".c-match").attr("data-open") == "true" ? $(this).closest(".c-match").attr("data-open", "false") : $(this).closest(".c-match").attr("data-open","true");
        $(this).children(".c-match-event").attr("aria-expanded") == "true" ? $(this).children(".c-match-event").attr("aria-expanded", "false") : $(this).children(".c-match-event").attr("aria-expanded","true");
        $(this).next(".collapse").toggleClass("in");
    });

    // Streaming Panel - OddsTable Container position
    var oddsPanelTopStreaming = function() {
        $oddsTopSpaceStreaming = $(".streamingPanel .header").height() + $(".streamingPanel .video-block").height();
        $(".streamingPanel .content-scroller").css("top", $oddsTopSpaceStreaming);
        console.log("\".video-block\" 高度：" + $(".streamingPanel .video-block").height());
    }

    // Streaming Panel - when window resize
    $(window).resize(oddsPanelTopStreaming);

    // Streaming Panel - Video Switch
    $(".streamingPanel .video-block .btn-switch").on("click", function() {
        $(this).toggleClass("on");
        $(".streamingPanel .video-block").toggleClass("in");
        oddsPanelTopStreaming();
    });

    // Streaming Panel 開啟
    $(".c-match-option .btn-video, .c-match-option .btn-gv, .c-match-option .btn-statistics, .c-match-option .btn-live-streamer").on("touchstart, click", function(e){
        e.preventDefault();
        $(".pagePanel.streamingPanel").addClass("in");
        $(".pagePanel.streamingPanel").css({"display":"block"});
        oddsPanelTopStreaming();
        e.stopPropagation();
    });

    // Streaming Panel 關閉
    $(".streamingPanel .header .main-bar .text-hide").on("touchstart, click", function(e){
        e.preventDefault();
        $(".pagePanel.streamingPanel").removeClass("in");
        $(".pagePanel.streamingPanel").css({"display":"none"});
        oddsPanelTopStreaming();
        e.stopPropagation();
    });

    // more bettype 收合
    $(".c-match-option .btn-more").on("touchstart, click", function(e){
        e.preventDefault();
        $(this).attr("aria-expanded") == "true" ? $(this).attr("aria-expanded", "false") : $(this).attr("aria-expanded","true");
        $(this).toggleClass("collapsed");
        var $matchMore = $(this).closest(".c-match").children(".collapse").children(".more-bettype");
        $matchMore.toggleClass("in");
        e.stopPropagation();
    });

    // more asia line 收合
    $(".c-match > .collapse > .btn-moreBettype").on("touchstart, click", function(e){
        e.preventDefault();
        $(this).next(".main-bettype").attr("aria-expanded") == "true" ? $(this).next(".main-bettype").attr("aria-expanded", "false") : $(this).next(".main-bettype").attr("aria-expanded","true");
        $(this).next(".main-bettype").toggleClass("in");
        e.stopPropagation();
    });

    // child match 收合
    $(".c-match > .collapse > .btn-moreBettype").on("touchstart, click", function(e){
        e.preventDefault();
        $(this).next(".more-bettype").attr("aria-expanded") == "true" ? $(this).next(".more-bettype").attr("aria-expanded", "false") : $(this).next(".more-bettype").attr("aria-expanded","true");
        $(this).next(".more-bettype").toggleClass("in");
        e.stopPropagation();
    });

    // Volleyball AIO 開啟 .c-bettype-detail
    $(".c-bettype__col  .c-btn--collapse").on("touchstart, click", function(){
        $(this).closest(".c-bettype__row").siblings(".c-bettype-detail").attr("data-open") == "true" ? $(this).closest(".c-bettype__row").siblings(".c-bettype-detail").attr("data-open","false") : $(this).closest(".c-bettype__row").siblings(".c-bettype-detail").attr("data-open", "true");
    });

    // cashout alert 關閉
    $(".cash-out-fixed .btn-primary").on("touchstart, click", function(){
        $(this).closest(".cash-out-fixed").removeClass("in");
    });

    // .c-float-live-streamer ----------------------
    // 點擊[X] 關閉 Live Streamer
    $(".c-float-live-streamer .c-btn").on("click", function(){
        $(this).closest(".c-float-live-streamer").attr("data-open","false");
    });

    // 點圖片開啟 Live Streamer 的 Dialog
    $(".c-float-live-streamer img").on("click", function(){
        $(".modal#modalLiveStreamer").modal("show");
    });
    // 按 OK 關閉 Dialog
    $(".modal .btn").on("click", function(){
        $(".modal#modalLiveStreamer").modal("hide");
    });

    // Toast 開關 ( 來自 global-lobby-core.css 的共用元件 )
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

    $("input[js-demo-bonus-checked]").on("click", function(){
        $(".modal[js-demo-modal-bonus]").modal("show");
    });


    //**************** App Ber ********************//
    // app-bar 開啟 saba score
    $(".app-bar > .btn").on("click", function(){
        $(this).toggleClass("open");
    });
    $(".app-bar .modal-backdrop").on("click", function() {
        $(this).parent().removeClass("open");
    });

    // custom [.memu-balance] dropdown
    $(".memu-balance .dropdown-menu li").not(".more").on("click", function() {
        $(".memu-balance").removeClass("open");
    });
    $(".memu-balance .dropdown-toggle").on("click", function() {
        $(this).parent().siblings(".btn-group").removeClass("open");
        $(this).parent().toggleClass("open");
        $(this).siblings(".dropdown-panel").find(".c-gc-balance").attr("data-open") == "true" ? $(this).siblings(".dropdown-panel").find(".c-gc-balance").attr("data-open", "false") : $(this).siblings(".dropdown-panel").find(".c-gc-balance").attr("data-open","true");
    });
    // .menu-product tab switch
    $(".menu-product .tab li").on("click", function() {
        $index = $(this).index() + 1;
        $(this).addClass("active").siblings("li").removeClass("active");
        $.each(["show1", "show2", "show3"], function(i, n) {
            console.log(i + " " + n);
            $(".menu-product .dropdown-group").removeClass(n);
        });
        $(".menu-product .dropdown-group").addClass("show" + $index);
    });
    $(".modal-backdrop").on("click", function() {
        $("body").removeClass("modal-open");
        $(".c-gc-balance").attr("data-open","false");
    });

    // custom [.menu-product] dropdown
    $(".menu-product .dropdown-menu li").not(".more").on("click", function() {
        $(".menu-product").removeClass("open");
    });
    $(".menu-product .dropdown-toggle").on("click", function() {
        $(this).parent().siblings(".btn-group").removeClass("open");
        $(this).parent().toggleClass("open");
        $("body").addClass("modal-open");
    });
    $(".menu-product .btn-bar .btn").on("click", function(){
        $(this).addClass("active").siblings(".btn").removeClass("active");
    });

    // custom [.menu-market] dropdown
    $(".menu-market .dropdown-menu li").on("click", function() {
        $(".menu-market").removeClass("open");
    });
    $(".menu-market .dropdown-toggle").on("click", function() {
        $(this).parent().siblings(".btn-group").removeClass("open");
        $(this).parent().toggleClass("open");
        $("body").addClass("modal-open");
    });


    // c-video-opation
    // Streaming Panel - Video Switch
    $(".streamingPanel .main-bar .c-btn--collapse").on("click", function() {
        $(this).attr("data-open") == "true" ? $(this).attr("data-open", "false") : $(this).attr("data-open", "true");
        // $(this).closest(".c-video-option").attr("data-open") == "true" ? $(this).closest(".c-video-option").attr("data-open", "false") : $(this).closest(".c-video-option").attr("data-open", "true");
        $(".streamingPanel .video-block").toggleClass("in");
        oddsPanelTopStreaming();
    });

    // Streaming statistics按鈕 與 GV按鈕 與 TV按鈕 切換
    $(".c-video-option .c-btn--statistics").on("touchstart", function(){
        $(this).attr("data-selected","true").siblings(".c-btn--video").attr("data-selected","false");
    });
    $(".c-video-option .c-btn--video").on("touchstart", function(){
        $(this).attr("data-selected","true").siblings(".c-btn--gv, .c-btn--statistics").attr("data-selected","false");
    });
    $(".c-video-option .c-btn--gv").on("touchstart", function(){
        $(this).attr("data-selected","true").siblings(".c-btn--video").attr("data-selected","false");
    });

    $(".c-btn--refresh").on("click", function(){
        $(this).attr("data-status", "active");
        setTimeout(function () {
            $(".c-btn--refresh").attr("data-status", "default");
        }, 1000);
    });
});




// Mobile Standard - 原先既有的全站共用 js
// -------------------------------------------------------
$(function() {

    // [for test] Refresh Button Active Animation
    $(".btn-refresh").on("touchstart, click", function () {
        $(this).addClass("active");
        setTimeout(function () {
            $(".btn-refresh").removeClass("active");
        }, 1000);
    });


    //檢查網址所帶的參數
    var parastr = window.location.search.substr(1);
    if (parastr.length > 0) {
        changeSkin(parastr);
    } else if ($.cookie("css_skin") != null) { //如果cookie不為空的時候就讀取cookie的路徑
        changeSkin($.cookie("css_skin"));
        console.log($.cookie("css_skin"));
    }
});

function changeSkin(str) {
    console.log("切換站台: "+ str);
    $("link[rel='stylesheet'], link[rel='apple-touch-icon']").each(function (index) {

        var csshref;
        csshref = $(this).attr("href");
        if(csshref.match("public") == null){
            //csshref = csshref.replace(/Content\/\w*\//, "Content/" + str + "/");
            csshref = csshref.replace(/Content\/\w*\//, "Content/" + str + "/");
            csshref = $(this).attr("href", csshref);
            $(".ath-application-icon").attr("src", "Content/" + str + "/images/icon_home_screen.png")
            $.cookie("css_skin", str);
        }
    });
}
$(function(){
    // Recommend Bet
    // ----------------------------
    // .c-recommend-bet-group 展開/收合
    $(".c-recommend-bet-group__collapse .c-btn").on("touchstart, click", function(){
        $(this).closest(".c-recommend-bet-group").attr("data-open") == "true" ? $(this).closest(".c-recommend-bet-group").attr("data-open", "false") : $(this).closest(".c-recommend-bet-group").attr("data-open", "true");
    });

    // .c-recommend-bet 加購切換
    $(".c-recommend-bet").on("touchstart, click", function(){
        $(this).attr("data-selected") == "true" ? $(this).attr("data-selected", "false") : $(this).attr("data-selected", "true");
        if( $(this).attr("data-selected") == "true" ){
            $(this).find(".c-checkbox").children("input").prop("checked", true);
        } else {
            $(this).find(".c-checkbox").children("input").prop("checked", false);
        }
    });


    // Ticket
    // ----------------------------
    // 下注後 .c-ticket 展開/收合
    $(".c-ticket__collapse .c-btn").on("touchstart, click", function(){
        $(this).closest(".c-ticket").attr("data-open") == "true" ? $(this).closest(".c-ticket").attr("data-open", "false") : $(this).closest(".c-ticket").attr("data-open", "true");
    });


    // BetSlipPanel
    // ----------------------------
    // [.singleBetPanel] show
    $(".odds-table .btn").not(".disable, .select, .btn-score, .btn-help").on("click", function() {
        $(".betslipPanel").modal("show");
        $(".app-bar").addClass("hide");
        setTiipsPanelHeight();
    });
});
$(function () {

    // CashOut
    // ----------------------------

    // 點擊後 .c-cashout 展開/收合
    $(".c-cashout-ticket .c-cashout-collapse").on("touchstart, click", function(){
        $(this).closest(".c-cashout-ticket").attr("data-open") == "true" ? $(this).closest(".c-cashout-ticket").attr("data-open", "false") : $(this).closest(".c-cashout-ticket").attr("data-open", "true");
    });

    // 點擊 No .c-cashout 關閉
    $(".c-cashout-submit .c-btn--default").on("touchstart, click", function(){
        $(this).closest(".c-cashout-ticket").attr("data-open","false");
    });

});
$(function(){

    // Btn
    // ----------------------------
    // Btn Switch
    $(".c-switch-btn").on("click", function(){
        $(this).attr("data-switch") == "on" ? $(this).attr("data-switch","off") : $(this).attr("data-switch", "on");
    });

    // c-dropdown
    // ------------------------------
    $(function () {
        $(".c-dropdown > .c-btn").on("touchstart, click", function(){
            $(this).closest(".c-dropdown").attr("data-open") == "true" ? $(this).closest(".c-dropdown").attr("data-open", "false") : $(this).closest(".c-dropdown").attr("data-open","true");
        });
    });

    // Textfield
    // ----------------------------
    // Textfield Click Focus 狀態
    $(".c-textfield").on("click", function(){
        $(this).attr("data-focus","true").siblings(".c-textfield").attr("data-focus","false");
    });

});
$(function(){
    // .c-bettype-more-lines 開啟
    // $(".c-bettype-more-lines .c-bettypes").hide();
    // $(".c-bettype-more-lines .c-bettype-more-lines__btn").on("click", function(){
    //     var bettypesSize = $(this).closest(".c-bettype-more-lines").find(".c-bettypes").size();
    //     var contentHeight = ( $(this).siblings(".c-bettypes").outerHeight(true) * bettypesSize ) + $(this).siblings(".c-bettype-more-lines__close").outerHeight(true);

    //     $(this).closest(".c-bettype-more-lines").attr("data-open", "true").css("max-height", contentHeight);

    //     // $(this).siblings(".c-bettypes").slideDown(300);
    // });

    // // .c-bettype-more-lines 收合
    // $(".c-bettype-more-lines .c-bettype-more-lines__close").on("click", function(){

    //     var buttonHeight = $(this).siblings(".c-bettype-more-lines__btn").outerHeight();

    //     $(this).closest(".c-bettype-more-lines").attr("data-open", "false").css("max-height", buttonHeight);

    //     // $(this).siblings(".c-bettypes").slideUp(300);
    // });

    // .c-bettype-more-lines 打開
    $(".c-bettype-more-lines .c-bettype-more-lines__btn").on("click", function(){

        $(this).closest(".c-bettype-more-lines").attr("data-open", "true");

    });

    // .c-bettype-more-lines 收起
    $(".c-bettype-more-lines .c-bettype-more-lines__close").on("click", function(){

        $(this).closest(".c-bettype-more-lines").attr("data-open", "false");

    });

    // 開關 .c-bettype
    $(".c-bettype:only-child .c-bettype__row-heading").on("touchstart", function() {
        var $bettype = $(this).closest(".c-bettype");
        if ($bettype.attr("data-open") == "default") {
            $bettype.attr("data-open", "false");
        } else if ($bettype.attr("data-open") == "true") {
            $bettype.attr("data-open", "false");
        }else {
            $bettype.attr("data-open", "true");
        }
    });


});

$(function () {
    // Me - Setting 開啟
    $(".app-bar .menu-more > .btn").on("touchstart, click", function(){
        $(".myAccountPanel").attr("aria-hidden", "false");
        $(".myAccountPanel").attr("style", "display: block; padding-right: 0px;");
        $(".myAccountPanel").addClass("in");
        $(this).closest("body").addClass("modal-open");
    });

    // Me - Setting 關閉
    $(".myAccountPanel .main-bar > .btn").on("touchstart, click", function(){
        $(this).closest(".pagePanel").attr("aria-hidden", "true");
        $(this).closest(".pagePanel").attr("style", "display: none;");
        $(this).closest(".pagePanel").removeClass("in");
        $(this).closest("body").removeClass("modal-open");
    });


    // .c-page-list .c-btn 切換 / 同步打開 Switch 與 Textfield
    $(".c-page:not(:nth-child(8)):not(:nth-child(9)):not(:nth-child(10)):not(:nth-child(13)) .c-page-list__item .c-btn").on("touchstart, click", function(){
        $(this).attr("data-selected") == "true"
        ? $(this).attr("data-selected", "false").siblings(".c-page-list__subitem").attr("data-open", "false").siblings(".c-btn").find(".c-switch-btn").attr("data-switch", "off")
        : $(this).attr("data-selected", "true").siblings(".c-page-list__subitem").attr("data-open", "true").siblings(".c-btn").find(".c-switch-btn").attr("data-switch", "on")

        $(this).closest(".c-page-list__item").siblings(".c-page-list__item").find(".c-btn").attr("data-selected", "false").siblings(".c-page-list__subitem").attr("data-open", "false");
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

    // Me - Casino Game List Setting 開啟
    $(".c-me-list .c-me-list__item:nth-child(3) .c-me-list__value .c-btn").on("touchstart, click", function(){
        $(this).closest("#MePage").find("#MeSubPage").children(".c-page:nth-child(12)").attr("data-open", "true");
    });

    // Me - Contact us 開啟
    $(".c-me-list .c-me-list__item:nth-child(4) .c-me-list__value .c-btn").on("touchstart, click", function(){
        $(this).closest("#MePage").find("#MeSubPage").children(".c-page:nth-child(13)").attr("data-open", "true");
    });


    $(".c-me-wallet__main .c-btn--icon").on("touchstart, click", function(){
        $(this).closest(".c-me-wallet").attr("data-open") == "true" ? $(this).closest(".c-me-wallet").attr("data-open", "false") : $(this).closest(".c-me-wallet").attr("data-open", "true");
    });
});
$(function(){

    // Click 開啟 mini-streaming
    $(".btn-mini-streaming").on("click", function(e){
        e.preventDefault();
        $(this).find(".tooltip").removeClass("in").addClass("fade");
        var $thisBtn = $(this);
        if($thisBtn.attr("data-open")) {
            $thisBtn.removeAttr("data-open").closest(".c-match").find(".c-mini-streaming").removeAttr("data-open");
        }else{
            $(".btn-mini-streaming").not(this).removeAttr("data-open").closest(".c-match__header").siblings(".c-mini-streaming").removeAttr("data-open").removeAttr("data-fixed");
            $thisBtn.attr("data-open","true").closest(".c-match").find(".c-mini-streaming").attr("data-open","true");
        }
        e.stopPropagation();
    });

    // Click 關閉 mini-streaming
    $(".btn-mini-streaming[data-open='true']").on("click", function(){
        $(this).removeAttr("data-open").closest(".c-match").find(".c-mini-streaming").removeAttr("data-open").removeAttr("data-fixed");
    });

    $(".c-mini-streaming .btn-clear").on("click", function(){
        $(this).closest(".c-mini-streaming").removeAttr("data-open").removeAttr("data-fixed").closest(".c-match").find(".btn-mini-streaming").removeAttr("data-open");
    });

    // Click 移除 Fixed 狀態
    $(".c-mini-streaming .btn-return").on("click", function(){
        $(this).closest(".c-mini-streaming").removeAttr("data-scroll-to-top").removeAttr("data-scroll-to-bottom");
    });

    // Click 切換全屏半屏
    $(".c-mini-streaming .btn-full-screen-off").on("click", function(){
        $(this).closest(".c-mini-streaming").attr("data-full-screen","false");
    });
    $(".c-mini-streaming .btn-full-screen-on").on("click", function(){
        $(this).closest(".c-mini-streaming").removeAttr("data-full-screen");
    });

    // Click dropdown-menu 關閉 
    $(".c-mini-streaming__btn-group .dropdown-menu").on("click", function(){
        $(this).closest(".dropdown").removeClass("open");
    });

    // 計算開啟的 mini-Streaming 距離 window top < Header高度 或 距離 window bottom < appbar高度 加上 [data-fixed="true"]
    // $(document).scroll(function () {
    //     var $Streaming = $('.c-mini-streaming[data-open="true"]');
    //     var $StreamingHeight = $('.c-mini-streaming[data-open="true"]').height();
    //     var $WindowHeight = $(window).height();
    //     var $HeaderHeight = $(".header-submenu").height() + $(".header-filter").height();
    //     var $AppbarHeight = $(".appbar").height();
    //     var $MatchHeight = $('.c-mini-streaming[data-open="true"]').siblings('.commatch_content').height();
    //     var $MatchTop = $('.c-mini-streaming[data-open="true"]').siblings('.commatch_content').offset().top - $(window).scrollTop();
    //     var $StreamingTop = $MatchTop + $MatchHeight;
    //     var $StreamingBottom = $WindowHeight - $MatchTop - $MatchHeight;
        
    //     if( $StreamingTop < $HeaderHeight ) {
    //         $Streaming.attr("data-scroll-to-top","true");
    //     }else if( $StreamingBottom < $StreamingHeight + $AppbarHeight ) {
    //         $Streaming.attr("data-scroll-to-bottom","true");
    //         // setTimeout(function(){
    //         //     $Streaming.removeAttr("data-scroll-to-bottom-animation");
    //         // }, 300);
    //     }else{
    //         $Streaming.removeAttr("data-scroll-to-top").removeAttr("data-scroll-to-bottom");
    //     }

    //     // 判斷 Header 是否有 [data-status="is-close"] <== 此段移至 Header.js 內一併控制
    //     // var HeaderStatus = $(".header");
    //     // if( HeaderStatus.attr("data-status","is-close") ) {
    //     //     $('.c-mini-streaming[data-fixed="true"]').css("top","66px");
    //     // }else{
    //     //     $('.c-mini-streaming[data-fixed="true"]').css("top","98px");
    //     // }

    // });

    // .dropdown-mini-streaming 開啟 下方 menu

    $(".dropdown-mini-streaming > .btn").on("click", function(){
        $btn_ministreaming = $(this).parent();
        $btn_ministreaming.addClass("open");
        $(".content").on("touchstart", function(){
            $btn_ministreaming.removeClass("open");
        });
        $checked = $(this).next(".dropdown-menu").find(".checkbox input:checked").size()
        if( $checked > 0){
            $(this).children("i").removeClass("icon-filter").addClass("icon-filter-on");
        } else {
            $(this).children("i").removeClass("icon-filter-on").addClass("icon-filter");
        }
    });
    
});


$(function () {

    // msg--alert - Show
    setTimeout(function(){
        $(".c-gc-msg.c-gc-msg--alert").attr("data-open","true");
    },2500);
    $(".c-gc-msg.c-gc-msg--alert .c-gc-icon--clear").on("click", function(){
        $(this).closest(".c-gc-msg--alert").attr("data-open","false");
    });


});
$(function(){
    // Personalize Offer
    // ----------------------------
    // .c-personalize-offer-promo 關閉
    $(".c-personalize-offer-promo__header .c-btn").on("touchstart, click", function(){
        $(this).closest(".c-personalize-offer-promo").attr("data-open", "false");
    });
    $(".c-personalize-offer__btn .c-btn").on("touchstart, click", function(){
        $(this).closest(".c-personalize-offer-promo").attr("data-open", "false");
    });

    // .c-personalize-offer 點擊下注後，開啟 ConfirmBet
    $(".c-personalize-offer .c-betting-stake .c-btn--bet").on("touchstart, click", function(){
        if($(this).siblings(".c-textfield").children(".c-textfield__input").val().length > 1) {
            $(this).closest(".c-personalize-offer-promo").attr("data-open", "false");
            $("#comquickBet").attr("data-status", "is-active");
        } else {
            $(this).siblings(".c-tooltip").attr("data-open", "true");
            setTimeout(function () {
                $(".c-personalize-offer .c-tooltip").attr("data-open", "false");
            }, 2000);
        }
    });

    // .c-personalize-offer .c-betting-keypad 開啟
    $(".c-personalize-offer .c-textfield__input").on("click", function(){
        // $(this).select();
        $(this).closest(".c-betting").attr("data-selected","true").find(".c-textfield--betting").attr("data-focus","true");
        $(this).closest(".c-personalize-offer").find(".c-betting-keypad").attr("data-open","true");
    });

    // .c-personalize-offer .c-betting-keypad 關閉 併清除input的值
    $(".c-personalize-offer .c-textfield--betting .c-btn").on("click", function(e){
        e.preventDefault();
        // $(this).select();
        $(this).closest(".c-betting").attr("data-selected","false").find(".c-textfield--betting").attr("data-focus","false");
        $(this).closest(".c-personalize-offer").find(".c-betting-keypad").attr("data-open","false");
        e.stopPropagation();
    });

    // .c-personalize-offer-timer 倒數計時

    // .c-personalize-offer-promo 判斷是否顯示skip
    function Timer_Skip() {
        // 先開啟 .c-personalize-offer-timer__circle
        $(".c-personalize-offer-promo").attr("data-skip","true");

        // 設定10秒關閉 skip
        setTimeout (function(){
            $(".c-personalize-offer-promo").attr("data-skip","false");

        },10000);
    }

    // .c-personalize-offer-timer__circle (Timer 外圈動畫)
    function Timer_Circle() {
        $(".c-personalize-offer-timer__circle").attr("data-animate","true");
    }

    // .c-personalize-offer-timer__seconds .c-text (Timer 文字動畫)
    function Timer_Text() {

        // 第一個直接加上 [data-open="true"]
        $(".c-personalize-offer-timer__seconds .c-text").eq(0).attr("data-open","true");

        var index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

        $.each(index, function(i){
            // console.log(i, item);
            setTimeout (function(){
                $(".c-personalize-offer-timer__seconds .c-text").eq(i).attr("data-open","true");

            },1000*i);
        });
    }

    Timer_Skip();
    Timer_Circle();
    Timer_Text();

    // 如果有操作行為停止倒數計時
    $(".c-personalize-offer-promo").on("click", function(){
        $(".c-personalize-offer-promo").attr("data-skip","false");
    });
});
$(function(){
    // Recommend Bet
    // ----------------------------
    // .c-recommend-bet-group 展開/收合
    $(".c-recommend-bet-group__collapse .c-btn").on("touchstart, click", function(){
        $(this).closest(".c-recommend-bet-group").attr("data-open") == "true" ? $(this).closest(".c-recommend-bet-group").attr("data-open", "false") : $(this).closest(".c-recommend-bet-group").attr("data-open", "true");
    });

    // .c-recommend-bet 加購切換
    $(".c-recommend-bet").on("touchstart, click", function(){
        $(this).attr("data-selected") == "true" ? $(this).attr("data-selected", "false") : $(this).attr("data-selected", "true");
        if( $(this).attr("data-selected") == "true" ){
            $(this).find(".c-checkbox").children("input").prop("checked", true);
        } else {
            $(this).find(".c-checkbox").children("input").prop("checked", false);
        }
    });

    // 避免 .c-recommend-bet__stake-setting 點擊時事件溢出 
    $(".c-recommend-bet__stake-setting").on("touchstart, click", function(event){
        event.stopPropagation()
    });

    // .c-recommend-bet-list highlight 動畫 (動畫跑完時移除 .c-recommend-bet-list--highlight)
    var animationEnd = "animationend oAnimationEnd animationend webkitAnimationEnd";
    $("#demo-recommend-bet-hilight .c-recommend-bet-list").addClass("c-recommend-bet-list--highlight").one(animationEnd, function(){
        $(this).removeClass("c-recommend-bet-list--highlight");
    });
});
$(function(){
    // Result
    // ----------------------------

    // 開啟下拉賽果
    $(".collapse-group.result-group .heading .toggle").on("touchstart, click", function(){
        $(this).attr("aria-expanded") == "true" ? $(this).attr("aria-expanded", "false") : $(this).attr("aria-expanded", "true");
        if( $(this).attr("aria-expanded") == "true" ) {
            $(this).removeClass("collapsed").closest(".heading").siblings(".collapse").addClass("in");
        } else {
            $(this).addClass("collapsed").closest(".heading").siblings(".collapse").removeClass("in");
        }
    });

    // 開啟 .more-result-detail
    $(".table-responsive .table .btn-info").on("touchstart, click", function(){
        $(this).attr("aria-expanded") == "true" ? $(this).attr("aria-expanded", "false") : $(this).attr("aria-expanded", "true");
        if( $(this).attr("aria-expanded") == "true" ) {
            $(this).closest(".table-responsive").siblings(".collapse").addClass("in").attr("aria-expanded", "true");
        } else {
            $(this).closest(".table-responsive").siblings(".collapse").removeClass("in").attr("aria-expanded", "false");
        }
    });

});
// Cricket AIO Scoreboard Detail Collapse
$(function(){

    $(".c-scoreboard--sport50 .c-scoreboard__btn").on("click", function(){
        // $(this).closest(".c-scoreboard--sport50").attr("data-detail") == "true" ? $(this).closest(".c-scoreboard--sport50").attr("data-detail","false").closest(".c-scoreboard--sport50").find(".c-scoreboard__detail").slideUp(300) : $(this).closest(".c-scoreboard--sport50").attr("data-detail", "true").closest(".c-scoreboard--sport50").find(".c-scoreboard__detail").slideDown(300);
        $(this).siblings(".c-scoreboard__detail").attr("data-open") == "true" ? $(this).siblings(".c-scoreboard__detail").attr("data-open","false") : $(this).siblings(".c-scoreboard__detail").attr("data-open", "true");
    });

});

$(function(){

    // Header
    // ----------------------------
    // .c-sport-highlight-header 展開/收合
    $(".c-sport-highlight-header").on("touchstart, click", function(){
        $(this).closest(".c-sport-highlight").attr("data-open") == "true" ? $(this).closest(".c-sport-highlight").attr("data-open", "false") : $(this).closest(".c-sport-highlight").attr("data-open", "true");
    });


    // Viewer__share
    // ----------------------------
    // .c-sport-highlight-video__option icon 點選
    $(".c-sport-highlight-item__viewer .c-btn--thumb").on("touchstart, click", function(){
        $(this).attr("data-selected") == "true" ? $(this).attr("data-selected", "false") : $(this).attr("data-selected", "true");
    });


    // 點選 List-item__img 的影片播放
    // ----------------------------
    // .c-sport-highlight-video 開啟
    $(".c-sport-highlight-item__img .c-btn").on("touchstart, click", function(){

        // 紀錄原始滾動位置
        // $(".c-sport-highlight-list").attr("data-highlight-scrollleft", $(".c-sport-highlight-list").scrollLeft()); // get actual scroll left

        $(this).closest(".c-sport-highlight").attr("data-video-open","true");
        // $(this).closest(".c-sport-highlight-item").attr("data-open", "true");
    });


    // 點選 Control
    // ----------------------------
    // .c-sport-highlight-control 關閉
    $(".c-sport-highlight-control__header .c-btn").on("touchstart, click", function(event){
        $(this).closest(".c-sport-highlight").attr("data-video-open","false");
        // $(this).closest(".c-sport-highlight-video").siblings(".c-sport-highlight-list").find(".c-sport-highlight-item[data-open='true']").attr("data-open", "false");

        // 將原始滾動位置復原
        // $(".c-sport-highlight-list").scrollLeft( $(".c-sport-highlight-list").attr("data-highlight-scrollleft"));
        // 移除滾動紀錄
        // $(".c-sport-highlight-list").removeAttr("data-highlight-scrollleft");

        event.stopPropagation();
    });


    // Video__control
    // ----------------------------
    // 點選 .c-sport-highlight-video-info 切換
    $(".c-sport-highlight-control").on("touchstart, click", function(){
        $(this).attr("data-open") == "true" ? $(this).attr("data-open", "false") : $(this).attr("data-open", "true");
    });

    // 點選 .c-sport-highlight-control__main c-btn--play 切換
    $(".c-sport-highlight-control__main .c-btn--play").on("touchstart, click", function(event){
        $(this).attr("data-selected") == "true" ? $(this).attr("data-selected", "false") : $(this).attr("data-selected", "true");
        event.stopPropagation();
    });
    // 點選 .c-sport-highlight-control__main c-btn--sound 切換
    $(".c-sport-highlight-control__main .c-btn--sound").on("touchstart, click", function(event){
        $(this).attr("data-selected") == "true" ? $(this).attr("data-selected", "false") : $(this).attr("data-selected", "true");
        event.stopPropagation();
    });
    // 點選 .c-sport-highlight-control__main c-btn--fullscreen 切換
    $(".c-sport-highlight-control__main .c-btn--fullscreen").on("touchstart, click", function(event){
        $(this).attr("data-selected") == "true" ? $(this).attr("data-selected", "false") : $(this).attr("data-selected", "true");
        event.stopPropagation();
    });

    // 點選 .c-sport-highlight-video__option c-btn--video 切換
    $("c-sport-highlight-video__option .c-btn--video").on("touchstart, click", function(event){
        $(this).attr("data-selected") == "true" ? $(this).attr("data-selected", "false") : $(this).attr("data-selected", "true");
        event.stopPropagation();
    });
    // 點選 .c-sport-highlight-video__option c-btn--sound 切換
    $("c-sport-highlight-video__option .c-btn--sound").on("touchstart, click", function(event){
        $(this).attr("data-selected") == "true" ? $(this).attr("data-selected", "false") : $(this).attr("data-selected", "true");
        event.stopPropagation();
    });
    // 點選 .c-sport-highlight-video__option c-btn--fullscreen 切換
    $("c-sport-highlight-video__option .c-btn--fullscreen").on("touchstart, click", function(event){
        $(this).attr("data-selected") == "true" ? $(this).attr("data-selected", "false") : $(this).attr("data-selected", "true");
        event.stopPropagation();
    });


    // Video__option
    // ----------------------------
    // .c-sport-highlight-video__option icon 點選
    $(".c-sport-highlight-video__option .c-btn:not(.c-btn--visibility)").on("touchstart, click", function(){
        $(this).attr("data-selected") == "true" ? $(this).attr("data-selected", "false") : $(this).attr("data-selected", "true");
    });

    // // 點擊展開 c-sport-highlight-personalize
    $(".c-sport-highlight-item .c-personalize-offer").on("click", function(){

        // 紀錄原始滾動位置
        // $(".c-sport-highlight-list").attr("data-highlight-scrollleft", $(".c-sport-highlight-list").scrollLeft()); // get actual scroll left

        // $(this).closest(".c-sport-highlight-item").attr("data-open", "true");
        $(this).closest(".c-sport-highlight").attr("data-personalize-open", "true");
        // $(this).find(".c-betting").attr("data-selected", "true");
        // $(this).find(".c-betting-stake").attr("data-open", "true");
        // $(this).find(".c-textfield--betting").attr("data-focus", "true").attr("data-selected", "true");
        // $(this).find(".c-betting-stake-info").attr("data-open", "true");
        // $(this).find(".c-betting-keypad").attr("data-open", "true");
    });

    // // 點擊關閉 c-sport-highlight-personalize
    $(".c-personalize-offer__content > .c-btn--close").on("click", function(e){
        e.stopPropagation();
        // $(this).closest(".c-sport-highlight-item").attr("data-open", "false");
        $(this).closest(".c-sport-highlight").attr("data-personalize-open", "false");
        // $(this).siblings(".c-betting").attr("data-selected", "false");
        // $(this).siblings(".c-betting").find(".c-betting-stake").attr("data-open", "false");
        // $(this).siblings(".c-betting").find(".c-textfield--betting").attr("data-focus", "false").attr("data-selected", "false");
        // $(this).siblings(".c-betting").find(".c-betting-stake-info").attr("data-open", "false");
        // $(this).siblings(".c-betting").find(".c-betting-keypad").attr("data-open", "false");

        // // 將原始滾動位置復原
        // $(".c-sport-highlight-list").scrollLeft( $(".c-sport-highlight-list").attr("data-highlight-scrollleft"));
        // // 移除滾動紀錄
        // $(".c-sport-highlight-list").removeAttr("data-highlight-scrollleft");
    });


});
$(function(){

    // Statement
    // ----------------------------

    // ipv6 click copy button show snackbar
    $(".ip .c-btn").on("click", function(){
        $(".c-gc-snackbar").attr("data-open","true");
        setTimeout(function(){
            $(".c-gc-snackbar").attr("data-open","false");
        },2000);
    });

    // Click 開啟 Cash Out HowToUse
    $(".c-cashout-howtouse, .c-cashout .c-btn--howtouse").on("click", function(e){
        $(".c-tutorial--cashout").attr("data-open","true");
        e.stopPropagation();
    });

    // Click Close Btn to close Cash Out HowToUse
    $(".c-tutorial--cashout .c-btn--close, .c-tutorial__step-6 > .c-btn--primary").on("click", function(){
        $(this).closest(".c-tutorial--cashout").attr("data-open","false");
    });


    // Click 開啟 Delay Payout
    $(".c-btn--inline-help, .list-group-item-text .c-btn--inline-help, .statsPanel .c-btn--inline-help").on("click", function(){
        $(".modal#modalDelayPayoutinfo").modal("show");
    });
    // 關閉 Delay Payout 的 Dialog
    $(".modal .btn").on("click", function(){
        $(".modal#modalDelayPayoutinfo").modal("hide");
    });

    // Click btn-info 展開 popup result時, 於html 加上 data-page-full="true"
    $(".statementPanel .btn-info, .btn-detail, .btn-bonus").on("click", function(){
        $(".pagePanel.statementPanel").attr("data-page-full", "true");
    });

    // Click popup result page 返回鍵時, 於html 加上 data-page-full="false"
    $(".statement-result .main-bar > .btn").on("click", function(){
        $(".pagePanel.statementPanel").attr("data-page-full", "false");
    });

});
$(function() {
    //  Time Machine bar start ------------>
    var $timeBarDefault = $('.time-machine:not(.time-machine--special) .tm-slider input#time-bar');
    var $timeBarMinDefault = $timeBarDefault.prop('min');
    var $timerangeValueDefault = $timeBarDefault.prop('max') - $timeBarMinDefault;

    var $timeBar = $('.time-machine--special .tm-slider input#time-bar');
    var $timeBarMin = $timeBar.prop('min');
    var $timerangeValue = $timeBar.prop('max') - $timeBarMin;

    // Space animation
    const stars = document.querySelectorAll('.tm-star');

    if($('.time-machine:not(.time-machine--special) .tm-slider input[type="range"]').length > 0) {
        $timeBarDefault.on('touchmove',function(){
            n = $(this).val() - $(this).prop('min');
            $(this).css({
                'background-image':'-webkit-linear-gradient(left ,rgba(255,170,0,1) 0%,rgba(255,0,0,1) '+ (n  * ( 100 / $timerangeValueDefault))+'%,rgba(93,0,255,1) '+ (n  * ( 100 / $timerangeValueDefault))+'%, rgba(255,0,0,1) 100%)'
            });
            $(this).siblings(".tm-slider__select-time").css({
                'left':''+ (n  * ( 100 / $timerangeValueDefault))+'%'
            });
        });
    }

    if($('.time-machine--special .tm-slider input[type="range"]').length > 0) {
        $timeBar.on('touchmove',function(){
            n = $(this).val() - $(this).prop('min');
            $(this).css({
                'background-image':'-webkit-linear-gradient(left ,rgba(41,106,42,1) 0%,rgba(255,242,0,1) '+ (n  * ( 100 / $timerangeValue))+'%,rgba(0,68,255,1) '+ (n  * ( 100 / $timerangeValue))+'%, rgba(255,0,0,1) 100%)'
            });
            $(this).siblings(".tm-slider__select-time").css({
                'left':''+ (n  * ( 100 / $timerangeValue))+'%'
            });
        });

        stars.forEach((star,i) => {
            let x = `${Math.random() * 200}vmax`
            let y = `${Math.random() * 100}vh`
            let z = `${Math.random() * 200 - 100}vmin`
            let rx = `${Math.random() * 360}deg`
            star.style.setProperty('--x', x)
            star.style.setProperty('--y', y)
            star.style.setProperty('--z', z)
            star.style.setProperty('--rx', rx)
        });

        // 背景流星流動動畫  hyeper (scroll bar 向右側拉)
        // stars.forEach((star,i) => {
        //     let delay = `${Math.random() * 500}ms`;
        //     star.style.animationDelay = delay;
        //     star.style.animationName = 'hyper';
        //     star.style.animationDuration = '500ms';
        //     star.style.animationTimingFunction = 'ease-in';
        // });

        // 背景流星流動動畫  reverse (scroll bar 向左側拉)
        // stars.forEach((star,i) => {
        //     let delay = `${Math.random() * 500}ms`;
        //     star.style.animationDelay = delay;
        //     star.style.animationName = 'reverse';
        //     star.style.animationDuration = '500ms';
        //     star.style.animationTimingFunction = 'ease-out';
        // });

        // 無操作背景動畫default時 animationName = 'static'
        stars.forEach((star,i) => {
            let delay = `${Math.random() * 2000}ms`;
            star.style.animationDelay = delay;
            star.style.animationName = 'static';
            star.style.animationDuration = '2000ms';
            star.style.animationTimingFunction = 'ease-in';
        });
    }

    // Time Machine 收合/展開
    $(".tm-btn-collapse").on("touchstart, click", function(){
        $(this).closest(".time-machine").attr("data-mini") == "true" ? $(this).closest(".time-machine").attr("data-mini", "false") : $(this).closest(".time-machine").attr("data-mini", "true");
    });

    // Time Machine 開啟/關閉
    $(".btn-time-machine").on("touchstart, click", function(e){
        e.preventDefault();
        var $tm_oddspage_collapse = $(this).closest(".c-match").find(".collapse .time-machine");
        $tm_oddspage_collapse.attr("data-open") == "true" ? $tm_oddspage_collapse.attr("data-open", "false") : $tm_oddspage_collapse.attr("data-open", "true");
        e.stopPropagation();
    });
});