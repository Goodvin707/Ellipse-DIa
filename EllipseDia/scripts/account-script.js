let protocolAndHost = location.protocol + '//' + location.host;
let yaShare = document.getElementsByClassName('ya-share2');
for (let i = 0; i < yaShare.length; i++)
    yaShare[i].setAttribute('data-url', protocolAndHost + yaShare[i].getAttribute('data-url'));

function askForDelete(event) {
    if (!confirm('Вы точно хотите удалить диаграмму?')) {
        event.preventDefault();
    }
}







document.addEventListener('DOMContentLoaded', function () {
    let form = document.forms[0];

    var modalButtons = document.querySelectorAll('.js-open-modal'),
        overlay = document.querySelector('.js-overlay-modal'),
        closeButtons = document.querySelectorAll('.js-modal-close');

    modalButtons.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            var modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

            modalElem.classList.add('active');
            overlay.classList.add('active');
        });
    });

    closeButtons.forEach(function (item) {

        item.addEventListener('click', function (e) {
            var parentModal = this.closest('.modal');

            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });
    });


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function () {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });
});







function deleteAccount() {
    if (confirm('Вы точно хотите удалить аккаунт?')) {
        var url = 'accfusion';

        var form = document.createElement("form");
        form.setAttribute("method", 'post');
        form.setAttribute("action", url);

        var input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("name", 'msg');

        form.appendChild(input);
        document.body.appendChild(form);
        form.submit();
    }
}