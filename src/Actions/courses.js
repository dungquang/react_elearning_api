import * as Types from '../Constants/index'
// import api from '../Api/index'

// export const getCourses = ()=>{
//     return (dispatch)=>{
//         api 
//         .get("QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
//         .then((result)=>{
//             dispatch({
//                 type:Types.GET_COURSES,
//                 payload:result.data
//             })
//         })
//         .catch(err => console.log(err.message))
//     }
// };
export const getCourses = (courses) => {
    return {
        type:Types.GET_COURSES,
        payload:courses
    }
    
}


// có thể viết theo cú pháp es6

/*
=>({
    type:Types.GET_COURSES,
        payload:courses
})

*/