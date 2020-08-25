import React, { Component } from 'react';
import api from '../../Api';
import { connect } from 'react-redux'
import { getCourses } from '../../Actions/courses'
import CourseItem from '../CourseItem';




class CourseList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courseList: []
        }
    }

    componentDidMount() {
        api
            .get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
            .then((result) => {
                this.setState({
                    courseList: result.data
                })
                this.props.getCourses(result.data)
            }).catch((err) => {
                console.log(err.message)
            });
    }

    render() {
        console.log(this.state.courseList);
        const elmCourse = this.state.courseList.map((course, index) => {
            return <div key={index} className="col-md-4">
                <CourseItem course={course} />
            </div>
        })
        return (
            <div className="container">
                <div className="row">
                    {elmCourse}
                </div>
            </div>
        )
    }
}
const mapstateToProps = (state) => {
    return {
        courseList: state.courseList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCourses: (courses) => {
            dispatch(getCourses(courses))
        }
    }
}





export default connect(mapstateToProps, mapDispatchToProps)(CourseList)

// tại sao ko get api trong CourseList Component mà lấy api trong Actions ??






