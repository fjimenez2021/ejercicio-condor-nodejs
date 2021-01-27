import {knexMysql} from "../mysql-database";

const COLUMNS = ['id', 'name', 'email'];
const TABLE = 'student';
const FILTER_EMAIL = "email";
const FILTER_ID = "id";

export const createStudent = async (student)=>{
    return await knexMysql(TABLE).insert(student);
};

export const updateStudent = async (id,student)=>{
    delete student.id;
    return await knexMysql(TABLE).where(FILTER_ID, id).update(student)
};

export const deleteStudent = async (id)=>{
    return await knexMysql(TABLE).where(FILTER_ID, id).del();
};

export const findStudentById = async (id)=>{
    return await knexMysql.select(COLUMNS).from(TABLE).where(FILTER_ID, id);
};

export const findStudentByEmail = async (email)=>{
    return await knexMysql.select(COLUMNS).from(TABLE).where(FILTER_EMAIL, email);
};