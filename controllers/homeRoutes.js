const router = require('express').Router();



router.get('/', async (req, res) => {
  try {
    res.render('homepage', { });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
try {
  res.render('login');
} catch (error) {
  res.status(500).json(error);
}
  
});

module.exports = router;
