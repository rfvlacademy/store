$(document).ready(function () {
        let item = JSON.parse(localStorage.getItem('item'));
        $("#img-principal").attr("src", item.img);
        let html = '';
        item.pictures.forEach((picture) => {
            html += ' <div className="col-xl-2 col-md-4 col-sm-12">';
            html += ' <img src="' + picture + '"   class="img-fluid">';
            html += '</div>';
        });
        $('#pictures').append(html);
        $('#name').append(item.name);

    }
)