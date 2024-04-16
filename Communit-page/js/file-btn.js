const fileupload = document.getElementById('file-label')
const inputValue = document.getElementById('inputChange')
        
fileupload.addEventListener('change',function () {
    console.log(fileupload.value)
    inputValue.value=fileupload.value;
})