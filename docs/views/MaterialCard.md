# Material Card

- Description of the materials used in the protocol

    - name
    - nr // Bestellnummer
    - describtion
    - conditions
        - ph
            - min
            - max
        - filtered
            - properties .... (size,sizeUnit)


json sytle
{
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
    }
