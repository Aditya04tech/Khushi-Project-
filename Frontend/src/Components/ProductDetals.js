import React,{useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { ChevronDown, ChevronUp, Check } from "lucide-react";


const courses = [
  {
    id: "1",
    title: "Ultimate AWS Certified Solutions Architect Associate 2025",
    rating: 4.7,
    students: 1053550,
    price: 3499,  
    hours: 27.5,
    updatedDate: "12/2024",
    isBestseller: true,
    thumbnail: "https://via.placeholder.com/80"
  },
  {
    id: "2",
    title: "[NEW] Ultimate AWS Certified Cloud Practitioner CLF-C02 2025",
    rating: 4.7,
    students: 1066157,
    price: 3499,
    hours: 15,
    updatedDate: "12/2024",
    isBestseller: true,
    thumbnail: "https://via.placeholder.com/80"
  },
  {
    id: "3",
    title: "Ultimate AWS Certified Solutions Architect Professional 2025",
    rating: 4.6,
    students: 186086,
    price: 3999,
    hours: 17,
    updatedDate: "12/2024",
    isBestseller: true,
    thumbnail: "https://via.placeholder.com/80"
  },
  {
    id: "4",
    title: "[NEW] Ultimate AWS Certified AI Practitioner AIF-C01",
    rating: 4.8,
    students: 46179,
    price: 1499,
    hours: 10,
    updatedDate: "12/2024",
    isBestseller: true,
    thumbnail: "https://via.placeholder.com/80"
  },
  {
    id: "5",
    title: "Ultimate AWS Certified Security Specialty [NEW 2025] SCS-C02",
    rating: 4.6,
    students: 43518,
    price: 3499,
    hours: 16,
    updatedDate: "12/2024",
    isBestseller: true,
    thumbnail: "https://via.placeholder.com/80"
  },
  {
    id: "6",
    title: "Amazon Web Services (AWS) Certified - 4 Certifications!",
    rating: 4.5,
    students: 159006,
    price: 4999,
    hours: 46,
    updatedDate: "5/2024",
    isBestseller: false,
    thumbnail: "https://via.placeholder.com/80"
  }
];

const ProductDetails = () => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [expandedSections, setExpandedSections] = useState([]);
 

  const sections = [
    { id: "section-1", title: "Course Introduction - AWS Certified Developer Associate", lectures: 6, duration: "10min" },
    { id: "section-2", title: "Code & Slides Download", lectures: 1, duration: "1min" },
    { id: "section-3", title: "Getting started with AWS", lectures: 3, duration: "14min" },
    { id: "section-4", title: "IAM & AWS CLI", lectures: 19, duration: "56min" },
    { id: "section-5", title: "EC2 Fundamentals", lectures: 15, duration: "1hr 28min" },
    { id: "section-6", title: "EC2 Instance Storage", lectures: 13, duration: "56min" },
    { id: "section-7", title: "AWS Fundamentals: ELB + ASG", lectures: 19, duration: "1hr 36min" },
    { id: "section-8", title: "AWS Fundamentals: RDS + Aurora + ElastiCache", lectures: 11, duration: "1hr 6min" },
    { id: "section-9", title: "Route 53", lectures: 20, duration: "1hr 30min" },
    { id: "section-10", title: "VPC Fundamentals", lectures: 6, duration: "25min" },
  ];

  const totalSections = 34;
  const totalLectures = 466;
  const totalDuration = "32h 58m";

  const handleExpandAll = () => {
    if (expandedSections.length === sections.length) {
      setExpandedSections([]);
    } else {
      setExpandedSections(sections.map((section) => section.id));
    }
  };

  const toggleSection = (id) => {
    if (expandedSections.includes(id)) {
      setExpandedSections(expandedSections.filter((sectionId) => sectionId !== id));
    } else {
      setExpandedSections([...expandedSections, id]);
    }
  };


  const learningPoints = [
    {
      text: "Pass the AWS Certified Developer Associate Certification (DVA-C02)",
    },
    { text: "All 700+ slides available as downloadable PDF" },
    {
      text: "Deploy an application using Elastic Beanstalk and AWS CICD tools with full automation",
    },
    { text: "Write infrastructure as code using AWS CloudFormation" },
    { text: "Master the CLI, SDK and IAM security best practices in EC2" },
    {
      text: "Secure your entire AWS Cloud using KMS, Encryption SDK, IAM Policies & SSM",
    },
    { text: "Full Practice Exam with Explanations included!" },
    {
      text: "Apply the right AWS services for your future real-world AWS projects",
    },
    {
      text: "Understand Serverless API using AWS Lambda, API Gateway, DynamoDB & Cognito",
    },
    {
      text: "Implement messaging and integration patterns using AWS SQS, SNS & Kinesis",
    },
    {
      text: "Monitor, Trace and Audit your microservices using CloudWatch, X-Ray and CloudTrail",
    },
  ];

  const visiblePoints = isExpanded
    ? learningPoints
    : learningPoints.slice(0, 6);

  const styles = {
    container: {},
    header: {
      backgroundColor: "#212529",
      color: "#fff",
      padding: "16px",

      marginTop: "150px",
    },
    H2: {},
    title: {
      fontSize: "1.75rem",
      marginBottom: "12px",
    },
    subtitle: {
      color: "#ffc107",
      marginBottom: "8px",
    },
    badge: {
      backgroundColor: "#ffc107",
      color: "#000",
      padding: "4px 8px",
      borderRadius: "4px",
      marginRight: "8px",
      fontWeight: "bold",
    },
    card2: {
      backgroundColor: "#fff",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      position: "sticky", // Makes the bar sticky
      top: "150px", // Distance from the top of the viewport
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    card3: {
      backgroundColor: "#fff",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",

      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    buttonPrimary: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "10px 16px",
      borderRadius: "4px",
      border: "none",
      width: "100%",
      marginBottom: "12px",
    },
    buttonLight: {
      backgroundColor: "#f8f9fa",
      color: "#000",
      padding: "8px 12px",
      borderRadius: "4px",
      border: "1px solid #ced4da",
      marginRight: "8px",
    },
    inputGroup: {
      display: "flex",
      alignItems: "center",
      marginTop: "12px",
    },
    input: {
      flex: 1,
      padding: "8px",
      border: "1px solid #ced4da",
      borderRadius: "4px",
    },
    inputButton: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "8px 16px",
      border: "none",
      borderRadius: "4px",
      marginLeft: "8px",
    },

    card: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "24px",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "24px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr", // Two columns
      gap: "16px",
    },
    listItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
    },
    icon: {
      marginTop: "4px",
      color: "#007bff", // Primary color
    },
    text: {
      fontSize: "0.875rem", // Small text
      lineHeight: "1.5",
    },
    button: {
      background: "none",
      border: "none",
      color: "#007bff",
      fontWeight: "600",
      fontSize: "0.875rem",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "4px",
      marginTop: "24px",
    },
    buttonIcon: {
      width: "16px",
      height: "16px",
    },
    b1:{
      backgroundColor: "#ddd", // Corrected to camelCase
      border: "none",
      color: "black",
      padding: "10px 20px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      margin: "4px 2px",
      cursor: "pointer",
      borderRadius: "16px", // Corrected to camelCase
    },
   
    container: {
      backgroundColor: "#fff",
      border: "1px solid #d1d5db", // Equivalent to Tailwind's border-gray-300
      padding: "1.5rem",
      borderRadius: "0.5rem",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      maxWidth: "64rem",
      width: "100%",
    },
    heading: {
      fontSize: "1.125rem", // Equivalent to Tailwind's text-lg
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    paragraph: {
      color: "#4b5563", // Equivalent to Tailwind's text-gray-600
      marginBottom: "1rem",
    },
    link: {
      color: "#2563eb", // Equivalent to Tailwind's text-blue-600
      textDecoration: "underline",
    },
    logoRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "1rem", // Add spacing between images if needed
    },
    logo: {
      height: "2.5rem", // Equivalent to Tailwind's h-10
      objectFit: "contain",
    },

  };

  return (
    <>
      <Nav />

      <div style={styles.header}>
        <h1 style={styles.title}>
          Ultimate AWS Certified Developer Associate 2025 DVA-C02
        </h1>
        <p style={styles.subtitle}>
          Full Practice Exam with Explanations included! PASS the Amazon Web
          Services Certified Developer Certification DVA-C02
        </p>
        <div className="d-flex align-items-center">
          <span style={styles.badge}>Bestseller</span>
          <span className="text-warning fw-bold me-2">4.7</span>
          <span className="text-secondary">(106,309 ratings)</span>
          <span className="text-secondary ms-2">578,889 students</span>
        </div>
      </div>
      <div className="container  w-100">
        <div className=" row  mt-4" style={styles.H2}>
          <div className="col-md-8">
            <div style={styles.card}>
              <h5 className="fw-bold">
                Prepare for your certification with this course.{" "}
                <a href="#" className="text-info">
                  Learn more
                </a>
              </h5>
              <div className="d-flex align-items-center mt-3">
                <img
                  src="https://placehold.co/100x100"
                  alt="AWS badge"
                  className="me-3 rounded"
                />
                <span>AWS Certified Developer – Associate</span>
              </div>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <div style={styles.card}>
      <h2 style={styles.title}>What you'll learn</h2>
      <div style={styles.grid}>
        {visiblePoints.map((point, index) => (
          <div key={index} style={styles.listItem}>
            <Check style={styles.icon} />
            <span style={styles.text}>{point.text}</span>
          </div>
        ))}
      </div>
      {learningPoints.length > 6 && (
        <button style={styles.button} onClick={() => setIsExpanded(!isExpanded)}>
          Show {isExpanded ? "less" : "more"}
          {isExpanded ? (
            <ChevronUp style={styles.buttonIcon} />
          ) : (
            <ChevronDown style={styles.buttonIcon} />
          )}
        </button>
      )}
    </div>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Explore related topics</h2>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full" style={styles.b1}>
                  AWS Certified Developer - Associate
                </span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full"  style={styles.b1}>
                  IT Certifications
                </span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full"  style={styles.b1}>
                  IT & Software
                </span>
              </div>
            </div>
            <div>
            <div class="row">
    <div class="col-sm-6 p-3 text-dark">
    <div className="col-span-8 md:col-span-4 space-y-4">
        <div className="flex items-center space-x-3 p-2">
            <i className="fas fa-play-circle text-xl"></i>
            <span>33 hours on-demand video</span>
        </div>
        <div className="flex items-center space-x-3 p-2">
            <i className="fas fa-closed-captioning text-xl"></i>
            <span>Closed captions</span>
        </div>
        <div className="flex items-center space-xl-3 p-2">
            <i className="fas fa-question-circle text-xl "></i>
            <span>1 practice test</span>
        </div>
        <div className="flex items-center space-x-3">
            <i className="fas fa-audio-description text-xl p-2"></i>
            <span>Audio description in existing audio</span>
        </div>
    </div>
    </div>
    <div class="col-sm-6 p-3 text-dark">
    <div className="col-span-8 md:col-span-4 space-y-4">
        
        <div className="flex items-center space-xl-3 p-2">
            <i className="fas fa-file-alt text-xl"></i>
            <span>9 articles</span>
        </div>
        <div className="flex items-center space-xl-3 p-2">
            <i className="fas fa-trophy text-xl"></i>
            <span>Certificate of completion</span>
        </div>
        <div className="flex items-center space-xl-3 p-2" >
            <i className="fas fa-mobile-alt text-xl"></i>
            <span>Access on mobile and TV</span>
        </div>
    </div>
    </div>
  </div>
            </div>
      
            {/*  */}
            <div style={styles.mainView}>
      <div style={styles.container}>
        <h2 style={styles.heading}>
          Top companies offer this course to their employees
        </h2>
        <p style={styles.paragraph}>
          This course was selected for our collection of top-rated courses
          trusted by businesses worldwide.{" "}
          <a href="#" style={styles.link}>
            Learn more
          </a>
        </p>
        <div style={styles.logoRow}>
          <img
            src="https://placehold.co/100x50?text=Nasdaq+Logo"
            alt="Nasdaq logo"
            style={styles.logo}
          />
          <img
            src="https://placehold.co/100x50?text=VW+Logo"
            alt="Volkswagen logo"
            style={styles.logo}
          />
          <img
            src="https://placehold.co/100x50?text=Box+Logo"
            alt="Box logo"
            style={styles.logo}
          />
          <img
            src="https://placehold.co/100x50?text=NetApp+Logo"
            alt="NetApp logo"
            style={styles.logo}
          />
          <img
            src="https://placehold.co/100x50?text=Eventbrite+Logo"
            alt="Eventbrite logo"
            style={styles.logo}
          />
        </div>
      </div>
    </div>
            
            {/*  */}

           {/*  */}

           <div style={{ maxWidth: "768px", margin: "auto", padding: "16px" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>Course content</h1>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px", fontSize: "0.875rem", color: "#6b7280" }}>
        <div>
          {totalSections} sections • {totalLectures} lectures • {totalDuration} total length
        </div>
        <button
          style={{ background: "none", border: "none", color: "#3b82f6", fontWeight: "bold", cursor: "pointer" }}
          onClick={handleExpandAll}
        >
          {expandedSections.length === sections.length ? "Collapse" : "Expand"} all sections
        </button>
      </div>
      <div style={{ border: "1px solid #d1d5db", borderRadius: "8px" }}>
        {sections.map((section) => (
          <div key={section.id} style={{ borderBottom: "1px solid #d1d5db", padding: "16px" }}>
            <div
              onClick={() => toggleSection(section.id)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <span style={{ fontWeight: "bold" }}>{section.title}</span>
              <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>
                {section.lectures} lectures • {section.duration}
              </span>
            </div>
            {expandedSections.includes(section.id) && (
              <div style={{ marginTop: "8px", fontSize: "0.875rem", color: "#6b7280" }}>
                Course content for {section.title}
              </div>
            )}
          </div>
        ))}
      </div>
      <button 
      className="text-dark"
        style={{
        
          display: "block",
          width: "100%",
          marginTop: "16px",
          padding: "8px 16px",
          border: "1px solid #d1d5db",
          borderRadius: "8px",
          backgroundColor: "#ffffff",
          cursor: "pointer",
          
        }}
        onClick={() => alert("Show more sections clicked")}
      >
        24 more sections
      </button>
    </div>
           {/*  */}
           

           {/*  */}
           <div className="max-w-3xl mx-auto  shadow-md p-4">
  <div className="border-b mb-4">
       <h2 className="text-2xl font-bold">Requirements</h2>
  </div>
  <div className="space-y-6">
    <ul className="list-disc pl-6 space-y-2">
      <li>Know the basics of programming (functions, environment variables, CLI & JSON)</li>
      <li>No AWS cloud experience is necessary; we'll use the AWS Free Tier</li>
      <li>Windows / Linux / Mac OS X Machine</li>
    </ul>

    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Description</h2>
      <div className="relative">
        <div className={`space-y-3 ${isExpanded ? '' : 'max-h-[300px] overflow-hidden'}`}>
          <p className="font-medium">
            Welcome! I'm here to help you prepare and PASS the newest AWS Certified Developer
            Associate exam.
          </p>
          <div className="space-y-3">
            <div className="space-y-2">
              <p>
                <strong>[DVA-C02 - February 2023 Update]:</strong> Over 60 videos have been
                refreshed/added to keep up with DVA-C02 exam changes
              </p>
              <p>
                <strong>[April 2022 Update]:</strong> Over 30 videos have been refreshed/added to
                keep up with the AWS UI changes and exam changes
              </p>
              <p>
                <strong>[April 2021 Update]:</strong> Over 100 videos have been refreshed/added to
                keep up with the AWS UI changes and exam changes
              </p>
            </div>

            {isExpanded && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <p>
                    <strong>[Dec 2020 Update]:</strong> The S3 section has been entirely
                    re-recorded to accommodate for the AWS UI changes
                  </p>
                  <p>
                    <strong>[May 2020 Update]:</strong> Over 200 lectures have been added or
                    refreshed, bringing the course to 29 hours of content
                  </p>
                  <p>
                    <strong>[July 2019 Update]:</strong> Over 30 lectures added and refreshed (~2h
                    of video)! The course is now up to date on the newest exam topics.
                  </p>
                  <p>
                    <strong>[Feb 2019 Update]:</strong> Keeping the course updated! Added full
                    section on ECS (1h15m)
                  </p>
                </div>
                <div className="space-y-4 pt-4">
                  <p className="font-medium">
                    The AWS Certified Developer Associate certification is one of the most
                    challenging exams. It's great at assessing how well you understand not just
                    AWS, but the new cloud paradigms such as Serverless, which makes this
                    certification incredibly valuable to have and pass. Rest assured, I've passed
                    it myself with a score of 984 out of 1000. Yes, you read that right, I only
                    made one mistake! Next, I want to help YOU pass the AWS Certified Developer
                    Associate certification with flying colors. No need to know anything about
                    AWS, beginners welcome!
                  </p>
                  <p className="italic">
                    This is going to be a long journey, but passing the AWS Certified Developer
                    exam will be worth it!
                  </p>
                  <div>
                    <p className="font-medium mb-2">
                      This course is different from the other ones you'll find on Udemy. Dare I
                      say, better (but you'll judge!)
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        It covers in-depth all the new topics on the AWS Certified Developer
                        Associate DVA-C02 exam
                      </li>
                      <li>
                        It's packed with practical knowledge on how to use AWS inside and out as a
                        developer
                      </li>
                      <li>
                        It teaches you how to prepare for the AWS exam AND how to prepare for the
                        real world
                      </li>
                      <li>
                        It's a logical progression of topics, not a laundry list of random
                        services
                      </li>
                      <li>It's fast-paced and to the point</li>
                      <li>It has professional subtitles</li>
                      <li>All 400+ slides available as downloadable PDF</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-white/80 backdrop-blur-sm pointer-events-none" />
        )}
        <div className="mt-4 flex justify-center">
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800 transition-colors duration-200"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

           {/*  */}


           {/*  */}
           

           {/*  */}



          </div>
          <div className="col-md-4" style={styles.rightbar}>
            <div style={styles.card2}>
              <img
                src="https://placehold.co/300x200"
                alt="Course preview"
                className="w-100 rounded mb-3"
              />
              <div className="mb-2">
                <span className="h4 fw-bold me-2">₹449</span>
                <span className="text-muted text-decoration-line-through">
                  ₹3,999
                </span>
                <span className="text-danger ms-2">89% off</span>
              </div>
              <p className="text-danger mb-3">13 hours left at this price!</p>
              <button style={styles.buttonPrimary}>Add to cart</button>
              <p className="text-center text-muted small mb-3">
                30-Day Money-Back Guarantee
              </p>
              <div className="d-flex justify-content-between">
                <button style={styles.buttonLight}>Share</button>
                <button style={styles.buttonLight}>Gift this course</button>
                <button style={styles.buttonLight}>Apply Coupon</button>
              </div>
              <div style={styles.inputGroup}>
                <input
                  type="text"
                  style={styles.input}
                  placeholder="Enter Coupon"
                />
                <button style={styles.inputButton}>Apply</button>
              </div>
              <p className="text-center text-muted small mt-3">
                Subscribe to Udemy's top courses
              </p>
              <p className="text-center text-muted small">
                Get this course, plus 12,000+ of our top-rated courses with a
                subscription
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetails;
