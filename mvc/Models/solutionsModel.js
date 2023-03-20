const solutions = new mongoose.Schema({


    
        heading: [{
            title: { type: String, required: false },
            desc: { type: String, required: false },
        }],
    
    Images: [{
        
            img: { type: String, required: false },
            title: { type: String, required: false },

        }]
    


    })


const Solutions = mongoose.model("Solutions", solutions)