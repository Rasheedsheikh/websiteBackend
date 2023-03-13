app.post("/jobs",async(req,res)=>{
    const data= await Jobs.create(req.body)
    res.send(data)

})
app.get("/jobs",async(req,res)=>{
    const data= await Jobs.find({})
    res.send(data)

})
