import React , {Component} from 'react'

class App17 extends Component{
    constructor() {
            super()
            this.state={}
    }

    componentDidMount(){
    // GET the data I need to correctly display

    }

    componentWillReceiveProps(){
     // do something important here
     // enlever de react et à la place on utlise d'autre props on verra en dessous le deux dernier 
     //DON'T USE NO MOREEEEE 
    }

    shouldComponentUpdate(){
        // changer tes vetements ou pas si react reçois quelque chose quil doit rendre compasant il le rerendre mais . should peut permettre de savoir c'est qui important pour une update. 
        
         // return true if want it to update
        // return false if not
        // return true if want it to update
        // return false if not
    }
    componentWillUnmount(){
    // nettoyer ou effacer un truc que t'aurais programé au préalable 
    //exemple si tu avais mus event listener dans componentDidmount qui à chaque fois que tu scrolle dans la page y un evement qui ce passe  et si tu veux le reboot 
    // teardown or cleanup your code before your component disappears

    }

    sdsdsddsds

    render(){
        return(
            <div>
                code goes here 
            </div>
        )
    }
}



export default App17