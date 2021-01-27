import * as studentService from "../src/services/StudentService";
import {connectMysql,closeMysql} from "../src/mysql-database";

beforeAll(async (done) => {
    await connectMysql();
    done();
});

afterAll(async (done) => {
    await closeMysql();
    done();
});

describe("Filter function students", () => {
    test("it should get student by id", async (done) => {
        
        let input = 1;
        let output = "fjimenez@condorlabs.io";
        let students = await studentService.findStudentById(input);
        expect(students.length).toBeGreaterThan(0);

        let student = students[0];
        expect(student.email).toBe(output);

        done();
    });
    test("it should add student", async (done) => {
        
        let newStudent = {
            "name": "Pedro Perez",
            "email": "pperez@condorlabs.io"
        }
        let result = await studentService.findStudentByEmail(newStudent.email);
        if(result.length==0){
            let id = await studentService.createStudent(newStudent);
            expect(id).not.toBeNull();
        }
        done();
    });

    test("it should edit student", async (done) => {

        let updateStudent = {
            "name": "Pedro Alvarez",
            "email": "pperez@condorlabs.io"
        }
        let students = await studentService.findStudentByEmail(updateStudent.email);
        expect(students.length).toBeGreaterThan(0);
        let id = students[0].id;
        let result = await studentService.updateStudent(id,updateStudent);
        expect(result).toBe(1);
        done();
    });

    test("it should delete student", async (done) => {
        let email = "pperez@condorlabs.io";

        let students = await studentService.findStudentByEmail(email);
        expect(students.length).toBeGreaterThan(0);

        let id = students[0].id;
        let result = await studentService.deleteStudent(id);
        expect(result).toBe(1);
        done();
    });
});