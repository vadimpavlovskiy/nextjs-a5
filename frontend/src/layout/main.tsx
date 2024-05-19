import Image from "next/image";
import photos from "@/import/image";
import { Tabs } from '@mantine/core';
import section_one from '../image/section_one_photo.jpg';
import team_photo from '../image/team-photo.jpg';
import { motion } from "framer-motion";
import Form from "./form";
import { Epilogue } from "next/font/google";
import { Inter } from "next/font/google";
import { useState } from "react";
import CardLayout from "./cardLayout";

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-epilogue',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Main () {
  const [opened, setOpened] = useState(true);
  const [activeTab, setActiveTab] = useState<string | null>('experts');
  
    return (
        <main className={`w-screen ${inter.className}`}>
            <section> 
      <div className="section-1 p-10">
        <p className="text-blue-700 font-bold">About Us</p>
        <h2 className={`w-1/2 capitalize text-5xl font-bold my-4 max-lg:w-full ${epilogue.className}`}>{`We're delivering only exceptional quality work`}</h2>
        <div className="flex items-center justify-between gap-6 max-lg:w-full max-lg:flex-col">
          <Image className="w-1/2 rounded-xl duration-500 max-lg:w-full	hover:scale-95" src={section_one} alt="dynamics A5 logo"  width={500} height={500} loading={'lazy'}/>
          <div className="flex flex-col w-1/2 gap-y-4 max-lg:w-full ">
            <p className="w-full max-lg:w-full">
                Welcome to A5 Solution, a Ukrainian-based company specializing in Dynamics 365 solutions and consulting services. Our team of 5 skilled professionals is dedicated to helping businesses of all sizes streamline their operations, increase efficiency, and achieve their goals.
            </p>
            <p className="w-full max-lg:w-full">
                With years of experience in the industry, we understand the unique challenges that businesses face, and we have the expertise and resources to help them overcome these challenges. Whether you need a custom Dynamics 365 solution or expert consulting services, we have the knowledge and skills to deliver results.
          </p>
            <p className="w-full max-lg:w-full">
                At A5 Solution, we are committed to providing personalized service and building long-term relationships with our clients. We take the time to understand your business needs and work closely with you to develop solutions that are tailored to your specific requirements.
          </p>
          </div>
        </div>
      </div>
    </section>
    <section className="flex flex-col p-10 bg-gray-100">
      <div className="flex flex-col items-end">
        <p className="text-blue-700 font-bold">Our achievements</p>
        <h2 className={`capitalize text-3xl font-bold my-4 ${epilogue.className}`}>Some of our archivements:</h2>
      </div>
      <div className="flex flex-wrap gap-20 justify-between">
        <div className="w-1/5 drop-shadow-2xl border-solid duration-500 border-2 flex  gap-y-3 py-5 flex-col items-center justify-center rounded-xl  bg-white hover:scale-95 hover:border-sky-500 max-md:w-full max-xl:w-1/3">
          <Image className="w-1/4" src={photos.communication} alt="DynamicsA5 communication" width={100} height={100} loading={'lazy'}/>
          <h3 className={`w-1/2 text-center text ${epilogue.className}`}>Consulted more than 100 clients</h3>
        </div>
        <div className="w-1/5 drop-shadow-2xl border-solid duration-500 border-2 flex gap-y-3 py-5 flex-col items-center justify-center rounded-xl bg-white hover:scale-95  hover:border-sky-500 max-md:w-full max-xl:w-1/3">
          <Image className="w-1/4" src={photos.apps} alt="count of launched projects by DynamicsA5" width={100} height={100} loading={'lazy'}/>
          <h3 className={`w-1/2 text-center text ${epilogue.className}`}>Launced around 30 projects</h3>
        </div>
        <div className="w-1/5 drop-shadow-2xl border-solid duration-500 border-2 flex gap-y-3 py-5 flex-col items-center justify-center rounded-xl bg-white hover:scale-95  hover:border-sky-500 max-md:w-full max-xl:w-1/3">
          <Image className="w-1/4" src={photos.worldwide} alt="we are working worldwide company" width={100} height={100} loading={'lazy'}/>
          <h3 className={`w-1/2 text-center text ${epilogue.className}`}>Working worldwide</h3>
        </div>
        <div className="w-1/5 drop-shadow-2xl flex border-solid duration-500 border-2 gap-y-3 py-5 flex-col items-center justify-center rounded-xl bg-white hover:scale-95 hover:border-sky-500 max-md:w-full max-xl:w-1/3">
          <Image className="w-1/4" src={photos.team} alt="only professionals in DynamicsA5" width={100} height={100} loading={'lazy'}/>
          <h3 className={`w-1/2 text-center text ${epilogue.className}`}>Professional team</h3>
        </div>
      </div>
    </section>
    <section> 
      <div className="section-1 p-10">
      <p className="text-blue-700 font-bold">Abous Us</p>
        <h2 className={`w-1/2 capitalize text-5xl font-bold my-4 max-lg:w-full ${epilogue.className}`}>Key Things About Us</h2>
        <div className="flex items-center justify-between gap-6 max-lg:flex-col-reverse">
          <div className="w-1/2 flex gap-y-10 flex-col max-lg:w-full">
          <p>
          At A5 Solution, we take pride in our ability to deliver customized Dynamics 365 solutions and expert consulting services that meet the unique needs of our clients. Most projects were dedicated to Dynamics 365 for Finance, Dynamics F&O. Based on our experience and background with Dynamics AX 2012. And good skills in both X++ and Power Platform development. Our team of 5 highly skilled professionals brings a wealth of knowledge and expertise to every project, and we are committed to providing personalized service and building long-term relationships with our clients.
          </p>
          <p>
          Whether you need help with implementation, customization, or ongoing support, we have the skills and resources to get the job done. We understand that every business is different, and we take the time to understand your unique needs and develop solutions that are tailored to your specific requirements. At A5 Solution, we are dedicated to helping our clients optimize their operations, increase efficiency, and achieve their goals.
          </p>
        </div>
        <Image className="w-1/2 rounded-xl duration-500 max-lg:w-full	hover:scale-95" src={team_photo} alt="key features that describe us"  width={500} height={500} loading={'lazy'}/>
        </div>
      </div>
    </section>
    <section className="w-full p-10 justify-around">
      <p className="text-blue-700 font-bold">Service</p>
      <h2 className={`w-1/2 capitalize text-5xl font-bold my-4 ${epilogue.className}`}>Provided Service</h2>
      <div className="flex flex-wrap justify-between md:gap-10 lg:gap-20">
        <div className="w-1/5 cursor-pointer group max-md:w-1/2 max-sm:w-full py-10 bg-sky-500  drop-shadow-2xl text-white border-solid duration-500  border-2 flex gap-y-3 flex-col items-center justify-center rounded-xl hover:scale-95  hover:border-sky-500">
          <Image className="w-1/4 group-hover:scale-125 group-hover:-translate-y-5 duration-500" src={photos.sales} alt="sales management" loading={'lazy'}/>
          <h3 className={`w-1/2 text-center text ${epilogue.className}`}>Sales Management</h3>
        </div>
        <div className="w-1/5 cursor-pointer group max-md:w-1/2 max-sm:w-full py-10 bg-sky-500  drop-shadow-2xl text-white border-solid duration-500 border-2 flex gap-y-3 flex-col items-center justify-center rounded-xl hover:scale-95  hover:border-sky-500">
          <Image className="w-1/4 group-hover:scale-125 group-hover:-translate-y-5 group-hover:rotate-180 duration-500" src={photos.customer} alt="customer service provided" loading={'lazy'}/>
          <h3 className={`w-1/2 text-center text ${epilogue.className}`}>Customer Service</h3>
        </div>
        <div className="w-1/5 cursor-pointer group max-md:w-1/2 max-sm:w-full py-10 bg-sky-500  drop-shadow-2xl text-white border-solid duration-500 border-2 flex gap-y-3 flex-col items-center justify-center rounded-xl hover:scale-95  hover:border-sky-500">
          <Image className="w-1/4 group-hover:scale-125 group-hover:-translate-y-5 duration-500" src={photos.field_service} alt="field service providing by our team" loading={'lazy'}/>
          <h3 className={`w-1/2 text-center text ${epilogue.className}`}>Field Service</h3>
        </div>
        <div className="w-1/5 cursor-pointer group max-md:w-1/2 max-sm:w-full py-10 bg-sky-500  drop-shadow-2xl text-white border-solid duration-500 border-2 flex gap-y-3 flex-col items-center justify-center rounded-xl hover:scale-95  hover:border-sky-500">
          <Image className="w-1/4 scale-y-90 group-hover:scale-y-125 group-hover:-translate-y-5 duration-500" src={photos.project} alt="we automizze projects" loading={'lazy'}/>
          <h3 className={`w-1/2 text-center text ${epilogue.className}`}>Project Service Automation</h3>
        </div>
        <div className="w-1/5 cursor-pointer group max-md:w-1/2 max-sm:w-full py-10 bg-sky-500  drop-shadow-2xl text-white border-solid duration-500 border-2 flex gap-y-3 flex-col items-center justify-center rounded-xl hover:scale-95  hover:border-sky-500">
          <Image className="w-1/4 group-hover:scale-125 group-hover:-translate-y-1 duration-500" src={photos.marketing} alt="marketing features" loading={'lazy'}/>
          <h3 className={`w-1/2 text-center text ${epilogue.className}`}>Marketing</h3>
        </div>
        <div className="w-1/5 cursor-pointer group max-md:w-1/2 max-sm:w-full py-10 bg-sky-500  drop-shadow-2xl text-white border-solid duration-500 border-2 flex gap-y-3 flex-col items-center justify-center rounded-xl hover:scale-95  hover:border-sky-500">
          <Image className="w-1/4 cursor-pointer group-hover:scale-125  group-hover:-translate-y-5 group-hover:-skew-y-6 duration-500" src={photos.perfomance} alt="finances are or main specialization" loading={'lazy'}/>
          <h3 className={`w-1/2 text-center text ${epilogue.className}`}>Finance and Operations</h3>
        </div>
        <div className="w-1/5 cursor-pointer group max-md:w-1/2 max-sm:w-full py-10 bg-sky-500  drop-shadow-2xl text-white border-solid duration-500 border-2 flex gap-y-3 flex-col items-center justify-center rounded-xl hover:scale-95  hover:border-sky-500">
          <Image className="w-1/4 group-hover:scale-125 group-hover:-translate-y-5 group-hover:-skew-y-6 duration-500" src={photos.retail} alt="retail features" loading={'lazy'}/>
          <h3 className={`w-1/2 text-center text ${epilogue.className}`}>Retail</h3>
        </div>
        <div className="w-1/5 cursor-pointer group max-md:w-1/2 max-sm:w-full py-10 bg-sky-500  drop-shadow-2xl text-white border-solid duration-500 border-2 flex gap-y-3 flex-col items-center justify-center rounded-xl hover:scale-95  hover:border-sky-500">
          <Image className="w-1/4 group-hover:scale-125 group-hover:-translate-y-5 duration-500" src={photos.consulting} alt="HR management" loading={'lazy'}/>
          <h3 className={`w-1/2 text-center text ${epilogue.className}`}>Human resource management</h3>
        </div>
      </div>
    </section>
    <section className="w-full p-10 flex-reverse flex-row justify-between gap-y-10 max-md:flex-col-reverse">
    <p className="w-full flex text-blue-700 font-bold justify-end pb-4 ">Our advantages</p>
    <Tabs value={activeTab} onTabChange={setActiveTab} keepMounted={false} orientation={'horizontal'} defaultValue="experts" >
      <Tabs.List grow>
        <Tabs.Tab onClick={() => {setTimeout(()=>{setOpened(true)}, 1000); if(opened && activeTab !== 'experts'){setOpened(!opened)}}} value="experts">Only Experts On The Team</Tabs.Tab>
        <Tabs.Tab onClick={() => {setTimeout(()=>{setOpened(true)}, 1000); if(opened && activeTab !== 'agreement'){setOpened(!opened)}}}value="agreement">Non-Disclosure Agreements</Tabs.Tab>
        <Tabs.Tab onClick={() => {setTimeout(()=>{setOpened(true)}, 1000); if(opened && activeTab !== 'security'){setOpened(!opened)}}} value="security">Your Security Is Our Priority</Tabs.Tab>
        <Tabs.Tab onClick={() => {setTimeout(()=>{setOpened(true)}, 1000); if(opened && activeTab !== 'quality'){setOpened(!opened)}}} value="quality">Quality Is Guaranteed</Tabs.Tab>
        <Tabs.Tab onClick={() => {setTimeout(()=>{setOpened(true)}, 1000); if(opened && activeTab !== 'results'){setOpened(!opened)}}} value="results">Great Results</Tabs.Tab>
        <Tabs.Tab onClick={() => {setTimeout(()=>{setOpened(true)}, 1000); if(opened && activeTab !== 'consulting'){setOpened(!opened)}}} value="consulting">Best Consulting</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="experts" pl="sm">
       <motion.div initial={{ y: -50, scaleZ: 0, display: 'none' }} animate={{ y: 10, scaleZ: '100%', display: 'block'  }} transition={{ duration: 1, type: "spring", stiffness: 100 }}>
      <div className="flex flex-col w-full p-10 gap-y-4">
       {`Our team includes Dynamics 365 specialists, developers, and consultants, each with a unique set of skills and expertise. This allows us to provide a comprehensive range of services, including custom implementation, integration, migration, and ongoing support, as well as expert consulting and training to help businesses get the most out of their Dynamics 365 investment.

       What sets our team apart is our focus on personalized service and customized solutions. We take the time to understand each client's unique needs and requirements, and work closely with them to develop solutions that are tailored to their specific needs. Our team is committed to delivering results quickly and efficiently, without sacrificing quality or attention to detail.
       
       Whether you need help with implementation, customization, or ongoing support, you can trust the experts at A5 Solution to deliver the results you need to succeed. Contact us today to learn more about how our team can help you achieve your goals.
`}
</div>
        </motion.div>
       </Tabs.Panel>
      <Tabs.Panel value="agreement" pl="sm">
      <motion.div initial={{ y: -50, scaleZ: 0, display: 'none' }} animate={{ y: 10, scaleZ: '100%', display: 'block'  }}  transition={{ duration: 1, type: "spring", stiffness: 100 }} >
      <div className="flex flex-col w-full p-10 gap-y-4">
        <p>
          {`At A5 Solution, we take the confidentiality and security of our clients' information very seriously. That's why we require all clients to sign a non-disclosure agreement (NDA) before we begin working together.

          Our NDA is a legal agreement between A5 Solution and our clients that outlines the terms and conditions of confidentiality for any information shared between the parties during the course of our work together. This includes any information related to business operations, financials, customer data, and other sensitive information.

          We understand that our clients rely on us to keep their information safe and secure, and we take this responsibility very seriously. Our NDA ensures that any information shared with us will remain confidential and will not be disclosed to any third party without the express written consent of our clients.
`}
       </p>
       </div>
       </motion.div>
       </Tabs.Panel>
       <Tabs.Panel value="security" pl="sm">
       <motion.div initial={{ y: -50, scaleZ: 0, display: 'none' }} animate={{ y: 10, scaleZ: '100%', display: 'block'  }}  transition={{ duration: 1, type: "spring", stiffness: 100 }} >
       <div className="flex flex-col w-full p-10 gap-y-4">
        <p>
        {`At A5 Solution, we understand that security is a top concern for businesses of all sizes. That's why we make it our priority to ensure that all of our clients' information is secure and protected at all times.

        We use industry-leading security measures to protect our clients' data, including encryption, firewalls, and multi-factor authentication. We also regularly monitor our systems for any potential security threats and take immediate action to address any issues that arise.

        In addition to these technical measures, we also have strict security policies in place to ensure that all of our employees and contractors understand their responsibilities when it comes to maintaining the security of our clients' information. We conduct regular security training sessions to ensure that everyone on our team is up-to-date on the latest security best practices and understands the importance of protecting our clients' data.

        We also understand that different clients may have different security requirements. That's why we work closely with each client to understand their specific needs and develop customized security solutions that meet their requirements.

        At A5 Solution, we are committed to providing our clients with the highest level of security and protection for their information. Contact us today to learn more about how we can help you keep your information secure and protected.`}
       </p>
       </div>
       </motion.div>
      </Tabs.Panel>
      <Tabs.Panel value="quality" pl="sm">
      <motion.div initial={{ y: -50, scaleZ: 0, display: 'none' }} animate={{ y: 10, scaleZ: '100%', display: 'block'  }}  transition={{ duration: 1, type: "spring", stiffness: 100 }} >
      <div className="flex flex-col w-full p-10 gap-y-4">
        <p>
        {`To ensure that we are delivering the highest quality solutions and services, we have a rigorous quality assurance process in place. This process includes testing and reviewing all of our solutions and services to ensure that they meet our clients' requirements and are free of errors or defects.

        We also work closely with our clients to understand their needs and requirements, and we take their feedback seriously. If there are any issues or concerns with our solutions or services, we take immediate action to address them and ensure that our clients are satisfied with the results.

        In addition to our quality assurance process, we also have a team of experts who are dedicated to staying up-to-date on the latest industry trends and best practices. This allows us to provide our clients with cutting-edge solutions and services that are designed to help them achieve their goals and stay ahead of the competition.`}
       </p>
       </div>
       </motion.div>
      </Tabs.Panel>
      <Tabs.Panel value="results" pl="sm">
      <motion.div initial={{ y: -50, scaleZ: 0, display: 'none' }} animate={{ y: 10, scaleZ: '100%', display: 'block'  }}  transition={{ duration: 1, type: "spring", stiffness: 100 }} >
      <div className="flex flex-col w-full p-10 gap-y-4">
        <p>
        {`We have a proven track record of delivering results for clients in a wide range of industries and sectors. Our solutions and services are designed to help our clients improve their productivity, reduce costs, and increase revenue.

        One of the keys to our success is our collaborative approach to working with our clients. We work closely with our clients to understand their needs and requirements, and we develop customized solutions and services that are tailored to their specific needs.

        We also understand the importance of measuring results and tracking progress. That's why we work with our clients to establish clear metrics and KPIs for each project, and we provide regular reports and updates on progress to ensure that our clients are fully informed and involved in the process.`}
       </p>
       </div>
       </motion.div>
      </Tabs.Panel>
      <Tabs.Panel value="consulting" pl="sm">
      <motion.div initial={{ y: -50, scaleZ: 0, display: 'none' }} animate={{ y: 10, scaleZ: '100%', display: 'block'  }}  transition={{ duration: 1, type: "spring", stiffness: 100 }} >
        <div className="flex flex-col w-full p-10 gap-y-4">
          <p>
          {`At A5 Solution, we are proud to offer our clients the best consulting services in the industry. Our team of experts has years of experience working with clients in a wide range of industries and sectors, and we are committed to helping our clients achieve their goals and overcome their challenges.
         Our consulting services are designed to help our clients improve their business operations, increase their productivity, and reduce costs. We work closely with our clients to understand their needs and requirements, and we develop customized solutions and strategies that are tailored to their specific needs.`}
         </p>
         <p>
          {`We have a proven track record of success in helping our clients achieve their goals. Our team of experts has the knowledge and expertise to help our clients navigate complex business challenges and find innovative solutions to their problems.
          In addition to our consulting services, we also offer a range of training and education programs to help our clients develop the skills and knowledge they need to succeed in today's fast-paced business environment.`}
          </p>
        </div>
        </motion.div>
       </Tabs.Panel>
    </Tabs>
     </section>
    {/* <CardLayout articles={articles} /> */}
  </main>
    )
}