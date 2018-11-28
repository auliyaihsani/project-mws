 function tambah(){ 
      a=eval(document.getElementById("a").value);
      b=eval(document.getElementById("b").value);
      c=a+b;
      document.getElementById("hasil").value=c; 
       }

       function kurang(){ 
      a=document.getElementById("a").value;
      b=document.getElementById("b").value;
      c=a-b;
      document.getElementById("hasil").value=c; 
       }

       function kali(){ 
      a=document.getElementById("a").value;
      b=document.getElementById("b").value;
      c=a*b;
      document.getElementById("hasil").value=c; 
       }

       function bagi(){ 
      a=document.getElementById("a").value;
      b=document.getElementById("b").value;
      c=a/b;
      document.getElementById("hasil").value=c; 
       }