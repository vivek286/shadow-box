import axios from 'axios'

async function handler(req,res){
    

var config = {
method: 'post',
url: 'https://codex-api.herokuapp.com/',
headers: { 
 'Content-Type': 'application/json'
},
data : req.body
};

 axios(config)
.then(function (response) {
  
return   res.send(response.data);
  
})
.catch(function (error) {
console.log(error);

return res.status(200).send({message:error});
});
}
export default handler;