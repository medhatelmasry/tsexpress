// /app/routes/index.ts
import {Request, Response} from "express";
import {StudentController} from '../controllers/studentController';

export class Routes { 

    studentController: StudentController = new StudentController();

    public routes(app: any): void { 
        app.route('/')
            .get((req: Request, res: Response) => {            
                res.status(200).send('Hello Good World!');
        });  
        
        // Get all students
        app.route('/api/students')
            .get(this.studentController.getStudents);

        // Create a new student
        app.route('/api/students')
            .post(this.studentController.addNewStudent);

        // get a specific student
        app.route('/api/students/:studentId')
            .get(this.studentController.getStudentById);

        // update a specific student
        app.route('/api/students/:studentId')
            .put(this.studentController.updateStudent);
        
        // delete a specific student
        app.route('/api/students/:studentId')
            .delete(this.studentController.deleteStudent);
        
        // generate dummy data
        app.route('/api/dummy')
            .get(this.studentController.generateDummyData);

    }
}
