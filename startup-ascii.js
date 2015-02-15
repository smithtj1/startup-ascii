'use strict';

var startupAscii = angular.module('startup-ascii', []);

startupAscii.factory('startup-ascii-printer', function(){

	var images = {
		bill: function(){console.log('                   ~=~~~--                                  
                ??I+=+I+?+?7I??=                            
             =?I7$I$Z7II??II?7$$I?=                         
            ?II77$$7Z$7I?+?+=++?$7$7+=                      
          ~II?I$$777$77I?+=======+I$Z7?=                    
         ~+7II77777I???+~==+=+=====+?II~+                   
        ~+I77I???I+++=+=======+=+==+=+??~~                  
       ~~+7??+++==+=+========++++==+++++==                  
      ~~+II???++?++==~~~~~=~=====+=+++?++~=                 
      +?7$???????+==~~-~~~~~~+====+==+++++~+~               
     ~+I7III??+==+===~==~~=~~==~=++==+++??=~~               
     ?IIIII7???++====~=~=====~+=I+====++?I?==~              
     ?II77III??++========+===~=~+=+=++++?+II++~             
     ?7I777III??++++?=======~==+?I7??+=++++?+?~-==          
     ?777I7I???+++==+++======?Z$OZ$I77?++++?+=I+?$I         
     ~77$777II?I++=++====++=+?77I??+?????+==??++I??+        
      ?7$$77II?????++?++==?+?77IDODD$8ZI?=+=+?+?I+++        
       ?$$$77??II?7$$7I??===+77ZZ$$Z?7??+~==++??$I??        
       =7$Z7777Z$OZ$I?I$$I==+?=????+?+??===+=++??I?++       
        7OO$778O$I+IO$8$I$??=???????+++?=++++++?=?+?+       
        ?7O$$7Z$I7DDMZ+7+7I?=+??++++++++++????????=?=       
        ?$Z$$7$$Z8Z?I???I7I?++++I?==+===+?????++?+?=+       
        7O7Z7777Z7II?7??I7II+==?I+7?+==+++?????+??==+       
        $$$$77????I??7?+IZZI++?I777+7I+++???????I?II        
         OO$$7I?++??I??+?777$$$$$Z?++++???I???I???          
         7$Z7$77III?I???7$$8OOO$I?+?++++?II??????I          
          $$Z$$$77II??IIIII77?II???I?III??IIII?III          
          ?7ZZ$$$$$7II?+I?III???IZDO?I77I???IIIII7          
           Z7$$$$7$$7I$I?I777DZI+?II???I???IIII7$$          
            7$ZOZ77777II7IZ$777$7I7+???++II7$77$OZZDN       
             I7ZZ$$II77I77$I?IIII?+?+++???7$ZZZOZ7IZMN8     
                6Z$$7777?I$I7???++?+++???IZOOOOZ777IDMNNN8  
                  ZZ$$7$I777?III????II?IIZOOOOZ$77I?NNNMNNNN
                   ?Z$$$$7$77IIIIII77ZZOOOOOOZ$7I7$INMMMNMMN
                    ~ZZZZZZZ$$$ZZZOOOZOZOZZZZ$77I7?IMMNMMMMN
                     ~OOOOOOOOO8OOOOZOOOOOOZ77II7IIZMMMMMMMM
                       OOOO8OOOOOOOZOOOZOO$$7I77II7?MNMMMMMM
                        OOOOOO8OOOOOOOZZZ$7777IIII$7MMMMMMMM
                        +OO8OOOOOOOZOZZ$Z$7$$III7$?7MMNMMMMM
                       &&88O8OO8OOZOZZ$$Z$Z$77$I$II7MMMMMMMM
                     &&&M88O8OOOOOOZOZ$ZZZ$$777$III7MMMMMMNM
                  &&&&OMMDM88OZO8OOOOOOOZZ$$77$ZII77MMMMMMMM
               7&7778MMMMNDM8OOO888OOZOOZZZ$$$OII7$OMMMMMMMM
            &&&&&&8MMMMMMM8DM88OOO8ZOOZZZOO$$$7I7Z?7OZZMMMMM
          8&&&&8DMMMMMMMMMOOMMD88OOOZOZZZZOZZZ7I$Z7MMMMMMMNM 

'); }, 
milhouse: function(){console.log('                             NZZZZZZZZZZ.                   
                           NZZZZZZZZZZZZZZO                 
                          ZZZZZZZZZZZZZZZZZZZ$              
                        OZZZZZD???????OZZZZZZZZ=            
                        ZZZ8??????????????OZZZZZZ           
                       8Z:=??????????????????I8ZZZ          
                       ?  ZZI???????DZZZZN???IZZZZD         
                          7?????????????IO$??OZZZZZZ        
  The House Always       ,??????????????????IZZZZZZZ        
      Wins.             :ND?????????I   MI??ZZZZZZZN        
                      .    NO??????      DO+ZZZZZZZ         
                      D  .  8MI??OZ   .  :OMZZZZZZ8         
                       .   ????????D     8OZNOOONZ          
                        ,O???????????$8MZO$ZZZZZZNOM        
                         $??????????????????????D 8O        
                         ????????????????????O$??.          
                         ???????????????????????I           
??????D7                  ????????O??????????8.             
 ~O?????????????D?        .??I??????????????8               
    ????????????????????8I?????????????$????:               
   N??I???????????????????????=IO$??????????7               
   I??????????????????????????:::~??????????M:::::::D       
               8$?????????????::::,????????Z::::::::::      
                      =D?????8:::::Z????O,:::::::::::$+     
                           :::::::~::::::::::::88::::D???N  
                           N,:::::M::::::::::D????O::?????$ 
                                   :::::::::$??????????????N
                                   =::::::::$I??????????????
                                   ,::::::::::?????????????D
                                   :::::::::::ODDD????????  
                                 $:::::::::::::::::::::,    
                                 :::::::::::::::::::::::M   
                                7:::::::::::::::::::::::Z   
                                 ?:::::::::::::::::::DOOO   
                                 NZZDZ,::::::::::OZOOOOOD   
                              ,OOOOOONOOOOOOOOOOOOOOOOOO    
                                                 .::+IIZ     

'); }, 
shark: function(){console.log('                                ....                        
                              ...?7~.                       
                            ..II77::7..                     
                           .,77I7...7?.                     
                         ..77I77.   .7.                     
                        .~I7777...  .7:                     
                       .77IIII.     .7+           ......    
     .........       ..$77777..     .7+       .....7I7..    
     ..I7I+..        .777II7...     .78.      ...7..7..     
     ...7777.....  ..~7IMI77.       .7M.  .. ..7.. 7.       
     ....77.77.    ..77IMM?.        .7M.  ...7,...I..       
        .II7..7+....77777I7....ONM?,.7. ...7$. ..7...       
        . 7I7...7...77II77.:MMMMDI M.7....I.....7..         
        .. I7? ..+7777777=Z...  .,~=.I..I$. ...I..          
         ...I7:....777777..     ....:+.7......7..           
           .:7I..  .77I77..      . .7I7......7..            
            .$77.....?777..      ...77... .7I...            
           . .77I......I7.       ...77....77..              
              .7I7....7I7        ...7I$..7...               
             . .777..,I77.       . .I7I77....               
                .I7777777. .     . .7777..                  
                 .7777777?..     ...777=..                  
                 ..777777I..     ..7777...                  
                  ..777777I.     .777II. .                  
                   .77777I77... .,I777I.                    
                   ..I777777,....77I77I.                    
                   ..I7777777...7777777.                    
                    .I777777I7.7I7777I7..                   
                    .I777777II77II77777..                   
                   ..777777777777777777..                   
                   ..I77777777777777777:.                   
                    .I7777777..777777777.                   
                    .7777777....77777777..                  
                   .,I777II?.  ..7I7777I..                  
                   .?I777I7.   ..,7777777.                  
                   .7777777.     .777777I?...               
                   .I77777..      .777I7II.... .            
                   .777777..     . .7I7777I.....            
                   .77777777...     .II77777777. ..         
                   .777777777.      ..I777777I77~..         
                   ....::~... .     ....=$77I77$...         
                   .. .........          ...... ..           

'); }, 

	}
	return {
		print: function(image, text){
			try{
				images[image]();
			}
			catch(err){
				console.log('startup-ascii: error finding image for: ' + image + '. sorry for partying.');
			}
		}
	}
});

//startupAscii.directive();