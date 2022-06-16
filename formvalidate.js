function validateform(){  
    var firstname=document.myform.fname.value;  
    var lastname=document.myform.lname.value;  
    var x=document.myform.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");
    var com=document.myform.comment.value;  
      
    if (firstname==null || firstname==""){  
      alert("First Name can't be blank");  
      return false;  
    }else if (lastname==null || lastname==""){  
        alert("Last Name can't be blank");  
        return false;  
    }else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        return false;  
    }else if(com==null || com==""){
        alert("Please Leave Some Message");  
      return false;
    }
}  