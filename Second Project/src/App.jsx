

import React from 'react';
import Card from './Component/card';



const App = () => {
 
 const jobs = [
  {
    personName: "Rahul Sharma",
    profilePhoto: "https://i.pravatar.cc/150?img=12",
    name: "Google",
    post: "Frontend Developer",
    Branch: "Software Engineering",
    chargesPerHour: "$55/hour",
    location: "Mumbai, India"
  },
  {
    personName: "Priya Verma",
    profilePhoto: "https://i.pravatar.cc/150?img=47",
    name: "Microsoft",
    post: "React Developer",
    Branch: "Web Development",
    chargesPerHour: "$60/hour",
    location: "Bengaluru, India"
  },
  {
    personName: "Aman Gupta",
    profilePhoto: "https://i.pravatar.cc/150?img=13",
    name: "Amazon",
    post: "Software Development Engineer",
    Branch: "Cloud Computing",
    chargesPerHour: "$65/hour",
    location: "Hyderabad, India"
  },
  {
    personName: "Sneha Patel",
    profilePhoto: "https://i.pravatar.cc/150?img=44",
    name: "Meta",
    post: "Full Stack Developer",
    Branch: "Product Engineering",
    chargesPerHour: "$70/hour",
    location: "Gurugram, India"
  },
  {
    personName: "Arjun Mehta",
    profilePhoto: "https://i.pravatar.cc/150?img=14",
    name: "Apple",
    post: "UI/UX Developer",
    Branch: "Product Design",
    chargesPerHour: "$58/hour",
    location: "Mumbai, India"
  },
  {
    personName: "Neha Singh",
    profilePhoto: "https://i.pravatar.cc/150?img=45",
    name: "Netflix",
    post: "Backend Developer",
    Branch: "Backend Engineering",
    chargesPerHour: "$75/hour",
    location: "Bengaluru, India"
  },
  {
    personName: "Karan Malhotra",
    profilePhoto: "https://i.pravatar.cc/150?img=15",
    name: "Adobe",
    post: "JavaScript Developer",
    Branch: "Creative Cloud Engineering",
    chargesPerHour: "$52/hour",
    location: "Noida, India"
  },
  {
    personName: "Ananya Joshi",
    profilePhoto: "https://i.pravatar.cc/150?img=48",
    name: "NVIDIA",
    post: "AI/ML Engineer",
    Branch: "Artificial Intelligence",
    chargesPerHour: "$80/hour",
    location: "Pune, India"
  },
  {
    personName: "Rohit Yadav",
    profilePhoto: "https://i.pravatar.cc/150?img=16",
    name: "IBM",
    post: "Data Engineer",
    Branch: "Data Science",
    chargesPerHour: "$50/hour",
    location: "Chennai, India"
  },
  {
    personName: "Anjali Kapoor",
    profilePhoto: "https://i.pravatar.cc/150?img=49",
    name: "Salesforce",
    post: "MERN Stack Developer",
    Branch: "Application Development",
    chargesPerHour: "$62/hour",
    location: "Hyderabad, India"
  }
];

console.log(jobs.post)
 
 
  return (


<div className="parent">


    {
jobs.map(function(elem) {
  return <Card  name={elem.personName} post={elem.post}  img={elem.profilePhoto} companyname={elem.name}  Branch={elem.Branch} />
})

    }

</div>




  )
}

export default App