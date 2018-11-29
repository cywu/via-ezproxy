const page=browser.extension.getBackgroundPage();

function saveOptions(e) {
    const val=document.querySelector("#ezproxy").value;
    console.log(val);
    page.ezproxy=val;
    browser.storage.local.set({
        ezproxy: val
    });
    e.preventDefault();
}

function getOptions() {
    let storageItem = browser.storage.local.get('ezproxy');
    storageItem.then((res) => {
        if(res.ezproxy){
            document.querySelector("#ezproxy").value=res.ezproxy;
        }
    });
}

document.addEventListener('DOMContentLoaded', getOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
//document.querySelector("#load").addEventListener("click",getOptions);
