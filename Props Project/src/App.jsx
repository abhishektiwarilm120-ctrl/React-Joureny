import React from 'react'
import Card from './Component/Card'
import User from './Component/User'
const App = () => {

  

const jobs = [
  {
    brandLogo: "   https://img.magnific.com/premium-psd/3d-google-logo-with-modern-circular-blue-background_665513-2393.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnV5yr6AodwVlWWLPBpQdn038hCZt1iQUqeVNod2XD8FsnGb0kOGN9CIqB&s=10",
    name: "Microsoft",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://zonalogo.com/assets/amazon-logo-png-svg.webp?asset=1957",
    name: "Amazon",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYq7Q44IZaZV_veFoDZeJGgyTiED8noQ5lTNTkxfEqiA&s=10 ",
    name: "Meta",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "  https://w7.pngwing.com/pngs/941/692/png-transparent-black-small-apple-logo-logo-material-apple-logo-black.png",
    name: "Apple",
    datePosted: "3 days ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "  https://iprsoftwaremedia.com/219/files/202512/692f50633d6332b6efbbc605_nvidia-logo-vert-wht/nvidia-logo-vert-wht_prv.png?v=0a06dca9-ab55-462d-97ea-f90ed9844e39",
    name: "NVIDIA",
    datePosted: "2 weeks ago",
    post: "AI/ML Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$75/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
    name: "Adobe",
    datePosted: "6 days ago",
    post: "React Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$50/hour",
    location: "Noida, India"
  },
  {
    brandLogo: " https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    name: "Netflix",
    datePosted: "4 weeks ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpiw_5dklWlkr1812qc2i_PfPNvcVbpsg__pqmLUm1JB92XiW1BiShraax&s=10",
    name: "Uber",
    datePosted: "3 weeks ago",
    post: "JavaScript Developer",
    tag1: "Part-time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Gurgaon, India"
  },
  {
    brandLogo: "  https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg",
    name: "Salesforce",
    datePosted: "8 days ago",
    post: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$52/hour",
    location: "Hyderabad, India"
  }
];

console.log({jobs})

  return (
    <div className='parent'>


{jobs.map(function(elem){
  return <Card   brandLogo={elem.brandLogo}        companyname={elem.name} datepost={elem.datePosted}  post={elem.post} tag1={elem.tag1} tag2={elem.tag2}  pay={elem.pay} location={elem.location}/>
})}


</div>


    
  )
}

export default App