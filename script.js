
document.getElementById("get-file").textContent = "Generate File";

document.getElementById("get-file").addEventListener("click", function () {
    const fileName = document.getElementById("Enter_file_name").value.trim();
    const fileType = document.getElementById("Enter_file_type").value.trim();

    if (!fileName || !fileType) {
        alert("Please enter both file name and file type.");
        return;
    }
    const fullName = `${fileName}.${fileType}`;
    const blob = new Blob([""], { type: "text/plain" }); // Empty file
    const url = URL.createObjectURL(blob);

    const linkContainer = document.querySelector(".fileLink");
    linkContainer.innerHTML = `<a href="${url}" download="${fullName}">Download ${fullName}</a>`;
});


document.getElementById("get-file").textContent = "Generate File";

document.getElementById("get-file").addEventListener("click", function () {
    const fileName = document.getElementById("Enter_file_name").value.trim();
    const fileType = document.getElementById("Enter_file_type").value.trim();

    if (!fileName || !fileType) {
        alert("Please enter both file name and file type.");
        return;
    }

    const fullName = `${fileName}.${fileType}`;
    const blob = new Blob([""], { type: "text/plain" }); // Empty file
    const url = URL.createObjectURL(blob);

    const linkContainer = document.querySelector(".fileLink");
    linkContainer.innerHTML = `<a href="${url}" download="${fullName}">Download ${fullName}</a>`;
});
