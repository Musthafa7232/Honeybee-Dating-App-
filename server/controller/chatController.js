export const getMessage=(chatModel,getAllChats)=>async(req,res)=>{
     try {

        const messages=await getAllChats(req.body,chatModel)
   
    res.json(messages);
  } catch (ex) {
    next(ex);
  } 
}
export const addMessage=(chatModel,addNewMsg)=>async(req,res)=>{
  try {
   const data=await addNewMsg(req.body,chatModel)
    if (data) return res.status(200).json({ msg: "Message added successfully." });
    else return res.status(400).json({ msg: "Failed to add message to the database" });
  } catch (ex) {
    console.log(ex);;
  }
}

export const getLastMessage=(chatModel)=>async(req,res)=>{
    try{
const users=req.body

users.forEach
    }catch(er){
        console.log(err);
    }
}