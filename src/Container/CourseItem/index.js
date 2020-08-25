import React, { Component } from 'react'

export default class CourseItem extends Component {
    render() {
        console.log(this.props.course);
        return (
            <div className="card mb-5">
                <img className="card-img-top" src={this.props.course.hinhAnh} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{this.props.course.tenKhoaHoc}</h4>
                    <p className="card-text">{this.props.course.nguoiTao.hoTen}</p>
                </div>
            </div>
        )
    }
}
