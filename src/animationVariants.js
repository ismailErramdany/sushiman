const transition = { duration:0.5, ease:'linear'}
const UP_Variants = {
    hidden:{ opacity: 0, y:100 },
    show:{ 
        opacity: 1,
        y:0,
        transition
    }
}
const DOWN_Variants = {
    hidden:{ opacity: 0, y:-100 },
    show:{ 
        opacity: 1,
        y:0,
        transition
    }
}

const RIGHT_Variants = {
    hidden:{ opacity: 0, x:100 },
    show:{ 
        opacity: 1,
        x:0,
        transition
    }
}
const LEFT_Variants = {
    hidden:{ opacity: 0, x:-100 },
    show:{ 
        opacity: 1,
        x:0,
        transition
    }
}
const scaleY_Variants = {
    hidden:{ opacity: 0, scaleY:0 },
    show:{ 
        opacity: 1,
        scaleY:1,
        transition
    }
}
export {
    UP_Variants,
    DOWN_Variants,
    RIGHT_Variants,
    LEFT_Variants,
    scaleY_Variants
}