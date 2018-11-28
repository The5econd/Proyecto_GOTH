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
/*
function mostrar() {
    let idd = 'modal';
    let cont = 1;
    let hash = '#';
    console.log('Aaaaaaaaaaaaaaahhhhh');
    let data = {
        tit: JSON.parse(session.publicaciones).titulo,
        cuer: JSON.parse(session.publicaciones).texto
    };
    let tbody = document.getElementById("sec1");
    let div = document.createElement("div");
    div.innerHTML = `<div class="sectionn">
                        <div class="">
                            <div class="card-panel #80cbc4 teal lighten-3">
                                <a class="linkss waves-effect waves-light btn modal-trigger" href="${hash+idd+cont}">
                                    ${data.tit}</a>

                                <div id=${idd+cont} class="modal">
                                    <div class="modal-content inner_div">
                                        <h4>${data.tit}</h4>
                                        <p>${data.cuer}</p>
                                    </div>           
                                </div>
                            </div>
                        </div>
                    </div>`;
    tbody.appendChild(div);
    cont = cont +1;
};*/

function mostrar() {
    fetch('/api/post', {
        method: "GET"
    }).then(res => res.json())
        .then(response => {
            //var respo = [];
            // respo.add(response[i])
            console.log(response.length);
            for (let i = 0; i < 4; i++) {
                //respo.add(respones.posts[i]);
                let idd = 'modal';
                let cont = 1;
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
                tbody.appendChild(div);
                cont = cont + 1;
            }
        })
}


