let projects;

async function loadProjects()
{
    try {
        const response = await fetch("./projects.json");
        projects = await response.json();
    }
    catch (error)
    {
        console.error("데이터를 불러오는데 실패했습니다:", error);
    }
}

function setProject(idx)
{
    if (projects[idx].major) document.querySelector("#projectName").className = "major";
    else document.querySelector("#projectName").className = "";
    document.querySelector("#projectName").innerText = projects[idx].name;
    document.querySelector("#projectDesc").innerText = projects[idx].desc;
    document.querySelector("#projectDemo").setAttribute("href", projects[idx].demo);
    document.querySelector("#projectRepo").setAttribute("href", projects[idx].repo);
    document.querySelector("#projectImg").setAttribute("src", projects[idx].img ?? "https://dummyimage.com/600x350/cccccc/000000");

    document.querySelector("#projectSkills").innerHTML = "";

    projects[idx].skills.forEach(skill => {
        const li = document.createElement("li");
        li.innerText = skill;
        document.querySelector("#projectSkills").append(li);
    })
}

let idx = 0;

document.querySelector("#prev").addEventListener("click", () => {
    if (idx > 0) idx--;
    setProject(idx);
})

document.querySelector("#next").addEventListener("click", () => {
    if (idx < projects.length-1) idx++;
    setProject(idx);
})

async function main()
{
    await loadProjects();
    setProject(idx);
}

main();