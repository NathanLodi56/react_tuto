import React from "react"
function ReactGiveStyle () {
   const date = new Date(2019,6,30,12)
   const hours = date.getHours()

   let timeOfDay 

   const styles = {
       fontSize: 100
   }

   if (hours<12) {
       timeOfDay = "morning";
       styles.color= "#dcff19"
       
       
   } else if(12 >=hours && hours <17 ) {
       timeOfDay=  "afternoon";
       styles.color="#259e4f"
       
   } else{
        timeOfDay= "night "
        styles.color="#D90000"
        }
    //     const styles = {
    //     color: "#FF8C00", 
    //     backgroundColor: "#FF2D00",
    //     fontSize: "200px"
    // }
 return(
     <h1 style ={styles}> Hello, good {timeOfDay}</h1>
    )
}

export default ReactGiveStyle