/*******************
****Create-A-Room***
*******************/
/** Room Settings */
export.name '' //Type The Name of your Room!
export.code '' /**Type the code of the server of which you want to create a room. This can be done by:
* open server of which you want to create a room
* Check in the Pins of the server
* Find the Pin where there will be written: Room Code for This Server is codewillbehere. for ex:
Room Code for This Server is 001
* now type the code 001 is the export.code '001' if
 the code is another one type that code in export.code ''
 */
 export.permission '@everyone' /**Who Can Visit Your Room? @everyone means all! */
/** Room Ranks! */
export.owner '' /** Who will be the owner. type full code name for ex: Uzair#2801 */
export.bot '' /** Main Bot of the room! */
export.ranks {
}
/** Type Some ranks for Example:
export.ranks {
voice == Uzair#2801
}
For Multi Ranks type ; at the end for example:
export.ranks {
voice == Uzair#2801;
driver == Volty#3521
}
for Single Ranks Type /. for example:
export.ranks {
voice == Uzair#2801 /. Volty#3521 /. Commander#1252
}
*/
export.admin 'Uzair#2801' /** Type the one who will be admin of your room. Don't Change if you don't
know what you are doing. use '()' to set none of the admin but if you did that & your room get banned
or any other matter, no one could help. so let it be Uzair#2801 or anyother admin.
*/
//Ending//
/** Copyright 2017 , Ash Ketchum Aka Uzair */
