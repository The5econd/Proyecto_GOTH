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
    tr.id = "tr";
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
};
let app = {

    init: function () {
        this.mostrarForos();
        this.foroUser();
    },

    mostrarPlaylist: function () {
        fetch('/api/play'+JSON.parse(session.user).username, {
            method: "GET"
        }).then(res => res.json())
            .then(response => {
                console.log(response);
                console.log('hola')
            })
    },

    foroUser: function () {
        fetch('/api/post', {
            method: "GET"
        }).then(res => res.json())
            .then(alv => {
                console.log(alv);
                let array = [];
                let len = alv.posts.length;
                console.log(len);
                for (let i = 0; i < len; i++) {
                    let aut = alv.posts[i].autor;
                    array.push(aut);
                }
                console.log(array);
                var glob = document.getElementById("global12").innerText;
                console.log(glob);
                var cont4 = 0;
                array.forEach(element => {
                    if(element == glob){
                        console.log(element+'suesbello');
                        cont4++;
                    }
                });
                console.log(cont4+'cont4')
                for(let i = 0; i < cont4; i++){
                    let data = {
                        tit: (alv.posts[i]).titulo,
                        cuer: (alv.posts[i]).texto,
                        aut: (alv.posts[i]).autor
                    };
                    let tbody = document.getElementById('profile-F');
                    let div = document.createElement("div");
                    div.innerHTML = `<div class="col s6">
                                        <div class="card ">
                                            <div class="card-content grey lighten-1">
                                                <h5>${data.tit}</h5>
                                            </div>
                                            <div class="card-action"><a href="#">Eliminar</a></div>
                                        </div>
                                    </div>`;
                    tbody.appendChild(div);
                }
            })
    },

    mostrarForos: function () {
        fetch('/api/post', {
            method: "GET"
        }).then(res => res.json())
            .then(response => {
                var respo = [];
                let cont = 1;
                for (let i = 0; i < 5; i++) {
                    //respo.add(respones.posts[i]);
                    let idd = 'modal';
                    let hash = '#';
                    //console.log(response.posts);
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
                                    <li class="waves-effect"><a href="#!" onClick="mostrar2()">3</a></li>
                                    <li class="waves-effect"><a href="#!" onClick="mostrar3()">4</a></li>
                                    <li class="waves-effect"><a href="#!" onClick="mostrar4()">5</a></li>
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
                                    <li class="waves-effect"><a href="#!" onClick='mostrar2()'>3</a></li>
                                    <li class="waves-effect"><a href="#!" onClick='mostrar3()'>4</a></li>
                                    <li class="waves-effect"><a href="#!" onClick='mostrar4()'>5</a></li>
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

function mostrar2() {
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
                                    <li class="waves-effect"><a href="#!" onClick="mostrar0()">1</a></li>
                                    <li class="waves-effect"><a href="#!" onClick="mostrar1()">2</a></li>
                                    <li class="active"><a href="#!">3</a></li>
                                    <li class="waves-effect"><a href="#!" onClick="mostrar3()">4</a></li>
                                    <li class="waves-effect"><a href="#!" onClick="mostrar4()">5</a></li>
                                    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                                </ul>`;
            let cont = 1;
            console.log(response.length);
            for (let i = 10; i < 15; i++) {
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
function mostrar3() {
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
                                    <li class="waves-effect"><a href="#!" onClick="mostrar0()">1</a></li>
                                    <li class="waves-effect"><a href="#!" onClick="mostrar1()">2</a></li>
                                    <li class="active"><a href="#!>3</a></li>
                                    <li class="waves-effect"><a href="#!" onClick="mostrar3()>4</a></li>
                                    <li class="waves-effect"><a href="#!" onClick="mostrar4()">5</a></li>
                                    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                                </ul>`;
            let cont = 1;
            console.log(response.length);
            for (let i = 15; i < 20; i++) {
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
function mostrar3() {
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
                                    <li class="waves-effect"><a href="#!" onClick="mostrar0()">1</a></li>
                                    <li class="waves-effect"><a href="#!" onClick="mostrar1()">2</a></li>
                                    <li class="waves-effect"><a href="#!" onClick="mostrar2()">3</a></li>
                                    <li class="active"><a href="#!">4</a></li>
                                    <li class="waves-effect"><a href="#!" onClick="mostrar4()">5</a></li>
                                    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                                </ul>`;
            let cont = 1;
            console.log(response.length);
            for (let i = 20; i < 25; i++) {
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
function mostrar4() {
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
                                    <li class="waves-effect"><a href="#!" onClick="mostrar0()">1</a></li>
                                    <li class="waves-effect"><a href="#!" onClick="mostrar1()">2</a></li>
                                    <li class="waves-effect"><a href="#!" onClick="mostrar2()">3</a></li>
                                    <li class="waves-effect"><a href="#!" onClick="mostrar3()">4</a></li>
                                    <li class="active"><a href="#!">5</a></li>
                                    <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                                </ul>`;
            let cont = 1;
            console.log(response.length);
            for (let i = 25; i < 30; i++) {
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