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
                }]
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

var humanAxl = {
  "materials": [
    {
      "name": "Capture Antibody",
      "nr": " 841007",
      "Description": "- 360 g/mL of mouse anti-human Axl when reconstituted with 1.0 mL of PBS. After reconstitution, store at 2 - 8 °C for up to 60 days or aliquot and store at -20 °C to -70 °C in a manual defrost freezer for up to 6 months.3Dilute to a working concentration of 2.0 g/mL in PBS,4 without carrier protein."
    },
    {
      "name": "Detection Antibody",
      "nr": "841008",
      "Description": "9 g/mL of biotinylated goat anti-human Axl when reconstituted with 1.0 mL of Reagent Diluent (see Solutions Required section). After reconstitution, store at 2 - 8 °C for up to 60 days or aliquot and store at -20 °C to -70 °C in a manual defrost freezer for up to 6 months.3 Dilute to a working concentration of 50 ng/mL in Reagent Diluent. "
    },
    {
      "name": "Standard",
      "nr": "841009",
      "Description": "Each vial contains 130 ng/mL of recombinant human Axl when reconstituted with 0.5 mL of Reagent Diluent (see Solutions Required section). Allow the standard to sit for a minimum of 15 minutes with gentle agitation prior to making dilutions. Store reconstituted standard at 2 - 8° C or aliquot and store at -70° C for up to 2 months.3 A seven point standard curve using 2-fold serial dilutions in Reagent Diluent, and a high standard of 4000 pg/mL is recommended. "
    },
    {
      "name": "Streptavidin-HRP",
      "nr": "890803",
      "Description": "1.0 mL of streptavidin conjugated to horseradish-peroxidase. Store at 2 - 8° C for up to 6 months after initial use.3 DO NOT FREEZE. Dilute to the working concentration specified on the vial label using Reagent Diluent (see Solutions Required section)."
    }
  ],
  "solutions": [
    {
      "name": "PBS",
      "conditions": {
        "ph": {
          "min": 7.2,
          "max": 7.4
        },
        "filtered": {
          "size": 0.2,
          "sizeUnit": "µm"
        }
      },
      "components": [
        {
          "name": "NaCl",
          "concentration": 137,
          "concentrationUnit": "mM"
        },
        {
          "name": "KCl",
          "concentration": 2.7,
          "concentrationUnit": "mM"
        },
        {
          "name": "Na2HPO4",
          "concentration": 8.1,
          "concentrationUnit": "mM"
        },
        {
          "name": "KH2PO4",
          "concentration": 1.5,
          "concentrationUnit": "mM"
        }
      ]
    },
    {
      "name": "Wash Buffer",
      "conditions": {
        "ph": {
          "min": 7.2,
          "max": 7.4
        }
      },
      "components": [
        {
          "name": "Tween 20 in PBS",
          "concentration": 0.05,
          "concentrationUnit": "%"
        }
      ]
    },
    {
      "name": "Reagent Diluent",
      "conditions": {
        "ciritical": "Quality of BSA is important",
        "ph": {
          "min": 7.2,
          "max": 7.4
        },
        "filtered": {
          "size": 0.2,
          "sizeUnit": "µm"
        }
      },
      "components": [
        {
          "name": "BSA in PBS",
          "concentration": 1,
          "concentrationUnit": "%"
        }
      ]
    },
    {
      "name": "Substrate Solution",
      "components": [
        {
          "name": "Color Reagent A (H2O2)",
          "concentration": 1,
          "concentrationUnit": "part"
        },
        {
          "name": "Color Reagent B (Tetramethylbenzidine)",
          "concentration": 1,
          "concentrationUnit": "part"
        }
      ]
    },
    {
      "name": "Stop Solution",
      "components": [
        {
          "name": "H2SO4",
          "concentration": 2,
          "concentrationUnit": "N"
        }
      ]
    }
  ],
  "procedure": [
    {
      "processGroupTitle": "General Elisa Protocol - Coating",
      "processSteps": [
        {
          "processStepId": 1,
          "title": "Microplate coating",
          "type": "reaction",
          "context": "Dilute the Capture Antibody to the working concentration in PBS without carrier protein. Immediately coat a 96-well microplate with 100 µL per well of the diluted Capture Antibody. \n\nSeal the plate and incubate overnight at room temperature. ",
          "reaction": {
            "time": "8",
            "unit": "h",
            "temperature": "25"
          },
          "highlights": "",
          "critical": "",
          "safety": "",
          "behavior": "",
          "action": "continue"
        },
        {
          "processStepId": 2,
          "title": "Well Plate preperation",
          "context": "Aspirate each well and wash with Wash Buffer, repeating the process two times for a total of three washes. Wash by filling each well with Wash Buffer (400 µL) using a squirt bottle, manifold dispenser, or autowasher. After the last wash, remove any remaining Wash Buffer by aspirating or by inverting the plate and blotting it against clean paper towels. ",
          "highlights": "Complete removal of liquid at each step is essential for good performance.",
          "critical": "",
          "safety": "",
          "behavior": "",
          "action": "continue"
        },
        {
          "processStepId": 3,
          "type": "reaction",
          "title": "Well Blocking",
          "context": "Block plates by adding 300 µL of Reagent Diluent to each well. Incubate at room temperature for a minimum of 1 hour.",
          "reaction": {
            "time": "1",
            "unit": "h",
            "temperature": "25"
          },
          "highlights": "",
          "critical": "",
          "safety": "",
          "behavior": ""
        },
        {
          "processStepId": 2,
          "title": "Plate preperation",
          "context": "Aspirate each well and wash with Wash Buffer, repeating the process two times for a total of three washes. Wash by filling each well with Wash Buffer (400 µL) using a squirt bottle, manifold dispenser, or autowasher. After the last wash, remove any remaining Wash Buffer by aspirating or by inverting the plate and blotting it against clean paper towels. ",
          "highlights": "Complete removal of liquid at each step is essential for good performance.",
          "critical": "",
          "safety": "",
          "behavior": "",
          "action": "continue"
        }
      ]
    },
    {
      "processGroupTitle": "General Elisa Protocol - Solution",
      "processSteps": [
        {
          "processStepId": 1,
          "reaction": {
            "time": "2",
            "unit": "h",
            "temperature": "25"
          },
          "title": "Sample / Standard",
          "context": "Add 100 µL of sample or standards in Reagent Diluent, or an appropriate diluent, per well. Cover with an adhesive strip and incubate 2 hours at\nroom temperature",
          "highlights": "",
          "critical": "",
          "safety": "",
          "behavior": "",
          "action": "continue"
        },
        {
          "processStepId": 2,
          "type": "Link",
          "title": "Wash step",
          "context": "Repeat the aspiration/wash as in step 2 of Plate\nPreparation.",
          "link": {
            "keyGroup": "0",
            "key": "1"
          },
          "highlights": "",
          "critical": "",
          "safety": "",
          "behavior": "",
          "action": "continue"
        },
        {
          "processStepId": 3,
          "type": "reaction",
          "title": "Detection Antibody",
          "context": "Add 100 L of the Detection Antibody, diluted in Reagent Diluent, to each well. Cover with a new adhesive strip and incubate 2 hours at room temperature.",
          "reaction": {
            "time": "2",
            "unit": "h",
            "temperature": "25"
          },
          "highlights": "",
          "critical": "",
          "safety": "",
          "behavior": ""
        },
        {
          "processStepId": 2,
          "type": "Link",
          "title": "Wash step",
          "context": "Repeat the aspiration/wash as in step 2 of Plate\nPreparation.",
          "link": {
            "keyGroup": "0",
            "key": "1"
          },
          "highlights": "",
          "critical": "",
          "safety": "",
          "behavior": "",
          "action": "continue"
        },
        {
          "processStepId": 3,
          "type": "reaction",
          "title": "Detection Antibody",
          "context": "Add 100 µL of the working dilution of Streptavidin-HRP to each well. Cover the plate and incubate for 20 minutes at room temperature. ",
          "reaction": {
            "time": "20",
            "unit": "min",
            "temperature": "25"
          },
          "highlights": "",
          "critical": "Avoid placing the plate in direct light.",
          "safety": "",
          "behavior": ""
        },
        {
          "processStepId": 2,
          "type": "Link",
          "title": "Wash step",
          "context": "Repeat the aspiration/wash as in step 2 of Plate\nPreparation.",
          "link": {
            "keyGroup": "0",
            "key": "1"
          },
          "highlights": "",
          "critical": "",
          "safety": "",
          "behavior": "",
          "action": "continue"
        },
        {
          "processStepId": 3,
          "type": "reaction",
          "title": "Substrate",
          "context": " Add 100 µL of Substrate Solution to each well. Incubate for 20 minutes at room temperature. Avoid placing the plate in direct light.",
          "reaction": {
            "time": "20",
            "unit": "min",
            "temperature": "25"
          },
          "highlights": "",
          "critical": "Avoid placing the plate in direct light.",
          "safety": "",
          "behavior": ""
        },
        {
          "processStepId": 3,
          "type": "reaction",
          "title": "Stop Reaction",
          "context": "Add 50 µL of Stop Solution to each well. Gently tap the plate to ensure thorough mixing.",
          "highlights": "Gently tap the plate to ensure thorough mixing.",
          "critical": "",
          "safety": "",
          "behavior": ""
        },
        {
          "processStepId": 3,
          "type": "equipment",
          "title": "Optical density - Analysis",
          "context": "Determine the optical density of each well  immediately, using a microplate reader set to 450 nm",
          "equipment": {
            "highligth": "If wavelength correction is available, set to\n540 nm or 570 nm. If wavelength correction is not available, subtract readings at 540 nm or 570 nm from the readings at 450 nm. This subtraction will correct for optical imperfections in the plate. Readings made directly at 450 nm without correction may be higher and less accurate.",
            "equipmentType": "microplate reader"
          },
          "highlights": "",
          "critical": "",
          "safety": "",
          "behavior": ""
        }
      ]
    }
  ],
  "result": {
    "context": "Average the duplicate readings for each standard, control, and sample and subtract the average zero standard optical density.  \n\nCreate a standard curve by reducing the data using computer software capable of generating a four parameter logistic (4-PL) curve-fit. As an alternative, construct a standard curve by plotting the mean absorbance for each standard on the y-axis against the concentration on the x-axis and draw a best fit curve through the points on the graph. The data may be linearized by plotting the log of the Axl concentrations versus the log of the O.D. and the best fit line can be determined by regression analysis. This procedure will produce an adequate but less precise fit of the data. If samples have been diluted, the concentration read from the standard curve must be multiplied by the dilution factor. "
  }
};

var proctocols = [
    {
        "title":"siRNA Transfection",
        "content": stepService
    },{
        "title":"AXL Elisa",
        "content": humanAxl
    }
];

	return proctocols;
});
