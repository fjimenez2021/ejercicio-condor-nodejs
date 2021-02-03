import express from "express";
import * as studentService from "../services/StudentService";

const routerStudent = express.Router();

routerStudent.get("/students",async (req,res)=>{
    studentService.findAllStudent().then((students)=>{
        res.status(200).json(students);
    }).catch((err)=>{
        res.status(500).send({ error: err, message: err.message });
    });
});

routerStudent.get("/students/:id",async (req,res)=>{
    let id = req.params.id;
    studentService.findStudentById(id).then((students)=>{
        if (students === null || students.length === 0) {
            res.sendStatus(404);
        } else {
            res.status(200).json(students[0]);
        }
    }).catch((err)=>{
        res.status(500).send({ error: err, message: err.message });
    });
});

routerStudent.post("/students",async (req,res)=>{
    let newStudent = req.body;
    studentService.createStudent(newStudent).then((id)=>{
        newStudent.id = id;
        res.status(200).json(newStudent);
    }).catch((err)=>{
        res.status(500).send({ error: err, message: err.message });
    });
});

routerStudent.put("/students/:id", async (req, res) => {
    let id = req.params.id;
    let estudent = req.body;
    studentService.updateStudent(id,estudent).then((result)=>{
        if(result===1){
            res.status(200).json(estudent);
        }else{
            res.status(404).send({ error: `Student with ${id} not found` });
        }
    }).catch((err)=>{
        res.status(500).send({ error: err, message: err.message });
    });
});

routerStudent.delete("/students/:id", async (req, res) => {
    let id = req.params.id;
    studentService.deleteStudent(id).then((result)=>{
        if(result===1){
            res.sendStatus(200);
        }else{
            res.status(201).send("No Content");
        }
        res.sendStatus(200);
    }).catch((err)=>{
        res.status(500).send({ error: err, message: err.message });
    });
});

module.exports = routerStudent;
