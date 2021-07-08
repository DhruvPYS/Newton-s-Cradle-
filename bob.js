class Bob {


    constructor (x,y, radius)
    {
    var options ={
    isStatic: false,
    'restitution': 1,
    'friction': 0,
    'density': 7.8
    }
    this.body = Bodies.circle(x,y, radius, options)
    this.radius = radius
    
    World.add(world, this.body)
    }
    
    display()
    {
    
    push()
    fill ("pink")

    ellipseMode(RADIUS)
    circle(this.body.position.x, this.body.position.y, 25,25)

    pop ()
    }
    
    }