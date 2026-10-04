import React from "react";


import Cards from "./componets/cards";

const App = () => {
  
  // const arr = [{user: 'sartham',age:90},{user: 'aman ',age:90},{user: "komar",age:30}];
  // arr.map(function(elem){
  //   console.log(elem);
  // })
const jobs = [
  {
    id: 1,
    logo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "2 days ago",
    position: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$18 - $25/hr",
    location: "Lahore, Pakistan",
  },
  {
    id: 2,
    logo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "5 days ago",
    position: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$20 - $30/hr",
    location: "Islamabad, Pakistan",
  },
  {
    id: 3,
    logo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "1 day ago",
    position: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$25 - $35/hr",
    location: "Lahore, Pakistan",
  },
  {
    id: 4,
    logo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "3 days ago",
    position: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$15 - $22/hr",
    location: "Remote, Pakistan",
  },
  {
    id: 5,
    logo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "6 days ago",
    position: "Software Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$35 - $50/hr",
    location: "Karachi, Pakistan",
  },
  {
    id: 6,
    logo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "4 days ago",
    position: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$28 - $40/hr",
    location: "Remote, Pakistan",
  },
  {
    id: 7,
    logo: "https://logo.clearbit.com/ibm.com",
    company: "IBM",
    datePosted: "7 days ago",
    position: "Backend Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$22 - $32/hr",
    location: "Lahore, Pakistan",
  },
  {
    id: 8,
    logo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    datePosted: "2 days ago",
    position: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$30 - $45/hr",
    location: "Islamabad, Pakistan",
  },
  {
    id: 9,
    logo: "https://logo.clearbit.com/adobe.com",
    company: "Adobe",
    datePosted: "8 days ago",
    position: "UI/UX Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$16 - $24/hr",
    location: "Remote, Pakistan",
  },
  {
    id: 10,
    logo: "https://logo.clearbit.com/oracle.com",
    company: "Oracle",
    datePosted: "3 days ago",
    position: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$32 - $48/hr",
    location: "Karachi, Pakistan",
  },
];


  return (


    <div className="flex flex-row gap-9 w-[1280px]">
      {jobs.map(function(elem){
        
        return <Cards key={elem.id} job={elem}/>
       })}
          
          </div>
  );
};

export default App;
