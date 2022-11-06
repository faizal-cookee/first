function f1(change_class_1, change_class_2, id){
    let x= document.getElementById(id).classList;
    let current_class="";
    for( i of x){
        let fs=i.toString();
        if (fs.startsWith("bg")){
            current_class=i;
            
            break;
        }
    }
    if(current_class=="")
    {
        console.log("class not found");
    }
    if (current_class == change_class_1){
        document.getElementById(id).classList.replace(current_class, change_class_2);
    }
    else{
        document.getElementById(id).classList.replace(current_class, change_class_1);
    }
    
}