class Ground {
    constructor (x,y)
    {
   
    this.body = Bodies.rectangle(x,y, 700, 50, {isStatic: true})
    
    World.add(world, this.body)
    }
    
    display()
    {      fill ("grey")

    rectMode(CENTER)
    rect(this.body.position.x, this.body.position.y, 800, 50)
    
    
    
    }
}