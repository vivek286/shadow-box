function shadow_box(options){
    let element=document.getElementsByClassName('.shadow-box');
    if(options.shadow_type==='hard'){
        options.shadow_type='0px';
    }else{
        options.shadow_type='15px';
    }
    element.forEach(element => {
        element.style.boxShadow=`10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;
        if(options.padding)element.style.padding='1em';
    });
}
module.exports.shadow_box=shadow_box;