//   /app/controllers/studentController.ts
import * as mongoose from 'mongoose';
import { StudentSchema } from '../models/student';
import { Request, Response } from 'express';

const StudentMongooseModel = mongoose.model('Student', StudentSchema);

export class StudentController { 

    public addNewStudent (req: Request, res: Response) {                
        let newStudent = new StudentMongooseModel(req.body);

       newStudent.save((err, data) => {
            if (err){
                res.send(err);
            }    
            res.json(data);
        });
    }

    public getStudents (req: Request, res: Response) {           
        StudentMongooseModel.find({}, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

    public getStudentById (req: Request, res: Response) {           
        StudentMongooseModel.findById(req.params.studentId, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

    public updateStudent (req: Request, res: Response) {           
        StudentMongooseModel.findOneAndUpdate({ _id: req.params.studentId }, req.body, { new: true }, 
            (err, data) => {
            if (err){
                res.send(err);
            }
            res.json(data);
        });
    }

    public deleteStudent (req: Request, res: Response) {           
        StudentMongooseModel.findOneAndRemove({ _id: req.params.studentId }, (err, data) => {
            if (err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted student!'});
        });
    }

    public generateDummyData (req: Request, res: Response) {     
        var data = [
            {
            "FirstName":"Sally",
            "LastName":"Baker",
            "School":"Mining",
            "StartDate": new Date("2012-02-20T08:30:00")
            },{
            "FirstName":"Jason",
            "LastName":"Plumber",
            "School":"Engineering",
            "StartDate": new Date("2018-03-17T17:32:00")
            },{
            "FirstName":"Sue",
            "LastName":"Gardner",
            "School":"Political Science",
            "StartDate": new Date("2014-06-20T08:30:00")
            },{
            "FirstName":"Linda",
            "LastName":"Farmer",
            "School":"Agriculture",
            "StartDate": new Date("2014-06-20T08:30:00")
            },{
            "FirstName":"Fred",
            "LastName":"Fisher",
            "School":"Environmental Sciences",
            "StartDate": new Date("2017-10-16T17:32:00")
            }
        ];
          
        StudentMongooseModel.collection.insert(data, function (err, docs) { 
            if (err){
                res.send(err);
            }
            res.json({ message: 'Successfully generated 5 sample documents!'});
        });
    
    }
}
