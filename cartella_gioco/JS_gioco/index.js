$(document).ready(function() {
    $('#q1').hover(
        function() {
            $(this).css('width', '300px');
        },
        function() {
            $(this).css('width', '80px');
        }
    );

    $('#q3').hover(
        function() {
            $(this).css('width', '300px');
        },
        function() {
            $(this).css('width', '80px');
        }
    );

    $('#q4').hover(
        function() {
            $(this).css({
                'width': '600px',
                'margin-left': '-150px'  // Metà della differenza tra la nuova larghezza e quella originale
            });
        },
        function() {
            $(this).css({
                'width': '300px',
                'margin-left': '0'
            });
        }
    );

    var originalText = $('#q2').html();

    var newTexts = [
        '<div><p style="text-align: left;">Page Color:</p> <button class="colorButton" data-color="white">White</button> <button class="colorButton" data-color="rgb(207, 207, 207)">Light Grey</button> <button class="colorButton" id="darkColor" data-color="rgb(30, 30, 30)">Grey</button> <button class="colorButton" id="darkColor" data-color="Black">Black</button> <button class="colorButton" id="darkColor" data-color="rgb(10, 5, 3)">Brown</button> <button class="colorButton" id="darkColor" data-color="rgb(0, 0, 10)">Dark Blue</button></div>',
        '<p style="text-align: left;">Testo opzione 2</p>',
        '<p style="text-align: left;">Testo opzione 3</p>',
        '<p style="text-align: left;">Testo opzione 4</p>',
        '<p style="text-align: left;">Testo opzione 5</p>',
        '<p style="text-align: left;">Testo opzione 6</p>'
    ];

    $('#q2').hover(
        function() {
            $(this).css({
                'width': '300px',
                'height': '500px',
                'white-space': 'normal',
                'display': 'block',
                'text-align': 'left',
                'background-image': 'url("../immagini/cat.jpg")',
                'background-size': 'cover',
                'background-position': 'center'
            });
            $(this).html(newTexts.join('<br>'));
        },
        function() {
            $(this).css({
                'width': '80px',
                'height': '50px',
                'text-align': 'center',
                'display': 'flex',
                'justify-content': 'center',
                'align-items': 'center',
                'background-image': 'none'
            });
            $(this).html(originalText);
        }
    );

    function changeBackgroundColor(color) {
        $('body').css('background-color', color);
    }

    $(document).on('click', '.colorButton', function() {
        var color = $(this).data('color');
        changeBackgroundColor(color);
    });

    var url = window.location.href;

    var links = document.querySelectorAll('#sBarr a');

    links.forEach(function(link) {
        if (link.href === url) {
            link.classList.add('active');
        }
    });

    $('#q4').click(function() {
        window.location.href = 'pag1g.html';
    });

    var modal = $('#loginModal');
    var span = $('.close');

    $('#q1').click(function() {
        modal.show();
    });

    span.click(function() {
        modal.hide();
    });

    $(window).click(function(event) {
        if (event.target.id == 'loginModal') {
            modal.hide();
        }
    });
});
