$(function () {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        keyboard: false
    })


    function display(bool, text) {
        if (bool) {
            myModal.show()
            $("#exampleModalLabel").text(text)
        } else {
            myModal.hide()
        }
    }

    display(false)

    window.addEventListener('message', function(event) {
        var item = event.data;
        if (item.type === "ui") {
            if (item.status == true) {
                display(true, item.text)
            } else {
                display(false)
            }
        }
    })

    document.onkeyup = function (data) {
        if (data.which == 27) {
            $.post('http://nz_ui_enter/exit', JSON.stringify({}));
            return
        }
    };
    var myModalEl = document.getElementById('exampleModal')
    myModalEl.addEventListener('hidden.bs.modal', function (event) {
        $.post('http://nz_ui_enter/exit', JSON.stringify({}));
        return
    })

    $("#exit").click(function () {
        $.post('http://nz_ui_enter/exit', JSON.stringify({}));
        return
    })
    $("#exita").click(function () {
        $.post('http://nz_ui_enter/exit', JSON.stringify({}));
        return
    })

    $("#submit").click(function () {
        $.post('http://nz_ui_enter/main', JSON.stringify({
            msg: $("#recipient-name").val(),
        }));
        return;
    })
})