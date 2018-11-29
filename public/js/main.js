function guardar() {
    let data = {
        nombre: document.getElementById("nombre").value,
        Artista: document.getElementById("Artista").value,
        Album: document.getElementById("Album").value
    };
    console.log(data.nombre);
    let tbody = document.getElementsByClassName("posts")[0];
    let tr = document.createElement("tr");
    tr.className = "cancion";
    tr.id="tr";
    tr.innerHTML = `<td>
                        <input id="nombre" name="nombre" value="${data.nombre}" type="text"></td>
                    <td> 
                    <input id="artista" name="artista" value="${data.Artista}" type="text"></td>
                    <td>
                    <input id="album" name="album" value="${data.Album}" type="text"></td>`;
    tbody.appendChild(tr)
};

window.onload = () => {
    app.init();
}
let app = {
    init: function () {
        this.mostrar();
    },

    mostrar: function () {
        fetch('/api/post', {
            method: "GET"
        }).then(res => res.json())
            .then(response => {
                //var respo = [];
                // respo.add(response[i])
                let cont = 1;
                console.log(response.length);
                for (let i = 0; i < 5; i++) {
                    //respo.add(respones.posts[i]);
                    let idd = 'modal';

                    let hash = '#';
                    console.log(response.posts);
                    let data = {
                        tit: (response.posts[i]).titulo,
                        cuer: (response.posts[i]).texto,
                        aut: (response.posts[i]).autor
                    };
                    let tbody = document.getElementById("sec1");
                    let div = document.createElement("div");
                    div.innerHTML = `<div class="sectionn">
                                    <div class="">
                                        <div class="card-panel #80cbc4 teal lighten-3">
                                            <a class="linkss waves-effect waves-light btn modal-trigger" href="${hash + idd + cont}">
                                                ${data.tit}</a>
                                            <a class="linkss waves effect waves-light">${data.aut}</a>
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

function mostrar0() {
    fetch('/api/post', {
        method: "GET"
    }).then(res => res.json())
        .then(response => {
            //var respo = [];
            // respo.add(response[i])
            let parent = document.getElementById("sec1");
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            };
            parent.innerHTML = `<ul class="pagination" style="position: absolute; left: 25%; bottom: 0;">
                                    <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                                    <li class="active"><a href="#!">1</a></li>
                                    <li class="waves-effect"><a href="#!" onClick="mostrar1()">2</a></li>
                                    <li class="waves-effect"><a href="#!">3</a></li>
                                    <li class="waves-effect"><a href="#!">4</a></li>
                                    <li class="waves-effect"><a href="#!">5</a></li>
                                    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                                </ul>`;
            let cont = 1;
            console.log(response.length);
            for (let i = 0; i < 5; i++) {
                //respo.add(respones.posts[i]);
                let idd = 'modal';

                let hash = '#';
                console.log(response.posts);
                let data = {
                    tit: (response.posts[i]).titulo,
                    cuer: (response.posts[i]).texto,
                    aut: (response.posts[i]).autor
                };
                let tbody = document.getElementById("sec1");
                let div = document.createElement("div");
                div.innerHTML = `<div class="sectionn">
                                    <div class="">
                                        <div class="card-panel #80cbc4 teal lighten-3">
                                            <a class="linkss waves-effect waves-light btn modal-trigger" href="${hash + idd + cont}">
                                                ${data.tit}</a>
                                            <a class="linkss waves effect waves-light">${data.aut}</a>
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

function mostrar1() {
    fetch('/api/post', {
        method: "GET"
    }).then(res => res.json())
        .then(response => {
            //var respo = [];
            // respo.add(response[i])
            let parent = document.getElementById("sec1");
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            };
            parent.innerHTML = `<ul class="pagination" style="position: absolute; left: 25%; bottom: 0;">
                                    <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                                    <li class="waves-effect"><a href="#!" onClick='mostrar0()'>1</a></li>
                                    <li class="active"><a href="#!">2</a></li>
                                    <li class="waves-effect"><a href="#!">3</a></li>
                                    <li class="waves-effect"><a href="#!">4</a></li>
                                    <li class="waves-effect"><a href="#!">5</a></li>
                                    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                                </ul>`;
            let cont = 1;
            console.log(response.length);
            for (let i = 5; i < 9; i++) {
                //respo.add(respones.posts[i]);
                let idd = 'modal';

                let hash = '#';
                console.log(response.posts);
                let data = {
                    tit: (response.posts[i]).titulo,
                    cuer: (response.posts[i]).texto,
                    aut: (response.posts[i]).autor
                };
                let tbody = document.getElementById("sec1");
                let div = document.createElement("div");
                div.innerHTML = `<div class="sectionn">
                                    <div class="">
                                        <div class="card-panel #80cbc4 teal lighten-3">
                                            <a class="linkss waves-effect waves-light btn modal-trigger" href="${hash + idd + cont}">
                                                ${data.tit}</a>
                                            <a class="linkss waves effect waves-light">${data.aut}</a>
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

