$(document).ready(function () {
    $("#openSidedar").on("click", function () {
        document.getElementById("mySidebar").style.display = "block";
    })
    $("#closeSidedar").on("click", function () {
        document.getElementById("mySidebar").style.display = "none";
    });

    function getAllProducts() {
        $.ajax({
            type: "Get",
            url: "./js/data.json",
            dataType: "json",
            success: function (data) {
                let html = '';
                for (let i = 0; i < data.length; i++) {
                    console.log(i);
                    html += '<div class="card product-item">';
                    html += '<img class="card-img-top" src="' + data[i].image + '" alt="Card image cap">';
                    html += '<div class="card-body">';
                    html += '<h5 class="card-title">' + data[i].name + '</h5>';
                    html += '<p class="card-text">$' + data[i].price + '</p>';
                    html += '<a href="#" class="btn btn-red">Ver</a>'
                    html += ' </div> </div>';
                }
                $('#products-list').append(html);
            },
            error: function (error) {
                alert(error);
            }
        });
    }

    getAllProducts();
})