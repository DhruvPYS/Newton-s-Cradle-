class Chain {


    constructor (bA, bB, offsetX, offsetY)
    {
        this.offsetX = offsetX
        this.offsetY = offsetY
   this.chain = Matter.Constraint.create({bodyA: bA, bodyB: bB, 
    pointB: {x: this.offsetX, y: this.offsetY}})

World.add(world, this.chain)
    }
    
    display()
    {
    var pointA = this.chain.bodyA.position
    var pointB = this.chain.bodyB.position

    strokeWeight(2)
   fill ("black")
    var Anchor1X = pointA.x
    var Anchor1Y = pointA.y

    var Anchor2X = pointB.x + this.offsetX
    var Anchor2Y = pointB.y + this.offsetY

   line (Anchor1X, Anchor1Y, Anchor2X, Anchor2Y)

    }
    
    }