var ezproxy='ezp.lib.unimelb.edu.au';
const storageItem = browser.storage.local.get('ezproxy');

storageItem.then((res) => {
    if(res.ezproxy){
        ezproxy=res.ezproxy;
    }
    browser.pageAction.onClicked.addListener(
        (tab)=>{
            browser.tabs.update({url:toggleEzproxy(tab.url)});
        }
    );
});

function toggleEzproxy(s){
    const u=new URL(s);
    const i=u.host.lastIndexOf(ezproxy);
    if(i>=0){
        return `${u.protocol}//${u.host.substring(0,i-1).replace(/-/g,'.')}${u.pathname}${u.search}`;
    }else{
        return `${u.protocol}//${u.host.replace(/\./g,'-')}.${ezproxy}${u.pathname}${u.search}`;
    }
}


