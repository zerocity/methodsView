angular.module('Methods.io').factory('stepService',function() {


var stepService = {
  "procedure": [
    {
      "processGroupTitle": "Transfection siRNA",
      "processSteps": [
        {
          "processStepId": 1,
          "title": "Cell harvest requirments",
          "context": "6 well plate ~200 000 cells/well",
          "highlights": "depends on proloferation kinetics for transfection 70% confluency",
          "critical": "",
          "safety": "",
          "behavior": "",
          "action": "continue"
        },
        {
          "processStepId": 2,
          "title": "Well Plate preperation",
          "type": "mixing",
          "mixing": [
            {
              "title": "tube 1",
              "solution": [
                {
                  "name": "Optimem",
                  "volume": "150",
                  "unit": "µL",
                  "concentration": "",
                  "concentrationUnit": "",
                  "consideration": ""
                },
                {
                  "name": "siRNA",
                  "volume": "3",
                  "unit": "µL",
                  "concentration": "120",
                  "concentrationUnit": "nM",
                  "consideration": ""
                }
              ]
            },
            {
              "title": "tube 2",
              "solution": [
                {
                  "name": "Optimem",
                  "volume": "40",
                  "unit": "µL",
                  "concentration": "",
                  "concentrationUnit": "",
                  "consideration": ""
                },
                {
                  "name": "Oligofectamine",
                  "volume": "5",
                  "unit": "µL",
                  "concentration": "",
                  "concentrationUnit": "",
                  "consideration": "Storage 4°C"
                }
              ]
            }
          ],
          "context": "Mix the following components in one well",
          "highlights": "",
          "critical": "consider vessel size` consider final volume after solution preparation",
          "safety": "",
          "behavior": "",
          "action": "mixing"
        },
        {
          "processStepId": 3,
          "type": "reaction",
          "title": "Incubation",
          "context": "incubate both 10' room temp",
          "reaction": {
            "time": "10",
            "unit": "min",
            "temperature": "25"
          },
          "highlights": "",
          "critical": "",
          "safety": "",
          "behavior": ""
        },
        {
          "processStepId": 4,
          "type": "standard",
          "title": "Remove media",
          "context": "Remove media",
          "highlights": "",
          "critical": "",
          "safety": "",
          "behavior": ""
        },
        {
          "processStepId": 5,
          "type": "standard",
          "title": "Washing cells",
          "context": "wash well with PBS ",
          "highlights": "",
          "critical": "don't remove PBS until transfection will start",
          "safety": "",
          "behavior": ""
        },
        {
          "processStepId": 6,
          "type": "reaction",
          "title": "Incubation",
          "context": "Incubation for 10 minutes",
          "reaction": {
            "time": "10",
            "unit": "min",
            "temperature": "25"
          },
          "highlights": "",
          "critical": "",
          "safety": "",
          "behavior": ""
        },
        {
          "processStepId": 7,
          "title": "Well Plate preperation",
          "type": "mixing",
          "mixing": [
            {
              "title": "working solution",
              "solution": [
                {
                  "name": "tube 1",
                  "volume": "",
                  "unit": "",
                  "concentration": "",
                  "concentration unit": "",
                  "consideration": ""
                },
                {
                  "name": "tube 2",
                  "volume": "",
                  "unit": "",
                  "concentration": "",
                  "concentration unit": "",
                  "consideration": ""
                }
              ]
            }
          ],
          "context": "mix tube 1 into tube 2 (not vice versa) by dropping it in slowly",
          "highlights": "",
          "critical": "",
          "safety": "",
          "behavior": "",
          "action": "mixing"
        },
        {
          "processStepId": 8,
          "title": "Add Transfection solution",
          "type": "mixing",
          "mixing": [
            {
              "title": "working solution",
              "solution":[{
                "name": "tube 1",
                "volume": "",
                "unit": "",
                "concentration": "",
                "concentration unit": "",
                "consideration": ""
                },{
                "name": "Transfection solution",
                "volume": "500",
                "unit": "µL",
                "concentration": "",
                "concentration unit": "",
                "consideration": ""
                }],
            }
          ],
          "context": "Add Transfection solution",
          "highlights": "",
          "critical": "",
          "safety": "",
          "behavior": "",
          "action": "mixing"
        },
        {
          "processStepId": 9,
          "type": "reaction",
          "title": "Incubation",
          "context": "Incubate 4 - 5 h (toss 3 x in between)",
          "reaction": {
            "time": "5",
            "unit": "h",
            "temperature": "25"
          },
          "highlights": "",
          "critical": "",
          "safety": "",
          "behavior": ""
        },
        {
          "processStepId": 10,
          "title": "Add Media",
          "type": "mixing",
          "mixing": [
            {
              "title": "working solution",
              "solution": [
                {
                  "name": "Tube 1",
                  "volume": "",
                  "unit": "",
                  "concentration": "",
                  "concentration unit": "",
                  "consideration": ""
                },
                {
                  "name": "medium with 15% FCS",
                  "volume": "1",
                  "unit": "mL",
                  "concentration": "",
                  "concentration unit": "",
                  "consideration": ""
                }
              ]
            }
          ],
          "context": "add 1 mL proper medium/15% FCS (final conc. 10%) ",
          "highlights": "",
          "critical": "use medium without antibiotics (in fridge)",
          "safety": "",
          "behavior": "",
          "action": "mixing"
        },
        {
          "processStepId": 11,
          "type": "reaction",
          "title": "Incubation",
          "context": "Incubate further 24h at least (mRNA level), for decreased protein level 4",
          "reaction": {
            "time": "24",
            "unit": "h",
            "temperature": "8"
          },
          "highlights": "",
          "critical": "",
          "safety": "",
          "behavior": ""
        }
      ]
    }
  ]
};

	return stepService;
});
