import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {


     const param = useParams();
     console.log(param.id);
     
  return (
    <div>
      <h1>Course Detail about {param.id}</h1>
    </div>
  )
}

export default CourseDetail
