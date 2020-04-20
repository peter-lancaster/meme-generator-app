import React from "react" 

class MemeGenerator extends React.Component {
    constructor() {
        super();
        this.state = {
            topText : "",
            bottomText : "",
            randomImage : "http://i.imgflip.com/1bij.jpg",
            allMemeImgs : [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    handleChange(event) {

        const {name, value} = event.target;
        this.setState({[name] : value})
    }
    
    handleClick(event) {

        event.preventDefault();

        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
          }

        const randomNum = getRandomInt(0,100);

        this.setState({randomImage : this.state.allMemeImgs[randomNum].url})

    }
 
    componentDidMount() {

        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(jsonResponse => {
            this.setState({allMemeImgs : jsonResponse.data.memes})
            })
        .catch(error => console.error(error))

        
    }

    render() {

        console.log("im rendering");

        return(
                <div>
                    <form className="meme-form">
                        <input 
                            type="text"     
                            name="topText"
                            value={this.state.topText}
                            placeholder="Top text"
                            onChange={this.handleChange}
                        />                        
                        <input 
                            type="text"     
                            name="bottomText"
                            value={this.state.bottomText}
                            placeholder="Bottom text"
                            onChange={this.handleChange}
                        />
                        <button onClick={this.handleClick}>Gen</button>
                    </form>
                    <div className="meme">
                        <img src={this.state.randomImage} alt ="" />
                        <h2 className="top">{this.state.topText}</h2>
                        <h2 className="bottom">{this.state.bottomText}</h2>
                    </div>
                </div>
        )
    }


}



export default MemeGenerator