const router = require('express').Router();
const { User, Budget } = require('../../models');
const withAuth = require('../../utils/auth');

// get all budgets
router.get('/', (req, res) => {
  console.log('======================');
  Budget.findAll({
    attributes: [
      'id',
      'budget_title', 
      'income_source', 
      'income_receipt', 
      'income_remark', 
      'expense_item', 
      'expense_payment', 
      'expense_comment'
      // ,
      // 'total_income',
      // 'total_expense',
      // 'net_income',
      // 'result'
    ],
    include: 
      [
        // {
        //   model: Finance,
        //   attributes: ['id', 'income_source', 'income_receipt', 'income_remark',
        //    'expense_item', 'expense_payment', 'expense_comment'],
        //   include: {
        //     model: Budget,
        //     attributes: ['id','budget_title']
        //   }
        // }, 
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
      'budget_title',
      'income_source', 'income_receipt', 'income_remark', 'expense_item', 'expense_payment', 'expense_comment'
      // ,
      // 'total_income',
      // 'total_expense',
      // 'net_income',
      // 'result'
    ],
    include: 
    [
      // {
      //   model: Finance,
      //   attributes: ['id', 'income_source', 'income_receipt', 'income_remark',
      //    'expense_item', 'expense_payment', 'expense_comment'],
      //   include: {
      //     model: Budget,
      //     attributes: ['id','budget_title']
      //   }
      // }, 
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
    income_source: req.body.income_source,
    income_receipt: req.body.income_receipt,
    income_remark: req.body.income_remark,
    expense_item: req.body.expense_item,
    expense_payment: req.body.expense_payment,
    expense_comment: req.body.expense_comment,
    // total_income,
    // total_expense,
    // net_income,
    // result,
    user_id: req.body.user_id
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
      income_source: req.body.income_source,
      income_receipt: req.body.income_receipt,
      income_remark: req.body.income_remark,
      expense_item: req.body.expense_item,
      expense_payment: req.body.expense_payment,
      expense_comment: req.body.expense_comment
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

module.exports = router;




