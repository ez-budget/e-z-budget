const router = require('express').Router();
const { Post, User, Comment, Budget } = require('../models');
const withAuth = require('../utils/auth');

// get all story and budgets
router.get('/', withAuth, (req, res) => {
    Budget.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'budget_title'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbBudgetData => {
        const budgets = dbBudgetData.map(budget => budget.get({ plain: true }));
        Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: ['id', 'story_title', 'story_body', 'created_at'],
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
        
            res.render('dashboard', {posts,budgets, loggedIn: true});
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// edit the story
router.get('/edit/story/:id', withAuth, (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'story_title', 'story_body', 'created_at'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        if (dbPostData) {
            const post = dbPostData.get({ plain: true });
    
            res.render('edit-story', {post,loggedIn: true});
          } else {
            res.status(404).end();
          }
        })
        .catch(err => {
          res.status(500).json(err);
    });

});

// add story
router.get('/addstory', withAuth, (req, res) => {
    res.render('add-story', {loggedIn: true});
});

// add budget
router.get('/addbudget', withAuth, (req, res) => {
    res.render('add-budget', {loggedIn: true});
});

//edit the budget
router.get('/edit/budget/:id', withAuth, (req, res) => {
    Budget.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id', 'budget_title',
        'income_source', 'income_receipt', 'income_remark', 'expense_item', 'expense_payment', 'expense_comment'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbBudgetData => {
        if (dbBudgetData) {
            const budget = dbBudgetData.get({ plain: true });
            
            res.render('edit-budget', {
              budget,
              loggedIn: true
            });
          } else {
            res.status(404).end();
          }
        })
        .catch(err => {
          res.status(500).json(err);
    });
});

// get single budget
router.get('/budget/:id', withAuth, (req, res) => {
    Budget.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'budget_title', 
      'income_source', 'income_receipt', 'income_remark', 'expense_item', 'expense_payment', 'expense_comment'
    //   ,
    //   'total_income',
    //   'total_expense',
    //   'net_income',
    //   'result'
      ],  
      include: 
      [
        {
          model: User,
          attributes: ['id','username']
        }
      ]
    })
    .then(dbBudgetData => {
      if (!dbBudgetData) {
        res.status(404).json({ message: 'No budget found with this id '});
        return;
      }
  
      // serialize the data
      const budget = dbBudgetData.get({ plain: true });
  
      // pass data to template
      res.render('budget-view', {
        budget,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
