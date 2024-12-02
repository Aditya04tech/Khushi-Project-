import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Custom arrow component for left (previous) arrow
const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <button
            className={`slick-prev slick-arrow ${className}`}
            onClick={onClick}
            style={{ ...arrowStyle, left: '-35px' }}
        >
            <i className="fas fa-chevron-left"></i>
        </button>
    );
};

// Custom arrow component for right (next) arrow
const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <button
            className={`slick-next slick-arrow ${className}`}
            onClick={onClick}
            style={{ ...arrowStyle, right: '-35px' }}
        >
            <i className="fas fa-chevron-right"></i>
        </button>
    );
};

// Define custom arrow style
const arrowStyle = {
    position: 'absolute',
    top: '50%',
    zIndex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    transform: 'translateY(-50%)',
};

// CourseCard Component to display individual course cards
const CourseCard = ({ course }) => {
    return (
        <div className="card action-trigger-hover border bg-transparent">
            <img src={course.image} className="card-img-top" alt="course image" />
            {course.isFree && <div className="ribbon mt-3"><span>Free</span></div>}
            <div className="card-body pb-0">
                <div className="d-flex justify-content-between mb-3">
                    <span className="hstack gap-2">
                        <a href="#" className="badge bg-primary bg-opacity-10 text-primary">{course.category}</a>
                        <a href="#" className="badge text-bg-dark">{course.level}</a>
                    </span>
                    <a href="#" className="h6 fw-light mb-0"><i className="far fa-bookmark"></i></a>
                </div>
                <h5 className="card-title"><a href="#">{course.title}</a></h5>
                <div className="d-flex justify-content-between mb-2">
                    <div className="hstack gap-2">
                        <p className="text-warning m-0">{course.rating}<i className="fas fa-star text-warning ms-1"></i></p>
                        <span className="small">({course.reviews})</span>
                    </div>
                    <div className="hstack gap-2">
                        <p className="h6 fw-light mb-0 m-0">{course.students}</p>
                        <span className="small">(Student)</span>
                    </div>
                </div>
                <div className="hstack gap-3">
                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>{course.duration}</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>{course.lectures} lectures</span>
                </div>
            </div>
            <div className="card-footer pt-0 bg-transparent">
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm">
                            <img className="avatar-img rounded-1" src={course.instructor.image} alt="avatar" />
                        </div>
                        <p className="mb-0 ms-2"><a href="#" className="h6 fw-light mb-0">{course.instructor.name}</a></p>
                    </div>
                    <div>
                        <h4 className="text-success mb-0 item-show">{course.isFree ? "Free" : `$${course.price}`}</h4>
                        <a href="#" className="btn btn-sm btn-success-soft item-show-hover"><i className="fas fa-shopping-cart me-2"></i>Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main TrendingCourses component
const TrendingCourses = () => {
    const courses = [
        {
            image: "assets/images/courses/4by3/14.jpg",
            title: "The complete Digital Marketing Course - 8 Course in 1",
            category: "Design",
            level: "Beginner",
            rating: 4.5,
            reviews: 6500,
            students: 6500,
            duration: "6h 56m",
            lectures: 82,
            instructor: { name: "Larry Lawson", image: "assets/images/avatar/10.jpg" },
            isFree: true,
            price: 0
        },
        {
            image: "assets/images/courses/4by3/15.jpg",
            title: "Angular – The Complete Guide (2021 Edition)",
            category: "Development",
            level: "All level",
            rating: 4.0,
            reviews: 3500,
            students: 4500,
            duration: "12h 45m",
            lectures: 65,
            instructor: { name: "Billy Vasquez", image: "assets/images/avatar/04.jpg" },
            isFree: false,
            price: 255
        },
        // Add more courses here
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <section className="pb-5 pt-0 pt-lg-5">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="fs-1">Our Trending Courses</h2>
                        <p className="mb-0">Check out most 🔥 courses in the market</p>
                    </div>
                </div>
                <div className="row">
                    <div className="tiny-slider arrow-round arrow-blur arrow-hover">
                        <Slider {...sliderSettings}>
                            {courses.map((course, index) => (
                                <div key={index}>
                                    <CourseCard course={course} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrendingCourses;
