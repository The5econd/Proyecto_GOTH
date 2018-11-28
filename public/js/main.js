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

function mostrar() {
    console.log('Aaaaaaaaaaaaaaahhhhh');
    let data = {
        tit:' HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
        cuer: 'QUE TAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL'
    };
    let tbody = document.getElementById("sec1");
    let div = document.createElement("div");
    div.innerHTML = `<div class="sectionn">
                        <div class="">
                            <div class="card-panel #80cbc4 teal lighten-3">
                                <a class="linkss waves-effect waves-light btn modal-trigger" href="#modal1">
                                    ${data.tit}</a>

                                <div id="modal1" class="modal">
                                    <div class="modal-content inner_div">
                                        <h4>${data.tit}</h4>
                                        <p>${data.cuer}</p>
                                    </div>           
                                </div>
                            </div>
                        </div>
                    </div>`;
    tbody.appendChild(div);
};