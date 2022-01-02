const officeInSunM = [
    {
        id: 0,
        title:   "Improvement Development for Corporate Websites",
        tenure:  "Nov/2021～Present",
        Pahases: "Detail Design, Development, Unit Test, Integration Test",
        Skill:   "javascript, scss, html, Git",
        point:   ["Improve a web page to attract clients.",
                 "Design and Development static websites."
                 ]
    },
    {
        id: 1,
        title:   "Building Lecture Management System",
        tenure:  "July/2021～Present",
        Pahases: "Basic Design, Detail Design, Development, Unit Test, Integration Test",
        Skill:   "Azure Cloud(Logic Apps, Azure Function, API Management), Power Platform, Git",
        point:   ["System Integration for company delivering a lecture service.",
                  "Design and verification architecture for Low-Code Development.",
                  "Design, Development and Excute a test Web RESTful APIs.",
                 ]
    },
    {
        id:2,
        title:   "Unit Test Support in Logistics System",
        tenure:  "Apr/2021～Jun/2021",
        Pahases: "Unit Test",
        Skill:   "java, javaScript, AWS RDS(Oracle DB), Spring Boot, Angular, TypeScript",
        point :  ["Detect an error in Stateful Web Application for the quality improvement.",
                  "Design and Execute an unit Test and issue a ticket for detected errors."
                 ]
    },
    {
        id:3,
        title:   "Improvement Development for the Sales support system",
        tenure:  "Oct/2020～Mar/2021",
        Pahases: "Basic Design, Detail Design, Development, Unit Test, Integration Test, Maintanance",
        Skill:   "java, javaScript, Oracle DB, Spring Boot, Web Performer, RHEL, SVN",
        point :  ["Serve a development and maintenance for Unstoppable Stateful Web Application.",
                  "Design and Migrate an RHEL server.",
                  "Design, Development and Excute a test java Batch Processing and Web Application."
                ]
    },
]


const today = new Date();
const startSunMDate = new Date("Oct/08/2019");

const sunmsystem = {
    name : "SUNM System",
    startDate : startSunMDate,
    endDate : "present",
    numberofYear : calemployeDate(startSunMDate, today),
    industry1 : "Information Technology",
    industry2 : "System Integrator(SIer)",
    employees : "318 (Nov/2020)",
    position : "employee without fixed term",
    works : officeInSunM,
}

const officeInJina = [
    {
        id:0,
        title:   "Improvement Development for the Sales support system",
        tenure:  "Oct/2020～Mar/2021",
        Pahases: "Basic Design, Detail Design, Development, Unit Test, Integration Test, Maintanance",
        Skill:   "java, javaScript, HTML, MySQL",
        point :  ["Maintanance a Stateful Web Application and Managing IT freelancer.",
                  "Analyzing Google Analytics.",
                  "Supervise five employees.",
                  "Assisted customers with purchasing in web site and Serving customer service.",
                  "Excute an Inventory Management and File a tax return.",
                ]
    },
]

const startJinaDate = new Date("Jan/01/2012");
const endJinaDate = new Date("Sep/04/2018");

const jinastory = {
    name : "JINA Story",
    startDate : startJinaDate,
    endDate : endJinaDate,
    numberofYear : calemployeDate(startJinaDate, endJinaDate),
    industry1 : "E-Commerce",
    industry2 : "Cosmetic retail(B2C)",
    employees : "6 (Sep/2018)",
    position : "CEO & Founder",
    works : officeInJina,
}

const workExperience = [
    {
        id : 0,
        company : "SUNM System",
        detail : sunmsystem,
    },
    {
        id : 1,
        company : "JINA Story",
        detail : jinastory,
    },
]


function calemployeDate(startDate, endDate) {
    const day = (endDate - startDate) / (1000*60*60*24);

    const year = Math.floor(day /365);
    const month = Math.floor(day % 365 / 30) + 1 ;
    return year + (year > 1 ? "Years" : "Year") + " " +
           month + (month> 1 ? "Months" : "Month"); 
}

export default workExperience;
