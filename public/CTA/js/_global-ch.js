$(function () {
    $(".appbar_item .btn").on("click", function(){
        if( $(this).find(".btn_text").html() == "大厅" ) {
            location.href = "Lobby.html";
        }
        if( $(this).find(".btn_text").html() == "视频" ) {
            location.href = "streaming.html";
        }
        if( $(this).find(".btn_text").html() == "发现" ) {
            location.href = "Discover.html";
        }
        if( $(this).find(".btn_text").html() == "沙巴" ) {
            location.href = "Odds_Soccer_Today.html";
        }
        if( $(this).find(".btn_text").html() == "账目" ) {
            location.href = "../MyBets/myBets_settle.html";
        }
        if( $(this).find(".btn_text").html() == "发现" ) {
            location.href = "Discover.html";
        }
    });
    // $(".appbar_item > .btn").on("touchstart", function(){
    //     $(this).attr("data-status","is-active").parent().siblings().children(".btn").removeAttr("data-status");
    // });
    $(".appbar_item").on("touchstart", function(){
        $(this).attr("data-status","is-active").siblings().removeAttr("data-status");
    });
    $("[js-open-filters]").on("touchstart", function(){
        $(".filters").attr("data-status","is-open");
    });
    $(".filters .overlay, .appbar_item:not([js-open-filters])").on("touchstart", function(){
        $(".filters").removeAttr("data-status");
        $("[js-open-filters]").removeAttr("data-status");
    });
    $("[js-filters-switch]").on("touchstart", function(){
        if ($(this).attr("data-status")) {
            $(this).removeAttr("data-status");
        } else {
            $(this).attr("data-status","is-active");
        }
    });
    $("[js-filters-btns] .btn").on("touchstart", function(){
        $(this).attr("data-status","is-active").siblings().removeAttr("data-status");
    });
});
// [BetSlip.js] ===========================
$(function () {
    //Single
    // $("input").click(function(){
    //     $(this).parent().parent().siblings(".keypad").attr("data-status","is-open");
    // })
    // $(".keypad_item#done").click(function(){
    //     $(this).parent().parent(".keypad").removeAttr("data-status");
    // });
    $("[js-tickets-accepted], [js-tickets-waiting]").hide();
    $('.betting_process .btn-bet').click(function() {
        $(this).parent().parent('.betting_process').hide()
        .next('.alert').attr("data-status","is-open");
        $(".tickets_container, .page-parlay .tickets, .tickets_tips").hide();
        $("[js-tickets-accepted], [js-tickets-waiting]").show();
    });

    // Parlay
    $(".page-single .textfield_input, .page-parlay .textfield_input").click(function(){
        $(this).parent().parent().parent().siblings(".keypad").attr("data-status","is-open").parent(".parlay_block").siblings().children(".keypad").removeAttr("data-status");
        $(this).closest(".parlay_block").attr("data-status","is-open").siblings(".parlay_block").removeAttr("data-status");
    });
    $(".page-single .keypad_item#done, .page-parlay .keypad_item#done").click(function(){
        $(this).parent().parent(".keypad").removeAttr("data-status");
        $(this).closest(".parlay_block").removeAttr("data-status");
        $(this).closest(".parlay_block").find(".textfield").removeAttr("data-status");
    });
    //鍵盤打開時 點擊黃色區塊關閉
    $(".parlay_block span").click(function(){
        var $thisBlock = $(this).closest(".parlay_block");
        if($thisBlock.attr("data-status")) {
            $thisBlock.removeAttr("data-status");
            $thisBlock.children(".keypad").removeAttr("data-status");
        };
        event.stopPropagation();
    });
    //快速滾動至 Parlay
    $(".betting_fastscroll").click(function(){
        $(".page_content").animate({scrollTop:$(".parlay").offset().top},600);
        $(this).fadeOut(300);
    });
    //滾動至parlay時 移除 fastscroll
    
    fastscrollJudge = function(){
        if($(".parlay").size() > 0 ){
            var $parlayTop = $(".parlay").offset().top;
            var $betProcessTop = $(".page-parlay .betting_process").offset().top;
            var $betProcessShow = $(".page-parlay .betting_process").is(":visible");
        }
        if( $betProcessShow){
            if( $parlayTop < $betProcessTop - 40) {
                $(".betting_fastscroll").fadeOut(300);
            // }else{
            //     $(".betting_fastscroll").fadeIn(300);
            }
        }else{
            $(".betting_fastscroll").hide();
        }
    };
    fastscrollJudge();
    $(".page-parlay .page_content").scroll(function(){
        fastscrollJudge();
    });

    $("[js-tickets-accepted]").hide();
    $('.betting_process .btn-bet').click(function() {
        $(".page-parlay .page_content").scrollTop(0);
        $(this).closest('.betting_process').hide()
        .next('.alert').attr("data-status","is-open");
        $(".tickets_container").hide();
        $(".parlay").hide();
        fastscrollJudge();
        $("[js-tickets-accepted], [js-tickets-waiting]").show();
    });

    //刪除 Tickets
    // $(".btn-delete").click(function(){
    //     $(this).parent().parent(".tickets").hide();
    // });

    // Quick Bet 刪除 Ticket
    $(".quickBet .btn-delete").on("click", function(){
        $(this).closest(".quickBet_container").removeAttr("data-status");
    });
    // $(".alert .btn-primary").click(function(){
    //     $(this).parent().parent(".alert").hide();
    // });


    // 開啟頁面
    $(".btn[js_btn_singlebet]").on("click", function () {
        $(".page-single").attr("data-status","is-open");
    });
    $(".btn[js_btn_parlaybet]").on("click", function () {
        $(".page-parlay").attr("data-status","is-open");
        // 增加 body 狀態
        $("body").attr("data-status","is-page-open");
    });
    $(".btn[js_btn_quickbet]").on("click", function () {
        $(".quickBet[js_quickbet] .quickBet_container").attr("data-status","is-open");
    });
    $(".btn[js_btn_quickbet_ng]").on("click", function () {
        $(".quickBet[js_quickbet_ng] .quickBet_container").attr("data-status","is-open");
    });
    $(".btn[js_btn_quickbet_happy5]").on("click", function () {
        $(".quickBet[js_quickbet_happy5] .quickBet_container").attr("data-status","is-open");
    });
    $(".btn[js_btn_quickbet_mt]").on("click", function () {
        $(".quickBet[js_quickbet_mt] .quickBet_container").attr("data-status","is-open");
    });
    $(".btn[js_btn_quickbet_sb]").on("click", function () {
        $(".quickBet[js_quickbet_sb] .quickBet_container").attr("data-status","is-open");
    });


    

    // 點擊 .parlay_counter 開啟 .page-parlay
    $(".parlay_counter .btn, .parlay_bar").on("click", function(){
        $(".page-parlay").attr("data-status","is-open");
        // 增加 body 狀態
        $("body").attr("data-status","is-page-open");
    });

    //加入混和過關 switch btn
    $(".tickets_autoparlay").on("touchstart", function(){
        $parlay_autoswitch = $(this).find(".btn");
        if( $parlay_autoswitch.attr("data-status") == "is-active" ){           
            // Switch Btn 切換效果
            $parlay_autoswitch.removeAttr("data-status");
        } else {
            // Switch Btn 切換效果
            $parlay_autoswitch.attr("data-status","is-active");
        }
    })

    //bet proccess alert btn Click後 ParlayHint Show
    $(".quickBet .btn-highlight").on("click", function(){
        // event.preventDefault();
        $(this).closest(".quickBet").siblings(".betslip_parlayhint").addClass("is-show is-open is-rightedge");
        setTimeout(function(){
            $(".betslip_parlayhint").removeClass("is-open");
        },3000);
    });

    $(".comparlayBet .btn-bet").on("click", function(){
        // event.preventDefault();
        $(this).closest(".comparlayBet").siblings(".betslip_parlayhint").addClass("is-show is-open is-rightedge");
        setTimeout(function(){
            $(".betslip_parlayhint").removeClass("is-open");
        },3000);
    });

    //Click展開 ParlayHint
    var timer;
    var $parlayhint = $(".betslip_parlayhint");
    function parlayHintClose(){
        $(".betslip_parlayhint").removeClass("is-open");
    };
    $parlayhint.on("touchstart",function(){
        clearTimeout(timer);
        if($parlayhint.hasClass("is-open")){           
            // Switch Btn 切換效果
            $(this).removeClass("is-open");
        }else{
            // Switch Btn 切換效果
            $(this).addClass("is-open");
            timer = setTimeout(function(){
                parlayHintClose();
            },3000);
        }
    });


    //以下為可拖曳版本的 Parlay Hint ph2確認使用時使用

    //先設定好會使用到的變數
    // var timer;
    // var $winw = $(window).width() - $(".betslip_parlayhint").width();
    // var $parlayhint = $(".betslip_parlayhint");
    // function parlayHintClose(){
    //     $(".betslip_parlayhint").removeClass("is-open");
    // };


    // //jQuery UI 使用到的拖曳plugin參數
    // $parlayhint
    // .draggable({
    //     containment:"window",
    //     distance: "10"
    // });


    // //在點擊開始時計算點擊下去所耗費的時間來區分Click or drag
    // $parlayhint.on("touchstart",function(){
    //     console.log("touchstart");
    //     touchstartCount = 0;
    //     touchstartTime = setInterval(function(){
    //         touchstartCount +=1;
    //     }, 10);
    // //在點擊結束時如果時間小於等於20ms,則進入Click效果
    // }).on("touchend",function(){
    //     if(touchstartCount<=20){
    //         clearTimeout(timer);
    //         if($parlayhint.hasClass("is-open")){           
    //             // Switch Btn 切換效果
    //             $(this).removeClass("is-open");
    //         }else{
    //             // Switch Btn 切換效果
    //             $(this).addClass("is-open");
    //             timer = setTimeout(function(){
    //                 parlayHintClose();
    //             },3000);
    //         }
    //     }
    //     clearInterval(touchstartTime);
    //     console.log(touchstartCount);
    //     console.log("touchend");
    // //當開始拖曳移動時開始以下的動作
    // }).on("touchmove",function(){
    //     $(this).removeClass("is-open");
    //     //如果這個物件對於視窗左邊的偏移量 = 0 時 此物件靠齊視窗左側
    //     if( $parlayhint.offset().left == 0 ){
    //         $(this).removeClass("is-rightedge");
    //         $(this).addClass("is-leftedge");
    //     //如果這個物件對於視窗左邊的偏移量 = 視窗寬度時 此物件靠齊視窗右側
    //     }else if( $parlayhint.offset().left == $winw ){
    //         $(this).removeClass("is-leftedge");
    //         $(this).addClass("is-rightedge");
    //     //除以上兩者之外, 此物件於畫面內為圓形浮動
    //     }else{
    //         $(this).removeClass("is-leftedge").removeClass("is-rightedge");
    //     }
    // });

    // 連結網址
    $autoparlay_link = $(".autoparlay_alert");
    $autoparlay_link.on("click", function(){
        location.href = "Odds_soccer_parlay.html";
    });
});

$(function () {
    $(".cashout-filter .btn, .sa-cashout-filter .btn").on("click", function () {
        if($(this).attr("data-status")){
            $(this).removeAttr("data-status");
        } else {
            $(this).attr("data-status", "is-active");
        }
    });


    //  Cashout Bets 百分比 bar start ------------>
    if($('.page-cashout input[type="range"]').length>0) {
        var $priceBar = $('input#price-bar-cashout');
        var $priceText = $('input#price-input-cashout');
        var $priceBarMin = $priceBar.prop('min');
        var $rangeValue = $priceBar.prop('max') - $priceBarMin;
        var priceBarCashout = document.getElementById("price-bar-cashout");
        var touches = [];
        priceBarCashout.addEventListener('touchstart, click',function(e){
            $newValue = ($rangeValue / e.target.offsetWidth)*(e.touches[0].pageX - e.target.offsetLeft) + 0;
            console.log($newValue +" "+$rangeValue+" "+e.target.offsetWidth+" "+e.touches[0].pageX+" "+e.target.offsetLeft+" "+e.target.max);
            $priceBar.val($newValue);
            p = $priceBar.val();
            $priceText.val(p);
            bg(p - $priceBarMin);
        });
        $priceBar.on('touchmove',function(){
            p = $priceBar.val();
            $priceText.val(p);
            bg(p - $priceBarMin);
        });
        $priceText.on('touchstart',function(){
            $priceBar.val($priceText.val());
            p = $priceBar.val();
            bg(p - $priceBarMin);
        });
        $priceText.on('change',function(){
            $priceBar.val($priceText.val());
            p = $priceBar.val();
            bg(p - $priceBarMin);
        });
        function bg(n){
            $priceBar.css({
            'background-image':'-webkit-linear-gradient(left ,#0073E6 0%,#0073E6 '+ (n  * ( 100 / $rangeValue))+'%,#dfdfdf '+ (n  * ( 100 / $rangeValue))+'%, #dfdfdf 100%)'
            });
        }
    }


    // Cash-Out 百分比 bar end ------------<

    // Cash-Out 百分比 bar start ------------>
    // var $priceBar = $(".range_input");
    // var $priceText = $(".range + .tickets_input .textfield .textfield_input");
    // var $priceBarMin = $priceBar.prop('min');
    // var $rangeValue = $priceBar.prop('max') - $priceBarMin;
    // var priceBar = document.getElementById("price-bar");
    // var touches = [];
    // if(priceBar != null){
    //     priceBar.addEventListener('touchstart',function(e){
    //         $newValue = ($rangeValue / e.target.offsetWidth)*(e.touches[0].pageX - e.target.offsetLeft) + 2000;
    //         console.log($newValue +" "+$rangeValue+" "+e.target.offsetWidth+" "+e.touches[0].pageX+" "+e.target.offsetLeft+" "+e.target.max);
    //         $priceBar.val($newValue);
    //         p = $priceBar.val();
    //         $priceText.text(p);
    //         bg(p - $priceBarMin);
    //     });
    // }
    
    // // $priceBar.on('touchend',function(){
    // //     p = $priceBar.val();
    // //     $priceText.val(p);
    // //     bg(p - $priceBarMin);
    // // });
    // $priceBar.on('touchmove',function(){
    //     p = $priceBar.val();
    //     $priceText.text(p);
    //     bg(p - $priceBarMin);
    //     console.log("range bar moveing");
    // });
    // $priceText.on('touchstart',function(){
    //     $priceBar.val($priceText.text());
    //     p = $priceBar.val();
    //     bg(p - $priceBarMin);
    //     console.log("textfield_input touchstart");
    // });
    // $priceText.on('change',function(){
    //     $priceBar.val($priceText.text());
    //     p = $priceBar.val();
    //     bg(p - $priceBarMin);
    // });
    // function bg(n){
    //     $priceBar.css({
    //     'background-image':'-webkit-linear-gradient(left ,#0073E6 0%,#0073E6 '+ (n  * ( 100 / $rangeValue))+'%,#dfdfdf '+ (n  * ( 100 / $rangeValue))+'%, #dfdfdf 100%)'
        // });
    // }
    // Cash-Out 百分比 bar end ------------<


    // 開啟 Cashout Page
    $(".cashout_header .btn-cashout").on("click", function(){
        $(".page-cashout").attr("data-status", "is-open");
        $("body").attr("data-status", "is-page-open");
    });

    // 確定兌現，並開啟 Alert 面板
    $(".cashout_process .btn-cashout").on("click", function(){
        $(".cashout_process").hide();
        $(".alert[js-alert-cashout-confirm]").attr("data-status", "is-open");
    });

    // 開啟處理中 Alert 面板
    $(".alert .btn-cashout").on("click", function(){
        $(this).closest(".alert").removeAttr("data-status")
        $(".alert[js-alert-cashout-processing]").attr("data-status", "is-open");
    });
    
    // 開啟成功 Alert 面板
    $(".alert[js-alert-cashout-processing] .btn-highlight").on("click", function(){
        $(this).closest(".alert").removeAttr("data-status")
        $(".alert[js-alert-cashout-success]").attr("data-status", "is-open");
    });

    // 關閉 Cashout Page，並恢復相關狀態
    $(".alert[js-alert-cashout-success] .btn-highlight").on("click", function(){
        $(this).closest(".alert").removeAttr("data-status");
        $(this).closest(".page-cashout").removeAttr("data-status");
        $(".cashout_process").show();
    });
});
$(function () {
    //[for test] How to Use start
    var $next = 1;
    $(".cashoutUse_item, .btn-next, .btn-goright").on("touchstart, click", function () {
        $next += 1;
        goPage();
    });
    $(".btn-pre, .btn-goleft").on("touchstart, click", function () {
        $next -= 1;
        goPage();
    });
    var goPage = function () {
        if ($next > 5) {
            $next = 1;
        } else if ($next < 0) {
            $next = 5;
        }
        $(".cashoutUse").removeClass("show1 show2 show3 show4 show5");
        $(".cashoutUse").addClass("show" + $next);
    }
    // $(".btn-clear, .btn-ok").click(function(){
    //     $(".cashOutUsePanel").hide();
    // });
    // end
});
$(function () {
    // CB Player Guide
    // $(".cb-playerguide .btn-close").on("click", function(){
    //     $(".cb-playerguide").hide();
    // });
    // $(".cb-playerguide .btn-lowlight, .cb-playerguide .slides-content .btn-highlight").on("click", function(){
    //     $(".cb-playerguide .slides").addClass("hide");
    //     $(".cb-playerguide .contact-info").removeClass("hide");
    // });
    // $(".cb-playerguide .slides-btn-prev").on("click", function(){
    //     $(".cb-playerguide .slides-content").eq(0).removeClass("hide");
    //     $(".cb-playerguide .slides-content").eq(1).addClass("hide");
    // });
    // $(".cb-playerguide .slides-btn-next").on("click", function(){
    //     $(".cb-playerguide .slides-content").eq(0).addClass("hide");
    //     $(".cb-playerguide .slides-content").eq(1).removeClass("hide");
    // });
});

