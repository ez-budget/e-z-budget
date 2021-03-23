const router = require('express').Router();
const { User, Budget } = require('../../models');
const withAuth = require('../../utils/auth');

// get all budgets
router.get('/', (req, res) => {
  console.log('======================');
  Budget.findAll({
    attributes: [
      'id',
      'budget_title'
    ],
    include: 
      [
        {
          model: Finance,
          attributes: ['id', 'income_source', 'income_receipt', 'income_remark',
           'expense_item', 'expense_payment', 'expense_comment'],
          include: {
            model: Budget,
            attributes: ['id','budget_title']
          }
        }, 
        {
          model: User,
          attributes: ['id', 'username']
        }       
      ]
    
  })
    .then(dbBudgetData => res.json(dbBudgetData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get budget by id
router.get('/:id', (req, res) => {
  Budget.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'budget_title'
    ],
    include: 
    [
      {
        model: Finance,
        attributes: ['id', 'income_source', 'income_receipt', 'income_remark',
         'expense_item', 'expense_payment', 'expense_comment'],
        include: {
          model: Budget,
          attributes: ['id','budget_title']
        }
      }, 
      {
        model: User,
        attributes: ['id', 'username']
      }       
    ]
  })
    .then(dbBudgetData => {
      if (!dbBudgetData) {
        res.status(404).json({ message: 'No budget found with this id' });
        return;
      }
      res.json(dbBudgetData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create budget
router.post('/', withAuth, (req, res) => {
  Budget.create({
    budget_title: req.body.budget_title,
    user_id: req.session.user_id
  })
    .then(dbBudgetData => res.json(dbBudgetData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// edit budget
router.put('/:id', withAuth, (req, res) => {
  Budget.update(
    {
      budget_title: req.body.budget_title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbBudgetData => {
      if (!dbBudgetData) {
        res.status(404).json({ message: 'No budget found with this id' });
        return;
      }
      res.json(dbBudgetData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete story
router.delete('/:id', withAuth, (req, res) => {
  Budget.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbBudgetData => {
      if (!dbBudgetData) {
        res.status(404).json({ message: 'No budget found with this id' });
        return;
      }
      res.json(dbBudgetData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

/*const sequelize = require('../config/connection');
const { Budget } = require('../models');
const withAuth = require('../utils/auth.js');


router.get('/budget', (req, res) => {
    Budget.findAll({
        attributes: [
            'id', 
            'budget_title', 
            'incomeName', 
            'incomeAmount', 
            'expenseName', 
            'expenseAmount',
            'totalIncome',
            'currentBalance',
            $sql ="INSERT INTO budget (id, budget_title, incomeName, incomeAmount, expenseName, expenseAmount, totalIncome, currentBalance) VALUES ('$id', '$budget_title', '$incomeName', '$incomeAmount', '$expenseName', '$expenseAmount', '$totalIncome', '$currentBalance')"
        ]
    })
        .then(dbBudgetData => res.json(dbBudgetData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})
  //  router.get('/budget/:id', (req, res) => {
    //Budget.findOne({
      //  attributes: [
        //    ' id', 'budget_title', 'incomeName', 'incomeAmount', 'expenseName', 'expenseAmount']
//    })
  //      .then(dbBudgetData => {
    //        if (!dbBudgetData) {
      //          res.status(404).json({ message: 'No budget found with this id' });
        //        return;
          //  }
            //res.json(dbBudgetData);
     //   })
        //.catch(err => {
         //   console.log(err);
         //   res.status(500).json(err);
      ////  });
//});
// create budget
router.post('/', withAuth, (req, res) => {
    Budget.create({
        budget_title: req.body.budget_title,
        user_id: req.session.user_id,
        incomeName: req.session.incomeName,
        incomeAmount: req.session.incomeAmount,
        expenseName: req.session.expenseName,
        expenseAmount: req.session.expenseAmount,
        totalIncome: req.session.totalIncome,
        currentBalance: req.session.currentBalance
    })
        .then(dbBudgetData => res.json(dbBudgetData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// edit budget
router.put('/:id', withAuth, (req, res) => {
    Budget.update(
        {
            budget_title: req.body.budget_title,
            user_id: req.session.user_id,
            incomeName: req.session.incomeName,
            incomeAmount: req.session.incomeAmount,
            expenseName: req.session.expenseName,
            expenseAmount: req.session.expenseAmount,
            totalIncome: req.session.totalIncome,
            currentBalance: req.session.currentBalance
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbBudgetData => {
            if (!dbBudgetData) {
                res.status(404).json({ message: 'No budget found with this id' });
                return;
            }
            res.json(dbBudgetData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// delete budget
router.delete('/:id', withAuth, (req, res) => {
    Budget.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbBudgetData => {
            if (!dbBudgetData) {
                res.status(404).json({ message: 'No budget found with this id' });
                return;
            }
            res.json(dbBudgetData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
module.exports = router;*/