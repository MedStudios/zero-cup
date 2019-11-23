(function() {

    if($ === undefined) { console.error("jQuery not loaded."); }

    var getReq = function (quest) {
        var respond = quest.trim();
        if(respond === "你好")
            return "你好啊~";
        if(respond.indexOf("你好吗") !== -1)
            return "好得很！";
        if(respond.indexOf("是谁") !== -1)
            return "不清楚不清楚";
        if(respond.indexOf("拜拜") !== -1 || respond.indexOf("再见") !== -1)
            return "拜了个拜";
        respond = respond.replace(/\?/g, "!");
        respond = respond.replace(/(？|不？)/g, "！");
        respond = respond.replace(/[吗嘛呢]/g, "");
        respond = respond.replace(/不$/g, "");
        respond = respond.replace(/你/g, "%me%");
        respond = respond.replace(/我/g, "你");
        respond = respond.replace(/%me%/g, "我");
        return respond;
    }

    $(() => {
        $("#loading-mask").addClass("invisible");
        $("#btn-chat-send").click(() => {
            var sendee = $("#chat-sendee").val();
            if(sendee === "")
                return;
            $("#chat-sendee").val("");
            $("#chatbox").append('<div class="row"><div class="col"><span class="green-bubble">' + sendee + '</span></div></div>');
            setTimeout(() => {$("#chatbox").append('<div class="row"><div class="col"><span class="white-bubble">' + getReq(sendee) + '</span></div></div>');}, 500);
        });
        var textbox = document.getElementById("chat-sendee");
        textbox.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                $("#btn-chat-send").click();
            }
        });
    });

    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true
    });

    new Typed('#subtitle', {
        strings: [
            '不只能够`打败``围棋`职业九段',
            '不只能够做`廉价`的劳动力',
            '是^500机器的理性灵魂',
            '是`算法`与`代码`的诗',
            '^500走出象牙塔`来到``我们`身边',
            '认知`无限`的`时间`和`远方`',
            '`不断``探索`智能的`实质`',
            '迎接极富`机会`与`挑战`的时代',
        ],
        typeSpeed: 150,
        backSpeed: 50,
        smartBackspace: true,
        showCursor: true,
        cursorChar: '|',
        startDelay: 1000,
        backDelay: 2000,
    });

}());
