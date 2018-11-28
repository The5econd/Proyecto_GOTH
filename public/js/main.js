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
document.getElementById('myFile').onchange = function(){
    var img = document.getElementsByClassName("imagenPlaylist");
    var x = document.getElementById("myFile");
    var txt = "";
    if ('files' in x) {
        if (x.files.length == 0) {
            txt = "Select one or more files.";
        } else {
            for (var i = 0; i < x.files.length; i++) {
                txt += "<br><strong>" + (i+1) + ". file</strong><br>";
                var file = x.files[i];
                var blob = new Blob([file], { type: 'application/javascript' });
                var TmpPath = URL.createObjectURL(blob);
                txt += "file: "+file+" URL: "+TmpPath;
                if ('name' in file) {
                    txt += "name: " + file.name + "<br>";
                }
                if ('size' in file) {
                    txt += "size: " + file.size + " bytes <br>";
                }
            }
        }
        console.log(txt);
    } 
}