let items = [];

function moveToItemPage(index) {
    localStorage.setItem('item', JSON.stringify(items[index]))
    window.location.href = "item.html";
}

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
            url: "http://localhost:3000/api/v1/items",
            dataType: "json",
            success: function (data) {
                items = data;
                let html = '';
                for (let i = 0; i < data.length; i++) {
                    html += '<div class="card product-item" >';
                    html += '<img class="card-img-top" src="' + data[i].image + '" alt="Card image cap">';
                    html += '<div class="card-body">';
                    html += '<h5 class="card-title">' + data[i].name + '</h5>';
                    html += '<p class="card-text">$' + data[i].price + '</p>';
                    html += '<a href="#" class="btn btn-red" onclick="moveToItemPage(' + i + ')">Ver</a>'
                    html += ' </div> </div>';
                }
                /**
                 data.forEach((item,index)=>{
                    console.log(item,index);
                    console.log(item);
                });
                 */
                data.forEach((product, index) => {
                    html += '<div class="card product-item" >';
                    html += '<img class="card-img-top" src="' + product.image + '" alt="Card image cap">';
                    html += '<div class="card-body">';
                    html += '<h5 class="card-title">' + product.name + '</h5>';
                    html += '<p class="card-text">$' + product.price + '</p>';
                    html += '<a href="#" class="btn btn-red" onclick="moveToItemPage(' + index + ')">Ver</a>'
                    html += ' </div> </div>';
                })
                $('#products-list').append(html);
            },
            error: function (error) {
                alert(error);
            }
        });
    }

    getAllProducts();
})