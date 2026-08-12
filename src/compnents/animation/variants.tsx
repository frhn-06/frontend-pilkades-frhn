const revealVariants = {
    fadeUp: {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0
        }
    },

    fadeLeft: {
        hidden: {
            opacity: 0,
            x: 40
        },
        visible: {
            opacity: 1,
            x: 0
        }
    },

    fadeRight: {
        hidden: {
            opacity: 0,
            x: -40
        },
        visible: {
            opacity: 1,
            x: 0
        }
    },

    scale: {
        hidden: {
            opacity: 0,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            scale: 1
        }
    },



    container: {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3
            }
        }
    },

    item: {
        hidden: {
            opacity: 0,
            y: 30  
        },
        visible: {
            opacity: 1,
            y:0
        }
    }
}

export {revealVariants}