$(function(){

    // Components
    // ------------------------

    // .c-tab 選擇切換
    $(".c-tabs__content .c-tab .c-btn").on("click", function(){
        $(this).closest(".c-tab").attr("data-selected","true").siblings(".c-tab").attr("data-selected","false");
    });

});
$(function(){

    // Ticket
    // ----------------------------
    // 下注後 .c-ticket 展開/收合
    $(".c-ticket__collapse .c-btn").on("touchstart, click", function(){
        $(this).attr("data-open") == "true" ? $(this).closest(".c-ticket").attr("data-open", "false") : $(this).closest(".c-ticket").attr("data-open", "true");
    });


    // QuickBet
    // ----------------------------
    // 開啟 QuickBet BetDelay
    $(".bettype_oddsbox, .c-odds-button").on("click", function(){
        $(".c-betslip").attr("data-open", "true");
    });
    // 關閉 QuickBet BetDelay
    $(".c-betslip .c-btn--close").on("click", function(){
        $(this).closest(".c-betslip").attr("data-open", "false");
    });

    // 開啟 QuickBet Setting
    $(".c-switch-quickbet .c-btn--quickbet-setting").on("click", function(){
        $(".c-bottom-sheet").attr("data-open", "true");
    });
    // 開啟 QuickBet 後 .c-gc-snackbar 訊息出現
    $(".c-switch-quickbet .c-btn--quickbet").on("click", function(){
        $(this).closest(".main").find(".global-components .c-gc-snackbar").attr("data-open", "true");

        // 出現 1.5 秒後消失
        if( $(this).closest(".main").find(".global-components .c-gc-snackbar").attr("data-open") == "true" ) {
            setTimeout(function(){
                $(".c-gc-snackbar").attr("data-open", "false");
            }, 1500);
        }
    });

    // 開啟 啟用快速投注 .c-btn 切換 / 同步打開 Switch
    $(".c-betting-switch .c-btn").on("click", function(){
        $(this).attr("data-selected") == "true"
        ? $(this).attr("data-selected", "false").find(".c-switch-btn").attr("data-switch", "off")
        : $(this).attr("data-selected", "true").find(".c-switch-btn").attr("data-switch", "on");
    });


    // BetSlip
    // ----------------------------
    // .comquickBet 開啟
    $(".bettype_oddsbox, .c-odds-button").on("click", function(){
        $(".comquickBet").attr("data-status","is-active").find(".overlay").attr("data-status","is-open");

        // (iOS15 body Fixed 導致高度問題 - 故先移除)
        // $("body").attr("data-body-scrolltop", $(window).scrollTop()); // get actual scrolltop
        // $("html").attr("data-scroll-lock","true");
        // $(".main").scrollTop( $("body").attr("data-body-scrolltop") ); // let wrapper scroll to scrolltop
    });

    // .comquickBet 關閉
    $(".comquickBet .overlay, .comquickBet .icon-clear").on("click", function(){
        $(".comquickBet").removeAttr("data-status","is-active");

        // (iOS15 body Fixed 導致高度問題 - 故先移除)
        // $("html").removeAttr("data-scroll-lock");
        // $( window ).scrollTop( $("body").attr("data-body-scrolltop"));
        // $("body").removeAttr("data-body-scrolltop");
    });

    // 切換 bet confirm 開啟
    $(".combtn[js-btn_bet_process]").on("click", function(){

        // Demo 隱藏下注鍵盤區塊
        $(this).closest(".combetting").parent().hide();
        // Demo 顯示Bet Delay區塊
        $(".comtickets_mystake").parent().show();

        // 加上 data-center="true" 使後續面板置中
        $(".comquickBet").attr("data-center","true")
    });


    // BetSlip - Parlay
    // ----------------------------
    // Parlay  BetSlip - Add Parlay
    setTimeout(function(){
        $(".float-icon-parlay > .btn .tooltips").attr("data-status","is-open");
    },1200);

    $(".float-icon-parlay > .btn").on("touchstart, click", function(){
        // $(".page-parlay").attr("data-status","is-open");
        $(".page-parlay").attr("data-status","is-open");
        //設定 .5sec 下注面板 slide in
        function bettingIn() {
            $(".comparlay_betting").attr("data-status","is-open");
        };
        setTimeout(bettingIn, 500);
        $(this).removeAttr("data-status");
        //設定comalert popup
        function AlertIn (){
            setTimeout(function () {
                $(".comalert").attr("data-status","is-open");
            }, 500);
        }
        AlertIn();
        setTimeout(function () {
            $(".comalert").removeAttr("data-status");
        }, 3000);
    });

    $(".comquickBet_container, .comparlay_betting").on("click", function(){
        $(".textfield_input").removeAttr("data-status");
        // return false; 會影響 checkbox input 改下方
        stopPropagation();
    });

    //comparlay_betting 點擊展開
    $(".comparlay_betting .combtn-collapse").on("click", function(){
        $combetting = $(this).closest(".comparlay_betting");
        if( $combetting.hasClass("is-expand")) {
            // recommend 面板預設高度120px
            $combetting.removeClass("is-expand");
            $(this).find("p").html("展开投注区");
        }else{
            $combetting.addClass("is-expand");
            $(this).find("p").html("收合投注区");
        }
    });

    // textfield - focus 切換
    $(".page-parlay .textfield_input").on("touchstart, click", function(){
        $(this).closest(".textfield-stake").attr("data-focus", "true");
        $(this).closest(".comparlay_block").siblings(".comparlay_block").find(".textfield-stake").attr("data-focus", "false");
        $(this).closest(".comparlay_block").attr("data-status", "is-open");
        $(this).closest(".comparlay_block").siblings(".comparlay_block").removeAttr("data-status");
        $(this).closest(".comparlay_block").find(".comkeypad").attr("data-status", "is-open");
        $(this).closest(".comparlay_block").siblings(".comparlay_block").find(".comkeypad").removeAttr("data-status");
    });

    //comparlay bet-btn Click 收起 bet panel / 展開 bet confirm panel
    $(".comparlay_betting .btn-bet").on("click", function(){
        $(".comparlayBet_panel").attr("data-scroll","true");
        $(".comparlay_betting").removeAttr("data-status").hide();
        $(".comparlay_container").removeAttr("data-status").hide();
        $(".comparlayBet_panel .comconfirm").attr("data-status","is-open");
        $(".comparlay_select").attr("data-status","is-open");

        //隱藏 Clear All Btn
        $(".page_header .btn-light").hide();

        // Proccess
        $(".comparlayBet_panel .comtickets_process").attr("data-status","process");

        // ======== 方式 3 ========
        setTimeout(function(){

            ppp = Math.random();

            $("[js-preloader], [js-subject_process]").fadeOut(function(){
                if( ppp >= 0.5){
                    /* 投注成功 */
                    $(".comparlayBet_panel .comtickets_process").attr("data-status","accept");
                    $("[js-subject_accept]").show();
                    $(".iconani-done").attr("data-animate","true");
                    $("[js-directions]").slideDown(300);
                    $("[js-btn_betagain]").remove();
                } else {
                    /* 投注被拒絕 */
                    $(".comparlayBet_panel .comtickets_process").attr("data-status","reject");
                    $("[js-subject_reject], [js-btn_betagain]").show();
                    $(".iconani-warn").attr("data-animate","true");
                    $("[js-btn_checkbet], [js-btn_otherbet], [js-btn_oddspage], [js-btn_viewstate]").remove();
                    $(".comparlayBet_panel .combtn-box").show();
                    // $("[js-btn_betagain]").slideDown(300);

                    $("[js-badge_reject]").removeClass("is-adding", function(){
                        setTimeout(function(){
                            $("[js-badge_reject]").addClass("is-adding");
                        }, 500);
                    });
                };
            });
        }, 3000);
    });


});
$(function(){

    // Bottom Sheet
    // ----------------------------
    // 關閉 Bottom Sheet
    $(".c-overlay, .c-bottom-sheet-list__item, .c-bottom-sheet__header .c-btn--close, .c-quickbet-setting .c-btn--primary").on("click", function(){
            $(this).closest(".c-bottom-sheet-layer").find(".c-bottom-sheet").attr("data-open", "false");

        // 關閉 QuickBet Setting 後 .c-switch-quickbet 選取
        $(this).closest(".main").find(".header .c-switch-quickbet").attr("data-selected", "true");
    });

    // 開啟 問號 .tooltip
    $(".c-bottom-sheet__header .c-btn--quickbet-help").on("click", function(){
        $(this).find(".c-tooltip").attr("data-open") == "true" ? $(this).find(".c-tooltip").attr("data-open", "false") : $(this).find(".c-tooltip").attr("data-open", "true");
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

    $(".c-personalize-offer .c-textfield--betting .c-btn").on("click", function(e){
        e.preventDefault();
        $(this).closest(".c-textfield--betting").attr("data-focus","false").find(".c-textfield__input").attr("value","");
        e.stopPropagation();
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

    // 收合 Cricket Match
    $(".commatch--sport50 .commatch_header .btn:not(.btn-mini-streaming)").on("click", function(){
        $(this).closest(".commatch--sport50").attr("data-status") == "is-open" ? $(this).closest(".commatch--sport50").attr("data-status","") : $(this).closest(".commatch--sport50").attr("data-status", "is-open");
    });


});

$(function(){
    // 足球精彩回顧 08/20
    // film 影片收合
    $(".film__event .btn-event-collapse").on("click", function(){
        var film = $(this).closest(".film");
        if( film.attr("data-status") == "is-close" ) {
            $(this).closest(".film").removeAttr("data-status");
        } else {
            $(this).closest(".film").attr("data-status", "is-close");
        };

    });
});
// [Fold.js] ===========================
$(function () {
    // $(".fold_header .touch").on("touchstart", function(){
    //     $fold = $(this).closest(".fold");
    //     $fold.attr("data-status","is-open");
    //     $fold.find(".bets").slideDown(300);
    // });
    // $(".fold_header .btn").on("touchstart", function(){
    //     $fold = $(this).closest(".fold");
    //     $fold.removeAttr("data-status");
    //     $fold.find(".bets").slideUp(300);
    //     return false;
    // });
    $(".fold_header .touch").on("touchstart, click", function(){
        $fold = $(this).closest(".fold");
        if($fold.attr("data-status")) {
            $fold.removeAttr("data-status");
            $fold.find(".bets").slideUp(300);
        }else{
            $fold.attr("data-status","is-open");
            $fold.find(".bets").slideDown(300);
        }
    });

    // 開啟更多細節
    $(".bets .touch").on("click", function(){
        $bets = $(this).closest(".bets");
        $bets.attr("data-status") == "is-open" ? $bets.removeAttr("data-status") : $bets.attr("data-status","is-open");
    });
    $(".sa-bets .touch").on("click", function(){
        $sabets = $(this).closest(".sa-bets");
        $sabets.attr("data-status") == "is-open" ? $sabets.removeAttr("data-status") : $sabets.attr("data-status","is-open");
    });

    // Click 開啟 Delay Payout
    $(".c-btn--inline-help, .info .c-btn--inline-help").on("click", function(e){
        e.stopPropagation()
        $(".dialog[js-dialog-delaypayout-info]").attr("data-status","is-open");
    });
    // 關閉 Delay Payout 的 Dialog
    $(".dialog[js-dialog-delaypayout-info] .btn").on("click", function(){
        $(".dialog[js-dialog-delaypayout-info]").removeAttr("data-status");
    });

    // 關閉本頁
    $(".page .main-bar > .btn:first-child").on("click", function(){
        $(this).parents(".page").removeAttr("data-status");
        // 移除 body 狀態
        $("body").removeAttr("data-status");
    });

    // 開啟 Popup Result
    $("[js-btn-result]").on("click", function(){
        $("[js-page-result]").attr("data-status","is-open");
    });

    // 開啟 Popup Result Cash Out
    $("[js-btn-result-cashout]").on("click", function(){
        $("[js-page-result-cashout]").attr("data-status","is-open");
    });

    // 開啟 Popup Result Parlay
    $("[js-btn-result-parlay]").on("click", function(){
        $("[js-page-result-parlay]").attr("data-status","is-open");
    });

    // 開啟 Popup Result Bonus
    $("[js-btn-result-bonus]").on("click", function(){
        $("[js-page-result-bonus]").attr("data-status","is-open");
    });

    // 開啟 Popup Result Colossus Bet
    $("[js-btn-colossus]").on("click", function(){
        $("[js-page-colossus]").attr("data-status","is-open");
    });

    // 開啟 Popup Result Virtual Games
    $("[js-btn-vg-result]").on("click", function(){
        window.location="myBets_popup_result_VirtualGames.html";
    });

    // 開啟 Popup Result Betbuilder
    $("[js-btn-smg-result]").on("click", function(){
        $("[js-page-smg-result]").attr("data-status","is-open");
    });

    // 開啟 Popup Result N7(Lotto)
    $("[js-btn-result-lotto]").on("click", function(){
        $("[js-page-result-lotto]").attr("data-status","is-open");
    });

    // 開啟 Popup Detail N7(Lotto)
    $("[js-btn-detail-lotto]").on("click", function(){
        $("[js-page-detail-lotto]").attr("data-status","is-open");
    });
    // 開啟 Popup Result Bbin
    $("[js-btn-bbin-result]").on("click", function(){
        $("[js-page-detail-Bbin]").attr("data-status","is-open");
    });
    // 開啟 Popup Result Penalty
    $("[js-btn-penalty-result]").on("click", function(){
        $("[js-page-detail-Penalty]").attr("data-status","is-open");
    });
    // 開啟 Popup Result WM
    $("[js-btn-wm-result]").on("click", function(){
        $("[js-page-detail-wm]").attr("data-status","is-open");
    });
});
$(function () {
    // go to top
    var gotoTop = $(".gotoTop");
    var scroll_height = window.screen.height * 1;
    $(document).scroll(function () {
        // console.log("scroll_height=" + scroll_height + "      window.scrollY=" + window.scrollY);
        window.scrollY >= scroll_height ? gotoTop.attr("data-status", "is-show") : gotoTop.removeAttr("data-status");
    });
    gotoTop.click(function () {
        var body = $("html, body");
        body.stop().animate({scrollTop: 0}, 600, 'swing');
    });


    // .c-float-live-streamer ----------------------
    // 判斷 [Lite] parlay 開啟時 Live Streamer 的定位
    // $(".float-layer .float-icon-parlay").attr("data-show == true", function(){
    //     $(this).closest(".main").siblings(".c-float-live-streamer").attr("style", "bottom: 230px;");
    // });

    // 點擊[X] 關閉 Live Streamer
    $(".c-float-live-streamer .c-btn").on("click", function(){
        $(this).closest(".c-float-live-streamer").attr("data-open","false");
    });

    // 點圖片開啟 Live Streamer 的 Dialog
    $(".c-float-live-streamer img").on("click", function(e){
        e.stopPropagation()
        $(".dialog[js-dialog-live-streamer]").attr("data-status","is-open");
    });
    // 按 OK 關閉 Dialog
    $(".dialog[js-dialog-live-streamer] .btn").on("click", function(){
        $(".dialog[js-dialog-live-streamer]").removeAttr("data-status");
    });
});
$(function () {
    // 主選單點擊操作
    $(".main-bar .tab .btn").on("click", function(){
        $tab_index = $(this).index(".main-bar .tab .btn");
        console.log($tab_index);
        // 主選單點擊切換
        $(this).parent("li").attr("data-status","is-active").siblings("li").removeAttr("data-status");
        // 子選單切換

        $(".header_submenu .submenu").removeAttr("data-status");
        $(".header_submenu .submenu").eq( $tab_index ).attr("data-status","is-open");



        // Odds Page 增加內距高度
        setTimeout(function(){
            $(".main .content").css("padding-top", $(".main .header").innerHeight());
        }, 200);

    });

    // 預設 Odds Page 內距高度
    $(".main .content").css("padding-top", $(".main .header").innerHeight());

    // 預設 c-bettype-filter 選單預設高度
    $(".content .c-bettype-filter").css("top", $(".main .header").innerHeight());

    // 頁面上閜捲動時
    $(document).scroll(function () {
        // 子選單隱藏
        // $(".main .header_submenu .submenu").removeAttr("data-status");

        // Odds Page 恢復內距高度
        $(".main .content").css("padding-top", $(".main .header").innerHeight());
        window.scrollY >= 100 ? $(".main .header").attr("data-status", "is-close").attr("data-mini-streaming-fixed","true") && $('.c-mini-streaming[data-scroll-to-top="true"]').css("top","66px") && $('.c-mini-streaming[data-scroll-to-bottom="true"]').css("top","66px") : $(".main .header").removeAttr("data-status").removeAttr("data-mini-streaming-fixed","true") && $('.c-mini-streaming[data-scroll-to-top="true"]').css("top","98px") && $('.c-mini-streaming[data-scroll-to-bottom="true"]').css("top","98px");

        // Y軸滾動 > 0 時 .c-bettype-filter 增加狀態
        window.scrollY > 0 ? $(".content .c-bettype-filter").attr("data-sticky", "true"):$(".content .c-bettype-filter").attr("data-sticky", "false");


        $(".header-dropdown").attr("data-open", "false");
    });

    // 點擊 .submenu 重新計算 Odds Page 內距高度
    $(".submenu .btn").on("click", function(){
        // Odds Page 增加內距高度
        setTimeout(function(){
            $(".main .content").css("padding-top", $(".main .header").innerHeight());
        }, 200);
    });

    // 子選單內的Tab切換
    $(".header_submenu .submenu .btn").on("click", function(){
        $(this).attr("data-status","is-active").siblings(".btn").removeAttr("data-status");
    });

    // Sort層子選單內的Tab切換
    $(".header_sortmenu .sortmenu .btn").on("click", function(){
        $(this).attr("data-status","is-active").siblings(".btn").removeAttr("data-status");
    });

    // Filter 子選單內的切換效果
    $(".dropdown-filter > .btn").on("click", function(){
        $btn_filter = $(this).parent();
        $btn_filter.addClass("open");
        $(".content").on("touchstart", function(){
            $btn_filter.removeClass("open");
        });
        $checked = $(this).next(".dropdown-menu").find(".checkbox input:checked").size()
        if( $checked > 0){
            $(this).children("i").removeClass("icon-filter").addClass("icon-filter-on");
        } else {
            $(this).children("i").removeClass("icon-filter-on").addClass("icon-filter");
        }
    });


    // 20220329-拔除 Menu
    // 開啟 SideBar
    // $(".btn[data-open-sidebar]").on("touchstart", function(){
    //     $(".side-nav").attr("data-status","is-open");
    //     $(".side-bar .overlay").attr("data-status","is-open");

    //     // 增加 body 狀態
    //     $("body").attr("data-status","is-sidebar-open");
    // });

    // 關閉 SideBar
    // $(".side-bar .overlay").on("touchstart", function(){
    //     $(".side-nav").removeAttr("data-status");
    //     $(this).removeAttr("data-status");

    //     // 增加 body 狀態
    //     $("body").removeAttr("data-status");
    // });

    // Side Tab切換效果
    // $(".side-nav_tabs .btn").on("touchstart", function(){
    //     $(this).parent("li").attr("data-status","is-active").siblings("li").removeAttr("data-status");
    //     var tabIndex = $(this).parent().index() + 1;
    //     $(this).closest(".side-nav_content-main").find(".side-nav_menu:nth-child("+ tabIndex +")").attr("data-status","is-open").siblings().removeAttr("data-status");
    // });

    // Side More看更多
    // $(".side-nav_more .btn").on("touchstart", function(){
    //     $(this).closest(".side-nav_menu").attr("data-more","is-open");
    //     $(".side-nav").animate({scrollTop:300},300);
    // });

    // Side Submenu展開子選單
    // $(".side-nav_item.has-submenu>.btn").on("touchstart", function(){
    //     var $submenu = $(this).closest(".side-nav_item");
    //     if($submenu.attr("data-status") == "is-open") {
    //         $submenu.removeAttr("data-status");
    //     } else {
    //         $submenu.attr("data-status","is-open");
    //     }
    // });

    // 連結網址
    // $header_tab_link = $(".header .main-bar .tab li");
    // $header_tab_link.eq(2).on("click", function(){
    //     location.href = "Odds_alllive.html";
    // });
    // $header_tab_link.eq(3).on("click", function(){
    //     location.href = "Odds_Soccer.html";
    // });
    // $header_tab_link.eq(4).on("click", function(){
    //     location.href = "Odds_soccer_parlay.html";
    // });
    $header_tab_link = $(".header .main-bar .tab li .btn");
    $header_tab_link.on("click", function(){
        if( $(this).html() == "滚球" ) {
            // location.href = "Odds_alllive.html";
        } else if( $(this).html() == "体育博彩" ) {
            location.href = "Odds_Soccer_Today.html";
        } else if( $(this).html().indexOf("串关") == 0 ) {
            location.href = "Odds_Soccer_Parlay.html";
        }
    });

    // 設定連結
    $(".header .btn-back").on("touchstart", function(){
        location.href = "Lobby.html";
    });

    // SASA Header
    $(".header_market > .btn, .header_market .dropdown >.btn").on("touchstart", function(){
        $(".header_market > [data-status='is-active'], .header_market .dropdown >[data-status='is-active']").removeAttr("data-status");
        $(this).attr("data-status", "is-active");
    });

    $(".header_market_float").on("click", function(){
        $(".header").removeAttr("data-status");
    });

    // Switch Network
    $(".btn-network").on("click", function(){
        if( $(this).data("status") == "active") {
            $(this).closest(".header").siblings(".network").removeAttr("data-status");
            $(this).data("status", "");
        } else {
            $(this).closest(".header").siblings(".network").attr("data-status", "is-open");
            $(this).data("status", "active");
        }
    });
    $(".network .overlay, .network .icon-clear").on("click", function(){
        $(this).closest(".network").removeAttr("data-status");
    });
    // $(".network_btn").on("click", function(){
    //     $(this).attr("data-status", "is-active").siblings().removeAttr("data-status");
    //     // $network_text = $(this).children(".network_text").text();
    //     $network_status = $(this).children(".network_icon").attr("data-network");
    //     $(this).closest(".network").removeAttr("data-status").siblings(".header").find(".btn .network_icon").attr("data-network", $network_status);
    // });
    $(".network_btn").on("click", function(){
        $(this).attr("data-status", "is-active").siblings().removeAttr("data-status");
        // $network_text = $(this).children(".network_text").text();
        $network_status = $(this).children(".network_icon").attr("data-network");
        $(this).closest(".network").attr("data-status","is-loading").siblings(".header").find(".btn .network_icon").attr("data-network", $network_status);
    });

    // Click Msg Panel to close itself
    $(".msg").on("click", function(){
        $(this).closest(".network").removeAttr("data-status");
    });

    // Click 切換 Market
    $(".header-filter .btn-group .btn:not(.btn-dropdown)").on("click", function(){
        $(this).attr("data-status","is-active").siblings().removeAttr("data-status");
    });

    $(".header-filter .btn-group .btn:not(.btn-dropdown)").on("click", function(){
        $(".header .dropdown-early").removeClass("open");
        $(this).closest(".header-filter").attr("data-early","false");
    });

    // 早盘 dropdown-menu 移位 Filter 子選單內的切換效果
    $(".header .btn-dropdown").on("click", function(){
        $btn_dropdown = $(this).closest(".header").find(".dropdown-early");
        $btn_dropdown_open = $(this).closest(".header").find(".dropdown-early.open");

        if($btn_dropdown_open.length >= 1) {
            $(this).attr("data-open","false");
            $btn_dropdown_open.removeClass("open");
            $(this).closest(".header-filter").attr("data-early","false");
        }else if($btn_dropdown_open.length == 0 && $(this).attr("data-status") == "is-active"){
            $(this).attr("data-open","true");
            $btn_dropdown.addClass("open");
            $(this).closest(".header-filter").attr("data-early","active");
        }
        else{
            $(this).attr("data-open","true");
            $btn_dropdown.addClass("open");
            $(this).closest(".header-filter").attr("data-early","open");
        }
    });

    // 早盘 dropdown-menu 內部 li 切換
    $(".header .dropdown-early li").on("click", function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".header .btn-dropdown").attr("data-status","is-active").attr("data-open","false").siblings(".btn").removeAttr("data-status");
        $(this).closest(".dropdown-early").removeClass("open");
        $(this).closest(".dropdown-early").siblings(".header-filter").attr("data-early","false");
    })
    // 判斷若 .btn-group 只有一個.btn, 則 dropdown加上 .left
    var $btn_numbers = $(".header_filter .btn-group .btn").length;
    if( $btn_numbers == 1) {
        $(".header_filter .dropdown-early").addClass("left")
    }


    // Core Header ver.1
    // --------------------------------------
    // Header Dropdown
    $(".header-dropdown__btn").on("touchstart, click", function(){
        $(this).closest(".header-dropdown").attr("data-open") == "true" ? $(this).closest(".header-dropdown").attr("data-open", "false") : $(this).closest(".header-dropdown").attr("data-open","true");
    });

    // $(".header-dropdown__item").on("touchstart, click", function(){
    //     if( $(this).attr("data-selected", "false") ) {
    //         $(this).attr("data-selected", "true");
    //         $(this).siblings(".header-dropdown__item").attr("data-selected", "false");

    //         if( $(this).attr("data-open") != "undefined" ) {
    //             $(this).attr("data-open", "true");
    //         }
    //         $(this).siblings(".header-dropdown__item[data-open]").attr("data-open", "false");
    //     }
    // });

    $(".header-dropdown__item").on("touchstart, click", function(){
        if( $(this).attr("data-open") != "undefined" ) {
            $(this).attr("data-open", "true");
        }
        $(this).siblings(".header-dropdown__item[data-open]").attr("data-open", "false");
    });

    // Header Switch (ver 1)
    $(".header-switch__item").on("touchstart, click", function(){
        if( $(this).attr("data-selected", "false") ) {
            $(this).attr("data-selected", "true");
            $(this).siblings(".header-switch__item").attr("data-selected", "false");
        }
    });

    // Header Switch Quickbet
    function c_switch_quickbet_tooltip_show() {
        // .c-switch-quickbet 未點選時，顯示 tooltip
        if( $(".c-switch-quickbet").attr("data-selected") == "false" ){
            $(".c-switch-quickbet").children(".c-tooltip").attr("data-open", "true");
        }
        // tooltip 開啟 2 秒後關閉
        if( $(".c-switch-quickbet").children(".c-tooltip").attr("data-open") == "true" ) {
            setTimeout(function(){
                $(".c-switch-quickbet").children(".c-tooltip").attr("data-open", "false");
            }, 2000);
        }
    }

    c_switch_quickbet_tooltip_show();

    // Header Switch (ver 1.1)
    function c_switch_tooltip_show() {
        // .c-switch-to-parlay 未點選時，顯示 tooltip
        // if( $(".c-switch-to-parlay").attr("data-selected") == "false" ){
        //     $(".c-switch-to-parlay").children(".c-tooltip").attr("data-open", "true");
        // }
        // tooltip 開啟 2 秒後關閉
        if( $(".c-switch-to-parlay").children(".c-tooltip").attr("data-open") == "true" ) {
            setTimeout(function(){
                $(".c-switch-to-parlay").children(".c-tooltip").attr("data-open", "false");
            }, 2000);
        }
    }

    c_switch_tooltip_show();

    // .c-switch-to-parlay　點選/取消
    $(".c-switch-to-parlay .c-btn").on("touchstart, click", function(){
        $(this).closest(".c-switch-to-parlay").attr("data-selected") == "true" ? $(this).closest(".c-switch-to-parlay").attr("data-selected", "false") : $(this).closest(".c-switch-to-parlay").attr("data-selected","true");
        c_switch_tooltip_show();
    });

    // .c-switch-quickbet　點選/取消
    $(".c-switch-quickbet .c-btn:first-child").on("touchstart, click", function(){
        $(this).closest(".c-switch-quickbet").attr("data-selected") == "true" ? $(this).closest(".c-switch-quickbet").attr("data-selected", "false") : $(this).closest(".c-switch-quickbet").attr("data-selected","true");
    });

    // Header Submenu Switch
    $(".header-submenu .submenu .btn").on("click", function(){
        $(this).attr("data-selected","true").siblings(".btn").removeAttr("data-selected");
    });

    // Header child-menu Switch
    $(".header-child-menu .btn").on("click", function(){
        $(this).attr("data-selected","true").siblings(".btn").removeAttr("data-selected");
    });

    // Click esport to open child-menu
    $(".submenu .icon-sport43").closest(".btn").on("click", function(){
        $(this).closest(".submenu").siblings("[js-esports-menu]").attr("data-status","is-open");
    });

    // Click other siblings to close esport child-menu
    $(".submenu [class*=icon-sport]:not(.icon-sport43)").closest(".btn").on("click", function(){
        $("[js-esports-menu]").removeAttr("data-status");
    });

    // Click cricket to open child-menu
    $(".submenu .icon-sport50").closest(".btn").on("click", function(){
        $(this).closest(".submenu").siblings("[js-cricket-menu]").attr("data-status","is-open");
    });

    // Click other siblings to close esport child-menu
    $(".submenu [class*=icon-sport]:not(.icon-sport50)").closest(".btn").on("click", function(){
        $("[js-cricket-menu]").removeAttr("data-status");
    });

    // Click .c-btn--myfav to selected
    $(".header-filter .c-btn--myfav").on("click", function(){
        $(this).attr("data-selected") == "true" ? $(this).attr("data-selected", "false") : $(this).attr("data-selected", "true");
    });

    // Click .c-btn--filter to selected
    $(".header-filter .c-btn--filter").on("click", function(){
        $(this).attr("data-selected") == "true" ? $(this).attr("data-selected", "false") : $(this).attr("data-selected", "true");
    });
});
$(function () {
    //判斷.match-bar內容是否>螢幕寬度
    if($(".match-bar_scroller").length>0) {
        var subScroll = $(".match-bar_container")[0].scrollWidth;
        var subWidth = $(".match-bar_scroller").innerWidth();
        if( subScroll > subWidth) {
            $(".match-bar").attr("data-more","true");
        }
        //判斷.match-bar_scroller 滾動至底 移除data-more
        $(".match-bar_scroller").on("scroll", function(){
            var subLeft = $(".match-bar_scroller")[0].scrollLeft;
            if( subScroll - subLeft <= subWidth) {
                $(".match-bar").removeAttr("data-more");
            }else{
                $(".match-bar").attr("data-more","true");
            }
        });
    }

    $(".match-bar_panel").on("click", function(){
        $(this).attr("data-selected","true").siblings(".match-bar_panel").removeAttr("data-selected");
    });

    // .match-bar_float
    $(".match-bar_float .btn-match-hide").on("click", function(){
        $("body").removeAttr("data-switchmatch");
        $(".match-bar").removeAttr("data-status");
    });
    $(".match-bar_float .btn-match-show").on("click", function(){
        $("body").attr("data-switchmatch","true");
        $(".match-bar").attr("data-status","is-open");
    });
});
$(function () {
    // 切換 dark mode
    $(".c-me-account .c-btn--darkmode").on("touchstart, click", function(){
        $(this).closest("html").attr("data-darkmode") == "true" ? $(this).closest("html").attr("data-darkmode", "false") : $(this).closest("html").attr("data-darkmode", "true");
    });

    // Me - Setting 開啟
    $(".appbar .appbar_item:last-child .btn").on("touchstart, click", function(){
        $(".page-setting").attr("data-status", "is-open").closest("body").attr("data-status", "is-page-open");
    });

    // Me - Setting 關閉 / 讓版上滾動 overflow: hidden; 拔除
    $(".page-setting .page__header .btn").on("touchstart, click", function(){
        $(this).closest(".page-setting").removeAttr("data-status", "is-open").closest("body").removeAttr("data-status", "is-page-open");
    });


    // .c-page-list .c-btn 切換 / 同步打開 Switch 與 Textfield
    $(".c-page:not(:nth-child(8)):not(:nth-child(9)):not(:nth-child(10)):not(:nth-child(12)) .c-page-list__item .c-btn").on("touchstart, click", function(){
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
    $(".c-me-account > .c-btn--icon").on("touchstart, click", function(){
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
$(function(){

    // Click 開啟 mini-streaming
    $(".btn-mini-streaming").on("click", function(){
        $(this).find(".tooltips").removeAttr("data-status");
        var $thisBtn = $(this);
        if($thisBtn.attr("data-open")) {
            $thisBtn.removeAttr("data-open").closest(".commatch").find(".c-mini-streaming").removeAttr("data-open");
        }else{
            $(".btn-mini-streaming").not(this).removeAttr("data-open").closest(".commatch_content").siblings(".c-mini-streaming").removeAttr("data-open").removeAttr("data-fixed");
            $thisBtn.attr("data-open","true").closest(".commatch").find(".c-mini-streaming").attr("data-open","true");
        }
        
    });

    // Click 關閉 mini-streaming
    $(".btn-mini-streaming[data-open='true']").on("click", function(){
        $(this).removeAttr("data-open").closest(".commatch").find(".c-mini-streaming").removeAttr("data-open").removeAttr("data-fixed");
    });

    $(".c-mini-streaming .btn-clear").on("click", function(){
        $(this).closest(".c-mini-streaming").removeAttr("data-open").removeAttr("data-fixed").closest(".commatch").find(".btn-mini-streaming").removeAttr("data-open");
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
    $(window).on('scroll', function () {

        // 已開啟影片
        var $Streaming = $('.c-mini-streaming[data-open="true"]'); 
        // 已開啟影片高度
        var $StreamingHeight = $('.c-mini-streaming[data-open="true"]').outerHeight();
        // 視窗高度
        var $WindowHeight = $(window).height();
        // Header Submenu 高度 + Header Filter 高度
        var $HeaderHeight = $(".header-submenu").height() + $(".header-filter").height();
        // Appbar 高度
        var $AppbarHeight = $(".appbar").height();
        // 已開啟影片與視窗上方距離 (由於 Streaming本身貼時會變成絕對定位, 所以用父層 Match 定位來做依據)
        var $StreamingTop = $('.c-mini-streaming[data-open="true"]').closest(".commatch").offset().top - $(window).scrollTop();
        // 已開啟影片與視窗下方距離
        var $StreamingBottom = $WindowHeight - $StreamingTop;
        
        // 當滾動後 Streaming 與 上方距離小於 Header Submenu 高度 + Header Filter 高度
        if( $StreamingTop < $HeaderHeight ) {
            $Streaming.attr("data-scroll-to-top","true");
        }
        // 當滾動後 Streaming 與 下方距離小於 Appbar 高度
        else if( $StreamingBottom < $AppbarHeight ) {
            $Streaming.attr("data-scroll-to-bottom","true");
        }
        // 其餘狀況應該移除絕對定位返回原始位置
        else {
            $Streaming.removeAttr("data-scroll-to-top").removeAttr("data-scroll-to-bottom");
        }
 
        

        // 判斷 Header 是否有 [data-status="is-close"] <== 此段移至 Header.js 內一併控制
        // var HeaderStatus = $(".header");
        // if( HeaderStatus.attr("data-status","is-close") ) {
        //     $('.c-mini-streaming[data-fixed="true"]').css("top","66px");
        // }else{
        //     $('.c-mini-streaming[data-fixed="true"]').css("top","98px");
        // }

    });

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

$(function(){

    // Click 開啟 multi goal
    $(".btn-more-lines").on("click", function(){
        $(this).closest(".commatch_bettype").siblings(".c-more-lines").attr("data-open","true");
    });

    // Click icon-clear 關閉 multi goal
    $(".c-more-lines .c-more-lines__btn").on("click", function(){
        $(this).closest(".c-more-lines").attr("data-open","false");
    });

    // Multi Goal Tab 切換
    $(".c-tabs__content .c-tab .btn").on("click", function(){
        $(this).closest(".c-tab").attr("data-selected","true").siblings(".c-tab").attr("data-selected","false");
        $(".c-more-lines .bettype_group").eq($(this).closest(".c-tab").index()).attr("data-selected", "true").siblings(".bettype_group").attr("data-selected","false");
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
$(function () {
    // NewBie
    // --------------------------------------
    // Bettype Tutorial
    // $(".header-dropdown__btn").on("touchstart, click", function(){
    //     $(this).closest(".header-dropdown").attr("data-open") == "true" ? $(this).closest(".header-dropdown").attr("data-open", "false") : $(this).closest(".header-dropdown").attr("data-open","true");
    // });

    // 點擊關閉 .c-bettype-tutorial
    $(".c-bettype-tutorial .c-btn--close").on("click", function(){
        $(this).closest(".c-bettype-tutorial").attr("data-open", "false");
    });

    // 點擊全開/全關 League
    $(".c-odds-table__header").on("click", function(){
        if( $(".c-odds-table--newbie").attr("data-open") == "true" ) {
            $(this).closest(".c-odds-table").attr("data-open", "false").find(".c-league").attr("data-open", "false").find(".c-match-group").slideUp(300);
        } else {
            $(this).closest(".c-odds-table").attr("data-open", "true").find(".c-league").attr("data-open", "true").find(".c-match-group").slideDown(300);
        }

    });

    // 點擊開啟/關閉單場 League
    $(".c-league__header").on("click", function(){
        $(this).closest(".c-league").attr("data-open") == "true" ? $(this).closest(".c-league").attr("data-open", "false").find(".c-match-group").slideUp(300) : $(this).closest(".c-league").attr("data-open", "true").find(".c-match-group").slideDown(300);
    });

    // 點擊開啟單場 Match
    $(".c-match").on("click", function(){
        if($(this).attr("data-open") == "false") {
            $(this).attr("data-open", "true");
        }
    });

    // 點擊移除 c-newbie-help
    $(".c-newbie-help__btn").on("click", function(){
        $(this).closest(".c-newbie-help").remove();
    });


    // 點擊關閉單場 Match
    // $(".c-match-collapse").on("click", function(e){

    //     if($(this).closest(".c-match").attr("data-open") == "true") {
    //         $(this).closest(".c-match").attr("data-open", "false");
    //     }
    //     e.stopPropagation();
    // });




    // 打開 Tutorial 教學 Popup
    // --------------------------------------
    // 點擊開啟 .c-tutorial--newbie
    $(".c-tooltip__content >.c-btn").on("click", function(){
        $(this).closest(".content").siblings(".c-tutorial--newbie").attr("data-open", "true");
        $("body").attr("data-status", "is-page-open");
    });

    $(".header-dropdown__btn-tutorial").on("click", function(){
        $(this).closest(".header").siblings(".c-tutorial--newbie").attr("data-open", "true");
        $("body").attr("data-status", "is-page-open");
    });

});
$(function () {

    // ****** Notice UM start **********
    // 關閉視窗按鈕
    $(".noticePanel .btn-clear").on("click", function(){
        $(".noticePanel").removeClass("in");
    });
    // 3秒出現視窗
    setTimeout(function(){
        $(".noticePanel").addClass("in");
    },3000);
    // ****** Notice UM end ************
    //***** Promotion notificationPopup start***********/
                
    var animationEnd = "animationend webkitAnimationEnd";

                
    //預先隱藏收合 btn
    $("[js-hide-more]").hide();

    var $items = $(".notificationPopup_listitem");
    var $itemsLength = $items.length;
    var $itemsIndex = $itemsLength;

    // Notification 出現動畫
    var itemsAdding = function(){
        console.log("出現第 " + $itemsIndex + " 則");

        $(".notificationPopup_listitem").eq($itemsIndex-1).attr({
            "data-visible": "true",
            "data-adding": "true"
            }).one(animationEnd, function(){
                $(this).removeAttr("data-adding");
        });
        // $(".notificationPopup_listitem").eq($itemsIndex-2).attr("data-visible", "false");
        // 檢查數量
        itemsCheck();
    }

    // 檢查有2筆數以上時，於下方出現控制面板
    var itemsCheck = function(){
        if( $(".notificationPopup").attr("data-expand") != "true" ) {
            $(".notificationPopup_more .btn:first-child span").text($itemsLength + $text_expand);
        }
        if( $itemsLength >= 2 ){
            $(".notificationPopup").attr("data-more", "true").one(animationEnd, function(){
                $(".notificationPopup_listitem").attr("data-visible","true");
            });
        } else if( $itemsLength == 1 ){
            $(".notificationPopup").removeAttr("data-more data-expand");

            // });
        }
        console.log("目前有 " + $itemsLength + " 筆");
    }

    // 開始陸續出現每筆 Notification 面板
    setTimeout( function(){
        itemsAdding();
    }, 3000);


    // 展開/收合
    // 展開文字
    var $text_expand = " More notification";
    var $text_collapse = "Show less"
    $(".notificationPopup_more .btn:first-child").on("touchstart", function(){
        if( $(".notificationPopup").attr("data-expand") == "true" ){
            console.log("收合項目");
            $(".notificationPopup").attr("data-collapsing", "true");
            $(".notificationPopup_listitem:last-child").one(animationEnd, function(){
                $(this).closest(".notificationPopup").removeAttr("data-expand data-collapsing");
            });
            $(".notificationPopup_more .btn:first-child span").text($itemsLength + $text_expand);
        } else {
            console.log("展開項目");
            $(".notificationPopup").attr({
                "data-expand": "true",
                "data-expanding": "true"
                }).one("animationstart", function(){
                    $(".notificationPopup_list").scrollTop(2000);
                    console.log("捲到下方");
            });
            $(".notificationPopup_listitem:first-child").one(animationEnd, function(){
                $(this).closest(".notificationPopup").removeAttr("data-expanding");
            });

            $(".notificationPopup_more .btn:first-child span").text($text_collapse);
        }
    });

    // 全部移除
    $("[js-dismiss]").on("touchstart", function(){
        console.log("全部清除");
        $(".notificationPopup").attr("data-removing", "true").one(animationEnd, function(){
            $(this).removeAttr("data-more data-removing data-expand");
            $(".notificationPopup_listitem").stop().removeAttr("data-visible data-removing").hide();
            $itemsIndex = $itemsLength;
            setTimeout( function(){
                $(".notificationPopup_listitem").show();
                itemsAdding();
            }, 3000);
        });
    });

    // 各別手動移除
    $(".notificationPopup_listitem .btn-delete").on("touchstart", function(){
        $(this).closest(".notificationPopup_listitem").attr("data-removing", "true").one(animationEnd, function(){
            $(this).remove();
            $itemsLength -= 1;
            // 檢查數量
            itemsCheck();
        });
        if( $(".notificationPopup[data-expand='true']").length < 1){
            $(".notificationPopup_listitem").eq(-2).attr("data-last2nd", "true");
        }
    });

    //***** Promotion notificationPopup start***********/
});
$(function(){

    // Click .commarket_header 展開/收合 All .comleague
    $(".commarket_header").on("click", function(){
        if($(this).closest(".commarket").attr("data-status") == "is-open"){
            $(this).closest(".commarket").removeAttr("data-status");
            $(this).closest(".commarket").find(".comleague").removeAttr("data-status").find(".commatch_list").slideUp();
        } else {
            $(this).closest(".commarket").attr("data-status", "is-open");
            $(this).closest(".commarket").find(".comleague").attr("data-status", "is-open").find(".commatch_list").slideDown();
        }
    });

    // Click .comleague_header 展開 .commatch_list
    $(".comleague_header").on("click", function(){
        if($(this).closest(".comleague").attr("data-status") == "is-open"){
            $(this).closest(".comleague").removeAttr("data-status");
            $(this).closest(".comleague").find(".commatch_list").slideUp();
        } else {
            $(this).closest(".comleague").attr("data-status", "is-open");
            $(this).closest(".comleague").find(".commatch_list").slideDown();
        }
    });

    // Click .commatch_content .commatch_arrow 關閉 content
    $(".commatch_content .commatch_arrow").on("click", function(){
        $(this).closest(".commatch").removeAttr("data-status");
        $(this).closest(".commatch_content").slideUp();
    });

    // Click .commatch_header .commatch_arrow 展開 content
    $(".commatch_header .commatch_arrow").on("click", function(){
        $(this).closest(".commatch").attr("data-status", "is-open");
        $(this).closest(".commatch_header").siblings(".commatch_content").slideDown();
    });
    
});
$(function(){
    // Egamer Tooltip 開啟/關閉
    $(".commatch_more .btn-egamer").on("touchstart, click", function(){
        $(this).children(".tooltips").attr("data-status") == "is-open" ? $(this).children(".tooltips").removeAttr("data-status") : $(this).children(".tooltips").attr("data-status", "is-open");
    });


    // My Favorite 開啟/關閉
    $(".c-btn--myfav:not(.header-filter .c-btn--myfav, .video_head_league .c-btn--myfav)").on("click", function(e){
        e.preventDefault();
        var scrollTop = $(window).scrollTop();

        // 動畫初始位置
        var offsetTop = $(this).find(".c-icon--star-outline").offset().top;
        var offsetLeft = $(this).find(".c-icon--star-outline").offset().left;

        // 動畫結束位置
        var endTop = $(".header-filter .c-btn--myfav .c-icon--star-outline").offset().top;
        var endLeft = $(".header-filter .c-btn--myfav .c-icon--star-outline").offset().left;

        if($(this).attr('data-added') == 'true') {
            $(this).attr("data-added","false");
        }else if($(this).attr('data-added') == 'false'){
            $(this).attr("data-added","true");

            // 增加My Fav動畫執行完, 加上紅點
            // function reddotadded() {
            //     setTimeout(function(){
            //         $(".header-filter .c-btn--myfav .c-badge").show();
            //     },900);
            // }

            // reddotadded();

            // 根據點擊的按鈕位置給css變數起始值
            $(".c-float-favorite").get(0).style.setProperty("--starttop", offsetTop - scrollTop + 'px');
            $(".c-float-favorite").get(0).style.setProperty("--startleft", offsetLeft + 'px');

            // header-filter favorite button位置給css變數終點值
            $(".c-float-favorite").get(0).style.setProperty("--endtop", endTop - scrollTop + 'px');
            $(".c-float-favorite").get(0).style.setProperty("--endleft", endLeft + 'px');

            // $(".c-float-favorite").attr("data-popup","true");

            $(".c-float-favorite").attr("data-added","true");

            // 動畫跑完復位
            setTimeout(function(){
                $(".c-float-favorite").attr("data-added","false");
            },900);
        }

        e.stopPropagation();

        // var favsize = $('.c-btn--myfav:not(.header-filter .c-btn--myfav)[data-added="true"]').size();

        // 寫入 加入Favorite 數量於 .badge
        // $(".header-filter .c-btn--myfav .badge").text(favsize);

        // 增加 My Favorite時, 計算已加入的數量 >1 時header-filter的 Fav button 也加上[data-added="true"], <1 時則加上[data-added="false"]

        // function removeadded() {
        //     setTimeout(function(){
        //         $(".header-filter .c-btn--myfav").attr("data-added","false");
        //     },900);
        // }

        // function addfav() {
        //     myadd = setTimeout(function(){
        //         // $(".header-filter .c-btn--myfav").attr("data-active","true");
        //         $(".header-filter .c-btn--myfav").attr("data-added","true");
        //         removeadded();
        //     },900);
        // }

        // function activefav() {
        //     myadd = setTimeout(function(){
        //         $(".header-filter .c-btn--myfav").attr("data-active","true");
        //     },900);
        // }

        // 有再次點擊 My Favorite 時停止計時器
        // function removefav(){
        //     clearTimeout(myadd);
        // }

        // addfav();

        // if(favsize >= 1) {
        //     activefav();
        //     if($(this).attr('data-added') == 'true') {
        //         addfav();
        //     }

        // }else{
        //     removefav();
        //     $(".header-filter .c-btn--myfav").attr("data-added","false").attr("data-active","false").attr("data-selected","false");
        // }


    });


    // Match
    // ----------------------------
    $(".c-match__header .c-btn--icon").on("touchstart, click", function(){
        $(this).closest(".c-match").attr("data-open") == "true" ? $(this).closest(".c-match").attr("data-open","false") : $(this).closest(".c-match").attr("data-open", "true");
    });


    // Volleyball AIO 開啟 .c-bettype-detail
    $(".c-bettype__col  .c-btn--collapse").on("touchstart, click", function(){
        $(this).closest(".c-bettype__row").siblings(".c-bettype-detail").attr("data-open") == "true" ? $(this).closest(".c-bettype__row").siblings(".c-bettype-detail").attr("data-open","false") : $(this).closest(".c-bettype__row").siblings(".c-bettype-detail").attr("data-open", "true");
    });


    // BitCoin
    // ----------------------------
    // 開啟/關閉 .c-odds-table[data-sport="175"] 內全部 .c-match
    $(".c-bitcoin-header .c-btn--caret").on("touchstart, click", function(){
        $(this).attr("data-selected") == "true" ? $(this).attr("data-selected","false") : $(this).attr("data-selected", "true");

        if($(this).is('[data-selected="true"]')){
            $('.c-odds-table[data-sport="175"] .c-match').attr("data-open", "true");
        } else {
            $('.c-odds-table[data-sport="175"] .c-match').attr("data-open", "false");
        }
    });

    // 開啟/關閉 .c-bitcoin-chart
    $(".c-bitcoin-header > .c-btn--shape-rounded").on("touchstart, click", function(){
        $(this).attr("data-selected") == "true" ? $(this).attr("data-selected","false") : $(this).attr("data-selected", "true");
        $(".c-bitcoin-chart").attr("data-open") == "true" ? $(".c-bitcoin-chart").attr("data-open","false") : $(".c-bitcoin-chart").attr("data-open", "true");
    });

    // 開啟/關閉 .c-odds-table[data-sport="175"] - compact view
    $(".c-bitcoin-header .c-switch-btn").on("touchstart, click", function(){
        if($(this).is('[data-switch="on"]')){
            $('.c-odds-table[data-sport="175"]').attr("data-compact", "true");
        } else {
            $('.c-odds-table[data-sport="175"]').attr("data-compact", "false");
        }
    });

    // 切換 .c-odds-table[data-sport="175"] - vertical view
    $(".c-bitcoin-header .c-dropdown__list > div:last-child > div:nth-child(2) .c-radio").on("touchstart, click", function(){
        $('.c-odds-table[data-sport="175"]').attr("data-direction", "vertical");
    });

    // 切換 .c-odds-table[data-sport="175"] - horizontal view
    $(".c-bitcoin-header .c-dropdown__list > div:last-child > div:nth-child(3) .c-radio").on("touchstart, click", function(){
        $('.c-odds-table[data-sport="175"]').attr("data-direction", "horizontal");
    });

    // 開啟 .c-odds-table[data-sport="175"] 的 BetSlip
    $('.c-odds-table[data-sport="175"] .c-odds-button').on("click", function(){
        $(".comquickBet").attr("data-status","is-active").find(".overlay").attr("data-status","is-open");

        $("body").attr("data-body-scrolltop", $(window).scrollTop()); // get actual scrolltop
        $("html").attr("data-scroll-lock","true");
        $(".main").scrollTop( $("body").attr("data-body-scrolltop") ); // let wrapper scroll to scrolltop
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
// Cricket AIO Scoreboard Detail Collapse
$(function(){

    $(".c-scoreboard--sport50 .c-scoreboard__btn").on("click", function(){
        // $(this).closest(".c-scoreboard--sport50").attr("data-detail") == "true" ? $(this).closest(".c-scoreboard--sport50").attr("data-detail","false").closest(".c-scoreboard--sport50").find(".c-scoreboard__detail").slideUp(300) : $(this).closest(".c-scoreboard--sport50").attr("data-detail", "true").closest(".c-scoreboard--sport50").find(".c-scoreboard__detail").slideDown(300);
        $(this).siblings(".c-scoreboard__detail").attr("data-open") == "true" ? $(this).siblings(".c-scoreboard__detail").attr("data-open","false") : $(this).siblings(".c-scoreboard__detail").attr("data-open", "true");
    });

});

$(function () {
    $(".header-menu .btn-search").on("click", function(){
        $(".page-search").attr("data-status","is-open");
    });

    $(".main-bar-search .textfield_input").on("touchstart", function(){
        $(".main-bar-search .dropdown").addClass("open");
    });

    $(".main-bar-search .dropdown>.btn").on("touchstart", function(){
        $(".page-search").removeAttr("data-status");
    });

    // sasa > .searchbar 使用
    // --------------------------- 
    $(".searchbar .textfield_input").on("touchstart", function(){
        $(".searchbar").attr("data-status","is-active");
        // $(".searchbar").attr("data-suggestions","true");
    });

    $(".searchbar .textfield .btn-cancel").on("touchstart", function(){
        $(".searchbar").removeAttr("data-status","is-active");
        // $(".searchbar").removeAttr("data-suggestions","true");
        $(".searchbar .textfield").removeAttr("data-status","is-focus");
    });
    // --------------------------- 

});
$(function(){
    // Dark Mode 切換
    $("[js-btn-darkmode]").on("touchstart, click", function(){
        $(this).attr("data-status") == "is-active" ? $(this).removeAttr("data-status") : $(this).attr("data-status", "is-active");
        if($(this).is('[data-status="is-active"]')){
            $("html").attr("data-darkmode", "true");
        } else {
            $("html").attr("data-darkmode", "false");
        }
    });
});
$(function(){


    // 從 .video_lobby 裡的 按鈕來打開 TV
    $(".video_play .btn:not(.btn.disable)").on("touchstart", function(){
        $(this).closest(".video").attr("data-lobby","false").siblings(".video_head").attr("data-intv","true");

        // 延遲1.5秒顯示 .c-gc-msg--overlay
        setTimeout(function(){
            $(".video .c-gc-msg--overlay").attr("data-open","true");
        },1500);

    });

    // Streaming 切換收合與開啟
    $(".btn-close-video").on("touchstart", function(){
        var $this = $(this);
        var $thisVideo = $(this).closest(".video_head").siblings(".video");
        if ($thisVideo.attr("data-status")) {
            $this.removeAttr("data-status");
            $thisVideo.removeAttr("data-status");
        } else {
            $this.attr("data-status","is-close");
            $thisVideo.attr("data-status","is-close");
        }
    });

    // Streaming statistics按鈕 與 GV按鈕 與 TV按鈕 切換
    $(".video_head_league > .btn-statistics").on("touchstart", function(){
        $(this).attr("data-selected","true").siblings(".btn-switch-video").attr("data-selected","false");
    });
    $(".video_head_league .btn-switch-video").on("touchstart", function(){
        $(this).attr("data-selected","true").siblings(".btn-switch-video, .btn-statistics").attr("data-selected","false");
    });

    // 關閉影片最小化，並返回到 video lobby
    $(".video_container .btn-close, .video_head_league .btn-close").on("click", function(e){
        e.preventDefault();
        $(".video").attr("data-lobby", "true").removeAttr("data-mini");
        $(".compage_content .video_head").removeAttr("data-intv");
    });

    // 當 Single Match Scroll 時，若 [.video] 不是隱藏或沒有固定住時，打開 Header 裡的 Match 資訊
    $(".compage_content").scroll(function(){
        if( $(".video").attr("data-status") == "is-close" || $(".video-wrapper").attr("data-pin") == "true" ){

        } else {
            if( $(this).scrollTop() >= 210 ){
                $(".video").attr("data-mini", "true");
            } else {
                $(".video").removeAttr("data-mini");
            }
        };
    });

    // Streaming 靜音按鈕
    $(".btn-mute").click(function(){
        if( $(this).attr("data-status") == "is-active" ){
            $(this).removeAttr("data-status");
        } else {
            $(this).attr("data-status", "is-active");
        }
    });

    // Streaming 釘選按鈕切換
    $(".btn-pin-video, .btn-pin").on("touchstart", function(){
        $(".video-wrapper, .btn-pin-video").attr("data-pin") == "true" ? $(".video-wrapper, .btn-pin-video").removeAttr("data-pin") : $(".video-wrapper, .btn-pin-video").attr("data-pin", "true");
    });

    // Click btn-refresh 重整 video
    $(".btn-refresh").click(function(e){
        var $thisRefresh = $(this)
        $thisRefresh.attr("data-status","is-active");
        setTimeout(function(){
            $thisRefresh.removeAttr("data-status");
        },1000)
        event.stopPropagation()
    });

    // 捲動控制 [.video_head] 顯示/隱藏
    var top1 = 0;
    var top2 = 0;

    $(".compage_content").scroll(function(){
        var top2 = $(this).scrollTop();
        var top3 = $(".video_head_league").height() + $(".video").height();
        if ( $(".video_head").attr("data-intv") == "true") {
            if(top2 > top1){
                $(".video_head").attr("data-showhead","false");
            }else{
                $(".video_head").attr("data-showhead","true")
            }
        } else {
            if(top2 > top3){
                $(".video_head").attr("data-showhead","false");
            }else{
                $(".video_head").attr("data-showhead","true")
            }
        }

        // // 判斷向下滾動
        // if ( top1 < top2) {
        //     // 判斷收合計分表, 並停止後續動作
        //     if( top2 = top3 ) {
        //         $(".c-scoreboard__detail").attr("data-open","false");
        //     }

        // }

        // setTimeout(function(){ top1 = top2;},0)

        // 捲動控制 [.video_head] 是否顯示底色
        if(top2 > 0){
            $(".video_head").removeAttr("data-scrolltop");
        }else{
            $(".video_head").attr("data-scrolltop","true");
        }

    });

    //SingleMatch Tab 切換
    $(".comtab li").on("click", function(){
        $(this).attr("data-status","is-active").siblings("li").removeAttr("data-status").closest(".comtab").siblings(".btn-statistics").removeAttr("data-status");
        $(".comtab_block .comtab_panel").eq($(this).index()).attr("data-status", "is-open").siblings(".comtab_panel").removeAttr("data-status");
    });

    // SingleMatch 內 .bettype 收合
    $(".comsingle .bettype > .bettype_title").on("click", function(){
        $(this).closest(".bettype").attr("data-open") == "true" ? $(this).closest(".bettype").attr("data-open","false") : $(this).closest(".bettype").attr("data-open", "true");
        $(this).siblings().slideToggle(300);
    });

    // SingleMatch 內 .btn-collapse-all 收合全部 bettype
    $(".comsingle .btn-collapse-all").on("click", function(){
        $(this).attr("data-open") == "true" ?
        $(this).attr("data-open","false").closest(".comtab_block").find(".bettype, .c-bettypes .c-bettype:only-child").attr("data-open","false").closest(".comtab_block").find(".bettype_title").each(function(){$(this).siblings().slideUp(300)}).closest(".comtab_block").find(".time-machine").attr("data-mini","true") :
        $(this).attr("data-open", "true").closest(".comtab_block").find(".bettype, .c-bettypes .c-bettype:only-child").attr("data-open","true").closest(".comtab_block").find(".bettype_title").each(function(){$(this).siblings().slideDown(300)}).closest(".comtab_block").find(".time-machine").attr("data-mini","false");
    });

    // 點擊 開啟/關閉 My Favrite 狀態
    $(".video_head_league .c-btn--myfav").on("click", function(){
        $(this).attr("data-added") == "true" ? $(this).attr("data-added","false") : $(this).attr("data-added", "true");
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

    // MyBets
    // ----------------------------
    // 點擊後 .bets 展開/收合
    // $(".bets_content").on("touchstart, click", function(){
    //     $(this).closest(".bets").attr("data-status") == "is-open" ? $(this).closest(".bets").removeAttr("data-status") : $(this).closest(".bets").attr("data-status","is-open");
    // });

    // Week-report

    // 點擊後 .fold-total 展開/收合
    $(".fold-total__header").on("touchstart, click", function(){
        $(this).closest(".fold-total").attr("data-open") == "true" ? $(this).closest(".fold-total").attr("data-open","false") : $(this).closest(".fold-total").attr("data-open","true");
    });

    // 點擊後 .c-week-report 展開/收合
    $(".c-week-report-content").on("touchstart, click", function(){
        $(this).closest(".c-week-report").attr("data-open") == "true" ? $(this).closest(".c-week-report").attr("data-open","false") : $(this).closest(".c-week-report").attr("data-open","true");
    });

    // ipv6 click copy button show snackbar
    $(".text-ip .c-btn").on("click", function(){
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
    $(".c-tutorial .c-btn--close, .c-tutorial__step-6 > .c-btn--primary").on("click", function(){
        $(this).closest(".c-tutorial").attr("data-open","false");
        $("body").removeAttr("data-status");
    });
});
$(function () {
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

    $(".tm-btn-info").on("click", function(){
        $(".dialog[js-dialog-timemachine-info]").attr("data-status","is-open");
    });

    $(".dialog[js-dialog-timemachine-info] .btn").on("click", function(){
        $(".dialog[js-dialog-timemachine-info]").removeAttr("data-status");
    });

    // Time Machine 收合/展開
    $(".tm-btn-collapse").on("touchstart, click", function(){
        $(this).closest(".time-machine").attr("data-mini") == "true" ? $(this).closest(".time-machine").attr("data-mini", "false") : $(this).closest(".time-machine").attr("data-mini", "true");
    });

    // Time Machine 開啟/關閉
    $(".btn-time-machine").on("click", function(){
        $tm_oddspage_collapse = $(this).closest(".commatch_content").siblings(".time-machine");
        $tm_oddspage_collapse.attr("data-open") == "true" ? $tm_oddspage_collapse.attr("data-open", "false") : $tm_oddspage_collapse.attr("data-open", "true");
    });

    // .tm-slider__range::-webkit-slider-thumb 加上動畫效果
    // var $tm_thumb = $(".tm-slider");

    // function thumbShineRemove(){
    //     $tm_thumb.attr("data-thumb-hint","false");
    // }
    // function thumbShine(){
    //     $tm_thumb.attr("data-thumb-hint","true");
    //     setTimeout(thumbShineRemove, 600);
    // }
    // setInterval(function(){ thumbShine() }, 1600);
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
$(function(){
    $(".demo-btn--light").on("touchstart, click", function(){
        $(this).attr("data-selected", "true");
        $(".demo-btn--dark").attr("data-selected", "false");
        $("html").attr("data-darkmode", "false");
    });
    $(".demo-btn--dark").on("touchstart, click", function(){
        $(this).attr("data-selected", "true");
        $(".demo-btn--light").attr("data-selected", "false");
        $("html").attr("data-darkmode", "true");
    });
});
$(function(){

    // .league 開啟/關閉
    $(".league_header").on("touchstart, click", function(){
        $(this).closest(".league").attr("data-status") == "is-open" ? $(this).closest(".league").attr("data-status", "") : $(this).closest(".league").attr("data-status", "is-open");
    });

    // .match 開啟/關閉
    $(".match_header").on("touchstart, click", function(){
        $(this).closest(".match").attr("data-status") == "is-open" ? $(this).closest(".match").attr("data-status", "") : $(this).closest(".match").attr("data-status", "is-open");
    });

    // .betType_block 開啟/關閉
    $(".betType_header").on("touchstart, click", function(){
        $(this).closest(".betType_block").attr("data-status") == "is-open" ? $(this).closest(".betType_block").attr("data-status", "") : $(this).closest(".betType_block").attr("data-status", "is-open");
        $(this).next("div").attr("style") == "display:block;" ? $(this).next("div").attr("style", "display:none;") : $(this).next("div").attr("style", "display:block;");
    });


    // .tab tab-single 切換
    $(".tab tab-single .btn").on("click", function(){
        $(this).parent("li").attr("data-status","is-active").next("li").removeAttr("data-status");
        var tab_panel = $(this).parent().index() + 1;
        $(this).closest(".betType_block").find(".side-nav_menu:nth-child("+ tab_panel +")").attr("data-status","is-open").siblings().removeAttr("data-status");
    });

});