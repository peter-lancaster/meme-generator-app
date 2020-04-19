import React from "react" 

class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText : "",
            bottomText : "",
            randomImage : "http://i.imgflip.com/1bij.jpg",
            allMemeImgs : []


        }
    }

    render() {

        /*

        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(jsonResponse => this.setState({allMemeImgs : jsonResponse}))
        .catch(error => console.error(error))

        console.log(this.state.allMemeImgs)*/

        return(<p>This is in the MemeGenerator Component</p>)
    }


}



export default MemeGenerator