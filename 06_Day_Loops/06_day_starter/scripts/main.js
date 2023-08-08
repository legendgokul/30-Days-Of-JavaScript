const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
  
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
  console.log("Default FOR :");
  for(let i=0;i<countries.length;i++){
      console.log(countries[i]);
  }
  
  console.log("Default While :");
  let index = 0;
  while (index<countries.length){
      console.log(countries[index++]);
  }
  
  console.log("Default Do-While :");
  index = 0;
  do{
      console.log(countries[index++]);
  }while(index<countries.length);
  
  // printing patern :
  
  /*
        #
       ##
      ###
     ####
    #####
   ######
  */
  console.log("right Pyramid :");
  let pattern = "";
  let len = 7;
  for( let i=1; i<=len; i++ )
  {
      //logic to add space
      for(let j =1;j<=len-i;j++){
          pattern += " ";
      }
      //logic to add #
      for(let j =1;j<=i;j++){
          pattern += "#";
      }
      //finally ad next line.
      pattern +="\n";
  }
  console.log(pattern);
  
  
  /*
  #      
  ##     
  ###    
  ####   
  #####  
  ###### 
  #######
  */
  console.log("left Pyramid :");
   pattern = "";
   len = 7;
  for( let i=1; i<=len; i++ )
  {
      //logic to add #
      for(let j =1;j<=i;j++){
          pattern += "#";
      }
      //finally ad next line.
      pattern +="\n";
  }
  console.log(pattern);
  
  
  /*
  #######
  ######
  #####
  ####
  ###
  ##
  #
  */
  console.log("Reverse left Pyramid :");
  pattern = "";
  len = 7;
  for( let i=0; i<len; i++ )
  {
     //logic to add #
     for(let j=len-i; j>0  ;j--){
         pattern += "#";
     }
     //finally ad next line.
     pattern +="\n";
  }
  console.log(pattern);
  
  
  /*
  #######
   ######
    #####
     ####
      ###
       ##
        #
  */
  console.log("reverse right Pyramid :");
  pattern = "";
  len = 7;
  for( let i=0; i<len; i++ )
  {
      for(let j=i; j>0  ;j--){
          pattern += " ";
      }
     //logic to add #
      for(let j=len-i; j>0  ;j--){
          pattern += "#";
      }
     //finally ad next line.
     pattern +="\n";
  }
  console.log(pattern);
  
  
  /*
  Hallow left pyramid
  
  *
  **
  * *
  *  *
  *   *
  ******
  */
  console.log("Hallow Left Pyramid :");
  pattern = "";
  len = 7;
  for( let i=1; i<len; i++ )
  {
      for( let j=0; j<i ;j++ ){
          if( j == 0 || j == i-1 || i == len-1 ){
              pattern += "#";
          }else{
              pattern += " ";
          } 
      }
     //finally ad next line.
     pattern +="\n";
  }
  console.log(pattern);
  
  
  /*
  Pyramid
  
  ----#
  ---###
  --#####
  -#######
  */
  console.log("Pyramid :");
  pattern = "";
  len = 5;
  for( let i=1; i<len; i++ )
  {
      for( let j=1; j<len-i ;j++ ){
          pattern +="-";
      }
      for( let j=0; j<(i*2)-1 ;j++ ){
          pattern +="#";
      }
     //finally ad next line.
     pattern +="\n";
  }
  console.log(pattern);
  
  
  /*
  Reverse pyramid
  
  #######
  -#####
  --###
  ---#
  */
  console.log("Reverse pyramid :");
  pattern = "";
  len = 5;
  for( let i=1; i<len; i++ )
  {
      for( let j=len-1; j>len-i ;j-- ){
          pattern +="-";
      }
      for( let j=0; j<((len-i)*2)-1 ;j++ ){
          pattern +="#";
      }
     //finally ad next line.
     pattern +="\n";
  }
  console.log(pattern);
  
  
  /*
  hallow pyramid
  
  ----#
  ---# #
  --#   #
  -#     #
  #########
  */
  console.log("hallow pyramid :");
  pattern = "";
  len = 5;
  for( let i=1; i<=len; i++ )
  {
      for( let j=0; j<len-i ;j++ ){
          pattern +="-";
      }
      for( let j=1; j<(i*2) ;j++ ){
          if(j==1 || j==(i*2)-1 ||i == len ){
              pattern +="#";
          }else{
              pattern +=" ";
          }
      }
     //finally ad next line.
     pattern +="\n";
  }
  console.log(pattern);
  
  
  console.log("creating array of random numbers without repeat :");
  
  let nomnom = [];
  for(let i=0;i<10;i++){
      let newNum = Math.floor(Math.random()*100);
     let flag  = nomnom.includes(newNum);
      while(flag){
          newNum = Math.floor(Math.random()*100);
          console.log("damn");
          flag  = nomnom.includes(newNum);
      }
      nomnom.push(newNum);
  }
  console.log(nomnom);
  
  
  let nomnom1 = [];
  while(nomnom1.length<10){
      let newNum = Math.floor(Math.random()*100);
      if(!nomnom1.includes(newNum)){
          nomnom1.push(newNum);
      }
  }
  console.log(nomnom1);
  
  
  const webTechs = [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB'
    ];
  
  
  function displayWebTech(webTech){
      let Response  = [];
  
      for(let x of webTech){
          let work1 = x.slice(0,2)
          let work2 = x.slice(2,x.length)
         Response.push([x,work1.toUpperCase()+work2.toLowerCase(),x.length])
      }
      console.log(Response.sort());
  }
  
  displayWebTech(webTechs);