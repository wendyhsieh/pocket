$(function () {
    var theme_index = 0;
    // 土豪金
    var theme_a = [
        { h: '35', s: '55%', l: '63%' },
        { h: '0', s: '70%', l: '59%' },
        { h: '269', s: '22%', l: '56%' },
        { h: '211', s: '56%', l: '64%' },
        { h: '177', s: '55%', l: '53%' }
    ];

    // 經典色 ｜ 中國風
    var theme_b = [
        { h: '205', s: '67%', l: '56%' },
        { h: '220', s: '32%', l: '48%' },
        { h: '218', s: '100%', l: '21%' },
        { h: '120', s: '100%', l: '25%' },
        { h: '98', s: '72%', l: '33%' },
        { h: '22', s: '85%', l: '51%' },
        { h: '264', s: '40%', l: '56%' },
        { h: '0', s: '100%', l: '39%' },
        { h: '0', s: '100%', l: '39%' },
        { h: '0', s: '100%', l: '26%' }
    ];

    // 預設使用 theme_b
    var theme_select = theme_b; 
    if( $("link[rel='stylesheet']").attr("href").match("/theme-a/theme.css") != null ) {
        theme_select = theme_a; 
    }


    $(document).keydown(function (event) {
        // console.log("Key: " + event.keyCode);
        if( theme_index == theme_select.length ) {
            theme_index = 0;
        }
            
        if (event.keyCode === 84) {
            // $("html").css({
            //     "--primary-h": theme_a[theme_index].h,
            //     "--primary-s": theme_a[theme_index].s,
            //     "--primary-l": theme_a[theme_index].l
            // });
            document.documentElement.style.setProperty("--primary-h", theme_select[theme_index].h);
            document.documentElement.style.setProperty("--primary-s", theme_select[theme_index].s);
            document.documentElement.style.setProperty("--primary-l", theme_select[theme_index].l);
            console.log("[改變色系]",theme_index, theme_select[theme_index].h, theme_select[theme_index].s, theme_select[theme_index].l);
            theme_index += 1; 
        }
    });
});