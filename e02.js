function isAPangram (str = '') {
    let min = 65;
    let maj = 97;
    let nbLet = 0;
  
    let tabCheckLet = new Array(26);
    for (let i=0;i< 26;i++)
    { 
      for(let y=0;y<str.length;y++)
      {
        if(str.charCodeAt(y) == min || str.charCodeAt(y) == maj)
        {
          tabCheckLet[i] = true;
        }
      }
      min++;
      maj++;
    }
  
   for(let i=0; i<tabCheckLet.length;i++)
   {
     if(tabCheckLet[i] != true)
     {
       return false;
     }
   }
  
    return true;
  };

  console.log(isAPangram("The quick brown fox jumps over the lazy dog"));
  
  console.log(isAPangram("Hello Efrei"));
