function guardar(){
    let data = {
        nombre: document.getElementsByTagName("nombre").value,
        Artista: document.getElementsByTagName("Artista").value,
        Album: document.getElementsByTagName("Album").value
    };
    let tbody = document.getElementsByClassName("posts")[0];
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${data.nombre}</td>
                        <td>${data.Artista}</td>
                        <td>${data.Album}</td>`;
    tbody.appendChild(tr)
};