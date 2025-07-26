
const getFile = document.getElementById("get-file")
const enterFileName = document.getElementById("Enter_file_name");
const enterFileType = document.getElementById("Enter_file_type");
const fileLink = document.querySelector(".fileLink");


getFile.textContent = "Generate File";


getFile.addEventListener("click", function () {
    const fileName = enterFileName.value.trim();
    const fileType = enterFileType.value.trim();

    if (!fileName && !fileType) {
        alert("Please enter both file name and file type.");
        return;
    }
    else if(!fileName) {
        alert("Please enter file name.");
        return;
    }
    else if(!fileType){
        alert("Please enter file type.");
        return;
    }

    const fullName = `${fileName}.${fileType}`;
    const blob = new Blob([""], { type: "text/plain" }); // Empty file
    const url = URL.createObjectURL(blob);

    const linkContainer = fileLink;
    linkContainer.innerHTML = `<a href="${url}" download="${fullName}">Download ${fullName}</a>`;
});
