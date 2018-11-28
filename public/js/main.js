function guardar(){
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