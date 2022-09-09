const url = "https://jsonplaceholder.typicode.com/posts";

async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    show(data);
}
getapi(url);

function show(data) {
    let card = "";
    data.map((item) => {
        card += `
        <div class="card" id=${item.id}>
            <div class="card-header bg-dark text-white">
                <h4>${item.title}</h4>
            </div>
            <div class="card-body">
                <p class="card-text">${item.body}</p>
            </div>
            <div class="card-footer">
                <button class="btn btn-outline-secondary w-100" id=${item.id} data-bs-toggle="modal" data-bs-target="#modal-${item.id}">Know More</button>
            </div>
        </div>

        <div class="modal fade" id="modal-${item.id}">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-dark text-white">
                    <h5 class="modal-title">${item.title}</h5>
                    <button class="close" data-bs-dismiss="modal"><span>&times;</span></button>
                </div>
                <div class="modal-body">
                    <p class="lead">${item.body}</p>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
        `
    })
    document.querySelector("#blogData").innerHTML = card;

}
