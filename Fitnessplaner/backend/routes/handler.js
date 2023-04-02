const express = require('express');
const router = express.Router();
const axios = require("axios");
const http = require('http');

router.get("/biceps", (req, res) => {
  const muscle = "biceps";
  axios
    .get(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
      headers: {
        "X-Api-Key": `vwyISRnlRfg7kos/o6S45A==1cThQv73z1iPvGXj`,
      },
    })
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      res.status(500).send("An error occurred");
    });
});


router.get("/chest", (req, res) => {
  const muscle = "chest";
  axios
    .get(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
      headers: {
        "X-Api-Key": "vwyISRnlRfg7kos/o6S45A==1cThQv73z1iPvGXj",
      },
    })
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      res.status(500).send("An error occurred");
    });
});

router.get("/neck", (req, res) => {
  const muscle = "neck";
  axios
    .get(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
      headers: {
        "X-Api-Key": "vwyISRnlRfg7kos/o6S45A==1cThQv73z1iPvGXj",
      },
    })
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      res.status(500).send("An error occurred");
    });
});

router.get("/triceps", (req, res) => {
  const muscle = "triceps";
  axios
    .get(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
      headers: {
        "X-Api-Key": "vwyISRnlRfg7kos/o6S45A==1cThQv73z1iPvGXj",
      },
    })
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      res.status(500).send("An error occurred");
    });
});

router.get("/middle_back", (req, res) => {
  const muscle = "middle_back";
  axios
    .get(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
      headers: {
        "X-Api-Key": "vwyISRnlRfg7kos/o6S45A==1cThQv73z1iPvGXj",
      },
    })
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      res.status(500).send("An error occurred");
    });
});
module.exports = router;