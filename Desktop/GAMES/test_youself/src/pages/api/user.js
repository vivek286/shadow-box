
import {MongoClient,ObjectId} from 'mongodb'
async function handler(req,res){
    // const {title ,email ,category ,description,date,datetime,imageUrl,readingTime,author}=req.data;
    // console.log(req.body);   

    const data=req.body;

const client=await MongoClient.connect('mongodb+srv://Vivek:TeNzP6QPWszrWcKX@cluster0.hmbhl.mongodb.net/user?retryWrites=true&w=majority');
const db=client.db();



const meetupsCollections=db.collection('users');
const result=await meetupsCollections.findOne({email:data.email,pass:data.pass});
console.log(result);
client.close();

res.status(201).json({data: result});


}

export default handler;