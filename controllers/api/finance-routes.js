const router = require('express').Router();
const { Finance, Budget, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {

  Finance.findAll({
    attributes: [
      'income_source',
      'income_receipt',
      'income_remark',
      'expense_item',
      'expense_payment',
      'expense_comment',
      'budget_id'
    ],
    include:
      [
        {
          model: Budget,
          attributes: ['id', 'budget_title'],
          include: {
            model: Finance,
            attributes: ['id', 'income_source', 'income_receipt', 'income_remark',
              'expense_item', 'expense_payment', 'expense_comment', 'budget_id' 
            ],
          }
        },
        {
          model: User,
          attributes: ['id', 'username']
        }
      ]
  })
  .then(dbFinanceData => res.json(dbFinanceData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get budget by id
router.get('/:id', (req, res) => {
  Finance.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      //'id',
      //'budget_title'
      'income_source', 'income_receipt', 'income_remark', 'expense_item', 'expense_payment', 'expense_comment', 'budget_id'
      // ,
      // 'total_income',
      // 'total_expense',
      // 'net_income',
      // 'result'
    ],
    include: 
    [
       {
        model: Budget,
        attributes: ['id','budget_title'],
        
         include: {
          model: Finance,
       attributes: ['income_source', 'income_receipt', 'income_remark',
         'expense_item', 'expense_payment', 'expense_comment', 'budget-id'],
         }
       }, 
      {
        model: User,
        attributes: ['id', 'username']
      }       
    ]
  })
    .then(dbFinanceData => {
      if (!dbFinanceData) {
        res.status(404).json({ message: 'No budget found with this id' });
        return;
      }
      res.json(dbFinanceData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', withAuth, (req, res) => {
  Finance.create({
    income_source: req.body.income_source,
    income_receipt: req.body.income_receipt,
    income_remark: req.body.income_remark,
    expense_item: req.body.expense_item,
    expense_payment: req.body.expense_payment,
    expense_comment: req.body.expense_comment,
    budget_id: req.body.budget_id
  })
    .then(dbFinanceData => res.json(dbFinanceData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});
// edit finance
router.put('/:id', withAuth, (req, res) => {
  Finance.update(
    {
      //budget_title: req.body.budget_title,
      income_source: req.body.income_source,
      income_receipt: req.body.income_receipt,
      income_remark: req.body.income_remark,
      expense_item: req.body.expense_item,
      expense_payment: req.body.expense_payment,
      expense_comment: req.body.expense_comment
    },
    {      where: {
        id: req.params.id
      }
    }
  )
    .then(dbFinanceData => {
      if (!dbFinanceData) {
        res.status(404).json({ message: 'No budget found with this id' });
        return;
      }
      res.json(dbFinanceData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.delete('/:id', withAuth, (req, res) => {
  Finance.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbFinanceData => {
      if (!dbFinanceData) {
        res.status(404).json({ message: 'No entry found with this id!' });
        return;
      }
      res.json(dbFinanceData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;