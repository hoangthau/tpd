const express = require('express');
const router = express.Router();
const Task = require('../models/task');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});


router.route('/tasks')
  .get(function(req, res){
    Task.find(function(err, tasks){
      if(err)
        res.send(err);

      res.json(tasks);
    })    
  })
  .post(function(req, res){
    var task = new Task();
    task.title = req.body.title;
    task.isDone = false;

    task.save(function(err){
      if(err)
        res.send(err);

      res.json({message: 'Task created!', req: req.body});
    })
  });

router.route('/task/:task_id')
  .get(function(req, res){
    Task.findById(req.params.task_id, function(err, task){
      if(err)
        res.send(err);

      res.json(task);
    })
  })
  .put(function(req, res){
    Task.findById(req.params.task_id, function(err, task){
      if(err)
        res.send(err);

      task.isDone = req.body.isDone;

      task.save(function(err){
        if(err)
          res.send(err)
        
        res.json({message: 'Task updated'});
      })
    })
  })
  .delete(function(req, res){
    Task.remove({
      _id: req.params.task_id
    }, function(err, task){
      if(err)
        res.send(err);

      res.json({message: 'Successfully deletected'});
    })
  });


module.exports = router;