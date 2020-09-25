'use strict'

class TaskController {

    index({ view }) {

        const tasks = [
            {title: 'Task One', body: 'This is task one'},
            {title: 'Task two', body: 'This is task two'},
        ];

        return view.render('tasks', {
            title: 'Latest task',
            tasks: tasks
        });
    
    }

}

module.exports = TaskController
