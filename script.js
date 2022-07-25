function validateform(){  
    var fname=document.myForm.firstname.value;  
    var lname=document.myForm.lastname.value; 
    var emails=document.myForm.email.value;  
    var comments=document.myForm.comments.value;   
      
    if (firstname==null || firstname==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(lastname==null || lastfname==""){  
      alert("Name can't be blank");  
      return false;  
      }
      else if(emails==null) {
        alert("Enter the mail id")
        return false;
      }
      else if(comments==null) {
        alert("Enter comments")
        return false;
      }
    } 
