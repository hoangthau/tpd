const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const User = require('../models/user');
const Story = require('../models/story');
const Mentor = require('../models/mentor');

const _ = require('lodash');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

//for login
router.route('/login').post(function(req, res) {
  User.find(function(err, users) {
    if (err) res.send(err);

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
  });
});

//for task
router
  .route('/tasks')
  .get(function(req, res) {
    Task.find(function(err, tasks) {
      if (err) res.send(err);

      const userId = req.query.userId;
      let _tasks = tasks;
      if (userId) {
        _tasks = _.filter(tasks, { userId: userId });
      }
      res.json(_tasks);
    });
  })
  .post(function(req, res) {
    var task = new Task();
    task.title = req.body.title;
    task.isDone = false;
    task.userId = req.body.userId;
    task.sortOrder = req.body.sortOrder;

    task.save(function(err) {
      if (err) res.send(err);

      res.json({ message: 'Task created!' });
    });
  });

router
  .route('/task/:task_id')
  .get(function(req, res) {
    Task.findById(req.params.task_id, function(err, task) {
      if (err) res.send(err);

      res.json(task);
    });
  })
  .put(function(req, res) {
    Task.findById(req.params.task_id, function(err, task) {
      if (err) res.send(err);

      task.isDone = req.body.isDone;
      task.title = req.body.title;

      task.save(function(err) {
        if (err) res.send(err);

        res.json({ message: 'Task updated' });
      });
    });
  })
  .delete(function(req, res) {
    Task.remove(
      {
        _id: req.params.task_id
      },
      function(err, task) {
        if (err) res.send(err);

        res.json({ message: 'Successfully deletected' });
      }
    );
  });

router.route('/tasks/sort').post(function(req, res) {
  let task;
  const taskList = req.body.taskList || [];
  for (let i = 0, len = taskList.length; i < len; i++) {
    task = taskList[i];
    Task.update(
      { _id: task._id },
      { $set: { sortOrder: task.sortOrder } }
    ).exec();
  }
  res.json({ message: 'Successfully updated sort order' });
});

router.route('/tasks/reset').post(function(req, res) {
  let task;
  const taskList = req.body.taskList || [];
  for (let i = 0, len = taskList.length; i < len; i++) {
    task = taskList[i];
    Task.update({ _id: task._id }, { $set: { isDone: false } }).exec();
  }
  res.json({ message: 'Successfully reset tasks' });
});

//for user
router
  .route('/users')
  .get(function(req, res) {
    User.find(function(err, users) {
      if (err) res.send(err);

      res.json(users);
    });
  })
  .post(function(req, res) {
    var user = new User();
    user.fullName = req.body.fullName;
    user.email = req.body.email;
    user.username = req.body.username;
    user.password = req.body.password;
    user.joinDate = req.body.joinDate;
    user.coverImg = req.body.coverImg;

    user.save(function(err) {
      if (err) res.send(err);

      res.json({ message: 'User created!' });
    });
  });

router
  .route('/user/:user_id')
  .get(function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
      if (err) res.send(err);

      res.json(user);
    });
  })
  .put(function(req, res) {
    User.findById(req.params.user_id, function(err, user) {
      if (err) res.send(err);

      user.fullName = req.body.fullName;
      user.coverImg = req.body.coverImg;

      user.save(function(err) {
        if (err) res.send(err);

        res.json({ message: 'User updated' });
      });
    });
  });

//for story
router
  .route('/stories')
  .get(function(req, res) {
    Story.find(function(err, stories) {
      if (err) res.send(err);

      const userId = req.query.userId;
      let _stories = stories;
      if (userId) {
        _stories = _.filter(stories, { userId: userId });
      }
      res.json(_stories);
    });
  })
  .post(function(req, res) {
    var story = new Story();
    story.title = req.body.title;
    story.content = req.body.content;
    story.userId = req.body.userId;
    story.date = req.body.date;
    story.fullName = req.body.fullName;
    story.email = req.body.email;
    story.imageUrl = req.body.imageUrl;

    story.save(function(err) {
      if (err) res.send(err);

      res.json({ story: story, message: 'Story created!' });
    });
  });
router
  .route('/story/:story_id')
  .get(function(req, res) {
    Story.findById(req.params.story_id, function(err, story) {
      if (err) res.send(err);

      res.json(story);
    });
  })
  .put(function(req, res) {
    Story.findById(req.params.story_id, function(err, story) {
      if (err) res.send(err);
      story.title = req.body.title;
      story.content = req.body.content;
      story.userId = req.body.userId;
      story.date = req.body.date;
      story.fullName = req.body.fullName;
      story.email = req.body.email;

      story.save(function(err) {
        if (err) res.send(err);

        res.json({ message: 'Story updated' });
      });
    });
  })
  .delete(function(req, res) {
    Story.remove(
      {
        _id: req.params.story_id
      },
      function(err, task) {
        if (err) res.send(err);

        res.json({ message: 'Successfully deletected' });
      }
    );
  });

//mentor
router
  .route('/mentors')
  .get(function(req, res) {
    Mentor.find(function(err, mentors) {
      if (err) res.send(err);

      const userId = req.query.userId;
      let _mentors = mentors;
      if (userId) {
        _mentors = _.filter(mentors, { userId: userId });
      }
      res.json(_mentors);
    });
  })
  .post(function(req, res) {
    var mentor = new Mentor();
    mentor.fullName = req.body.fullName;
    mentor.occupation = req.body.occupation;
    mentor.language = req.body.language;
    mentor.nationality = req.body.nationality;
    mentor.works = req.body.works;
    mentor.imageUrl = req.body.imageUrl;

    mentor.save(function(err) {
      if (err) res.send(err);

      res.json({ mentor: mentor, message: 'Mentor created!' });
    });
  });

router
  .route('/mentor/:mentor_id')
  .get(function(req, res) {
    Mentor.findById(req.params.mentor_id, function(err, mentor) {
      if (err) res.send(err);

      res.json(mentor);
    });
  })
  .put(function(req, res) {
    Mentor.findById(req.params.mentor_id, function(err, mentor) {
      if (err) res.send(err);
      mentor.fullName = req.body.fullName;
      mentor.occupation = req.body.occupation;
      mentor.language = req.body.language;
      mentor.nationality = req.body.nationality;
      mentor.works = req.body.works;
      mentor.imageUrl = req.body.imageUrl;

      mentor.save(function(err) {
        if (err) res.send(err);

        res.json({ message: 'Mentor updated' });
      });
    });
  })
  .delete(function(req, res) {
    Mentor.remove(
      {
        _id: req.params.mentor_id
      },
      function(err, mentor) {
        if (err) res.send(err);

        res.json({ message: 'Successfully deletected' });
      }
    );
  });

module.exports = router;
