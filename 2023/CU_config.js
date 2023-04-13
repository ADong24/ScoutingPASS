var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2023txcmp2",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "de": "Double Elimination<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "field_image",
      "filename": "2023/field_image.png"
    }
  ],
  "auton": [
    { "name": "Mobility?",
      "code": "am",
      "type": "bool"
    },
    { "name": "High Cube Scored",
      "code": "auh",
      "type": "counter"
    },
    { "name": "Medium Cube Scored",
      "code": "aum",
      "type": "counter"
    },
    { "name": "Low Cube Scored",
      "code": "aul",
      "type": "counter"
    },
    { "name": "High Cone Scored",
      "code": "aoh",
      "type": "counter"
    },
    { "name": "Medium Cone Scored",
      "code": "aom",
      "type": "counter"
    },
    { "name": "Low Cone Scored",
      "code": "aol",
      "type": "counter"
    },
    { "name": "Docked",
      "code": "ad",
      "type":"radio",
      "choices": {
        "d": "Docked (not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted to dock but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
   "teleop": [
   { "name": "Defense Timer",
     "code": "dti",
     "type": "cycle"
   },
   { "name": "Record Defense",
     "code": "rde",
     "type": "text",
     "size": 10,
     "maxSize": 15
    },
   { "name": "Grid Scoring",
      "code": "tsg",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
   { "name": "Failed Cube Cycles",
      "code": "fuc",
      "type": "counter"
    },
    { "name": "Failed Cone Cycles",
      "code": "foc",
      "type": "counter"
    },
    { "name": "High Cube Scored",
      "code": "tuh",
      "type": "counter"
    },
    { "name": "Medium Cube Scored",
      "code": "tum",
      "type": "counter"
    },
    { "name": "Low Cube Scored",
      "code": "tul",
      "type": "counter"
    },
    { "name": "High Cone Scored",
      "code": "toh",
      "type": "counter"
    },
    { "name": "Medium Cone Scored",
      "code": "tom",
      "type": "counter"
    },
    { "name": "Low Cone Scored",
      "code": "tol",
      "type": "counter"
    },
    { "name": "Supercharge Scored",
      "code": "spc",
      "type": "counter"
    },
    { "name": "Was Defended",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Smart Placement (creates Links)",
      "code": "lnk",
      "type": "bool"
    },
    { "name": "Cargo Intake From",
      "code": "cif",
      "type": "radio",
      "choices": {
        "s": "Single hp<br>",
        "h": "Double hp<br>",
        "g": "Ground<br>",
        "b": "Ground and station<br>",
        "x": "Failed to Collect"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Docking/Engaging Timer",
     "code": "deti",
     "type": "cycle"
    },
    { "name": "Record Dock/Engage",
     "code": "rdce",
     "type": "text",
     "size": 10,
     "maxSize": 15
    },
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "d": "Docked (Not Engaged)<br>",
        "e": "Engaged<br>",
        "pi": "Parked in Community<br>",
        "po": "Parked outside Community<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "# of alliance bots docked/engaged",
      "code": "cn",
      "type": "counter"
    }
  ],
  "postmatch": [
   { "name": "Alliance Links Scored",
      "code": "ls",
      "type": "counter"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "1": "1<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5"
      },
      "defaultValue": "1"
    },
    { "name": "Fouls",
      "code": "foul",
      "type": "counter"
    },
    { "name": "Died/Tipped",
      "code": "d",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 200
    }
  ]
}`;