$(function () {
    //收合league
    $(".comleague_header").on("click", function(){
        var $thisComLeague = $(this).parents(".comleague");
        if ($thisComLeague.attr("data-status")) {
            $thisComLeague.children(".commatch_list").slideUp(300, function(){
                $thisComLeague.removeAttr("data-status");
            });
        } else {
            $thisComLeague.children(".commatch_list").slideDown(300);
            $thisComLeague.attr("data-status","is-open");
        }
    })

    // My Favorite 開啟/關閉
    $(".c-btn--myfav").on("click", function(e){
        e.preventDefault();
        $(this).attr("data-added") == "true" ? $(this).attr("data-added","false") : $(this).attr("data-added", "true");
        e.stopPropagation();
    });

    //收起commatch
    $(".commatch_content .commatch_arrow").on("click",function(){
        var $thisComMatch = $(this).closest(".commatch");
        $thisComMatch.children(".commatch_content").css("display","flex");
        $thisComMatch.children(".commatch_content").slideUp(300);
        $thisComMatch.removeAttr("data-status");
        // function(){
        //     $thisComMatch.removeAttr("data-status"); 
        // }); 
    });
    //打開commatch
    $(".commatch_header").on("click",function(){
        var $thisComMatch = $(this).closest(".commatch");
        $thisComMatch.children(".commatch_content").slideDown(300);
        $thisComMatch.children(".commatch_content").css("display","flex");
        $thisComMatch.attr("data-status","is-open");
            // function(){
            //     $thisComMatch.attr("data-status","is-open")
            // });
    });

    //點擊odds 選取狀態
    $(".bettype_oddsbox").on("click", function(){
        var $thisComOdds = $(this)
        if ($thisComOdds.attr("data-status")) {
            $thisComOdds.removeAttr("data-status");
        } else {
            $thisComOdds.attr("data-status","is-active");
        }
    });
    //bettype_list 左右滾動
    var $list = $(".bettype_list");
    var $listWidthHalf = $(".bettype_list").width() / 2;
    var $listWidth = $(".bettype_list").width();
    $list.on("touchend", function(){
        var $listLeft = $(this).scrollLeft();
        if($listLeft > $listWidthHalf){
            $list.animate({scrollLeft: $listWidth},200);
            $(".bettype_pagination").find("li:nth-child(2)").attr("data-status","is-active").siblings().removeAttr("data-status");
        }else{
            $list.animate({scrollLeft: 0},200);
            $(".bettype_pagination").find("li:first-child").attr("data-status","is-active").siblings().removeAttr("data-status");
        }
    }).on("touchmove", function(){
        //各match連動滾動
        $list.not(this).scrollLeft($(this).scrollLeft());
    });

    //開啟 / 收合 全部League
    $(".comleague_collapse").on("click",function(){
        var $thisCollapseComLeague = $(this);
        if ($thisCollapseComLeague.attr("data-status")) {
            $thisCollapseComLeague.siblings(".comleague").removeAttr("data-status").children(".commatch_list").slideUp(300, function(){
                $thisCollapseComLeague.removeAttr("data-status");
                $thisCollapseComLeague.find(".comcollapse_title").html("展开全部联赛")
            });
            

        } else {
            $thisCollapseComLeague.siblings(".comleague").attr("data-status","is-open").children(".commatch_list").slideDown(300, function(){
                $thisCollapseComLeague.attr("data-status","is-open");
                $thisCollapseComLeague.find(".comcollapse_title").html("收起全部联赛")
            });
            
        }
    });
    //All Live 以 .commarket_header 開合 下方 Sports 與 League 
    $(".commarket .commarket_header").on("click",function(){
        var $thisCollapseComMarket = $(this).parent(".commarket");
        if ($thisCollapseComMarket.attr("data-status")) {
            $thisCollapseComMarket.find(".comleague").removeAttr("data-status").children(".commatch_list").slideUp(300, function(){
                $thisCollapseComMarket.removeAttr("data-status");
                $thisCollapseComMarket.children(".commarket_sub").removeAttr("data-status");
                $thisCollapseComMarket.find(".comcollapse_title").html("展开全部联赛")
            });

        } else {
            $thisCollapseComMarket.find(".comleague").attr("data-status","is-open").children(".commatch_list").slideDown(300, function(){
                $thisCollapseComMarket.attr("data-status","is-open");
                $thisCollapseComMarket.children(".commarket_sub").attr("data-status","is-open")
                $thisCollapseComMarket.find(".comcollapse_title").html("收起全部联赛");
            });
        }
    });

     //All Parlay 以 .commarket_subheader 開合 下方 League

     $(".commarket_sub .commarket_subheader").on("click",function(){
        var $thisCollapseSub = $(this).parent(".commarket_sub");
        if ($thisCollapseSub.attr("data-status")) {
            $thisCollapseSub.find(".comleague").removeAttr("data-status").children(".commatch_list").slideUp(300, function(){
                $thisCollapseSub.removeAttr("data-status");
            });

        } else {
            $thisCollapseSub.find(".comleague").attr("data-status","is-open").children(".commatch_list").slideDown(300, function(){
                $thisCollapseSub.attr("data-status","is-open");
            });
        }
    });

    // var $list = $(".bettype_list");
    // var $listWidthHalf = $(".bettype_list").width() / 2;
    // var $listWidth = $(".bettype_list").width();
    // $(".bettype_list")
    // .on("touchstart", function(){
    //     $(".bettype_list").css("scroll-snap-type","x mandatory");
    // })
    // .on("touchend", function(){
    //     // $list.not(this).scrollLeft($(this).scrollLeft());
    //     var $listLeft = $(this).scrollLeft();
    //     if($listLeft > $listWidthHalf){
    //         $(".bettype_pagination").find("li:nth-child(2)").attr("data-status","is-active").siblings().removeAttr("data-status");
    //     }else{
    //         $(".bettype_pagination").find("li:first-child").attr("data-status","is-active").siblings().removeAttr("data-status");
    //     }
    // })
    // // .on("touchmove", function(){
    // //     //各match連動滾動
    // //     $list.not(this).css("scroll-snap-type","x mandatory");
    // // });
    // .on("touchmove", function(){
    //     //各match連動滾動
    //     $list.not(this).scrollLeft($(this).scrollLeft());
    // });



    //switch btn Click切換按鈕
    $(".comtickets_autoparlay").on("click", function(){
        $comparlay_autoswitch = $(this).find(".combtn");
        if( $comparlay_autoswitch.attr("data-status") == "is-active" ){           
            // Switch Btn 切換效果
            $comparlay_autoswitch.removeAttr("data-status");
        } else {
            // Switch Btn 切換效果
            $comparlay_autoswitch.attr("data-status","is-active");
        }
    });

    // BetSlip Flow Panel - 新版未上線
    $("[js-btn_bet_process]").on("click", function(){
        $(this).parent().hide();
        $(this).parent().siblings(".icon-clear").css("visibility","hidden");
        $(this).parent().siblings(".comtickets").find(".comtickets_balance").hide();
        $(".btn.btn-watchbet-return").hide();
        // 開啟處理中面板
        $("[js-btn_process]").show();
        $(".comkeypad").removeAttr("data-status");
        $(".comtickets_bet, .comtickets_autoparlay").slideUp(100);
        $("[js-comtickets_mystake]").slideDown(300);
        // $("[js-comtickets_process]").show();

        $("[js-badge_waiting]").removeClass("is-adding", function(){
            setTimeout(function(){
                $("[js-badge_waiting]").addClass("is-adding");
            }, 500);
        });
        
        $(".comquickBet_container .comtickets_process").attr("data-status","process");

        // ======== 方式 3 ========
        setTimeout(function(){

            ttt = Math.random();
            
            $("[js-preloader], [js-subject_process]").fadeOut(function(){
                if( ttt >= 0.5){
                    /* 投注成功 */
                    $(".comquickBet_container .comtickets_process").attr("data-status","accept");
                    $("[js-subject_accept]").show();
                    $(".iconani-done").attr("data-animate","true");
                    $("[js-directions]").slideDown(300);
                    $("[js-btn_betagain]").remove();
                } else {
                    /* 投注被拒絕 */
                    $(".comquickBet_container .comtickets_process").attr("data-status","reject");
                    $("[js-subject_reject], [js-btn_betagain]").show();
                    $(".iconani-warn").attr("data-animate","true");
                    $("[js-btn_checkbet], [js-btn_otherbet], [js-btn_oddspage], [js-btn_viewstate]").remove();
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

    // BetSlip Flow Panel - 舊版
    $(".combtn[js-btn_bet], .combtn[js-btn_bet_process]").on("click", function(){
        $(this).hide();
        //加上 data-center="true" 使後續面板置中
        $(".comquickBet").attr("data-center","true")
        // 開啟處理中面板
        $("[js-btn_process]").show();
        $(".comkeypad").removeAttr("data-status");
        $(".comtickets_bet, .comtickets_autoparlay").slideUp(100);
        // $("[js-comtickets_process]").slideDown(300);
        $("[js-comtickets_process]").show();

        $("[js-badge_waiting]").removeClass("is-adding", function(){
            setTimeout(function(){
                $("[js-badge_waiting]").addClass("is-adding");
            }, 500);
        });

        // ======== 方式 3 ========
        setTimeout(function(){
            $(".comquickBet_container [js-comtickets_process]").hide();
            $(".comquickBet_container [js-comtickets_reject]").show();
        }, 3000);
    });
   

    // 點擊 [再次投注] 按鈕後，復原
    // $(".combtn[js-btn_betagain]").on("click", function(){
    //     $(".combtn[js-btn_bet]").show();
    //     $(".comtickets_bet, .comtickets_autoparlay, .combtn[js-btn_process], [js-comtickets_process]").show();
    //     $(".comquickBet, .comquickBet_container").show();
    // });
    

    //BetSlip 點擊bet開啟Confirm
    // $(".comquickBet_container .combetting .btn-bet").on("click", function(){
    // $(".btn-bet[js-btn_betagain]").on("click", function(){
    //     $thisQuickbet = $(this).closest(".comquickBet_container");
    //     $thisQuickbet.removeAttr("data-status").slideUp(500, function(){
    //         $thisQuickbet.siblings(".comconfirm").slideDown(600).attr("data-status","is-open");
    //         $thisQuickbet.siblings(".comrecommend").slideDown(600).attr("data-status","is-open");
    //     });
    //     //面板展開時 .comrecommend_list 滑入
    //     function listIn() {
    //         $(".comrecommend_block").attr("data-status","is-active");
    //     };
    //     setTimeout(listIn, 700);
    //     // $thisQuickbet.siblings(".comconfirm").slideDown(300);
    // });
    //Click Overlay 關閉面板
    var animationEnd = "animationend webkitAnimationEnd";
    
    $(".comquickBet .overlay, .comquickBet .icon-clear").on("click", function(){
        
        $(".comquickBet").removeAttr("data-status","is-active");

        $("html").removeAttr("data-scroll-lock");
        $( window ).scrollTop( $("body").attr("data-body-scrolltop"));
        $("body").removeAttr("data-body-scrolltop");
        
    });

    // $("[js-btn_process]").on("click", function(){
    //     $(this).closest(".comquickBet_container").removeAttr("data-status").siblings(".comconfirm").attr("data-status","is-open");
    // });

    //BetConfirm 點擊展開
    // $(".comrecommend .combtn-collapse").on("click", function(){
    //     $comrecommend = $(this).closest(".comrecommend");
    //     if( $comrecommend.attr("data-status") == "is-active") {
    //         $comrecommend.removeAttr("data-status").attr("data-status","is-open");
    //         $(this).find("p").html("展开");
    //         $(this).siblings(".comrecommend_block").find(".comrecommend_list").fadeIn();
    //         $(this).siblings(".comrecommend_block").find(".comrecommend_tickets").hide();
    //         // recommend 面板預設高度120px
    //         $(".comrecommend_block").css("height", "120px");
    //     }else{
    //         $comrecommend.attr("data-status","is-active");
    //         $(this).find("p").html("收合");
    //         $(this).siblings(".comrecommend_block").find(".comrecommend_list").hide();
    //         $(this).siblings(".comrecommend_block").find(".comrecommend_tickets").fadeIn();
    //         var $windowHeight = $(window).height();
    //         // 計算展開 recommend 時面板高度
    //         var $statusHeight = $(".comconfirm_status").outerHeight();
    //         var $parlayHeight = $(".comautoparlay").outerHeight();
    //         var $collapseHeight = $(".combtn-collapse").outerHeight();
    //         var $titleHeight = $(".comrecommend_title").outerHeight(true);
    //         $blockHeight = $windowHeight*.9 - $statusHeight - $parlayHeight - $collapseHeight - $titleHeight - 24;
    //         $(".comrecommend_block").css("height", $blockHeight);
    //     }
    // });
    //Click 關閉btn Close BetSlip Panel
    $(".combtn[js-btn-close]").on("click", function(){
        $(this).closest(".comquickBet").fadeOut();
    });

    //Click odds to open betSlip
    $(".bettype_oddsbox, .betType_btn, .betType_odds, .c-odds-button").on("click", function(){
        $(".comquickBet").attr("data-status","is-active").find(".overlay").attr("data-status","is-open").siblings(".comquickBet_panel");
        
        $("body").attr("data-body-scrolltop", $(window).scrollTop()); // get actual scrolltop
        $("html").attr("data-scroll-lock","true");
        $(".main").scrollTop( $("body").attr("data-body-scrolltop") ); // let wrapper scroll to scrolltop

    });

    //SingleMatch Tab 切換
    $(".comtab li").on("click", function(){
        $(this).attr("data-status","is-active").siblings("li").removeAttr("data-status").closest(".comtab").siblings(".btn-statistics").removeAttr("data-status");
        $(".comtab_block .comtab_panel").eq($(this).index()).attr("data-status", "is-open").siblings(".comtab_panel").removeAttr("data-status");
    });

    //.btn-statistics 點擊開啟面板
    $(".comtab_group .btn-statistics").on("click", function(){
        $("[js-statistics-panel]").attr("data-status","is-open").siblings(".comtab_panel").removeAttr("data-status");
        $(this).attr("data-status","is-active").siblings(".comtab").find("li").removeAttr("data-status");
    });

    //HT/FT Correct Score 展開全部odds
    $("[js-toggle-all]").on("click", function(){
        $combettype_expand = $(this).closest(".bettype").siblings(".bettype-expand");
        if( $combettype_expand.attr("data-status") == "is-open" ){           
            // Switch Btn 切換效果
            $combettype_expand.removeAttr("data-status");
            $(this).html("显示全部");
        } else {
            // Switch Btn 切換效果
            $combettype_expand.attr("data-status","is-open");
            $(this).html("隐藏全部");
        }
    });
    //Parlay_bar
    // Parlay Page
    var parlayCount = 0
    $("[js-parlay] .oddsbox_odds").on("click",function(){
        var $thisParlayOdds = $(this);
        if ($thisParlayOdds.attr("data-status")) {
            $thisParlayOdds.removeAttr("data-status");
            // $(".parlay_counter").attr("data-status","is-open");
            //Parlay_bar 點擊odds 展開
            if(parlayCount == 1) {
                $(".comparlay_bar").removeAttr("data-status","is-open");
                parlayCount--;
                $(".combetting_amount").text(parlayCount);
            }else if(parlayCount == 3) {
                $(".comparlay_bar").addClass("is-active");   
                setTimeout(function () {
                    $(".comparlay_bar").removeClass("is-active");
                }, 200);
                $(".comparlay_bar .comparlay_bettype").hide();
                $(".comparlay_bar .comparlay_odds").hide();
                $(".comparlay_bar .preloader").hide();
                $(".comparlay_bar .btn").hide();
                $(".comparlay_bar .comparlay_text").show();
                parlayCount--;
                $(".combetting_amount").text(parlayCount);
            }else if(parlayCount == 2) {
                $(".comparlay_bar").addClass("is-active");   
                setTimeout(function () {
                    $(".comparlay_bar").removeClass("is-active");
                }, 200);
                $(".comparlay_bar .comparlay_bettype").hide();
                $(".comparlay_bar .comparlay_odds").hide();
                $(".comparlay_bar .preloader").hide();
                $(".comparlay_bar .btn").hide();
                $(".comparlay_bar .comparlay_text").show();
                parlayCount--;
                $(".combetting_amount").text(parlayCount);
            }else{
                //Parlay 加票時動態
                $(".comparlay_bar").addClass("is-active");   
                setTimeout(function () {
                    $(".comparlay_bar").removeClass("is-active");
                }, 200);
                parlayCount--;
                $(".combetting_amount").text(parlayCount);
            }
        } else {
            $thisParlayOdds.attr("data-status","is-active");
            // $(".parlay_counter").attr("data-status","is-open");
            //Parlay_bar 點擊odds 展開
            $(".comparlay_bar .comparlay_bettype").hide();
            $(".comparlay_bar .comparlay_odds").hide();
            $(".comparlay_bar .preloader").hide();
            $(".comparlay_bar .btn").hide();
            $(".comparlay_bar .comparlay_text").show();
            if(parlayCount == 0) {
                $(".comparlay_bar").attr("data-status","is-open");
                parlayCount++;
                $(".combetting_amount").text(parlayCount);
            }
            else{
                //Parlay 加票時動態
                $(".comparlay_bar").addClass("is-active");   
                setTimeout(function () {
                    $(".comparlay_bar").removeClass("is-active");
                }, 200);
                parlayCount++;
                $(".combetting_amount").text(parlayCount);
                if(parlayCount > 2) {
                    $(".comparlay_bar .comparlay_text").hide();
                    $(".comparlay_bar .comparlay_bettype").show();
                    $(".comparlay_bar .comparlay_odds").show();
                    $(".comparlay_bar .preloader").show();
                    $(".comparlay_bar .btn").show();
                    randomParlayOdds();
                }else{
                    $(".comparlay_bar .comparlay_bettype").hide();
                    $(".comparlay_bar .comparlay_odds").hide();
                    $(".comparlay_bar .preloader").hide();
                    $(".comparlay_bar .btn").hide();
                    $(".comparlay_bar .comparlay_text").show();
                }
            }
        }
        
    });

    // Parlay Page Click Back open Parlay Bar
    $(".page .main-bar > .btn:first-child").on("click", function(){
        $(".comparlay_bar").attr("data-status","is-open");
    });

    // 隨機顯示 [.comparlay_bar] 裡的 Odds
    var randomParlayOdds = function(){
        var $Parlay_visiable = Math.floor(Math.random()*2);
        
        $(".comparlay_bar .comparlay_odds").addClass("hide");
        $(".comparlay_bar .preloader").removeClass("hide");
        $(".comparlay_bar .btn").addClass("hide");

        if( $Parlay_visiable == 0 ) {

            setTimeout(function () {
                $(".comparlay_bar .preloader").addClass("hide");
                $(".comparlay_bar .btn").removeClass("hide");
            }, 2000);
        } else {
            setTimeout(function () {
                $(".comparlay_bar .comparlay_odds").removeClass("hide");
                $(".comparlay_bar .preloader").addClass("hide");
            }, 500);

        }
    };
    $(".comparlay_bar .btn").on("click", function(){
        randomParlayOdds();
        return false;
    });

    // 點擊 .comparlay_bar 開啟 .comparlayBet
    $(".comparlay_bar").on("click", function(){
        $(".page-parlay").attr("data-status","is-open");
        // $(".comparlay_container").attr("data-status","is-open");
        //設定comalert popup
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

    //點擊 Clear All 清除 全部票
    $(".page_header .btn-light").on("click", function(){
        $(".comparlay_container").removeAttr("data-status");
        setTimeout(function () {
            $(".comtickets_group .comtickets").remove();
            $(".page-parlay").removeAttr("data-status");
            $(".comparlay_bar").attr("data-status","is-open");
        }, 1000);
    });

    //未達3張票 Click Btn 返回oddspage
    $("[js-parlay-back].btn-primary, [js-btn_betagain], [js-btn_otherbet]").on("click", function(){
        $(this).closest(".page-parlay").removeAttr("data-status");
        $(".comparlay_betting").removeAttr("data-status");
        $(".comparlay_bar").attr("data-status","is-open");
    });

    // Parlay
    $(".comparlay_betting .textfield_input").click(function(){
        $(this).closest(".comparlay_block").find(".comkeypad").attr("data-status","is-open").parent(".comparlay_block").siblings().children(".comkeypad").removeAttr("data-status");
        $(this).closest(".comparlay_block").attr("data-status","is-open").siblings(".comparlay_block").removeAttr("data-status");
        event.stopPropagation();
    });

    $(".comparlay_betting .comkeypad_item#done").click(function(){
        $(this).parent().parent(".comkeypad").removeAttr("data-status");
        $(this).closest(".comparlay_block").removeAttr("data-status");
        $(this).closest(".comparlay_block").find(".textfield").removeAttr("data-status");
    });
    //鍵盤打開時 點擊黃色區塊關閉 (改為Click鍵盤以外區塊皆收合 .comkeypad, 故移除)
    // $(".comparlay_block span").click(function(){
    //     var $thisBlock = $(this).closest(".comparlay_block");
    //     if($thisBlock.attr("data-status")) {
    //         $thisBlock.removeAttr("data-status");
    //         $thisBlock.children(".comkeypad").removeAttr("data-status");
    //     };
    //     event.stopPropagation();
    // });

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

    //comparlay bet-btn Click 收起bet panel / 展開 bet confirm panel
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



    





    
    // $(".comparlay_betting .btn-bet").on("click", function(){
    //     $thisParlaybet = $(this).closest(".comparlay_betting").siblings(".comparlay_container");
    //     $thisParlaybet.removeAttr("data-status").slideUp(500, function(){
    //         thisParlaybet.siblings(".comconfirm").slideDown(600).attr("data-status","is-open")
    //     });
    // });

    // 設定連結
    $("[js-btn-gostatement]").on("click", function(){
        location.href = "../MyBets/myBets_unsettle.html";
    });

    //Comparlay 點擊鍵盤以外區域關閉鍵盤
    $(".comparlayBet").on("click", function(){
        $(".comkeypad, .comparlay_block, .comparlay_block .textfield").removeAttr("data-status");
    });

    //Compact Cash out How to use Alert 跳出
    setTimeout(function(){
        $(".cash-out-fixed.alert").attr("data-status","is-open");
    }, 2000);
    $(".cash-out-fixed .btn").on("click", function(){
        $(this).closest(".cash-out-fixed").removeAttr("data-status");
    });
    


    //判斷.submenu內容是否>螢幕寬度
    if($(".header_submenu").length>0) {
        var subScroll = $(".submenu[data-status='is-open']")[0].scrollWidth;
        var subWidth = $(".header_submenu").innerWidth();
        if( subScroll > subWidth) {
            $(".header_submenu").attr("data-arrow","true");
        }
        //判斷.submenu 滾動至底 移除data-arrow
        $(".submenu[data-status='is-open']").on("scroll", function(){
            var subLeft = $(".submenu[data-status='is-open']")[0].scrollLeft;
            if( subScroll - subLeft <= subWidth) {
                $(".header_submenu").removeAttr("data-arrow");
            }else{
                $(".header_submenu").attr("data-arrow","true");
            }
        });

        if($(".main-bar .tab").length > 0){
            //判斷.main-bar .tab內容是否>螢幕寬度
            var tabScroll = $(".main-bar .tab")[0].scrollWidth;
            var tabWidth = $(".main-bar .tab").innerWidth();
            if( tabScroll > tabWidth) {
                $(".header .main-bar").attr("data-arrow","true");
            }
            //判斷.submenu 滾動至底 移除data-arrow
            $(".main-bar .tab").on("scroll", function(){
                var tabLeft = $(".main-bar .tab")[0].scrollLeft;
                if( tabScroll - tabLeft <= tabWidth) {
                    $(".main-bar").removeAttr("data-arrow");
                }else{
                    $(".main-bar").attr("data-arrow","true");
                }
            });
        }
    }

    //判斷.comtab內容是否>螢幕寬度
    if($(".comsingle .comtab").length>0) {
        var comtabScroll = $(".comsingle .comtab")[0].scrollWidth;
        var comtabWidth = $(".comsingle .comtab").innerWidth();
        if( comtabScroll > comtabWidth) {
            $(".comsingle .comtab_group").attr("data-arrow","true");
        }
        //判斷.comtab 滾動至底 移除data-arrow
        $(".comsingle .comtab").on("scroll", function(){
            var comtabLeft = $(".comsingle .comtab")[0].scrollLeft;
            if( comtabScroll - comtabLeft <= comtabWidth) {
                $(".comsingle .comtab_group").removeAttr("data-arrow");
            }else{
                $(".comsingle .comtab_group").attr("data-arrow","true");
            }
        });
    }



    //Betslip input on focus 隱藏 Max / Min
    $(".comquickBet_container .textfield_input, .comparlay_block .textfield_input").on("click", function(){
        $(this).attr("data-status","is-focus");
        return false;
    });
    $(".comquickBet_container, .comparlay_betting").on("click", function(){
        $(".textfield_input").removeAttr("data-status");
        return false;
    });

    //Header dropmenu
    $(".header_filter .btn-sports").on("click", function(){
        $(".dropmenu").attr("data-status","is-open");
        // $("body").css("overflow","hidden");
    });
    $(".dropmenu").on("click", function(){
        $(this).removeAttr("data-status");
        // $("body").css("overflow","auto");
    });
    $(".dropmenu_tab .btn").on("click", function(){
        $(this).attr("data-status","is-active").siblings().removeAttr("data-status");
        return false;
    });
    $(".dropmenu .dropmenu_item").on("click", function(){
        $(this).attr("data-status","is-active").siblings().removeAttr("data-status");
        return false;
    });
    
    // Click 切換 dropmenu 選單
    $("[js-btn-played]").on("click", function(){
        $(".dropmenu_content[js-content-played]").attr("data-status","is-open").siblings().removeAttr("data-status");
    });
    $("[js-btn-alllive]").on("click", function(){
        $(".dropmenu_content[js-content-alllive]").attr("data-status","is-open").siblings().removeAttr("data-status");
    });
    $("[js-btn-sports]").on("click", function(){
        $(".dropmenu_content[js-content-sports]").attr("data-status","is-open").siblings().removeAttr("data-status");
    });
    $("[js-btn-casino]").on("click", function(){
        $(".dropmenu_content[js-content-casino]").attr("data-status","is-open").siblings().removeAttr("data-status");
    });


    //Uses document because document will be topmost level in bubbling
    // $(document).on('touchmove',function(e){
    //     e.preventDefault();
    // });
    // var scrolling = false;
    // //Uses body because jquery on events are called off of the element they are
    // //added to, so bubbling would not work if we used document instead.
    // $('body').on('touchstart','.dropmenu_scroller',function(e) {
    // //Only execute the below code once at a time
    // if (!scrolling) {
    //     scrolling = true; 
    //     if (e.currentTarget.scrollTop === 0) {
    //         e.currentTarget.scrollTop = 1;
    //     } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
    //         e.currentTarget.scrollTop -= 1;
    //     }
    //     scrolling = false;
    //     }
    // });
    // //Prevents preventDefault from being called on document if it sees a scrollable div
    // $('body').on('touchmove','.dropmenu_scroller',function(e) {
    //     e.stopPropagation();
    // });
    
    //Left Menu Click more btn
    $(".side-nav_more").on("click", function(){
        $(this).siblings(".side-nav_games").attr("data-status","is-open");
        return false;
    });

    //  Bb Casino 百分比 bar start ------------>
    if($('.dialog input[type="range"]').length>0) {
        var $priceBar = $('input#price-bar');
        var $priceText = $('input#price-input');
        var $priceBarMin = $priceBar.prop('min');
        var $rangeValue = $priceBar.prop('max') - $priceBarMin;
        var priceBar = document.getElementById("price-bar");
        var touches = [];
        priceBar.addEventListener('touchstart',function(e){
            $newValue = ($rangeValue / e.target.offsetWidth)*(e.touches[0].pageX - e.target.offsetLeft) + 0;
            console.log($newValue +" "+$rangeValue+" "+e.target.offsetWidth+" "+e.touches[0].pageX+" "+e.target.offsetLeft+" "+e.target.max);
            $priceBar.val($newValue);
            p = $priceBar.val();
            $priceText.val(p);
            bg(p - $priceBarMin);
        });
        $priceBar.on('touchmove',function(){
            p = $priceBar.val();
            $priceText.val(p);
            bg(p - $priceBarMin);
        });
        $priceText.on('touchstart',function(){
            $priceBar.val($priceText.val());
            p = $priceBar.val();
            bg(p - $priceBarMin);
        });
        $priceText.on('change',function(){
            $priceBar.val($priceText.val());
            p = $priceBar.val();
            bg(p - $priceBarMin);
        });
        function bg(n){
            $priceBar.css({
            'background-image':'-webkit-linear-gradient(left ,#0073E6 0%,#0073E6 '+ (n  * ( 100 / $rangeValue))+'%,#dfdfdf '+ (n  * ( 100 / $rangeValue))+'%, #dfdfdf 100%)'
            });
        }
    }
    // Cash-Out 百分比 bar end ------------<
    $("[js-bbin-popup]").on("click", function(){
        $(".dialog:eq(0)").attr("data-status","is-open");
        $(".body, .side-nav, .overlay").removeAttr("data-status");
        $(".dialog .textfield").attr("data-status","is-focus");
    });

    //Uses document because document will be topmost level in bubbling
    $(document).on('touchmove',function(e){
        e.preventDefault();
    });
    var scrolling = false;
    //Uses body because jquery on events are called off of the element they are
    //added to, so bubbling would not work if we used document instead.
    $('body').on('touchstart','.dialog',function(e) {
    //Only execute the below code once at a time
    if (!scrolling) {
        scrolling = true; 
        if (e.currentTarget.scrollTop === 0) {
            e.currentTarget.scrollTop = 1;
        } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
            e.currentTarget.scrollTop -= 1;
        }
        scrolling = false;
        }
    });
    //Prevents preventDefault from being called on document if it sees a scrollable div
    $('body').on('touchmove','.scrollable',function(e) {
        e.stopPropagation();
    });

    //Bbin Dialog Header Click btn-close 關閉面版
    $(".dialog_header .btn-close").on("click", function(){
        $(this).closest(".dialog").removeAttr("data-status");
    });

    //Bbin Dialog Retrieving Btn 開啟面版
    $("[js-retrieving-btn]").on("click", function(){
        $(".dialog[js-dialog-retrieving]").attr("data-status","is-open");
    });

    //Bbin Dialog OK Btn 關閉面版
    $(".dialog[js-dialog-retrieving] .btn").on("click", function(){
        $(".dialog[js-dialog-retrieving]").removeAttr("data-status");
    });

    // Beslip Click "投注其他賽事" 關閉 container 開啟 statement icon
    $("[js-btn_process]").on("click", function(){
        $(this).closest(".comquickBet").removeAttr("data-status").siblings(".comquickBet_delay").attr("data-status","is-active");
    });

    // Click statement icon open ComBetSlip_WaitingPanel
    $(".comquickBet_delay").on("click", function(){
        $(this).siblings(".comquickBet").attr("data-status","is-active").attr("data-delay","true").find(".overlay").attr("data-status","is-open")
        $(this).siblings(".comquickBet").find(".comquickBet_container").removeAttr("data-status");
        $(this).siblings(".comquickBet").find(".comwaiting_container").attr("data-status","is-active");
    });

    // Click 關閉 .comwaiting_container panel
    $(".comwaiting_container .icon-clear").on("click", function(){
        $(this).closest(".comquickBet").removeAttr("data-center, data-status, data-delay");
        $(this).closest(".comwaiting_container").removeAttr("data-status");
    });

    // Click to key in value
    $(".textfield .textfield_input span").hide();
    $(".textfield .textfield_input").on("click", function(){
        $(this).find(".comtickets_value").hide();
        $(this).find("span").show();
    });
    // Parlay Bet Delay League 收合 .comconfirm_match_collapse
    $(".comconfirm_match_bottom").on("click", function(){
        $comconfirm_match = $(this).parents(".comconfirm_match");
        if( $comconfirm_match.attr("data-open") == "true" ){           
            $comconfirm_match.removeAttr("data-open");
        } else {
            $comconfirm_match.attr("data-open","true");
        }
    });

    // BetSlip - Add Parlay
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

    
});

$(function () {
    // Click開啟 gv面板
    $("[demo-mobile-open-gv]").on("click", function(){
        $(this).closest(".ess-widget").attr("data-info","false").attr("data-media","gv");
        $(this).closest(".video.video-esport").removeAttr("data-lobby");
    });

    // Click開啟 Streaming面板
    $("[demo-mobile-open-streaming]").on("click", function(){
        $(this).closest(".ess-widget").attr("data-info","false").attr("data-media","streaming");
        $(this).closest(".video.video-esport").removeAttr("data-lobby");
    });

    // Click back 返回 esport lobby
    $(".video-esport .btn-back").on("click", function(e){
        e.preventDefault();
        $(this).closest(".video_controller").siblings(".ess-widget").attr("data-info","true").attr("data-media","false");
    });

    // Click channel 開啟頻道選單
    $(".video-esport .btn-channels").on("click", function(){
        // $(this).closest(".video_controller").siblings(".ess-widget").children(".ess-media-group").find(".ess-channel").attr("data-open","true");

        $channel = $(this).closest(".video_controller").siblings(".ess-widget").children(".ess-media-group").find(".ess-channel");
        if( $channel.attr("data-open")== "false") {
            // recommend 面板預設高度120px
            $channel.attr("data-open","true");
        }else if( $channel.attr("data-open")== "true"){
            $channel.attr("data-open","false");
        }

    });

    // Click 頻道選單 [demo-close-channel] 關閉選單
    $("[demo-close-channel]").on("click", function(){
        $(this).closest(".ess-channel").attr("data-open","false");
        $(".video.video-esport").removeAttr("data-channels");
    });

    // Click 切換 GV & Streaming
    $("[demo-switch-streaming]").on("click", function(){
        $(this).closest(".video_controller").siblings(".ess-widget").attr("data-media","streaming");
    });
    $("[demo-switch-gv]").on("click", function(){
        $(this).closest(".video_controller").siblings(".ess-widget").attr("data-media","gv");
    });

    // 關閉影片最小化，並返回到 video lobby
    $(".ess-media-group .btn-close").on("click", function(){
        $(".video").attr("data-lobby", "true").removeAttr("data-pin");
        $(".ess-widget").attr("data-info","true").attr("data-media","false");
    });

});
$(function () {
    // Single Match
    $(".commatch_more").on("touchstart", function(){
        $(".compage").attr("data-status", "is-open");
        $("body").attr("data-status", "is-page-open").attr("data-switchmatch","true");

        // 開啟 single match 在 html 加上 [data-single-match="true"]
        $("html").attr("data-single-match","true");

        // 模擬點擊Single進橫版 使chrome 直接滾動至全屏
        // $("html").attr("data-addressbar-hidden","true");
    });

    // 關閉 Single Match
    $(".compage_header .btn:eq(0), .video_head .btn:eq(0)").on("touchstart", function(){
        $("body, .compage").removeAttr("data-status").removeAttr("data-switchmatch");

        // 關閉 single match 在 html 移除 [data-single-match="true"]
        $("html").removeAttr("data-single-match");
    });
    // 開關影片pin
    $(".btn-pin-video, .btn-pin").on("touchstart", function(){
        $(".video-wrapper, .btn-pin-video").attr("data-pin") == "true" ? $(".video-wrapper, .btn-pin-video").removeAttr("data-pin") : $(".video-wrapper, .btn-pin-video").attr("data-pin", "true");
    });

    // 開關影片頻道
    $(".btn-channels").on("touchstart", function(){
        $(".video").attr("data-channels") == "true" ? $(".video").removeAttr("data-channels") : $(".video").attr("data-channels", "true");
    });

    // 開關影片數據
    $(".btn-statistics").on("touchstart", function(){
        $(".video").attr("data-statistics") == "true" ? $(".video").removeAttr("data-statistics") : $(".video").attr("data-statistics", "true");
    });

    // 從 .video_lobby 裡的 按鈕來打開 TV
    $(".video_play .btn:eq(0)").on("touchstart", function(){
        $(this).closest(".video").removeAttr("data-lobby");
        $(".video_head").attr("data-intv","true");
    });

    // 
    $(".btn-channel").on("touchstart", function(event){
        $(".video_channel").attr("data-show") == "true" ? $(".video_channel").removeAttr("data-show") : $(".video_channel").attr("data-show", "true");
        event.stopPropagation();
    });

    // 关闭影片切换频道的子选单
    $("body").on("touchstart", function(){
        $(".video_channel").removeAttr("data-show");
    });

    // var video_overlay_time;
    // // 开启影片遮罩，内含多种按钮功能
    // $(".video_view").on("touchstart", function(){
    //     clearTimeout(video_overlay_time);
    //     $(".video_overlay").attr("data-show", "true");
    //     video_overlay_time = setTimeout(function(){
    //         $(".video_overlay").removeAttr("data-show");
    //     },3000);
    // });
    // // 关闭影片遮罩
    // $(".compage_content").on("scroll", function(){
    //     $(".video_overlay").removeAttr("data-show");
    //     if( $(this).scrollTop() >= 40){
    //         $(".video_head .btn-back").attr("data-move","down");
    //     } else {
    //         $(".video_head .btn-back").removeAttr("data-move");
    //     }
    // });

    // 捲動控制 [.video_head] 顯示/隱藏
    var top1 = 0;
    $(".compage_content").scroll(function(){
        var top2 = $(".compage_content").scrollTop();
        if(top2 > top1){
            $(".video_head").removeAttr("data-showhead");
        }else{
            $(".video_head").attr("data-showhead","true")
        }
        top1 = top2;
    });

    // 捲動控制 [.video_head] 是否顯示底色
    $(".compage_content").scroll(function(){
        var top2 = $(".compage_content").scrollTop();
        if(top2 > 0){
            $(".video_head").removeAttr("data-scrolltop");
        }else{
            $(".video_head").attr("data-scrolltop","true");
        }
    });

    // 關閉 Single Match Page
    $(".compage_content .compage_header .btn-back").on("click", function(){
        $(this).closest(".compage").removeAttr("data-status");
    });


    // Match 下拉選單
    $(".compage_league > .btn, .compage_match").on("touchstart", function(){
        var $myDropdown = $(".compage_teammenu");
        
        if( $myDropdown.attr("data-status") == "is-open" ){
            $myDropdown.removeAttr("data-status");
        } else {
            $myDropdown.attr("data-status", "is-open");
        }
    });
    $(".compage_teammenu > .team").on("touchstart", function(){
        $(".compage_teammenu").removeAttr("data-status");
    });

    // 關閉影片最小化，並返回到 video lobby
    $(".video_container .btn-close, .video_controller .btn-back").on("click", function(e){
        e.preventDefault();
        $(".video").attr("data-lobby", "true").removeAttr("data-mini");
        $(".compage_content .video_head").removeAttr("data-intv");
    });

    // 當 Single Match Scroll 時，若 [.video] 不是隱藏或沒有固定住時，打開 Header 裡的 Match 資訊
    $(".compage_content").scroll(function(){
        if( $(".video").attr("data-status") == "is-close" || $(".video-wrapper").attr("data-pin") == "true" ){
            
        } else {
            if( $(this).scrollTop() >= $(".video").height() ){
                $(".compage_header").attr("data-status", "is-open");
                $(".video").attr("data-mini", "true");
            } else {
                $(".compage_header").removeAttr("data-status");
                $(".video").removeAttr("data-mini");
            };
        };
    });

    var ticking = false; // rAF 触发锁
 
    function singleMatchScroll(){
        if(!ticking) {
            requestAnimationFrame(singleMatchCheck);
            ticking = true;
        }
    }
    /*
    function singleMatchCheck(){
        // if( $(".compage_content").scrollTop() >= $(".video").height() ){
        //     $(".compage_header").attr("data-mini", "true");
        // } else {
        //     $(".compage_header").removeAttr("data-mini");
        // }
        if( $(".video").attr("data-status") == "is-close" || $(".video").attr("data-pin") == "true" ){
            
        } else {
            if( $(".compage_content").scrollTop() >= $(".video").height() ){
                // $(".compage_header").attr("data-status", "is-open");
                $(".compage_header, .video").attr("data-mini", "true");
            } else {
                // $(".compage_header").removeAttr("data-status");
                $(".compage_header, .video").removeAttr("data-mini");
            };
        };
        // console.log("Success");
        ticking = false;
    }
    */
   
    // 滚动事件监听
    // if($(".compage_content").size() > 0 ){
    //     $(".compage_content")[0].addEventListener('scroll', singleMatchScroll, false);
    // }
    //Copyright icon點擊開啟版權宣告
    $(".btn-copyright, .btn-videoinfo").on("click", function(){
        $(".video_copyright").attr("data-status","is-open");
    });
    $(".video_copyright").on("click", function(){
        $(".video_copyright").removeAttr("data-status");
    });

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

    // .match-bar_float
    $(".match-bar_float .btn-match-hide").on("click", function(){
        $("body").removeAttr("data-switchmatch");
        $(".match-bar").removeAttr("data-status");
    });
    $(".match-bar_float .btn-match-show").on("click", function(){
        $("body").attr("data-switchmatch","true");
        $(".match-bar").attr("data-status","is-open");
    });

    // Bettype - Penalty shoot out
    $("[js-btn-penalty]").on("click", function(){
        $("[js-dialog-bt-penalty]").attr("data-status","is-open");
    });
    $("[class*='bettype_ball']").on("touchstart, click", function(){
        $(this).attr("data-status") == "is-selected" ? $(this).attr("data-status", "is-unselect") : $(this).attr("data-status","is-selected");
    });
});
$(function () {
    // 開啟.page-baccarat
    $("[js-btn-baccarat]").on("click", function(){
        $(".compage.page-baccarat").attr("data-status","is-open");
    });

    // panel 切換
    $(".baccarat_tab li").on("click", function(){
        $(this).attr("data-status","is-active").siblings().removeAttr("data-status");
        $(".baccarat_tabblock .baccarat_panel").eq($(this).index()).attr("data-status", "is-open").siblings(".baccarat_panel").removeAttr("data-status");
    });

    // 关闭影片
    // $(".compage_content").on("scroll", function(){
    //     if( $(this).scrollTop() >= 40){
    //         $(".baccarat_head .btn-back").attr("data-move","down");
    //     } else {
    //         $(".baccarat_head .btn-back").removeAttr("data-move");
    //     }
    // });

    // // 捲動控制 [.video_head] 顯示/隱藏
    // var top1 = 0;
    // $(".compage_content").scroll(function(){
    //     var top2 = $(".compage_content").scrollTop();
    //     if(top2 > top1){
    //         $(".baccarat_head").removeAttr("data-showhead");
    //     }else{
    //         $(".baccarat_head").attr("data-showhead","true")
    //     }
    // });

    // 返回oddspage
    $(".compage .baccarat_head .btn-back").on("click", function(){
        $(this).closest(".compage").removeAttr("data-status");
        $("body").removeAttr("data-status");
    });

    // Demo 下注中
    $(".bacatype_item").on("click", function(){
        $(this).attr("data-status","in-betprocess");
    });

    // Demo 下注後狀態
    $(".baccarat_btngroup .btn.btn-confirm").on("click", function(){
        $(".bacatype_item").removeAttr("data-status").attr("data-bet","true");
        // demo open suspend alert
        $(".comalert").attr("data-status","is-open");
        setTimeout(function () {
            $(".comalert").removeAttr("data-status");
        }, 3000);
    });
    // Demo 取消下注後狀態
    $(".baccarat_btngroup .btn.btn-cancel").on("click", function(){
        $(".bacatype_item").removeAttr("data-status").removeAttr("data-bet");
    });

    // 籌碼選中狀態
    $(".baccarat_chip").on("click", function(){
        $(this).attr("data-status","is-active").siblings(".baccarat_chip").removeAttr("data-status");
    });

    // 展开match bar
    // $(".baccarat_btngroup .btn-match-show").on("click", function(){
    //     $(".page-baccarat .match-bar").attr("data-status","is-open");
    // });

    // 顯示 .bacatype_sign
    $(".bacatype_sign").on("click", function(){
        var $bacatypeItem = $(this).closest(".bacatype_item");
        
        if( $bacatypeItem.attr("data-info") == "true" ){
            $bacatypeItem.removeAttr("data-info");
        } else {
            $bacatypeItem.attr("data-info","true");
        }
    });
    
    $(".bacatype_signinfo").on("click", function(){
        event.stopPropagation();
        event.preventDefault();
        $(this).closest(".bacatype_item").removeAttr("data-info");
    });

    // 關閉 win panel
    $("[js-dialog-win]").on("click", function(){
        $(this).removeAttr("data-status");
        // $(".baccarat_tabblock").removeAttr("data-close");
    });
    // 關閉 check panel
    $("[js-dialog-checking]").on("click", function(){
        $(this).removeAttr("data-status");
        $(".baccarat_tabblock").removeAttr("data-close");
    });

    // 移除.betting遮罩

        $(".baccarat_betting").on("click", function(){
            $(this).closest(".baccarat_betting").removeAttr("data-close");
        });

    
    // Demo 3秒後開啟dialog
    function checkingPop(){
        $("[js-dialog-checking]").attr("data-status","is-open");
        $(".baccarat_tabblock").attr("data-close","true");
    };
    // Demo 跳窗出現狀態
    function winPop(){
        $("[js-dialog-win]").attr("data-status","is-open");
        $(".baccarat_tabblock").attr("data-close","true");
    };
    setTimeout(function(){
        checkingPop();
    },3000);
    setTimeout(function(){
        winPop();
    },4000);

    // Demo Oddspage Enter Chip Spin
    // function chipSpin(){
    //     $(".btn-baccarat").attr("data-status","is-active");
    // };
    // function chipOutSpin(){
    //     setTimeout(function(){
    //         $(".btn-baccarat").removeAttr("data-status");
    //     },2000);
    // };

    // setInterval(function(){
    //     chipSpin();
    //     chipOutSpin();
    // },3000);

    //Uses document because document will be topmost level in bubbling
    $(document).on('touchmove',function(e){
            e.preventDefault();
        });
        var scrolling = false;
        //Uses body because jquery on events are called off of the element they are
        //added to, so bubbling would not work if we used document instead.
        $('body').on('touchstart','.bacatype_signinfo',function(e) {
        //Only execute the below code once at a time
        if (!scrolling) {
            scrolling = true; 
            if (e.currentTarget.scrollTop === 0) {
                e.currentTarget.scrollTop = 1;
            } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
                e.currentTarget.scrollTop -= 1;
            }
            scrolling = false;
            }
        });
        //Prevents preventDefault from being called on document if it sees a scrollable div
        $('body').on('touchmove','.scrollable',function(e) {
            e.stopPropagation();
        });

        // baccarat_promotion popin
        function PromotionPop(){
            $(".baccarat_promotion").attr("data-status","is-open");
            $(".baccarat_promotion .overlay").attr("data-status","is-open");
        };
        setTimeout(function(){
            PromotionPop();
            // Click任一處關閉promotion popup
            $(".baccarat_promotion").on("click", function(){
                $(this).removeAttr("data-status").find(".baccarat_promotion .overlay").removeAttr("data-status");
            });
        },3000);

        $(".btn.btn-match-show").on("click", function(){
            var scrollHeight = $(this).closest(".page-baccarat .compage_content").prop("scrollHeight");
            $(".page-baccarat .compage_content").animate({scrollTop:scrollHeight}, 400);
        });

        // demo oddspage 路紙 Click 展開
        $(".baccarat_stat").on("click", function(){
            // $(this).attr("data-status","is-open");
        
            if( $(this).attr("data-status") == "is-open" ){
                $(this).removeAttr("data-status");
            } else {
                $(this).attr("data-status","is-open");
            }
        });
        $(".baccarat_stat .icon-clear").on("click", function(e){
            e.stopPropagation();
            $(this).closest(".baccarat_stat").removeAttr("data-status");
        });
});
$(function(){
    
    // 開關 .commatch
    $(".commatch--sport50 .commatch_header .icon-arrow-bottom").closest(".btn").on("click", function(){
        event.stopPropagation();
        var $match = $(this).closest(".commatch");
        if($match.attr("data-status") == "is-open") {
            $match.children(".commatch_content").css("display","none");
            $match.children(".commatch_content").slideUp(300);
            $match.removeAttr("data-status");
        } else {
            $match.children(".commatch_content").slideDown(300);
            $match.children(".commatch_content").css("display","flex");
            $match.attr("data-status","is-open");
        }
    });

    
    // 開關 .c-bettype
    $(".c-bettype__row-heading .c-btn").on("touchstart", function(){
        var $bettype = $(this).closest(".c-bettype");
        if($bettype.attr("data-open") == "true") {
            $bettype.attr("data-open","false");
        } else {
            $bettype.attr("data-open","true");
        }
    });

    // Click 開啟 Single Match
    $(".c-team-info__option .c-btn").on("touchstart", function(){
        $(".compage").attr("data-status", "is-open");
        $("body").attr("data-status", "is-page-open").attr("data-switchmatch","true");

        // 開啟 single match 在 html 加上 [data-single-match="true"]
        $("html").attr("data-single-match","true");

        // 模擬點擊Single進橫版 使chrome 直接滾動至全屏
        // $("html").attr("data-addressbar-hidden","true");
    });

    //Click
    //點擊odds 選取狀態
    $(".c-odds-button").on("click", function(){
        var $thisComOdds = $(this)
        if ($thisComOdds.attr("data-selected") == "true") {
            $thisComOdds.attr("data-selected","false");
        } else {
            $thisComOdds.attr("data-selected","true");
        }
    });
});
$(function () {
    // 關閉對話框
    $(".dialog:not([js-dialog-Maradona]) .dialog_footer .btn").on("click", function (event) {
        event.stopPropagation();
        if(typeof($(this).attr("js-bbin-btn"))=="undefined") {
            $(this).closest(".dialog").removeAttr("data-status");
        }else{
            
            $(this).closest(".dialog").attr("data-lock","true");
            setTimeout(function(){
                $(".dialog_footer .btn").closest(".dialog").removeAttr("data-status").removeAttr("data-lock");
            }, 3000);
        }
        
    });
    // $(".dialog-mask").on("click", function(){
    //     $(this).closest(".dialog").removeAttr("data-status");
    // });

    // Maradona 活動跳窗 切換至影片
    // $("[js-dialog-Maradona] .btn-highlight").on("click", function(){
    //     $(this).closest(".dialog").attr("data-play-video","true");
    // });
    // $("[js-dialog-Maradona] .icon-clear, [js-dialog-Maradona] .btn-default").on("click", function(){
    //     $("[js-dialog-Maradona]").removeAttr("data-status");
    // });

    $(".dialog[js-dialog-redenvelop]").on("click", function(){
        $(this).removeAttr("data-status");
    });
    $(".dialog[js-dialog-redenvelop] .dialog_img").on('click', function(event) {
        event.stopPropagation();
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
    $(".fold_header .touch").on("touchstart", function(){
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

    // 開啟 Popup Result
    $("[js-btn-result]").on("click", function(){
        $("[js-page-result]").attr("data-status","is-open");
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
    
    // 開啟 Popup Result Cashout
    $("[js-btn-cashout-result]").on("click", function(){
        $("[js-page-cashout-result]").attr("data-status","is-open");
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
    // 開啟 [Dialog] Gesture Password Tips 面板
    if( $(".dialog[js-dialog-gesture-password-tips]").size() > 0 ){
        setTimeout(function(){
            $(".dialog[js-dialog-gesture-password-tips]").attr("data-status", "is-open");
        },1000);
    }
});
$(function () {
    // go to top
    var gotoTop = $(".main>.gotoTop");
    var scroll_height = window.screen.height * 1;
    $(document).scroll(function () {
        // console.log("scroll_height=" + scroll_height + "      window.scrollY=" + window.scrollY);
        window.scrollY >= scroll_height ? gotoTop.attr("data-status", "is-show") : gotoTop.removeAttr("data-status");
    });
    gotoTop.click(function () {
        var body = $("html, body");
        body.stop().animate({scrollTop: 0}, 600, 'swing');
    });
});
// [Handicap Switch.js] ===========================
$(function () {

    //判斷有.handicap swiper 的 page 才讀取 plugin
    if( $(".handicap_swiper .swiper-container").size() > 0) {
        var mySwiper = new Swiper ('.handicap_swiper .swiper-container', {
            spaceBetween : -54,
            grabCursor : true
        });
    }
    //被選取的.swiper-slide亮起, 其餘的變暗
    $(".handicap_swiper .swiper-slide").on("click",function(){
        var $thisSlide = $(this)
        if ($thisSlide.attr("data-status")) {
            $thisSlide.removeAttr("data-status");
        }
        else {
            $thisSlide.attr("data-status","is-active").siblings().removeAttr("data-status");
        }
    });
    //判斷若有選取任一個.swiper-slide, 按鈕加上.btn-highlight
    $(".handicap_swiper .swiper-slide").on("click",function(){
        if($(".swiper-slide[data-status]").length > 0){
            $(".handicap .btn").removeClass("btn-disselect").addClass("btn-highlight");
            //Click確認按鈕則關閉 handicap
            $(".handicap .btn-highlight").on("click",function(){
                $(this).closest(".handicap").removeAttr("data-status");
            });
        }else{
            $(".handicap .btn").removeClass("btn-highlight").addClass("btn-disselect");
        }
    });
});  
// [Happy5.js] ===========================
$(function () {
    var $happy5 = $(".happy5");

    // 路紙 顯示/隱藏 按鈕
    $happy5.find(".btn-close-scoreboard").on("click", function(){
        $happy5.attr("data-status", "is-close");
    });
    $happy5.find(".btn-open-scoreboard").on("click", function(){
        $happy5.removeAttr("data-status");
    });

    // 路紙 tab 切換內容
    $happy5.find(".tab .btn").on("click", function(){
        console.log($(this).parent("li").index());
        $click_index = $(this).parent("li").index();
        $happy5.find(".scoreboard").eq($click_index).attr("data-status", "is-open").siblings(".scoreboard").removeAttr("data-status");
    });

    // 左右捲動時
    $(".scoreboard_container .scoreboard_scroller").on("scroll", function(){
        $scroll_left = $(this).scrollLeft();
        $scroll_range_width = $(this).children(".scoreboard_content").width() - $(this).width();
        $scroll_left <= 0 ? $(this).parent().addClass("scroll-left") : $(this).parent().removeClass("scroll-left");
        $scroll_left >= $scroll_range_width ? $(this).parent().addClass("scroll-right") : $(this).parent().removeClass("scroll-right");
    });

    // 以下是新版的
    // 路紙 顯示/隱藏 按鈕
    // $(".scorecard .btn-close-scoreboard").on("click", function(){
    //     $(".scorecard").attr("data-status", "is-close");
    // });
    $(".scorecard .scorecard_controller").on("click", function(){
        var $thisScorecard = $(this).closest(".scorecard");
        if ($thisScorecard.attr("data-open")) {
            $thisScorecard.removeAttr("data-open");
        } else {
            $thisScorecard.attr("data-open","true");
        }
    });
    // $(".scorecard .btn-open-scoreboard").on("click", function(){
    //     $(".scorecard").removeAttr("data-status");
    // });

    // 路紙 tab 切換內容
    $(".scorecard .btn-bar .btn").on("click", function(){
        $(this).attr("data-status", "is-active").siblings().removeAttr("data-status");
        $click_index = $(this).index();
        $(".scorecard .scoreboard").eq($click_index).attr("data-status", "is-open").siblings(".scoreboard").removeAttr("data-status");
    });

    // 路紙 Tooltips 顯示/隱藏
    $(".scoreboard_item").on("touchstart, click", function(){
        $target = $(this).children(".tooltips");
        $target.attr("data-status") == "is-open" ? $target.removeAttr("data-status") : $target.attr("data-status", "is-open");
        $(this).siblings().find(".tooltips").removeAttr("data-status").parents(".scoreboard_group").siblings().find(".tooltips").removeAttr("data-status"); 
    });

    // Match 收合
    $(".ng-match_header .btn").on("click", function(){
        $target = $(this).closest(".ng-match");
        if($target.attr("data-status") == "is-open") {
            $target.attr("data-status", "is-collapse");
        } else {
            $target.attr("data-status", "is-open");
        }
    });
});
$(function () {
    // [for test] Switch Skin start
    if( $(".alert[js-alert-howtouse]").size() >= 1 ){
        setTimeout(function(){
            $(".alert[js-alert-howtouse]").attr("data-status", "is-open");
        }, 3000);
        $(".alert[js-alert-howtouse] .btn-default ").on("click", function(){
            $(this).closest(".alert").removeAttr("data-status");
        });
        $(".alert[js-alert-howtouse] .btn-highlight ").on("click", function(){
            window.location = "../Features/Tutorial.html";
        });
    }
});
$(function () {
    // [.loading] hide
    $(".loading").on("click", function () {
        $(this).hide();
    });
    // [.loading] auto hide
    setTimeout(function () {
        $(".loading").eq(0).hide();
    }, 1000);
});
$(function () {
    // *********** for test only --- start *************** //
    
    // new banner swiper start
    if( $(".swiper_promo .swiper-container").size() > 0 ){
        var mySwiper1 = new Swiper('.swiper_promo .swiper-container',{
            autoplay: 3000,
            speed: 300,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
            scrollbar: '.swiper-scrollbar',
            scrollbarHide: false,
            autoplayDisableOnInteraction: false,
            //loop: true,
            preloadImages: true
        });
    };
    // new banner swiper end

    // topevent banner swiper start
    if( $(".swiper_promo .swiper-container").size() > 0 ){
        var mySwiper1 = new Swiper('.topevent_content .swiper-container',{
            speed: 300,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            loop: true,
            preloadImages: true
        });
    };
    // new banner swiper end

});


// [Handicap Switch.js] ===========================
$(function () {

    // lobby_banner swiper
    if( $(".lobby_banner .swiper-container").size() > 0) {
        var mySwiper = new Swiper ('.lobby_banner .swiper-container', {
            autoplay: 3000,
            speed: 300,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
            pagination: '.lobby_banner .swiper-pagination', 
        });
    }

    // appbar tab
    // 檢查[.lobby]是否存在
    if($(".lobby").size() > 0){
        $(".appbar .btn").on("touchstart", function(){
            $(this).attr("data-status","is-active").siblings(".btn").removeAttr("data-status");
        });
    }


    // 使 .sport 重複到每個 .sports_content 內（DEMO用）
    $copySport = $(".swiper-slide .sport").clone();
    $(".swiper_nav_content .swiper-slide").append($copySport);

    // 設定連結
    $(".swiper_nav_content .sport").on("click", function(){
        location.href = "Odds_Soccer_Today.html";
    });

    // Preloader 自動消失
    // setTimeout(function () {
    //     $(".preloader").hide();
    // },1500);
});  



// 底下sports區塊 兩個swiper輪播
window.onload = function() {
    // icon star
    $(".btn-star").on("click", function(e){
        var $thisStar = $(this);
        if ($thisStar.attr("data-status")) {
                $thisStar.removeAttr("data-status");
        } else {
            $thisStar.attr("data-status","is-active");
        }
        event.stopPropagation();
    });

    // btn promotion
    // $(".btn-promotion").click(function(e){
    //     var $thisPromotion = $(this);
    //     if ($thisPromotion.attr("data-status")) {
    //             $thisPromotion.removeAttr("data-status");
    //     } else {
    //         $thisPromotion.attr("data-status","is-active");
    //     }
    //     event.stopPropagation();
    // });

    // textfield-password
    $(".textfield-password .btn, .topevent_userinfo .btn-hide").click(function(e){
        var $thisPassword = $(this);
        if ($thisPassword.attr("data-status")) {
                $thisPassword.removeAttr("data-status");
        } else {
            $thisPassword.attr("data-status","is-open");
        }
        event.stopPropagation();
    });

    // textfield-text
    $(".textfield_remember .btn").click(function(e){
        var $thisRemember = $(this);
        if ($thisRemember.attr("data-status")) {
                $thisRemember.removeAttr("data-status");
        } else {
            $thisRemember.attr("data-status","is-open");
        }
        event.stopPropagation();
    });

    // 開啟登入畫面
    $(".topevent_userinfo .btn-login-small").on("click", function(){
        $(".dialog-login").attr("data-status","is-open");
        $(".lobby, .header, .appbar").addClass("blur");
        event.stopPropagation();
    });

    $(".dialog .btn-registered-small").on("click", function(){
        $(".dialog-login").removeAttr("data-status");
        $(".dialog-registered").attr("data-status","is-open");
    });


    // 開啟註冊畫面
    $(".topevent_userinfo .btn-registered-small").on("click", function(){
        $(".dialog-registered").attr("data-status","is-open");
        $(".lobby, .header, .appbar").addClass("blur");
        event.stopPropagation();
    });

    $(".dialog .btn-login-small").on("click", function(){
        $(".dialog-registered").removeAttr("data-status");
        $(".dialog-login").attr("data-status","is-open");
    });

    $(".dialog_footer .btn").on("click", function(){
        $(this).closest(".dialog").siblings(".lobby, .header, .appbar").removeClass("blur");
    });


    $(".dialog .overlay").on("click", function(){
        $(this).closest(".dialog").removeAttr("data-status");
        $(".lobby, .header, .appbar").removeClass("blur");
    });

    // 下拉選單
    $(".dialog_content .dropdown .btn").on("click", function(){
        $(this).closest(".dropdown").attr("data-status", "is-open");
    });
    $(".dialog_content .dropdown-menu").on("click", function(){
        $(this).closest(".dropdown").removeAttr("data-status");
    });
    function setCurrentSlide(ele,index){
        $(".swiper_nav .swiper-slide").removeAttr("data-status");
        ele.attr("data-status","is-active");
        //swiper_nav.initialSlide=index;
    }
    if( $(".sports_tab").size() > 0 ){
        // var scrollable = true
        $(".sports_tab .btn").on("click", function(){
            // scrollable = false
            $(this).attr("data-status","is-active").siblings().removeAttr("data-status");
            var n = $(this).index();
            // alert( '#block_' + n )
            $("html,body").animate({ scrollTop: $('#block_' + n).offset().top-$('#block_' + n).height()- 39 }, 500, function(){
                // scrollable = true;
            });
            
        });
        
        // $(window).on("scroll", function(){
        //     var blockheight0 = $("#block_0").offset().top - $("html").scrollTop();
        //     var blockheight1 = $("#block_1").offset().top - $("html").scrollTop();
        //     if( scrollable ){
        //         var blockheight0 = $("#block_0").offset().top - $("html").scrollTop();
        //         var blockheight1 = $("#block_1").offset().top - $("html").scrollTop();
        //         if( blockheight0 < 40 && blockheight0 > 0 ) {
        //             $(".sports_tab .btn:nth-child(1)").attr("data-status","is-active").siblings().removeAttr("data-status");
        //         }else if( blockheight1 < 40 && blockheight1 > 0 ) {
        //             $(".sports_tab .btn:nth-child(2)").attr("data-status","is-active").siblings().removeAttr("data-status");
        //         }
        //         // console.log("123")
        //     }
            
        // });
        
        //判斷.submenu內容是否>螢幕寬度
        var navScroll = $(".sports_scroll")[0].scrollWidth;
        var navWidth = $(".sports_scroll").innerWidth();
        if( navScroll > navWidth) {
            $(".sports_slide").attr("data-arrow","true");
        }
        //判斷.submenu 滾動至底 移除data-arrow
        $(".sports_scroll").on("scroll", function(){
            var navLeft = $(".sports_scroll")[0].scrollLeft;
            if( navScroll - navLeft <= navWidth) {
                $(".sports_slide").removeAttr("data-arrow");
            }else{
                $(".sports_slide").attr("data-arrow","true");
            }
        });

    }
    
    

    //switch btn 切换
    
    $(".topevent_function .btn-switch").click(function(){
        $switch_btn = $(".btn-switch")
        if( $switch_btn.attr("data-status") == "is-active" ){
            $(this).removeAttr("data-status");
            $(this).closest("html").removeAttr("data-darkmode");
        }else{
            $(this).attr("data-status","is-active");
            $(this).closest("html").attr("data-darkmode","true");
        }
    });

    //切換gesture password
    $(".btn-gesturepassword").click(function(){
        $gesture_btn = $(".btn-gesturepassword").closest(".dialog_container");
        if( $gesture_btn.attr("data-gesture") == "show" ){
            $(this).closest(".dialog_container").removeAttr("data-gesture");
        }else{
            $(this).closest(".dialog_container").attr("data-gesture","show");
        }
    });

}
// [Handicap Switch.js] ===========================
$(function () {

    // sasa_lobby_banner swiper
    if( $(".sasa_lobby_banner .swiper-container").size() > 0) {
        var sasa_lobbySwiper = new Swiper ('.sasa_lobby_banner .swiper-container', {
            autoplay: 3000,
            speed: 300,
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
            pagination: '.sasa_lobby_banner .swiper-pagination', 
        });
    }

    //sasa_appbar tab
    $(".sasa_appbar .sasa_btn").on("touchstart", function(){
        $(this).attr("data-status","is-active").siblings(".sasa_btn").removeAttr("data-status");

        // 當選到底下的btn時 sasa_appbar本身+另外的class
        // var $style = $(this).attr("data-name");
        // $(this).closest(".sasa_appbar").attr("data-status", $style);

        // 設定連結
        if( $(this).index() == 0){
            location.href = "Lobby.html";
        }
        if( $(this).index() == 1){
            location.href = "myBets_unsettled.html";
        }
        if( $(this).index() == 2){
            location.href = "Discover.html";
        }
        if( $(this).index() == 3){
            location.href = "Support.html";
        }
        if( $(this).index() == 4){
            location.href = "myAccount_before.html";
        }
    });


    var $bodyClass = $(".sasa_main").parent("body");//document.body.classList;
    window.addEventListener('scroll', function(){
      var st = this.scrollY;
      // 判斷是向上捲動，而且捲軸超過 45px
      if( st < 45) {
        $bodyClass.removeClass('showup');
      }else{
        $bodyClass.addClass('showup');
      }
    });

    // marquee
    $('.marquee').width($('.marquee1').width());



    // login
    // sasa_textfield-password
    $(".sasa_textfield-password .sasa_btn").click(function(e){
        var $thisPassword = $(this);
        if ($thisPassword.attr("data-status")) {
                $thisPassword.removeAttr("data-status");
        } else {
            $thisPassword.attr("data-status","is-open");
        }
        event.stopPropagation();
    });

    // sasa_textfield_remember
    $(".sasa_textfield_remember").click(function(e){
        var $thisPassword = $(this);
        if ($thisPassword.attr("data-status")) {
                $thisPassword.removeAttr("data-status");
        } else {
            $thisPassword.attr("data-status","is-open");
        }
        event.stopPropagation();
    });



    // 開啟訊息跳窗
    $(".sasa_btn-login").on("click", function(){
        $(".sasa_dialog").attr("data-status","is-open");
        $(".sasa-login").addClass("blur");
    });


    $(".sasa_dialog_footer .sasa_dialog_btn").on("click", function(){
        $(this).closest(".sasa_dialog").siblings(".sasa-login").removeClass("blur");
        $(".sasa_dialog").removeAttr("data-status");
    });


    $(".sasa_dialog .overlay").on("click", function(){
        $(this).closest(".sasa_dialog").removeAttr("data-status");
        $(".sasa-login").removeClass("blur");
    });

    // 使 .sport 重複到每個 .sports_content 內（DEMO用）
    $copySport = $(".sasa_sports_inner").eq(0).children(".sasa_sport-item").clone();
    $(".sasa_sports_inner").prepend($copySport).append($copySport);
    
    // 設定連結
    $(".sasa_sport-item").on("click", function(){
        location.href = "Odds_Soccer_Today.html";
    });

    // Preloader 自動消失
    // setTimeout(function () {
    //     $(".preloader").hide();
    // },1500);
});  



// 底下sports區塊 兩個swiper輪播
$(function () {
    function setCurrentSlide(ele,index){
        $(".sasaswiper_sports_tab .swiper-slide").removeAttr("data-status");
        ele.attr("data-status","is-active");
        //sasaswiper_sports_tab.initialSlide=index;
    }
    if( $(".sasaswiper_sports_tab").size() > 0 ){
        var sasaswiper_sports_tab = new Swiper('.sasaswiper_sports_tab', {
            slidesPerView: 5,
            paginationClickable: true,
            freeMode: true,
            loop: false,
            onTab:function(swiper){
            var n = sasaswiper_sports_tab.clickedIndex;
            alert(1);
            }
        });
        sasaswiper_sports_tab.slides.each(function(index,val){
            var ele=$(this);
            ele.on("click",function(){
            setCurrentSlide(ele,index);
            sasaswiper_sports_content.slideTo(index, 500, false);
            //mySwiper.initialSlide=index;
            });
        });
    }
    if( $(".sasaswiper_sports_content").size() > 0 ){
        var sasaswiper_sports_content = new Swiper ('.sasaswiper_sports_content', {
            direction: 'horizontal',
            loop: false,
            autoHeight: true,
            onSlideChangeEnd: function(swiper){
            var n=swiper.activeIndex;
            setCurrentSlide($(".sasaswiper_sports_tab .swiper-slide").eq(n),n);
            sasaswiper_sports_tab.slideTo(n, 500, false);
            }
        });
    }
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
    $(document).scroll(function () {
        var $Streaming = $('.c-mini-streaming[data-open="true"]');
        var $StreamingHeight = $('.c-mini-streaming[data-open="true"]').height();
        var $WindowHeight = $(window).height();
        var $HeaderHeight = $(".header-submenu").height() + $(".header-filter").height();
        var $AppbarHeight = $(".appbar").height();
        var $MatchHeight = $('.c-mini-streaming[data-open="true"]').siblings('.commatch_content').height();
        var $MatchTop = $('.c-mini-streaming[data-open="true"]').siblings('.commatch_content').offset().top - $(window).scrollTop();
        var $StreamingTop = $MatchTop + $MatchHeight;
        var $StreamingBottom = $WindowHeight - $MatchTop - $MatchHeight;
        
        if( $StreamingTop < $HeaderHeight ) {
            $Streaming.attr("data-scroll-to-top","true");
        }else if( $StreamingBottom < $StreamingHeight + $AppbarHeight ) {
            $Streaming.attr("data-scroll-to-bottom","true");
            // setTimeout(function(){
            //     $Streaming.removeAttr("data-scroll-to-bottom-animation");
            // }, 300);
        }else{
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
      $(".c-tabs__content .c-tab").on("click", function(){
        $(this).attr("data-selected","true").siblings(".c-tab").removeAttr("data-selected");
        $(".c-more-lines .bettype_group").eq($(this).index()).attr("data-selected", "true").siblings(".bettype_group").removeAttr("data-selected");
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
// [NumberGame.js] ===========================
$(function () {
    // 顯示縮小資訊
    if( $(".ng-match_content").size() > 0 ){
        $(window).scroll(function(){
            if($(window).scrollTop() > ($("[class*='ng-list--numbergame'] .ng-match[data-status=is-open] .ng-match_content").offset().top)){
                $("[class*='ng-list--numbergame'] .ng-match[data-status=is-collapse]").attr("data-show", "true");
            }
            else{
                $("[class*='ng-list--numbergame'] .ng-match[data-status=is-collapse]").removeAttr("data-show");
            }
        });
    }
    

    // Function - ToggleText
    $.fn.extend({
        toggleText: function(a, b){
            return this.text(this.text() == b ? a : b);
        }
    });

    // 開球效果
    $("[js-ng-drawn]").on("click", function(){
        $(this).attr("data-status", "is-active").toggleClass("is-unknown blue").toggleText("?", "32");
        $(this).on("animationend", function() { 
            $(this).removeAttr("data-status");
        });
    });
});
$(function(){

    $(".btn-refresh").click(function(e){
        var $thisRefresh = $(this)
        $thisRefresh.attr("data-status","is-active");
        setTimeout(function(){
            $thisRefresh.removeAttr("data-status");
        },1000)
        event.stopPropagation()
    });

    // Fast Market Btn
    $(".betType_header .btn-help[js-btn-fastmarket]").click(function(e){
        $(".dialog[js-dialog-fastmarket]").attr("data-status","is-open");
        event.stopPropagation()
    });
    $(".league_header").not(".number-game .league_header").on("click",function(){
        var $thisLeague = $(this).parents(".league");
        if ($thisLeague.attr("data-status")) {
            $thisLeague.children(".match_list").slideUp(300, function(){
                $thisLeague.removeAttr("data-status");
            });
        } else {
            $thisLeague.children(".match_list").slideDown(300);
            $thisLeague.attr("data-status","is-open");
        }
    });
    $(".match_header").not(".number-game .match_header").on("click",function(){
        var $thisMatch = $(this).parents(".match");
        if ($thisMatch.attr("data-status")) {
            $thisMatch.children(".match_content").slideUp(300,
            function(){
                $thisMatch.removeAttr("data-status");
            });
        } else {
            $thisMatch.children(".match_content").slideDown(300);
            $thisMatch.attr("data-status","is-open");
        }
    });
    // 點擊 Odds 按鈕時，開啟 Quick Bet 面板
    $(".betType_item .btn.btn-single").on("click",function(){
        $(".quickBet_container").attr("data-status","is-open");
    });
    // Key Pad 點了「完成」後，關閉 Key Pad
    $(".keypad_item#done").click(function(){
        $(this).closest(".keypad").removeAttr("data-status");
        $(".textfield").removeAttr("data-status");
    });
    // 點了輸入框後出現Key Pad
    $(".textfield_input").on("click", function(){
        $(this).closest(".tickets_bet").next(".keypad").attr("data-status","is-open");
    });
    // 點了「投注」後，關閉 Quick Bet 面板
    $(".quickBet .btn-bet").click(function(){
        // $(".quickBet .keypad").removeAttr("data-status");
        $quickBet_alert = $(".quickBet .alert");
        $quickBet_recommend = $(".quickBet .recommend")
        $appbar = $(".appbar");
        $(".quickBet_container").removeAttr("data-status").next('.alert').attr("data-status","is-open").siblings(".recommend").attr("data-status","is-open");
        $(".recommend").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(e) {
            var footHeight = $(".appbar").outerHeight() + $(".alert").outerHeight();
            $(".recommend").animate({
                bottom: footHeight
            },300)
        })
        //Parlay 加票時Red Dot動態
        $(".main-bar .badge").addClass("is-adding");
        setTimeout(function () {
            $(".main-bar .badge").removeClass("is-adding");
        }, 3000);

        $(".content").css("padding-bottom", $quickBet_alert.innerHeight() + $appbar.innerHeight());
        $quickBet_alert.find(".btn").on("click", function(){
            $(".content").css("padding-bottom", $appbar.innerHeight());
            $quickBet_alert.removeAttr("data-status");
            $quickBet_recommend.removeAttr("data-status");
        });
    });
    // Parlay Page
    var parlayCount = 0
    $(".btn-parlay .betType_odds").on("click",function(){
        var $thisParlayOdds = $(this);
        if ($thisParlayOdds.attr("data-status")) {
            $thisParlayOdds.removeAttr("data-status");
            // $(".parlay_counter").attr("data-status","is-open");
            //Parlay_bar 點擊odds 展開
            if(parlayCount == 1) {
                $(".parlay_bar").removeAttr("data-status","is-open");
                parlayCount--;
                $(".betting_amount").text(parlayCount);
            }else{
                //Parlay 加票時動態
                $(".parlay_bar").addClass("is-active");
                setTimeout(function () {
                    $(".parlay_bar").removeClass("is-active");
                }, 200);
                parlayCount--;
                $(".betting_amount").text(parlayCount);
            }
        } else {
            $thisParlayOdds.attr("data-status","is-active");
            // $(".parlay_counter").attr("data-status","is-open");
            //Parlay_bar 點擊odds 展開
            if(parlayCount == 0) {
                $(".parlay_bar").attr("data-status","is-open");
                parlayCount++;
                $(".betting_amount").text(parlayCount);
            }else{
                //Parlay 加票時動態
                $(".parlay_bar").addClass("is-active");
                setTimeout(function () {
                    $(".parlay_bar").removeClass("is-active");
                }, 200);
                parlayCount++;
                $(".betting_amount").text(parlayCount);
            }
        }
        randomParlayOdds();
    });

    // 隨機顯示 [.parlay_bar] 裡的 Odds
    var randomParlayOdds = function(){
        var $Parlay_visiable = Math.floor(Math.random()*2);

        $(".parlay_bar .parlay_odds").addClass("hide");
        $(".parlay_bar .preloader").removeClass("hide");
        $(".parlay_bar .btn").addClass("hide");

        if( $Parlay_visiable == 0 ) {

            setTimeout(function () {
                $(".parlay_bar .preloader").addClass("hide");
                $(".parlay_bar .btn").removeClass("hide");
            }, 2000);
        } else {
            setTimeout(function () {
                $(".parlay_bar .parlay_odds").removeClass("hide");
                $(".parlay_bar .preloader").addClass("hide");
            }, 500);

        }
    };
    $(".parlay_bar .btn").on("click", function(){
        randomParlayOdds();
        return false;
    });


    //SingleMatch Tab 切換
    // 預設顯示第一個 Tab
    var _showTab = 0;
    $('.tab_block').each(function(){
        // 目前的頁籤區塊
        var $tab = $(this);
        var $defaultLi = $('ul.tab li', $tab).eq(_showTab).attr("data-status","is-active");
        var $this = $(this),
        _clickTab = $this.find('.btn').attr('href');
        $($defaultLi.find('.btn').attr('href')).siblings().removeAttr("data-status");
        $(_clickTab).attr("data-status","is-open");

        // 當 li 頁籤被點擊時...
        $('ul.tab li', $tab).click(function() {
        // 找出 li 中的超連結 href(#id)
        var $this = $(this),
        _clickTab = $this.find('.btn').attr('href');
        // 把目前點擊到的 li 頁籤加上 .active
        // 並把兄弟元素中有 .active 的都移除 class
        $this.attr("data-status","is-active").siblings().removeAttr("data-status");
        // 淡入相對應的內容並隱藏兄弟元素
        $(_clickTab).stop(false, true).attr("data-status","is-open").siblings(".tab_panel").removeAttr("data-status");

        return false;
        }).find('.btn').focus(function(){
        this.blur();
        });
    });
    $(".page-singleMatch .betType_block").attr("data-status","is-open");
    $(".betType_header").click(function(){
        var $thisSingle = $(this).parents(".betType_block");
        if ($thisSingle.attr("data-status")) {
            $thisSingle.children(".betType_list").slideUp(300,
            function(){
                $thisSingle.removeAttr("data-status");
            });
        } else {
            $thisSingle.children(".betType_list").slideDown(300);
            $thisSingle.attr("data-status","is-open");
        }
    });
    $(".btn-morebet").click(function(){
        $(".page-singleMatch").attr("data-status","is-open");
        $("body").attr("data-status","is-page-open");
    });
    var $timer;
    // Streaming 開啟與隱藏
    // $(".video_touch").on("touchstart", function(){
    //     $video_touch = $(".video_touch");
    //     $video_controller = $(".video_controller");
    //     $video_touch.hide();
    //     clearTimeout($timer);
    //     $video_controller.attr("data-status","is-open");
    //     // $timer = setTimeout(function () {
        //     $video_controller.removeAttr("data-status");
        // }, 3000);

    // });
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

    $(".btn-open-video").on("touchstart", function(){
        $(this).closest(".video").removeAttr("data-status");
        // 點擊 [開啟視頻] 隱藏 Match 資訊
        // $(".compage_header").removeAttr("data-status");
    });

    // [實時視頻] 與 [實時比賽動態] 按鈕切換
    $(".video .btn-switch-video").on("click", function () {
        $(this).addClass("hide").siblings(".btn-switch-video").removeClass("hide");
    });

    // Streaming 靜音按鈕
    $(".btn-mute").click(function(){
        if( $(this).attr("data-status") == "is-active" ){
            $(this).removeAttr("data-status");
        } else {
            $(this).attr("data-status", "is-active");
        }
    });
    // Streaming 全螢幕按鈕
    $(".btn-fullscreen").click(function(){
        if( $(this).attr("data-status") == "is-active" ){
            $(this).removeAttr("data-status");
        } else {
            $(this).attr("data-status", "is-active");
        }
    });

    // ph4 點擊 .btn-allbet 展開下方列表
    $(".btn-allbet").on("click", function() {
        var scoreTable = $(this).closest(".betType_list");
        scoreTable.toggleClass("is-open");
        if(scoreTable.hasClass("is-open")) {
            $(this).closest(".btn-allbet").text("Hide All");
        }else{
            $(this).closest(".btn-allbet").text("View All");
        }
    })
    $(".page_content").scroll(function(){
        //HT/FT Score head Sticky
        if($(".tab_panel[data-status='is-open'] .is-open .betType-allbet").size() > 0){
            var pageScroll = $(".tab_panel[data-status='is-open'] .is-open .betType-allbet").scrollTop();
            var scoreOffset = $(".tab_panel[data-status='is-open'] .is-open .betType-allbet").position().top;
            if(pageScroll >= scoreOffset) {
                $(".betType-allbet").attr("data-status","is-sticky");
            }else{
                $(".betType-allbet").removeAttr("data-status");
            }
        }
    });

    //Score Box Btn
    $(".betType_header .btn-help[js-btn-scorebox-handicap]").click(function(e){
        $(".dialog[js-dialog-scorebox-handicap").attr("data-status","is-open");
        event.stopPropagation()
    });
    $(".betType_header .btn-help[js-btn-scorebox-ou]").click(function(e){
        $(".dialog[js-dialog-scorebox-ou").attr("data-status","is-open");
        event.stopPropagation()
    });

    //Parlay Improve

    // 開啟 [Dialog] Howtouse Parlay面板
    if( $(".dialog[js-dialog-howtouse-parlay]").size() > 0 ){
        setTimeout(function(){
            $(".dialog[js-dialog-howtouse-parlay]").attr("data-status", "is-open");
        },1000);
        $(".dialog[js-dialog-howtouse-parlay] .btn-highlight").on("click", function(){
            $(".teach").attr("data-status","is-open");
            //預設開啟在step0
            setTimeout(function(){
                $(".teach").addClass("is-step0");
            },500);
        });
    }

    //開啟 / 收合 全部League
    $(".league_collapse").on("click",function(){
        var $thisCollapseLeague = $(this);
        if ($thisCollapseLeague.attr("data-status")) {
            $thisCollapseLeague.siblings(".league").children(".match_list").slideUp(300, function(){
                $thisCollapseLeague.removeAttr("data-status");
                $thisCollapseLeague.find(".collapse_title").html("展开全部联赛")
            });
        } else {
            $thisCollapseLeague.siblings(".league").children(".match_list").slideDown(300, function(){
                $thisCollapseLeague.attr("data-status","is-open");
                $thisCollapseLeague.find(".collapse_title").html("收起全部联赛")
            });
        }
    });

});

$(function(){
    
    // 關閉本頁
    $(".page .main-bar > .btn:first-child").on("click", function(){
        $(this).parents(".page").removeAttr("data-status");
        // 移除 body 狀態
        $("body").removeAttr("data-status");
    });
});
$(function () {
    // 打開 Promo 活動頁面
    $(".promo .btn-highlight").on("click", function(){
        $(".page-nonpeakhours").attr("data-status", "is-open");
        // 兩秒後自動打開
        setTimeout(function(){
            $(".pm-popup--message").attr("data-open", "true");
            $(".pm-overlay").attr("data-show", "true");
        }, 2000);
    });

    // 關閉 Promo 活動頁面
    $(".page-nonpeakhours .main-bar .btn").on("click", function(){
        $(".page-nonpeakhours").removeAttr("data-status");
    });

    $("[js-dialog-nonpeakhours-completed], [js-dialog-nonpeakhours-unable]").attr("data-status", "is-open");
    // 開啟 [Dialog] Bonus Promo 面板
    if( $(".dialog[js-dialog-nonpeakhours-promo]").size() > 0 ){
        setTimeout(function(){
            $(".dialog[js-dialog-nonpeakhours-promo]").attr("data-status", "is-open");
            // 定義輪播 Swiper
            var bonusBanner = new Swiper('.bonusBanner',{
                nextButton: '.bonus-btn-next',
                prevButton: '.bonus-btn-prev',
                loop: true,
                pagination: '.swiper-pagination',
                autoplay: 3000,
                autoplayDisableOnInteraction: false
            });
        },1000);
    }

    // ----------------------------
    // mobile尺寸時，Bet Record Table 顯示/隱藏 Match Name
    $(".td-sidetitle .pm-btn").on("touchstart", function(){
        var $tdSidetitle = $(this).closest(".td-sidetitle");
        var $tooltip = $(this).find(".pm-tooltip");

        $tdSidetitle.attr("data-tooltip") == "true" ? $tdSidetitle.removeAttr("data-tooltip") : $tdSidetitle.attr("data-tooltip", "true");
        $tooltip.attr("data-show") == "true" ? $tooltip.removeAttr("data-show") : $tooltip.attr("data-show", "true");
    });

    // 開啟 popup
    $(".promotion__option .pm-btn-primary").on("touchstart", function(){
        $(".pm-popup--winnerlist").attr("data-open", "true");
        $(".pm-overlay").attr("data-show", "true");
    });
    
    $(".pm-section--betrecord .pm-btn-highlight").on("touchstart", function(){
        $(".pm-popup--spingame").attr("data-open", "true");
        $(".pm-overlay").attr("data-show", "true");
    });

    // 關閉 popup
    $(".pm-popup .pm-btn").on("touchstart", function(){
        $(this).closest(".pm-popup").removeAttr("data-open");
        $(".pm-overlay").removeAttr("data-show");
    });

    $(".pm-tabs__tab").on("touchstart", function(){
        $tab_index = $(this).index();
        console.log($(this).index());
        $(this).attr("data-selected", "true").siblings().removeAttr("data-selected");
        $(".pm-panel").eq($tab_index).attr("data-open", "true").siblings().removeAttr("data-open");
    });
    //計算emptyState 狀態 面板高度
    if($(".empty.empty-noNonPeakHours").size() > 0 ) {
        $(".empty.empty-noNonPeakHours").closest(".content").css("padding-bottom", "50px");
    }

    //Premier League
    //close the countdown
    $(".icon-clear").on("click", function(){
        $(this).closest(".premiercount").removeAttr("data-status");
    });
    //close the kv
    $(".premier_kv .overlay, .premier_kv .icon-clear").on("click", function(){
        $(this).closest(".premier_kv").removeAttr("data-status");
        setTimeout(function(){
            $(".premiercount").attr("data-status", "is-active");
        }, 1000);
    });
    setTimeout(function(){
        $(".premier_plane").attr("data-status", "is-active");
    }, 3000);
    setTimeout(function(){
        $(".premier_kv").attr("data-status", "is-active");
    }, 2000);
});
$(function () {

    //***** Recommend_after start***********/

    //計算內容高度
    var $oriHeight = $(".recommend_collapse").height();
    $(".recommend_collapse").css("height",$oriHeight);
    //點擊後展開內容並計算高度
    $("[js-recommend-expand]").on("click", function(){
        var $alertHeight = $(".alert").eq(0).innerHeight() + 50;
        $(".recommend").removeAttr("data-status").attr("data-status","is-active");
        //lock body 防止背景捲動
        // $("body").attr("data-status","is-lock");
        // $(".recommend_collapse").css("height","calc( 100vh - " + $alertHeight +"px)");
        $(".recommend_collapse").removeAttr("style");
    });
    //點擊後收合內容及Alert
    $("[js-recommend-collapse]").on("click", function(){
        // $(".recommend").removeAttr("data-status").siblings(".alert").removeAttr("data-status");
        $(".recommend").removeAttr("data-status").attr("data-status","is-open");
        //恢復body可以滾動
        // $("body").removeAttr("data-status");
    });
    //Alert按鈕點擊後收合內容及Alert
    $(".btn-box .btn-highlight").on("click", function(){
        $("body").removeAttr("data-status");
    });

    //計算 appbar + autoparlaybar 高度 (已移至OddsPage.js處理)
    // var footHeight = $(".appbar").outerHeight() + $(".alert").outerHeight();
    // //滾動至計算高度
    // if(typeof($(".alert").attr("data-status"))){
    //     $(".recommend").css("bottom",footHeight);
    // };
    //***** Recommend_after end***********/
});

$(function () {
    //Click filter bar open Keno Result
    $(".page-result .page_header .filter-bar .dropdown-menu li").eq(2).children("a").on("click", function(){
        $(".page[js-keno-result]").attr("data-status","is-open");
    });
    //Click filter bar open Virtual Games Result
    $(".page-result .page_header .filter-bar .dropdown-menu li").eq(4).children("a").on("click", function(){
        $(".page[js-vg-result]").attr("data-status","is-open");
    });
});
$(function () {
    // Please Rotate Device start -------------------->
    orientationChange = function () {
        switch(window.orientation) {
        　　case 0: 
                $(".rotateDevice").removeClass("in right");
                break;
        　　case -90: 
                $(".rotateDevice").addClass("in right");
                break;
        　　case 90:   
                $(".rotateDevice").addClass("in");
                break;
        　　case 180:   
            　　$(".rotateDevice").removeClass("in right");
            　　break;
        };
    };
    orientationChange();
    window.onorientationchange = orientationChange;
    // Please Rotate Device end -------------------->
    $("content").on("touchmove", function(e){
        e.preventDefault();
    });
});
$(function () {
    $(".main-bar .btn-search").on("click", function(){
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
    //Select League page select all / dis select all
    $("[js-dis-select]").click(function(){
        $(".selected input").removeProp("checked")
    });
    $("[js-select-all]").click(function(){
        $(".selected input").prop("checked","checked")
    });
}); 
$(function(){
    $(".page-quickset .content_row.touch").on("touchstart", function(){
        $inner_btn = $(this).find(".btn");
        if( $inner_btn.attr("data-status") == "is-active" ){
            
            // Switch Btn 切換效果
            $inner_btn.removeAttr("data-status");

            // 自定義快速下注金額
            $(this).next(".quickset_input").removeAttr("data-status").next(".keypad, .comkeypad").removeAttr("data-status");
            $(this).next(".quickset_input").children(".textfield").removeAttr("data-status");

        } else {

            // Switch Btn 切換效果
            $inner_btn.attr("data-status","is-active");

            // 自定義快速下注金額
            $(this).next(".quickset_input").attr("data-status","is-active");
        }
        // if( $(this).attr("data-status") == "is-active" ){
        //     $(this).removeAttr("data-status");
        //     $(this).parent().parent().siblings(".quickset_input").removeAttr("data-status").children().children(".textfield_input").attr("disabled","disabled");
        // } else {
        //     //$(this).attr("data-status","is-active").parent("li").siblings("li").children(".btn").removeAttr("data-status");
        //     $(this).attr("data-status","is-active");
        //     $(this).parent().parent().siblings(".quickset_input").attr("data-status","is-active").children().children(".textfield_input").removeAttr("disabled");
        // }
    });

    $(".page-betstake .content_row.touch").on("touchstart", function(){
        $bet_row = $(this);
        $bet_row.attr("data-status","is-active")
        $bet_row.siblings().removeAttr("data-status")
        if( $bet_row.attr("data-status") == "is-active" ){
            // 自定義默認注金
            $(this).next(".quickset_input").attr("data-status","is-active");
        } else {

            // 自定義默認注金
            $(this).next(".quickset_input").removeAttr("data-status").next(".keypad").removeAttr("data-status");
            $(this).next(".quickset_input").children(".textfield").removeAttr("data-status");
            
        }
    });
    // for sasa 自定義默認注金 open comkeypad
    $(".page-betstake .content_row.touch").on("touchstart", function(){
        $bet_row = $(this);
        $bet_row.attr("data-status","is-active")
        $bet_row.siblings().removeAttr("data-status")
        if( $bet_row.attr("data-status") == "is-active" ){
            // 自定義默認注金
            $(this).next(".quickset_input").attr("data-status","is-active");
        } else {

            // 自定義默認注金
            $(this).next(".quickset_input").removeAttr("data-status").next(".comkeypad").removeAttr("data-status");
            $(this).next(".quickset_input").children(".textfield").removeAttr("data-status");
            
        }
    });
    $(".page-setting .content_row.touch").on("touchstart", function(){
        var $thisrow = $(this);
        if ($thisrow.attr("data-status")) {
            $thisrow.removeAttr("data-status");
        } else {
            $thisrow.attr("data-status","is-active");
        }
    });


    $("[js-nickname]").on("click",function(){
        var $thisLink = $(".page-nickname");
        if ($thisLink.attr("data-status")) {
            $thisLink.removeAttr("data-status");
        } else {
            $thisLink.attr("data-status","is-open");
        }
    });

    $("[js-password]").on("click",function(){
        var $thisLink = $(".page-password");
        if ($thisLink.attr("data-status")) {
            $thisLink.removeAttr("data-status");
        } else {
            $thisLink.attr("data-status","is-open");
        }
    });
    $("[js-gesturePassword]").on("click",function(){
        var $thisLink = $(".page-gesturePassword");
        if ($thisLink.attr("data-status")) {
            $thisLink.removeAttr("data-status");
        } else {
            $thisLink.attr("data-status","is-open");
        }
    });
    $("[js-email]").on("click",function(){
        var $thisLink = $(".page-email");
        if ($thisLink.attr("data-status")) {
            $thisLink.removeAttr("data-status");
        } else {
            $thisLink.attr("data-status","is-open");
        }
    });
    $("[js-mailing]").on("click",function(){
        var $thisLink = $(".page-mailing");
        if ($thisLink.attr("data-status")) {
            $thisLink.removeAttr("data-status");
        } else {
            $thisLink.attr("data-status","is-open");
        }
    });
    //setting page
    $("[js-language]").on("click",function(){
        var $thisLink = $(".page-language");
        if ($thisLink.attr("data-status")) {
            $thisLink.removeAttr("data-status");
        } else {
            $thisLink.attr("data-status","is-open");
        }
    });
    $("[js-oddstype]").on("click",function(){
        var $thisLink = $(".page-oddstype");
        if ($thisLink.attr("data-status")) {
            $thisLink.removeAttr("data-status");
        } else {
            $thisLink.attr("data-status","is-open");
        }
    });
    $("[js-sportsmenu]").on("click",function(){
        var $thisLink = $(".page-sportsmenu");
        if ($thisLink.attr("data-status")) {
            $thisLink.removeAttr("data-status");
        } else {
            $thisLink.attr("data-status","is-open");
        }
    });
    $("[js-homeset]").on("click",function(){
        var $thisLink = $(".page-homeset");
        if ($thisLink.attr("data-status")) {
            $thisLink.removeAttr("data-status");
        } else {
            $thisLink.attr("data-status","is-open");
        }
    });
    $("[js-handicapset]").on("click",function(){
        var $thisLink = $(".page-handicapset");
        if ($thisLink.attr("data-status")) {
            $thisLink.removeAttr("data-status");
        } else {
            $thisLink.attr("data-status","is-open");
        }
    });
    $("[js-betstake]").on("click",function(){
        var $thisLink = $(".page-betstake");
        if ($thisLink.attr("data-status")) {
            $thisLink.removeAttr("data-status");
        } else {
            $thisLink.attr("data-status","is-open");
        }
    });
    $("[js-quickset]").on("click",function(){
        var $thisLink = $(".page-quickset");
        if ($thisLink.attr("data-status")) {
            $thisLink.removeAttr("data-status");
        } else {
            $thisLink.attr("data-status","is-open");
        }
    });
    $("[js-matchrank]").on("click",function(){
        var $thisLink = $(".page-matchrank");
        if ($thisLink.attr("data-status")) {
            $thisLink.removeAttr("data-status");
        } else {
            $thisLink.attr("data-status","is-open");
        }
    });
    $("[js-bank]").on("click",function(){
        var $thisLink = $(".page-bank");
        if ($thisLink.attr("data-status")) {
            $thisLink.removeAttr("data-status");
        } else {
            $thisLink.attr("data-status","is-open");
        }
    });
    // second menu done switch
    $("[js-checked] .content_row.touch").click(function(){
        $(this).attr("data-status","is-active");
        $(this).siblings().removeAttr("data-status");
    });
    //open keypad
    $(".page-betstake .textfield_input, .page-quickset .textfield_input").on("click",function(e){
        e.stopPropagation()
        $(this).closest(".quickset_input").siblings(".keypad").attr("data-status","is-open");
        $(this).closest(".textfield").attr("data-status","is-focus").attr("data-selected","true").closest(".quickset_col").siblings().find(".textfield").removeAttr("data-status").attr("data-selected","false");
    });
    $(".page-betstake .keypad, .page-quickset .keypad").on("click",function(e) {
        e.stopPropagation()
        $(this).siblings(".quickset_input").find(".textfield").attr("data-selected","false");
    });


    //Select League page select all / dis select all
    $("[js-dis-select]").click(function(){
        $(".selected input").removeProp("checked")
    });
    $("[js-select-all]").click(function(){
        $(".selected input").prop("checked","checked")
    });
    //切換盤口顯示方式
    $("[js-view-lite]").on("click",function(){
        $(this).parent(".content_group").siblings(".content_image").removeAttr().attr("data-status","is-lite");
    });
    $("[js-view-compact]").on("click",function(){
        $(this).parent(".content_group").siblings(".content_image").removeAttr().attr("data-status","is-compact");
    });

    // Dark Mode 切換開關
    $("[js-darkmode]").on("click", function(){

        if($(this).is('[data-status="is-active"]')){
            $("html").attr("data-darkmode", "true");
            if($.cookie != undefined){
                $.cookie("darkmode", "true");
            }
        } else {
            $("html").removeAttr("data-darkmode");
            if($.cookie != undefined){
                $.cookie("darkmode", "false");
            }
        }
    });
    // Dark Mode 切換開關
    $("[js-btn-darkmode]").on("click", function(){
        console.log($(this).is('[data-status="is-active"]'));
        if($(this).is('[data-status="is-active"]')){
            $("html").attr("data-darkmode", "true");
            if($.cookie != undefined){
                $.cookie("darkmode", "true");
            }
            $(this).removeAttr("data-status");
        } else {
            $(this).attr("data-status", "is-active");
            $("html").removeAttr("data-darkmode");
            if($.cookie != undefined){
                $.cookie("darkmode", "false");
            }
        }        
    });

    // ai assistant popup
    $("[js-btn-assistant]").on("click", function(){
        $("[js-dialog-assistant]").attr("data-status","is-open");
    })

    // ai assistant success popup
    $("[js-dialog-assistant-success]").attr("data-status","is-open");

    // ai assistant unlink popup
    $("[js-btn-assistant-unlink]").on("click", function(){
        $("[js-dialog-assistant-unlink]").attr("data-status","is-open");
    });

    // darkauto
    $("[js-darkauto]").on("click",function(){
        var $thisLink = $(".page-darkauto");
        if ($thisLink.attr("data-status")) {
            $thisLink.removeAttr("data-status");
        } else {
            $thisLink.attr("data-status","is-open");
        }
    });

});
$(function(){

    // Week-report
    // 點擊後 .fold-total 展開/收合
    $(".fold-total__header").on("touchstart, click", function(){
        $(this).closest(".fold-total").attr("data-open") == "true" ? $(this).closest(".fold-total").attr("data-open","false") : $(this).closest(".fold-total").attr("data-open","true");
    });

    // ipv6 click copy button show snackbar
    $(".text-ip .c-btn").on("click", function(){
        $(".c-gc-snackbar").attr("data-open","true");
        setTimeout(function(){
            $(".c-gc-snackbar").attr("data-open","false");
        },2000);
    });

});
$(function () {

    // Streaming BetType 展開
    $(".streaming_betType .betType_arrow").on("click",function(){
        var $thisstreaming = $(this).closest(".streaming_betType");
        if ($thisstreaming.attr("data-status")) {
            $thisstreaming.removeAttr("data-status");
        } else {
            $thisstreaming.attr("data-status","is-open");
        }
    });
    
    // icon Favorite
    $(".hit_btn").on("click", function(e){
        var $thishit = $(this);
        if ($thishit.attr("data-status")) {
                $thishit.removeAttr("data-status");
        } else {
            $thishit.attr("data-status","is-active");
        }
        event.stopPropagation();
    });

    // Discover Tab 切換
    $(".discover_header .discover_tab").on("touchstart", function(){
        $(this).attr("data-status","is-open").siblings(".discover_header .discover_tab").removeAttr("data-status");
        $(".discover_container").eq($(this).index()).attr("data-status", "is-open").siblings(".discover_container").removeAttr("data-status").parent(".page_content").scrollTop(0);
    });

    // 增加 streaming_panel
    $(".streaming_bottom .btn").on("click", function(){
        var replica = $(this).parent().prev(".streaming_panel").clone();
        $(this).parent().before(replica);
    });

    // 頁面上閜捲動時
    $(".page_content").scroll(function () {
        // 子選單隱藏
        // $(".main .header_submenu .submenu").removeAttr("data-status");
        
        // page-discover 恢復內距高度
        // $(".page-discover .page_content").css("padding-top", $(".page-discover .discover_header").innerHeight());
        $(this).scrollTop() >= 10 ? $(".page-discover .discover_header").attr("data-mini", "true") : $(".page-discover .discover_header").removeAttr("data-mini");
    });

    

});


$(function () {
    // ThemeA submenu 使用
    // ------------------------------------
    $(".page-submenu .page_header .btn").on("touchstart, click", function(){
        $(this).closest(".page-submenu").removeAttr("data-status");
    });

    $(".sm-a__btn-checked").on("touchstart, click", function(){
        $(this).attr("data-selected") == "true" ? $(this).attr("data-selected","false") : $(this).attr("data-selected","true");
    });
});
$(function () {
    $(".switch").on("touchstart, click", function(){
        var $target1 = $(this).find(".switch__item:first-child");
        var $target2 = $(this).find(".switch__item:last-child");
        $target1.attr("data-selected") == "true" ? $target1.attr("data-selected","false") : $target1.attr("data-selected","true");
        $target2.attr("data-selected") == "true" ? $target2.attr("data-selected","false") : $target2.attr("data-selected","true");
    });

    $("[data-demo-switch]").on("touchstart, click", function(){
        $(this).attr("data-open") == "true" ? $(this).attr("data-open","false") : $(this).attr("data-open","true");
    });
});
$(function(){
    // 點擊 Input，增加 Focus
    $(".textfield_input").on("click", function(){
        $(this).closest(".textfield").attr("data-status", "is-focus");
        $(this).select();
    });

    // 點擊 Input 內的刪除按鈕，取消 Focus
    $(".textfield .btn-cancel").on("click", function(){
        // $(this).closest(".textfield").removeAttr("data-status");
        $(this).prev(".textfield_input").html("0");
    });

    // 數字鍵盤輸入效果
    $(".keypad_lefttop .keypad_item").on("click", function(){
        $key_num = $(this).html();
        // quickbet 用
        $input = $(this).closest(".keypad").prev(".tickets_bet").find(".textfield_input");
        $input_html = $input.html() + $key_num;
        $input.html($input_html);
    });
});
$(function () {
    //  Time Machine bar start ------------>
    var $timeBar = $('.tm-slider input#time-bar');
        // var $timeText = $('.tm-slider input#price-input');
        var $timeBarMin = $timeBar.prop('min');
        var $timerangeValue = $timeBar.prop('max') - $timeBarMin;
        var timeBar = document.getElementById("time-bar");
        // var touches = [];

    if($('.tm-slider input[type="range"]').length>0) {

        timeBar.addEventListener('touchstart',function(){
            // $timenewValue = ($timerangeValue / e.target.offsetWidth)*(e.touches[0].pageX - e.target.offsetLeft) + 0;
            // console.log($timenewValue +" "+$timerangeValue+" "+e.target.offsetWidth+" "+e.touches[0].pageX+" "+e.target.offsetLeft+" "+e.target.max);
            // $timeBar.val($timenewValue);
            p = $timeBar.val();
            // $timeText.val(p);
            bg(p - $timeBarMin);
        });
        $timeBar.on('touchmove',function(){
            p = $timeBar.val();
            // $timeText.val(p);
            bg(p - $timeBarMin);
        });
        // $timeText.on('touchstart',function(){
        //     $timeBar.val($timeText.val());
        //     p = $timeBar.val();
        //     bg(p - $timeBarMin);
        // });
        // $timeText.on('change',function(){
        //     $timeBar.val($timeText.val());
        //     p = $timeBar.val();
        //     bg(p - $timeBarMin);
        // });
        function bg(n){
            $timeBar.css({
                'background-image':'-webkit-linear-gradient(left ,rgba(41,106,42,1) 0%,rgba(255,242,0,1) '+ (n  * ( 100 / $timerangeValue))+'%,rgba(0,68,255,1) '+ (n  * ( 100 / $timerangeValue))+'%, rgba(255,0,0,1) 100%)'
            });
            $(".tm-slider__select-time").css({
                'left':''+ (n  * ( 100 / $timerangeValue))+'%'
            });
        }

        // Space animation
        const stars = document.querySelectorAll('.tm-star');

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
    // Time Machine bar end ------------<

    $(".tm-btn").on("click", function(){
        $(".dialog[js-dialog-timemachine-info]").attr("data-status","is-open");
    });

    $(".dialog[js-dialog-timemachine-info] .btn").on("click", function(){
        $(".dialog[js-dialog-timemachine-info]").removeAttr("data-status");
    });

    // 收合Time Machine 按鈕
    $(".tm-btn-collaspe").on("click", function(){
        $tm_collapse = $(this).closest(".time-machine");
        if( $tm_collapse.attr("data-mini") == "true" ){
            $tm_collapse.removeAttr("data-mini");
        } else {
            $tm_collapse.attr("data-mini","true");
        }
    });

    // Click .btn-time-machine 開合 時光機(.time-machine)
    $(".btn-time-machine").on("click", function(){
        $this = $(this);
        $tm_oddspage_collapse = $(this).closest(".commatch_content").siblings(".time-machine");
        if( $tm_oddspage_collapse.attr("data-open") == "true" ){
            $this.removeAttr("data-open");
            $tm_oddspage_collapse.removeAttr("data-open");
        } else {
            $this.attr("data-open","true");
            $tm_oddspage_collapse.attr("data-open","true");
        }
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
    // *********** for test only --- start *************** //
    
    $.each(["transaction_deposit", "transaction_withdrawal", "transaction_history"], function (i, n) {
        $(".page-transaction .tab-bar .btn").eq(i).on("click", function () {
            if (!$(this).parent("li").attr("data-status")) {
                window.location = n + ".html";
            }
        });
    });

    //deposit submit btn on click, show result content
    $("[js-deposit-result]").hide();
    $(".page-transaction .btn-primary").on("click", function(){
        $("[js-dialog-deposit]").attr("data-status","is-open");
    });

    $(".dialog .btn-highlight[js-btn-result]").on("click", function(){
        $(this).closest(".dialog").removeAttr("data-status","is-open");
        $(".page_content").hide().siblings("[js-deposit-result]").show();
    });

    // 開啟更多細節
    $(".history_item .touch").on("click", function(){
        $historyitem = $(this).closest(".history_item");
        $historyitem.attr("data-status") == "is-open" ? $historyitem.removeAttr("data-status") : $historyitem.attr("data-status","is-open");
    });
});


$(function () {
    // *********** for test only --- start *************** //

    //Transfer submit btn on click, show result content
    $(".page-transfer .btn-primary").on("click", function(){
        $("[js-dialog-transfer]").attr("data-status","is-open");
    });
//     $("#input_box").on("keyup",function(){
//         this.value =this.value.replace(/,/g, '').replace(/\d+?(?=(?:\d{3})+$)/g, function(s){
//             return s +',';
//         });
//     $("#input_box").val(this.value);
// });
});


$(function () {
    //[for test] How to Use start
    var $next = 1;
    $(".btn-next, .btn-right").on("touchstart, click", function () {
        $next += 1;
        goPage();
    });
    $(".btn-pre, .btn-left").on("touchstart, click", function () {
        $next -= 1;
        goPage();
    });
    var goPage = function () {
        if ($next > 5) {
            $next = 1;
        } else if ($next < 0) {
            $next = 5;
        }
        $(".cashoutUse").removeClass("show1 show2 show3 show4 show5");
        $(".cashoutUse").addClass("show" + $next);
    }
    // $(".btn-clear, .btn-ok").click(function(){
    //     $(".cashOutUsePanel").hide();
    // });
    // end
});
$(function(){
    //預設面板開啟 (已改由 OddsPage.js 中的 Dialog 按鈕點擊出現)
    // $(".teach").attr("data-status","is-open");
    // //預設開啟在step0
    // setTimeout(function(){
    //     $(".teach").addClass("is-step0");
    // },500);
    if( $(".teach").attr("data-status") == "is-open" ){
        setTimeout(function(){
            $(".teach").addClass("is-step0");
        },500);
    };
    $(".teach_step0 .btn-right").click(function(){
        $(".teach").removeClass("is-step0").addClass("is-step1");
    });
    //Click 每個step內的btn-arrow可以導往前一頁 下一頁
    $(".teach_step1 .btn-left").click(function(){
        $(".teach").removeClass("is-step1").addClass("is-step0");
    });
    $(".teach_step1 .btn-right").click(function(){
        $(".teach").removeClass("is-step1").addClass("is-step2");
    });
    $(".teach_step2 .btn-left").click(function(){
        $(".teach").removeClass("is-step2").addClass("is-step1");
    });
    $(".teach_step2 .btn-right").click(function(){
        $(".teach").removeClass("is-step2").addClass("is-step3");
    });
    $(".teach_step3 .btn-left").click(function(){
        $(".teach").removeClass("is-step3").addClass("is-step2");
    });
    $(".teach_step3 .btn-right").click(function(){
        $(".teach").removeClass("is-step3").addClass("is-step4");
    });
    $(".teach_step4 .btn-left").click(function(){
        $(".teach").removeClass("is-step4").addClass("is-step3");
    });
    $(".teach_step4 .btn-right").click(function(){
        $(".teach").removeClass("is-step4").addClass("is-step5");
    });

    //Click Pagination to step
    $(".teach .pagination li:nth-child(1)").click(function(){
        $(".teach").removeClass().addClass("teach is-step0");
    });
    $(".teach .pagination li:nth-child(2)").click(function(){
        $(".teach").removeClass().addClass("teach is-step1");
    });
    $(".teach .pagination li:nth-child(3)").click(function(){
        $(".teach").removeClass().addClass("teach is-step2");
    });
    $(".teach .pagination li:nth-child(4)").click(function(){
        $(".teach").removeClass().addClass("teach is-step3");
    });
    $(".teach .pagination li:nth-child(5)").click(function(){
        $(".teach").removeClass().addClass("teach is-step4");
    });

    // 
    $(".teach_step5 .btn-highlight").on("click", function(){
        $(".teach").removeAttr("data-status").removeClass("is-step5");
    });

    //Click btn-outline 導回 step0 重新觀看
    $(".btn-outline").click(function(){
        $(".teach").removeClass("is-step5").addClass("is-step0");
        //在step5時 click btn-outline - 強制將.parlay_counter 加回
        $(".parlay_counter").css("opacity","1");
    });
    
    //判斷若為step4 tab 改為 Parlay 亮起
    $(".teach .btn-left, .teach .btn-right").click(function(){
        if($(".teach").hasClass("is-step4")) {
            $(".teach .tab li:nth-child(2)").removeAttr("data-status");
            $(".teach .tab li:nth-child(3)").attr("data-status","is-active");
        }else{
            $(".teach .tab li:nth-child(3)").removeAttr("data-status");
            $(".teach .tab li:nth-child(2)").attr("data-status","is-active");
        };
    });

    $(".dialog[js-dialog-howtouse-parlay] .btn-highlight ").on("click", function(){
        window.location = "../Features/Tutorial_Parlay.html";
    });
    
});
$(function(){
    //預設面板開啟
    $(".tutorial").attr("data-status","is-open");
    //預設開啟在step0
    setTimeout(function(){
        $(".tutorial").addClass("is-step1");
    },500);
    $(".tutorial_step0 .btn-right").click(function(){
        $(".tutorial").removeClass("is-step0").addClass("is-step1");
    });
    //Click 每個step內的btn-arrow可以導往前一頁 下一頁
    $(".tutorial_step1 .btn-left").click(function(){
        $(".tutorial").removeClass("is-step1").addClass("is-step0");
    });
    $(".tutorial_step1 .btn-right").click(function(){
        $(".tutorial").removeClass("is-step1").addClass("is-step2");
    });
    $(".tutorial_step2 .btn-left").click(function(){
        $(".tutorial").removeClass("is-step2").addClass("is-step1");
    });
    $(".tutorial_step2 .btn-right").click(function(){
        $(".tutorial").removeClass("is-step2").addClass("is-step3");
    });
    $(".tutorial_step3 .btn-left").click(function(){
        $(".tutorial").removeClass("is-step3").addClass("is-step2");
    });
    $(".tutorial_step3 .btn-right").click(function(){
        $(".tutorial").removeClass("is-step3").addClass("is-step4");
    });
    $(".tutorial_step4 .btn-left").click(function(){
        $(".tutorial").removeClass("is-step4").addClass("is-step3");
    });
    $(".tutorial_step4 .btn-right").click(function(){
        $(".tutorial").removeClass("is-step4").addClass("is-step5");
        //在step4時 click btn-right - 強制將.parlay_counter 消失
        $(".parlay_counter").css("opacity","0");
    });
    //Click btn-outline 導回 step0 重新觀看
    $(".btn-outline").click(function(){
        $(".tutorial").removeClass("is-step5").addClass("is-step0");
        //在step5時 click btn-outline - 強制將.parlay_counter 加回
        $(".parlay_counter").css("opacity","1");
    });
    
    //判斷若為step4 tab 改為 Parlay 亮起
    $(".tutorial .btn-left, .tutorial .btn-right").click(function(){
        if($(".tutorial").hasClass("is-step4")) {
            $(".tutorial .tab li:nth-child(2)").removeAttr("data-status");
            $(".tutorial .tab li:nth-child(3)").attr("data-status","is-active");
        }else{
            $(".tutorial .tab li:nth-child(3)").removeAttr("data-status");
            $(".tutorial .tab li:nth-child(2)").attr("data-status","is-active");
        };
    });
    
});
function orient() {
    if (window.orientation == 90 || window.orientation == -90) {
    // landscape
        // video full screen back
        $(".video_head-fullscreen .btn.btn-back").on("click", function(){
            $(this).closest(".video").attr("data-lobby","true");
        });

        // .video_sidebar Click to close video overlay
        // $(".video_sidebar").on("click", function(){
        //     $(".video_overlay").removeAttr("data-show");
        // });

        $("html").attr("data-landscape-bet","true");
        $(".video_sidebar").attr("data-show","true");
        $("[js-function-video-bet]").on("click", function(){
            $(this).closest(".compage_content").attr("data-oddspage-open","true");
            $(".video_sidebar").attr("data-show","false");
        });

        // Click .btn-watchbet-close 收合 .comsingle
        $(".comsingle .btn-watchbet-close").on("click", function(){
            $(this).closest(".compage_content").removeAttr("data-oddspage-open");
            $(".video_sidebar").attr("data-show","true");
        });

        // Click odds to close oddspage
        $(".bettype_oddsbox").on("click", function(){
            $(this).closest(".compage_content").removeAttr("data-oddspage-open");
            $(".video_sidebar").attr("data-show","false");
        });

        // Click .btn-watchbet-close 收合 .combeslip
        $(".comquickBet .btn-watchbet-close").on("click", function(){
            $(".comquickBet").removeAttr("data-status");
            $(".comquickBet .overlay").removeAttr("data-status");
            $(".video_sidebar").attr("data-show","true");
        });

        // Click Return to close betslip
        $(".comquickBet .btn-watchbet-return").on("click", function(){
            $(".compage_content").attr("data-oddspage-open","true");
            $(".comquickBet").removeAttr("data-status");
            $(".comquickBet .overlay").removeAttr("data-status");
        });

        // Bet Confirm btn
        $("[js-btn_oddspage], .comtickets_process .combtn.btn-bet").on("click", function(){
            $(".compage_content").attr("data-oddspage-open","true");
        });

        // 判斷 choice 是否 需要scroll
        // var teamHeight = $(".comtickets_team").height();
        // var choiceHeight = $(".combetType_choice").height();
        // if(choiceHeight > teamHeight) {
        //     $(".combetType_choice").attr("data-scroll","true");
        // }

        // Click to open .page.page-result
        $("[js-function-mybets]").on("click", function(){
            $("[js-result]").attr("data-status","is-open");
            $(".video_sidebar").attr("data-show","false");
        });

        // Click .btn-watchbet-close 收合 [js-page-result]
        $("[js-result] .btn-watchbet-close").on("click", function(){
            $(this).closest("[js-result]").removeAttr("data-status");
            $(".video_sidebar").attr("data-show","true");
        });

        // Click Detail to close  [js-page-result]
        $("[js-btn-result],[js-btn-result-bonus],[js-btn-cashout-result]").on("click", function(){
            $("[js-result]").removeAttr("data-status");
        });

        // Click .btn-watchbet-close 收合 [js-page-result-popup]
        $("[js-page-result] .btn-watchbet-close").on("click", function(){
            $(this).closest("[js-page-result]").removeAttr("data-status");
            $(".video_sidebar").attr("data-show","true");
        });
        // Click Return to close betslip
        $("[js-page-result] .btn-watchbet-return").on("click", function(){
            $("[js-result]").attr("data-status","is-open");
            $(this).closest("[js-page-result]").removeAttr("data-status");
        });

        // Click .btn-watchbet-close 收合 [js-page-result-bonus]
        $("[js-page-result-bonus] .btn-watchbet-close").on("click", function(){
            $(this).closest("[js-page-result-bonus]").removeAttr("data-status");
            $(".video_sidebar").attr("data-show","true");
        });
        // Click Return to close betslip
        $("[js-page-result-bonus] .btn-watchbet-return").on("click", function(){
            $("[js-result]").attr("data-status","is-open");
            $(this).closest("[js-page-result-bonus]").removeAttr("data-status");
        });

        // Click .btn-watchbet-close 收合 [js-page-cashout-result]
        $("[js-page-cashout-result] .btn-watchbet-close").on("click", function(){
            $(this).closest("[js-page-cashout-result]").removeAttr("data-status");
            $(".video_sidebar").attr("data-show","true");
        });
        // Click Return to close betslip
        $("[js-page-cashout-result] .btn-watchbet-return").on("click", function(){
            $("[js-result]").attr("data-status","is-open");
            $(this).closest("[js-page-cashout-result]").removeAttr("data-status");
        });

        // Click .btn-watchbet-close 收合 [js-page-cashout-result]
        $(".page-cashout .btn-watchbet-close").on("click", function(){
            $(this).closest(".page-cashout").removeAttr("data-status");
            $(".video_sidebar").attr("data-show","true");
        });
        // Click Return to close betslip
        $(".page-cashout .btn-watchbet-return").on("click", function(){
            $("[js-result]").attr("data-status","is-open");
            $(this).closest(".page-cashout").removeAttr("data-status");
        });

        // Click [js-btn_viewstate] to open .page.page-result
        $("[js-btn_viewstate]").on("click", function(){
            $("[js-result]").attr("data-status","is-open");
            $(".compage_content").removeAttr("data-oddspage-open");
        });

        // Click 展開 Cashout 流程
        $(".bets .btn-cashout").on("click", function(){
            $(this).closest("[js-result]").removeAttr("data-status");
        });

        // Click 展開 Channel 切換
        $(".video_sidebar .btn-channel, .video_sidebar .dropdown-menu").on("click", function(){
            $(this).closest(".dropdown").toggleClass("open");
        });
        

        //Alert按鈕點擊後收合內容及Alert
        $("[js-alert-cashout-success] .btn-box .btn-highlight").on("click", function(){
            $(".video_sidebar").attr("data-show","true");
        });
        orientation = 'landscape';
        return false;
    }

    else if (window.orientation == 0 || window.orientation == 180) {
        // portrait
        $("html").removeAttr("data-landscape-bet");
        $(".video_sidebar").attr("data-show","false");

        orientation = 'portrait';
        return false;
    }
}

// android full screen API
// function toggleFullScreen() {
//     if (!document.fullscreenElement) {
//         document.documentElement.requestFullscreen();
//     } else {
//         if (document.exitFullscreen) {
//         document.exitFullscreen(); 
//         }
//     }
// }


// load
$(function(){
    orient();
});

// resize
$(window).bind( 'orientationchange', function(e){
    orient();
    // toggleFullScreen();
});

//Uses document because document will be topmost level in bubbling
$(document).on('touchmove',function(e){
    e.preventDefault();
});
var scrolling = false;
//Uses body because jquery on events are called off of the element they are
//added to, so bubbling would not work if we used document instead.
$('body').on('touchstart','.comquickBet',function(e) {
//Only execute the below code once at a time
if (!scrolling) {
    scrolling = true; 
    if (e.currentTarget.scrollTop === 0) {
        e.currentTarget.scrollTop = 1;
    } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
        e.currentTarget.scrollTop -= 1;
    }
    scrolling = false;
    }
});
//Prevents preventDefault from being called on document if it sees a scrollable div
$('body').on('touchmove','.scrollable',function(e) {
    e.stopPropagation();
});

// 模擬點擊Single進橫版 使chrome 直接滾動至全屏
// ---------------------------------------------------------移至 Compact_SingleMatch.js
// $(".commatch_more").on("click", function(){
//     $("html").attr("data-addressbar-hidden","true");
// });

$(function () {
    // [for test] Switch Skin start
    $.get("../../../../js/_skinMenu.html", function (data) {
        $("body").append(data);
        $("#skinMenu li").click(function () {
            newSkin = $(this).attr("title");
            changeSkin(newSkin);
            $("#skinMenu li .btn").removeClass("btn-primary");
            $(this).children(".btn").addClass("btn-primary");
            //$("#skinMenu").fadeOut(100);
            $("#skinMenu").hide();
        });
        // $("body").on("dblclick ", function () {
        //     //$("#skinMenu").fadeIn(100);
        //     $("#skinMenu").modal("show");
        // });

        // 點兩下開啟切換選單
        $("body").on("click", function () {
            $("#skinOpen").show();
            setTimeout(function () {
                $("#skinOpen").hide();
            }, 250);
        });
        $("#skinOpen").on("click", function () {
            $(this).hide();
            $("#skinMenu").show();
        });

        $("button.close").on("click", function () {
            $("#skinMenu").hide();
        });

        $(".logo-lg, .logo, .btn-home").on("click", function () {
            $("#skinMenu").show();
        });
        $("#skinMenu li .btn").removeClass("btn-primary");
        if ($.cookie != undefined) {
            $("#skinMenu li[title=" + $.cookie("css_skin") + "] .btn").addClass(
                "btn-primary"
            );
        }

        $(".btn[js-btn-darkmode]").on("click", function () {
            if ($("html").attr("data-darkmode") == "true") {
                $("html").removeAttr("data-darkmode");
                $("[js-btn-darkmode]").text("Light Mode");
                if ($.cookie != undefined) {
                    $.cookie("darkmode", "false");
                }
            } else {
                $("html").attr("data-darkmode", "true");
                $("[js-btn-darkmode]").text("Dark Mode");
                if ($.cookie != undefined) {
                    $.cookie("darkmode", "true");
                }
            }
            $("#skinMenu").hide();
        });

        //清除所有cookie函数
        function clearAllCookie() {
            var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
            if (keys) {
                for (var i = keys.length; i--; )
                    document.cookie =
                        keys[i] + "=0;expires=" + new Date(0).toUTCString();
            }
        }

        $(".btn[js-btn-clearall]").on("click", function () {
            clearAllCookie();
        });
    });
    // end

    if ($.cookie != undefined) {
        //檢查網址所帶的參數
        var parastr = window.location.search.substr(1);
        if (parastr.length > 0) {
            changeSkin(parastr);
        } else if ($.cookie("css_skin") != null) {
            //如果cookie不為空的時候就讀取cookie的路徑
            changeSkin($.cookie("css_skin"));
            console.log($.cookie("css_skin"));
        }

        if ($.cookie("darkmode") == "true") {
            $("html").attr("data-darkmode", "true");
            $("[js-btn-darkmode]").text("Dark Mode");
        } else {
            $("html").removeAttr("data-darkmode");
            $("[js-btn-darkmode]").text("Light Mode");
        }
    }
});

function changeSkin(str) {
    console.log("切換站台: " + str);
    $(
        "link[rel='stylesheet']:not([href*='public'], [href*='_global']), link[rel='apple-touch-icon']"
    ).each(function (index) {
        var csshref;
        csshref = $(this).attr("href");
        csshref = csshref.replace(/Content\/\w*\//, "Content/" + str + "/");
        csshref = $(this).attr("href", csshref);
        if ($.cookie != undefined) {
            $.cookie("css_skin", str);
        }
    });
}
