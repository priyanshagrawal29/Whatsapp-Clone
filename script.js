'use strict'
window.onload=function chats(){
    chat_sec();
    people();

}
/*Id*/
const id=(i)=>{
    let doc_id=document.getElementById(i);
    return doc_id;
}
/*Class*/
const classes=(c)=>{
    let doc_classes=document.getElementsByClassName(c);
    return doc_classes;
}
const status=()=>{
    id("chats").style.border="none";
    id("sts").style.borderBottom="5px solid #FFF";
    id("call").style.border="none";    
    classes("main")[0].style.display="none";
    classes("status_section")[0].style.display="block";
    classes("calls_section")[0].style.display="none";
}
const chat_sec=()=>{
    id("chats").style.borderBottom="5px solid #FFF";
    id("sts").style.border="none";
    id("call").style.border="none";   
    classes("main")[0].style.display="block"; 
    classes("status_section")[0].style.display="none";
    classes("calls_section")[0].style.display="none";
}
const calls=()=>{
    id("call").style.borderBottom="5px solid #FFF";
    id("chats").style.border="none";
    id("sts").style.border="none";   
   classes("calls_section")[0].style.display="block"; 
   classes("status_section")[0].style.display="none";
   classes("main")[0].style.display="none"; 
}
//Chats 
const people=()=>{
    let img_url="https://api.sololearn.com/Uploads/Avatars/"
    const path=["5742610.jpg","10779261.jpg","6578118.jpg","6804430.jpg","2200299.jpg","12942084.jpg","4991698.jpg","4586359.jpg","7474490.jpg"];
    const names=["Priyanka Gla","Jitendra Gla","Esha Gla","Krishan Gla","Pradhumn","Pragya Gla","Gopal Gla","Manik Gla","Chandrika Gla","Lovedeep"];
    const messages=["Kitna padhti ho aap😜","Kitni tension leta h bhai...","My exam helper😊","😆..","Send Storms","Huuuuhhh😮"
    ,"typing...","Hehehe😂","Can i ask you a Question..","No cheating"];
    const time=["Just Now","3:05 PM","10 PM","1:54 pm","Yesterday","10.30 AM","5:20 PM","28/7/19","12/7/19"];
    
    let message_section=id("msg");
    //alert(message_section);
    for(var i=0;i<9;i++)
    {
        var div=document.createElement("div");
        div.innerHTML='<img src="'+img_url+''+path[i]+'" class="profile '+i+'"/><span class="name">'
        +names[i]+'</span><span class="messages">'+messages[i]+'</span> <span class="times">'+time[i]+'</span><hr/><br/>';
        div.setAttribute("class","people");
        var msg=message_section.appendChild(div);
        
    }
    // typing..
    classes("messages")[6].style.color="#25D366";
    classes("messages")[6].style.fontSize="3vh";
    classes("messages")[6].style.fontWeight="500";
}
const dots_sec=()=>{
    id("drop").classList.toggle("show");
}
window.onclick=function(event) {
    if(!event.target.matches('#dots')){
        let dropdown =classes("dots_menu");
        for(var i =0; i < dropdown.length; i++){               
            let openDrop= dropdown[i];
                if(openDrop.classList.contains('show')){
                openDrop.classList.remove('show');
            }
        }
    }
}

const dark_mode=()=>{
    classes("green")[0].style.background="#000";
    document.body.style.background="#252525";
    id("msg").style.color="#FFF";
    classes("dots_menu")[0].style.background="#333333";
    let list_contents=classes("list");
    for(var i of list_contents)
    i.style.color="#FFF";
    id("dark").style.display="none";
    id("light").style.display="block";
}
const light_mode=()=>{
    classes("green")[0].style.background="#075E54";
    document.body.style.background="#FFF";
    id("msg").style.color="#000";
    classes("dots_menu")[0].style.background="#FFF";
    let list_contents=classes("list");
    for(var i of list_contents)
    i.style.color="#000";
    id("dark").style.display="block";
    id("light").style.display="none";
}
const search=()=>{
    //Under Construction
}
