import './App.css';
import {React, useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {
  const [reports, setReports] = useState([])

  var getReports = () => {
    fetch(`https://ancient-beach-83194.herokuapp.com/get-reports`, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(res => {
            setReports(res)
        })
        .catch(err => console.log(err))
}
useEffect(() => {
  getReports()
}, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="main-page">

{    
reports.map((item,index) => (<Card key={index} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 460, width: 345 }}
        image={item.imageURL[0]}
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Report ID: <br></br>
           {item.inspectionID}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Employee Name: {item.clientName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Employee ID: {item.clientID}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Employee Email: {item.clientEmail}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Complete: {item.complete.toString()}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"center", alignContent:"space-evenly"}}>
      <Button size="small">Delete</Button>
        <Button size="small">Edit</Button>
        <Button size="small">Done</Button>
      </CardActions>
    </Card>))}
    </div>
  );
}

export default App;
