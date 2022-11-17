$(function(){
    // Balance
    // ----------------------------

    // 隱藏更多資訊
    $(".c-ev-balance__icon .c-ev-btn--icon:eq(0)").on("click", function(){
        const $target = $(".c-ev-balance");
        
        if( $target.attr("data-open") == "false" ) {
            // 顯示金額
            $target.attr("data-open", "true");
            $(this).children().removeClass("c-ev-icon--visibility").addClass("c-ev-icon--unvisibility");
            $(".c-ev-topbar__btn--account").attr("data-hide","true");
        } else {
            // 隱藏金額
            $target.attr("data-open", "false");
            $(this).children().removeClass("c-ev-icon--unvisibility").addClass("c-ev-icon--visibility");
            $(".c-ev-topbar__btn--account").attr("data-hide","false");
        }
    });


    // Account
    // ----------------------------
    
    // Account tab 按鈕選中的滑動效果
    const account__nav_selected = function(){
        $el = $(".c-ev-account__nav-item[data-selected='true']");
        $thisWidth = $el.children().width();
        $thisLeft = $el.children().offset().left - $el.parent().offset().left;

        $(".c-ev-account__nav-selected").css({
            'width': $thisWidth,
            'transform': 'translateX(' + $thisLeft + 'px)',
            'opacity': 1
        });
    }

    // Account tab 按鈕選中狀態
    $(".c-ev-account__nav-item").on("click", function(){
        $(".c-ev-account__nav-item").removeAttr("data-selected");
        $(this).attr("data-selected", "true");
        account__nav_selected();
    });

    // 初始檢查 Account tab 選中狀態
    $(".c-ev-topbar__btn--account").on("click", function(){
        setTimeout(account__nav_selected, 100);
        $(this).attr("data-active") == "true" ? $(this).attr("data-active", "false") : $(this).attr("data-active", "true");
    });

    // 開啟 Account 分頁
    $(".c-ev-account__nav-item").on("click",function(){
        const $accountItem = $(".c-ev-account__items").eq(0);
        $(".c-ev-account__items").removeAttr("data-open");
        $accountItem.attr("data-open", "true");
        // 移除 Settings Icon 選中狀態
        $(".c-ev-account__nav-settings").removeAttr("data-selected");
    });

    // 開啟 Settings 分頁
    $(".c-ev-account__nav-settings").on("click", function(){
        // 增加 Settings Icon 選中狀態
        $(this).attr("data-selected", "true");
        const $settings = $(".c-ev-account__items").eq(1);
        $(".c-ev-account__nav-item").removeAttr("data-selected");
        $(".c-ev-account__nav-selected").removeAttr("style");
        $(".c-ev-account__items").removeAttr("data-open");
        $settings.attr("data-open", "true");
    });

    // 收合
    $(".c-ev-account__collapse-btn").on("click", function(){
        const $collapse = $(this).parent();
        $collapse.attr("data-open") == "true" ? $collapse.attr("data-open", "") : $collapse.attr("data-open", "true");
    });

    // 下拉選單
    $(".c-ev-account__dropdown-btn, .c-ev-account__dropdown-item-btn").on("click", function(){
        const $dropdown = $(this).parent();
        $dropdown.attr("data-open") == "true" ? $dropdown.attr("data-open", "") : $dropdown.attr("data-open", "true");
    });

    // 內部下拉選單
    $(".c-ev-account__dropdown-item").on("click", function(){
        $(this).attr("data-selected" , "true").siblings().attr({
            "data-selected": "false",
            "data-open": "false"
        });

    });
});
$(function(){
    // OddsTable
    // ----------------------------
    $(".c-ev-btn--favorite").on("touchstart, click", function(e){
        $(this).attr("data-selected") == "true" ? $(this).attr("data-selected", "false") : $(this).attr("data-selected", "true");
        e.stopPropagation();
    });

    $(".c-ev-btn--refresh").on("touchstart, click", function(e){
        $(this).attr("data-active") == "true" ? $(this).attr("data-active", "false") : $(this).attr("data-active", "true");
        e.stopPropagation();
    });

    $(".c-ev-odds-button").on("touchstart, click", function(){
        $(this).attr("data-selected") == "true" ? $(this).attr("data-selected", "false") : $(this).attr("data-selected", "true");
    });

    $(".c-ev-odds-table:not(.c-ev-odds-table--in-play) .c-ev-league__header").on("touchstart, click", function(){
        $(this).closest(".c-ev-league").attr("data-open") == "true" ? $(this).closest(".c-ev-league").attr("data-open", "false") : $(this).closest(".c-ev-league").attr("data-open", "true");
        $(this).closest(".c-ev-league").find(".c-ev-match-group").slideToggle(200);
    });

    // OddsButton 點擊後展開下注面板
    $(".c-ev-odds-table .c-ev-odds-button").on("touchstart, click", function(){
        var $single = $(".c-ev-betslip--single");
        $single.attr("data-open","true");
        $single.attr("data-size","medium");
        $single.find(".c-ev-betting-keypad").attr("data-open", "false");
        $single.find(".c-ev-textfield").attr("data-focus", "false");

        // 計算 .c-ev-odds-button 已點選的數量
        var $odds_selected_num = $(".c-ev-odds-table .c-ev-odds-button[data-selected='true']").length;
        console.log($odds_selected_num);

        // .c-ev-odds-button 已點選數量 > 2 時，開啟 MultiBet Icon
        if($odds_selected_num > 1 ){
            $single.attr("data-open","false");
            $(".c-ev-float-bet").attr("data-open","true");
        }

        // .c-ev-odds-button 已點選數量 < 2 時，開啟 SingleBet 面板
        if($odds_selected_num < 2 ){
            $single.attr("data-open","true");
            $(".c-ev-float-bet").attr("data-open","false");
        }

        // .c-ev-odds-button 已點選數量 < 1 時，關閉 SingleBet 面板
        if($odds_selected_num < 1 ){
            $single.attr("data-open","false");
        }
    });

    // Lite OddsButton (用於 VirtualSports, Esports)
    $(".betType_item .btn").on("touchstart, click", function(){
        $(this).find(".betType_odds").attr("data-status") == "is-active" ? $(this).find(".betType_odds").attr("data-status", "") : $(this).find(".betType_odds").attr("data-status", "is-active");
    });


    // SideBar
    // ----------------------------
    // 開啟 SideBar
    $(".c-ev-topbar .c-ev-topbar__btn--menu").on("touchstart", function(){
        $(".side-nav").attr("data-status","is-open");
        $(".side-bar .overlay").attr("data-status","is-open");
        
        // 增加 body 狀態
        $("body").attr("data-status","is-sidebar-open");
    });
    
    // 關閉 SideBar
    $(".side-bar .overlay").on("touchstart", function(){
        $(".side-nav").removeAttr("data-status");
        $(this).removeAttr("data-status");
        
        // 增加 body 狀態
        $("body").removeAttr("data-status");
    });


    // Search
    // ----------------------------
    // 開啟 Search
    $(".c-ev-topbar .c-ev-btn:last-child").on("touchstart", function(){
        $(".page-search").attr("data-status","is-open");
    });


    // AppBar
    // ----------------------------
    $(".appbar .appbar_item:last-child .btn").on("touchstart, click", function(){
        $(".page-setting").attr("data-status") == "is-open" ? $(".page-setting").attr("data-status", "") : $(".page-setting").attr("data-status", "is-open");
    });

    
    // Page
    // ----------------------------
    // 關閉 Page 面板
    $(".c-ev-page__title > .c-ev-btn").on("touchstart, click", function(){
        $(this).closest(".c-ev-page").attr("data-open","false");
    });

    // Page - Account
    // ----------------------------
    $(".page-setting .switch-group .btn").on("touchstart, click", function(){
        $(this).siblings(".btn").removeAttr("data-status","is-active");
        $(this).attr("data-status","is-active");
    });

    // Page - Select League
    // ----------------------------
    // $(".c-ev-dropdown__list .c-ev-dropdown__item:last-child .c-ev-btn").on("touchstart, click", function(){
    //     $(".page-select").attr("data-status") == "is-open" ? $(".page-select").attr("data-status", "") : $(".page-select").attr("data-status", "is-open");
    // });

    // Page - Transaction
    // ----------------------------
    $(".appbar .appbar_item:nth-child(5) .btn").on("touchstart, click", function(){
        $(".page-transaction").attr("data-status") == "is-open" ? $(".page-transaction").attr("data-status", "") : $(".page-transaction").attr("data-status", "is-open");
    });

    // Single Match
    // ----------------------------
    $(".c-ev-match__event").on("touchstart, click", function(){
        $(".compage").attr("data-status","is-open");
    });
});
$(function(){
    // textfield--stake 共用
    // ----------------------------
    $(".c-ev-textfield--stake .c-ev-textfield__input").on("touchstart", function(){
        $(this).closest(".c-ev-textfield").attr("data-focus", "true");
        if($(this).val().length>0) {
            $(this).closest(".c-ev-textfield").attr("data-selected", "true");
        }
    });
    // $(".c-ev-textfield--stake .c-ev-btn").on("touchstart", function(){
    //     $(this).siblings(".c-ev-textfield__input").val("").closest(".c-ev-textfield").attr({"data-focus":"false","data-selected":"false"});
    // });
    
    // 鍵盤輸入
    $(".c-ev-betting-keypad__number .c-ev-betting-keypad__btn:not(:last-child)").on("touchstart", function(){
        var $myParent = $(this).closest(".c-ev-betting");
        var $myInput = $myParent.find(".c-ev-textfield__input");
        var $myVal = $myInput.val();
        var $myBtn = $(this).children("span").text();
        if( $myParent.find(".c-ev-textfield").attr("data-selected") == "true" ){
            $myInput.val($myBtn);
        } else {
            $myInput.val($myVal+$myBtn);
        };
        $(".c-ev-textfield").attr({"data-focus":"false","data-selected": "false"});
    });

    // 鍵盤清除
    $(".c-ev-betting-keypad__number .c-ev-betting-keypad__btn:last-child").on("touchstart", function(){
        var $myParent = $(this).closest(".c-ev-betting");
        var $myInput = $myParent.find(".c-ev-textfield__input");
        var $newVal = $myInput.val().substr(0,$myInput.val().length-1);
        console.log($newVal);
        $myInput.val($newVal);
        $(".c-ev-textfield").attr("data-selected", "false");
    });
    // textfield--stake 在 .c-ev-betslip__main / .c-ev-betslip--single 內
    // ----------------------------
    $(".c-ev-betslip__main .c-ev-textfield__input, .c-ev-betslip--single .c-ev-betting .c-ev-textfield__input").on("touchstart, click", function(){
        $myParent = $(this).closest(".c-ev-betting");
        if( $myParent.find(".c-ev-betting-keypad").attr("data-open") == "true" ){
            $myParent.find(".c-ev-betting-keypad").attr("data-open","false");
            $(this).closest(".c-ev-textfield").attr("data-selected","false");
        } else {
            $myParent.find(".c-ev-betting-keypad").attr("data-open","true");
        }
        // $(this).closest(".c-ev-betting").find(".c-ev-betting-keypad").attr("data-open", "true");
        $(this).closest(".c-ev-betslip--single").attr("data-size", "large");
     });
    $(".c-ev-betslip__main .c-ev-textfield--stake .c-ev-btn, .c-ev-betslip--single .c-ev-betting .c-ev-textfield--stake .c-ev-btn").on("touchstart, click", function(){
        $(this).closest(".c-ev-betting").find(".c-ev-betting-keypad").attr("data-open", "false");
        $(this).closest(".c-ev-betslip--single").attr("data-size", "medium");
    });

    // textfield--stake 在 .c-ev-betslip__stake 內
    // ----------------------------
    $(".c-ev-betslip__stake-panel .c-ev-textfield__input").on("touchstart, click", function(){
        $(this).closest(".c-ev-betting-stake").attr("data-open", "true").find(".c-ev-betting-keypad").attr("data-open", "true");
     });
    $(".c-ev-betslip__stake-panel .c-ev-textfield--stake .c-ev-btn").on("touchstart, click", function(){
        $(this).closest(".c-ev-betting-stake").attr("data-open", "false").find(".c-ev-betting-keypad").attr("data-open", "false");
    });

    // textfield--stake 在 .c-ev-betting-status 內
    // ----------------------------
    $(".c-ev-betting-status .c-ev-textfield__input").on("touchstart, click", function(){
        $(this).closest(".c-ev-betting-stake").siblings(".c-ev-betting-keypad").attr("data-open", "true");
     });
    $(".c-ev-betting-status .c-ev-textfield--stake .c-ev-btn").on("touchstart, click", function(){
        $(this).closest(".c-ev-betting-stake").siblings(".c-ev-betting-keypad").attr("data-open", "false");
    });

    // 點擊 BET 按鈕，開啟 tooltip
    // ----------------------------
    $(".c-ev-betslip--single .c-ev-betting-stake > .c-ev-btn").on("touchstart, click", function(){
        var tip = $(this).siblings(".c-ev-tooltip");
        tip.attr("data-open") == "true" ? tip.attr("data-open", "false") : tip.attr("data-open", "true");
    });
    $(".c-ev-betslip:not(.c-ev-betslip--single) .c-ev-betslip__footer .c-ev-btn--primary").on("touchstart, click", function(){
        var tip = $(this).closest(".c-ev-betslip").find(".c-ev-tooltip");
        tip.attr("data-open") == "true" ? tip.attr("data-open", "false") : tip.attr("data-open", "true");
    });

    // .c-ev-betslip--single 點擊 X 按鈕，關閉 betslip
    // ----------------------------
    $(".main .c-ev-betslip--single .c-ev-ticket__delete .c-ev-btn").click(function(){
        $(".c-ev-betslip--single").attr("data-open", "false");
        $(".c-ev-odds-table .c-ev-odds-button").attr("data-selected", "false");
        $(".c-ev-betslip--single .c-ev-betting-keypad").attr("data-open", "false");
        $(".c-ev-betslip--single .c-ev-textfield").attr("data-focus", "false");
    });

    // 開啟 .c-ev-page--betslip 面板
    // ----------------------------
    $(".c-ev-float-bet .c-ev-btn").on("touchstart, click", function(){
        $(".c-ev-page--betslip").attr("data-open","true");
    });

    // 偵測畫面捲動時縮小 .c-ev-betslip--single
    // ----------------------------
    $('body').on({'touchmove': function() {
        if ($(".main .c-ev-betslip--single").attr("data-open") == "true") {
            $(".c-ev-betslip--single").attr("data-size", "small");
            $(".c-ev-betslip--single .c-ev-betting-keypad").attr("data-open", "false");
            $(".c-ev-betslip--single .c-ev-textfield").attr("data-focus", "false");
        }
    }});

    // 點擊縮小的 .c-ev-betslip--single，再次展開
    // ----------------------------
    $(".c-ev-ticket__main").on("touchstart, click", function(){
        if ($(".main .c-ev-betslip--single").attr("data-size") == "small") {
            $(".c-ev-betslip--single .c-ev-betting-keypad").attr("data-open", "true");
            $(".c-ev-betslip--single .c-ev-textfield").attr("data-focus", "true");
            $(".c-ev-betslip--single").attr("data-size", "large");
        }
    });

    // 收起 .c-ev-betslip--single
    // ----------------------------
    $(".c-ev-betslip--single .c-ev-betting-header").on("touchstart, click", function(){
        $(".c-ev-betslip--single").attr("data-size","small");
        $(".c-ev-betslip--single .c-ev-betting-keypad").attr("data-open", "false");
        $(".c-ev-betslip--single .c-ev-textfield").attr("data-focus", "false");
    });

    // 切換 Single / Parlay 的 Tab
    // ----------------------------
    $(".c-ev-page--betslip .c-ev-tab").on("touchstart, click", function(){
        var index = $(this).index();
        $(".c-ev-page--betslip .c-ev-betslip").eq(index).attr("data-open","true").siblings().attr("data-open","false");
    });


    // 切換 page betslip stake panel
    $(".c-ev-page--betslip .c-ev-betting-option").on("touchstart, click", function(){

        var panel = $(".c-ev-betslip__stake-panel");
        var txt = ".c-ev-betting-option .c-ev-text";
        panel.attr("data-open") == "false" ? panel.attr("data-open","true").find(txt).text("Hide All Multiples") : panel.attr("data-open", "false").find(txt).text("Show All Multiples");
    });


});
$(function(){
    // Tabs
    // ----------------------------
    $(".c-ev-tab:not([data-disabled=true])").on("touchstart, click", function(){
        $(this).attr("data-selected", "true").siblings().removeAttr("data-selected");
    });

    // Dropdown
    // ----------------------------
    $(".c-ev-dropdown>.c-ev-btn").on("touchstart, click", function(){
        var $target = $(this).closest(".c-ev-dropdown");
        $target.attr("data-open") == "true" ? $target.attr("data-open", "false") : $target.attr("data-open", "true");
    });

    $(".c-ev-market__item .c-ev-dropdown__container").on("touchstart, click", function(){
        $(this).closest(".c-ev-dropdown").attr("data-open","false");
    });

    // Textfield ( Prevent mobile keyboard )
    // ----------------------------
    $(".c-ev-textfield__input").on("touchstart", function(){
        $(this).removeAttr('readonly').select();
    });
    $(".c-ev-textfield__input").blur(function(){
        $(this).attr('readonly', 'readonly');
        $(this).closest(".c-ev-textfield").attr("data-selected","false");
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
    $("#coverflow").flipster({ style: 'carousel', start: 0 });
});
$(function(){
    // Header
    // ----------------------------
// c-ev-navigation tab 按鈕選中的滑動效果
    const navigation__selected = function(){
        $el = $(".c-ev-navigation__list .c-ev-btn[data-selected='true']");
        $thisWidth = $el.children(".c-ev-text").width();
        $thisLeft = $el.children(".c-ev-text").offset().left - $el.parent().offset().left;
        $(".c-ev-navigation__selected").css({
            'width': $thisWidth,
            'transform': 'translateX(' + $thisLeft + 'px)',
            'opacity': 1
        });
    }

    // .c-ev-navigation 點擊切換 open 狀態
    $(".c-ev-navigation__list>.c-ev-btn").on("click", function(){
        var $target = $(this);
        var $targetClass = $(this).find("i");
        var n = $(this).attr("data-sport");

        // 將 所有的 .c-ev-btn 之下的 iconcolor 改為 iconfont
        // $(".c-ev-navigation__list>.c-ev-btn").each(function(){
        //     var s = $(this).attr("data-sport");
        //     $(this).find("i").attr("class","c-ev-icon c-ev-icon--sport" + s);
        // })

        $target.attr("data-selected","true").siblings(".c-ev-btn").attr("data-selected","false");

        // 將 選中的 .c-ev-btn 之下的 iconfont 改為 iconcolor
        // $targetClass.attr("class","c-ev-iconcolor-sport" + n);

        // 判斷若為 e-sports 展開下層選單
        if( $(this).attr("data-sport") == 43 ) {
            $(".c-ev-sub-navigation").attr("data-open","true");
        }else{
            $(".c-ev-sub-navigation").attr("data-open","false");
        }

        // 將選中的data-sport傳到外層c-ev-navigation
        $(".c-ev-navigation").attr("data-sport", n);


        // Account tab 按鈕選中狀態
        navigation__selected();
    });

    // 初始化 Sport 按鈕的選中狀態
    navigation__selected();

    // .c-ev-sub-navigation 點擊切換 open 狀態
    $(".c-ev-sub-navigation__list>.c-ev-btn").on("touchstart, click", function(){
        var $target = $(this);
        var $targetClass = $(this).find("i");
        var n = $(this).attr("data-sport");

        // 將 所有的 .c-ev-btn 之下的 iconcolor 改為 iconfont
        // $(".c-ev-sub-navigation__list>.c-ev-btn").each(function(){
        //     var s = $(this).attr("data-sport");
        //     $(this).find("i").attr("class","c-ev-icon c-ev-icon--sport" + s);
        // })

        $target.attr("data-selected","true").siblings(".c-ev-btn").attr("data-selected","false");

        // 將 選中的 .c-ev-btn 之下的 iconfont 改為 iconcolor
        // $targetClass.attr("class","c-ev-iconcolor-sport" + n);

    });

    // 判斷 html內 是否存在 .c-ev-navigation
    if($(".c-ev-navigation").length > 0){
        //判斷.c-ev-navigation__list內容是否>自身寬度
        var navigationScroll = $(".c-ev-navigation__list")[0].scrollWidth;
        var navigationWidth = $(".c-ev-navigation__list").innerWidth();
        if( navigationScroll > navigationWidth) {
            $(".c-ev-navigation .c-ev-hint-more-scroll-x").attr("data-open","true");
        }
        //判斷.c-ev-navigation__list 滾動至底 移除data-open
        $(".c-ev-navigation__list").on("scroll", function(){
            var navigationLeft = $(".c-ev-navigation__list")[0].scrollLeft;
            if( navigationScroll - navigationLeft <= navigationWidth) {
                $(".c-ev-navigation .c-ev-hint-more-scroll-x").removeAttr("data-open");
            }else{
                $(".c-ev-navigation .c-ev-hint-more-scroll-x").attr("data-open","true");
            }
        });
    }

    // 判斷 html內 是否存在 .c-ev-sub-navigation
    if($(".c-ev-sub-navigation").length > 0){
        //判斷.c-ev-navigation__list內容是否>自身寬度
        var subnavigationScroll = $(".c-ev-sub-navigation__list")[0].scrollWidth;
        var subnavigationWidth = $(".c-ev-sub-navigation__list").innerWidth();
        if( subnavigationScroll > subnavigationWidth) {
            $(".c-ev-sub-navigation .c-ev-hint-more-scroll-x").attr("data-open","true");
        }
        //判斷.c-ev-navigation__list 滾動至底 移除data-open
        $(".c-ev-sub-navigation__list").on("scroll", function(){
            var subnavigationLeft = $(".c-ev-sub-navigation__list")[0].scrollLeft;
            if( subnavigationScroll - subnavigationLeft <= subnavigationWidth) {
                $(".c-ev-sub-navigation .c-ev-hint-more-scroll-x").removeAttr("data-open");
            }else{
                $(".c-ev-sub-navigation .c-ev-hint-more-scroll-x").attr("data-open","true");
            }
        });
    }


    // 判斷 html內 是否存在 .c-ev-bettype-filter .c-ev-tabs
    if($(".c-ev-bettype-filter .c-ev-tabs").length > 0){
        //判斷.c-ev-bettype-filter .c-ev-tabs內容是否>自身寬度
        var tabsScroll = $(".c-ev-bettype-filter .c-ev-tabs")[0].scrollWidth;
        var tabsWidth = $(".c-ev-bettype-filter .c-ev-tabs").innerWidth();
        if( tabsScroll > tabsWidth) {
            $(".c-ev-bettype-filter .c-ev-hint-more-scroll-x").attr("data-open","true");
        }
        //判斷.c-ev-bettype-filter .c-ev-tabs 滾動至底 移除data-open
        $(".c-ev-bettype-filter .c-ev-tabs").on("scroll", function(){
            var tabsLeft = $(".c-ev-bettype-filter .c-ev-tabs")[0].scrollLeft;
            if( tabsScroll - tabsLeft <= tabsWidth) {
                $(".c-ev-bettype-filter .c-ev-hint-more-scroll-x").removeAttr("data-open");
            }else{
                $(".c-ev-bettype-filter .c-ev-hint-more-scroll-x").attr("data-open","true");
            }
        });
    }

    // filter switch切換    
    $(".c-ev-bettype-filter__switch").on("touchstart", function(){
        $(this).attr("data-selected") == "1" ? $(this).attr("data-selected","2") : $(this).attr("data-selected", "1");
    });

    // 點擊 .c-ev-market__item 切換
    $(".c-ev-market-item:not(.c-ev-market-item--dropdown)").on("touchstart, click", function(){
        $(this).attr("data-selected","true").siblings(".c-ev-market-item").attr("data-selected","false").find(".c-ev-dropdown").attr("data-open","false");
    });

    $(".c-ev-market-dropdown .c-ev-dropdown__item").on("touchstart, click", function(){
        $filter = $(this).closest(".c-ev-dropdown__container").siblings(".c-ev-btn--filter");
        $checkbox = $(".c-ev-checkbox :checked").length;

        if( $checkbox > 0 ) {
            $filter.attr("data-filter","true");
        }else{
            $filter.attr("data-filter","false");
        }
    });

    // 判斷 .c-ev-category 距離 window top =< 0
    $(document).scroll(function () {

        var $categoryOffset = $(".c-ev-header__category").offset().top;
        var $windowScorllTop = $(window).scrollTop();

        if( $windowScorllTop - $categoryOffset >= 0 ) {
            $(".c-ev-market__btn").attr("data-open","true");
            $(".c-ev-header__category").attr("data-shadow","true");
        }else{
            $(".c-ev-market__btn").attr("data-open","false");
            $(".c-ev-header__category").attr("data-shadow","false");
        }
        
    });

    // 點擊 .c-ev-market__btn 使 body 滾動至 .c-ev-header__main 的高度
    $(".c-ev-market__btn").on("touchstart, click", function(){

        // var mainHeight = $(".c-ev-header__main").height();
        var streamingHeight = $(".c-ev-header__streaming").height();
        // var realScrollTop = $(".c-ev-header__main").height() - $(".c-ev-header__streaming").height();
        $("html, body").scrollTop(streamingHeight + 5);
        // $("html,body").animate({scrollTop: $(".c-ev-header__streaming").offset().top}, 1000);
        
    });
    
    // header 按鈕選中的滑動效果
    $(".c-ev-topbar__btn").not(".c-ev-topbar__btn--menu, .c-ev-topbar__btn--account").on("click", function(){
        $(".c-ev-topbar__btn").removeAttr("data-selected");
        $el = $(this);
        $thisWidth = $el.children().width();
        $thisLeft = $el.children().offset().left;
        $(".c-ev-topbar__selected").width($thisWidth).css({
            'width': $thisWidth,
            'transform': 'translateX(' + $thisLeft + 'px)'
        });
        setTimeout(function(){
            $el.attr("data-selected","true");
        }, 100);
    });

    // 開啟 Account 面板
    $(".c-ev-topbar__right .c-ev-topbar__btn:eq(1)").on("touchstart, click", function(){
        const $account = $(".c-ev-account");
        $account.attr("data-open") == "true" ? $account.attr("data-open", "") : $account.attr("data-open", "true");
    });
    
    // Market 的 Upcoming 下拉選單行為
    $(".c-ev-market-item--dropdown").on("click", function(){
        $(".c-ev-market-filter").animate({ scrollLeft: $(this).offset().left }, 100);
        
        if( $(this).attr("data-open") == "false" ){
            // $(".c-ev-market-filter").scrollLeft(200);
            $(this).attr("data-open", "true");
            $(".c-ev-market-dropdown").attr("data-open", "true");
        } else {
            $(this).attr("data-open", "false");
            $(".c-ev-market-dropdown").attr("data-open", "false");
        }
    });

    $("body").on("touchstart", function(){
        if( $(".c-ev-market-item--dropdown").attr("data-open") == "true" ){
            $(".c-ev-market-item--dropdown").attr("data-open", "false");
            $(".c-ev-market-dropdown").attr("data-open", "false");
        }
    });
    // $(".c-ev-market-filter").on("scroll", function(){
        
    // });

});
$(function(){
    // Sidebar Menu
    // ----------------------------

    // header 按鈕選中的滑動效果
    // $side-nav_tabs = $(".side-nav_tabs");
    $(".side-nav_tabs .btn").on("click", function(){
        $(".side-nav_tabs .tab > li").removeAttr("data-status");
        $el = $(this).children(".btn_text");
        $thisWidth = $el.width();
        $thisLeft = $el.offset().left;
        $(".side-nav_tabs-selected").width($thisWidth).css({
            'width': $thisWidth,
            'transform': 'translateX(' + $thisLeft + 'px)'
        });
        setTimeout(function(){
            $el.closest("li").attr("data-status","is-active");
        }, 100);
    });

    // item 選中效果
    $(".side-nav_item:not(.has-submenu), .side-nav_subitem").on("touchstart, click", function(){
        $(".side-nav_item, .side-nav_subitem").removeAttr("data-selected");
        $(this).attr("data-selected","true");
    });

    // Promotion tab btn 開啟活動頁面
    $(".side-nav_tabs .tab li:eq(3) .btn").on("click", function(){
        location.href = "../Promotion/EuroCupOddsBoost/EuroCupOddsBoost_Event.html"
        // $(".side-bar .overlay, .side-bar .side-nav").removeAttr("data-status");
        // setTimeout(function(){
        //     $("#pagePanel").load("../Promotion/EuroCupOddsBoost/EuroCupOddsBoost_Event.html .page-promotion");
        // }, 100);
    });

    // 開啟搜尋層
    $('.side-nav .btn-search').on('touchstart', function(){
        $('.page-search').attr('data-status', 'is-open');

        // 關閉側欄
        $(".side-nav").removeAttr("data-status");
        $(".side-bar .overlay").removeAttr("data-status");
        $("body").removeAttr("data-status");

    });

    // 關閉搜尋層下拉選單
    $('.page-search .dropdown-backdrop, .page-search .dropdown-menu li a, .main-bar-search .dropdown .btn').on('touchstart', function(){
        $('.page-search .dropdown').removeClass('open').find('.textfield').removeAttr('data-status');
    });
});
$(function(){
    // Switcher
    // ----------------------------

    // .c-ev-switcher 點擊切換 active 狀態
    $(".c-ev-switcher").on("click", function(){
        $(this).attr("data-active") == "false" ? $(this).attr("data-active", "true") : $(this).attr("data-active", "false");
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

    $(".tm-btn").on("click", function(){
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
$(function(){
    $(".demo-switch-btn--light").on("touchstart, click", function(){
        $(this).attr("data-selected", "true");
        $(".demo-switch-btn--dark").attr("data-selected", "false");
        $("html").attr("data-darkmode", "false");
    });
    $(".demo-switch-btn--dark").on("touchstart, click", function(){
        $(this).attr("data-selected", "true");
        $(".demo-switch-btn--light").attr("data-selected", "false");
        $("html").attr("data-darkmode", "true");
    });
});