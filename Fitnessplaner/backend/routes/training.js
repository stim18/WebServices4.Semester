const express = require('express')
const router = express.Router()
const Training = require('../models/trainingModel')
const User = require('../models/userModel')

router.get('/', async (req, res) => {
    await User.findById(req.query.id, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
          switch(docs.goal){
            case 1:
                a = 4;
                b = 8;
                break;
            case 2:
                a = 8;
                b = 12;
                break;
            case 3:
                a = 12;
                b = 18;
                break;
          }
          switch(docs.split){
            case 2:
                res.send({
                    "Info" : "Anfängerfreundlicher Split, da man mit zwei Trainingseinheiten alle Hauptmuskelgruppen abdeckt. Dieser Split erlaubt einem zwischendurch, einen oder zwei Tage Pause zu machen. Dennoch kann man als Richtwert zwei Tage Training gefolgt von einem Tag Pause empfehlen.",
                    "Day1" : "Beine und Po (3 Übungen), Brust (2 Übungen), Trizeps (2 Übungen) – je 3 Durchgänge zu " +a+ " bis " +b+ " Wiederholungen.",
                    "Day2" : "Bauch, Rücken, Schulter, Bizeps (je 2 Übungen) – pro Übung 3 Durchgänge zu " +a+ " bis " +b+ " Wiederholungen."
                })
                break;
            case 3:
                res.send({
                    "Info" : "Split für Fortgeschrittene, durch die Aufteilung auf drei Trainingstage, kann man auch Isolationsübungen in das Training einbauen. Als Richtwert an Trainingstagen werden mindestens drei in einer Woche gesehen, da sonst die Ruhezeiten zu groß würden. Maximale Auslastung sind 6 Tage in der Woche, das heißt das man nach einem 3er Split einen Tag Pause einlegen sollte, dabei ist wichtig, dass das Gewicht nicht so hoch ist, dass die Muskeln nicht regenerieren können. Aus diesem Grund ist der 3er Split auch für Fortgeschrittene.",
                    "Day1" : "Bauch, Brust, Trizeps (je 2 Übungen) – je 3 Durchgänge zu " +a+ " bis " +b+ " Wiederholungen.",
                    "Day2" : "Beine und Po (3 Übungen), Schulter (3 Übungen)– je 3 Durchgänge zu " +a+ " bis " +b+ " Wiederholungen.",
                    "Day3" : "Rücken (3 Übungen), Bizeps (2 Übungen) – je 3 Durchgänge zu " +a+ " bis " +b+ " Wiederholungen."
                })
                break;
            case 4:
                res.send({
                    "Info" : "Ist ähnlich wie der dreier Split eher für Fortgeschrittene Sportler, die auch viel Zeit in ihr Training investieren wollen und können. Das Trainingsvolumen liegt hier bei mindestens 4 mal die Woche, wobei auch bis zu 6 mal möglich ist. Als Trainingsempfehlung gilt alle zwei Tage einen Tag Pause einzulegen. In diesem Split sind ebenfalls die Ruhezeiten zu beachten, da eine Überbelastung für die Muskeln schlecht ist und entsprechend nicht mehr förderlich.",
                    "Day1" : "Brust Bizeps - Brust 3 Übungen und Bizeps 2 Übungen – je 3 Durchgänge zu " +a+ " bis " +b+ " Wiederholungen.",
                    "Day2" : "Rücken Bauch – Rücken 3 Übungen und Bauch 2 Übungen -  je 3 Durchgänge zu " +a+ " bis " +b+ " Wiederholungen.",
                    "Day3" : "Schultern Trizeps – je 3 Übungen -  je 3 Durchgänge zu " +a+ " bis " +b+ " Wiederholungen.",
                    "Day4" : "Beine Bauch – 4 Übungen Bauch und 1 Übung für den Bauch - je 3 Durchgänge zu " +a+ " bis " +b+ " Wiederholungen."
                })
                break;
            case 5:
                res.send({
                    "Info" : "Dieser Split ist nur für Fortgeschrittene geeignet, da jede primäre Muskelgruppe nur ein mal in einer Woche trainiert wird. Aus diesem Grund muss die Intensität auch entsprechend hoch sein, da zwischen den Trainings je eine Woche liegt. Kleine Muskelgruppen, wie z.B. Bauch und Waden, werden zusätzlich zu einer primären Trainingsgruppe trainiert. In einer Woche gibt es in der Regel zwei Ruhetage, das heißt alle zwei bis drei Tage einen Tag Pause.",
                    "Day1" : "Brust - 4 Übungen – je 3 Durchgänge zu " +a+ " bis " +b+ " Wiederholungen.",
                    "Day2" : "Beine – 4 Übungen - je 3 Durchgänge zu " +a+ " bis " +b+ " Wiederholungen.",
                    "Day3" : "Rücken – 4 Übungen – je 3 Durchgänge zu " +a+ " bis " +b+ " Wiederholungen.",
                    "Day4" : "Schultern – 4 Übungen – je 3 Durchgänge zu " +a+ " bis " +b+ " Wiederholungen.",
                    "Day5" : "Arme – 2-3 Übungen für Trizeps und Bizeps  – je 3 Durchgänge zu " +a+ " bis " +b+ " Wiederholungen."
                })
                break;
          }
        }
      });
})

router.get('/all', async (req, res) => {
  let searchOptions = {}
  /*if (req.query.username != null && req.query.username !== '') {
    searchOptions.username = new RegExp(req.query.username, 'i')
  }*/
  if (req.query.id != null && req.query.id !== '') {
    Training.findById(req.query.id, function (err, docs) {
      if (err){
          console.log(err);
      }
      else{
        res.json(docs)
      }
    });
  } else {
    try {
      const trainings = await Training.find(searchOptions)
      res.json(trainings)
    } catch {
      res.send('Error')
    }
  }
})

  router.post('/new', async (req, res) => {
    if (req.body.dateOfTraining != null && req.body.dateOfTraining != '' && req.body.dateOfTraining != undefined){
        const split = req.body.dateOfTraining.split('-')
        const training = new Training({
            userid: req.body.id,
            split: req.body.split,
            typeOfTraining: req.body.typeOfTraining,
            dateOfTraining: new Date(split[0], split[1], split[2])
          })
          console.log(training)
          try {
            const newTraining = await training.save()
            res.send({
              Event: 'Training added',
              //Key: newTraining.id
            })
          } catch {
            res.send('Error')
          }
    } else {
        res.send('Error')
    }
  })

  router.get('/state', async (req, res) => {
    let searchOptions = {}
    var save = await User.findById(req.query.id, function (err, docs) {
      if (err){
          console.log(err);
      }
      else{
        //const save = docs
      }
    });
    searchOptions.userid = new RegExp(req.query.id, 'i')
    const trainings = await Training.find(searchOptions).sort({dateOfTraining: -1})
    switch(save.split){
      case 2:
        
        break;
    }
    res.send(trainings)
  })
module.exports = router