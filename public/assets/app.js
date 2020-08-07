$(document).ready(function () {

    const mainHead = $("#display").append($("<h1>").text("Heading 1").css("color", "red").attr("id", "head1"));

    $.get('/api/games', (data) => {
        for (let i = 0; i < data.length; i++) {
            const title = data[i].title;
            mainHead.append($("<p>").text(title).attr(`id`, `item${i}`));
        }
    });

    $("#head1").click(function () {
        $.get('/api/games', (data) => {
            // console.log(data)
            for (let i = 0; i < data.length; i++) {
                const title = data[i].title;
                mainHead.append($("<p>").text(title).attr(`id`, `item${i}`));
            }
        });
    });



    /*
                $.post("/api/games",
                    {
                        title: "Mafia: Definitive Edition",
                        release_date_string: "09/25/2020",
                        platform: [1, 2, 5],
                        date_added: new Date(Date.now())
                    },
                    function (data, status) {
                        alert("Data: " + data + "\nStatus: " + status);
                    });
    */
});
