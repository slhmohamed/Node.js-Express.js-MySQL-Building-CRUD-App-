const express=require('express')
const router=express.Router()

const{getStudents,getStudentById,addStudent,updateStudent,deleteStudent
}=require('../controllers/studentController')

router.get('/allStudents',getStudents)
router.get('/getSingleStudent/:id',getStudentById)
router.post('/newStudent',addStudent)
router.put('/updateStudent/:id',updateStudent)
router.delete('/deleteStudent/:id',deleteStudent)
module.exports={
    router:router
} 