
const render = {
    init(gameObj) {
        // drawSky
        gameObj.tool.fillStyle = "#3498db";  //sky ka color
        gameObj.tool.fillRect(0, 0, window.innerWidth, window.innerHeight); //cordinates
        gameObj.tool.drawImage(castleImage, 40,40,200,150);
        gameObj.tool.drawImage(paintImage, 100, 100, 270,180 );
        
        
        console.log("here is castle");

        
        
        //    console.log(mario);
        
    },
}
class Game { 

    init() 
    {
        preload().then(() => {
            const canvas = document.querySelector(".board");
                canvas.height = window.innerHeight;
                canvas.width = window.innerWidth;
                const tool = canvas.getContext("2d");

                let gameObj = {
                    tool, canvas,
                    

                }
                render.init(gameObj);

                this.update(gameObj);
        })
               
    }

    update(gameObj) 
    {
        gameObj.tool.clearRect(0, 0, window.innerWidth, window.innerHeight);
        gameObj.tool.fillStyle = "#63adff";
        gameObj.tool.fillRect(0, 0, window.innerWidth, window.innerHeight);     
        
    }

    reset() 
    {
        location.reload();
    }
    

}

const game = new Game();
game.init();
