const mysql=require('../database/db')
const getStudents=async(req,res,next)=>{
    try{
        const students=await mysql.execute('SELECT * FROM student')
        res.status(200).send(students[0])
    }catch(err){
        res.status(400).send(error.message)
    }
}
const getStudentById=async(req,res,next)=>{
try
    {const id=req.params.id
    const student=await mysql.execute('SELECT * FROM student WHERE id=?',[id])
    res.status(200).send(student[0])
 
} catch(err){
    res.status(400).send(err.message)

}
}

const addStudent=async (req,res,async)=>{
    try{
            const data=req.body

            const student=await mysql.execute('INSERT INTO student (name,email,password) VALUES(?,?,?)',[
                data.name,
                data.email,
                data.password
            ])
res.status(200).send(student[0])
    }
    catch (err){
        res.status(400).send(err.message)

    }
}


const updateStudent=async (req,res,next)=>{
    try{
        const id=req.params.id
        const data=req.body

        const updateStudent=await mysql.execute('UPDATE student SET name=?,email=?,password=? WHERE id=?',[
            data.name,
            data.email,
            data.password,
            id
        ])
        res.status(200).send(updateStudent)
    }
    catch (err){
        res.status(400).send(err.message)
    }
}

const deleteStudent =async (req,res,next)=>{
    try{

        const id=req.params.id
        const stundet=await mysql.execute('DELETE FROM student WHERE id =?',[id])
res.status(200).send(stundet)
    }
    catch(err){

        res.status(400).send(err.message)

    }
}
module.exports={
    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent

}