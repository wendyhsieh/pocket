// Mobile Global - Core 新增 ui-dev js
// -------------------------------------------------------
$(function() {
    //  Msg
    // ----------------------------
    // .c-gc-msg--alert 關閉
    $(".c-gc-msg__btn .c-gc-btn").on("touchstart, click", function(){
        $(this).closest(".c-gc-msg--alert").attr("data-open","false");
    });
});




// 各 Lic 配色 skin 切換
// -------------------------------------------------------
// $(function () {
//     // [for test] Switch Skin start
//     $.get("../../../../js/_skinMenu.html", function (data) {
//         $("body").append(data);
//         $("#skinMenu li").click(function () {
//             newSkin = $(this).attr("title");
//             changeSkin(newSkin);
//             $("#skinMenu li .btn").removeClass("btn-primary");
//             $(this).children(".btn").addClass("btn-primary");
//             //$("#skinMenu").fadeOut(100);
//             $("#skinMenu").modal("hide");
//         });
//         // $("body").on("dblclick ", function () {
//         //     //$("#skinMenu").fadeIn(100);
//         //     $("#skinMenu").modal("show");
//         // });

//         // 點兩下開啟切換選單
//         $("body").on("click", function () {
//             $("#skinOpen").show();
//             setTimeout(function () {
//                 $("#skinOpen").hide();
//             }, 250);
//         });
//         $("#skinOpen").on("click", function () {
//             $(this).hide();
//             $("#skinMenu").modal("show");
//         });

//         $(".logo-lg, .logo, .btn-home").on("click", function () {
//             $("#skinMenu").modal("show");
//         });
//         $("#skinMenu li .btn").removeClass("btn-primary");
//         if ($.cookie != undefined) {
//             $("#skinMenu li[title=" + $.cookie("css_skin") + "] .btn").addClass(
//                 "btn-primary"
//             );
//         }

//         $(".btn[js-btn-darkmode]").on("click", function () {
//             if ($("html").attr("data-darkmode") == "true") {
//                 $("html").removeAttr("data-darkmode");
//                 if ($.cookie != undefined) {
//                     $.cookie("darkmode", "false");
//                 }
//             } else {
//                 $("html").attr("data-darkmode", "true");
//                 if ($.cookie != undefined) {
//                     $.cookie("darkmode", "true");
//                 }
//             }
//             $("#skinMenu").modal("hide");
//         });

//         //清除所有cookie函数
//         function clearAllCookie() {
//             var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
//             if (keys) {
//                 for (var i = keys.length; i--; )
//                     document.cookie =
//                         keys[i] + "=0;expires=" + new Date(0).toUTCString();
//             }
//         }

//         $(".btn[js-btn-clearall]").on("click", function () {
//             clearAllCookie();
//         });
//     });
//     // end

//     if ($.cookie != undefined) {
//         //檢查網址所帶的參數
//         var parastr = window.location.search.substr(1);
//         if (parastr.length > 0) {
//             changeSkin(parastr);
//         } else if ($.cookie("css_skin") != null) {
//             //如果cookie不為空的時候就讀取cookie的路徑
//             changeSkin($.cookie("css_skin"));
//             console.log($.cookie("css_skin"));
//         }

//         if ($.cookie("darkmode") == "true") {
//             $("html").attr("data-darkmode", "true");
//         }
//     }
// });

// function changeSkin(str) {
//     console.log("切換站台: " + str);
//     $(
//         "link[rel='stylesheet']:not([href*='public']), link[rel='apple-touch-icon']"
//     ).each(function (index) {
//         var csshref;
//         csshref = $(this).attr("href");
//         csshref = csshref.replace(/Content\/\w*\//, "Content/" + str + "/");
//         csshref = $(this).attr("href", csshref);
//         if ($.cookie != undefined) {
//             $.cookie("css_skin", str);
//         }
//     });
// }