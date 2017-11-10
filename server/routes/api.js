const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const User = require('../models/user');
const Story = require('../models/story');

const _ = require('lodash');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

//for task
router.route('/tasks')
  .get(function(req, res){
    Task.find(function(err, tasks){
      if(err)
        res.send(err);
      
      const userId = req.query.userId;
      let _tasks = tasks;
      if(userId){
        _tasks = _.filter(tasks, {'userId': userId});        
      }
      res.json(_tasks);
    })    
  })
  .post(function(req, res){
    var task = new Task();
    task.title = req.body.title;
    task.isDone = false;
    task.userId = req.body.userId;

    task.save(function(err){
      if(err)
        res.send(err);

      res.json({message: 'Task created!'});
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

//for user
router.route('/users')
  .get(function(req, res){
    User.find(function(err, tasks){
      if(err)
        res.send(err);

      res.json(tasks);
    })    
  })
  .post(function(req, res){
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.username = req.body.username;
    user.password = req.body.password;

    user.save(function(err){
      if(err)
        res.send(err);

      res.json({message: 'User created!'});
    })
  });

//for task
router.route('/stories')
  .get(function(req, res){
    Story.find(function(err, stories){
      if(err)
        res.send(err);
      
      const userId = req.query.userId;
      let _stories = stories;
      if(userId){
        _stories = _.filter(stories, {'userId': userId});        
      }
      res.json(_stories);
    })    
  })
  .post(function(req, res){
    var story = new Story();
    story.title = req.body.title;
    story.content = req.body.content;
    story.userId = req.body.userId;

    story.save(function(err){
      if(err)
        res.send(err);

      res.json({message: 'Story created!'});
    })
  });


module.exports = router;