function guardar() {
    let data = {
        nombre: document.getElementById("nombre").value,
        Artista: document.getElementById("Artista").value,
        Album: document.getElementById("Album").value
    };
    console.log(data.nombre);
    let tbody = document.getElementsByClassName("posts")[0];
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${data.nombre}</td>
                        <td>${data.Artista}</td>
                        <td>${data.Album}</td>`;
    tbody.appendChild(tr)
};

window.onload = () => {
    app.init();
}
let app = {
    init: function () {
        this.mostrar();
    },

    mostrar: function() {
    fetch('/api/post', {
        method: "GET"
    }).then(res => res.json())
        .then(response => {
            //var respo = [];
            // respo.add(response[i])
            let cont = 1;
            console.log(response.length);
            for (let i = 0; i < 4; i++) {
                //respo.add(respones.posts[i]);
                let idd = 'modal';
                
                let hash = '#';
                console.log(response.posts);
                let data = {
                    tit: (response.posts[i]).titulo,
                    cuer: (response.posts[i]).texto
                };
                let tbody = document.getElementById("sec1");
                let div = document.createElement("div");
                div.innerHTML = `<div class="sectionn">
                                    <div class="">
                                        <div class="card-panel #80cbc4 teal lighten-3">
                                            <a class="linkss waves-effect waves-light btn modal-trigger" href="${hash + idd + cont}">
                                                ${data.tit}</a>

                                            <div id=${idd + cont} class="modal">
                                                <div class="modal-content inner_div">
                                                    <h4>${data.tit}</h4>
                                                    <p>${data.cuer}</p>
                                                </div>           
                                            </div>
                                        </div>
                                    </div>
                                </div>`;
                                cont = cont + 1;
                tbody.appendChild(div);
            }
        })
}
}

