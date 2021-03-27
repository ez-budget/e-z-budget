const router = require('express').Router();
const { User, Finance } = require('../../models');
const withAuth = require('../../utils/auth.js');


router.get('/', (req, res) => {
    Finance.findAll({
        attributes: [
            'id', 
            'budget_title', 
            'incomeName', 
            'incomeAmount', 
            'expenseName', 
            'expenseAmount',
            'total_budget',
            'current_balance',
        ],
        include:
        [
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

router.get('/:id', (req, res) => {
    Finance.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id', 'budget_title', 'incomeName', 'incomeAmount', 'expenseName', 'expenseAmount', 'total_budget', 'current_amount'
        ],
        include: 
        [
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
// create budget
router.post('/', withAuth, (req, res) => {
    Finance.create({
        budget_title: req.body.budget_title,
        incomeName: req.body.incomeName,
        incomeAmount: req.body.incomeAmount,
        expenseName: req.body.expenseName,
        expenseAmount: req.body.expenseAmount,
        total_budget: req.body.total_budget,
        current_balance: req.body.current_balance,
        user_id: req.body.user_id
    })
        .then(dbFinanceData => res.json(dbFinanceData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
// edit budget
router.put('/:id', withAuth, (req, res) => {
    Finance.update(
        {
            budget_title: req.body.budget_title,
            incomeName: req.body.incomeName,
            incomeAmount: req.body.incomeAmount,
            expenseName: req.body.expenseName,
            expenseAmount: req.body.expenseAmount,
            total_budget: req.body.total_budget,
            current_balance: req.body.current_balance
        },
        {
            where: {
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
// delete budget
router.delete('/:id', withAuth, (req, res) => {
    Finance.destroy({
        where: {
            id: req.params.id
        }
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
module.exports = router;





// const router = require('express').Router();
// const { Finance } = require('../../models');
// const withAuth = require('../../utils/auth');

// router.get('/', (req, res) => {
//   Finance.findAll()
//     .then(dbFinanceData => res.json(dbFinanceData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.post('/', withAuth, (req, res) => {
//   Finance.create({
//     income_source: req.body.income_source,
//     income_receipt: req.body.income_receipt,
//     income_remark: req.body.income_remark,
//     expense_item: req.body.expense_item,
//     expense_payment: req.body.expense_payment,
//     expense_comment: req.body.expense_comment,
//     budget_id: req.body.budget_id
//   })
//     .then(dbFinanceData => res.json(dbFinanceData))
//     .catch(err => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });

// router.delete('/:id', withAuth, (req, res) => {
//   Finance.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbFinanceData => {
//       if (!dbFinanceData) {
//         res.status(404).json({ message: 'No entry found with this id!' });
//         return;
//       }
//       res.json(dbFinanceData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// module.exports = router;