app.get("/searchjob", async (req, res) => {
    let sear=req.query.searchTxt;
    console.log(sear)
    let space = await Jobs.find({
        title: {
            $regex: `${sear}`,
            $options: 'i',
        },
    })
            // let space = await Jobs.find({title: "Full Stack Developer"})
    console.log({space})
    // console.log('-------------search api-------------'+ JSON.stringify(req.query))

    res.send(space)
    
})
