const data = [
    {
        course: "Conversion Tracking for Digital Marketing",
        instructor: "Mark Meyerson",
        image: "https://udemy-images.udemy.com/course/240x135/1710182_ec9b_4.jpg",
    },
    {
        course: "The Complete Digital Marketing Course - 12 Courses in 1",
        instructor: "Rob Percival, Daragh Walsh, Codestars by Rob Percival",
        image: "https://udemy-images.udemy.com/course/240x135/914296_3670_8.jpg",
    },
    {
        course: "Digital Marketing Masterclass - 23 Courses in 1",
        instructor: "Phil Ebiner, Diego Davila, Video School Online Inc",
        image: "https://udemy-images.udemy.com/course/240x135/1270870_8e95_13.jpg",
    },
    {
        course: "The Complete Digital Marketing Guide - 17 Courses in 1",
        instructor: "Robin & Jesper",
        image: "https://udemy-images.udemy.com/course/240x135/1659676_128a_7.jpg",
    },
]

// const allData = [
//     <Data key='1' course={data[0].course} instructor={data[0].instructor} image={data[0].image}/>,
//     <Data key='2' course={data[1].course} instructor={data[1].instructor} image={data[1].image}/>,
//     <Data key='3' course={data[2].course} instructor={data[2].instructor} image={data[2].image}/>,
//     <Data key='4' course={data[3].course} instructor={data[3].instructor} image={data[3].image}/>,
// ]

// ReactDOM.render(
//     <div className="container">
//             {allData}
//     </div>,
//     document.querySelector('#root')
// )

ReactDOM.render(
    <div className="container">
        <Data data={data} />
    </div>,
    document.querySelector('#root')
)