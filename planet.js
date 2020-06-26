class Planet{
    constructor(x,y,r,s,rs){
        this.sprite = createSprite(x,y,1,1);
        this.sprite.setCollider("circle",0,0,r);
        this.sprite.debug = true;
        this.speed = s;
        this.sprite.rotateToDirection = true;
        this.sprite.setSpeed(s);
        this.sprite.rotationSpeed = rs;
    }

    collision(){
        if(this.sprite.isTouching(sun)){
            this.sprite.destroy();
            planet.splice(0,1);
        }
    }
}