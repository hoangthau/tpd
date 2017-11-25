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

//for login
router.route('/login')
  .post(function (req, res) {
    User.find(function (err, users) {
      if (err)
        res.send(err);
        
      const username = req.body.username;
      const password = req.body.password;
      const user = _.filter(users, { username: username })[0];
      if (!user) {
        res.json({ message: 'Incorrect username!' });
      } else if (user.password === password) {
        const currentUser = {
          _id: user._id,
          username: user.username,
          email: user.email,
          fullName: user.fullName,
          joinDate: user.joinDate
        };
        res.json({ isLogined: true, currentUser: currentUser });
      } else {
        res.json({ message: 'Incorrect password!' });
      }
    })
  });

//for task
router.route('/tasks')
  .get(function (req, res) {
    Task.find(function (err, tasks) {
      if (err)
        res.send(err);

      const userId = req.query.userId;
      let _tasks = tasks;
      if (userId) {
        _tasks = _.filter(tasks, { 'userId': userId });
      }
      res.json(_tasks);
    })
  })
  .post(function (req, res) {
    var task = new Task();
    task.title = req.body.title;
    task.isDone = false;
    task.userId = req.body.userId;

    task.save(function (err) {
      if (err)
        res.send(err);

      res.json({ message: 'Task created!' });
    })
  });

router.route('/task/:task_id')
  .get(function (req, res) {
    Task.findById(req.params.task_id, function (err, task) {
      if (err)
        res.send(err);

      res.json(task);
    })
  })
  .put(function (req, res) {
    Task.findById(req.params.task_id, function (err, task) {
      if (err)
        res.send(err);

      task.isDone = req.body.isDone;

      task.save(function (err) {
        if (err)
          res.send(err)

        res.json({ message: 'Task updated' });
      })
    })
  })
  .delete(function (req, res) {
    Task.remove({
      _id: req.params.task_id
    }, function (err, task) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deletected' });
    })
  });

//for user
router.route('/users')
  .get(function (req, res) {
    User.find(function (err, users) {
      if (err)
        res.send(err);

      res.json(users);
    })
  })
  .post(function (req, res) {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.username = req.body.username;
    user.password = req.body.password;
    user.joinDate = req.body.joinDate;

    user.save(function (err) {
      if (err)
        res.send(err);

      res.json({ message: 'User created!' });
    })
  });

router.route('/user/:user_id')
  .get(function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
      if (err)
        res.send(err);

      res.json(user);
    })
  })
  .put(function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
      if (err)
        res.send(err);

      user.fullName = req.body.fullName;
      user.email = req.body.email;
      user.username = req.body.username;
      user.password = req.body.password;
      user.joinDate = req.body.joinDate;

      user.save(function (err) {
        if (err)
          res.send(err)

        res.json({ message: 'User updated' });
      })
    })
  });

//for story
router.route('/stories')
  .get(function (req, res) {
    Story.find(function (err, stories) {
      if (err)
        res.send(err);

      const userId = req.query.userId;
      let _stories = stories;
      if (userId) {
        _stories = _.filter(stories, { 'userId': userId });
      }
      res.json(_stories);
    })
  })
  .post(function (req, res) {
    var story = new Story();
    story.title = req.body.title;
    story.content = req.body.content;
    story.userId = req.body.userId;
    story.date = req.body.date;
    story.fullName = req.body.fullName;
    story.email = req.body.email;
    story.imageUrl = req.body.imageUrl;

    story.save(function (err) {
      if (err)
        res.send(err);

      res.json({ message: 'Story created!' });
    })
  });
router.route('/story/:story_id')
  .get(function (req, res) {
    Story.findById(req.params.story_id, function (err, story) {
      if (err)
        res.send(err);

      res.json(story);
    })
  })
  .put(function (req, res) {
    Story.findById(req.params.story_id, function (err, story) {
      if (err)
        res.send(err);
      story.title = req.body.title;
      story.content = req.body.content;
      story.userId = req.body.userId;
      story.date = req.body.date;
      story.fullName = req.body.fullName;
      story.email = req.body.email;

      story.save(function (err) {
        if (err)
          res.send(err)

        res.json({ message: 'Story updated' });
      })
    })
  })
  .delete(function (req, res) {
    Story.remove({
      _id: req.params.story_id
    }, function (err, task) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deletected' });
    })
  });


module.exports = router;