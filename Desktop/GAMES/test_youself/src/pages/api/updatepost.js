// /api/new-meetup
// var datat={
//     title: (document.getElementById("title") as HTMLInputElement).value,
//     email:(document.getElementById("email") as HTMLInputElement).value,
//     category: { name: (document.getElementById("category") as HTMLInputElement).value},
//     description:(document.getElementById("description") as HTMLInputElement).value,
//     date: new Date(),
//     datetime: String(new Date().getFullYear()+" "+new Date().getMonth()+" "+new Date().getDate()),
//     imageUrl:(document.getElementById("image") as HTMLInputElement).value,
//     readingTime: (document.getElementById("reading_time") as HTMLInputElement).value,
//     author: {
//       name: (document.getElementById("author_name") as HTMLInputElement).value,
//       href: (document.getElementById("link") as HTMLInputElement).value,
//       },
//   }
import {MongoClient,ObjectId} from 'mongodb'
async function handler(req,res){
    // const {title ,email ,category ,description,date,datetime,imageUrl,readingTime,author}=req.data;
    // console.log(req.body);   

    const data=req.body.id;

const client=await MongoClient.connect('mongodb+srv://Vivek:TeNzP6QPWszrWcKX@cluster0.hmbhl.mongodb.net/Blog?retryWrites=true&w=majority');
const db=client.db();



const meetupsCollections=db.collection('post');
const result=await meetupsCollections.replaceOne({_id:new ObjectId(data)},{$set:{body:req.body}});
// console.log(result);
client.close();

res.status(201).json({message: 'data updated'});


}

export default handler;