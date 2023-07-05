const express=require('express')
// Create Express app
const app = express();

// Enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Define the /awesome/applicant route
app.get('/awesome/applicant',(req,res)=>{
    //res.send('Hello NODE API')
    const basicDetails = {
        Firstname: 'Chandrashekar',
        Lastname: 'Kandepu',
        age: 25,
        hobby: 'Developing Websites',
        Name:'University of Cincinnati',
        Degree:'Masters in Computer Science', 
        Project:'HSBC',
        Company:'Larsen & Tourbo Infotech(LTI)'
      };
      
      
      res.json(basicDetails)
      
})

app.listen(4000,()=>{
    console.log('Code is running on 3000 port')
})