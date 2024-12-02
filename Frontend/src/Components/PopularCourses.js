import React, { useState } from 'react';

const PopularCourses = () => {
  const [activeTab, setActiveTab] = useState('Web Design'); // default tab

  const courses = {
    'Web Design': [
        {
            img: 'assets/images/courses/4by3/08.jpg',
            badge: 'All level',
            title: 'Sketch from A to Z: for app designer',
            description: 'Proposal indulged no do sociable he throwing settling.',
            rating: 4,
            time: '12h 56m',
            lectures: 15
          },
      {
        img: 'assets/images/courses/4by3/08.jpg',
        badge: 'All level',
        title: 'Sketch from A to Z: for app designer',
        description: 'Proposal indulged no do sociable he throwing settling.',
        rating: 4,
        time: '12h 56m',
        lectures: 15
      },
      {
        img: 'assets/images/courses/4by3/09.jpg',
        badge: 'Beginner',
        title: 'Mastering Adobe XD: From UI to UX Design',
        description: 'Learn how to use Adobe XD for user interface and experience design.',
        rating: 4.7,
        time: '8h 40m',
        lectures: 20
      },
      {
        img: 'assets/images/courses/4by3/10.jpg',
        badge: 'Intermediate',
        title: 'Advanced Web Design: HTML5 and CSS3 Techniques',
        description: 'Take your web design skills to the next level with advanced techniques.',
        rating: 4.5,
        time: '10h 25m',
        lectures: 18
      }
    ],
    'Development': [
      {
        img: 'assets/images/courses/4by3/03.jpg',
        badge: 'All level',
        title: 'Complete React Developer in 2024',
        description: 'Learn React by building real-world projects and mastering its ecosystem.',
        rating: 4.8,
        time: '18h 30m',
        lectures: 40
      },
      {
        img: 'assets/images/courses/4by3/08.jpg',
        badge: 'All level',
        title: 'Sketch from A to Z: for app designer',
        description: 'Proposal indulged no do sociable he throwing settling.',
        rating: 4,
        time: '12h 56m',
        lectures: 15
      },
      {
        img: 'assets/images/courses/4by3/04.jpg',
        badge: 'Beginner',
        title: 'Python Programming: A Comprehensive Guide',
        description: 'From the basics of Python to advanced applications.',
        rating: 4.6,
        time: '14h 45m',
        lectures: 35
      },
      {
        img: 'assets/images/courses/4by3/05.jpg',
        badge: 'Intermediate',
        title: 'Node.js, Express & MongoDB - Full-Stack Bootcamp',
        description: 'Learn full-stack development by building dynamic web applications.',
        rating: 4.7,
        time: '22h 10m',
        lectures: 50
      }
    ],
    'Graphic Design': [
      {
        img: 'assets/images/courses/4by3/02.jpg',
        badge: 'Beginner',
        title: 'Graphic Design Masterclass',
        description: 'Rooms oh fully taken by worse do Points afraid but may end Rooms.',
        rating: 4.5,
        time: '9h 56m',
        lectures: 65
      },
      {
        img: 'assets/images/courses/4by3/06.jpg',
        badge: 'All level',
        title: 'Adobe Illustrator CC 2024 Mastery',
        description: 'Master Adobe Illustrator with practical projects and in-depth tutorials.',
        rating: 4.8,
        time: '12h 30m',
        lectures: 30
      },
      {
        img: 'assets/images/courses/4by3/08.jpg',
        badge: 'All level',
        title: 'Sketch from A to Z: for app designer',
        description: 'Proposal indulged no do sociable he throwing settling.',
        rating: 4,
        time: '12h 56m',
        lectures: 15
      },
      {
        img: 'assets/images/courses/4by3/07.jpg',
        badge: 'Intermediate',
        title: 'Branding and Logo Design with Photoshop',
        description: 'Create professional logos and branding materials with Adobe Photoshop.',
        rating: 4.6,
        time: '11h 20m',
        lectures: 28
      }
    ],
    'Marketing' :
    [
      {
        img: 'assets/images/courses/4by3/01.jpg',
        badge: 'Beginner',
        title: 'Digital Marketing Masterclass',
        description: 'Delivered dejection necessary objection do Mr prevailed.',
        rating: 4.5,
        time: '6h 56m',
        lectures: 82
      },
      {
        img: 'assets/images/courses/4by3/08.jpg',
        badge: 'All level',
        title: 'Sketch from A to Z:for app designer',
        description: 'Proposal indulged no do sociable he throwing settling.',
        rating: 4.0,
        time: '12h 56m',
        lectures: 15
      }
   ],
       'Finance' : 
       [
           
            {
              img: 'assets/images/courses/4by3/04.jpg',
              badge: 'All level',
              title: 'Learn Invision',
              description: 'Arrived off she elderly beloved him Course regard to up he hardly.',
              rating: 3.5,
              time: '6h 56m',
              lectures: 82
            },
            {
              img: 'assets/images/courses/4by3/09.jpg',
              badge: 'All level',
              title: 'JavaScript: full Understanding',
              description: 'Far advanced settling say finished raillery. Offered cheifly farther.',
              rating: 5.0,
              time: '35h 20m',
              lectures: 89
            }
          ]
  
  };

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <section>
      <div className="container">
        {/* Title */}
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto text-center">
            <h2 className="fs-1">Most Popular Courses</h2>
            <p className="mb-0">Choose from hundreds of courses from specialist organizations</p>
          </div>
        </div>

        {/* Tabs */}
        <ul className="nav nav-pills nav-pills-bg-soft justify-content-sm-center mb-4 px-3">
          {['Web Design', 'Development', 'Graphic Design', 'Marketing', 'Finance'].map((tabName) => (
            <li className="nav-item me-2 me-sm-5" key={tabName}>
              <button
                className={`nav-link mb-2 mb-md-0 ${activeTab === tabName ? 'active' : ''}`}
                onClick={() => handleTabChange(tabName)}
              >
                {tabName}
              </button>
            </li>
          ))}
        </ul>

        {/* Courses content */}
        <div className="tab-content">
          {activeTab in courses && (
            <div className="row g-4">
              {courses[activeTab].map((course, index) => (
                <div className="col-sm-6 col-lg-4 col-xl-3" key={index}>
                  <div className="card shadow h-100">
                    <img src={course.img} className="card-img-top" alt="course image" />
                    <div className="card-body pb-0">
                      <div className="d-flex justify-content-between mb-2">
                        <a href="#" className={`badge bg-purple bg-opacity-10 text-purple`}>{course.badge}</a>
                        <a href="#" className="h6 mb-0"><i className="far fa-heart"></i></a>
                      </div>
                      <h5 className="card-title fw-normal"><a href="#">{course.title}</a></h5>
                      <p className="mb-2 text-truncate-2">{course.description}</p>
                      <ul className="list-inline mb-0">
                        {[...Array(5)].map((star, i) => (
                          <li className="list-inline-item me-0 small" key={i}>
                            <i className={i < Math.floor(course.rating) ? "fas fa-star text-warning" : i < course.rating ? "fas fa-star-half-alt text-warning" : "far fa-star text-warning"}></i>
                          </li>
                        ))}
                        <li className="list-inline-item ms-2 h6 fw-light mb-0">{course.rating}/5.0</li>
                      </ul>
                    </div>
                    <div className="card-footer pt-0 pb-3">
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>{course.time}</span>
                        <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>{course.lectures} lectures</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
