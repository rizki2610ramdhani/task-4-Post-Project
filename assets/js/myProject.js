// global array
let projects = []

// function get data from input text html
function getData(e) {
    e.preventDefault()

    // delaclaration variable dom selection
    let projectName = document.getElementById('projectName').value
    let startDate = document.getElementById('startDate').value
    let endDate = document.getElementById('endDate').value
    let image = document.getElementById('image').files
    let description = document.getElementById('description').value
    
    let list = [];
    let check = document.forms['project'].elements['technologi'];
    for(let i = 0; i<check.length ; i++){
        if(check[i].checked){
            list.push(check[i].value);
        } 
    }

    // Convert spesific image to blob object
    image = URL.createObjectURL(image[0])

    let post = {
        projectName,
        startDate,
        endDate,
        list,
        image,
        description,
        author: "Rizki Ramdhani",
        postedAt: new Date()
    }

    projects.push(post)
    console.log(projects)
    showData()
}

// declaration function show list preview data blog
function showData(){
    document.getElementById("contents").innerHTML = ""
    for(let i=0; i< projects.length; i++){
        document.getElementById("contents").innerHTML += `
        <div class="project">
            <div class="project-image">
                    <img src="${projects[i].image}" alt="image" />
                </div>
                <div class="project-content">
                    <div class="btn-group">
                        <button class="btn-edit">Edit Post</button>
                        <button class="btn-post">Post Blog</button>
                </div>
                <h1>
                    <a href="projectDetail.html" target="_blank">${projects[i].projectName}</a>
                </h1>
                <div class="detail-project-content">
                ${projects[i].startDate} - ${projects[i].endDate} | ${projects[i].author}
                </div>
                <p>
                ${projects[i].description}
                </p>
                <br>
                <p>Technologies: ${projects[i].list.join(", ")}</p>

                <div style="float:right; margin: 10px">
                <p style="font-size: 15px; color:grey">1 minutes ago</p>
                </div>

            </div>
        </div>
        `
    }
}

