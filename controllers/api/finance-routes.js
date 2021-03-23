const router = require('express').Router();
const { Finance } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Finance.findAll()
    .then(dbFinanceData => res.json(dbFinanceData))
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
    user_id: req.session.user_id,
    budget_id: req.body.budget_id
  })
    .then(dbFinanceData => res.json(dbFinanceData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
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