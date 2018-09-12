/**
* Created by Northdegree on 25.05.2017.
*/
// 0 = Feuerwehr
// 1 = Rettungsdienst
// 2 = Polizei
// 3 = THW
// 4 = Wasserrettung
if (I18n.locale == "en") {
    lssm.carsById = {
        "0": ["Type 1 fire engine", 0],
        "1": ["Type 2 fire engine", 0],
        "2": ["Platform truck", 0],
        "3": ["Battalion Chief Unit", 0],
        "4": ["Heavy Rescue Vehicle", 0],
        "5": ["Ambulance", 1],
        "6": ["Mobile air", 0],
        "7": ["Water Tanker", 0],
        "8": ["Utility unit", 0],
        "9": ["HazMat", 0],
        "10": ["Patrol Car", 2],
        "11": ["HEMS", 1],
        "12": ["Mobile command vehicle", 0],
        "13": ["Quint", 0],
        "14": ["Police helicopter", 2],
        "15": ["Fly-Car", 1],
        "16": ["SWAT", 2],
        "17": ["ARFF Crash Tender", 0],
        "18": ["Rescue Engine", 0],
        "19": ["K-9 Unit", 2],
        "20": ["Mass Casualty Unit", 1],
        "21": ["Heavy Rescue + Boat", 0],
        "22": ["Boat Trailer", 0],
        "23": ["Police Motorcycle", 2],
        "24": ["Large Fireboat", 0],
        "25": ["Large Rescue Boat", 1]
    };
    lssm.missions = {
        0: {
            'name': 'Bin fire',
            'credits': 110,
            'vehicles': {
                'lf': 1
            }
        },
        1: {
            'name': 'Container fire',
            'credits': 170,
            'vehicles': {
                'lf': 1
            }
        },
        2: {
            'name': 'Burning car',
            'credits': 370,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [26, 'Garage fire'],
                [16, 'Caravan fire'],
                [19, 'Burning trailer']
            ]
        },
        3: {
            'name': 'Burning motorbike',
            'credits': 340,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [26, 'Garage fire']
            ]
        },
        4: {
            'name': 'Burning grasss',
            'credits': 200,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [14, 'Little field fire']
            ]
        },
        5: {
            'name': 'Room fire',
            'credits': 1400,
            'vehicles': {
                'lf': 2,
                'dlk': 1
            },
            'percentages': {
                'dlk': 30
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 50,
                'specialisation': 'General Internal'
            },
            'expansions': [
                [88, 'Building Collapse']
            ]
        },
        6: {
            'name': 'Garden shed fire',
            'credits': 600,
            'vehicles': {
                'lf': 2
            }
        },
        7: {
            'name': 'Burning leaves',
            'credits': 210,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [14, 'Little field fire']
            ]
        },
        8: {
            'name': 'Bulk trash fire',
            'credits': 220,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [20, 'Basement fire'],
                [22, 'Roof fire'],
                [99, 'Commercial Fire'],
                [87, 'Industrial Fire'],
                [6, 'Garden shed fire']
            ]
        },
        9: {
            'name': 'Bale of straw fire',
            'credits': 250,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [14, 'Little field fire'],
                [6, 'Garden shed fire']
            ]
        },
        10: {
            'name': 'Tractor fire',
            'credits': 600,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [29, 'Harvester fire']
            ]
        },
        11: {
            'name': 'Burning callbox',
            'credits': 240,
            'vehicles': {
                'lf': 1
            }
        },
        12: {
            'name': 'Tree on the road',
            'credits': 310,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [25, 'Road accident']
            ]
        },
        13: {
            'name': 'Burning truck',
            'credits': 980,
            'vehicles': {
                'lf': 2
            }
        },
        14: {
            'name': 'Little field fire',
            'credits': 1000,
            'vehicles': {
                'lf': 2
            },
            'expansions': [
                [15, 'Little wildfire']
            ]
        },
        15: {
            'name': 'Little wildfire',
            'credits': 1010,
            'vehicles': {
                'lf': 1
            }
        },
        16: {
            'name': 'Caravan fire',
            'credits': 1100,
            'vehicles': {
                'lf': 2
            }
        },
        17: {
            'name': 'Mailbox on fire',
            'credits': 340,
            'vehicles': {
                'lf': 1
            }
        },
        18: {
            'name': 'Brush pile',
            'credits': 700,
            'vehicles': {
                'lf': 1
            }
        },
        19: {
            'name': 'Burning trailer',
            'credits': 650,
            'vehicles': {
                'lf': 1
            }
        },
        20: {
            'name': 'Basement fire',
            'credits': 2500,
            'vehicles': {
                'elw1': 1,
                'lf': 3
            },
            'percentages': {
                'elw1': 90
            },
            'patients': {
                'min': 0,
                'max': 2,
                'specialisation': 'General Internal'
            }
        },
        21: {
            'name': 'Chimney fire',
            'credits': 2400,
            'vehicles': {
                'lf': 1,
                'elw1': 1,
                'dlk': 1
            },
            'expansions': [
                [22, 'Roof fire']
            ]
        },
        22: {
            'name': 'Roof fire',
            'credits': 2700,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'dlk': 1
            },
            'percentages': {
                'elw1': 50
            },
            'expansions': [
                [87, 'Industrial Fire'],
                [99, 'Commercial Fire']
            ]
        },
        23: {
            'name': 'Grease Fire',
            'credits': 1200,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [99, 'Commercial Fire']
            ]
        },
        24: {
            'name': 'Burning bus shelter',
            'credits': 900,
            'vehicles': {
                'lf': 1
            }
        },
        25: {
            'name': 'Road accident',
            'credits': 1000,
            'vehicles': {
                'lf': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 40,
                'specialisation': 'Traumatology'
            },
            'expansions': [
                [2, 'Burning car'],
                [24, 'Burning bus shelter'],
                [47, 'Dangerous goods truck accident'],
                [98, 'Unknown Tanker Spill']
            ]
        },
        26: {
            'name': 'Garage fire',
            'credits': 1400,
            'vehicles': {
                'lf': 2
            }
        },
        27: {
            'name': 'Gas Leak',
            'credits': 400,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [25, 'Road accident'],
                [47, 'Dangerous goods truck accident']
            ]
        },
        28: {
            'name': 'Fireplace fire',
            'credits': 1310,
            'vehicles': {
                'lf': 2,
                'elw1': 1,
                'dlk': 1
            }
        },
        29: {
            'name': 'Harvester fire',
            'credits': 1200,
            'vehicles': {
                'lf': 2
            }
        },
        30: {
            'name': 'Wastebin fire',
            'credits': 110,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [13, 'Burning Truck']
            ]
        },
        31: {
            'name': 'Wastebin fire',
            'credits': 110,
            'vehicles': {
                'lf': 1
            }
        },
        32: {
            'name': 'Wastebin fire',
            'credits': 110,
            'vehicles': {
                'lf': 1
            }
        },
        33: {
            'name': 'Wastebin fire',
            'credits': 110,
            'vehicles': {
                'lf': 1
            }
        },
        34: {
            'onlyRd': true,
            'name': 'Alcoholic intoxication',
            'specialisation': 'General Internal',
        },
        35: {
            'onlyRd': true,
            'name': 'Nosebleed',
            'specialisation': 'General Surgeon',
        },
        36: {
            'onlyRd': true,
            'name': 'Cardiac infarction',
            'transport': 100,
            'specialisation': 'Cardiology',
        },
        37: {
            'onlyRd': true,
            'name': 'Acute asthma',
            'transport': 50,
            'specialisation': 'General Internal',
        },
        38: {
            'onlyRd': true,
            'name': 'Seizure',
            'transport': 50,
            'specialisation': 'Neurology',
        },
        39: {
            'onlyRd': true,
            'name': 'Fever',
            'transport': 90,
            'specialisation': 'General Internal',
        },
        40: {
            'onlyRd': true,
            'name': 'Fallen person',
            'transport': 30,
            'specialisation': 'Traumatology',
        },
        41: {
            'vge': true,
            'name': 'Major Fire',
            'credits': 10210,
            'vehicles': {
                'lf': 10,
                'elw1': 2,
                'elw2': 1,
                'dlk': 2,
                'gwl2': 1,
                'atem': 1,
                'rw': 2
            }
        },
        42: {
            'name': 'Manhole Fire',
            'credits': 210,
            'vehicles': {
                'lf': 2,
                'elw1': 1
            }
        },
        43: {
            'onlyRd': true,
            'name': 'Diabetic problems',
            'transport': 50,
            'specialisation': 'General Internal',
        },
        44: {
            'name': 'Burning machine',
            'credits': 2470,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'rw': 1,
                'gwl2': 1,
                'atem': 1
            },
            'percentages': {
                'gwl2': 30,
                'atem': 20
            }
        },
        45: {
            'name': 'Burning locomotive',
            'credits': 1800,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'rw': 1,
                'gwl2': 1,
                'atem': 1
            },
            'percentages': {
                'rw': 50,
                'atem': 30
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 40,
                'specialisation': 'General Surgeon'
            }
        },
        46: {
            'name': 'Gas station fire',
            'credits': 3920,
            'vehicles': {
                'lf': 4,
                'elw1': 1,
                'elw2': 1,
                'dlk': 1,
                'rw': 2,
                'atem': 1,
                'gefahr': 1
            },
            'percentages': {
                'rw': 30,
                'atem': 30,
                'gefahr': 70
            }
        },
        47: {
            'name': 'Dangerous goods truck accident',
            'credits': 2200,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'rw': 1,
                'gefahr': 1
            },
            'percentages': {
                'rw': 50
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Traumatology'
            }
        },
        48: {
            'name': 'Shoplifting',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        49: {
            'name': 'Shoplifting',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        50: {
            'name': 'Parked car accident',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            }
        },
        51: {
            'name': 'Parked car accident',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            }
        },
        52: {
            'name': 'Metal burglary',
            'credits': 150,
            'vehicles': {
                'fustw': 1
          },
          'prisoners': {
              'min': 0,
              'max': 1
          }
        },
        53: {
            'name': 'Pickpocketing',
            'credits': 150,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        54: {
            'name': 'Fare dodger',
            'credits': 120,
            'vehicles': {
                'fustw': 1
            }
        },
        55: {
            'name': 'Fare dodger',
            'credits': 120,
            'vehicles': {
                'fustw': 1
            }
        },
        56: {
            'name': 'Fare dodger',
            'credits': 120,
            'vehicles': {
                'fustw': 1
            }
        },
        57: {
            'name': 'Fare dodger',
            'credits': 120,
            'vehicles': {
                'fustw': 1
            }
        },
        58: {
            'name': 'Parked car accident',
            'credits': 120,
            'vehicles': {
                'fustw': 1
            }
        },
        59: {
            'name': 'Brawl',
            'credits': 700,
            'vehicles': {
                'fustw': 3
            },
            'patients': {
                'min': 0,
                'max': 3,
                'specialisation': 'Traumatology'
            },
            'prisoners': {
                'min': 0,
                'max': 2
            }
        },
        60: {
            'name': 'Rioter',
            'credits': 500,
            'vehicles': {
                'fustw': 2
            },
            'prisoners': {
                'min': 0,
                'max': 1
            },
            'expansions': [
                [59, 'Brawl'],
                [90, 'Officer Down']
            ]
        },
        61: {
            'vge': true,
            'name': 'Unannounced demonstration',
            'credits': 10020,
            'vehicles': {
                'fustw': 7
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        62: {
            'vge': true,
            'name': 'Pile - up',
            'credits': 10010,
            'vehicles': {
                'lf': 10,
                'rw': 5,
                'elw1': 2,
                'gefahr': 2
            },
            'patients': {
                'min': 10,
                'max': 12,
                'specialisation': 'Traumatology'
            }
        },
        63: {
            'name': 'Burning bogle',
            'credits': 350,
            'vehicles': {
                'lf': 1
            }
        },
        64: {
            'name': 'Burning pumpkin field',
            'credits': 850,
            'vehicles': {
                'lf': 1
            }
        },
        65: {
            'name': 'Pumpkin soup overcooked',
            'credits': 1500,
            'vehicles': {
                'lf': 2,
                'elw1': 1,
                'atem': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Neurology'
            },
            'percentages': {
                'atem': 50
            }
        },
        66: {
            'name': 'Witch in tree',
            'credits': 900,
            'vehicles': {
                'lf': 1,
                'dlk': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 50,
                'specialisation': 'Traumatology'
            }
        },
        67: {
          'onlyRd': true,
          'name': 'Zombie bite',
          'specialisation': 'Neurology',
        },
        68: {
            'name': 'Erupted Monster',
            'credits': 1600,
            'vehicles': {
                'fustw': 4
            }
        },
        69: {
            'name': 'Pumpkin stolen',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            }
        },
        70: {
            'name': 'Frankenstein sighted',
            'credits': 550,
            'vehicles': {
                'fustw': 3
            }
        },
        71: {
            'name': 'candy theft',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            }
        },
        72: {
            'name': 'Person check',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            },
            'expansions': [
                [90, 'Officer Down']
            ]
        },
        73: {
            'name': 'Obstruction of traffic',
            'credits': 80,
            'vehicles': {
                'fustw': 1
            }
        },
        74: {
            'name': 'Theft of property from vehicles',
            'credits': 150,
            'vehicles': {
                'fustw': 1
            }
        },
        75: {
            'name': 'Tree on bikeway',
            'credits': 310,
            'vehicles': {
                'lf': 1
            }
        },
        76: {
            'name': 'Burning substation',
            'credits': 1900,
            'vehicles': {
                'lf': 2,
                'elw1': 1
            }
        },
        77: {
            'name': 'Burning substation',
            'credits': 2000,
            'vehicles': {
                'lf': 2,
                'elw1': 1,
                'fustw': 1
            }
        },
        78: {
            'name': 'Person under tree',
            'credits': 1000,
            'vehicles': {
                'lf': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'specialisation': 'Traumatology'
            }
        },
        79: {
            'name': 'Theft at christmas market',
            'credits': 300,
            'vehicles': {
                'fustw': 1
            }
        },
        80: {
            'name': 'Burning christmas market stall',
            'credits': 610,
            'vehicles': {
                'lf': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'General Internal'
            }
        },
        81: {
            'name': 'Fire at christmas market',
            'credits': 310,
            'vehicles': {
                'lf': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'General Internal'
            }
        },
        82: {
            'name': 'Traffic accident - ice',
            'credits': 1410,
            'vehicles': {
                'lf': 1,
                'rw': 1
            },
            'patients': {
                'min': 0,
                'max': 3,
                'specialisation': 'Traumatology'
            },
        },
        83: {
            'name': 'Burning christmas tree',
            'credits': 870,
            'vehicles': {
                'lf': 1
            }
        },
        84: {
            'name': 'Burning advent wreath',
            'credits': 800,
            'vehicles': {
                'lf': 1
            }
        },
        85: {
            'name': 'Brawl at christmas market',
            'credits': 600,
            'vehicles': {
                'fustw': 2
            },
            'patients': {
                'min': 0,
                'max': 2,
                'specialisation': 'Traumatology'
            }
        },
        86: {
            'name': 'MVA Rollover',
            'credits': 3000,
            'vehicles': {
                'lf': 3,
                'elw1': 2,
                'dlk': 1,
                'rw': 1,
                'fustw': 2
            },
            'patients': {
                'min': 0,
                'max': 4,
                'transport': 100,
                'specialisation': 'General Internal'
            },
            'expansions': [
                [25, 'Road accident']
            ]
        },
        87: {
            'name': 'Industrial Fire',
            'credits': 5300,
            'vehicles': {
                'lf': 5,
                'elw1': 2,
                'elw2': 1,
                'dlk': 2,
                'gefahr': 1
            },
            'patients': {
                'min': 0,
                'max': 4,
                'transport': 100,
                'specialisation': 'General Surgeon'
            }
        },
        88: {
            'name': 'Building Collapse',
            'credits': 7300,
            'vehicles': {
                'lf': 2,
                'dlk': 2,
                'elw1': 2,
                'elw2': 1,
                'rw': 2
            },
            'patients': {
                'min': 0,
                'max': 2,
                'transport': 100,
                'specialisation': 'General Surgeon'
            },
        },
        89: {
            'name': 'Trench Rescue',
            'credits': 2500,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'rw': 2,
                'fustw': 1
            },
            'patients': {
                'min': 2,
                'max': 4,
                'transport': 100,
                'specialisation': 'General Surgeon'
            }
        },
        90: {
            'name': 'Officer Dow',
            'credits': 1500,
            'vehicles': {
                'fustw': 6
            },
            'prisoners': {
                'min': 1,
                'max': 1,
                'transport': 100,
                'specialisation': 'General Surgeon'
            }
        },
        91: {
            'siwa': true,
            'name': 'Concert',
            'credits': 4400
        },
        92: {
            'siwa': true,
            'name': 'Soccer Game',
            'credits': 3400
        },
        93: {
            'siwa': true,
            'name': 'Baseball Game',
            'credits': 4400
        },
        94: {
            'name': 'Prisoner Escape',
            'credits': 4000,
            'vehicles': {
                'fustw': 10,
                'k9': 1,
                'polheli': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        95: {
            'name': 'Fleeing Suspect',
            'credits': 3000,
            'vehicles': {
                'fustw': 5,
                'polheli': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        96: {
            'name': 'Missing Person"',
            'credits': 4500,
            'vehicles': {
                'fustw': 5,
                'lf': 2,
                'elw1': 1,
                'polheli': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 100,
                'specialisation': 'General Internal'
            }
        },
        97: {
            'name': 'Warrant Standby',
            'credits': 2000,
            'vehicles': {
                'fustw': 3,
                'polheli': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            },
            'expansions': [
                [90, 'Officer Down']
            ]
        },
        98: {
            'name': 'Unknown Tanker Spill',
            'credits': 5300,
            'vehicles': {
                'lf': 4,
                'rw': 2,
                'elw1': 2,
                'elw2': 1,
                'fustw': 3,
                'gefahr': 2
            }
        },
        99: {
            'name': 'Commercial Fire',
            'credits': 4000,
            'vehicles': {
                'lf': 6,
                'dlk': 2,
                'elw1': 2,
                'elw2': 1,
                'rw': 2,
                'fustw': 2
            },
            'patients': {
                'min': 0,
                'max': 4,
                'transport': 25,
                'specialisation': 'General Internal'
            }
        },
        100: {
            'name': 'Animal Attack',
            'credits': 300,
            'vehicles': {
                'fustw': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'transport': 60,
                'specialisation': 'Traumatology'
            },
            'expansions': [
                [90, 'Officer Down']
            ]
        },
        101: {
            'name': 'Unknown Tanker Spill',
            'credits': 4300,
            'vehicles': {
                'lf': 4,
                'rw': 2,
                'elw1': 2,
                'elw2': 1,
                'gefahr': 1,
                'fustw': 3
            }
        },
        102: {
            'name': 'High Rise Fire',
            'credits': 4000,
            'vehicles': {
                'lf': 5,
                'dlk': 2,
                'elw1': 2,
                'rw': 1,
                'atem': 2,
                'gwl2': 1,
                'elw2': 1
            },
            'percentages': {
                'atem': 50
            },
            'patients': {
                'min': 4,
                'max': 7,
                'transport': 55,
                'specialisation': 'General Internal'
            }
        },
        103: {
            'name': 'Domestic Dispute',
            'credits': 300,
            'vehicles': {
                'fustw': 2
            },
            'expansions': [
                [90, 'Officer Down']
            ]
        },
        104: {
            'name': 'Hostage Taken',
            'credits': 2000,
            'vehicles': {
                'fustw': 4
            },
            'patients': {
                'min': 1,
                'max': 2,
                'transport': 100,
                'specialisation': 'General Surgeon'
            },
            'special': {
                'averageMinimumEmployeesSwat': 12
            }
        },
        105: {
            'name': 'Active Shooter',
            'credits': 2800,
            'vehicles': {
                'fustw': 4,
                'polheli': 1
            },
            'patients': {
                'min': 1,
                'max': 10,
                'transport': 100,
                'specialisation': 'General Surgeon'
            },
            'special': {
                'averageMinimumEmployeesSwat': 24
            }
        },
        106: {
            'name': 'High-Risk Warrant',
            'credits': 1400,
            'vehicles': {
                'fustw': 1
            },
            'special': {
                'averageMinimumEmployeesSwat': 18
            }
        },
        107: {
            'name': 'Drug Warrant',
            'credits': 1000,
            'vehicles': {
                'fustw': 1
            },
            'special': {
                'averageMinimumEmployeesSwat': 6
            }
        },
        108: {
            'onlyRd': true,
            'name': 'Anaphylaxis',
            'transport': 70,
            'specialisation': 'General Internal'
        },
        109: {
            'name': 'Noise Complaint',
            'credits': 300,
            'vehicles': {
                'fustw': 1
            }
        },
        110: {
            'name': 'Residential Fire',
            'credits': 1750,
            'vehicles': {
                'lf': 3,
                'dlk': 1,
                'elw1': 1,
                'fustw': 2
            },
            'patients': {
                'min': 0,
                'max': 4,
                'transport': 50,
                'specialisation': 'General Surgeon'
            }
        },
        111: {
            'name': 'Stabbing',
            'credits': 1500,
            'vehicles': {
                'fustw': 5
            },
            'patients': {
                'min': 1,
                'max': 6,
                'transport': 100,
                'specialisation': 'General Surgeon'
            }
        },
        112: {
            'vge': true,
            'name': 'Bomb Explosion',
            'credits': 14000,
            'vehicles': {
                'lf': 6,
                'dlk': 2,
                'elw1': 2,
                'elw2': 1,
                'rw': 2,
                'polheli': 1,
                'fustw': 14
            },
            'special': {
                'averageMinimumEmployeesSwat': 24
            }
        },
        113: {
            'name': 'Smoke in Cabin',
            'credits': 1200,
            'vehicles': {
                'lf': 2,
                'flf': 1
            }
        },
        114: {
            'name': 'Smoke in Cabin',
            'credits': 1200,
            'vehicles': {
                'lf': 2,
                'flf': 1
            }
        },
        115: {
            'name': 'Braking Overheat',
            'credits': 900,
            'vehicles': {
                'flf': 1,
                'lf': 1,
                'elw1': 1
            }
        },
        116: {
            'name': 'Braking Overheat',
            'credits': 900,
            'vehicles': {
                'flf': 1,
                'lf': 1,
                'elw1': 1
            }
        },
        117: {
            'name': 'Engine Fire',
            'credits': 1200,
            'vehicles': {
                'flf': 2,
                'elw1': 1,
                'lf': 1
            }
        },
        118: {
            'name': 'Engine Fire',
            'credits': 1900,
            'vehicles': {
                'flf': 3,
                'elw1': 1,
                'lf': 1
            }
        },
        119: {
            'onlyRd': true,
            'name': 'Food Poisoning',
            'transport': 100,
            'specialisation': 'General Surgeon',
        },
        120: {
            'name': 'Large Aircraft Crasht',
            'credits': 6000,
            'vehicles': {
                'flf': 4,
                'lf': 3,
                'elw1': 2,
                'fustw': 5
            },
            'patients': {
                'min': 1,
                'max': 25,
                'transport': 100,
                'specialisation': 'General Internal'
            }
        },
        121: {
            'name': 'Aircraft Hijack',
            'credits': 5000,
            'vehicles': {
                'elw1': 1,
                'fustw': 10
            },
            'patients': {
                'min': 1,
                'max': 10,
                'transport': 100,
                'specialisation': 'General Surgeon'
            },
            'special': {
                'averageMinimumEmployeesSwat': 18
            }
        },
        122: {
            'name': 'Carbon Monoxide Alarm',
            'credits': 100,
            'vehicles': {
                'lf': 1
            }
        },
        123: {
            'name': 'Bank Robbery',
            'credits': 1600,
            'vehicles': {
                'fustw': 6
            },
            'special': {
                'averageMinimumEmployeesSwat': 12
            }
        },
        124: {
            'name': 'Shooting',
            'credits': 1750,
            'vehicles': {
                'fustw': 7
            },
            'patients': {
                'min': 1,
                'max': 6,
                'transport': 100,
                'specialisation': 'Traumatology'
            }
        },
        125: {
            'name': 'Vehicle Accident - Entrapment',
            'credits': 1500,
            'vehicles': {
                'lf': 2,
                'rw': 2,
                'elw1': 1,
                'fustw': 2
            },
            'patients': {
                'min': 0,
                'max': 4,
                'transport': 95,
                'specialisation': 'Traumatology'
            }
        },
        126: {
            'name': 'Overdose',
            'vehicles': {
                'fustw': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 100,
                'specialisation': 'General Internal'
            }
        },
        127: {
            'name': 'Fire in an Office Building',
            'credits': 7000,
            'vehicles': {
                'lf': 10,
                'rw': 2,
                'dlk': 4,
                'elw1': 2,
                'elw2': 1,
                'atem': 1,
                'gwl2': 1,
                'fustw': 3
            },
            'percentages': {
                'atem': 50
            },
            'patients': {
                'min': 0,
                'max': 4,
                'transport': 100,
                'specialisation': 'General Internal'
            }
        },
        128: {
            'name': 'Aggressive Passenger',
            'credits': 600,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        129: {
            'name': 'Aggressive Passenger',
            'credits': 600,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        130: {
            'name': 'Powerline Down',
            'credits': 400,
            'vehicles': {
                'lf': 1
            }
        },
        131: {
            'name': 'Parole Violation',
            'credits': 400,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        132: {
            'onlyRd': true,
            'name': 'Allergic Reaction',
            'transport': 30,
            'specialisation': 'Cardiology',
        },
        133: {
            'name': 'Stolen Credit Card',
            'credits': 400,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        134: {
            'name': 'Search of a vehicle',
            'credits': 1000,
            'vehicles': {
                'fustw': 2,
                'k9': 1
            }
        },
        135: {
            'name': 'Small Violent Protest',
            'credits': 2200,
            'vehicles': {
                'fustw': 4,
                'k9': 1
            },
            'prisoners': {
                'min': 0,
                'max': 2
            },
            'patients': {
                'min': 0,
                'max': 3,
                'transport': 100,
                'specialisation': 'Traumatology'
            },
            'expansions': [
                [136, 'Medium Violent Protest']
            ]
        },
        136: {
            'name': 'Medium Violent Protest',
            'credits': 3000,
            'vehicles': {
                'fustw': 7,
                'k9': 1,
                'polheli': 1
            },
            'prisoners': {
                'min': 0,
                'max': 4
            },
            'patients': {
                'min': 0,
                'max': 5,
                'transport': 100,
                'specialisation': 'Traumatology'
            }
        },
        137: {
            'name': 'Drug Deal',
            'credits': 1500,
            'vehicles': {
                'fustw': 4,
                'k9': 1
            },
            'prisoners': {
                'min': 0,
                'max': 2
            }
        },
        138: {
            'name': 'Smoke Investigation',
            'credits': 700,
            'vehicles': {
                'lf': 1,
                'dlk': 1,
                'elw1': 1
            },
            'expansions': [
                [110, 'Residential Fire']
            ]
        },
        139: {
            'name': 'Drug Lab Fire',
            'credits': 3000,
            'vehicles': {
                'lf': 4,
                'dlk': 2,
                'elw1': 2,
                'gefahr': 2,
                'fustw': 4
            },
            'prisoners': {
                'min': 0,
                'max': 5
            },
            'patients': {
                'min': 1,
                'max': 10,
                'transport': 100,
                'specialisation': 'General Internal'
            }
        },
        140: {
            'name': 'Gas Station Robbery',
            'credits': 1250,
            'vehicles': {
                'fustw': 4,
                'polheli': 1
            },
            'prisoners': {
                'min': 0,
                'max': 3
            },
            'special': {
                'averageMinimumEmployeesSwat': 12
            }
        },
        141: {
            'name': 'Elevator Rescue',
            'credits': 400,
            'vehicles': {
                'lf': 1
            }
        },
        142: {
            'name': 'Warehouse Fire',
            'credits': 10000,
            'vehicles': {
                'lf': 10,
                'dlk': 4,
                'elw1': 2,
                'elw2': 1,
                'rw': 4,
                'gwl2': 3,
                'atem': 4,
                'fustw': 2
            },
            'patients': {
                'min': 0,
                'max': 2,
                'transport': 100,
                'specialisation': 'General Internal'
            }
        },
        143: {
            'siwa': true,
            'name': 'Assassination Threat',
            'credits': 4400
        },
        144: {
            'name': 'Truck in House Wall',
            'credits': 4400,
            'vehicles': {
                'lf': 3,
                'rw': 1
            },
            'patients': {
                'min': 0,
                'max': 3,
                'transport': 100,
                'specialisation': 'Traumatology'
            }
        },
        145: {
            'name': 'Burning Garbage Truck',
            'credits': 600,
            'vehicles': {
                'lf': 2
            }
        },
        146: {
            'onlyRd': true,
            'name': 'Child Birth',
            'transport': 100,
            'specialisation': 'Gynecology'
        },
        147: {
            'name': 'Keys Locked in Vehicle',
            'credits': 300,
            'vehicles': {
                'fustw': 1
            }
        },
        148: {
            'name': 'Stuck Climber',
            'credits': 650,
            'vehicles': {
                'lf': 1,
                'rw': 1,
                'dlk': 1
            },
            'percentages': {
                'dlk': 50
            },
            'patients': {
                'min': 1,
                'max': 1,
                'transport': 100,
                'specialisation': 'General Internal'
            }
        },
        149: {
            'siwa': true,
            'name': 'Smoke Detector Check',
            'credits': 400
        },
        150: {
            'name': 'Freight Train Derailment',
            'credits': 10000,
            'vehicles': {
                'lf': 10,
                'dlk': 4,
                'elw1': 2,
                'elw2': 1,
                'rw': 4,
                'atem': 2,
                'gefahr': 2,
                'fustw': 2
            },
            'patients': {
                'min': 0,
                'max': 4,
                'specialisation': 'Traumatology'
            }
        },
        151: {
            'name': 'Freight Train Derailment',
            'credits': 10000,
            'vehicles': {
                'lf': 10,
                'dlk': 4,
                'elw1': 2,
                'elw2': 1,
                'rw': 4,
                'atem': 2,
                'gefahr': 2,
                'fustw': 2
            },
            'patients': {
                'min': 0,
                'max': 4,
                'specialisation': 'Traumatology'
            }
        },
        152: {
            'name': 'Freight Train Derailment',
            'credits': 10000,
            'vehicles': {
                'lf': 10,
                'dlk': 4,
                'elw1': 2,
                'elw2': 1,
                'rw': 4,
                'atem': 2,
                'gefahr': 2,
                'fustw': 2
            },
            'patients': {
                'min': 0,
                'max': 4,
                'specialisation': 'Traumatology'
            }
        },
        153: {
            'name': 'Barn Fire',
            'credits': 1800,
            'vehicles': {
                'lf': 6,
                'elw1': 1,
                'dlk': 1,
                'atem': 1,
                'gwl2': 1
            }
        },
        154: {
            'name': 'Chlorine leak',
            'credits': 3500,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'rw': 1,
                'gefahr': 1,
                'elw2': 1
            },
            'patients': {
                'min': 1,
                'max': 15,
                'transport': 100,
                'specialisation': 'General Internal'
            }
        },
        155: {
            'name': 'Fire in Hospital',
            'credits': 6000,
            'vehicles': {
                'lf': 10,
                'elw1': 2,
                'rw': 2,
                'gwl2': 1,
                'atem': 1,
                'dlk': 3,
                'elw2': 1
            },
            'patients': {
                'min': 1,
                'max': 25,
                'transport': 50,
                'specialisation': 'General Internal'
            }
        },
        156: {
            'onlyRd': true,
            'name': 'Turbulence Injury',
            'specialisation': 'Traumatology',
            'transport': 40
        },
        157: {
            'onlyRd': true,
            'name': 'Turbulence Injury',
            'specialisation': 'Traumatology',
            'transport': 40
        },
        158: {
            'name': 'Accident Involving a Bus',
            'credits': 1000,
            'vehicles': {
                'lf': 2,
                'rw': 1
            },
            'patients': {
                'min': 1,
                'max': 12,
                'transport': 50,
                'specialisation': 'General Internal'
            }
        },
        159: {
            'name': 'Serious Accident Involving a Bus',
            'credits': 2000,
            'vehicles': {
                'lf': 4,
                'rw': 2,
                'elw1': 1,
                'dlk': 1,
                'fustw': 2
            },
            'patients': {
                'min': 1,
                'max': 12,
                'transport': 80,
                'specialisation': 'General Surgeon'
            }
        },
        160: {
            'name': 'Lost Child"',
            'credits': 700,
            'vehicles': {
                'fustw': 3
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 78,
                'specialisation': 'General Internal'
            }
        },
        161: {
            'siwa': true,
            'name': 'DUI Checkpoint',
            'credits': 3500
        },
        162: {
            'name': 'Light Aircraft Crash (Airfield)',
            'credits': 2000,
            'vehicles': {
                'lf': 1,
                'flf': 2
            },
            'patients': {
                'min': 0,
                'max': 4,
                'transport': 60,
                'specialisation': 'Traumatology'
            }
        },
        163: {
            'name': 'Light Aircraft Crash',
            'credits': 4000,
            'vehicles': {
                'lf': 4,
                'elw1': 1,
                'rw': 1,
                'gwl2': 1,
                'gefahr': 1
            },
            'percentages': {
                'gefahr': 50
            },
            'patients': {
                'min': 0,
                'max': 4,
                'transport': 60,
                'specialisation': 'Traumatology'
            }
        },
        164: {
            'name': 'Cable theft',
            'credits': 550,
            'vehicles': {
                'fustw': 3,
                'k9': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        165: {
            'name': 'Drowning',
            'credits': 1250,
            'vehicles': {
                'lf': 1,
                'elw1': 1,
                'rw': 1,
                'boot': 1
            },
            'patients': {
                'min': 0,
                'max': 2,
                'transport': 80,
                'specialisation': 'Traumatology'
            }
        },
        166: {
            'name': 'Drowning',
            'credits': 1250,
            'vehicles': {
                'lf': 1,
                'elw1': 1,
                'rw': 1,
                'boot': 1
            },
            'patients': {
                'min': 0,
                'max': 2,
                'transport': 80,
                'specialisation': 'Traumatology'
            }
        },
        167: {
            'name': 'Car in river',
            'credits': 1400,
            'vehicles': {
                'lf': 2,
                'rw': 1,
                'elw1': 1,
                'boot': 1
            },
            'patients': {
                'min': 1,
                'max': 2,
                'transport': 20,
                'specialisation': 'General Internal'
            }
        },
        168: {
            'name': 'Baum auf Gleisen',
            'credits': 1400,
            'vehicles': {
                'lf': 2,
                'rw': 1,
                'elw1': 1,
                'boot': 1
            },
            'patients': {
                'min': 1,
                'max': 2,
                'transport': 20,
                'specialisation': 'General Internal'
            }
        },
        169: {
            'name': 'Small flooding',
            'credits': 550,
            'vehicles': {
                'lf': 2
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 40,
                'specialisation': 'Traumatology'
            },
            'expansions': [
                [170, 'Medium flooding']
            ]
        },
        170: {
            'name': 'Medium flooding',
            'credits': 1550,
            'vehicles': {
                'lf': 4,
                'elw1': 1,
                'boot': 1
            },
            'patients': {
                'min': 0,
                'max': 3,
                'transport': 40,
                'specialisation': 'General Internal'
            },
            'expansions': [
                [171, 'Large flooding']
            ]
        },
        171: {
            'name': 'Large flooding',
            'credits': 2500,
            'vehicles': {
                'lf': 6,
                'elw1': 2,
                'rw': 1,
                'boot': 2
            },
            'patients': {
                'min': 0,
                'max': 6,
                'transport': 40,
                'specialisation': 'General Internal'
            },
            'expansions': [
                [172, 'Giant flooding']
            ]
        },
        172: {
            'name': 'Giant flooding',
            'credits': 4000,
            'vehicles': {
                'lf': 8,
                'elw1': 2,
                'elw2': 1,
                'fustw': 3,
                'rw': 2,
                'boot': 2
            },
            'patients': {
                'min': 0,
                'max': 10,
                'transport': 40,
                'specialisation': 'General Internal'
            }
        },
        173: {
            'name': 'Light aircraft crash in water',
            'credits': 4000,
            'vehicles': {
                'lf': 4,
                'elw1': 1,
                'rw': 1,
                'gefahr': 1,
                'boot': 1
            },
            'percentages': {
                'gefahr': 50
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 60,
                'specialisation': 'Traumatology'
            }
        },
        174: {
            'name': 'Light aircraft crash in water',
            'credits': 4000,
            'vehicles': {
                'lf': 4,
                'elw1': 1,
                'rw': 1,
                'gefahr': 1,
                'boot': 1
            },
            'percentages': {
                'gefahr': 50
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 60,
                'specialisation': 'Traumatology'
            }
        },
        175: {
            'name': 'Bridge collapse',
            'credits': 7000,
            'vehicles': {
                'lf': 5,
                'elw1': 2,
                'dlk': 1,
                'rw': 2,
                'atem': 1,
                'elw2': 1,
                'boot': 2,
                'fustw': 2
            },
            'patients': {
                'min': 0,
                'max': 20,
                'transport': 50,
                'specialisation': 'Traumatology'
            }
        },
        176: {
            'onlyRd': true,
            'name': 'Stroke"',
            'specialisation': 'Neurology',
            'transport': 100
        },
        177: {
            'onlyRd': true,
            'name': 'Unconscious Person',
            'specialisation': 'General Surgeon',
            'transport': 50
        },
        178: {
            'onlyRd': true,
            'name': 'Hemorrhage',
            'specialisation': 'Traumatology',
            'transport': 100
        },
        179: {
            'name': 'Burst water main',
            'credits': 1200,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'rw': 2,
                'fustw': 1
            },
            'patients': {
                'min': 0,
                'max': 4,
                'transport': 25,
                'specialisation': 'General Internal'
            },
            'expansions': [
                [170, 'Medium flooding']
            ]
        },
        180: {
            'name': 'Shots fired at Officer',
            'credits': 4100,
            'vehicles': {
                'fustw': 8,
                'polheli': 1,
                'k9': 2
            },
            'patients': {
                'min': 1,
                'max': 2,
                'transport': 100,
                'specialisation': 'Traumatology'
            },
            'special': {
                'averageMinimumEmployeesSwat': 6
            }
        },
        181: {
            'name': 'School fire',
            'credits': 6000,
            'vehicles': {
                'lf': 5,
                'elw1': 1,
                'dlk': 1,
                'rw': 1,
                'atem': 1,
                'elw2': 1,
                'gwl2': 1,
                'fustw': 2
            },
            'percentages': {
                'gwl2': 25,
                'atem': 50,
                'elw2': 20
            },
            'patients': {
                'min': 0,
                'max': 6,
                'transport': 50,
                'specialisation': 'General Internal'
            }
        },
        182: {
            'name': 'Cafeteria fire',
            'credits': 1300,
            'vehicles': {
                'lf': 3,
                'elw1': 2
            },
            'patients': {
                'min': 0,
                'max': 2,
                'transport': 50,
                'specialisation': 'General Internal'
            }
        },
        183: {
            'name': 'Fire in fast food restaurant',
            'credits': 1850,
            'vehicles': {
                'lf': 5,
                'elw1': 1,
                'dlk': 1,
                'atem': 1
            }
        },
        184: {
            'name': 'Container Ship Fire',
            'credits': 10000,
            'vehicles': {
                'lf': 4,
                'elw1': 1,
                'dlk': 1,
                'rw': 1,
                'atem': 2,
                'gefahr': 1,
                'elw2': 1,
                'rdboot': 1,
                'fdboot': 1
            },
            'patients': {
                'min': 0,
                'max': 6,
                'transport': 50,
                'specialisation': 'General Internal'
            }
        },
        185: {
            'name': 'Dock Crane fire',
            'credits': 6000,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'dlk': 1,
                'fdboot': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 20,
                'specialisation': 'General Internal'
            }
        },
        186: {
            'name': 'Recycling Centre fire',
            'credits': 10000,
            'vehicles': {
                'rw': 3,
                'lf': 12,
                'elw1': 2,
                'elw2': 1,
                'dlk': 2,
                'atem': 1,
                'gwl2': 3,
                'fustw': 2
            },
            'patients': {
                'min': 0,
                'max': 2,
                'specialisation': 'General Internal',
                'transport': 20
            }
        },
        187: {
            'name': 'Kidnaping',
            'credits': 2000,
            'vehicles': {
                'fustw': 4,
                'polheli': 1,
                'k9': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 80,
                'specialisation': 'General Internal'
            },
            'expansions': [
                [104, 'Hostage Taken']
            ]
        },
        188: {
            'name': 'Cruise ship sinking',
            'credits': 15000,
            'vehicles': {
                'lf': 7,
                'elw1': 2,
                'rw': 2,
                'elw2': 1,
                'boot': 2,
                'fdboot': 1,
                'rdboot': 1
            },
            'patients': {
                'min': 0,
                'max': 20,
                'transport': 50,
                'specialisation': 'General Internal'
            }
        },
        189: {
            'name': 'Sinking boat',
            'credits': 1500,
            'vehicles': {
                'lf': 2,
                'elw1': 1,
                'rw': 2,
                'boot': 2
            },
            'patients': {
                'min': 0,
                'max': 6,
                'transport': 40,
                'specialisation': 'General Internal'
            }
        },
        190: {
            'name': 'Sinking boat',
            'credits': 1500,
            'vehicles': {
                'lf': 2,
                'elw1': 1,
                'rw': 2,
                'boot': 2
            },
            'patients': {
                'min': 0,
                'max': 6,
                'transport': 40,
                'specialisation': 'General Internal'
            }
        },
        191: {
            'name': 'Sinking boat',
            'credits': 1500,
            'vehicles': {
                'lf': 2,
                'elw1': 1,
                'rw': 2,
                'boot': 2
            },
            'patients': {
                'min': 0,
                'max': 6,
                'transport': 40,
                'specialisation': 'General Internal'
            }
        },
        192: {
            'name': 'Traffic accident with train',
            'credits': 3000,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'rw': 2,
                'fustw': 2
            },
            'patients': {
                'min': 0,
                'max': 4,
                'transport': 70,
                'specialisation': 'Traumatology'
            },
            'expansions': [
                [150, 'Freight Train Derailment'],
                [151, 'Freight Train Derailment'],
                [152, 'Freight Train Derailment']
            ]
        },
        193: {
            'name': 'Animal Rescue',
            'credits': 900,
            'vehicles': {
                'lf': 1,
                'rw': 1
            }
        },
        194: {
            'name': 'Large MVA in tunnel',
            'credits': 7000,
            'vehicles': {
                'lf': 6,
                'elw1': 2,
                'rw': 3,
                'gwl2': 1,
                'atem': 1,
                'gefahr': 1,
                'elw2': 1,
                'fustw': 3
            },
            'patients': {
                'min': 0,
                'max': 14,
                'transport': 25,
                'specialisation': 'General Internal'
            }
        },
        195: {
            'name': 'Single vehicle fire in tunnel',
            'credits': 1500,
            'vehicles': {
                'lf': 3,
                'elw1': 1
            },
            'patients': {
                'min': 1,
                'max': 4,
                'transport': 60,
                'specialisation': 'General Internal'
            }
        },
        196: {
            'name': 'Kitchen Fire',
            'credits': 1000,
            'vehicles': {
                'lf': 2
            },
            'expansions': [
                [110, 'Residential Fire']
            ]
        }
    };
}
else if (I18n.locale == "nl") {
    lssm.carsById = {
        "0": ["SIV | Snel Interventie Voertuig", 0],
        "1": ["TS 8/9 | Tankautospuit (8/9 personen)", 0],
        "2": ["AL | Autoladder", 0],
        "3": ["DA-OvD-B | Officier van Dienst - Brandweer", 0],
        "4": ["HV-G | Hulpverleningsvoertuig Groot", 0],
        "5": ["AB | Adembeschermingsvoertuig", 0],
        "6": ["TST 8/9 | Tankautospuit Terreinvaardig (8/9 personen)", 0],
        "7": ["TST 6/7 | Tankautospuit Terreinvaardig (6/7 personen)", 0],
        "8": ["TST 4 | Tankautospuit Terreinvaardig (4 personen)", 0],
        "9": ["TS 4 | Tankautospuit (4 personen)", 0],
        "10": ["SL | Slangenwagen", 0],
        "11": ["WVD | Waarschuwings- en Verkenningsdienst", 0],
        "12": ["TST-NBB 8/9 | Tankautospuit Natuurbrandbestrijding (8/9 personen)", 0],
        "13": ["TS8 (4x4)", 0],
        "14": ["TST-NBB 6/7 | Tankautospuit Natuurbrandbestrijding (6/7 personen)", 0],
        "15": ["TST-NBB 4 | Tankautospuit Natuurbrandbestrijding (4 personen)", 0],
        "16": ["Ambulance", 1],
        "17": ["TS 6/7 | Tankautospuit (6/7 personen)", 0],
        "18": ["HW | Hoogwerker", 0],
        "19": ["DA-HOvD-B | Hoofd-Officier van Dienst - Brandweer", 0],
        "20": ["DA | Dienstauto (4 personen)", 0],
        "21": ["DB | Dienstbus (9 personen)", 0],
        "22": ["DA Noodhulp | Dienstauto Noodhulp", 2],
        "23": ["Lifeliner", 1],
        "24": ["AGS | Adviseur Gevaarlijke Stoffen", 0],
        "25": ["DB Noodhulp | Dienstbus Noodhulp", 2],
        "26": ["HA | Haakarmvoertuig", 0],
        "27": ["ABH | Adembeschermingshaakarmbak", 0],
        "28": ["Politiehelikopter", 2],
        "29": ["WTH | Watertransporthaakarmbak", 0],
        "30": ["Zorgambulance | B-ambulance", 1],
        "31": ["CO | Commandovoertuig", 0],
        "32": ["COH | Commandohaakarmbak", 0],
        "33": ["WO | Waterongevallenvoertuig", 0],
        "34": ["TW | Tankwagen", 0],
        "35": ["OvD-P | Officier van Dienst - Politie", 2],
        "36": ["WOA | Waterongevallenaanhanger", 0],
        "37": ["MMT-Auto", 1],
        "38": ["OvD-G | Officier van Dienst - Geneeskunde", 1],
        "39": ["ME Commandovoertuig | Mobiele Eenheid - Commandovoertuig", 2],
        "40": ["ME Groepsvoertuig | Mobiele Eenheid - Groepsvoertuig", 2],
        "41": ["CT (8x8) | Crashtender (8x8)", 0],
        "42": ["CT (6x6) | Crashtender (6x6)", 0],
        "43": ["CT (4x4) | Crashtender (4x4)", 0],
        "44": ["AFO/OSC | Airport Fire Officer / On Scene Commander", 0],
        "45": ["DBH | Dompelpomphaakarmbak", 0],
        "46": ["DM Noddhulp | Dienstmotorfiets Noodhulp", 2]
    };
    lssm.missions = {
        0: {
            'name': 'Brandende afvalbak',
            'credits': 110,
            'vehicles': {
                'lf': 1
            },
        },
        1: {
            'name': 'Brandende container',
            'credits': 170,
            'vehicles': {
                'lf': 1
            },
        },
        2: {
            'name': 'Brandende personenauto',
            'credits': 370,
            'vehicles': {
                'lf': 1
            },
        },
        3: {
            'name': 'Brandende motorfiets',
            'credits': 340,
            'vehicles': {
                'lf': 1
            }
        },
        4: {
            'name': 'Brandend gras',
            'credits': 200,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [140, 'Natuurbrand']
            ]
        },
        5: {
            'name': 'Brand in woonkamer',
            'credits': 1400,
            'vehicles': {
                'lf': 2,
                'elw1': 1,
                'fustw': 1,
                'dlk': 1
            },
            'percentages': {
                'dlk': 80
            },
        },
        6: {
            'name': 'Brand in tuinhuis',
            'credits': 600,
            'vehicles': {
                'lf': 1
            }
        },
        7: {
            'name': 'Brandende boom',
            'credits': 210,
            'vehicles': {
                'lf': 1
            },
        },
        8: {
            'name': 'Brandend afval',
            'credits': 220,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [54, 'Brand in sporthal']
            ]
        },
        9: {
            'name': 'Brandend hooi',
            'credits': 250,
            'vehicles': {
                'lf': 1
            }
        },
        10: {
            'name': 'Brandende traktor',
            'credits': 600,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [28, 'Brand in landbouwschuur']
            ]
        },
        11: {
            'name': 'Brandende bromfiets',
            'credits': 240,
            'vehicles': {
                'lf': 1
            }
        },
        12: {
            'name': 'Boom op de weg',
            'credits': 310,
            'vehicles': {
                'lf': 1
            }
        },
        13: {
            'name': 'Brandende vrachtwagen',
            'credits': 980,
            'vehicles': {
                'lf': 2,
                'elw1': 1,
                'gwl2': 1
            },
            'percentages': {
                'gwl2': 10
            },
        },
        14: {
            'name': 'Heidebrand',
            'credits': 1000,
            'vehicles': {
                'lf': 2
            }
        },
        15: {
            'name': 'Bosbrand',
            'credits': 500,
            'vehicles': {
                'lf': 1,
                'gwl2': 1
            },
            'percentages': {
                'gwl2': 10
            },
        },
        16: {
            'name': 'Brand in woonwagen',
            'credits': 1100,
            'vehicles': {
                'lf': 1,
                'elw1': 1,
                'dlk': 1
            },
            'percentages': {
                'dlk': 80
            },
            'patients': {
                'max': 1,
                'specialisation': 'Interne Geneeskunde'
            }
        },
        17: {
            'name': 'Brandende Dixi',
            'credits': 340,
            'vehicles': {
                'lf': 1
            }
        },
        18: {
            'name': 'Brandende struik',
            'credits': 700,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [14, 'Heidebrand']
            ]
        },
        19: {
            'name': 'Brandende aanhangwagen',
            'credits': 650,
            'vehicles': {
                'lf': 1
            }
        },
        20: {
            'name': 'Brand in kelder',
            'credits': 1800,
            'vehicles': {
                'elw1': 1,
                'lf': 3,
                'elw2': 1,
                'fustw': 1,
                'gwl2': 1
            },
            'percentages': {
                'elw2': 50,
                'gwl2': 10
            },
            'patients': {
                'min': 0,
                'max': 2,
                'specialisation': 'Interne Geneeskunde'
            }
        },
        21: {
            'name': 'Schornsteinbrand',
            'credits': 2400,
            'vehicles': {
                'lf': 1,
                'dlk': 1
            }
        },
        22: {
            'name': 'Brandend dak',
            'credits': 2700,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'elw2': 1,
                'dlk': 1,
                'fustw': 1
            },
            'percentages': {
                'elw2': 50
            }
        },
        23: {
            'name': 'Brand in cafetaria',
            'credits': 1200,
            'vehicles': {
                'lf': 1,
                'dlk': 1
            },
            'percentages': {
                'dlk': 10
            }
        },
        24: {
            'name': 'Brandend bushokje',
            'credits': 900,
            'vehicles': {
                'lf': 1
            }
        },
        25: {
            'name': 'Verkeersongeval met beknelling',
            'credits': 1000,
            'vehicles': {
                'lf': 1,
                'rw': 1,
                'elw1': 1,
                'fustw': 1
            },
            'percentages': {
                'rw': 10
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 40,
                'specialisation': 'Traumatologie'
            }
        },
        26: {
            'name': 'Brand in supermarkt',
            'credits': 3510,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'elw2': 1,
                'dlk': 1,
                'gwl2': 1,
                'fustw': 1
            },
            'percentages': {
                'elw2': 50,
                'gwl2': 20
            }
        },
        27: {
            'name': 'Persoon aangereden',
            'credits': 700,
            'vehicles': {
                'rw': 1,
                'lf': 1
            },
            'percentages': {
                'rw': 30
            }
        },
        28: {
            'name': 'Brand in landbouwschuur',
            'credits': 1600,
            'vehicles': {
                'lf': 2,
                'dlk': 1,
                'elw1': 1,
                'gwl2': 1
            },
            'percentages': {
                'dlk': 30,
                'gwl2': 20
            }
        },
        29: {
            'name': 'Brand in werkplaats',
            'credits': 2470,
            'vehicles': {
                'lf': 3,
                'rw': 1,
                'elw1': 1,
                'gwl2': 1,
                'atem': 1,
                'elw2': 1,
                'fustw': 1
            },
            'percentages': {
                'gwl2': 20,
                'atem': 50,
                'elw2': 70
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 100,
                'specialisation': 'Algemene Heelkunde'
            }
        },
        30: {
            'name': 'Lekkende dieseltank',
            'credits': 190,
            'vehicles': {
                'lf': 1,
                'rw': 1
            },
            'percentages': {
                'rw': 20
            }
        },
        31: {
            'name': 'Oliespoor',
            'credits': 400,
            'vehicles': {
                'lf': 1
            }
        },
        32: {
            'name': 'Schoorsteenbrand woning met rietenkap',
            'credits': 1310,
            'vehicles': {
                'lf': 2,
                'dlk': 1,
                'elw1': 1
            }
        },
        33: {
            'name': 'Brandende landbouwmachine',
            'credits': 1200,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [127, 'Brand in landbouwschuur']
            ]
        },
        34: {
            'name': 'Brand in supermarkt',
            'credits': 2100,
            'vehicles': {
                'lf': 2,
                'elw1': 1,
                'dlk': 1,
                'fustw': 1
            }
        },
        35: {
            'name': 'Brand in ziekenhuis',
            'credits': 2510,
            'vehicles': {
                'lf': 2,
                'elw1': 1,
                'elw2': 1,
                'elw3': 1,
                'dlk': 1
            },
            'percentages': {
                'elw2': 10,
                'elw3': 10
            }
        },
        36: {
            'name': 'Brandende goederenwagon',
            'credits': 3110,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'gwl2': 1,
                'mess': 1,
                'gefahr': 1
            },
            'percentages': {
                'mess': 50,
                'gefahr': 80
            }
        },
        37: {
            'name': 'Brandende afvalbak',
            'credits': 110,
            'vehicles': {
                'lf': 1
            }
        },
        38: {
            'name': 'Brandende afvalbak',
            'credits': 110,
            'vehicles': {
                'lf': 1
            }
        },
        39: {
            'name': 'Brandende afvalbak',
            'credits': 110,
            'vehicles': {
                'lf': 1
            }
        },
        40: {
            'name': 'Brandende afvalbak',
            'credits': 110,
            'vehicles': {
                'lf': 1
            }
        },
        41: {
            'vge': true,
            'name': 'Brand in kantoorpand',
            'credits': 10010,
            'vehicles': {
                'lf': 8,
                'mess': 1,
                'elw1': 2,
                'elw2': 1,
                'dlk': 2,
                'gwl2': 1,
                'atem': 1,
                'gefahr': 1
            }
        },
        42: {
            'name': 'Brand in tankstation',
            'credits': 3720,
            'vehicles': {
                'rw': 1,
                'lf': 4,
                'elw1': 1,
                'elw2': 1,
                'elw3': 1,
                'gwl2': 1,
                'atem': 1,
                'dlk': 1,
                'mess': 1,
                'gefahr': 1,
                'fustw': 2
            },
            'percentages': {
                'mess': 50,
                'gefahr': 50
            }
        },
        43: {
            'vge': true,
            'name': 'Kettingbotsing',
            'credits': 10010,
            'vehicles': {
                'lf': 12,
                'rw': 3,
                'elw1': 3,
                'elw2': 2,
                'fustw': 5
            },
            'patients': {
                'min': 8,
                'max': 12,
                'specialisation': 'Traumatologie'
            }
        },
        44: {
            'name': 'Liftopsluiting',
            'credits': 170,
            'vehicles': {
                'lf': 1
            }
        },
        45: {
            'onlyRd': true,
            'name': 'Overdosis alcohol',
            'specialisation': 'Interne Geneeskunde'
        },
        46: {
            'onlyRd': true,
            'name': 'Bloedneus',
            'transport': 100,
            'specialisation': 'Algemene Heelkunde',
        },
        47: {
            'onlyRd': true,
            'name': 'Pijn op de borst',
            'transport': 100,
            'specialisation': 'Cardiologie'
        },
        48: {
            'onlyRd': true,
            'name': 'Astma aanval',
            'transport': 50,
            'specialisation': 'Interne Geneeskunde'
        },
        49: {
            'onlyRd': true,
            'name': 'Beroerte',
            'transport': 50,
            'specialisation': 'Neurologie'
        },
        50: {
            'onlyRd': true,
            'name': 'Koortsstuip',
            'transport': 90,
            'specialisation': 'Interne Geneeskunde'
        },
        51: {
            'onlyRd': true,
            'name': 'Gevallen persoon',
            'transport': 30,
            'specialisation': 'Traumatologie'
        },
        52: {
            'name': 'Brand in garagebedrijf',
            'credits': 1800,
            'vehicles': {
                'lf': 2,
                'dlk': 1,
                'elw1': 1
            }
        },
        53: {
            'name': 'Brand in sporthal',
            'credits': 1700,
            'vehicles': {
                'lf': 4,
                'dlk': 1,
                'elw1': 1,
                'elw2': 1,
                'rw': 1,
                'atem': 1,
                'gwl2': 1,
                'elw3': 1
            },
            'percentages': {
                'elw3': 60
            }
        },
        54: {
            'name': 'Brand in sporthal',
            'credits': 230,
            'vehicles': {
                'lf': 1,
                'dlk': 1
            },
            'percentages': {
                'dlk': 20
            }
        },
        55: {
            'name': 'Brand in sporthal',
            'credits': 1000,
            'vehicles': {
                'lf': 2,
                'dlk': 1,
                'elw1': 1
            }
        },
        56: {
            'name': 'Brand in sporthal',
            'credits': 3100,
            'vehicles': {
                'lf': 8,
                'dlk': 2,
                'elw1': 2,
                'elw2': 1,
                'rw': 1,
                'elw3': 1,
                'gwl2': 1,
                'atem': 1
            },
            'patients': {
                'min': 0,
                'max': 1
            }
        },
        57: {
            'name': 'Kat in boom',
            'credits': 210,
            'vehicles': {
                'lf': 1,
                'dlk': 1
            },
            'percentages': {
                'dlk': 20
            }
        },
        58: {
            'name': 'Buitenbrand',
            'credits': 250,
            'vehicles': {
                'lf': 1,
            }
        },
        59: {
            'vge': true,
            'name': 'Brand in opslagloods',
            'credits': 17500,
            'vehicles': {
                'lf': 16,
                'mess': 2,
                'gefahr': 1,
                'elw1': 4,
                'elw2': 2,
                'rw': 4,
                'dlk': 4,
                'atem': 1,
                'gwl2': 3
            }
        },
        60: {
            'name': 'Brand in slaapkamer',
            'credits': 500,
            'vehicles': {
                'lf': 1,
                'elw1': 1,
                'dlk': 1
            },
            'percentages': {
                'dlk': 80
            }
        },
        61: {
            'name': 'Brand in slaapkamer',
            'credits': 500,
            'vehicles': {
                'lf': 1,
                'dlk': 1
            },
            'percentages': {
                'dlk': 10
            },
            'expansions': [
                [22, 'Brandend dak']
            ]
        },
        62: {
            'name': 'Brand in keuken',
            'credits': 2000,
            'vehicles': {
                'lf': 3,
                'dlk': 1,
                'elw1': 1,
                'elw2': 1
            },
            'percentages': {
                'elw2': 50
            }
        },
        63: {
            'name': 'Brand in keuken',
            'credits': 500,
            'vehicles': {
                'lf': 1,
                'dlk': 1
            },
            'percentages': {
                'dlk': 10
            }
        },
        64: {
            'name': 'Brand in keuken',
            'credits': 700,
            'vehicles': {
                'lf': 2,
                'dlk': 1
            },
            'percentages': {
                'dlk': 80
            }
        },
        65: {
            'name': 'Takken op de weg',
            'credits': 310,
            'vehicles': {
                'lf': 1
            }
        },
        66: {
            'name': 'Boom op fietspad',
            'credits': 310,
            'vehicles': {
                'lf': 1
            }
        },
        67: {
            'name': 'Omgewaaide bouwsteiger',
            'credits': 320,
            'vehicles': {
                'lf': 1,
                'dlk': 1
            },
            'percentages': {
                'dlk': 30
            }
        },
        68: {
            'name': 'Boom op auto',
            'credits': 350,
            'vehicles': {
                'lf': 1,
                'rw': 1
            },
            'percentages': {
                'rw': 10
            }
        },
        69: {
            'name': 'Persoon bekneld onder boom',
            'credits': 1000,
            'vehicles': {
                'lf': 1,
                'elw1': 1,
                'rw': 1
            },
            'percentages': {
                'rw': 40
            },
            'patients': {
                'min': 1,
                'max': 1,
                'transport': 100,
                'specialisation': 'Traumatologie'
            }
        },
        70: {
            'name': 'Winkeldiefstal',
            'credits': 200,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        71: {
            'name': 'Winkeldiefstal',
            'credits': 200,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        72: {
            'name': 'Winkeldiefstal',
            'credits': 200,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        73: {
            'name': 'Tasjesdief',
            'credits': 200,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        74: {
            'name': 'Huiselijk geweld',
            'credits': 750,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 2
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Traumatologie'
            }
        },
        75: {
            'name': 'Bestuurder onder invloed',
            'credits': 300,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        76: {
            'name': 'Klein vliegtuig neergestort',
            'credits': 3000,
            'vehicles': {
                'lf': 2,
                'elw1': 1,
                'elw2': 1,
                'rw': 1,
                'fustw': 2
            },
            'percentages': {
                'elw2': 10
            },
            'patients': {
                'min': 1,
                'max': 5,
                'transport': 100,
                'specialisation': 'Traumatologie'
            }
        },
        77: {
            'name': 'Klein vliegtuig neergestort',
            'credits': 2000,
            'vehicles': {
                'lf': 1,
                'elw1': 1,
                'rw': 1,
                'fustw': 2
            },
            'percentages': {
                'rw': 80
            },
            'patients': {
                'min': 1,
                'max': 2,
                'transport': 100,
                'specialisation': 'Traumatologie'
            }
        },
        78: {
            'name': 'Rookontwikkeling in winkel',
            'credits': 350,
            'vehicles': {
                'lf': 1,
                'dlk': 1
            },
            'percentages': {
                'dlk': 10
            },
            'expansions': [
                [34, 'Brand in supermarkt']
            ]
        },
        79: {
            'name': 'Verletzte Person auf Baugerüst',
            'credits': 1800,
            'vehicles': {
                'elw1': 1,
                'dlk': 1,
                'hoehen': 1,
                'lf': 1
            },
            'percentages': {
                'dlk': 30
            },
            'patients': {
                'min': 1,
                'max': 1,
                'specialisation': 'Unfallchirugie'
            }
        },
        80: {
            'name': 'Rauchentwicklung in Museum',
            'credits': 2000,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'dlk': 1,
                'atem': 1,
                'fustw': 2
            },
            'patients': {
                'min': 0,
                'max': 8,
                'nef': 75,
                'specialisation': 'Allgemeine Innere'
            }
        },
        81: {
            'name': 'Einbruch in Keller',
            'credits': 400,
            'vehicles': {
                'fustw': 1
            }
        },
        82: {
            'name': 'Einbruch in Wohnung',
            'credits': 400,
            'vehicles': {
                'fustw': 1
            }
        },
        83: {
            'name': 'Gefahrgut-LKW verunglückt',
            'credits': 2500,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'elw2': 1,
                'rw': 1,
                'mess': 1,
                'dekon': 1,
                'gefahr': 1,
                'fustw': 2
            },
            'percentages': {
                'elw2': 40,
                'rw': 50,
                'mess': 30,
                'dekon': 10
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Unfallchirugie'
            },
            'expansions': [
                [213, 'Gasexplosion']
            ]
        },
        84: {
            'name': 'Brennende Lok',
            'credits': 1800,
            'vehicles': {
                'lf': 4,
                'gwl2': 1,
                'atem': 1,
                'rw': 1,
                'elw1': 1,
                'elw2': 1
            },
            'percentages': {
                'atem': 30,
                'rw': 50,
                'elw2': 10
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 40,
                'specialisation': 'Allgemeine Chirugie'
            }
        },
        85: {
            'name': 'Sachbeschädigung',
            'credits': 200,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        86: {
            'name': 'Sporthallenbrand',
            'credits': 3000,
            'vehicles': {
                'lf': 7,
                'elw1': 1,
                'elw2': 1,
                'dlk': 2,
                'gwl2': 1,
                'atem': 1
            },
            'percentages': {
                'elw2': 30,
                'gwl2': 30,
                'atem': 50
            }
        },
        87: {
            'name': 'Kleinflugzeug abgestürzt',
            'credits': 3000,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'elw2': 1,
                'rw': 1,
                'fustw': 2
            },
            'percentages': {
                'elw2': 10
            },
            'patients': {
                'min': 1,
                'max': 5,
                'transport': 100,
                'nef': 80,
                'specialisation': 'Unfallchirugie'
            }
        },
        88: {
            'name': 'Brennender Bollerwagen',
            'credits': 500,
            'vehicles': {
                'lf': 1
            }
        },
        89: {
            'name': 'LKW Auffahrunfall',
            'credits': 2500,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'rw': 1,
                'oel': 1,
                'gefahr': 1,
                'fustw': 2
            },
            'percentages': {
                'elw1': 75,
                'oel': 25,
                'gefahr': 10
            },
            'patients': {
                'min': 0,
                'max': 2,
                'transport': 90,
                'nef': 70,
                'specialisation': 'Unfallchirugie'
            }
        },
        90: {
            'name': 'RuhestÃ¶rung',
            'credits': 250,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            },
            'expansions': [
                [74, 'Randalierende Person']
            ]
        },
        91: {
            'name': 'Keller unter Wasser',
            'credits': 370,
            'vehicles': {
                'lf': 1
            }
        },
        92: {
            'onlyRd': true,
            'name': 'Schlaganfall',
            'transport': 90,
            'nef': 45,
            'specialisation': 'Neurologie',
            'tragehilfe': 20
        },
        93: {
            'name': 'Brennender Bus',
            'credits': 3000,
            'vehicles': {
                'lf': 5,
                'elw1': 1,
                'elw2': 1,
                'rw': 1,
                'fustw': 2
            },
            'percentages': {
                'elw2': 75
            },
            'patients': {
                'min': 4,
                'max': 11,
                'nef': 30,
                'specialisation': 'Allgemeine Innere'
            }
        },
        94: {
            'name': 'Kleine Ölspur',
            'credits': 400,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [30, 'Große Ölspur'],
                [95, 'Ausgedehnte Ölspur']
            ]
        },
        95: {
            'name': 'Ausgedehnte Ölspur',
            'credits': 4000,
            'vehicles': {
                'lf': 6,
                'oel': 1,
                'elw1': 1,
                'fustw': 2
            }
        },
        96: {
            'name': 'Feuer in Schnellrestaurant',
            'credits': 2900,
            'vehicles': {
                'lf': 3
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        97: {
            'name': 'Aufgerissener Öltank',
            'credits': 2500,
            'vehicles': {
                'lf': 3,
                'oel': 1,
                'elw1': 1,
            },
            'percentages': {
                'elw1': 60,
                'oel': 80
            }
        },
        98: {
            'name': 'Angefahrene Person',
            'credits': 300,
            'vehicles': {
                'fustw': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'transport': 38,
                'specialisation': 'Unfallchirugie'
            }
        },
        99: {
            'vge': true,
            'name': 'Flugzeug abgestürzt',
            'credits': 17000,
            'vehicles': {
                'lf': 22,
                'atem': 1,
                'oel': 1,
                'mess': 1,
                'dlk': 1,
                'elw1': 2,
                'elw2': 2,
                'rw': 6,
                'fustw': 10
            },
            'percentages': {
                'atem': 45,
                'oel': 25
            },
            'patients': {
                'min': 10,
                'max': 25,
                'transport': 85,
                'nef': 80,
                'specialisation': 'Unfallchirugie'
            }
        },
        100: {
            'name': 'Küchenbrand',
            'credits': 900,
            'vehicles': {
                'lf': 1,
                'fustw': 1
            },
            'percentages': {
                'fustw': 50
            }
        },
        101: {
            'name': 'Zimmerbrand',
            'credits': 1500,
            'vehicles': {
                'lf': 2,
                'dlk': 1,
                'fustw': 1
            },
            'percentages': {
                'dlk': 30,
                'fustw': 50
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 50,
                'transport': 50,
                'specialisation': 'Allgemeine Innere'
            },
            'expansions': [
                [102, 'Feuer in Einfamilienhaus'],
                [103, 'Feuer in Einfamilienhaus'],
                [104, 'Feuer in Einfamilienhaus'],
                [105, 'Feuer in Einfamilienhaus']
            ]
        },
        102: {
            'name': 'Feuer in Einfamilienhaus',
            'credits': 2000,
            'vehicles': {
                'lf': 3,
                'dlk': 1,
                'elw1': 1
            },
            'percentages': {
                'dlk': 50,
                'elw1': 70
            }
        },
        103: {
            'name': 'Feuer in Einfamilienhaus',
            'credits': 2200,
            'vehicles': {
                'lf': 3,
                'dlk': 1,
                'elw1': 1,
                'fustw': 1
            },
            'percentages': {
                'dlk': 50,
                'elw1': 70
            },
            'patients': {
                'min': 0,
                'max': 3,
                'nef': 20,
                'transport': 30,
                'specialisation': 'Allgemeine Innere'
            }
        },
        104: {
            'name': 'Feuer in Einfamilienhaus',
            'credits': 2200,
            'vehicles': {
                'lf': 3,
                'dlk': 1,
                'elw1': 1
            },
            'percentages': {
                'dlk': 50,
                'elw1': 70
            },
            'patients': {
                'min': 0,
                'max': 3,
                'nef': 20,
                'transport': 30,
                'specialisation': 'Allgemeine Innere'
            }
        },
        105: {
            'name': 'Feuer in Einfamilienhaus',
            'credits': 2200,
            'vehicles': {
                'lf': 3,
                'dlk': 1,
                'elw1': 1,
                'fustw': 1
            },
            'percentages': {
                'dlk': 50,
                'elw1': 70
            }
        },
        106: {
            'name': 'Massenschlägerei',
            'credits': 1800,
            'vehicles': {
                'fustw': 5
            },
            'prisoners': {
                'min': 0,
                'max': 5
            }
        },
        107: {
            'name': 'Massenschlägerei',
            'credits': 1800,
            'vehicles': {
                'fustw': 5
            },
            'prisoners': {
                'min': 0,
                'max': 5
            },
            'patients': {
                'min': 1,
                'max': 6,
                'nef': 10,
                'transport': 30,
                'specialisation': 'Unfallchirugie'
            }
        },
        108: {
            'onlyRd': true,
            'name': 'Schwangere in Notsituation',
            'transport': 100,
            'nef': 100,
            'specialisation': 'Gynäkologie',
            'tragehilfe': 30
        },
        109: {
            'onlyRd': true,
            'name': 'Beginnende Geburt',
            'transport': 100,
            'nef': 95,
            'specialisation': 'Gynäkologie',
            'tragehilfe': 20
        },
        110: {
            'onlyRd': true,
            'name': 'Vaginale Blutung',
            'transport': 50,
            'nef': 20,
            'specialisation': 'Gynäkologie',
            'tragehilfe': 10
        },
        111: {
            'name': 'Brennende Vogelscheuche',
            'credits': 350,
            'vehicles': {
                'lf': 1
            }
        },
        112: {
            'name': 'Brennendes Kürbisfeld',
            'credits': 850,
            'vehicles': {
                'lf': 1
            }
        },
        113: {
            'name': 'Kürbissuppe übergekocht',
            'credits': 1500,
            'vehicles': {
                'lf': 2,
                'elw1': 1,
                'atem': 1
            },
            'percentages': {
                'atem': 50
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Neurologie'
            }
        },
        114: {
            'name': 'Hexe hängt in Baum',
            'credits': 900,
            'vehicles': {
                'lf': 1,
                'dlk': 1,
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 50,
                'specialisation': 'Unfallchirugie'
            }
        },
        115: {
            'onlyRd': true,
            'name': 'Zombiebiss',
            'transport': 100,
            'specialisation': 'Neurologie',
        },
        116: {
            'name': 'Monster ausgebrochen',
            'credits': 1600,
            'vehicles': {
                'fustw': 4
            }
        },
        117: {
            'name': 'Kürbisse geklaut',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            }
        },
        118: {
            'name': 'Frankenstein gesichtet',
            'credits': 550,
            'vehicles': {
                'fustw': 2
            }
        },
        119: {
            'name': 'Süßigkeitendiebstahl',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            }
        },
        120: {
            'name': 'LKW umgestürzt',
            'credits': 2200,
            'vehicles': {
                'lf': 2,
                'rw': 1,
                'elw1': 1,
                'fwk': 1
            },
            'percentages': {
                'fwk': 75
            },
            'patients': {
                'min': 1,
                'max': 2,
                'transport': 50,
                'nef': 50,
                'specialisation': 'Unfallchirugie'
            }
        },
        121: {
            'name': 'LKW umgestürzt',
            'credits': 2500,
            'vehicles': {
                'lf': 2,
                'rw': 1,
                'elw1': 1,
                'fwk': 1,
                'fustw': 2
            },
            'percentages': {
                'fwk': 75
            },
            'patients': {
                'min': 1,
                'max': 2,
                'transport': 50,
                'nef': 50,
                'specialisation': 'Unfallchirugie'
            }
        },
        122: {
            'name': 'Motorradunfall',
            'credits': 600,
            'vehicles': {
                'lf': 1,
                'fustw': 1
            },
            'percentages': {
                'lf': 10
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 70,
                'transport': 100,
                'specialisation': 'Unfallchirugie'
            }
        },
        123: {
            'name': 'Verkehrsunfall',
            'credits': 1100,
            'vehicles': {
                'lf': 1,
                'fustw': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 20,
                'transport': 40,
                'specialisation': 'Unfallchirugie'
            }
        },
        124: {
            'name': 'Verkehrsunfall',
            'credits': 1600,
            'vehicles': {
                'lf': 1,
                'rw': 1
            },
            'percentages': {
                'rw': 50
            },
            'patients': {
                'min': 2,
                'max': 3,
                'nef': 50,
                'transport': 70,
                'specialisation': 'Unfallchirugie'
            }
        },
        125: {
            'name': 'Verkehrsunfall',
            'credits': 1700,
            'vehicles': {
                'lf': 1,
                'rw': 1,
                'fustw': 1
            },
            'percentages': {
                'rw': 50
            },
            'patients': {
                'min': 2,
                'max': 3,
                'nef': 50,
                'transport': 70,
                'specialisation': 'Unfallchirugie'
            }
        },
        126: {
            'name': 'Verkehrsunfall',
            'credits': 2000,
            'vehicles': {
                'lf': 2,
                'rw': 1
            },
            'patients': {
                'min': 2,
                'max': 4,
                'nef': 50,
                'transport': 70,
                'specialisation': 'Unfallchirugie'
            }
        },
        127: {
            'name': 'Verkehrsunfall',
            'credits': 2200,
            'vehicles': {
                'lf': 2,
                'rw': 1,
                'fustw': 2
            },
            'patients': {
                'min': 2,
                'max': 4,
                'nef': 50,
                'transport': 70,
                'specialisation': 'Unfallchirugie'
            }
        },
        128: {
            'name': 'Auffahrunfall',
            'credits': 700,
            'vehicles': {
                'lf': 1,
                'fustw': 1
            },
            'percentages': {
                'lf': 10
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 10,
                'specialisation': 'Unfallchirugie'
            },
            'expansions': [
                [25, 'Verkehrsunfall'],
                [123, 'Verkehrsunfall'],
                [124, 'Verkehrsunfall'],
                [125, 'Verkehrsunfall'],
                [126, 'Verkehrsunfall'],
                [127, 'Verkehrsunfall'],
                [89, 'LKW Auffahrunfall']
            ]
        },
        129: {
            'name': 'Brennender Adventskranz',
            'credits': 800,
            'vehicles': {
                'lf': 1
            }
        },
        130: {
            'name': 'Rangelei auf Weihnachtsmarkt',
            'credits': 600,
            'vehicles': {
                'fustw': 2
            },
            'patients': {
                'min': 0,
                'max': 2,
                'specialisation': 'Unfallchirugie'
            }
        },
        131: {
            'name': 'Mittlerer Feldbrand',
            'credits': 2000,
            'vehicles': {
                'lf': 3,
                'gwl2': 1,
                'elw1': 1
            },
            'percentages': {
                'gwl2': 20,
                'elw1': 50
            },
            'expansions': [
                [132, 'Großer Feldbrand'],
                [133, 'Großer Feldbrand']
            ],
            'special': {
                'averageMinimumEmployeesFire': 25
            }
        },
        132: {
            'name': 'Großer Feldbrand',
            'credits': 5000,
            'vehicles': {
                'lf': 5,
                'gwl2': 1,
                'elw1': 1
            },
            'special': {
                'averageMinimumEmployeesFire': 40
            }
        },
        133: {
            'name': 'Großer Feldbrand',
            'credits': 5100,
            'vehicles': {
                'lf': 5,
                'gwl2': 1,
                'elw1': 1,
                'fustw': 1
            },
            'special': {
                'averageMinimumEmployeesFire': 40
            }
        },
        134: {
            'name': 'Großer Waldbrand',
            'credits': 4000,
            'vehicles': {
                'lf': 3,
                'gwl2': 1,
                'elw1': 1
            },
            'percentages': {
                'gwl2': 70
            },
            'expansions': [
                [136, 'Großfeuer im Wald'],
                [137, 'Großfeuer im Wald']
            ]
        },
        135: {
            'name': 'Großer Waldbrand',
            'credits': 4100,
            'vehicles': {
                'lf': 3,
                'gwl2': 1,
                'elw1': 1,
                'fustw': 1
            },
            'percentages': {
                'gwl2': 70
            },
            'expansions': [
                [136, 'Großfeuer im Wald'],
                [137, 'Großfeuer im Wald']
            ]
        },
        136: {
            'name': 'Großfeuer im Wald',
            'credits': 8000,
            'vehicles': {
                'lf': 10,
                'gwl2': 1,
                'elw1': 2,
                'atem': 1,
                'elw2': 1,
                'dlk': 1,
                'fustw': 1
            },
            'percentages': {
                'elw2': 30,
                'dlk': 10
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 50,
                'specialisation': 'Allgemeine Innere'
            },
            'special': {
                'averageMinimumEmployeesFire': 80
            }
        },
        137: {
            'name': 'Großfeuer im Wald',
            'credits': 8100,
            'vehicles': {
                'lf': 10,
                'gwl2': 1,
                'elw1': 2,
                'atem': 1,
                'elw2': 1,
                'dlk': 1,
                'fustw': 3
            },
            'percentages': {
                'elw2': 30,
                'dlk': 10
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 50,
                'specialisation': 'Allgemeine Innere'
            },
            'special': {
                'averageMinimumEmployeesFire': 80
            }
        },
        138: {
            'name': 'Flächenbrand',
            'credits': 1500,
            'vehicles': {
                'lf': 2
            }
        },
        139: {
            'name': 'Flächenbrand',
            'credits': 3500,
            'vehicles': {
                'lf': 4,
                'gwl2': 1,
                'elw1': 1
            },
            'percentages': {
                'gwl2': 20,
                'elw1': 20
            },
            'special': {
                'averageMinimumEmployeesFire': 30
            }
        },
        140: {
            'name': 'Flächenbrand',
            'credits': 1600,
            'vehicles': {
                'lf': 2,
                'fustw': 2
            }
        },
        141: {
            'name': 'Flächenbrand',
            'credits': 3600,
            'vehicles': {
                'lf': 4,
                'gwl2': 1,
                'elw1': 1,
                'fustw': 2
            },
            'percentages': {
                'gwl2': 20,
                'elw1': 20
            },
            'special': {
                'averageMinimumEmployeesFire': 30
            }
        },
        142: {
            'name': 'Feuer auf Balkon',
            'credits': 1500,
            'vehicles': {
                'lf': 2,
                'dlk': 1
            },
            'percentages': {
                'dlk': 30
            }
        },
        143: {
            'name': 'Brennende Papiercontainer',
            'credits': 400,
            'vehicles': {
                'lf': 1
            }
        },
        144: {
            'name': 'Brennende Hecke',
            'credits': 400,
            'vehicles': {
                'lf': 1
            }
        },
        145: {
            'name': 'Trunkenheitsfahrt',
            'credits': 150,
            'vehicles': {
                'fustw': 1
            }
        },
        146: {
            'name': 'Brennendes Reetdachhaus',
            'credits': 4200,
            'vehicles': {
                'lf': 5,
                'dlk': 1,
                'elw1': 1,
                'atem': 1,
                'fustw': 2
            },
            'percentages': {
                'atem': 30
            },
            'patients': {
                'min': 1,
                'max': 2,
                'nef': 50,
                'transport': 50,
                'specialisation': 'Allgemeine Innere'
            }
        },
        147: {
            'name': 'Krankentransport',
            'credits': 130,
            'vehicles': {
                'ktw': 1
            }
        },
        148: {
            'name': 'Ampelausfall',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            },
            'expansions': [
                [128, 'Auffahrunfall']
            ]
        },
        149: {
            'name': 'Pannenfahrzeug',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            }
        },
        150: {
            'name': 'Hausfriedensbruch',
            'credits': 150,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        151: {
            'name': 'Raub',
            'credits': 1200,
            'vehicles': {
                'fustw': 3
            },
            'prisoners': {
                'min': 0,
                'max': 3
            }
        },
        152: {
            'name': 'Häusliche Gewalt',
            'credits': 750,
            'vehicles': {
                'fustw': 2
            },
            'prisoners': {
                'min': 0,
                'max': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Unfallchirugie'
            }
        },
        153: {
            'name': 'Hilflose Person',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        154: {
            'name': 'Hilflose Person',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'tragehilfe': 10,
                'transport': 100,
                'specialisation': 'Allgemeine Innere'
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        155: {
            'onlyRd': true,
            'name': 'Akuter Harnstau',
            'specialisation': 'Urologie',
            'tragehilfe': 5,
            'transport': 100
        },
        156: {
            'onlyRd': true,
            'name': 'Haarnleiter Blutung',
            'specialisation': 'Urologie',
            'tragehilfe': 5,
            'transport': 100,
            'nef': 20
        },
        157: {
            'onlyRd': true,
            'name': 'HerzrhytmusstÃ¶rungen',
            'specialisation': 'Kardiologie',
            'tragehilfe': 20,
            'transport': 100,
            'nef': 60
        },
        158: {
            'name': 'Tiefgarage unter Wasser',
            'credits': 370,
            'vehicles': {
                'lf': 1
            }
        },
        159: {
            'name': 'Ã„ste auf Fahrbahn',
            'credits': 120,
            'vehicles': {
                'lfogkworw': 1
            }
        },
        160: {
            'name': 'Umherfliegendes Baumaterial',
            'credits': 150,
            'vehicles': {
                'lf': 1
            }
        },
        161: {
            'name': 'PKW auf Baum',
            'credits': 900,
            'vehicles': {
                'lf': 1
            }
        },
        162: {
            'name': 'Baum auf PKW',
            'credits': 1400,
            'vehicles': {
                'lf': 1,
                'fustw': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'transport': 50,
                'nef': 50,
                'specialisation': 'Unfallchirugie'
            }
        },
        163: {
            'name': 'Baum auf Dach',
            'credits': 1400,
            'vehicles': {
                'lf': 1,
                'dlk': 1,
                'fwk': 1
            },
            'percentages': {
                'dlk': 10,
                'fwk': 10
            }
        },
        164: {
            'onlyRd': true,
            'name': 'Kopfplatzwunde',
            'specialisation': 'Allgemeine Chirugie',
            'tragehilfe': 5,
            'transport': 90
        },
        165: {
            'onlyRd': true,
            'name': 'Gehirnerschütterung',
            'specialisation': 'Neurologie',
            'tragehilfe': 5,
            'transport': 90,
            'nef': 20
        },
        166: {
            'name': 'Fassadenteile drohen zu fallen',
            'credits': 1200,
            'vehicles': {
                'lf': 1,
                'dlk': 1,
                'elw1': 1,
                'hoehen': 1,
                'fustw': 1
            },
            'percentages': {
                'dlk': 40,
                'hoehen': 40
            }
        },
        167: {
            'name': 'Beschädigter Dachbereich',
            'credits': 1400,
            'vehicles': {
                'lf': 2,
                'dlk': 1,
                'elw1': 1,
                'hoehen': 1,
                'fustw': 1
            },
            'percentages': {
                'dlk': 50,
                'hoehen': 20
            }
        },
        168: {
            'name': 'Baum auf Gleisen',
            'credits': 600,
            'vehicles': {
                'lf': 1,
                'fustw': 1
            },
            'expansions': [
                [237, 'Verkehrsunfall mit Zug']
            ]
        },
        169: {
            'name': 'Baum auf Gleisen',
            'credits': 600,
            'vehicles': {
                'lf': 1,
                'fustw': 1
            },
            'expansions': [
                [237, 'Verkehrsunfall mit Zug']
            ]
        },
        170: {
            'name': 'Baum auf Gleisen',
            'credits': 600,
            'vehicles': {
                'lf': 1,
                'fustw': 1
            },
            'expansions': [
                [237, 'Verkehrsunfall mit Zug']
            ]
        },
        171: {
            'name': 'Parkdeck voll Wasser gelaufen',
            'credits': 4000,
            'vehicles': {
                'lf': 1,
                'gwl2': 1,
                'oel': 1,
                'elw2': 1,
                'fustw': 2
            }
        },
        172: {
            'name': 'Straße unter Wasser',
            'credits': 600,
            'vehicles': {
                'lf': 1
            }
        },
        173: {
            'name': 'Straße unter Wasser',
            'credits': 600,
            'vehicles': {
                'lf': 1,
                'fustw': 2
            }
        },
        174: {
            'name': 'Erdrutsch',
            'credits': 1020,
            'vehicles': {
                'fustw': 2,
                'gkw': 1,
                'mtwtz': 1,
                'radlader': 1
            }
        },
        175: {
            'name': 'Erdrutsch',
            'credits': 900,
            'vehicles': {
                'gkw': 1,
                'mtwtz': 1,
                'radlader': 1
            }
        },
        176: {
            'name': 'LKW in Hauswand',
            'credits': 2100,
            'vehicles': {
                'gkw': 1,
                'mtwtz': 1,
                'mzkw': 1,
                'fwk': 1,
                'dlk': 1,
                'lf': 2,
                'elw1': 1
            },
            'percentages': {
                'fwk': 75,
                'dlk': 70
            },
            'expansions': [
                [177, 'Eingestürztes Wohnhaus'],
                [213, 'Gasexplosion']
            ]
        },
        177: {
            'name': 'Eingestürztes Wohnhaus',
            'credits': 4600,
            'vehicles': {
                'gkw': 2,
                'radlader': 2,
                'mtwtz': 1,
                'mzkw': 1,
                'lf': 3,
                'dlk': 1,
                'elw1': 1,
                'rw': 1,
                'fwk': 1,
                'fustw': 2
            },
            'percentages': {
                'dlk': 30,
                'fwk': 75
            },
            'patients': {
                'min': 0,
                'max': 7,
                'specialisation': 'Allgemeine Innere'
            }
        },
        178: {
            'name': 'Gefahrgut-LKW verunglückt',
            'credits': 2900,
            'vehicles': {
                'gkw': 1,
                'radlader': 1,
                'lf': 3,
                'elw1': 1,
                'elw2': 1,
                'rw': 1,
                'mess': 1,
                'dekon': 1,
                'gefahr': 1,
                'fustw': 2
            },
            'percentages': {
                'elw2': 40,
                'rw': 50,
                'mess': 30,
                'dekon': 10
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Unfallchirugie'
            },
            'expansions': [
                [213, 'Gasexplosion']
            ]
        },
        179: {
            'onlyRd': true,
            'name': 'Schädelverletzung',
            'specialisation': 'Neurochirugie',
            'tragehilfe': 5,
            'transport': 100,
            'nef': 100
        },
        180: {
            'onlyRd': true,
            'name': 'Wirbelsäulenverlätzung',
            'specialisation': 'Neurochirugie',
            'tragehilfe': 5,
            'transport': 100,
            'nef': 100,
            'rth': 100
        },
        181: {
            'onlyRd': true,
            'name': 'Sturz aus Höe',
            'specialisation': 'Neurochirugie',
            'tragehilfe': 5,
            'transport': 100,
            'nef': 100,
            'rth': 100
        },
        182: {
            'onlyRd': true,
            'name': 'Sturz aus Höe',
            'specialisation': 'Neurochirugie',
            'tragehilfe': 5,
            'transport': 100,
            'nef': 50
        },
        183: {
            'onlyRd': true,
            'name': 'Sonnenstich',
            'specialisation': 'Allgemeine Innere',
            'tragehilfe': 5,
            'transport': 10
        },
        184: {
            'onlyRd': true,
            'name': 'Hitzschlag',
            'specialisation': 'Allgemeine Innere',
            'tragehilfe': 2,
            'transport': 60,
            'nef': 40
        },
        185: {
            'onlyRd': true,
            'name': 'Hitzekrampf',
            'specialisation': 'Allgemeine Innere',
            'transport': 80,
            'nef': 50
        },
        186: {
            'name': 'Lagerhallenbrand',
            'credits': 5630,
            'vehicles': {
                'gkw': 1,
                'mtwtz': 1,
                'radlader': 1,
                'anhdle': 1,
                'rw': 1,
                'lf': 5,
                'elw1': 1,
                'elw2': 1,
                'fwk': 1,
                'dlk': 2,
                'atem': 1,
                'mess': 1,
                'gwl2': 1,
                'fustw': 2
            },
            'percentages': {
                'fwk': 15
            },
            'patients': {
                'min': 1,
                'max': 4,
                'specialisation': 'Allgemeine Innere',
                'transport': 65,
                'nef': 20
            }
        },
        187: {
            'name': 'Feuer im Lagerraum',
            'credits': 2230,
            'vehicles': {
                'lf': 2,
                'elw1': 1,
                'dlk': 1,
                'mess': 1,
            },
            'percentages': {
                'dlk': 50,
                'mess': 20
            },
            'expansions': [
                [186, 'Lagerhallenbrand']
            ]
        },
        188: {
            'name': 'Personenkontrolle',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        189: {
            'name': 'Verkehrbehinderung',
            'credits': 80,
            'vehicles': {
                'fustw': 1
            },
            'expansions': [
                [73, 'Schlägerei']
            ]
        },
        190: {
            'name': 'Diebstahl aus Kfz',
            'credits': 150,
            'vehicles': {
                'fustw': 1
            }
        },
        191: {
            'name': 'Radweg auf Baum',
            'credits': 310,
            'vehicles': {
                'lfogkworw': 1
            },
            'expansions': [
                [194, 'Baum unter Person eingeklemmt']
            ]
        },
        192: {
            'name': 'Brennende Trafostation',
            'credits': 1900,
            'vehicles': {
                'lf': 2,
                'elw1': 1
            }
        },
        193: {
            'name': 'Brennende Trafostation',
            'credits': 2000,
            'vehicles': {
                'lf': 2,
                'elw1': 1,
                'fustw': 1
            }
        },
        194: {
            'name': 'Baum unter Person eingeklemmt',
            'credits': 1000,
            'vehicles': {
                'lf': 1,
                'fustw': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'transport': 100,
                'nef': 100,
                'specialisation': 'Unfallchirugie'
            }
        },
        195: {
            'name': 'Schwerpunkteinsatz Tageswohnungseinbrüche',
            'credits': 1000,
            'vehicles': {
                'grukw': 3,
                'lebefkw': 1
            }
        },
        196: {
            'name': 'Schwerpunkteinsatz Verkehrsüberwachung',
            'credits': 1000,
            'vehicles': {
                'grukw': 3,
                'lebefkw': 1
            }
        },
        197: {
            'name': 'Präsenzeinsatz Volksfest',
            'credits': 2000,
            'vehicles': {
                'grukw': 3,
                'lebefkw': 1
            }
        },
        198: {
            'name': 'Jugendschutzkontrolle in Diskothek',
            'credits': 2500,
            'vehicles': {
                'grukw': 3,
                'lebefkw': 1,
                'fustw': 2
            }
        },
        199: {
            'name': 'Geländedurchsuchung nach Beweismittel',
            'credits': 750,
            'vehicles': {
                'grukw': 3,
                'lebefkw': 1
            }
        },
        200: {
            'name': 'Gelpante Razzia',
            'credits': 5500,
            'vehicles': {
                'grukw': 6,
                'lebefkw': 2,
                'fustw': 2,
                'gefkw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 5
            }
        },
        201: {
            'name': 'Fußball Bundesliga-Spiel',
            'credits': 9000,
            'vehicles': {
                'grukw': 9,
                'lebefkw': 3,
                'fustw': 2,
                'gefkw': 1,
                'fukw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 5
            }
        },
        202: {
            'name': 'Diebstahl auf Weihnachtsmarkt',
            'credits': 300,
            'vehicles': {
                'fustw': 1
            }
        },
        203: {
            'name': 'Brennende Weihnachtsmarktbude',
            'credits': 610,
            'vehicles': {
                'lf': 2
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Allgemeine Innere',
                'nef': 10
            }
        },
        204: {
            'name': 'Scheunenbrand',
            'credits': 3500,
            'vehicles': {
                'lf': 6,
                'elw1': 1,
                'dlk': 1,
                'atem': 1,
                'gwl2': 1
            },
            'percentages': {
                'dlk': 50,
                'atem': 25,
                'gwl2': 60
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Unfallchirugie',
            },
            'special': {
                'averageMinimumEmployeesFire': 30
            },
            'expansions': [
                [205, 'Feuer auf Bauernhof - Mittel']
            ]
        },
        205: {
            'name': 'Feuer auf Bauernhof - Mittel',
            'credits': 5100,
            'vehicles': {
                'lf': 7,
                'elw1': 1,
                'dlk': 2,
                'atem': 1,
                'gwl2': 1,
                'fustw': 3
            },
            'percentages': {
                'dlk': 75,
                'atem': 70,
                'gwl2': 90
            },
            'patients': {
                'min': 2,
                'max': 4,
                'nef': 33,
                'specialisation': 'Unfallchirugie',
            },
            'special': {
                'averageMinimumEmployeesFire': 60
            },
            'expansions': [
                [206, 'Feuer auf Bauernhof - Groß']
            ]
        },
        206: {
            'name': 'Feuer auf Bauernhof - Groß',
            'credits': 10200,
            'vehicles': {
                'lf': 15,
                'fwk': 1,
                'elw1': 2,
                'elw2': 1,
                'dlk': 4,
                'atem': 2,
                'gwl2': 2,
                'fustw': 3,
                'gkw': 2,
                'mtwtz': 1,
                'radlader': 2
            },
            'percentages': {
                'fwk': 15,
                'atem': 70,
                'gwl2': 90
            },
            'patients': {
                'min': 2,
                'max': 7,
                'nef': 33,
                'specialisation': 'Unfallchirugie',
            },
            'special': {
                'averageMinimumEmployeesFire': 105
            }
        },
        207: {
            'vge': true,
            'name': 'Gefahrgutunfall - Groß',
            'credits': 16010,
            'vehicles': {
                'lf': 20,
                'mess': 4,
                'gefahr': 4,
                'elw1': 3,
                'elw2': 2,
                'dekon': 1,
                'rw': 5,
                'dlk': 2,
                'atem': 3,
                'fustw': 3,
                'gkw': 2,
                'mtwtz': 1,
                'radlader': 2
            },
            'patients': {
                'min': 10,
                'max': 20,
                'specialisation': 'Allgemeine Innere',
            }
        },
        208: {
            'name': 'Leck in Chemikalientank',
            'credits': 4000,
            'vehicles': {
                'lf': 8,
                'elw1': 1,
                'elw2': 1,
                'rw': 2,
                'gwl2': 1,
                'atem': 1,
                'oel': 1,
                'mess': 2,
                'gefahr': 1,
                'dekon': 1,
                'fustw': 2
            },
            'percentages': {
                'gwl2': 20,
                'oel': 50
            },
            'patients': {
                'min': 0,
                'max': 20,
                'nef': 15,
                'specialisation': 'Allgemeine Innere',
            },
            'expansions': [
                [213, 'Gasexplosion']
            ]
        },
        209: {
            'name': 'Fahrraddiebstahl',
            'credits': 150,
            'vehicles': {
                'fustw': 1
            }
        },
        210: {
            'onlyRd': true,
            'name': 'Unfall mit Motorsäge',
            'transport': 50,
            'nef': 95,
            'specialisation': 'Unfallchirugie'
        },
        211: {
            'onlyRd': true,
            'name': 'Unterzuckerung',
            'transport': 60,
            'nef': 20,
            'specialisation': 'Allgemeine Innere',
            'tragehilfe': 20
        },
        212: {
            'onlyRd': true,
            'name': 'Akute Bauchschmerzen',
            'transport': 80,
            'nef': 20,
            'specialisation': 'Allgemeine Chirugie',
            'tragehilfe': 5
        },
        213: {
            'name': 'Gasexplosion',
            'credits': 11200,
            'vehicles': {
                'lf': 20,
                'fwk': 1,
                'rw': 2,
                'dlk': 2,
                'elw1': 4,
                'elw2': 2,
                'gwl2': 2,
                'mess': 2,
                'atem': 2,
                'dekon': 1,
                'fustw': 4,
                'gkw': 1,
                'mtwtz': 1,
                'radlader': 1,
                'anhdle': 1,
                'mzkw': 1
            },
            'percentages': {
                'fwk': 40,
                'dekon': 10
            },
            'patients': {
                'min': 0,
                'max': 10,
                'nef': 40,
                'transport': 70,
                'specialisation': 'Unfallchirugie',
            }
        },
        214: {
            'name': 'Bürobrand',
            'credits': 3000,
            'vehicles': {
                'lf': 6,
                'rw': 2,
                'elw1': 1,
                'elw2': 1,
                'dlk': 2,
                'atem': 1,
                'fustw': 2
            },
            'percentages': {
                'rw': 30,
                'elw2': 30
            },
            'patients': {
                'min': 5,
                'max': 10,
                'nef': 40,
                'transport': 70,
                'specialisation': 'Allgemeine Innere',
            }
        },
        215: {
            'name': 'Chlorgasaustritt',
            'credits': 4000,
            'vehicles': {
                'lf': 7,
                'elw1': 2,
                'elw2': 1,
                'atem': 2,
                'mess': 1,
                'gefahr': 1,
                'fustw': 4
            },
            'patients': {
                'min': 5,
                'max': 12,
                'nef': 60,
                'transport': 70,
                'specialisation': 'Allgemeine Innere',
            }
        },
        216: {
            'name': 'Brennender Bollerwagen',
            'credits': 500,
            'vehicles': {
                'lf': 1
            }
        },
        217: {
            'name': 'Brennender Bollerwagen',
            'credits': 500,
            'vehicles': {
                'lf': 1
            }
        },
        218: {
            'name': 'Brennender Bollerwagen',
            'credits': 500,
            'vehicles': {
                'lf': 1
            }
        },
        219: {
            'name': 'Brennender Bollerwagen',
            'credits': 500,
            'vehicles': {
                'lf': 1
            }
        },
        220: {
            'name': 'Brennender Bollerwagen',
            'credits': 500,
            'vehicles': {
                'lf': 1
            }
        },
        221: {
            'vge': true,
            'name': 'Zugunglück (Groß)',
            'credits': 17000,
            'vehicles': {
                'lf': 30,
                'dlk': 3,
                'rw': 6,
                'atem': 4,
                'oel': 1,
                'elw1': 6,
                'elw2': 3,
                'gwl2': 2,
                'fwk': 4,
                'radlader': 2,
                'gkw': 1,
                'mzkw': 1,
                'mtwtz': 1,
                'fustw': 12
            },
            'patients': {
                'min': 20,
                'max': 40,
                'nef': 80,
                'specialisation': 'Unfallchirugie',
            }
        },
        222: {
            'vge': true,
            'name': 'Zugunglück (Klein)',
            'credits': 14000,
            'vehicles': {
                'lf': 20,
                'dlk': 2,
                'rw': 3,
                'atem': 2,
                'oel': 1,
                'elw1': 3,
                'elw2': 1,
                'gwl2': 1,
                'fwk': 2,
                'radlader': 1,
                'mtwtz': 1,
                'fustw': 6
            },
            'patients': {
                'min': 10,
                'max': 20,
                'nef': 80,
                'specialisation': 'Unfallchirugie',
            }
        },
        223: {
            'siwa': true,
            'name': 'Brandsicherheitswache bei Volksfest',
            'credits': 4400
        },
        224: {
            'siwa': true,
            'name': 'Brandsicherheitswachdienst im Theater',
            'credits': 4000
        },
        225: {
            'siwa': true,
            'name': 'Dorf/Stadtfest',
            'credits': 7000
        },
        226: {
            'siwa': true,
            'name': 'Volkslauf',
            'credits': 5000
        },
        227: {
            'siwa': true,
            'name': 'Angemeldete Demonstration',
            'credits': 5000
        },
        228: {
            'siwa': true,
            'name': 'Absicherung Musikumzug',
            'credits': 2000
        },
        229: {
            'siwa': true,
            'name': 'Absicherung Radrennen',
            'credits': 4000
        },
        230: {
            'siwa': true,
            'name': 'Feuerprobealarm an Schule',
            'credits': 1000
        },
        231: {
            'name': 'Entflohener Gefangener',
            'credits': 4000,
            'vehicles': {
                'fustw': 10,
                'polheli': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        232: {
            'name': 'Kabeldiebstahl',
            'credits': 3500,
            'vehicles': {
                'fustw': 2,
                'polheli': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        233: {
            'name': 'Suche nach Vermissten',
            'credits': 4500,
            'vehicles': {
                'fustw': 2,
                'polheli': 1,
                'lf': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Kardiologie'
            }
        },
        234: {
            'siwa': true,
            'name': 'Entschärfung von Weltkriegsbombe',
            'credits': 4000
        },
        235: {
            'name': 'Verletzte Person auf Hochspannungsmast',
            'credits': 1500,
            'vehicles': {
                'hoehen': 1,
                'elw1': 1,
                'fustw': 1,
                'dlk': 1,
                'lf': 2
            },
            'percentages': {
                'dlk': 20
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 80,
                'transport': 100,
                'specialisation': 'Allgemeine Innere'
            }
        },
        236: {
            'name': 'Verletzte Person auf Hochspannungsmast',
            'credits': 2000,
            'vehicles': {
                'hoehen': 1,
                'elw1': 1,
                'fustw': 1,
                'dlk': 1,
                'lf': 2
            },
            'percentages': {
                'dlk': 20
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 100,
                'rth': 100,
                'transport': 100,
                'specialisation': 'Allgemeine Innere'
            }
        },
        237: {
            'name': 'Verkehrsunfall mit Zug',
            'credits': 1700,
            'vehicles': {
                'elw1': 1,
                'rw': 1,
                'fustw': 2,
                'lf': 2
            },
            'patients': {
                'min': 0,
                'max': 5,
                'nef': 80,
                'transport': 90,
                'specialisation': 'Unfallchirugie'
            }
        },
        238: {
            'name': 'Verkehrsunfall mit Linienbus',
            'credits': 2000,
            'vehicles': {
                'elw1': 1,
                'rw': 1,
                'fustw': 2,
                'lf': 2
            },
            'patients': {
                'min': 0,
                'max': 5,
                'nef': 20,
                'transport': 50,
                'specialisation': 'Unfallchirugie'
            },
            'expansions': [
                [93, 'Brennender Bus']
            ]
        },
        239: {
            'name': 'Verkehrsunfall mit Linienbus',
            'credits': 3000,
            'vehicles': {
                'elw1': 2,
                'elw2': 1,
                'rw': 2,
                'fustw': 4,
                'lf': 5,
                'fwk': 1,
                'oel': 1
            },
            'patients': {
                'min': 0,
                'max': 10,
                'nef': 40,
                'transport': 80,
                'specialisation': 'Unfallchirugie'
            },
            'expansions': [
                [93, 'Brennender Bus']
            ]
        },
        240: {
            'name': 'Gasgeruch',
            'credits': 2500,
            'vehicles': {
                'elw1': 1,
                'fustw': 1,
                'lf': 3,
                'dekon': 1,
                'mess': 1,
                'gefahr': 1
            },
            'percentages': {
                'dekon': 30,
                'mess': 30,
                'gefahr': 30
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 40,
                'transport': 80,
                'specialisation': 'Allgemeine Innere'
            },
            'expansions': [
                [213, 'Gasexplosion']
            ]
        },
        241: {
            'name': 'Wildunfall',
            'credits': 200,
            'vehicles': {
                'fustw': 1
            }
        },
        242: {
            'name': 'Pfefferspray in Schule',
            'credits': 2100,
            'vehicles': {
                'lf': 2,
                'mess': 1,
                'fustw': 3
            },
            'percentages': {
                'mess': 50,
            },
            'patients': {
                'min': 0,
                'max': 15,
                'nef': 10,
                'transport': 20,
                'specialisation': 'Allgemeine Innere'
            }
        },
        243: {
            'name': 'Reitunfall mit PKW',
            'credits': 1200,
            'vehicles': {
                'lf': 1
            },
            'patients': {
                'min': 1,
                'max': 4,
                'nef': 50,
                'transport': 40,
                'specialisation': 'Unfallchirugie'
            }
        },
        244: {
            'name': 'Person in Wasser',
            'credits': 1000,
            'vehicles': {
                'boot': 1
            }
        },
        245: {
            'name': 'Person in Wasser',
            'credits': 1200,
            'vehicles': {
                'boot': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 90,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        246: {
            'name': 'Person in Wasser',
            'credits': 1400,
            'vehicles': {
                'boot': 1,
                'lf': 3,
                'elw1': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 90,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        247: {
            'name': 'PKW in Wasser',
            'credits': 1400,
            'vehicles': {
                'boot': 2,
                'lf': 3,
                'elw1': 1,
                'fustw': 2,
                'taucher': 2
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 90,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        248: {
            'name': 'LKW in Wasser',
            'credits': 2000,
            'vehicles': {
                'boot': 3,
                'lf': 5,
                'elw1': 1,
                'fustw': 3,
                'taucher': 3
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 30,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        249: {
            'name': 'Bus in Wasser',
            'credits': 3000,
            'vehicles': {
                'boot': 3,
                'lf': 5,
                'elw1': 1,
                'fustw': 3,
                'taucher': 3
            },
            'patients': {
                'min': 0,
                'max': 15,
                'nef': 30,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        250: {
            'name': 'Person in Wasser',
            'credits': 1000,
            'vehicles': {
                'boot': 1
            }
        },
        251: {
            'name': 'Person in Wasser',
            'credits': 1200,
            'vehicles': {
                'boot': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 90,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        252: {
            'name': 'Person in Wasser',
            'credits': 1400,
            'vehicles': {
                'boot': 1,
                'lf': 3,
                'elw1': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 90,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        253: {
            'name': 'PKW in Wasser',
            'credits': 1400,
            'vehicles': {
                'boot': 2,
                'lf': 3,
                'elw1': 1,
                'fustw': 2,
                'taucher': 2
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 90,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        254: {
            'name': 'LKW in Wasser',
            'credits': 2000,
            'vehicles': {
                'boot': 3,
                'lf': 5,
                'elw1': 1,
                'fustw': 3,
                'taucher': 3
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 30,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        255: {
            'name': 'Bus in Wasser',
            'credits': 3000,
            'vehicles': {
                'boot': 3,
                'lf': 5,
                'elw1': 1,
                'fustw': 3,
                'taucher': 3
            },
            'patients': {
                'min': 0,
                'max': 15,
                'nef': 30,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        256: {
            'vge': true,
            'name': 'Zusammenstoß zweier Boote',
            'credits': 10010,
            'vehicles': {
                'lf': 6,
                'elw1': 2,
                'elw2': 1,
                'fustw': 5,
                'boot': 6,
                'taucher': 6
            },
            'patients': {
                'min': 0,
                'max': 30,
                'nef': 30,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        257: {
            'siwa': true,
            'name': 'Verkehrsüberwachung',
            'credits': 2500
        },
        258: {
            'name': 'Baumaschine umgestürzt',
            'credits': 2800,
            'vehicles': {
                'lf': 4,
                'fwk': 1,
                'elw1': 1,
                'dlk': 1,
                'rw': 2,
                'oel': 1,
                'fustw': 3
            },
            'percentages': {
                'fwk': 75
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Unfallchirugie'
            }
        },
        259: {
            'name': 'Brennender PKW durch FeuerwerkskÃ¶rper',
            'credits': 370,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [28, 'Garagenbrand'],
                [138, 'Flächenbrand'],
                [141, 'Flächenbrand'],
                [146, 'Brennendes Reetdachhaus']
            ]
        },
        260: {
            'name': 'Sperrmüllbrand durch FeuerwerkskÃ¶rper',
            'credits': 220,
            'vehicles': {
                'lf': 1
            }
        },
        261: {
            'name': 'Kleiner Feldbrand durch FeuerwerkskÃ¶rper',
            'credits': 1000,
            'vehicles': {
                'lf': 2
            }
        },
        262: {
            'name': 'Kellerbrand durch FeuerwerkskÃ¶rper',
            'credits': 2500,
            'vehicles': {
                'lf': 3,
                'elw1': 1
            },
            'percentages': {
                'elw1': 90
            },
            'patients': {
                'min': 0,
                'max': 2,
                'specialisation': 'Allgemeine Innere'
            }
        },
        263: {
            'name': 'Brennendes Bus-Häuschen durch FeuerwerkskÃ¶rper',
            'credits': 1000,
            'vehicles': {
                'lf': 2
            }
        },
        264: {
            'name': 'Brennender Balkon durch FeuerwerkskÃ¶rper',
            'credits': 1500,
            'vehicles': {
                'lf': 2,
                'dlk': 1
            },
            'percentages': {
                'dlk': 30
            }
        },
        265: {
            'name': 'Brennende Papiercontainer durch FeuerwerkskÃ¶rper',
            'credits': 400,
            'vehicles': {
                'lf': 1
            }
        },
        266: {
            'name': 'Brennende Hecke durch FeuerwerkskÃ¶rper',
            'credits': 400,
            'vehicles': {
                'lf': 1
            }
        },
        267: {
            'name': 'Trunkenheitsfahrt nach Silvesterparty',
            'credits': 150,
            'vehicles': {
                'fustw': 1
            }
        },
        268: {
            'name': 'Brennendes Reetdachhaus durch FeuerwerkskÃ¶rper',
            'credits': 4200,
            'vehicles': {
                'lf': 5,
                'dlk': 1,
                'elw1': 1,
                'atem': 1,
                'fustw': 2
            },
            'percentages': {
                'atem': 30
            },
            'patients': {
                'min': 1,
                'max': 2,
                'nef': 50,
                'transport': 50,
                'specialisation': 'Allgemeine Innere'
            }
        },
        269: {
            'name': 'Kfz durch FeuerwerkskÃ¶rper beschädigt',
            'credits': 200,
            'vehicles': {
                'fustw': 1
            }
        },
        270: {
            'name': 'Verstoß gegen Sprengstoffverordnung',
            'credits': 200,
            'vehicles': {
                'fustw': 1
            }
        },
        271: {
            'name': 'Beschädigter Kesselwagen',
            'credits': 6050,
            'vehicles': {
                'gkw': 1,
                'fustw': 3,
                'lf': 10,
                'dekon': 1,
                'gefahr': 1,
                'mess': 1,
                'dlk': 1,
                'elw1': 2,
                'elw2': 1,
                'rw': 1
            }
        },
        272: {
            'name': 'Gewässerverschmutzung durch Öl',
            'credits': 1600,
            'vehicles': {
                'boot': 1,
                'lf': 2,
                'oel': 1,
                'elw1': 1,
                'fustw': 1
            }
        },
        273: {
            'name': 'Gewässerverschmutzung durch Öl',
            'credits': 1600,
            'vehicles': {
                'boot': 1,
                'lf': 2,
                'oel': 1,
                'elw1': 1,
                'fustw': 1
            }
        },
        274: {
            'onlyRd': true,
            'name': 'Bewusstlose Person',
            'transport': 100,
            'nef': 90,
            'specialisation': 'Allgemeine Innere'
        },
        275: {
            'siwa': true,
            'name': 'Absicherung Rockkonzert',
            'credits': 7000
        },
        276: {
            'siwa': true,
            'name': 'Schwertransport',
            'credits': 2000
        },
        277: {
            'name': 'Person im Aufzug',
            'credits': 350,
            'vehicles': {
                'lf': 1,
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 10,
                'specialisation': 'Allgemeine Innere'
            }
        },
        278: {
            'name': 'LKW in Supermarkt',
            'credits': 2500,
            'vehicles': {
                'gkw': 1,
                'mtwtz': 1,
                'mzkw': 1,
                'fwk': 1,
                'dlk': 1,
                'lf': 2,
                'elw1': 1,
                'fustw': 2
            },
            'percentages': {
                'fwk': 75,
                'dlk': 70
            },
            'patients': {
                'min': 0,
                'max': 2,
                'transport': 50,
                'nef': 50,
                'specialisation': 'Allgemeine Innere'
            }
        },
        279: {
            'name': 'LKW in Supermarkt',
            'credits': 2800,
            'vehicles': {
                'gkw': 1,
                'mtwtz': 1,
                'mzkw': 1,
                'fwk': 1,
                'dlk': 1,
                'lf': 2,
                'elw1': 1,
                'fustw': 2
            },
            'percentages': {
                'fwk': 75,
                'dlk': 70
            },
            'patients': {
                'min': 0,
                'max': 3,
                'transport': 50,
                'nef': 50,
                'specialisation': 'Allgemeine Innere'
            }
        },
        280: {
            'name': 'Baum auf Oberleitung',
            'credits': 1500,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'rw': 1,
                'dlk': 1
            }
        },
        281: {
            'onlyRd': true,
            'name': 'Stromschlag',
            'transport': 100,
            'nef': 100,
            'specialisation': 'Allgemeine Innere',
            'tragehilfe': 20,
            'rth': 50
        },
        282: {
            'name': 'Geplatzte Wasserleitung',
            'credits': 1000,
            'vehicles': {
                'lf': 2,
                'rw': 1,
                'elw1': 1
            },
            'percentages': {
                'rw': 20,
                'elw1': 20
            }
        },
        283: {
            'name': 'Bürobrand (Groß)',
            'credits': 4000,
            'vehicles': {
                'rw': 2,
                'lf': 10,
                'elw1': 3,
                'elw2': 1,
                'dlk': 2,
                'atem': 1,
                'fustw': 3
            },
            'percentages': {
                'rw': 30
            },
            'patients': {
                'min': 5,
                'max': 10,
                'transport': 70,
                'nef': 40,
                'specialisation': 'Allgemeine Innere'
            }
        },
        284: {
            'name': 'Ostereier-Dieb',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            }
        },
        285: {
            'name': 'Pinsel aus Werkstatt entwendet',
            'credits': 150,
            'vehicles': {
                'fustw': 1
            }
        },
        286: {
            'name': 'Eingestürzter Hasenbau',
            'credits': 1020,
            'vehicles': {
                'gkw': 1,
                'mtwtz': 1,
                'radlader': 1,
                'fustw': 2
            }
        },
        287: {
            'name': 'Angefahrener Osterhase',
            'credits': 300,
            'vehicles': {
                'fustw': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'transport': 38,
                'specialisation': 'Unfallchirugie'
            }
        },
        288: {
            'name': 'Brennendes Osternest',
            'credits': 110,
            'vehicles': {
                'lf': 1
            }
        },
        289: {
            'name': 'Schokoladenspur auf Straße',
            'credits': 400,
            'vehicles': {
                'lfogkworw': 1
            }
        },
        290: {
            'name': 'Eierkocherbrand',
            'credits': 800,
            'vehicles': {
                'lf': 2
            }
        },
        291: {
            'siwa': true,
            'name': 'Hasentreffen in Ostereierstedt',
            'credits': 7000
        },
        292: {
            'name': 'Tankbetrug',
            'credits': 300,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        293: {
            'onlyRd': true,
            'name': 'Bluthochdruck',
            'transport': 80,
            'nef': 50,
            'specialisation': 'Kardiologie',
            'tragehilfe': 30
        },
        294: {
            'siwa': true,
            'name': 'Fußball Bundesliga-Risikospiel',
            'credits': 12000
        },
        295: {
            'name': 'Tankstellenüberfall',
            'credits': 1100,
            'vehicles': {
                'fustw': 6
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        296: {
            'name': 'Gasunfall in Werkstatt',
            'credits': 2020,
            'vehicles': {
                'rw': 1,
                'lf': 3,
                'elw1': 1
            },
            'percentages': {
                'rw': 30
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 40,
                'specialisation': 'Allgemeine Innere'
            }
        },
        297: {
            'onlyRd': true,
            'name': 'Arbeitsunfall im Garten',
            'transport': 70,
            'nef': 20,
            'specialisation': 'Unfallchirugie'
        },
        298: {
            'name': 'Hilflose Person auf Wasser',
            'credits': 1500,
            'vehicles': {
                'lf': 1,
                'boot': 1,
                'taucher': 1
            },
            'percentages': {
                'lf': 20,
                'taucher': 10
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 90,
                'transport': 70,
                'rth': 50,
                'specialisation': 'Allgemeine Innere'
            }
        },
        299: {
            'name': 'Strohballen qualmen in Scheune',
            'credits': 2500,
            'vehicles': {
                'lf': 5,
                'elw1': 1,
                'dlk': 1,
                'atem': 1,
                'gwl2': 1
            },
            'percentages': {
                'dlk': 75,
                'gwl2': 50
            }
        },
        300: {
            'name': 'Abgestürzter Kletterer',
            'credits': 1500,
            'vehicles': {
                'lf': 2,
                'hoehen': 1,
                'fustw': 1,
                'elw1': 1,
                'dlk': 1
            },
            'percentages': {
                'hoehen': 50,
                'dlk': 75
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 90,
                'transport': 100,
                'rth': 50,
                'specialisation': 'Unfallchirugie'
            }
        },
        301: {
            'name': 'Tiere auf der Fahrbahn',
            'credits': 500,
            'vehicles': {
                'fustw': 2
            },
            'expansions': [
                [25, 'Verkehrsunfall'],
                [27, 'Auffahrunfall'],
                [120, 'LKW umgestürzt'],
                [121, 'LKW umgestürzt'],
                [122, 'Motorradunfall'],
                [123, 'Verkehrsunfall'],
                [124, 'Verkehrsunfall'],
                [125, 'Verkehrsunfall'],
                [126, 'Verkehrsunfall'],
                [127, 'Verkehrsunfall'],
                [128, 'Auffahrunfall']
            ]
        },
        302: {
            'name': 'Brennendes Kleinflugzeug',
            'credits': 6000,
            'vehicles': {
                'lf': 8,
                'elw1': 2,
                'elw2': 1,
                'rw': 1,
                'dlk': 1,
                'gwl2': 1,
                'oel': 1,
                'fustw': 3
            },
            'percentages': {
                'dlk': 50,
                'gwl2': 80,
                'oel': 25
            },
            'patients': {
                'min': 1,
                'max': 5,
                'nef': 80,
                'transport': 90,
                'specialisation': 'Unfallchirugie'
            }
        },
        303: {
            'name': 'Carportbrand',
            'credits': 700,
            'vehicles': {
                'lf': 2,
                'elw1': 1,
                'dlk': 1
            },
            'percentages': {
                'elw1': 30,
                'dlk': 20
            },
            'expansions': [
                [16, 'Wohnwagenbrand'],
                [28, 'Garagenbrand'],
                [102, 'Feuer in Einfamilienhaus'],
                [103, 'Feuer in Einfamilienhaus'],
                [104, 'Feuer in Einfamilienhaus'],
                [105, 'Feuer in Einfamilienhaus']
            ]
        },
        304: {
            'siwa': true,
            'name': 'Angemeldete Demonstration - Gefahrenpotential',
            'credits': 6500
        },
        305: {
            'siwa': true,
            'name': 'Fußball Bundesliga-Risikospiel',
            'credits': 13000
        },
        306: {
            'siwa': true,
            'name': 'Absicherung Rockkonzert - Gefahrenpotential',
            'credits': 8000
        },
        307: {
            'name': 'Spontaner Aufstand',
            'credits': 6000,
            'vehicles': {
                'fustw': 7,
                'wawe': 3,
                'grukw': 9,
                'lebefkw': 4,
                'fukw': 1,
                'polheli': 1
            },
            'prisoners': {
                'min': 0,
                'max': 10
            }
        },
        308: {
            'name': 'Brennender Müllwagen',
            'credits': 1000,
            'vehicles': {
                'lf': 2
            }
        },
        309: {
            'name': 'Tauchunfall',
            'credits': 1000,
            'vehicles': {
                'boot': 1,
                'taucher': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 90,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        310: {
            'name': 'Tauchunfall',
            'credits': 1000,
            'vehicles': {
                'boot': 1,
                'taucher': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 90,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        311: {
            'name': 'Mitarbeiter unter PKW eingeklemmt',
            'credits': 1100,
            'vehicles': {
                'rw': 1,
                'lf': 2,
                'elw1': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 100,
                'transport': 100,
                'specialisation': 'Unfallchirugie'
            }
        },
        312: {
            'onlyRd': true,
            'name': 'Verunglückter Fallschirmspringer',
            'transport': 100,
            'nef': 100,
            'specialisation': 'Unfallchirugie'
        },
        313: {
            'name': 'Verunglückter Fallschirmspringer',
            'credits': 900,
            'vehicles': {
                'lf': 2,
                'dlk': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 100,
                'transport': 100,
                'specialisation': 'Unfallchirugie'
            }
        },
        314: {
            'name': 'Verunglückter Fallschirmspringer',
            'credits': 1900,
            'vehicles': {
                'lf': 3,
                'dlk': 1,
                'elw1': 1,
                'hoehen': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 100,
                'transport': 100,
                'specialisation': 'Unfallchirugie'
            }
        },
        315: {
            'name': 'Chemieunfall an Schule',
            'credits': 4400,
            'vehicles': {
                'lf': 8,
                'elw1': 2,
                'elw2': 1,
                'dlk': 1,
                'dekon': 1,
                'atem': 1,
                'mess': 1,
                'gefahr': 2
            },
            'percentages': {
                'elw2': 80,
                'dekon': 50,
                'atem': 50
            },
            'patients': {
                'min': 1,
                'max': 15,
                'nef': 60,
                'transport': 75,
                'specialisation': 'Neurologie'
            }
        },
        316: {
            'name': 'Unbekannte Substanz',
            'credits': 5400,
            'vehicles': {
                'lf': 12,
                'elw1': 2,
                'elw2': 1,
                'dekon': 1,
                'atem': 1,
                'mess': 2,
                'gefahr': 1,
                'rw': 2,
                'fustw': 4
            },
            'patients': {
                'min': 0,
                'max': 2,
                'nef': 60,
                'transport': 75,
                'specialisation': 'Allgemeine Innere'
            }
        },
        317: {
            'name': 'Person in Baumaschine eingeklemmt',
            'credits': 1500,
            'vehicles': {
                'lf': 2,
                'rw': 1,
                'elw1': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 100,
                'transport': 100,
                'specialisation': 'Unfallchirugie'
            }
        },
        318: {
            'name': 'AusgelÃ¶ster Heimrauchmelder',
            'credits': 200,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [5, 'Zimmerbrand'],
                [20, 'Kellerbrand'],
                [21, 'Schornsteinbrand'],
                [22, 'Dachstuhlbrand'],
                [28, 'Garagenbrand'],
                [32, 'Kaminbrand'],
                [76, 'Küchenbrand'],
                [102, 'Feuer in Einfamilienhaus'],
                [103, 'Feuer in Einfamilienhaus'],
                [104, 'Feuer in Einfamilienhaus'],
                [105, 'Feuer in Einfamilienhaus']
            ]
        },
        319: {
            'name': 'Person in Baugrube',
            'credits': 1000,
            'vehicles': {
                'lf': 1,
                'dlk': 1,
                'rw': 1
            },
            'percentages': {
                'dlk': 30,
                'rw': 40
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 50,
                'transport': 60,
                'specialisation': 'Unfallchirugie'
            }
        },
        320: {
            'name': 'Großfeuer im Krankenhaus',
            'credits': 11500,
            'vehicles': {
                'lf': 20,
                'dlk': 5,
                'atem': 3,
                'mess': 3,
                'gefahr': 2,
                'hoehen': 1,
                'fustw': 6,
                'elw1': 6,
                'elw2': 4,
                'gwl2': 2,
                'rw': 2,
                'radlader': 1,
                'mzkw': 1,
                'gkw': 1,
                'mtwtz': 1
            },
            'patients': {
                'min': 15,
                'max': 40,
                'nef': 50,
                'transport': 100,
                'specialisation': 'Allgemeine Innere'
            }
        },
        321: {
            'name': 'Saunabrand',
            'credits': 1800,
            'vehicles': {
                'lf': 3,
                'dlk': 1,
                'atem': 1,
                'elw1': 1,
                'fustw': 2
            }
        },
        322: {
            'siwa': true,
            'name': 'Geplante Autobahnsperrung',
            'credits': 2500
        },
        323: {
            'name': 'Dehnfugenbrand',
            'credits': 1500,
            'vehicles': {
                'lf': 2,
                'dlk': 1,
                'elw1': 1,
                'rw': 1,
                'fustw': 1
            },
            'percentages': {
                'rw': 50
            },
            'expansions': [
                [102, 'Feuer in Einfamilienhaus'],
                [103, 'Feuer in Einfamilienhaus'],
                [104, 'Feuer in Einfamilienhaus'],
                [105, 'Feuer in Einfamilienhaus']
            ]
        },
        324: {
            'name': 'Brand in Baumarkt',
            'credits': 10000,
            'vehicles': {
                'lf': 15,
                'dlk': 3,
                'atem': 2,
                'mess': 2,
                'gefahr': 1,
                'gwl2': 1,
                'fwk': 1,
                'elw1': 4,
                'elw2': 2,
                'rw': 1,
                'radlader': 2,
                'mzkw': 2,
                'gkw': 2,
                'mtwtz': 2,
                'fustw': 5
            },
            'patients': {
                'min': 0,
                'max': 10,
                'nef': 50,
                'transport': 50,
                'specialisation': 'Allgemeine Innere'
            }
        },
        325: {
            'siwa': true,
            'name': 'Absicherung Castor-Transport',
            'credits': 7000
        },
        326: {
            'onlyRd': true,
            'name': 'Handverletzung durch FeuerwerkskÃ¶rper',
            'transport': 90,
            'nef': 80,
            'specialisation': 'Unfallchirugie'
        },
        327: {
            'name': 'Tiefgaragenbrand',
            'credits': 3500,
            'vehicles': {
                'lf': 6,
                'dlk': 2,
                'atem': 2,
                'mess': 1,
                'oel': 1,
                'fustw': 1,
                'elw1': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 25,
                'transport': 50,
                'specialisation': 'Allgemeine Innere'
            }
        },
        328: {
            'name': 'Tiefgaragenbrand',
            'credits': 3500,
            'vehicles': {
                'lf': 6,
                'dlk': 2,
                'atem': 2,
                'mess': 1,
                'oel': 1,
                'fustw': 1,
                'elw1': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 25,
                'transport': 50,
                'specialisation': 'Allgemeine Innere'
            }
        }
    };
}
else if (I18n.locale == "de") {
    lssm.carsById = {
        "0": ["LF 20", 0],
        "1": ["LF 10", 0],
        "2": ["DLK 23", 0],
        "3": ["ELW 1", 0],
        "4": ["RW", 0],
        "5": ["GW-A", 0],
        "6": ["LF 8/6", 0],
        "7": ["LF 20/16", 0],
        "8": ["LF 10/6", 0],
        "9": ["LF 16-TS", 0],
        "10": ["GW-Öl", 0],
        "11": ["GW-L2-Wasser", 0],
        "12": ["GW-Messtechnik", 0],
        "13": ["SW 1000", 0],
        "14": ["SW 2000", 0],
        "15": ["SW 2000-Tr", 0],
        "16": ["SW Kats", 0],
        "17": ["TLF 2000", 0],
        "18": ["TLF 3000", 0],
        "19": ["TLF 8/18", 0],
        "20": ["TLF 8/18", 0],
        "21": ["TLF 16/24-Tr", 0],
        "22": ["TLF 16/25", 0],
        "23": ["TLF 16/45", 0],
        "24": ["TLF 20/40", 0],
        "25": ["TLF 20/40-SL", 0],
        "26": ["TLF 16", 0],
        "27": ["GW-Gefahrgut", 0],
        "28": ["RTW", 1],
        "29": ["NEF", 1],
        "30": ["HLF 20", 0],
        "31": ["RTH", 1],
        "32": ["FuStW", 2],
        "33": ["GW-Höenrettung", 0],
        "34": ["ELW 2", 0],
        "35": ["leBefKw", 2],
        "36": ["MTW", 0],
        "37": ["TSF-W", 0],
        "38": ["KTW", 1],
        "39": ["GKW", 3],
        "40": ["MTW-TZ", 3],
        "41": ["MzKW", 3],
        "42": ["LKW K 9", 3],
        "43": ["BRmG R", 3],
        "44": ["Anh DLE", 3],
        "45": ["MLW 5", 3],
        "46": ["WLF", 0],
        "47": ["AB-Rüst", 0],
        "48": ["AB-Atemschutz", 0],
        "49": ["AB-Öl", 0],
        "50": ["GruKw", 2],
        "51": ["FüKw", 2],
        "52": ["GefKw", 2],
        "53": ["Dekon-P", 0],
        "54": ["AB-Dekon-P", 0],
        "55": ["KdoW-LNA", 1],
        "56": ["KdoW-Orgl", 1],
        "57": ["FwK", 0],
        "58": ["KTW Typ B", 1],
        "59": ["ELW 1 (SEG)", 1],
        "60": ["GW-San", 1],
        "61": ["Polizeihubschrauber", 2],
        "62": ["AB-Schlauch", 0],
        "63": ["GW-Taucher", 4],
        "64": ["GW-Wasserrettung", 4],
        "65": ["LKW 7 Lkr 19 tm", 3],
        "66": ["Anh MzB", 3],
        "67": ["Anh SchlB", 3],
        "68": ["Anh MzAB", 3],
        "69": ["Tauchkraftwagen", 3],
        "70": ["MZB", 4],
        "71": ["AB-MZB", 4],
        "72": ["WaWe 10", 2],
        "73": ["GRTW", 1],
        "74": ["NAW", 1],
        "75": ["FLF", 0],
        "76": ["Rettungstreppe", 0],
        "77": ["AB-Gefahrgut", 0],
        "78": ["AB-Einsatzleitung", 0],
        "79": ["SEK - ZF", 2],
        "80": ["SEK - MTF", 2],
        "81": ["MEK - ZF", 2],
        "82": ["MEK - MTF", 2],
        "83": ["GW-Werkfeuerwehr", 0],
        "84": ["ULF mit Löscharm", 0],
        "85": ["TM 50", 0],
        "86": ["Turbolöscher", 0]
    };
    lssm.missions = {
        0: {
            'name': 'Mülleimerbrand',
            'credits': 110,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [24, 'Brennendes Bus-Häuschen'],
                [140, 'Flächenbrand']
            ]
        },
        1: {
            'name': 'Containerbrand',
            'credits': 170,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [5, 'Zimmerbrand'],
                [2, 'Brennender PKW']
            ]
        },
        2: {
            'name': 'Brennender PKW',
            'credits': 370,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [28, 'Garagenbrand'],
                [138, 'Flächenbrand'],
                [141, 'Flächenbrand'],
                [146, 'Brennendes Reetdachhaus']
            ]
        },
        3: {
            'name': 'Motorrad-Brand',
            'credits': 340,
            'vehicles': {
                'lf': 1
            }
        },
        4: {
            'name': 'Brennendes Gras',
            'credits': 200,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [14, 'Kleiner Feldbrand']
            ]
        },
        5: {
            'name': 'Zimmerbrand',
            'credits': 1400,
            'vehicles': {
                'lf': 2,
                'dlk': 1
            },
            'percentages': {
                'dlk': 30
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 50,
                'nef': 50,
                'specialisation': 'Allgemeine Innere'
            }
        },
        6: {
            'name': 'Gartenlaubenbrand',
            'credits': 600,
            'vehicles': {
                'lf': 2
            }
        },
        7: {
            'name': 'Brennendes Laub',
            'credits': 210,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [6, 'Gartenlaubbrand'],
                [138, 'Flächenbrand'],
                [139, 'Flächenbrand'],
                [140, 'Flächenbrand'],
                [141, 'Flächenbrand']
            ]
        },
        8: {
            'name': 'Sperrmüllbrand',
            'credits': 220,
            'vehicles': {
                'lf': 1
            }
        },
        9: {
            'name': 'Strohballenbrand',
            'credits': 250,
            'vehicles': {
                'lf': 1
            }
        },
        10: {
            'name': 'Traktor Brand',
            'credits': 600,
            'vehicles': {
                'lf': 1
            }
        },
        11: {
            'name': 'Brennende Telefonzelle',
            'credits': 240,
            'vehicles': {
                'lf': 1
            }
        },
        12: {
            'name': 'Baum auf Straße',
            'credits': 310,
            'vehicles': {
                'lfogkworw': 1
            },
            'expansions': [
                [25, 'Verkehrsunfall'],
                [83, 'Gefahrgut-LKW verunglückt'],
                [120, 'LKW umgestürzt'],
                [121, 'LKW umgestürzt'],
                [123, 'Verkehrsunfall'],
                [124, 'Verkehrsunfall'],
                [125, 'Verkehrsunfall'],
                [126, 'Verkehrsunfall'],
                [127, 'Verkehrsunfall'],
                [178, 'Gefahrgut-LKW verunglückt'],
                [238, 'Verkehrsunfall mit Linienbus'],
                [239, 'Verkehrsunfall mit Linienbus'],
            ]
        },
        13: {
            'name': 'Brennender LKW',
            'credits': 980,
            'vehicles': {
                'lf': 2
            }
        },
        14: {
            'name': 'Kleiner Feldbrand',
            'credits': 1000,
            'vehicles': {
                'lf': 2
            },
            'expansions': [
                [131, 'Mittlerer Feldbrand']
            ]
        },
        15: {
            'name': 'Kleiner Waldbrand',
            'credits': 1010,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [134, 'Großer Waldbrand'],
                [135, 'Großer Waldbrand']
            ]
        },
        16: {
            'name': 'Wohnwagenbrand',
            'credits': 1100,
            'vehicles': {
                'lf': 2
            }
        },
        17: {
            'name': 'Brand in Briefkasten',
            'credits': 340,
            'vehicles': {
                'lf': 1
            }
        },
        18: {
            'name': 'Brennendes Gebüsch',
            'credits': 700,
            'vehicles': {
                'lf': 1
            }
        },
        19: {
            'name': 'Brennender Anhänger',
            'credits': 650,
            'vehicles': {
                'lf': 1
            }
        },
        20: {
            'name': 'Kellerbrand',
            'credits': 2500,
            'vehicles': {
                'elw1': 1,
                'lf': 3
            },
            'percentages': {
                'elw1': 90
            },
            'patients': {
                'min': 0,
                'max': 2,
                'specialisation': 'Allgemeine Innere'
            }
        },
        21: {
            'name': 'Schornsteinbrand',
            'credits': 2400,
            'vehicles': {
                'lf': 1,
                'elw1': 1,
                'dlk': 1
            },
            'expansions': [
                [22, 'Dachstuhlbrand']
            ]
        },
        22: {
            'name': 'Dachstuhlbrand',
            'credits': 2700,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'dlk': 1
            },
            'percentages': {
                'elw1': 50
            }
        },
        23: {
            'name': 'Fettbrand in Pommesbude',
            'credits': 1200,
            'vehicles': {
                'lf': 1
            }
        },
        24: {
            'name': 'Brennendes Bus-Häuschen',
            'credits': 900,
            'vehicles': {
                'lf': 1
            }
        },
        25: {
            'name': 'Verkehrsunfall',
            'credits': 1000,
            'vehicles': {
                'lf': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 40,
                'nef': 20,
                'specialisation': 'Unfallchirugie'
            }
        },
        26: {
            'name': 'Brand im Supermarkt',
            'credits': 3510,
            'vehicles': {
                'rw': 1,
                'lf': 3,
                'elw1': 1,
                'elw2': 1,
                'dlk': 1
            },
            'percentages': {
                'rw': 30,
                'elw2': 10,
                'dlk': 70
            },
            'special': {
                'averageMinimumEmployeesFire': 25
            }
        },
        27: {
            'name': 'Auffahrunfall',
            'credits': 700,
            'vehicles': {
                'rw': 1,
                'lf': 1
            },
            'percentages': {
                'rw': 30
            }
        },
        28: {
            'name': 'Garagenbrand',
            'credits': 1400,
            'vehicles': {
                'lf': 2
            },
            'expansions': [
                [102, 'Feuer in Einfamilienhaus'],
                [103, 'Feuer in Einfamilienhaus'],
                [104, 'Feuer in Einfamilienhaus'],
                [105, 'Feuer in Einfamilienhaus']
            ]
        },
        29: {
            'name': 'Maschinenbrand',
            'credits': 2470,
            'vehicles': {
                'lf': 3,
                'rw': 1,
                'elw1': 1,
                'gwl2': 1,
                'atem': 1
            },
            'percentages': {
                'gwl2': 30,
                'atem': 20
            }
        },
        30: {
            'name': 'Große Ölspur',
            'credits': 1900,
            'vehicles': {
                'lf': 1,
                'oel': 1
            },
            'percentages': {
                'oel': 75
            },
            'expansions': [
                [95, 'Ausgedehnte Ölspur']
            ]
        },
        31: {
            'name': 'Auslaufende Betriebsstoffe',
            'credits': 400,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [30, 'Große Ölspur'],
                [95, 'Ausgedehnte Ölspur'],
                [94, 'Kleine Ölspur']
            ]
        },
        32: {
            'name': 'Kaminbrand',
            'credits': 1310,
            'vehicles': {
                'lf': 1,
                'dlk': 1,
                'elw1': 1
            }
        },
        33: {
            'name': 'Mähdrescher Brand',
            'credits': 1200,
            'vehicles': {
                'lf': 2
            }
        },
        34: {
            'name': 'Brand im Supermarkt',
            'credits': 3710,
            'vehicles': {
                'rw': 1,
                'lf': 3,
                'elw1': 1,
                'elw2': 1,
                'dlk': 1,
                'mess': 1
            },
            'percentages': {
                'rw': 50,
                'elw2': 20,
                'dlk': 80,
                'mess': 30
            },
            'special': {
                'averageMinimumEmployeesFire': 30
            },
            'patients': {
                'min': 0,
                'max': 3,
                'specialisation': 'Allgemeine Innere'
            }
        },
        35: {
            'name': 'Feuer im Krankenhaus',
            'credits': 3810,
            'vehicles': {
                'rw': 2,
                'lf': 4,
                'elw1': 1,
                'elw2': 1,
                'dlk': 1
            },
            'percentages': {
                'rw': 30,
                'elw2': 30
            },
            'expansions': [
                [320, 'Großfeuer im Krankenhaus']
            ]
        },
        36: {
            'name': 'Brennender Güterwaggon',
            'credits': 3310,
            'vehicles': {
                'rw': 2,
                'lf': 4,
                'elw1': 1,
                'dlk': 1,
                'mess': 1,
                'dekon': 1
            },
            'percentages': {
                'rw': 30,
                'mess': 20,
                'dekon': 10
            }
        },
        37: {
            'name': 'Mülleimerbrand',
            'credits': 110,
            'vehicles': {
                'lf': 1
            }
        },
        38: {
            'name': 'Mülleimerbrand',
            'credits': 110,
            'vehicles': {
                'lf': 1
            }
        },
        39: {
            'name': 'Mülleimerbrand',
            'credits': 110,
            'vehicles': {
                'lf': 1
            }
        },
        40: {
            'name': 'Mülleimerbrand',
            'credits': 110,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [35, 'Feuer im Krankenhaus']
            ]
        },
        41: {
            'vge': true,
            'name': 'Großbrand',
            'credits': 10010,
            'vehicles': {
                'lf': 6,
                'mess': 1,
                'elw1': 2,
                'elw2': 1,
                'dlk': 2,
                'gwl2': 1,
                'atem': 1
            },
            'percentages': {
                'elw2': 90
            }
        },
        42: {
            'name': 'Tankstellenbrand',
            'credits': 3720,
            'vehicles': {
                'rw': 2,
                'lf': 4,
                'elw1': 1,
                'elw2': 1,
                'dlk': 1,
                'mess': 1,
                'gefahr': 1
            },
            'percentages': {
                'rw': 30,
                'elw2': 10,
                'mess': 80,
                'gefahr': 70
            }
        },
        43: {
            'vge': true,
            'name': 'Massenkarambolage',
            'credits': 10010,
            'vehicles': {
                'lf': 10,
                'rw': 5,
                'elw1': 2,
                'oel': 2
            },
            'patients': {
                'min': 10,
                'max': 12,
                'specialisation': 'Unfallchirugie'
            }
        },
        44: {
            'onlyRd': true,
            'name': 'Alkoholintoxitation',
            'specialisation': 'Allgemeine Innere',
            'tragehilfe': 20
        },
        45: {
            'onlyRd': true,
            'name': 'Nasenbluten unstillbar',
            'specialisation': 'Allgemeine Chriguie'
        },
        46: {
            'onlyRd': true,
            'name': 'Herzinfarkt',
            'transport': 100,
            'nef': 100,
            'specialisation': 'Kardiologie',
            'tragehilfe': 20
        },
        47: {
            'onlyRd': true,
            'name': 'akuter Asthma-Anfall',
            'transport': 50,
            'nef': 100,
            'specialisation': 'Allgemeine Innere'
        },
        48: {
            'onlyRd': true,
            'name': 'Krampfanfall',
            'transport': 50,
            'nef': 80,
            'specialisation': 'Neurologie',
            'tragehilfe': 10
        },
        49: {
            'onlyRd': true,
            'name': 'Fieber',
            'transport': 90,
            'nef': 20,
            'specialisation': 'Allgemeine Innere',
            'tragehilfe': 5
        },
        50: {
            'onlyRd': true,
            'name': 'Gestürzte Person',
            'transport': 30,
            'nef': 10,
            'specialisation': 'Unfallchirugie',
            'tragehilfe': 5
        },
        51: {
            'name': 'Brand in Werkstatt',
            'credits': 3620,
            'vehicles': {
                'rw': 1,
                'lf': 4,
                'elw1': 1,
                'elw2': 1,
                'dlk': 1
            },
            'percentages': {
                'rw': 30,
                'elw2': 10
            },
            'patients': {
                'min': 0,
                'max': 2,
                'nef': 40,
                'specialisation': 'Allgemeine Innere'
            }
        },
        52: {
            'name': 'Brand auf Weihnachtsmarkt',
            'credits': 310,
            'vehicles': {
                'lf': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 10,
                'specialisation': 'Allgemeine Innere'
            }
        },
        53: {
            'name': 'Verkehrsunfall durch Glatteis',
            'credits': 1410,
            'vehicles': {
                'lf': 1,
                'rw': 1
            },
            'patients': {
                'min': 0,
                'max': 3,
                'specialisation': 'Unfallchirugie'
            }
        },
        54: {
            'onlyRd': true,
            'name': 'Personenschaden durch Verbrennung',
            'transport': 20,
            'nef': 40,
            'specialisation': 'Unfallchirugie'
        },
        55: {
            'name': 'Brennender Tannenbaum',
            'credits': 870,
            'vehicles': {
                'lf': 1
            }
        },
        56: {
            'onlyRd': true,
            'name': 'Betrunkene Person auf Weihnachtsmarkt',
            'specialisation': 'Allgemeine Innere'
        },
        57: {
            'onlyRd': true,
            'name': 'Gestürzter Fußgänger',
            'transport': 20,
            'specialisation': 'Unfallchirugie'
        },
        58: {
            'onlyRd': true,
            'name': 'Gestürzter Radfahrer',
            'transport': 40,
            'specialisation': 'Unfallchirugie'
        },
        59: {
            'vge': true,
            'name': 'Gefahrgutunfall',
            'credits': 14010,
            'vehicles': {
                'lf': 20,
                'mess': 4,
                'gefahr': 4,
                'elw1': 2,
                'elw2': 1,
                'rw': 5,
                'dlk': 2,
                'atem': 3
            },
            'percentages': {
                'elw2': 80
            },
            'patients': {
                'min': 10,
                'max': 20,
                'specialisation': 'Allgemeine Innere'
            }
        },
        60: {
            'name': 'Ladendiebstahl',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            },
            'expansions': [
                [74, 'Randalierende Person']
            ]
        },
        61: {
            'name': 'Ladendiebstahl',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            },
            'expansions': [
                [74, 'Randalierende Person']
            ]
        },
        62: {
            'name': 'Parkendes Auto gerammt',
            'credits': 120,
            'vehicles': {
                'fustw': 1
            }
        },
        63: {
            'name': 'Parkendes Auto gerammt',
            'credits': 120,
            'vehicles': {
                'fustw': 1
            }
        },
        64: {
            'name': 'Metalldiebstahl',
            'credits': 150,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        65: {
            'name': 'Taschendiebstahl',
            'credits': 150,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        66: {
            'name': 'Notebook aus Schule entwendet',
            'credits': 150,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        67: {
            'name': 'Personalienaufnahme von Schwarzfahrer',
            'credits': 120,
            'vehicles': {
                'fustw': 1
            }
        },
        68: {
            'name': 'Personalienaufnahme von Schwarzfahrer',
            'credits': 120,
            'vehicles': {
                'fustw': 1
            }
        },
        69: {
            'name': 'Personalienaufnahme von Schwarzfahrer',
            'credits': 120,
            'vehicles': {
                'fustw': 1
            }
        },
        70: {
            'name': 'Personalienaufnahme von Schwarzfahrer',
            'credits': 120,
            'vehicles': {
                'fustw': 1
            }
        },
        71: {
            'name': 'Parkendes Auto gerammt',
            'credits': 120,
            'vehicles': {
                'fustw': 1
            }
        },
        72: {
            'name': 'Bewusstloser Kranführer',
            'credits': 2000,
            'vehicles': {
                'hoehen': 1,
                'elw1': 1,
                'fustw': 1,
                'lf': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 80,
                'specialisation': 'Allgemeine Innere'
            }
        },
        73: {
            'name': 'Schlägerei',
            'credits': 700,
            'vehicles': {
                'fustw': 3
            },
            'patients': {
                'min': 0,
                'max': 3,
                'specialisation': 'Unfallchirugie'
            },
            'prisoners': {
                'min': 0,
                'max': 2
            },
            'expansions': [
                [106, 'Massenschlägerei'],
                [107, 'Massenschlägerei']
            ]
        },
        74: {
            'name': 'Randalierende Person',
            'credits': 500,
            'vehicles': {
                'fustw': 2
            },
            'prisoners': {
                'min': 0,
                'max': 1
            },
            'expansions': [
                [73, 'Schlägerei']
            ]
        },
        75: {
            'vge': true,
            'name': 'Unangemeldete Demonstration',
            'credits': 10020,
            'vehicles': {
                'fustw': 7
            }
        },
        76: {
            'name': 'Küchenbrand',
            'credits': 800,
            'vehicles': {
                'lf': 2
            },
            'expansions': [
                [102, 'Feuer in Einfamilienhaus'],
                [103, 'Feuer in Einfamilienhaus'],
                [104, 'Feuer in Einfamilienhaus'],
                [105, 'Feuer in Einfamilienhaus']
            ]
        },
        77: {
            'name': 'Person hinter Tür',
            'credits': 500,
            'vehicles': {
                'fustw': 1,
                'lf': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 50,
                'specialisation': 'Allgemeine Innere'
            }
        },
        78: {
            'name': 'Kleintier in Not',
            'credits': 130,
            'vehicles': {
                'lf': 1,
                'dlk': 1
            },
            'percentages': {
                'dlk': 20
            }
        },
        79: {
            'name': 'Verletzte Person auf Baugerüst',
            'credits': 1800,
            'vehicles': {
                'elw1': 1,
                'dlk': 1,
                'hoehen': 1,
                'lf': 1
            },
            'percentages': {
                'dlk': 30
            },
            'patients': {
                'min': 1,
                'max': 1,
                'specialisation': 'Unfallchirugie'
            }
        },
        80: {
            'name': 'Rauchentwicklung in Museum',
            'credits': 2000,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'dlk': 1,
                'atem': 1,
                'fustw': 2
            },
            'patients': {
                'min': 0,
                'max': 8,
                'nef': 75,
                'specialisation': 'Allgemeine Innere'
            }
        },
        81: {
            'name': 'Einbruch in Keller',
            'credits': 400,
            'vehicles': {
                'fustw': 1
            }
        },
        82: {
            'name': 'Einbruch in Wohnung',
            'credits': 400,
            'vehicles': {
                'fustw': 1
            }
        },
        83: {
            'name': 'Gefahrgut-LKW verunglückt',
            'credits': 2500,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'elw2': 1,
                'rw': 1,
                'mess': 1,
                'dekon': 1,
                'gefahr': 1,
                'fustw': 2
            },
            'percentages': {
                'elw2': 40,
                'rw': 50,
                'mess': 30,
                'dekon': 10
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Unfallchirugie'
            },
            'expansions': [
                [213, 'Gasexplosion']
            ]
        },
        84: {
            'name': 'Brennende Lok',
            'credits': 1800,
            'vehicles': {
                'lf': 4,
                'gwl2': 1,
                'atem': 1,
                'rw': 1,
                'elw1': 1,
                'elw2': 1
            },
            'percentages': {
                'atem': 30,
                'rw': 50,
                'elw2': 10
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 40,
                'specialisation': 'Allgemeine Chirugie'
            }
        },
        85: {
            'name': 'Sachbeschädigung',
            'credits': 200,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        86: {
            'name': 'Sporthallenbrand',
            'credits': 3000,
            'vehicles': {
                'lf': 7,
                'elw1': 1,
                'elw2': 1,
                'dlk': 2,
                'gwl2': 1,
                'atem': 1
            },
            'percentages': {
                'elw2': 30,
                'gwl2': 30,
                'atem': 50
            }
        },
        87: {
            'name': 'Kleinflugzeug abgestürzt',
            'credits': 3000,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'elw2': 1,
                'rw': 1,
                'fustw': 2
            },
            'percentages': {
                'elw2': 10
            },
            'patients': {
                'min': 1,
                'max': 5,
                'transport': 100,
                'nef': 80,
                'specialisation': 'Unfallchirugie'
            }
        },
        88: {
            'name': 'Brennender Bollerwagen',
            'credits': 500,
            'vehicles': {
                'lf': 1
            }
        },
        89: {
            'name': 'LKW Auffahrunfall',
            'credits': 2500,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'rw': 1,
                'oel': 1,
                'gefahr': 1,
                'fustw': 2
            },
            'percentages': {
                'elw1': 75,
                'oel': 25,
                'gefahr': 10
            },
            'patients': {
                'min': 0,
                'max': 2,
                'transport': 90,
                'nef': 70,
                'specialisation': 'Unfallchirugie'
            }
        },
        90: {
            'name': 'RuhestÃ¶rung',
            'credits': 250,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            },
            'expansions': [
                [74, 'Randalierende Person']
            ]
        },
        91: {
            'name': 'Keller unter Wasser',
            'credits': 370,
            'vehicles': {
                'lf': 1
            }
        },
        92: {
            'onlyRd': true,
            'name': 'Schlaganfall',
            'transport': 90,
            'nef': 45,
            'specialisation': 'Neurologie',
            'tragehilfe': 20
        },
        93: {
            'name': 'Brennender Bus',
            'credits': 3000,
            'vehicles': {
                'lf': 5,
                'elw1': 1,
                'elw2': 1,
                'rw': 1,
                'fustw': 2
            },
            'percentages': {
                'elw2': 75
            },
            'patients': {
                'min': 4,
                'max': 11,
                'nef': 30,
                'specialisation': 'Allgemeine Innere'
            }
        },
        94: {
            'name': 'Kleine Ölspur',
            'credits': 400,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [30, 'Große Ölspur'],
                [95, 'Ausgedehnte Ölspur']
            ]
        },
        95: {
            'name': 'Ausgedehnte Ölspur',
            'credits': 4000,
            'vehicles': {
                'lf': 6,
                'oel': 1,
                'elw1': 1,
                'fustw': 2
            }
        },
        96: {
            'name': 'Feuer in Schnellrestaurant',
            'credits': 2900,
            'vehicles': {
                'lf': 3
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        97: {
            'name': 'Aufgerissener Öltank',
            'credits': 2500,
            'vehicles': {
                'lf': 3,
                'oel': 1,
                'elw1': 1,
            },
            'percentages': {
                'elw1': 60,
                'oel': 80
            }
        },
        98: {
            'name': 'Angefahrene Person',
            'credits': 300,
            'vehicles': {
                'fustw': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'transport': 38,
                'specialisation': 'Unfallchirugie'
            }
        },
        99: {
            'vge': true,
            'name': 'Flugzeug abgestürzt',
            'credits': 17000,
            'vehicles': {
                'lf': 22,
                'atem': 1,
                'oel': 1,
                'mess': 1,
                'dlk': 1,
                'elw1': 2,
                'elw2': 2,
                'rw': 6,
                'fustw': 10
            },
            'percentages': {
                'atem': 45,
                'oel': 25
            },
            'patients': {
                'min': 10,
                'max': 25,
                'transport': 85,
                'nef': 80,
                'specialisation': 'Unfallchirugie'
            }
        },
        100: {
            'name': 'Küchenbrand',
            'credits': 900,
            'vehicles': {
                'lf': 1,
                'fustw': 1
            },
            'percentages': {
                'fustw': 50
            }
        },
        101: {
            'name': 'Zimmerbrand',
            'credits': 1500,
            'vehicles': {
                'lf': 2,
                'dlk': 1,
                'fustw': 1
            },
            'percentages': {
                'dlk': 30,
                'fustw': 50
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 50,
                'transport': 50,
                'specialisation': 'Allgemeine Innere'
            },
            'expansions': [
                [102, 'Feuer in Einfamilienhaus'],
                [103, 'Feuer in Einfamilienhaus'],
                [104, 'Feuer in Einfamilienhaus'],
                [105, 'Feuer in Einfamilienhaus']
            ]
        },
        102: {
            'name': 'Feuer in Einfamilienhaus',
            'credits': 2000,
            'vehicles': {
                'lf': 3,
                'dlk': 1,
                'elw1': 1
            },
            'percentages': {
                'dlk': 50,
                'elw1': 70
            }
        },
        103: {
            'name': 'Feuer in Einfamilienhaus',
            'credits': 2200,
            'vehicles': {
                'lf': 3,
                'dlk': 1,
                'elw1': 1,
                'fustw': 1
            },
            'percentages': {
                'dlk': 50,
                'elw1': 70
            },
            'patients': {
                'min': 0,
                'max': 3,
                'nef': 20,
                'transport': 30,
                'specialisation': 'Allgemeine Innere'
            }
        },
        104: {
            'name': 'Feuer in Einfamilienhaus',
            'credits': 2200,
            'vehicles': {
                'lf': 3,
                'dlk': 1,
                'elw1': 1
            },
            'percentages': {
                'dlk': 50,
                'elw1': 70
            },
            'patients': {
                'min': 0,
                'max': 3,
                'nef': 20,
                'transport': 30,
                'specialisation': 'Allgemeine Innere'
            }
        },
        105: {
            'name': 'Feuer in Einfamilienhaus',
            'credits': 2200,
            'vehicles': {
                'lf': 3,
                'dlk': 1,
                'elw1': 1,
                'fustw': 1
            },
            'percentages': {
                'dlk': 50,
                'elw1': 70
            }
        },
        106: {
            'name': 'Massenschlägerei',
            'credits': 1800,
            'vehicles': {
                'fustw': 5
            },
            'prisoners': {
                'min': 0,
                'max': 5
            }
        },
        107: {
            'name': 'Massenschlägerei',
            'credits': 1800,
            'vehicles': {
                'fustw': 5
            },
            'prisoners': {
                'min': 0,
                'max': 5
            },
            'patients': {
                'min': 1,
                'max': 6,
                'nef': 10,
                'transport': 30,
                'specialisation': 'Unfallchirugie'
            }
        },
        108: {
            'onlyRd': true,
            'name': 'Schwangere in Notsituation',
            'transport': 100,
            'nef': 100,
            'specialisation': 'Gynäkologie',
            'tragehilfe': 30
        },
        109: {
            'onlyRd': true,
            'name': 'Beginnende Geburt',
            'transport': 100,
            'nef': 95,
            'specialisation': 'Gynäkologie',
            'tragehilfe': 20
        },
        110: {
            'onlyRd': true,
            'name': 'Vaginale Blutung',
            'transport': 50,
            'nef': 20,
            'specialisation': 'Gynäkologie',
            'tragehilfe': 10
        },
        111: {
            'name': 'Brennende Vogelscheuche',
            'credits': 350,
            'vehicles': {
                'lf': 1
            }
        },
        112: {
            'name': 'Brennendes Kürbisfeld',
            'credits': 850,
            'vehicles': {
                'lf': 1
            }
        },
        113: {
            'name': 'Kürbissuppe übergekocht',
            'credits': 1500,
            'vehicles': {
                'lf': 2,
                'elw1': 1,
                'atem': 1
            },
            'percentages': {
                'atem': 50
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Neurologie'
            }
        },
        114: {
            'name': 'Hexe hängt in Baum',
            'credits': 900,
            'vehicles': {
                'lf': 1,
                'dlk': 1,
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 50,
                'specialisation': 'Unfallchirugie'
            }
        },
        115: {
            'onlyRd': true,
            'name': 'Zombiebiss',
            'transport': 100,
            'specialisation': 'Neurologie',
        },
        116: {
            'name': 'Monster ausgebrochen',
            'credits': 1600,
            'vehicles': {
                'fustw': 4
            }
        },
        117: {
            'name': 'Kürbisse geklaut',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            }
        },
        118: {
            'name': 'Frankenstein gesichtet',
            'credits': 550,
            'vehicles': {
                'fustw': 2
            }
        },
        119: {
            'name': 'Süßigkeitendiebstahl',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            }
        },
        120: {
            'name': 'LKW umgestürzt',
            'credits': 2200,
            'vehicles': {
                'lf': 2,
                'rw': 1,
                'elw1': 1,
                'fwk': 1
            },
            'percentages': {
                'fwk': 75
            },
            'patients': {
                'min': 1,
                'max': 2,
                'transport': 50,
                'nef': 50,
                'specialisation': 'Unfallchirugie'
            }
        },
        121: {
            'name': 'LKW umgestürzt',
            'credits': 2500,
            'vehicles': {
                'lf': 2,
                'rw': 1,
                'elw1': 1,
                'fwk': 1,
                'fustw': 2
            },
            'percentages': {
                'fwk': 75
            },
            'patients': {
                'min': 1,
                'max': 2,
                'transport': 50,
                'nef': 50,
                'specialisation': 'Unfallchirugie'
            }
        },
        122: {
            'name': 'Motorradunfall',
            'credits': 600,
            'vehicles': {
                'lf': 1,
                'fustw': 1
            },
            'percentages': {
                'lf': 10
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 70,
                'transport': 100,
                'specialisation': 'Unfallchirugie'
            }
        },
        123: {
            'name': 'Verkehrsunfall',
            'credits': 1100,
            'vehicles': {
                'lf': 1,
                'fustw': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 20,
                'transport': 40,
                'specialisation': 'Unfallchirugie'
            }
        },
        124: {
            'name': 'Verkehrsunfall',
            'credits': 1600,
            'vehicles': {
                'lf': 1,
                'rw': 1
            },
            'percentages': {
                'rw': 50
            },
            'patients': {
                'min': 2,
                'max': 3,
                'nef': 50,
                'transport': 70,
                'specialisation': 'Unfallchirugie'
            }
        },
        125: {
            'name': 'Verkehrsunfall',
            'credits': 1700,
            'vehicles': {
                'lf': 1,
                'rw': 1,
                'fustw': 1
            },
            'percentages': {
                'rw': 50
            },
            'patients': {
                'min': 2,
                'max': 3,
                'nef': 50,
                'transport': 70,
                'specialisation': 'Unfallchirugie'
            }
        },
        126: {
            'name': 'Verkehrsunfall',
            'credits': 2000,
            'vehicles': {
                'lf': 2,
                'rw': 1
            },
            'patients': {
                'min': 2,
                'max': 4,
                'nef': 50,
                'transport': 70,
                'specialisation': 'Unfallchirugie'
            }
        },
        127: {
            'name': 'Verkehrsunfall',
            'credits': 2200,
            'vehicles': {
                'lf': 2,
                'rw': 1,
                'fustw': 2
            },
            'patients': {
                'min': 2,
                'max': 4,
                'nef': 50,
                'transport': 70,
                'specialisation': 'Unfallchirugie'
            }
        },
        128: {
            'name': 'Auffahrunfall',
            'credits': 700,
            'vehicles': {
                'lf': 1,
                'fustw': 1
            },
            'percentages': {
                'lf': 10
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 10,
                'specialisation': 'Unfallchirugie'
            },
            'expansions': [
                [25, 'Verkehrsunfall'],
                [123, 'Verkehrsunfall'],
                [124, 'Verkehrsunfall'],
                [125, 'Verkehrsunfall'],
                [126, 'Verkehrsunfall'],
                [127, 'Verkehrsunfall'],
                [89, 'LKW Auffahrunfall']
            ]
        },
        129: {
            'name': 'Brennender Adventskranz',
            'credits': 800,
            'vehicles': {
                'lf': 1
            }
        },
        130: {
            'name': 'Rangelei auf Weihnachtsmarkt',
            'credits': 600,
            'vehicles': {
                'fustw': 2
            },
            'patients': {
                'min': 0,
                'max': 2,
                'specialisation': 'Unfallchirugie'
            }
        },
        131: {
            'name': 'Mittlerer Feldbrand',
            'credits': 2000,
            'vehicles': {
                'lf': 3,
                'gwl2': 1,
                'elw1': 1
            },
            'percentages': {
                'gwl2': 20,
                'elw1': 50
            },
            'expansions': [
                [132, 'Großer Feldbrand'],
                [133, 'Großer Feldbrand']
            ],
            'special': {
                'averageMinimumEmployeesFire': 25
            }
        },
        132: {
            'name': 'Großer Feldbrand',
            'credits': 5000,
            'vehicles': {
                'lf': 5,
                'gwl2': 1,
                'elw1': 1
            },
            'special': {
                'averageMinimumEmployeesFire': 40
            }
        },
        133: {
            'name': 'Großer Feldbrand',
            'credits': 5100,
            'vehicles': {
                'lf': 5,
                'gwl2': 1,
                'elw1': 1,
                'fustw': 1
            },
            'special': {
                'averageMinimumEmployeesFire': 40
            }
        },
        134: {
            'name': 'Großer Waldbrand',
            'credits': 4000,
            'vehicles': {
                'lf': 3,
                'gwl2': 1,
                'elw1': 1
            },
            'percentages': {
                'gwl2': 70
            },
            'expansions': [
                [136, 'Großfeuer im Wald'],
                [137, 'Großfeuer im Wald']
            ]
        },
        135: {
            'name': 'Großer Waldbrand',
            'credits': 4100,
            'vehicles': {
                'lf': 3,
                'gwl2': 1,
                'elw1': 1,
                'fustw': 1
            },
            'percentages': {
                'gwl2': 70
            },
            'expansions': [
                [136, 'Großfeuer im Wald'],
                [137, 'Großfeuer im Wald']
            ]
        },
        136: {
            'name': 'Großfeuer im Wald',
            'credits': 8000,
            'vehicles': {
                'lf': 10,
                'gwl2': 1,
                'elw1': 2,
                'atem': 1,
                'elw2': 1,
                'dlk': 1,
                'fustw': 1
            },
            'percentages': {
                'elw2': 30,
                'dlk': 10
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 50,
                'specialisation': 'Allgemeine Innere'
            },
            'special': {
                'averageMinimumEmployeesFire': 80
            }
        },
        137: {
            'name': 'Großfeuer im Wald',
            'credits': 8100,
            'vehicles': {
                'lf': 10,
                'gwl2': 1,
                'elw1': 2,
                'atem': 1,
                'elw2': 1,
                'dlk': 1,
                'fustw': 3
            },
            'percentages': {
                'elw2': 30,
                'dlk': 10
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 50,
                'specialisation': 'Allgemeine Innere'
            },
            'special': {
                'averageMinimumEmployeesFire': 80
            }
        },
        138: {
            'name': 'Flächenbrand',
            'credits': 1500,
            'vehicles': {
                'lf': 2
            }
        },
        139: {
            'name': 'Flächenbrand',
            'credits': 3500,
            'vehicles': {
                'lf': 4,
                'gwl2': 1,
                'elw1': 1
            },
            'percentages': {
                'gwl2': 20,
                'elw1': 20
            },
            'special': {
                'averageMinimumEmployeesFire': 30
            }
        },
        140: {
            'name': 'Flächenbrand',
            'credits': 1600,
            'vehicles': {
                'lf': 2,
                'fustw': 2
            }
        },
        141: {
            'name': 'Flächenbrand',
            'credits': 3600,
            'vehicles': {
                'lf': 4,
                'gwl2': 1,
                'elw1': 1,
                'fustw': 2
            },
            'percentages': {
                'gwl2': 20,
                'elw1': 20
            },
            'special': {
                'averageMinimumEmployeesFire': 30
            }
        },
        142: {
            'name': 'Feuer auf Balkon',
            'credits': 1500,
            'vehicles': {
                'lf': 2,
                'dlk': 1
            },
            'percentages': {
                'dlk': 30
            }
        },
        143: {
            'name': 'Brennende Papiercontainer',
            'credits': 400,
            'vehicles': {
                'lf': 1
            }
        },
        144: {
            'name': 'Brennende Hecke',
            'credits': 400,
            'vehicles': {
                'lf': 1
            }
        },
        145: {
            'name': 'Trunkenheitsfahrt',
            'credits': 150,
            'vehicles': {
                'fustw': 1
            }
        },
        146: {
            'name': 'Brennendes Reetdachhaus',
            'credits': 4200,
            'vehicles': {
                'lf': 5,
                'dlk': 1,
                'elw1': 1,
                'atem': 1,
                'fustw': 2
            },
            'percentages': {
                'atem': 30
            },
            'patients': {
                'min': 1,
                'max': 2,
                'nef': 50,
                'transport': 50,
                'specialisation': 'Allgemeine Innere'
            }
        },
        147: {
            'name': 'Krankentransport',
            'credits': 130,
            'vehicles': {
                'ktw': 1
            }
        },
        148: {
            'name': 'Ampelausfall',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            },
            'expansions': [
                [128, 'Auffahrunfall']
            ]
        },
        149: {
            'name': 'Pannenfahrzeug',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            }
        },
        150: {
            'name': 'Hausfriedensbruch',
            'credits': 150,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        151: {
            'name': 'Raub',
            'credits': 1200,
            'vehicles': {
                'fustw': 3
            },
            'prisoners': {
                'min': 0,
                'max': 3
            }
        },
        152: {
            'name': 'Häusliche Gewalt',
            'credits': 750,
            'vehicles': {
                'fustw': 2
            },
            'prisoners': {
                'min': 0,
                'max': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Unfallchirugie'
            }
        },
        153: {
            'name': 'Hilflose Person',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        154: {
            'name': 'Hilflose Person',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'tragehilfe': 10,
                'transport': 100,
                'specialisation': 'Allgemeine Innere'
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        155: {
            'onlyRd': true,
            'name': 'Akuter Harnstau',
            'specialisation': 'Urologie',
            'tragehilfe': 5,
            'transport': 100
        },
        156: {
            'onlyRd': true,
            'name': 'Haarnleiter Blutung',
            'specialisation': 'Urologie',
            'tragehilfe': 5,
            'transport': 100,
            'nef': 20
        },
        157: {
            'onlyRd': true,
            'name': 'HerzrhytmusstÃ¶rungen',
            'specialisation': 'Kardiologie',
            'tragehilfe': 20,
            'transport': 100,
            'nef': 60
        },
        158: {
            'name': 'Tiefgarage unter Wasser',
            'credits': 370,
            'vehicles': {
                'lf': 1
            }
        },
        159: {
            'name': 'Ã„ste auf Fahrbahn',
            'credits': 120,
            'vehicles': {
                'lfogkworw': 1
            }
        },
        160: {
            'name': 'Umherfliegendes Baumaterial',
            'credits': 150,
            'vehicles': {
                'lf': 1
            }
        },
        161: {
            'name': 'PKW auf Baum',
            'credits': 900,
            'vehicles': {
                'lf': 1
            }
        },
        162: {
            'name': 'Baum auf PKW',
            'credits': 1400,
            'vehicles': {
                'lf': 1,
                'fustw': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'transport': 50,
                'nef': 50,
                'specialisation': 'Unfallchirugie'
            }
        },
        163: {
            'name': 'Baum auf Dach',
            'credits': 1400,
            'vehicles': {
                'lf': 1,
                'dlk': 1,
                'fwk': 1
            },
            'percentages': {
                'dlk': 10,
                'fwk': 10
            }
        },
        164: {
            'onlyRd': true,
            'name': 'Kopfplatzwunde',
            'specialisation': 'Allgemeine Chirugie',
            'tragehilfe': 5,
            'transport': 90
        },
        165: {
            'onlyRd': true,
            'name': 'Gehirnerschütterung',
            'specialisation': 'Neurologie',
            'tragehilfe': 5,
            'transport': 90,
            'nef': 20
        },
        166: {
            'name': 'Fassadenteile drohen zu fallen',
            'credits': 1200,
            'vehicles': {
                'lf': 1,
                'dlk': 1,
                'elw1': 1,
                'hoehen': 1,
                'fustw': 1
            },
            'percentages': {
                'dlk': 40,
                'hoehen': 40
            }
        },
        167: {
            'name': 'Beschädigter Dachbereich',
            'credits': 1400,
            'vehicles': {
                'lf': 2,
                'dlk': 1,
                'elw1': 1,
                'hoehen': 1,
                'fustw': 1
            },
            'percentages': {
                'dlk': 50,
                'hoehen': 20
            }
        },
        168: {
            'name': 'Baum auf Gleisen',
            'credits': 600,
            'vehicles': {
                'lf': 1,
                'fustw': 1
            },
            'expansions': [
                [237, 'Verkehrsunfall mit Zug']
            ]
        },
        169: {
            'name': 'Baum auf Gleisen',
            'credits': 600,
            'vehicles': {
                'lf': 1,
                'fustw': 1
            },
            'expansions': [
                [237, 'Verkehrsunfall mit Zug']
            ]
        },
        170: {
            'name': 'Baum auf Gleisen',
            'credits': 600,
            'vehicles': {
                'lf': 1,
                'fustw': 1
            },
            'expansions': [
                [237, 'Verkehrsunfall mit Zug']
            ]
        },
        171: {
            'name': 'Parkdeck voll Wasser gelaufen',
            'credits': 4000,
            'vehicles': {
                'lf': 1,
                'gwl2': 1,
                'oel': 1,
                'elw2': 1,
                'fustw': 2
            }
        },
        172: {
            'name': 'Straße unter Wasser',
            'credits': 600,
            'vehicles': {
                'lf': 1
            }
        },
        173: {
            'name': 'Straße unter Wasser',
            'credits': 600,
            'vehicles': {
                'lf': 1,
                'fustw': 2
            }
        },
        174: {
            'name': 'Erdrutsch',
            'credits': 1020,
            'vehicles': {
                'fustw': 2,
                'gkw': 1,
                'mtwtz': 1,
                'radlader': 1
            }
        },
        175: {
            'name': 'Erdrutsch',
            'credits': 900,
            'vehicles': {
                'gkw': 1,
                'mtwtz': 1,
                'radlader': 1
            }
        },
        176: {
            'name': 'LKW in Hauswand',
            'credits': 2100,
            'vehicles': {
                'gkw': 1,
                'mtwtz': 1,
                'mzkw': 1,
                'fwk': 1,
                'dlk': 1,
                'lf': 2,
                'elw1': 1
            },
            'percentages': {
                'fwk': 75,
                'dlk': 70
            },
            'expansions': [
                [177, 'Eingestürztes Wohnhaus'],
                [213, 'Gasexplosion']
            ]
        },
        177: {
            'name': 'Eingestürztes Wohnhaus',
            'credits': 4600,
            'vehicles': {
                'gkw': 2,
                'radlader': 2,
                'mtwtz': 1,
                'mzkw': 1,
                'lf': 3,
                'dlk': 1,
                'elw1': 1,
                'rw': 1,
                'fwk': 1,
                'fustw': 2
            },
            'percentages': {
                'dlk': 30,
                'fwk': 75
            },
            'patients': {
                'min': 0,
                'max': 7,
                'specialisation': 'Allgemeine Innere'
            }
        },
        178: {
            'name': 'Gefahrgut-LKW verunglückt',
            'credits': 2900,
            'vehicles': {
                'gkw': 1,
                'radlader': 1,
                'lf': 3,
                'elw1': 1,
                'elw2': 1,
                'rw': 1,
                'mess': 1,
                'dekon': 1,
                'gefahr': 1,
                'fustw': 2
            },
            'percentages': {
                'elw2': 40,
                'rw': 50,
                'mess': 30,
                'dekon': 10
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Unfallchirugie'
            },
            'expansions': [
                [213, 'Gasexplosion']
            ]
        },
        179: {
            'onlyRd': true,
            'name': 'Schädelverletzung',
            'specialisation': 'Neurochirugie',
            'tragehilfe': 5,
            'transport': 100,
            'nef': 100
        },
        180: {
            'onlyRd': true,
            'name': 'Wirbelsäulenverlätzung',
            'specialisation': 'Neurochirugie',
            'tragehilfe': 5,
            'transport': 100,
            'nef': 100,
            'rth': 100
        },
        181: {
            'onlyRd': true,
            'name': 'Sturz aus Höe',
            'specialisation': 'Neurochirugie',
            'tragehilfe': 5,
            'transport': 100,
            'nef': 100,
            'rth': 100
        },
        182: {
            'onlyRd': true,
            'name': 'Sturz aus Höe',
            'specialisation': 'Neurochirugie',
            'tragehilfe': 5,
            'transport': 100,
            'nef': 50
        },
        183: {
            'onlyRd': true,
            'name': 'Sonnenstich',
            'specialisation': 'Allgemeine Innere',
            'tragehilfe': 5,
            'transport': 10
        },
        184: {
            'onlyRd': true,
            'name': 'Hitzschlag',
            'specialisation': 'Allgemeine Innere',
            'tragehilfe': 2,
            'transport': 60,
            'nef': 40
        },
        185: {
            'onlyRd': true,
            'name': 'Hitzekrampf',
            'specialisation': 'Allgemeine Innere',
            'transport': 80,
            'nef': 50
        },
        186: {
            'name': 'Lagerhallenbrand',
            'credits': 5630,
            'vehicles': {
                'gkw': 1,
                'mtwtz': 1,
                'radlader': 1,
                'anhdle': 1,
                'rw': 1,
                'lf': 5,
                'elw1': 1,
                'elw2': 1,
                'fwk': 1,
                'dlk': 2,
                'atem': 1,
                'mess': 1,
                'gwl2': 1,
                'fustw': 2
            },
            'percentages': {
                'fwk': 15
            },
            'patients': {
                'min': 1,
                'max': 4,
                'specialisation': 'Allgemeine Innere',
                'transport': 65,
                'nef': 20
            }
        },
        187: {
            'name': 'Feuer im Lagerraum',
            'credits': 2230,
            'vehicles': {
                'lf': 2,
                'elw1': 1,
                'dlk': 1,
                'mess': 1,
            },
            'percentages': {
                'dlk': 50,
                'mess': 20
            },
            'expansions': [
                [186, 'Lagerhallenbrand']
            ]
        },
        188: {
            'name': 'Personenkontrolle',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        189: {
            'name': 'Verkehrbehinderung',
            'credits': 80,
            'vehicles': {
                'fustw': 1
            },
            'expansions': [
                [73, 'Schlägerei']
            ]
        },
        190: {
            'name': 'Diebstahl aus Kfz',
            'credits': 150,
            'vehicles': {
                'fustw': 1
            }
        },
        191: {
            'name': 'Radweg auf Baum',
            'credits': 310,
            'vehicles': {
                'lfogkworw': 1
            },
            'expansions': [
                [194, 'Baum unter Person eingeklemmt']
            ]
        },
        192: {
            'name': 'Brennende Trafostation',
            'credits': 1900,
            'vehicles': {
                'lf': 2,
                'elw1': 1
            }
        },
        193: {
            'name': 'Brennende Trafostation',
            'credits': 2000,
            'vehicles': {
                'lf': 2,
                'elw1': 1,
                'fustw': 1
            }
        },
        194: {
            'name': 'Baum unter Person eingeklemmt',
            'credits': 1000,
            'vehicles': {
                'lf': 1,
                'fustw': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'transport': 100,
                'nef': 100,
                'specialisation': 'Unfallchirugie'
            }
        },
        195: {
            'name': 'Schwerpunkteinsatz Tageswohnungseinbrüche',
            'credits': 1000,
            'vehicles': {
                'grukw': 3,
                'lebefkw': 1
            }
        },
        196: {
            'name': 'Schwerpunkteinsatz Verkehrsüberwachung',
            'credits': 1000,
            'vehicles': {
                'grukw': 3,
                'lebefkw': 1
            }
        },
        197: {
            'name': 'Präsenzeinsatz Volksfest',
            'credits': 2000,
            'vehicles': {
                'grukw': 3,
                'lebefkw': 1
            }
        },
        198: {
            'name': 'Jugendschutzkontrolle in Diskothek',
            'credits': 2500,
            'vehicles': {
                'grukw': 3,
                'lebefkw': 1,
                'fustw': 2
            }
        },
        199: {
            'name': 'Geländedurchsuchung nach Beweismittel',
            'credits': 750,
            'vehicles': {
                'grukw': 3,
                'lebefkw': 1
            }
        },
        200: {
            'name': 'Gelpante Razzia',
            'credits': 5500,
            'vehicles': {
                'grukw': 6,
                'lebefkw': 2,
                'fustw': 2,
                'gefkw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 5
            }
        },
        201: {
            'name': 'Fußball Bundesliga-Spiel',
            'credits': 9000,
            'vehicles': {
                'grukw': 9,
                'lebefkw': 3,
                'fustw': 2,
                'gefkw': 1,
                'fukw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 5
            }
        },
        202: {
            'name': 'Diebstahl auf Weihnachtsmarkt',
            'credits': 300,
            'vehicles': {
                'fustw': 1
            }
        },
        203: {
            'name': 'Brennende Weihnachtsmarktbude',
            'credits': 610,
            'vehicles': {
                'lf': 2
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Allgemeine Innere',
                'nef': 10
            }
        },
        204: {
            'name': 'Scheunenbrand',
            'credits': 3500,
            'vehicles': {
                'lf': 6,
                'elw1': 1,
                'dlk': 1,
                'atem': 1,
                'gwl2': 1
            },
            'percentages': {
                'dlk': 50,
                'atem': 25,
                'gwl2': 60
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Unfallchirugie',
            },
            'special': {
                'averageMinimumEmployeesFire': 30
            },
            'expansions': [
                [205, 'Feuer auf Bauernhof - Mittel']
            ]
        },
        205: {
            'name': 'Feuer auf Bauernhof - Mittel',
            'credits': 5100,
            'vehicles': {
                'lf': 7,
                'elw1': 1,
                'dlk': 2,
                'atem': 1,
                'gwl2': 1,
                'fustw': 3
            },
            'percentages': {
                'dlk': 75,
                'atem': 70,
                'gwl2': 90
            },
            'patients': {
                'min': 2,
                'max': 4,
                'nef': 33,
                'specialisation': 'Unfallchirugie',
            },
            'special': {
                'averageMinimumEmployeesFire': 60
            },
            'expansions': [
                [206, 'Feuer auf Bauernhof - Groß']
            ]
        },
        206: {
            'name': 'Feuer auf Bauernhof - Groß',
            'credits': 10200,
            'vehicles': {
                'lf': 15,
                'fwk': 1,
                'elw1': 2,
                'elw2': 1,
                'dlk': 4,
                'atem': 2,
                'gwl2': 2,
                'fustw': 3,
                'gkw': 2,
                'mtwtz': 1,
                'radlader': 2
            },
            'percentages': {
                'fwk': 15,
                'atem': 70,
                'gwl2': 90
            },
            'patients': {
                'min': 2,
                'max': 7,
                'nef': 33,
                'specialisation': 'Unfallchirugie',
            },
            'special': {
                'averageMinimumEmployeesFire': 105
            }
        },
        207: {
            'vge': true,
            'name': 'Gefahrgutunfall - Groß',
            'credits': 16010,
            'vehicles': {
                'lf': 20,
                'mess': 4,
                'gefahr': 4,
                'elw1': 3,
                'elw2': 2,
                'dekon': 1,
                'rw': 5,
                'dlk': 2,
                'atem': 3,
                'fustw': 3,
                'gkw': 2,
                'mtwtz': 1,
                'radlader': 2
            },
            'patients': {
                'min': 10,
                'max': 20,
                'specialisation': 'Allgemeine Innere',
            }
        },
        208: {
            'name': 'Leck in Chemikalientank',
            'credits': 4000,
            'vehicles': {
                'lf': 8,
                'elw1': 1,
                'elw2': 1,
                'rw': 2,
                'gwl2': 1,
                'atem': 1,
                'oel': 1,
                'mess': 2,
                'gefahr': 1,
                'dekon': 1,
                'fustw': 2
            },
            'percentages': {
                'gwl2': 20,
                'oel': 50
            },
            'patients': {
                'min': 0,
                'max': 20,
                'nef': 15,
                'specialisation': 'Allgemeine Innere',
            },
            'expansions': [
                [213, 'Gasexplosion']
            ]
        },
        209: {
            'name': 'Fahrraddiebstahl',
            'credits': 150,
            'vehicles': {
                'fustw': 1
            }
        },
        210: {
            'onlyRd': true,
            'name': 'Unfall mit Motorsäge',
            'transport': 50,
            'nef': 95,
            'specialisation': 'Unfallchirugie'
        },
        211: {
            'onlyRd': true,
            'name': 'Unterzuckerung',
            'transport': 60,
            'nef': 20,
            'specialisation': 'Allgemeine Innere',
            'tragehilfe': 20
        },
        212: {
            'onlyRd': true,
            'name': 'Akute Bauchschmerzen',
            'transport': 80,
            'nef': 20,
            'specialisation': 'Allgemeine Chirugie',
            'tragehilfe': 5
        },
        213: {
            'name': 'Gasexplosion',
            'credits': 11200,
            'vehicles': {
                'lf': 20,
                'fwk': 1,
                'rw': 2,
                'dlk': 2,
                'elw1': 4,
                'elw2': 2,
                'gwl2': 2,
                'mess': 2,
                'atem': 2,
                'dekon': 1,
                'fustw': 4,
                'gkw': 1,
                'mtwtz': 1,
                'radlader': 1,
                'anhdle': 1,
                'mzkw': 1
            },
            'percentages': {
                'fwk': 40,
                'dekon': 10
            },
            'patients': {
                'min': 0,
                'max': 10,
                'nef': 40,
                'transport': 70,
                'specialisation': 'Unfallchirugie',
            }
        },
        214: {
            'name': 'Bürobrand',
            'credits': 3000,
            'vehicles': {
                'lf': 6,
                'rw': 2,
                'elw1': 1,
                'elw2': 1,
                'dlk': 2,
                'atem': 1,
                'fustw': 2
            },
            'percentages': {
                'rw': 30,
                'elw2': 30
            },
            'patients': {
                'min': 5,
                'max': 10,
                'nef': 40,
                'transport': 70,
                'specialisation': 'Allgemeine Innere',
            }
        },
        215: {
            'name': 'Chlorgasaustritt',
            'credits': 4000,
            'vehicles': {
                'lf': 7,
                'elw1': 2,
                'elw2': 1,
                'atem': 2,
                'mess': 1,
                'gefahr': 1,
                'fustw': 4
            },
            'patients': {
                'min': 5,
                'max': 12,
                'nef': 60,
                'transport': 70,
                'specialisation': 'Allgemeine Innere',
            }
        },
        216: {
            'name': 'Brennender Bollerwagen',
            'credits': 500,
            'vehicles': {
                'lf': 1
            }
        },
        217: {
            'name': 'Brennender Bollerwagen',
            'credits': 500,
            'vehicles': {
                'lf': 1
            }
        },
        218: {
            'name': 'Brennender Bollerwagen',
            'credits': 500,
            'vehicles': {
                'lf': 1
            }
        },
        219: {
            'name': 'Brennender Bollerwagen',
            'credits': 500,
            'vehicles': {
                'lf': 1
            }
        },
        220: {
            'name': 'Brennender Bollerwagen',
            'credits': 500,
            'vehicles': {
                'lf': 1
            }
        },
        221: {
            'vge': true,
            'name': 'Zugunglück (Groß)',
            'credits': 17000,
            'vehicles': {
                'lf': 30,
                'dlk': 3,
                'rw': 6,
                'atem': 4,
                'oel': 1,
                'elw1': 6,
                'elw2': 3,
                'gwl2': 2,
                'fwk': 4,
                'radlader': 2,
                'gkw': 1,
                'mzkw': 1,
                'mtwtz': 1,
                'fustw': 12
            },
            'patients': {
                'min': 20,
                'max': 40,
                'nef': 80,
                'specialisation': 'Unfallchirugie',
            }
        },
        222: {
            'vge': true,
            'name': 'Zugunglück (Klein)',
            'credits': 14000,
            'vehicles': {
                'lf': 20,
                'dlk': 2,
                'rw': 3,
                'atem': 2,
                'oel': 1,
                'elw1': 3,
                'elw2': 1,
                'gwl2': 1,
                'fwk': 2,
                'radlader': 1,
                'mtwtz': 1,
                'fustw': 6
            },
            'patients': {
                'min': 10,
                'max': 20,
                'nef': 80,
                'specialisation': 'Unfallchirugie',
            }
        },
        223: {
            'siwa': true,
            'name': 'Brandsicherheitswache bei Volksfest',
            'credits': 4400
        },
        224: {
            'siwa': true,
            'name': 'Brandsicherheitswachdienst im Theater',
            'credits': 4000
        },
        225: {
            'siwa': true,
            'name': 'Dorf/Stadtfest',
            'credits': 7000
        },
        226: {
            'siwa': true,
            'name': 'Volkslauf',
            'credits': 5000
        },
        227: {
            'siwa': true,
            'name': 'Angemeldete Demonstration',
            'credits': 5000
        },
        228: {
            'siwa': true,
            'name': 'Absicherung Musikumzug',
            'credits': 2000
        },
        229: {
            'siwa': true,
            'name': 'Absicherung Radrennen',
            'credits': 4000
        },
        230: {
            'siwa': true,
            'name': 'Feuerprobealarm an Schule',
            'credits': 1000
        },
        231: {
            'name': 'Entflohener Gefangener',
            'credits': 4000,
            'vehicles': {
                'fustw': 10,
                'polheli': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        232: {
            'name': 'Kabeldiebstahl',
            'credits': 3500,
            'vehicles': {
                'fustw': 2,
                'polheli': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        233: {
            'name': 'Suche nach Vermissten',
            'credits': 4500,
            'vehicles': {
                'fustw': 2,
                'polheli': 1,
                'lf': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Kardiologie'
            }
        },
        234: {
            'siwa': true,
            'name': 'Entschärfung von Weltkriegsbombe',
            'credits': 4000
        },
        235: {
            'name': 'Verletzte Person auf Hochspannungsmast',
            'credits': 1500,
            'vehicles': {
                'hoehen': 1,
                'elw1': 1,
                'fustw': 1,
                'dlk': 1,
                'lf': 2
            },
            'percentages': {
                'dlk': 20
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 80,
                'transport': 100,
                'specialisation': 'Allgemeine Innere'
            }
        },
        236: {
            'name': 'Verletzte Person auf Hochspannungsmast',
            'credits': 2000,
            'vehicles': {
                'hoehen': 1,
                'elw1': 1,
                'fustw': 1,
                'dlk': 1,
                'lf': 2
            },
            'percentages': {
                'dlk': 20
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 100,
                'rth': 100,
                'transport': 100,
                'specialisation': 'Allgemeine Innere'
            }
        },
        237: {
            'name': 'Verkehrsunfall mit Zug',
            'credits': 1700,
            'vehicles': {
                'elw1': 1,
                'rw': 1,
                'fustw': 2,
                'lf': 2
            },
            'patients': {
                'min': 0,
                'max': 5,
                'nef': 80,
                'transport': 90,
                'specialisation': 'Unfallchirugie'
            }
        },
        238: {
            'name': 'Verkehrsunfall mit Linienbus',
            'credits': 2000,
            'vehicles': {
                'elw1': 1,
                'rw': 1,
                'fustw': 2,
                'lf': 2
            },
            'patients': {
                'min': 0,
                'max': 5,
                'nef': 20,
                'transport': 50,
                'specialisation': 'Unfallchirugie'
            },
            'expansions': [
                [93, 'Brennender Bus']
            ]
        },
        239: {
            'name': 'Verkehrsunfall mit Linienbus',
            'credits': 3000,
            'vehicles': {
                'elw1': 2,
                'elw2': 1,
                'rw': 2,
                'fustw': 4,
                'lf': 5,
                'fwk': 1,
                'oel': 1
            },
            'patients': {
                'min': 0,
                'max': 10,
                'nef': 40,
                'transport': 80,
                'specialisation': 'Unfallchirugie'
            },
            'expansions': [
                [93, 'Brennender Bus']
            ]
        },
        240: {
            'name': 'Gasgeruch',
            'credits': 2500,
            'vehicles': {
                'elw1': 1,
                'fustw': 1,
                'lf': 3,
                'dekon': 1,
                'mess': 1,
                'gefahr': 1
            },
            'percentages': {
                'dekon': 30,
                'mess': 30,
                'gefahr': 30
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 40,
                'transport': 80,
                'specialisation': 'Allgemeine Innere'
            },
            'expansions': [
                [213, 'Gasexplosion']
            ]
        },
        241: {
            'name': 'Wildunfall',
            'credits': 200,
            'vehicles': {
                'fustw': 1
            }
        },
        242: {
            'name': 'Pfefferspray in Schule',
            'credits': 2100,
            'vehicles': {
                'lf': 2,
                'mess': 1,
                'fustw': 3
            },
            'percentages': {
                'mess': 50,
            },
            'patients': {
                'min': 0,
                'max': 15,
                'nef': 10,
                'transport': 20,
                'specialisation': 'Allgemeine Innere'
            }
        },
        243: {
            'name': 'Reitunfall mit PKW',
            'credits': 1200,
            'vehicles': {
                'lf': 1
            },
            'patients': {
                'min': 1,
                'max': 4,
                'nef': 50,
                'transport': 40,
                'specialisation': 'Unfallchirugie'
            }
        },
        244: {
            'name': 'Person in Wasser',
            'credits': 1000,
            'vehicles': {
                'boot': 1
            }
        },
        245: {
            'name': 'Person in Wasser',
            'credits': 1200,
            'vehicles': {
                'boot': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 90,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        246: {
            'name': 'Person in Wasser',
            'credits': 1400,
            'vehicles': {
                'boot': 1,
                'lf': 3,
                'elw1': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 90,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        247: {
            'name': 'PKW in Wasser',
            'credits': 1400,
            'vehicles': {
                'boot': 2,
                'lf': 3,
                'elw1': 1,
                'fustw': 2,
                'taucher': 2
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 90,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        248: {
            'name': 'LKW in Wasser',
            'credits': 2000,
            'vehicles': {
                'boot': 3,
                'lf': 5,
                'elw1': 1,
                'fustw': 3,
                'taucher': 3
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 30,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        249: {
            'name': 'Bus in Wasser',
            'credits': 3000,
            'vehicles': {
                'boot': 3,
                'lf': 5,
                'elw1': 1,
                'fustw': 3,
                'taucher': 3
            },
            'patients': {
                'min': 0,
                'max': 15,
                'nef': 30,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        250: {
            'name': 'Person in Wasser',
            'credits': 1000,
            'vehicles': {
                'boot': 1
            }
        },
        251: {
            'name': 'Person in Wasser',
            'credits': 1200,
            'vehicles': {
                'boot': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 90,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        252: {
            'name': 'Person in Wasser',
            'credits': 1400,
            'vehicles': {
                'boot': 1,
                'lf': 3,
                'elw1': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 90,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        253: {
            'name': 'PKW in Wasser',
            'credits': 1400,
            'vehicles': {
                'boot': 2,
                'lf': 3,
                'elw1': 1,
                'fustw': 2,
                'taucher': 2
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 90,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        254: {
            'name': 'LKW in Wasser',
            'credits': 2000,
            'vehicles': {
                'boot': 3,
                'lf': 5,
                'elw1': 1,
                'fustw': 3,
                'taucher': 3
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 30,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        255: {
            'name': 'Bus in Wasser',
            'credits': 3000,
            'vehicles': {
                'boot': 3,
                'lf': 5,
                'elw1': 1,
                'fustw': 3,
                'taucher': 3
            },
            'patients': {
                'min': 0,
                'max': 15,
                'nef': 30,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        256: {
            'vge': true,
            'name': 'Zusammenstoß zweier Boote',
            'credits': 10010,
            'vehicles': {
                'lf': 6,
                'elw1': 2,
                'elw2': 1,
                'fustw': 5,
                'boot': 6,
                'taucher': 6
            },
            'patients': {
                'min': 0,
                'max': 30,
                'nef': 30,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        257: {
            'siwa': true,
            'name': 'Verkehrsüberwachung',
            'credits': 2500
        },
        258: {
            'name': 'Baumaschine umgestürzt',
            'credits': 2800,
            'vehicles': {
                'lf': 4,
                'fwk': 1,
                'elw1': 1,
                'dlk': 1,
                'rw': 2,
                'oel': 1,
                'fustw': 3
            },
            'percentages': {
                'fwk': 75
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Unfallchirugie'
            }
        },
        259: {
            'name': 'Brennender PKW durch FeuerwerkskÃ¶rper',
            'credits': 370,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [28, 'Garagenbrand'],
                [138, 'Flächenbrand'],
                [141, 'Flächenbrand'],
                [146, 'Brennendes Reetdachhaus']
            ]
        },
        260: {
            'name': 'Sperrmüllbrand durch FeuerwerkskÃ¶rper',
            'credits': 220,
            'vehicles': {
                'lf': 1
            }
        },
        261: {
            'name': 'Kleiner Feldbrand durch FeuerwerkskÃ¶rper',
            'credits': 1000,
            'vehicles': {
                'lf': 2
            }
        },
        262: {
            'name': 'Kellerbrand durch FeuerwerkskÃ¶rper',
            'credits': 2500,
            'vehicles': {
                'lf': 3,
                'elw1': 1
            },
            'percentages': {
                'elw1': 90
            },
            'patients': {
                'min': 0,
                'max': 2,
                'specialisation': 'Allgemeine Innere'
            }
        },
        263: {
            'name': 'Brennendes Bus-Häuschen durch FeuerwerkskÃ¶rper',
            'credits': 1000,
            'vehicles': {
                'lf': 2
            }
        },
        264: {
            'name': 'Brennender Balkon durch FeuerwerkskÃ¶rper',
            'credits': 1500,
            'vehicles': {
                'lf': 2,
                'dlk': 1
            },
            'percentages': {
                'dlk': 30
            }
        },
        265: {
            'name': 'Brennende Papiercontainer durch FeuerwerkskÃ¶rper',
            'credits': 400,
            'vehicles': {
                'lf': 1
            }
        },
        266: {
            'name': 'Brennende Hecke durch FeuerwerkskÃ¶rper',
            'credits': 400,
            'vehicles': {
                'lf': 1
            }
        },
        267: {
            'name': 'Trunkenheitsfahrt nach Silvesterparty',
            'credits': 150,
            'vehicles': {
                'fustw': 1
            }
        },
        268: {
            'name': 'Brennendes Reetdachhaus durch FeuerwerkskÃ¶rper',
            'credits': 4200,
            'vehicles': {
                'lf': 5,
                'dlk': 1,
                'elw1': 1,
                'atem': 1,
                'fustw': 2
            },
            'percentages': {
                'atem': 30
            },
            'patients': {
                'min': 1,
                'max': 2,
                'nef': 50,
                'transport': 50,
                'specialisation': 'Allgemeine Innere'
            }
        },
        269: {
            'name': 'Kfz durch FeuerwerkskÃ¶rper beschädigt',
            'credits': 200,
            'vehicles': {
                'fustw': 1
            }
        },
        270: {
            'name': 'Verstoß gegen Sprengstoffverordnung',
            'credits': 200,
            'vehicles': {
                'fustw': 1
            }
        },
        271: {
            'name': 'Beschädigter Kesselwagen',
            'credits': 6050,
            'vehicles': {
                'gkw': 1,
                'fustw': 3,
                'lf': 10,
                'dekon': 1,
                'gefahr': 1,
                'mess': 1,
                'dlk': 1,
                'elw1': 2,
                'elw2': 1,
                'rw': 1
            }
        },
        272: {
            'name': 'Gewässerverschmutzung durch Öl',
            'credits': 1600,
            'vehicles': {
                'boot': 1,
                'lf': 2,
                'oel': 1,
                'elw1': 1,
                'fustw': 1
            }
        },
        273: {
            'name': 'Gewässerverschmutzung durch Öl',
            'credits': 1600,
            'vehicles': {
                'boot': 1,
                'lf': 2,
                'oel': 1,
                'elw1': 1,
                'fustw': 1
            }
        },
        274: {
            'onlyRd': true,
            'name': 'Bewusstlose Person',
            'transport': 100,
            'nef': 90,
            'specialisation': 'Allgemeine Innere'
        },
        275: {
            'siwa': true,
            'name': 'Absicherung Rockkonzert',
            'credits': 7000
        },
        276: {
            'siwa': true,
            'name': 'Schwertransport',
            'credits': 2000
        },
        277: {
            'name': 'Person im Aufzug',
            'credits': 350,
            'vehicles': {
                'lf': 1,
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 10,
                'specialisation': 'Allgemeine Innere'
            }
        },
        278: {
            'name': 'LKW in Supermarkt',
            'credits': 2500,
            'vehicles': {
                'gkw': 1,
                'mtwtz': 1,
                'mzkw': 1,
                'fwk': 1,
                'dlk': 1,
                'lf': 2,
                'elw1': 1,
                'fustw': 2
            },
            'percentages': {
                'fwk': 75,
                'dlk': 70
            },
            'patients': {
                'min': 0,
                'max': 2,
                'transport': 50,
                'nef': 50,
                'specialisation': 'Allgemeine Innere'
            }
        },
        279: {
            'name': 'LKW in Supermarkt',
            'credits': 2800,
            'vehicles': {
                'gkw': 1,
                'mtwtz': 1,
                'mzkw': 1,
                'fwk': 1,
                'dlk': 1,
                'lf': 2,
                'elw1': 1,
                'fustw': 2
            },
            'percentages': {
                'fwk': 75,
                'dlk': 70
            },
            'patients': {
                'min': 0,
                'max': 3,
                'transport': 50,
                'nef': 50,
                'specialisation': 'Allgemeine Innere'
            }
        },
        280: {
            'name': 'Baum auf Oberleitung',
            'credits': 1500,
            'vehicles': {
                'lf': 3,
                'elw1': 1,
                'rw': 1,
                'dlk': 1
            }
        },
        281: {
            'onlyRd': true,
            'name': 'Stromschlag',
            'transport': 100,
            'nef': 100,
            'specialisation': 'Allgemeine Innere',
            'tragehilfe': 20,
            'rth': 50
        },
        282: {
            'name': 'Geplatzte Wasserleitung',
            'credits': 1000,
            'vehicles': {
                'lf': 2,
                'rw': 1,
                'elw1': 1
            },
            'percentages': {
                'rw': 20,
                'elw1': 20
            }
        },
        283: {
            'name': 'Bürobrand (Groß)',
            'credits': 4000,
            'vehicles': {
                'rw': 2,
                'lf': 10,
                'elw1': 3,
                'elw2': 1,
                'dlk': 2,
                'atem': 1,
                'fustw': 3
            },
            'percentages': {
                'rw': 30
            },
            'patients': {
                'min': 5,
                'max': 10,
                'transport': 70,
                'nef': 40,
                'specialisation': 'Allgemeine Innere'
            }
        },
        284: {
            'name': 'Ostereier-Dieb',
            'credits': 100,
            'vehicles': {
                'fustw': 1
            }
        },
        285: {
            'name': 'Pinsel aus Werkstatt entwendet',
            'credits': 150,
            'vehicles': {
                'fustw': 1
            }
        },
        286: {
            'name': 'Eingestürzter Hasenbau',
            'credits': 1020,
            'vehicles': {
                'gkw': 1,
                'mtwtz': 1,
                'radlader': 1,
                'fustw': 2
            }
        },
        287: {
            'name': 'Angefahrener Osterhase',
            'credits': 300,
            'vehicles': {
                'fustw': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'transport': 38,
                'specialisation': 'Unfallchirugie'
            }
        },
        288: {
            'name': 'Brennendes Osternest',
            'credits': 110,
            'vehicles': {
                'lf': 1
            }
        },
        289: {
            'name': 'Schokoladenspur auf Straße',
            'credits': 400,
            'vehicles': {
                'lfogkworw': 1
            }
        },
        290: {
            'name': 'Eierkocherbrand',
            'credits': 800,
            'vehicles': {
                'lf': 2
            }
        },
        291: {
            'siwa': true,
            'name': 'Hasentreffen in Ostereierstedt',
            'credits': 7000
        },
        292: {
            'name': 'Tankbetrug',
            'credits': 300,
            'vehicles': {
                'fustw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        293: {
            'onlyRd': true,
            'name': 'Bluthochdruck',
            'transport': 80,
            'nef': 50,
            'specialisation': 'Kardiologie',
            'tragehilfe': 30
        },
        294: {
            'siwa': true,
            'name': 'Fußball Bundesliga-Risikospiel',
            'credits': 12000
        },
        295: {
            'name': 'Tankstellenüberfall',
            'credits': 1100,
            'vehicles': {
                'fustw': 6
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        296: {
            'name': 'Gasunfall in Werkstatt',
            'credits': 2020,
            'vehicles': {
                'rw': 1,
                'lf': 3,
                'elw1': 1
            },
            'percentages': {
                'rw': 30
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 40,
                'specialisation': 'Allgemeine Innere'
            }
        },
        297: {
            'onlyRd': true,
            'name': 'Arbeitsunfall im Garten',
            'transport': 70,
            'nef': 20,
            'specialisation': 'Unfallchirugie'
        },
        298: {
            'name': 'Hilflose Person auf Wasser',
            'credits': 1500,
            'vehicles': {
                'lf': 1,
                'boot': 1,
                'taucher': 1
            },
            'percentages': {
                'lf': 20,
                'taucher': 10
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 90,
                'transport': 70,
                'rth': 50,
                'specialisation': 'Allgemeine Innere'
            }
        },
        299: {
            'name': 'Strohballen qualmen in Scheune',
            'credits': 2500,
            'vehicles': {
                'lf': 5,
                'elw1': 1,
                'dlk': 1,
                'atem': 1,
                'gwl2': 1
            },
            'percentages': {
                'dlk': 75,
                'gwl2': 50
            }
        },
        300: {
            'name': 'Abgestürzter Kletterer',
            'credits': 1500,
            'vehicles': {
                'lf': 2,
                'hoehen': 1,
                'fustw': 1,
                'elw1': 1,
                'dlk': 1
            },
            'percentages': {
                'hoehen': 50,
                'dlk': 75
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 90,
                'transport': 100,
                'rth': 50,
                'specialisation': 'Unfallchirugie'
            }
        },
        301: {
            'name': 'Tiere auf der Fahrbahn',
            'credits': 500,
            'vehicles': {
                'fustw': 2
            },
            'expansions': [
                [25, 'Verkehrsunfall'],
                [27, 'Auffahrunfall'],
                [120, 'LKW umgestürzt'],
                [121, 'LKW umgestürzt'],
                [122, 'Motorradunfall'],
                [123, 'Verkehrsunfall'],
                [124, 'Verkehrsunfall'],
                [125, 'Verkehrsunfall'],
                [126, 'Verkehrsunfall'],
                [127, 'Verkehrsunfall'],
                [128, 'Auffahrunfall']
            ]
        },
        302: {
            'name': 'Brennendes Kleinflugzeug',
            'credits': 6000,
            'vehicles': {
                'lf': 8,
                'elw1': 2,
                'elw2': 1,
                'rw': 1,
                'dlk': 1,
                'gwl2': 1,
                'oel': 1,
                'fustw': 3
            },
            'percentages': {
                'dlk': 50,
                'gwl2': 80,
                'oel': 25
            },
            'patients': {
                'min': 1,
                'max': 5,
                'nef': 80,
                'transport': 90,
                'specialisation': 'Unfallchirugie'
            }
        },
        303: {
            'name': 'Carportbrand',
            'credits': 700,
            'vehicles': {
                'lf': 2,
                'elw1': 1,
                'dlk': 1
            },
            'percentages': {
                'elw1': 30,
                'dlk': 20
            },
            'expansions': [
                [16, 'Wohnwagenbrand'],
                [28, 'Garagenbrand'],
                [102, 'Feuer in Einfamilienhaus'],
                [103, 'Feuer in Einfamilienhaus'],
                [104, 'Feuer in Einfamilienhaus'],
                [105, 'Feuer in Einfamilienhaus']
            ]
        },
        304: {
            'siwa': true,
            'name': 'Angemeldete Demonstration - Gefahrenpotential',
            'credits': 6500
        },
        305: {
            'siwa': true,
            'name': 'Fußball Bundesliga-Risikospiel',
            'credits': 13000
        },
        306: {
            'siwa': true,
            'name': 'Absicherung Rockkonzert - Gefahrenpotential',
            'credits': 8000
        },
        307: {
            'name': 'Spontaner Aufstand',
            'credits': 6000,
            'vehicles': {
                'fustw': 7,
                'wawe': 3,
                'grukw': 9,
                'lebefkw': 4,
                'fukw': 1,
                'polheli': 1
            },
            'prisoners': {
                'min': 0,
                'max': 10
            }
        },
        308: {
            'name': 'Brennender Müllwagen',
            'credits': 1000,
            'vehicles': {
                'lf': 2
            }
        },
        309: {
            'name': 'Tauchunfall',
            'credits': 1000,
            'vehicles': {
                'boot': 1,
                'taucher': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 90,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        310: {
            'name': 'Tauchunfall',
            'credits': 1000,
            'vehicles': {
                'boot': 1,
                'taucher': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 90,
                'transport': 90,
                'specialisation': 'Allgemeine Innere'
            }
        },
        311: {
            'name': 'Mitarbeiter unter PKW eingeklemmt',
            'credits': 1100,
            'vehicles': {
                'rw': 1,
                'lf': 2,
                'elw1': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 100,
                'transport': 100,
                'specialisation': 'Unfallchirugie'
            }
        },
        312: {
            'onlyRd': true,
            'name': 'Verunglückter Fallschirmspringer',
            'transport': 100,
            'nef': 100,
            'specialisation': 'Unfallchirugie'
        },
        313: {
            'name': 'Verunglückter Fallschirmspringer',
            'credits': 900,
            'vehicles': {
                'lf': 2,
                'dlk': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 100,
                'transport': 100,
                'specialisation': 'Unfallchirugie'
            }
        },
        314: {
            'name': 'Verunglückter Fallschirmspringer',
            'credits': 1900,
            'vehicles': {
                'lf': 3,
                'dlk': 1,
                'elw1': 1,
                'hoehen': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 100,
                'transport': 100,
                'specialisation': 'Unfallchirugie'
            }
        },
        315: {
            'name': 'Chemieunfall an Schule',
            'credits': 4400,
            'vehicles': {
                'lf': 8,
                'elw1': 2,
                'elw2': 1,
                'dlk': 1,
                'dekon': 1,
                'atem': 1,
                'mess': 1,
                'gefahr': 2
            },
            'percentages': {
                'elw2': 80,
                'dekon': 50,
                'atem': 50
            },
            'patients': {
                'min': 1,
                'max': 15,
                'nef': 60,
                'transport': 75,
                'specialisation': 'Neurologie'
            }
        },
        316: {
            'name': 'Unbekannte Substanz',
            'credits': 5400,
            'vehicles': {
                'lf': 12,
                'elw1': 2,
                'elw2': 1,
                'dekon': 1,
                'atem': 1,
                'mess': 2,
                'gefahr': 1,
                'rw': 2,
                'fustw': 4
            },
            'patients': {
                'min': 0,
                'max': 2,
                'nef': 60,
                'transport': 75,
                'specialisation': 'Allgemeine Innere'
            }
        },
        317: {
            'name': 'Person in Baumaschine eingeklemmt',
            'credits': 1500,
            'vehicles': {
                'lf': 2,
                'rw': 1,
                'elw1': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 100,
                'transport': 100,
                'specialisation': 'Unfallchirugie'
            }
        },
        318: {
            'name': 'AusgelÃ¶ster Heimrauchmelder',
            'credits': 200,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [5, 'Zimmerbrand'],
                [20, 'Kellerbrand'],
                [21, 'Schornsteinbrand'],
                [22, 'Dachstuhlbrand'],
                [28, 'Garagenbrand'],
                [32, 'Kaminbrand'],
                [76, 'Küchenbrand'],
                [102, 'Feuer in Einfamilienhaus'],
                [103, 'Feuer in Einfamilienhaus'],
                [104, 'Feuer in Einfamilienhaus'],
                [105, 'Feuer in Einfamilienhaus']
            ]
        },
        319: {
            'name': 'Person in Baugrube',
            'credits': 1000,
            'vehicles': {
                'lf': 1,
                'dlk': 1,
                'rw': 1
            },
            'percentages': {
                'dlk': 30,
                'rw': 40
            },
            'patients': {
                'min': 1,
                'max': 1,
                'nef': 50,
                'transport': 60,
                'specialisation': 'Unfallchirugie'
            }
        },
        320: {
            'name': 'Großfeuer im Krankenhaus',
            'credits': 11500,
            'vehicles': {
                'lf': 20,
                'dlk': 5,
                'atem': 3,
                'mess': 3,
                'gefahr': 2,
                'hoehen': 1,
                'fustw': 6,
                'elw1': 6,
                'elw2': 4,
                'gwl2': 2,
                'rw': 2,
                'radlader': 1,
                'mzkw': 1,
                'gkw': 1,
                'mtwtz': 1
            },
            'patients': {
                'min': 15,
                'max': 40,
                'nef': 50,
                'transport': 100,
                'specialisation': 'Allgemeine Innere'
            }
        },
        321: {
            'name': 'Saunabrand',
            'credits': 1800,
            'vehicles': {
                'lf': 3,
                'dlk': 1,
                'atem': 1,
                'elw1': 1,
                'fustw': 2
            }
        },
        322: {
            'siwa': true,
            'name': 'Geplante Autobahnsperrung',
            'credits': 2500
        },
        323: {
            'name': 'Dehnfugenbrand',
            'credits': 1500,
            'vehicles': {
                'lf': 2,
                'dlk': 1,
                'elw1': 1,
                'rw': 1,
                'fustw': 1
            },
            'percentages': {
                'rw': 50
            },
            'expansions': [
                [102, 'Feuer in Einfamilienhaus'],
                [103, 'Feuer in Einfamilienhaus'],
                [104, 'Feuer in Einfamilienhaus'],
                [105, 'Feuer in Einfamilienhaus']
            ]
        },
        324: {
            'name': 'Brand in Baumarkt',
            'credits': 10000,
            'vehicles': {
                'lf': 15,
                'dlk': 3,
                'atem': 2,
                'mess': 2,
                'gefahr': 1,
                'gwl2': 1,
                'fwk': 1,
                'elw1': 4,
                'elw2': 2,
                'rw': 1,
                'radlader': 2,
                'mzkw': 2,
                'gkw': 2,
                'mtwtz': 2,
                'fustw': 5
            },
            'patients': {
                'min': 0,
                'max': 10,
                'nef': 50,
                'transport': 50,
                'specialisation': 'Allgemeine Innere'
            }
        },
        325: {
            'siwa': true,
            'name': 'Absicherung Castor-Transport',
            'credits': 7000
        },
        326: {
            'onlyRd': true,
            'name': 'Handverletzung durch FeuerwerkskÃ¶rper',
            'transport': 90,
            'nef': 80,
            'specialisation': 'Unfallchirugie'
        },
        327: {
            'name': 'Tiefgaragenbrand',
            'credits': 3500,
            'vehicles': {
                'lf': 6,
                'dlk': 2,
                'atem': 2,
                'mess': 1,
                'oel': 1,
                'fustw': 1,
                'elw1': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'nef': 25,
                'transport': 50,
                'specialisation': 'Allgemeine Innere'
            }
        },
        328: {
            'name': 'Rauch in Kabine',
            'credits': 1200,
            'vehicles': {
                'flf': 1,
                'rtf': 1,
                'lf': 2
            }
        },
        329: {
            'name': 'Rauch in Kabine',
            'credits': 700,
            'vehicles': {
                'lf': 2
            }
        },
        330: {
            'name': 'Ãœberhitzte Bremsen',
            'credits': 2000,
            'vehicles': {
                'flf': 1,
                'rtf': 1,
                'lf': 1,
                'elw1': 1
            }
        },
        331: {
            'name': 'Flugzeugzusammentsoß am Boden',
            'credits': 3000,
            'vehicles': {
                'flf': 2,
                'rtf': 1,
                'rw': 2,
                'elw1': 2,
                'elw2': 1,
                'lf': 1
            },
            'patients': {
                'min': 0,
                'max': 5,
                'specialisation': 'Unfallchirugie'
            }
        },
        332: {
            'name': 'Flugzeugbrand',
            'credits': 10000,
            'vehicles': {
                'flf': 4,
                'rtf': 1,
                'rw': 3,
                'elw1': 2,
                'elw1': 1,
                'lf': 10
            },
            'patients': {
                'min': 0,
                'max': 30,
                'nef': 20,
                'transport': 30,
                'specialisation': 'Allgemeine Innere'
            }
        },
        333: {
            'name': 'Flugzeugbrand',
            'credits': 10000,
            'vehicles': {
                'flf': 4,
                'rtf': 1,
                'rw': 3,
                'elw1': 2,
                'elw1': 1,
                'lf': 10
            },
            'patients': {
                'min': 0,
                'max': 30,
                'nef': 50,
                'transport': 40,
                'specialisation': 'Allgemeine Innere'
            }
        },
        334: {
            'name': 'Brennendes Kleinflugzeug',
            'credits': 6000,
            'vehicles': {
                'lf': 8,
                'elw1': 2,
                'elw2': 1,
                'rw': 1,
                'dlk': 1,
                'gwl2': 1
            },
            'percentages': {
                'dlk': 50,
                'gwl2': 80
            },
            'patients': {
                'min': 1,
                'max': 5,
                'nef': 80,
                'transport': 90,
                'specialisation': 'Unfallchirugie'
            }
        },
        335: {
            'name': 'Brennendes Kleinflugzeug',
            'credits': 6000,
            'vehicles': {
                'lf': 8,
                'elw1': 2,
                'elw2': 1,
                'rw': 1,
                'dlk': 1,
                'gwl2': 1
            },
            'percentages': {
                'dlk': 50,
                'gwl2': 80
            },
            'patients': {
                'min': 1,
                'max': 5,
                'nef': 80,
                'transport': 90,
                'specialisation': 'Unfallchirugie'
            }
        },
        336: {
            'name': 'Absicherung Betankung',
            'credits': 500,
            'vehicles': {
                'lf': 1,
                'flf': 2
            }
        },
        337: {
            'name': 'Brennender PKW',
            'credits': 370,
            'vehicles': {
                'lf': 1
            }
        },
        338: {
            'name': 'Motorrad-Brand',
            'credits': 340,
            'vehicles': {
                'lf': 1
            }
        },
        339: {
            'onlyRd': true,
            'name': 'Herzinfarkt',
            'transport': 100,
            'nef': 100,
            'specialisation': 'Kardiologie',
            'tragehilfe': 20
        },
        340: {
            'onlyRd': true,
            'name': 'akuter Asthma-Anfall',
            'transport': 50,
            'nef': 100,
            'specialisation': 'Allgemeine Innere'
        },
        341: {
            'onlyRd': true,
            'name': 'Krampanfall',
            'transport': 50,
            'nef': 50,
            'specialisation': 'Neurologie',
            'tragehilfe': 10
        },
        342: {
            'name': 'Triebwerksbrand',
            'credits': 2500,
            'vehicles': {
                'flf': 4,
                'rw': 1,
                'lf': 2,
                'elw1': 1,
            }
        },
        343: {
            'name': 'Triebwerksbrand',
            'credits': 2500,
            'vehicles': {
                'flf': 4,
                'rw': 1,
                'lf': 2,
                'elw1': 1,
            }
        },
        344: {
            'name': 'Mehrere brennende Fahrzeuge',
            'credits': 1010,
            'vehicles': {
                'lf': 4,
                'dlk': 1,
                'elw1': 1,
                'rw': 1,
            },
        },
        345: {
            'name': 'Höenrettung am Fahrgeschäft',
            'credits': 1200,
            'vehicles': {
                'lf': 2,
                'dlk': 1,
                'elw1': 1,
                'rw': 1,
                'hoehen': 1,
                'fustw': 1,
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Allgemeine Innere'
            }
        },
        346: {
            'siwa': true,
            'name': 'Gebäudesprengung',
            'credits': 6500
        },
        347: {
            'name': 'Helikopter im Baum',
            'credits': 6000,
            'vehicles': {
                'lf': 6,
                'dlk': 1,
                'elw1': 2,
                'elw2': 1,
                'rw': 2,
                'oel': 1,
                'hoehen': 1,
                'fustw': 3,
                'fwk': 1,
            },
            'percentages': {
                'hoehen': 50
            },
            'patients': {
                'min': 0,
                'max': 4,
                'nef': 75,
                'specialisation': 'Unfallchirugie'
            }

        },
        348: {
            'name': 'Explosion in Biogasanlage',
            'credits': 10000,
            'vehicles': {
                'lf': 20,
                'dlk': 2,
                'rw': 4,
                'mess': 1,
                'atem': 2,
                'oel': 1,
                'gwl2': 2,
                'radlader': 1,
                'mzkw': 1,
                'gkw': 1,
                'mtwtz': 1,
                'elw1': 4,
                'elw2': 1,
                'fustw': 3
            },
            'patients': {
                'min': 0,
                'max': 2,
                'nef': 25,
                'rth': 10,
                'specialisation': 'Unfallchirugie'
            }
        },
        349: {
            'name': 'Brandgeruch',
            'credits': 100,
            'vehicles': {
                'lf': 1
            },
            'expansions': [
                [2, 'Brennender PKW'],
                [6, 'Gartenlaubbrand'],
                [8, 'Sperrmüllbrand'],
                [9, 'Strohballenbrand'],
                [5, 'Zimmerbrand'],
                [11, 'Brennende Telefonzelle'],
                [13, 'Brennender LKW'],
                [20, 'Kellerbrand'],
                [21, 'Schornsteinbrand'],
                [22, 'Dachstuhlbrand'],
                [26, 'Brand im Supermarkt'],
                [28, 'Garagenbrand'],
                [32, 'Kaminbrand'],
                [76, 'Küchenbrand'],
                [102, 'Feuer in Einfamilienhaus'],
                [103, 'Feuer in Einfamilienhaus'],
                [104, 'Feuer in Einfamilienhaus'],
                [105, 'Feuer in Einfamilienhaus'],
                [213, 'Gasexplosion'],
                [214, 'Bürobrand']
            ]
        },
        350: {
            'vge': true,
            'name': 'Flughafenbrand',
            'credits': 17000,
            'vehicles': {
                'lf': 40,
                'flf': 6,
                'dlk': 8,
                'rw': 6,
                'fustw': 10,
                'mess': 3,
                'atem': 2,
                'gwl2': 4,
                'radlader': 2,
                'mzkw': 2,
                'gkw': 2,
                'mtwtz': 2,
                'elw1': 6,
                'elw2': 2,
                'polheli': 2
            },
            'patients': {
                'min': 10,
                'max': 20,
                'nef': 50,
                'specialisation': 'Allgemeine Innere'
            }
        },
        351: {
            'name': 'Brand im Terminal',
            'credits': 4000,
            'vehicles': {
                'lf': 6,
                'dlk': 2,
                'atem': 1,
                'mess': 1,
                'elw1': 2,
                'elw2': 1,
                'fustw': 2,
            },
            'patients': {
                'min': 0,
                'max': 10,
                'nef': 50,
                'specialisation': 'Allgemeine Innere'
            }
        },
        352: {
            'name': 'Brand in Mehrfamilienhaus',
            'credits': 7500,
            'vehicles': {
                'lf': 12,
                'dlk': 3,
                'atem': 1,
                'mess': 1,
                'rw': 1,
                'gwl2': 1,
                'elw1': 3,
                'elw2': 1,
                'fustw': 4,
            },
            'patients': {
                'min': 0,
                'max': 10,
                'nef': 50,
                'rth': 25,
                'specialisation': 'Allgemeine Innere'
            }
        },
        353: {
            'siwa': true,
            'name': 'Großkontrolle Betäubungsmittel',
            'credits': 4500
        },
        354: {
            'onlyRd': true,
            'name': 'Grillunfall',
            'transport': 100,
            'nef': 75,
            'rth': 50,
            'tragehilfe': 30,
            'specialisation': 'Allgemeine Innere'
        },
        355: {
            'name': 'Waffenentzug',
            'credits': 1700,
            'vehicles': {
                'mek': 4,
                'fustw': 4,
                'fukw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        356: {
            'name': 'Häusliche Gewalt - eskaliert',
            'credits': 1700,
            'vehicles': {
                'sek': 4,
                'fustw': 4,
                'fukw': 1
            },
            'prisoners': {
                'min': 0,
                'max': 1
            },
            'patients': {
                'min': 0,
                'max': 1,
                'specialisation': 'Unfallchirugie'
            }
        },
        357: {
            'name': 'Bank: Stiller Alarm',
            'credits': 500,
            'vehicles': {
                'fustw': 2,
            },
            'expansions': [
                [358, 'Banküberfall']
            ]
        },
        358: {
            'name': 'Banküberfall',
            'credits': 4000,
            'vehicles': {
                'sek': 4,
                'fustw': 8,
                'fukw': 1,
                'polheli': 1
            },
            'prisoners': {
                'min': 0,
                'max': 5
            },
            'patients': {
                'min': 0,
                'max': 4,
                'specialisation': 'Allgemeine Chirugie',
                'transport': 80,
                'nef': 40,
                'rth': 5
            }
        },
        359: {
            'name': 'Geplante Razzia - Verdächtiger flüchtig',
            'credits': 9000,
            'vehicles': {
                'polheli': 1,
                'fustw': 5,
                'grukw': 6,
                'lebefkw': 2,
                'gefkw': 1,
                'fukw': 1,
                'mek': 4
            },
            'prisoners': {
                'min': 0,
                'max': 5
            }
        },
        360: {
            'name': 'Brennender Blumenstrauß',
            'credits': 500,
            'vehicles': {
                'lf': 1
            }
        },
        361: {
            'name': 'Brennender Blumenstrauß',
            'credits': 500,
            'vehicles': {
                'lf': 1
            }
        },
        362: {
            'name': 'Brennender Blumenstrauß',
            'credits': 500,
            'vehicles': {
                'lf': 1
            }
        },
        363: {
            'name': 'Brennender Blumenstrauß',
            'credits': 500,
            'vehicles': {
                'lf': 1
            }
        },
        364: {
            'name': 'Brennender Blumenstrauß',
            'credits': 500,
            'vehicles': {
                'lf': 1
            }
        },
        365: {
            'name': 'Brennender Blumenstrauß',
            'credits': 500,
            'vehicles': {
                'lf': 1
            }
        },
        366: {
            'name': 'Vollstreckung Haftbefehl',
            'credits': 550,
            'vehicles': {
                'fustw': 2
            },
            'prisoners': {
                'min': 0,
                'max': 1
            },
            'expansions': [
                [367, 'Vollstreckung Haftbefehl - eskaliert']
            ]
        },
        367: {
            'name': 'Vollstreckung Haftbefehl - eskaliert',
            'credits': 2800,
            'vehicles': {
                'fustw': 6,
                'fukw': 1,
                'sek': 4
            },
            'patients': {
                'min': 0,
                'max': 1,
                'transport': 20,
                'nef': 10,
                'specialisation': 'Allgemeine Innere'
            },
            'prisoners': {
                'min': 0,
                'max': 1
            }
        },
        368: {
            'name': 'Brennende Kirche',
            'credits': 7500,
            'vehicles': {
                'lf': 15,
                'dlk': 3,
                'gwl2': 2,
                'atem': 2,
                'rw': 4,
                'elw1': 3,
                'elw2': 1,
                'mess': 1,
                'fustw': 4,
                'gkw': 1,
                'mzkw': 1,
                'mtwtz': 1,
                'radlader': 1,
                'anhdle': 1
            },
            'patients': {
                'min': 0,
                'max': 5,
                'transport': 60,
                'nef': 40,
                'rth': 20,
                'specialisation': 'Allgemeine Innere'
            }
        },
        369: {
            'name': 'Austritt Kohlenmonoxid',
            'credits': 1800,
            'vehicles': {
                'lf': 2,
                'dlk': 1,
                'rw': 1,
                'mess': 1,
                'elw1': 1,
                'fustw': 1
            },
            'percentages': {
                'dlk': 10,
                'rw': 30,
                'mess': 50
            },
            'patients': {
                'min': 0,
                'max': 2,
                'transport': 60,
                'nef': 40,
                'rth': 20,
                'specialisation': 'Allgemeine Innere'
            }
        },
        370: {
            'name': 'Geisterfahrer',
            'credits': 1000,
            'vehicles': {
                'fustw': 4
            },
            'expansions': [
                [83, 'Gefahrgut-LKW verungkückt'],
                [89, 'LKW-Auffahrunfall'],
                [125, 'Verkehrsunfall'],
                [126, 'Verkehrsunfall'],
                [127, 'Verkehrsunfall']
            ]
        },
        371: {
            'name': 'Fußball aufpumpen',
            'credits': 300,
            'vehicles': {
                'lf': 1
            }
        },
        372: {
            'name': 'Mannschaftsbus in Halteverbot gestellt',
            'credits': 300,
            'vehicles': {
                'fustw': 1
            }
        },
        373: {
            'onlyRd': true,
            'name': 'Behandlung nach Schwalbe',
            "transport": 0,
        },
        374: {
            'onlyRd': true,
            'name': 'Prellung nach Lattenpraller',
            "transport": 0,
        },
        375: {
            'name': 'Tor gefallen',
            'credits': 300,
            'vehicles': {
                'lf': 1
            }
        },
        376: {
            'name': 'Pokal geklaut',
            'credits': 600,
            'vehicles': {
                'fustw': 2
            }
        },
        377: {
            'onlyRd': true,
            'name': 'Ãœberzuckerung',
            'transport': 60,
            'nef': 30,
            'tragehilfe': 20,
            'specialisation': 'Allgemeine Innere'
        },
        378: {
            'name': 'Observation',
            'siwa': true,
            'credits': 4400
        },
        379: {
            'name': 'PKW im Gleisbett',
            'credits': 900,
            'vehicles': {
                'lf': 3,
                'fwk': 1,
                'elw1': 1,
                'rw': 1,
                'fustw': 1
            },
            'percentages': {
                'fwk': 20
            }
        },
        380: {
            'name': 'PKW im Gleisbett',
            'credits': 900,
            'vehicles': {
                'lf': 3,
                'fwk': 1,
                'elw1': 1,
                'rw': 1,
                'fustw': 1
            },
            'percentages': {
                'fwk': 20
            }
        },
        381: {
            'name': 'PKW im Gleisbett',
            'credits': 900,
            'vehicles': {
                'lf': 3,
                'fwk': 1,
                'elw1': 1,
                'rw': 1,
                'fustw': 1
            },
            'percentages': {
                'fwk': 20
            }
        },
        382: {
            'name': 'PKW im Gleisbett',
            'credits': 900,
            'vehicles': {
                'lf': 3,
                'fwk': 1,
                'elw1': 1,
                'rw': 1,
                'fustw': 1
            },
            'percentages': {
                'fwk': 20
            }
        },
        383: {
            'name': 'Kind in PKW eingeschlossen',
            'credits': 600,
            'vehicles': {
                'fustw': 1
            },
            'patients': {
                'min': 1,
                'max': 1,
                'transport': 30,
                'nef': 20,
                'specialisation': 'Allgemeine Innere'
            }
        },
        384: {
            'name': 'Brennende Ballenpresse',
            'credits': 1100,
            'vehicles': {
                'lf': 2
            },
            'expansions': [
                [131, 'Mittlerer Feldbrand'],
                [132, 'Großer Feldbrand'],
                [133, 'Großer Feldbrand']
            ]
        },
        385: {
            'name': 'Unfall beim Umpumpen von Flüssigkeiten',
            'credits': 5100,
            'vehicles': {
                'elw1': 1,
                'elw2': 1,
                'atem': 1,
                'oel': 1,
                'lf': 4,
                'gefahr': 1,
                'mess': 1,
                'gwwerk': 1,
                'tm': 1
              },
              'patients': {
                  'min': 0,
                  'max': 3,
                  'nef': 20,
                  'transport': 30,
                  'specialisation': 'Allgemeine Innere'
                }
          },
          386: {
              'name': 'Ammoniak austritt',
              'credits': 5500,
              'vehicles': {
                  'elw1': 2,
                  'elw2': 1,
                  'atem': 1,
                  'lf': 5,
                  'gefahr': 1,
                  'mess': 1,
                  'gwwerk': 1,
                  'tm': 1,
                  'ulf': 1,
                  'turbo': 1
                },
                'patients': {
                    'min': 0,
                    'max': 5,
                    'nef': 50,
                    'transport': 80,
                    'specialisation': 'Allgemeine Innere'
                  }
            },
            387: {
                'name': 'Brennende Pipeline-Isolierung',
                'credits': 6500,
                'vehicles': {
                    'elw1': 1,
                    'atem': 1,
                    'dekon': 1,
                    'lf': 8,
                    'gefahr': 1,
                    'mess': 1,
                    'gwwerk': 1,
                    'tm': 1,
                    'ulf': 1,
                    'turbo': 1
                  },
                  'percentages': {
                      'dekon': 20
                  },
                  'patients': {
                      'min': 0,
                      'max': 1,
                      'nef': 20,
                      'transport': 70,
                      'specialisation': 'Allgemeine Innere'
                    }
            },
            388: {
                'name': 'Feuer in Verwaltungsgebäude',
                'credits': 2500,
                'vehicles': {
                    'elw1': 1,
                    'lf': 5,
                    'dlk': 1,
                    'rw': 1
                  },
                  'patients': {
                      'min': 0,
                      'max': 1,
                      'nef': 20,
                      'transport': 10,
                      'specialisation': 'Allgemeine Innere'
                    }
            }
    }
}

lssm.getVehicleNameById = function (vehicleId) {
    if (vehicleId in lssm.carsById) {
        return lssm.carsById[vehicleId][0];
    } else {
        return null;
    }
}

lssm.car_list = function (building) {
    // liefert die Fahrzeuge einer Wache zurück
    var data = [];
    $('#vehicle_building_' + building).find('li').each(function (index, element) {
        data.push({
            "id": $(element).attr('vehicle_id'),
            "name": $(element).find('a').html(),
            "type": $(element).find('a').attr('vehicle_type_id'),
            "fms": $(element).find(".building_list_fms").html(),
            "classes": $(element).find(".building_list_fms").attr('class')
        });
    });
    return data;
}
lssm.car_list_all = function () {
    var data = [];
    $("[id^='vehicle_building']").find('li').each(function (index, element) {
        data.push({
            "id": $(element).attr('vehicle_id'),
            "name": $(element).find('a').html(),
            "type": $(element).find('a').attr('vehicle_type_id'),
            "fms": $(element).find(".building_list_fms").html(),
            "classes": $(element).find(".building_list_fms").attr('class')
        });
    });
    return data;
};
// Formatiert Fahrzeugliste um (mit FMS)
lssm.car_list_printable = function (list) {
    var data = "";
    $.each(list, function (key, car) {
        data += "<div style=\"margin-top: 3px;\"><span class=\"" + car.classes + "\">" + car.fms + "</span> " + car.name +
            "</div>";
    });
    return data;
};

lssm.get_buildings = function () {
    var data = [],
        stationId, stationName, stationLat, stationLng, stationType, el, map;
    $('#building_list').find('.building_list_li').each(function (index, element) {
        el = $(element).find('.building_list_caption'),
            map = el.find('.map_position_mover'),
            stationId = el.find('.building_marker_image').attr('building_id'),
            stationName = map.html(),
            stationLat = map.attr('data-latitude'),
            stationLng = map.attr('data-longitude'),
            stationType = $(element).attr('building_type_id');

        data.push({
            'stationId': stationId,
            'stationName': stationName,
            'stationLat': stationLat,
            'stationLng': stationLng,
            'stationType': parseInt(stationType)
        });
    });
    return data;
};
// liefert ein Div zurück welches auf der Karte verschoben werden kann und seine Position speichert und beim laden wieder annimmt.
lssm.newDragableDivOnMap = function (id, classe, pos) {
    function changeX(p, m) {
        if (p <= -m + info._div.offsetWidth + 20)
            return -m + info._div.offsetWidth + 20;
        else if (p >= 0)
            return 0
        else
            return p;
    }

    function changeY(p, m) {
        if (p >= m - info._div.offsetHeight)
            return (m - info._div.offsetHeight - 10);
        else if (p <= 0)
            return 0;
        else
            return p
    }
    var info = L.control();

    info.onAdd = function () {
        this._div = L.DomUtil.create('div', classe || "");
        this._div.id = id + "Div";
        var m = map.getSize();
        L.DomUtil.setPosition(info._div, new L.Point(changeX(pos.x, m.x), changeY(pos.y, m.y)));
        this.update();
        return this._div;
    };

    info.update = function () {
        var m = map.getSize();
        var p = L.DomUtil.getPosition(info._div);
        var pos = {
            x: changeX(p.x, m.x),
            y: changeY(p.y, m.y)
        };
        lssm.settings.set(lssm.config.prefix + "_" + id + "Position", pos);
        L.DomUtil.setPosition(info._div, new L.Point(pos.x, pos.y));
    };

    info.addTo(map);
    var t = new L.Draggable(info._div);
    t.enable();
    t.on('drag', info.update);
    return $(info._div);
};

// Add custom String format function
if (!String.format) {
    //	console.log("execute");
    String.format = function (format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };
}
lssm.notification = function (msg, type, duration) {
    type = (typeof type === 'undefined') ? 'alert-success' : type;
    duration = (typeof duration === 'undefined') ? 2000 : duration;
    $("#content")
        .before(
            '<div class="alert alert-dismissable ' + type + '" id="lssm_notification" ' +
            'style="text-align:center;width:90%"><a href="#" class="close" data-dismiss="alert" ' +
            'aria-label="close">&times;</a>' + msg +
            '</div>');
    setTimeout(function () {
        $("#lssm_notification").slideUp("slow", function () {
            $("#lssm_notification").remove();
        });
    }, duration);
};

/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */
/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */
-!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery) }(function (a) {
    var b = function () {
        if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd; var b; return function () { if (!b || !b.requirejs) { b ? c = b : b = {}; var a, c, d; !function (b) { function e(a, b) { return u.call(a, b) } function f(a, b) { var c, d, e, f, g, h, i, j, k, l, m, n = b && b.split("/"), o = s.map, p = o && o["*"] || {}; if (a && "." === a.charAt(0)) if (b) { for (a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1)if (m = a[k], "." === m) a.splice(k, 1), k -= 1; else if (".." === m) { if (1 === k && (".." === a[2] || ".." === a[0])) break; k > 0 && (a.splice(k - 1, 2), k -= 2) } a = a.join("/") } else 0 === a.indexOf("./") && (a = a.substring(2)); if ((n || p) && o) { for (c = a.split("/"), k = c.length; k > 0; k -= 1) { if (d = c.slice(0, k).join("/"), n) for (l = n.length; l > 0; l -= 1)if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) { f = e, h = k; break } if (f) break; !i && p && p[d] && (i = p[d], j = k) } !f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/")) } return a } function g(a, c) { return function () { var d = v.call(arguments, 0); return "string" != typeof d[0] && 1 === d.length && d.push(null), n.apply(b, d.concat([a, c])) } } function h(a) { return function (b) { return f(b, a) } } function i(a) { return function (b) { q[a] = b } } function j(a) { if (e(r, a)) { var c = r[a]; delete r[a], t[a] = !0, m.apply(b, c) } if (!e(q, a) && !e(t, a)) throw new Error("No " + a); return q[a] } function k(a) { var b, c = a ? a.indexOf("!") : -1; return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a] } function l(a) { return function () { return s && s.config && s.config[a] || {} } } var m, n, o, p, q = {}, r = {}, s = {}, t = {}, u = Object.prototype.hasOwnProperty, v = [].slice, w = /\.js$/; o = function (a, b) { var c, d = k(a), e = d[0]; return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), { f: e ? e + "!" + a : a, n: a, pr: e, p: c } }, p = { require: function (a) { return g(a) }, exports: function (a) { var b = q[a]; return "undefined" != typeof b ? b : q[a] = {} }, module: function (a) { return { id: a, uri: "", exports: q[a], config: l(a) } } }, m = function (a, c, d, f) { var h, k, l, m, n, s, u = [], v = typeof d; if (f = f || a, "undefined" === v || "function" === v) { for (c = !c.length && d.length ? ["require", "exports", "module"] : c, n = 0; n < c.length; n += 1)if (m = o(c[n], f), k = m.f, "require" === k) u[n] = p.require(a); else if ("exports" === k) u[n] = p.exports(a), s = !0; else if ("module" === k) h = u[n] = p.module(a); else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k); else { if (!m.p) throw new Error(a + " missing " + k); m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k] } l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l)) } else a && (q[a] = d) }, a = c = n = function (a, c, d, e, f) { if ("string" == typeof a) return p[a] ? p[a](c) : j(o(a, c).f); if (!a.splice) { if (s = a, s.deps && n(s.deps, s.callback), !c) return; c.splice ? (a = c, c = d, d = null) : a = b } return c = c || function () { }, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function () { m(b, a, c, d) }, 4), n }, n.config = function (a) { return n(a) }, a._defined = q, d = function (a, b, c) { if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name"); b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c]) }, d.amd = { jQuery: !0 } }(), b.requirejs = a, b.require = c, b.define = d } }(), b.define("almond", function () { }), b.define("jquery", [], function () { var b = a || $; return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b }), b.define("select2/utils", ["jquery"], function (a) { function b(a) { var b = a.prototype, c = []; for (var d in b) { var e = b[d]; "function" == typeof e && "constructor" !== d && c.push(d) } return c } var c = {}; c.Extend = function (a, b) { function c() { this.constructor = a } var d = {}.hasOwnProperty; for (var e in b) d.call(b, e) && (a[e] = b[e]); return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a }, c.Decorate = function (a, c) { function d() { var b = Array.prototype.unshift, d = c.prototype.constructor.length, e = a.prototype.constructor; d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments) } function e() { this.constructor = d } var f = b(c), g = b(a); c.displayName = a.displayName, d.prototype = new e; for (var h = 0; h < g.length; h++) { var i = g[h]; d.prototype[i] = a.prototype[i] } for (var j = (function (a) { var b = function () { }; a in d.prototype && (b = d.prototype[a]); var e = c.prototype[a]; return function () { var a = Array.prototype.unshift; return a.call(arguments, b), e.apply(this, arguments) } }), k = 0; k < f.length; k++) { var l = f[k]; d.prototype[l] = j(l) } return d }; var d = function () { this.listeners = {} }; return d.prototype.on = function (a, b) { this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b] }, d.prototype.trigger = function (a) { var b = Array.prototype.slice, c = b.call(arguments, 1); this.listeners = this.listeners || {}, null == c && (c = []), 0 === c.length && c.push({}), c[0]._type = a, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments) }, d.prototype.invoke = function (a, b) { for (var c = 0, d = a.length; d > c; c++)a[c].apply(this, b) }, c.Observable = d, c.generateChars = function (a) { for (var b = "", c = 0; a > c; c++) { var d = Math.floor(36 * Math.random()); b += d.toString(36) } return b }, c.bind = function (a, b) { return function () { a.apply(b, arguments) } }, c._convertData = function (a) { for (var b in a) { var c = b.split("-"), d = a; if (1 !== c.length) { for (var e = 0; e < c.length; e++) { var f = c[e]; f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f] } delete a[b] } } return a }, c.hasScroll = function (b, c) { var d = a(c), e = c.style.overflowX, f = c.style.overflowY; return e !== f || "hidden" !== f && "visible" !== f ? "scroll" === e || "scroll" === f ? !0 : d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth : !1 }, c.escapeMarkup = function (a) { var b = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" }; return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function (a) { return b[a] }) }, c.appendMany = function (b, c) { if ("1.7" === a.fn.jquery.substr(0, 3)) { var d = a(); a.map(c, function (a) { d = d.add(a) }), c = d } b.append(c) }, c }), b.define("select2/results", ["jquery", "./utils"], function (a, b) { function c(a, b, d) { this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this) } return b.Extend(c, b.Observable), c.prototype.render = function () { var b = a('<ul class="select2-results__options" role="tree"></ul>'); return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b }, c.prototype.clear = function () { this.$results.empty() }, c.prototype.displayMessage = function (b) { var c = this.options.get("escapeMarkup"); this.clear(), this.hideLoading(); var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'), e = this.options.get("translations").get(b.message); d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d) }, c.prototype.hideMessages = function () { this.$results.find(".select2-results__message").remove() }, c.prototype.append = function (a) { this.hideLoading(); var b = []; if (null == a.results || 0 === a.results.length) return void (0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" })); a.results = this.sort(a.results); for (var c = 0; c < a.results.length; c++) { var d = a.results[c], e = this.option(d); b.push(e) } this.$results.append(b) }, c.prototype.position = function (a, b) { var c = b.find(".select2-results"); c.append(a) }, c.prototype.sort = function (a) { var b = this.options.get("sorter"); return b(a) }, c.prototype.highlightFirstItem = function () { var a = this.$results.find(".select2-results__option[aria-selected]"), b = a.filter("[aria-selected=true]"); b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"), this.ensureHighlightVisible() }, c.prototype.setClasses = function () { var b = this; this.data.current(function (c) { var d = a.map(c, function (a) { return a.id.toString() }), e = b.$results.find(".select2-results__option[aria-selected]"); e.each(function () { var b = a(this), c = a.data(this, "data"), e = "" + c.id; null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false") }) }) }, c.prototype.showLoading = function (a) { this.hideLoading(); var b = this.options.get("translations").get("searching"), c = { disabled: !0, loading: !0, text: b(a) }, d = this.option(c); d.className += " loading-results", this.$results.prepend(d) }, c.prototype.hideLoading = function () { this.$results.find(".loading-results").remove() }, c.prototype.option = function (b) { var c = document.createElement("li"); c.className = "select2-results__option"; var d = { role: "treeitem", "aria-selected": "false" }; b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]); for (var e in d) { var f = d[e]; c.setAttribute(e, f) } if (b.children) { var g = a(c), h = document.createElement("strong"); h.className = "select2-results__group"; a(h); this.template(b, h); for (var i = [], j = 0; j < b.children.length; j++) { var k = b.children[j], l = this.option(k); i.push(l) } var m = a("<ul></ul>", { "class": "select2-results__options select2-results__options--nested" }); m.append(i), g.append(h), g.append(m) } else this.template(b, c); return a.data(c, "data", b), c }, c.prototype.bind = function (b, c) { var d = this, e = b.id + "-results"; this.$results.attr("id", e), b.on("results:all", function (a) { d.clear(), d.append(a.data), b.isOpen() && (d.setClasses(), d.highlightFirstItem()) }), b.on("results:append", function (a) { d.append(a.data), b.isOpen() && d.setClasses() }), b.on("query", function (a) { d.hideMessages(), d.showLoading(a) }), b.on("select", function () { b.isOpen() && (d.setClasses(), d.highlightFirstItem()) }), b.on("unselect", function () { b.isOpen() && (d.setClasses(), d.highlightFirstItem()) }), b.on("open", function () { d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible() }), b.on("close", function () { d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant") }), b.on("results:toggle", function () { var a = d.getHighlightedResults(); 0 !== a.length && a.trigger("mouseup") }), b.on("results:select", function () { var a = d.getHighlightedResults(); if (0 !== a.length) { var b = a.data("data"); "true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", { data: b }) } }), b.on("results:previous", function () { var a = d.getHighlightedResults(), b = d.$results.find("[aria-selected]"), c = b.index(a); if (0 !== c) { var e = c - 1; 0 === a.length && (e = 0); var f = b.eq(e); f.trigger("mouseenter"); var g = d.$results.offset().top, h = f.offset().top, i = d.$results.scrollTop() + (h - g); 0 === e ? d.$results.scrollTop(0) : 0 > h - g && d.$results.scrollTop(i) } }), b.on("results:next", function () { var a = d.getHighlightedResults(), b = d.$results.find("[aria-selected]"), c = b.index(a), e = c + 1; if (!(e >= b.length)) { var f = b.eq(e); f.trigger("mouseenter"); var g = d.$results.offset().top + d.$results.outerHeight(!1), h = f.offset().top + f.outerHeight(!1), i = d.$results.scrollTop() + h - g; 0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i) } }), b.on("results:focus", function (a) { a.element.addClass("select2-results__option--highlighted") }), b.on("results:message", function (a) { d.displayMessage(a) }), a.fn.mousewheel && this.$results.on("mousewheel", function (a) { var b = d.$results.scrollTop(), c = d.$results.get(0).scrollHeight - b + a.deltaY, e = a.deltaY > 0 && b - a.deltaY <= 0, f = a.deltaY < 0 && c <= d.$results.height(); e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation()) }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (b) { var c = a(this), e = c.data("data"); return "true" === c.attr("aria-selected") ? void (d.options.get("multiple") ? d.trigger("unselect", { originalEvent: b, data: e }) : d.trigger("close", {})) : void d.trigger("select", { originalEvent: b, data: e }) }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (b) { var c = a(this).data("data"); d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", { data: c, element: a(this) }) }) }, c.prototype.getHighlightedResults = function () { var a = this.$results.find(".select2-results__option--highlighted"); return a }, c.prototype.destroy = function () { this.$results.remove() }, c.prototype.ensureHighlightVisible = function () { var a = this.getHighlightedResults(); if (0 !== a.length) { var b = this.$results.find("[aria-selected]"), c = b.index(a), d = this.$results.offset().top, e = a.offset().top, f = this.$results.scrollTop() + (e - d), g = e - d; f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f) } }, c.prototype.template = function (b, c) { var d = this.options.get("templateResult"), e = this.options.get("escapeMarkup"), f = d(b, c); null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f) }, c }), b.define("select2/keys", [], function () { var a = { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 }; return a }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (a, b, c) { function d(a, b) { this.$element = a, this.options = b, d.__super__.constructor.call(this) } return b.Extend(d, b.Observable), d.prototype.render = function () { var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'); return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b }, d.prototype.bind = function (a, b) { var d = this, e = (a.id + "-container", a.id + "-results"); this.container = a, this.$selection.on("focus", function (a) { d.trigger("focus", a) }), this.$selection.on("blur", function (a) { d._handleBlur(a) }), this.$selection.on("keydown", function (a) { d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault() }), a.on("results:focus", function (a) { d.$selection.attr("aria-activedescendant", a.data._resultId) }), a.on("selection:update", function (a) { d.update(a.data) }), a.on("open", function () { d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a) }), a.on("close", function () { d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a) }), a.on("enable", function () { d.$selection.attr("tabindex", d._tabindex) }), a.on("disable", function () { d.$selection.attr("tabindex", "-1") }) }, d.prototype._handleBlur = function (b) { var c = this; window.setTimeout(function () { document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b) }, 1) }, d.prototype._attachCloseHandler = function (b) { a(document.body).on("mousedown.select2." + b.id, function (b) { var c = a(b.target), d = c.closest(".select2"), e = a(".select2.select2-container--open"); e.each(function () { var b = a(this); if (this != d[0]) { var c = b.data("element"); c.select2("close") } }) }) }, d.prototype._detachCloseHandler = function (b) { a(document.body).off("mousedown.select2." + b.id) }, d.prototype.position = function (a, b) { var c = b.find(".selection"); c.append(a) }, d.prototype.destroy = function () { this._detachCloseHandler(this.container) }, d.prototype.update = function (a) { throw new Error("The `update` method must be defined in child classes.") }, d }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (a, b, c, d) { function e() { e.__super__.constructor.apply(this, arguments) } return c.Extend(e, b), e.prototype.render = function () { var a = e.__super__.render.call(this); return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a }, e.prototype.bind = function (a, b) { var c = this; e.__super__.bind.apply(this, arguments); var d = a.id + "-container"; this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function (a) { 1 === a.which && c.trigger("toggle", { originalEvent: a }) }), this.$selection.on("focus", function (a) { }), this.$selection.on("blur", function (a) { }), a.on("focus", function (b) { a.isOpen() || c.$selection.focus() }), a.on("selection:update", function (a) { c.update(a.data) }) }, e.prototype.clear = function () { this.$selection.find(".select2-selection__rendered").empty() }, e.prototype.display = function (a, b) { var c = this.options.get("templateSelection"), d = this.options.get("escapeMarkup"); return d(c(a, b)) }, e.prototype.selectionContainer = function () { return a("<span></span>") }, e.prototype.update = function (a) { if (0 === a.length) return void this.clear(); var b = a[0], c = this.$selection.find(".select2-selection__rendered"), d = this.display(b, c); c.empty().append(d), c.prop("title", b.title || b.text) }, e }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (a, b, c) { function d(a, b) { d.__super__.constructor.apply(this, arguments) } return c.Extend(d, b), d.prototype.render = function () { var a = d.__super__.render.call(this); return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a }, d.prototype.bind = function (b, c) { var e = this; d.__super__.bind.apply(this, arguments), this.$selection.on("click", function (a) { e.trigger("toggle", { originalEvent: a }) }), this.$selection.on("click", ".select2-selection__choice__remove", function (b) { if (!e.options.get("disabled")) { var c = a(this), d = c.parent(), f = d.data("data"); e.trigger("unselect", { originalEvent: b, data: f }) } }) }, d.prototype.clear = function () { this.$selection.find(".select2-selection__rendered").empty() }, d.prototype.display = function (a, b) { var c = this.options.get("templateSelection"), d = this.options.get("escapeMarkup"); return d(c(a, b)) }, d.prototype.selectionContainer = function () { var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>'); return b }, d.prototype.update = function (a) { if (this.clear(), 0 !== a.length) { for (var b = [], d = 0; d < a.length; d++) { var e = a[d], f = this.selectionContainer(), g = this.display(e, f); f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f) } var h = this.$selection.find(".select2-selection__rendered"); c.appendMany(h, b) } }, d }), b.define("select2/selection/placeholder", ["../utils"], function (a) { function b(a, b, c) { this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c) } return b.prototype.normalizePlaceholder = function (a, b) { return "string" == typeof b && (b = { id: "", text: b }), b }, b.prototype.createPlaceholder = function (a, b) { var c = this.selectionContainer(); return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c }, b.prototype.update = function (a, b) { var c = 1 == b.length && b[0].id != this.placeholder.id, d = b.length > 1; if (d || c) return a.call(this, b); this.clear(); var e = this.createPlaceholder(this.placeholder); this.$selection.find(".select2-selection__rendered").append(e) }, b }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function (a, b) { function c() { } return c.prototype.bind = function (a, b, c) { var d = this; a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (a) { d._handleClear(a) }), b.on("keypress", function (a) { d._handleKeyboardClear(a, b) }) }, c.prototype._handleClear = function (a, b) { if (!this.options.get("disabled")) { var c = this.$selection.find(".select2-selection__clear"); if (0 !== c.length) { b.stopPropagation(); for (var d = c.data("data"), e = 0; e < d.length; e++) { var f = { data: d[e] }; if (this.trigger("unselect", f), f.prevented) return } this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {}) } } }, c.prototype._handleKeyboardClear = function (a, c, d) { d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c) }, c.prototype.update = function (b, c) { if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) { var d = a('<span class="select2-selection__clear">&times;</span>'); d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d) } }, c }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (a, b, c) { function d(a, b, c) { a.call(this, b, c) } return d.prototype.render = function (b) { var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="text" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>'); this.$searchContainer = c, this.$search = c.find("input"); var d = b.call(this); return this._transferTabIndex(), d }, d.prototype.bind = function (a, b, d) { var e = this; a.call(this, b, d), b.on("open", function () { e.$search.trigger("focus") }), b.on("close", function () { e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus") }), b.on("enable", function () { e.$search.prop("disabled", !1), e._transferTabIndex() }), b.on("disable", function () { e.$search.prop("disabled", !0) }), b.on("focus", function (a) { e.$search.trigger("focus") }), b.on("results:focus", function (a) { e.$search.attr("aria-activedescendant", a.id) }), this.$selection.on("focusin", ".select2-search--inline", function (a) { e.trigger("focus", a) }), this.$selection.on("focusout", ".select2-search--inline", function (a) { e._handleBlur(a) }), this.$selection.on("keydown", ".select2-search--inline", function (a) { a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented(); var b = a.which; if (b === c.BACKSPACE && "" === e.$search.val()) { var d = e.$searchContainer.prev(".select2-selection__choice"); if (d.length > 0) { var f = d.data("data"); e.searchRemoveChoice(f), a.preventDefault() } } }); var f = document.documentMode, g = f && 11 >= f; this.$selection.on("input.searchcheck", ".select2-search--inline", function (a) { return g ? void e.$selection.off("input.search input.searchcheck") : void e.$selection.off("keyup.search") }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (a) { if (g && "input" === a.type) return void e.$selection.off("input.search input.searchcheck"); var b = a.which; b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a) }) }, d.prototype._transferTabIndex = function (a) { this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1") }, d.prototype.createPlaceholder = function (a, b) { this.$search.attr("placeholder", b.text) }, d.prototype.update = function (a, b) { var c = this.$search[0] == document.activeElement; this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus() }, d.prototype.handleSearch = function () { if (this.resizeSearch(), !this._keyUpPrevented) { var a = this.$search.val(); this.trigger("query", { term: a }) } this._keyUpPrevented = !1 }, d.prototype.searchRemoveChoice = function (a, b) { this.trigger("unselect", { data: b }), this.$search.val(b.text), this.handleSearch() }, d.prototype.resizeSearch = function () { this.$search.css("width", "25px"); var a = ""; if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth(); else { var b = this.$search.val().length + 1; a = .75 * b + "em" } this.$search.css("width", a) }, d }), b.define("select2/selection/eventRelay", ["jquery"], function (a) { function b() { } return b.prototype.bind = function (b, c, d) { var e = this, f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"], g = ["opening", "closing", "selecting", "unselecting"]; b.call(this, c, d), c.on("*", function (b, c) { if (-1 !== a.inArray(b, f)) { c = c || {}; var d = a.Event("select2:" + b, { params: c }); e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented()) } }) }, b }), b.define("select2/translation", ["jquery", "require"], function (a, b) { function c(a) { this.dict = a || {} } return c.prototype.all = function () { return this.dict }, c.prototype.get = function (a) { return this.dict[a] }, c.prototype.extend = function (b) { this.dict = a.extend({}, b.all(), this.dict) }, c._cache = {}, c.loadPath = function (a) { if (!(a in c._cache)) { var d = b(a); c._cache[a] = d } return new c(c._cache[a]) }, c }), b.define("select2/diacritics", [], function () { var a = { "â’¶": "A", "ï¼¡": "A", "Ã€": "A", "Ã": "A", "Ã‚": "A", "áº¦": "A", "áº¤": "A", "áºª": "A", "áº¨": "A", "Ãƒ": "A", "Ä€": "A", "Ä‚": "A", "áº°": "A", "áº®": "A", "áº´": "A", "áº²": "A", "È¦": "A", "Ç ": "A", "Ã„": "A", "Çž": "A", "áº¢": "A", "Ã…": "A", "Çº": "A", "Ç": "A", "È€": "A", "È‚": "A", "áº ": "A", "áº¬": "A", "áº¶": "A", "á¸€": "A", "Ä„": "A", "Èº": "A", "â±¯": "A", "êœ²": "AA", "Ã†": "AE", "Ç¼": "AE", "Ç¢": "AE", "êœ´": "AO", "êœ¶": "AU", "êœ¸": "AV", "êœº": "AV", "êœ¼": "AY", "â’·": "B", "ï¼¢": "B", "á¸‚": "B", "á¸„": "B", "á¸†": "B", "Éƒ": "B", "Æ‚": "B", "Æ": "B", "â’¸": "C", "ï¼£": "C", "Ä†": "C", "Äˆ": "C", "ÄŠ": "C", "ÄŒ": "C", "Ã‡": "C", "á¸ˆ": "C", "Æ‡": "C", "È»": "C", "êœ¾": "C", "â’¹": "D", "ï¼¤": "D", "á¸Š": "D", "ÄŽ": "D", "á¸Œ": "D", "á¸": "D", "á¸’": "D", "á¸Ž": "D", "Ä": "D", "Æ‹": "D", "ÆŠ": "D", "Æ‰": "D", "ê¹": "D", "Ç±": "DZ", "Ç„": "DZ", "Ç²": "Dz", "Ç…": "Dz", "â’º": "E", "ï¼¥": "E", "Ãˆ": "E", "Ã‰": "E", "ÃŠ": "E", "á»€": "E", "áº¾": "E", "á»„": "E", "á»‚": "E", "áº¼": "E", "Ä’": "E", "á¸”": "E", "á¸–": "E", "Ä”": "E", "Ä–": "E", "Ã‹": "E", "áºº": "E", "Äš": "E", "È„": "E", "È†": "E", "áº¸": "E", "á»†": "E", "È¨": "E", "á¸œ": "E", "Ä˜": "E", "á¸˜": "E", "á¸š": "E", "Æ": "E", "ÆŽ": "E", "â’»": "F", "ï¼¦": "F", "á¸ž": "F", "Æ‘": "F", "ê»": "F", "â’¼": "G", "ï¼§": "G", "Ç´": "G", "Äœ": "G", "á¸ ": "G", "Äž": "G", "Ä ": "G", "Ç¦": "G", "Ä¢": "G", "Ç¤": "G", "Æ“": "G", "êž ": "G", "ê½": "G", "ê¾": "G", "â’½": "H", "ï¼¨": "H", "Ä¤": "H", "á¸¢": "H", "á¸¦": "H", "Èž": "H", "á¸¤": "H", "á¸¨": "H", "á¸ª": "H", "Ä¦": "H", "â±§": "H", "â±µ": "H", "êž": "H", "â’¾": "I", "ï¼©": "I", "ÃŒ": "I", "Ã": "I", "ÃŽ": "I", "Ä¨": "I", "Äª": "I", "Ä¬": "I", "Ä°": "I", "Ã": "I", "á¸®": "I", "á»ˆ": "I", "Ç": "I", "Èˆ": "I", "ÈŠ": "I", "á»Š": "I", "Ä®": "I", "á¸¬": "I", "Æ—": "I", "â’¿": "J", "ï¼ª": "J", "Ä´": "J", "Éˆ": "J", "â“€": "K", "ï¼«": "K", "á¸°": "K", "Ç¨": "K", "á¸²": "K", "Ä¶": "K", "á¸´": "K", "Æ˜": "K", "â±©": "K", "ê€": "K", "ê‚": "K", "ê„": "K", "êž¢": "K", "â“": "L", "ï¼¬": "L", "Ä¿": "L", "Ä¹": "L", "Ä½": "L", "á¸¶": "L", "á¸¸": "L", "Ä»": "L", "á¸¼": "L", "á¸º": "L", "Å": "L", "È½": "L", "â±¢": "L", "â± ": "L", "êˆ": "L", "ê†": "L", "êž€": "L", "Ç‡": "LJ", "Çˆ": "Lj", "â“‚": "M", "ï¼­": "M", "á¸¾": "M", "á¹€": "M", "á¹‚": "M", "â±®": "M", "Æœ": "M", "â“ƒ": "N", "ï¼®": "N", "Ç¸": "N", "Åƒ": "N", "Ã‘": "N", "á¹„": "N", "Å‡": "N", "á¹†": "N", "Å…": "N", "á¹Š": "N", "á¹ˆ": "N", "È ": "N", "Æ": "N", "êž": "N", "êž¤": "N", "ÇŠ": "NJ", "Ç‹": "Nj", "â“„": "O", "ï¼¯": "O", "Ã’": "O", "Ã“": "O", "Ã”": "O", "á»’": "O", "á»": "O", "á»–": "O", "á»”": "O", "Ã•": "O", "á¹Œ": "O", "È¬": "O", "á¹Ž": "O", "ÅŒ": "O", "á¹": "O", "á¹’": "O", "ÅŽ": "O", "È®": "O", "È°": "O", "Ã–": "O", "Èª": "O", "á»Ž": "O", "Å": "O", "Ç‘": "O", "ÈŒ": "O", "ÈŽ": "O", "Æ ": "O", "á»œ": "O", "á»š": "O", "á» ": "O", "á»ž": "O", "á»¢": "O", "á»Œ": "O", "á»˜": "O", "Çª": "O", "Ç¬": "O", "Ã˜": "O", "Ç¾": "O", "Æ†": "O", "ÆŸ": "O", "êŠ": "O", "êŒ": "O", "Æ¢": "OI", "êŽ": "OO", "È¢": "OU", "â“…": "P", "ï¼°": "P", "á¹”": "P", "á¹–": "P", "Æ¤": "P", "â±£": "P", "ê": "P", "ê’": "P", "ê”": "P", "â“†": "Q", "ï¼±": "Q", "ê–": "Q", "ê˜": "Q", "ÉŠ": "Q", "â“‡": "R", "ï¼²": "R", "Å”": "R", "á¹˜": "R", "Å˜": "R", "È": "R", "È’": "R", "á¹š": "R", "á¹œ": "R", "Å–": "R", "á¹ž": "R", "ÉŒ": "R", "â±¤": "R", "êš": "R", "êž¦": "R", "êž‚": "R", "â“ˆ": "S", "ï¼³": "S", "áºž": "S", "Åš": "S", "á¹¤": "S", "Åœ": "S", "á¹ ": "S", "Å ": "S", "á¹¦": "S", "á¹¢": "S", "á¹¨": "S", "È˜": "S", "Åž": "S", "â±¾": "S", "êž¨": "S", "êž„": "S", "â“‰": "T", "ï¼´": "T", "á¹ª": "T", "Å¤": "T", "á¹¬": "T", "Èš": "T", "Å¢": "T", "á¹°": "T", "á¹®": "T", "Å¦": "T", "Æ¬": "T", "Æ®": "T", "È¾": "T", "êž†": "T", "êœ¨": "TZ", "â“Š": "U", "ï¼µ": "U", "Ã™": "U", "Ãš": "U", "Ã›": "U", "Å¨": "U", "á¹¸": "U", "Åª": "U", "á¹º": "U", "Å¬": "U", "Ãœ": "U", "Ç›": "U", "Ç—": "U", "Ç•": "U", "Ç™": "U", "á»¦": "U", "Å®": "U", "Å°": "U", "Ç“": "U", "È”": "U", "È–": "U", "Æ¯": "U", "á»ª": "U", "á»¨": "U", "á»®": "U", "á»¬": "U", "á»°": "U", "á»¤": "U", "á¹²": "U", "Å²": "U", "á¹¶": "U", "á¹´": "U", "É„": "U", "â“‹": "V", "ï¼¶": "V", "á¹¼": "V", "á¹¾": "V", "Æ²": "V", "êž": "V", "É…": "V", "ê ": "VY", "â“Œ": "W", "ï¼·": "W", "áº€": "W", "áº‚": "W", "Å´": "W", "áº†": "W", "áº„": "W", "áºˆ": "W", "â±²": "W", "â“": "X", "ï¼¸": "X", "áºŠ": "X", "áºŒ": "X", "â“Ž": "Y", "ï¼¹": "Y", "á»²": "Y", "Ã": "Y", "Å¶": "Y", "á»¸": "Y", "È²": "Y", "áºŽ": "Y", "Å¸": "Y", "á»¶": "Y", "á»´": "Y", "Æ³": "Y", "ÉŽ": "Y", "á»¾": "Y", "â“": "Z", "ï¼º": "Z", "Å¹": "Z", "áº": "Z", "Å»": "Z", "Å½": "Z", "áº’": "Z", "áº”": "Z", "Æµ": "Z", "È¤": "Z", "â±¿": "Z", "â±«": "Z", "ê¢": "Z", "â“": "a", "ï½": "a", "áºš": "a", "Ã ": "a", "Ã¡": "a", "Ã¢": "a", "áº§": "a", "áº¥": "a", "áº«": "a", "áº©": "a", "Ã£": "a", "Ä": "a", "Äƒ": "a", "áº±": "a", "áº¯": "a", "áºµ": "a", "áº³": "a", "È§": "a", "Ç¡": "a", "ä": "a", "ÇŸ": "a", "áº£": "a", "Ã¥": "a", "Ç»": "a", "ÇŽ": "a", "È": "a", "Èƒ": "a", "áº¡": "a", "áº­": "a", "áº·": "a", "á¸": "a", "Ä…": "a", "â±¥": "a", "É": "a", "êœ³": "aa", "Ã¦": "ae", "Ç½": "ae", "Ç£": "ae", "êœµ": "ao", "êœ·": "au", "êœ¹": "av", "êœ»": "av", "êœ½": "ay", "â“‘": "b", "ï½‚": "b", "á¸ƒ": "b", "á¸…": "b", "á¸‡": "b", "Æ€": "b", "Æƒ": "b", "É“": "b", "â“’": "c", "ï½ƒ": "c", "Ä‡": "c", "Ä‰": "c", "Ä‹": "c", "Ä": "c", "Ã§": "c", "á¸‰": "c", "Æˆ": "c", "È¼": "c", "êœ¿": "c", "â†„": "c", "â““": "d", "ï½„": "d", "á¸‹": "d", "Ä": "d", "á¸": "d", "á¸‘": "d", "á¸“": "d", "á¸": "d", "Ä‘": "d", "ÆŒ": "d", "É–": "d", "É—": "d", "êº": "d", "Ç³": "dz", "Ç†": "dz", "â“”": "e", "ï½…": "e", "Ã¨": "e", "Ã©": "e", "Ãª": "e", "á»": "e", "áº¿": "e", "á»…": "e", "á»ƒ": "e", "áº½": "e", "Ä“": "e", "á¸•": "e", "á¸—": "e", "Ä•": "e", "Ä—": "e", "Ã«": "e", "áº»": "e", "Ä›": "e", "È…": "e", "È‡": "e", "áº¹": "e", "á»‡": "e", "È©": "e", "á¸": "e", "Ä™": "e", "á¸™": "e", "á¸›": "e", "É‡": "e", "É›": "e", "Ç": "e", "â“•": "f", "ï½†": "f", "á¸Ÿ": "f", "Æ’": "f", "ê¼": "f", "â“–": "g", "ï½‡": "g", "Çµ": "g", "Ä": "g", "á¸¡": "g", "ÄŸ": "g", "Ä¡": "g", "Ç§": "g", "Ä£": "g", "Ç¥": "g", "É ": "g", "êž¡": "g", "áµ¹": "g", "ê¿": "g", "â“—": "h", "ï½ˆ": "h", "Ä¥": "h", "á¸£": "h", "á¸§": "h", "ÈŸ": "h", "á¸¥": "h", "á¸©": "h", "á¸«": "h", "áº–": "h", "Ä§": "h", "â±¨": "h", "â±¶": "h", "É¥": "h", "Æ•": "hv", "â“˜": "i", "ï½‰": "i", "Ã¬": "i", "Ã­": "i", "Ã®": "i", "Ä©": "i", "Ä«": "i", "Ä­": "i", "Ã¯": "i", "á¸¯": "i", "á»‰": "i", "Ç": "i", "È‰": "i", "È‹": "i", "á»‹": "i", "Ä¯": "i", "á¸­": "i", "É¨": "i", "Ä±": "i", "â“™": "j", "ï½Š": "j", "Äµ": "j", "Ç°": "j", "É‰": "j", "â“š": "k", "ï½‹": "k", "á¸±": "k", "Ç©": "k", "á¸³": "k", "Ä·": "k", "á¸µ": "k", "Æ™": "k", "â±ª": "k", "ê": "k", "êƒ": "k", "ê…": "k", "êž£": "k", "â“›": "l", "ï½Œ": "l", "Å€": "l", "Äº": "l", "Ä¾": "l", "á¸·": "l", "á¸¹": "l", "Ä¼": "l", "á¸½": "l", "á¸»": "l", "Å¿": "l", "Å‚": "l", "Æš": "l", "É«": "l", "â±¡": "l", "ê‰": "l", "êž": "l", "ê‡": "l", "Ç‰": "lj", "â“œ": "m", "ï½": "m", "á¸¿": "m", "á¹": "m", "á¹ƒ": "m", "É±": "m", "É¯": "m", "â“": "n", "ï½Ž": "n", "Ç¹": "n", "Å„": "n", "Ã±": "n", "á¹…": "n", "Åˆ": "n", "á¹‡": "n", "Å†": "n", "á¹‹": "n", "á¹‰": "n", "Æž": "n", "É²": "n", "Å‰": "n", "êž‘": "n", "êž¥": "n", "ÇŒ": "nj", "â“ž": "o", "ï½": "o", "Ã²": "o", "Ã³": "o", "Ã´": "o", "á»“": "o", "á»‘": "o", "á»—": "o", "á»•": "o", "Ãµ": "o", "á¹": "o", "È­": "o", "á¹": "o", "Å": "o", "á¹‘": "o", "á¹“": "o", "Å": "o", "È¯": "o", "È±": "o", "Ã¶": "o", "È«": "o", "á»": "o", "Å‘": "o", "Ç’": "o", "È": "o", "È": "o", "Æ¡": "o", "á»": "o", "á»›": "o", "á»¡": "o", "á»Ÿ": "o", "á»£": "o", "á»": "o", "á»™": "o", "Ç«": "o", "Ç­": "o", "Ã¸": "o", "Ç¿": "o", "É”": "o", "ê‹": "o", "ê": "o", "Éµ": "o", "Æ£": "oi", "È£": "ou", "ê": "oo", "â“Ÿ": "p", "ï½": "p", "á¹•": "p", "á¹—": "p", "Æ¥": "p", "áµ½": "p", "ê‘": "p", "ê“": "p", "ê•": "p", "â“ ": "q", "ï½‘": "q", "É‹": "q", "ê—": "q", "ê™": "q", "â“¡": "r", "ï½’": "r", "Å•": "r", "á¹™": "r", "Å™": "r", "È‘": "r", "È“": "r", "á¹›": "r", "á¹": "r", "Å—": "r", "á¹Ÿ": "r", "É": "r", "É½": "r", "ê›": "r", "êž§": "r", "êžƒ": "r", "â“¢": "s", "ï½“": "s", "ß": "s", "Å›": "s", "á¹¥": "s", "Å": "s", "á¹¡": "s", "Å¡": "s", "á¹§": "s", "á¹£": "s", "á¹©": "s", "È™": "s", "ÅŸ": "s", "È¿": "s", "êž©": "s", "êž…": "s", "áº›": "s", "â“£": "t", "ï½”": "t", "á¹«": "t", "áº—": "t", "Å¥": "t", "á¹­": "t", "È›": "t", "Å£": "t", "á¹±": "t", "á¹¯": "t", "Å§": "t", "Æ­": "t", "Êˆ": "t", "â±¦": "t", "êž‡": "t", "êœ©": "tz", "â“¤": "u", "ï½•": "u", "Ã¹": "u", "Ãº": "u", "Ã»": "u", "Å©": "u", "á¹¹": "u", "Å«": "u", "á¹»": "u", "Å­": "u", "ü": "u", "Çœ": "u", "Ç˜": "u", "Ç–": "u", "Çš": "u", "á»§": "u", "Å¯": "u", "Å±": "u", "Ç”": "u", "È•": "u", "È—": "u", "Æ°": "u", "á»«": "u", "á»©": "u", "á»¯": "u", "á»­": "u", "á»±": "u", "á»¥": "u", "á¹³": "u", "Å³": "u", "á¹·": "u", "á¹µ": "u", "Ê‰": "u", "â“¥": "v", "ï½–": "v", "á¹½": "v", "á¹¿": "v", "Ê‹": "v", "êŸ": "v", "ÊŒ": "v", "ê¡": "vy", "â“¦": "w", "ï½—": "w", "áº": "w", "áºƒ": "w", "Åµ": "w", "áº‡": "w", "áº…": "w", "áº˜": "w", "áº‰": "w", "â±³": "w", "â“§": "x", "ï½˜": "x", "áº‹": "x", "áº": "x", "â“¨": "y", "ï½™": "y", "á»³": "y", "Ã½": "y", "Å·": "y", "á»¹": "y", "È³": "y", "áº": "y", "Ã¿": "y", "á»·": "y", "áº™": "y", "á»µ": "y", "Æ´": "y", "É": "y", "á»¿": "y", "â“©": "z", "ï½š": "z", "Åº": "z", "áº‘": "z", "Å¼": "z", "Å¾": "z", "áº“": "z", "áº•": "z", "Æ¶": "z", "È¥": "z", "É€": "z", "â±¬": "z", "ê£": "z", "Î†": "Î‘", "Îˆ": "Î•", "Î‰": "Î—", "ÎŠ": "Î™", "Îª": "Î™", "ÎŒ": "ÎŸ", "ÎŽ": "Î¥", "Î«": "Î¥", "Î": "Î©", "Î¬": "Î±", "Î­": "Îµ", "Î®": "Î·", "Î¯": "Î¹", "ÏŠ": "Î¹", "Î": "Î¹", "ÏŒ": "Î¿", "Ï": "Ï…", "Ï‹": "Ï…", "Î°": "Ï…", "Ï‰": "Ï‰", "Ï‚": "Ïƒ" }; return a }), b.define("select2/data/base", ["../utils"], function (a) { function b(a, c) { b.__super__.constructor.call(this) } return a.Extend(b, a.Observable), b.prototype.current = function (a) { throw new Error("The `current` method must be defined in child classes.") }, b.prototype.query = function (a, b) { throw new Error("The `query` method must be defined in child classes.") }, b.prototype.bind = function (a, b) { }, b.prototype.destroy = function () { }, b.prototype.generateResultId = function (b, c) { var d = b.id + "-result-"; return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4) }, b }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function (a, b, c) {
            function d(a, b) { this.$element = a, this.options = b, d.__super__.constructor.call(this) } return b.Extend(d, a), d.prototype.current = function (a) { var b = [], d = this; this.$element.find(":selected").each(function () { var a = c(this), e = d.item(a); b.push(e) }), a(b) }, d.prototype.select = function (a) {
                var b = this; if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
                if (this.$element.prop("multiple")) this.current(function (d) { var e = []; a = [a], a.push.apply(a, d); for (var f = 0; f < a.length; f++) { var g = a[f].id; -1 === c.inArray(g, e) && e.push(g) } b.$element.val(e), b.$element.trigger("change") }); else { var d = a.id; this.$element.val(d), this.$element.trigger("change") }
            }, d.prototype.unselect = function (a) { var b = this; if (this.$element.prop("multiple")) return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (d) { for (var e = [], f = 0; f < d.length; f++) { var g = d[f].id; g !== a.id && -1 === c.inArray(g, e) && e.push(g) } b.$element.val(e), b.$element.trigger("change") }) }, d.prototype.bind = function (a, b) { var c = this; this.container = a, a.on("select", function (a) { c.select(a.data) }), a.on("unselect", function (a) { c.unselect(a.data) }) }, d.prototype.destroy = function () { this.$element.find("*").each(function () { c.removeData(this, "data") }) }, d.prototype.query = function (a, b) { var d = [], e = this, f = this.$element.children(); f.each(function () { var b = c(this); if (b.is("option") || b.is("optgroup")) { var f = e.item(b), g = e.matches(a, f); null !== g && d.push(g) } }), b({ results: d }) }, d.prototype.addOptions = function (a) { b.appendMany(this.$element, a) }, d.prototype.option = function (a) { var b; a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title); var d = c(b), e = this._normalizeItem(a); return e.element = b, c.data(b, "data", e), d }, d.prototype.item = function (a) { var b = {}; if (b = c.data(a[0], "data"), null != b) return b; if (a.is("option")) b = { id: a.val(), text: a.text(), disabled: a.prop("disabled"), selected: a.prop("selected"), title: a.prop("title") }; else if (a.is("optgroup")) { b = { text: a.prop("label"), children: [], title: a.prop("title") }; for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) { var g = c(d[f]), h = this.item(g); e.push(h) } b.children = e } return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b }, d.prototype._normalizeItem = function (a) { c.isPlainObject(a) || (a = { id: a, text: a }), a = c.extend({}, { text: "" }, a); var b = { selected: !1, disabled: !1 }; return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a) }, d.prototype.matches = function (a, b) { var c = this.options.get("matcher"); return c(a, b) }, d
        }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function (a, b, c) { function d(a, b) { var c = b.get("data") || []; d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c)) } return b.Extend(d, a), d.prototype.select = function (a) { var b = this.$element.find("option").filter(function (b, c) { return c.value == a.id.toString() }); 0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a) }, d.prototype.convertToOptions = function (a) { function d(a) { return function () { return c(this).val() == a.id } } for (var e = this, f = this.$element.find("option"), g = f.map(function () { return e.item(c(this)).id }).get(), h = [], i = 0; i < a.length; i++) { var j = this._normalizeItem(a[i]); if (c.inArray(j.id, g) >= 0) { var k = f.filter(d(j)), l = this.item(k), m = c.extend(!0, {}, j, l), n = this.option(m); k.replaceWith(n) } else { var o = this.option(j); if (j.children) { var p = this.convertToOptions(j.children); b.appendMany(o, p) } h.push(o) } } return h }, d }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (a, b, c) { function d(a, b) { this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b) } return b.Extend(d, a), d.prototype._applyDefaults = function (a) { var b = { data: function (a) { return c.extend({}, a, { q: a.term }) }, transport: function (a, b, d) { var e = c.ajax(a); return e.then(b), e.fail(d), e } }; return c.extend({}, b, a, !0) }, d.prototype.processResults = function (a) { return a }, d.prototype.query = function (a, b) { function d() { var d = f.transport(f, function (d) { var f = e.processResults(d, a); e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f) }, function () { d.status && "0" === d.status || e.trigger("results:message", { message: "errorLoading" }) }); e._request = d } var e = this; null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null); var f = c.extend({ type: "GET" }, this.ajaxOptions); "function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d() }, d }), b.define("select2/data/tags", ["jquery"], function (a) { function b(b, c, d) { var e = d.get("tags"), f = d.get("createTag"); void 0 !== f && (this.createTag = f); var g = d.get("insertTag"); if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e)) for (var h = 0; h < e.length; h++) { var i = e[h], j = this._normalizeItem(i), k = this.option(j); this.$element.append(k) } } return b.prototype.query = function (a, b, c) { function d(a, f) { for (var g = a.results, h = 0; h < g.length; h++) { var i = g[h], j = null != i.children && !d({ results: i.children }, !0), k = i.text === b.term; if (k || j) return f ? !1 : (a.data = g, void c(a)) } if (f) return !0; var l = e.createTag(b); if (null != l) { var m = e.option(l); m.attr("data-select2-tag", !0), e.addOptions([m]), e.insertTag(g, l) } a.results = g, c(a) } var e = this; return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d) }, b.prototype.createTag = function (b, c) { var d = a.trim(c.term); return "" === d ? null : { id: d, text: d } }, b.prototype.insertTag = function (a, b, c) { b.unshift(c) }, b.prototype._removeOldTags = function (b) { var c = (this._lastTag, this.$element.find("option[data-select2-tag]")); c.each(function () { this.selected || a(this).remove() }) }, b }), b.define("select2/data/tokenizer", ["jquery"], function (a) { function b(a, b, c) { var d = c.get("tokenizer"); void 0 !== d && (this.tokenizer = d), a.call(this, b, c) } return b.prototype.bind = function (a, b, c) { a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field") }, b.prototype.query = function (b, c, d) { function e(b) { var c = g._normalizeItem(b), d = g.$element.find("option").filter(function () { return a(this).val() === c.id }); if (!d.length) { var e = g.option(c); e.attr("data-select2-tag", !0), g._removeOldTags(), g.addOptions([e]) } f(c) } function f(a) { g.trigger("select", { data: a }) } var g = this; c.term = c.term || ""; var h = this.tokenizer(c, this.options, e); h.term !== c.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), c.term = h.term), b.call(this, c, d) }, b.prototype.tokenizer = function (b, c, d, e) { for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function (a) { return { id: a.term, text: a.term } }; h < g.length;) { var j = g[h]; if (-1 !== a.inArray(j, f)) { var k = g.substr(0, h), l = a.extend({}, c, { term: k }), m = i(l); null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++ } else h++ } return { term: g } }, b }), b.define("select2/data/minimumInputLength", [], function () { function a(a, b, c) { this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c) } return a.prototype.query = function (a, b, c) { return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: b.term, params: b } }) : void a.call(this, b, c) }, a }), b.define("select2/data/maximumInputLength", [], function () { function a(a, b, c) { this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c) } return a.prototype.query = function (a, b, c) { return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: b.term, params: b } }) : void a.call(this, b, c) }, a }), b.define("select2/data/maximumSelectionLength", [], function () { function a(a, b, c) { this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c) } return a.prototype.query = function (a, b, c) { var d = this; this.current(function (e) { var f = null != e ? e.length : 0; return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", { message: "maximumSelected", args: { maximum: d.maximumSelectionLength } }) : void a.call(d, b, c) }) }, a }), b.define("select2/dropdown", ["jquery", "./utils"], function (a, b) { function c(a, b) { this.$element = a, this.options = b, c.__super__.constructor.call(this) } return b.Extend(c, b.Observable), c.prototype.render = function () { var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>'); return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b }, c.prototype.bind = function () { }, c.prototype.position = function (a, b) { }, c.prototype.destroy = function () { this.$dropdown.remove() }, c }), b.define("select2/dropdown/search", ["jquery", "../utils"], function (a, b) { function c() { } return c.prototype.render = function (b) { var c = b.call(this), d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="text" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>'); return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c }, c.prototype.bind = function (b, c, d) { var e = this; b.call(this, c, d), this.$search.on("keydown", function (a) { e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented() }), this.$search.on("input", function (b) { a(this).off("keyup") }), this.$search.on("keyup input", function (a) { e.handleSearch(a) }), c.on("open", function () { e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function () { e.$search.focus() }, 0) }), c.on("close", function () { e.$search.attr("tabindex", -1), e.$search.val("") }), c.on("focus", function () { c.isOpen() && e.$search.focus() }), c.on("results:all", function (a) { if (null == a.query.term || "" === a.query.term) { var b = e.showSearch(a); b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide") } }) }, c.prototype.handleSearch = function (a) { if (!this._keyUpPrevented) { var b = this.$search.val(); this.trigger("query", { term: b }) } this._keyUpPrevented = !1 }, c.prototype.showSearch = function (a, b) { return !0 }, c }), b.define("select2/dropdown/hidePlaceholder", [], function () { function a(a, b, c, d) { this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d) } return a.prototype.append = function (a, b) { b.results = this.removePlaceholder(b.results), a.call(this, b) }, a.prototype.normalizePlaceholder = function (a, b) { return "string" == typeof b && (b = { id: "", text: b }), b }, a.prototype.removePlaceholder = function (a, b) { for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) { var e = b[d]; this.placeholder.id === e.id && c.splice(d, 1) } return c }, a }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function (a) { function b(a, b, c, d) { this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1 } return b.prototype.append = function (a, b) { this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore) }, b.prototype.bind = function (b, c, d) { var e = this; b.call(this, c, d), c.on("query", function (a) { e.lastParams = a, e.loading = !0 }), c.on("query:append", function (a) { e.lastParams = a, e.loading = !0 }), this.$results.on("scroll", function () { var b = a.contains(document.documentElement, e.$loadingMore[0]); if (!e.loading && b) { var c = e.$results.offset().top + e.$results.outerHeight(!1), d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1); c + 50 >= d && e.loadMore() } }) }, b.prototype.loadMore = function () { this.loading = !0; var b = a.extend({}, { page: 1 }, this.lastParams); b.page++ , this.trigger("query:append", b) }, b.prototype.showLoadingMore = function (a, b) { return b.pagination && b.pagination.more }, b.prototype.createLoadingMore = function () { var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'), c = this.options.get("translations").get("loadingMore"); return b.html(c(this.lastParams)), b }, b }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (a, b) { function c(b, c, d) { this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d) } return c.prototype.bind = function (a, b, c) { var d = this, e = !1; a.call(this, b, c), b.on("open", function () { d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function () { d._positionDropdown(), d._resizeDropdown() }), b.on("results:append", function () { d._positionDropdown(), d._resizeDropdown() })) }), b.on("close", function () { d._hideDropdown(), d._detachPositioningHandler(b) }), this.$dropdownContainer.on("mousedown", function (a) { a.stopPropagation() }) }, c.prototype.destroy = function (a) { a.call(this), this.$dropdownContainer.remove() }, c.prototype.position = function (a, b, c) { b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({ position: "absolute", top: -999999 }), this.$container = c }, c.prototype.render = function (b) { var c = a("<span></span>"), d = b.call(this); return c.append(d), this.$dropdownContainer = c, c }, c.prototype._hideDropdown = function (a) { this.$dropdownContainer.detach() }, c.prototype._attachPositioningHandler = function (c, d) { var e = this, f = "scroll.select2." + d.id, g = "resize.select2." + d.id, h = "orientationchange.select2." + d.id, i = this.$container.parents().filter(b.hasScroll); i.each(function () { a(this).data("select2-scroll-position", { x: a(this).scrollLeft(), y: a(this).scrollTop() }) }), i.on(f, function (b) { var c = a(this).data("select2-scroll-position"); a(this).scrollTop(c.y) }), a(window).on(f + " " + g + " " + h, function (a) { e._positionDropdown(), e._resizeDropdown() }) }, c.prototype._detachPositioningHandler = function (c, d) { var e = "scroll.select2." + d.id, f = "resize.select2." + d.id, g = "orientationchange.select2." + d.id, h = this.$container.parents().filter(b.hasScroll); h.off(e), a(window).off(e + " " + f + " " + g) }, c.prototype._positionDropdown = function () { var b = a(window), c = this.$dropdown.hasClass("select2-dropdown--above"), d = this.$dropdown.hasClass("select2-dropdown--below"), e = null, f = this.$container.offset(); f.bottom = f.top + this.$container.outerHeight(!1); var g = { height: this.$container.outerHeight(!1) }; g.top = f.top, g.bottom = f.top + g.height; var h = { height: this.$dropdown.outerHeight(!1) }, i = { top: b.scrollTop(), bottom: b.scrollTop() + b.height() }, j = i.top < f.top - h.height, k = i.bottom > f.bottom + h.height, l = { left: f.left, top: g.bottom }, m = this.$dropdownParent; "static" === m.css("position") && (m = m.offsetParent()); var n = m.offset(); l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l) }, c.prototype._resizeDropdown = function () { var a = { width: this.$container.outerWidth(!1) + "px" }; this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto"), this.$dropdown.css(a) }, c.prototype._showDropdown = function (a) { this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown() }, c }), b.define("select2/dropdown/minimumResultsForSearch", [], function () { function a(b) { for (var c = 0, d = 0; d < b.length; d++) { var e = b[d]; e.children ? c += a(e.children) : c++ } return c } function b(a, b, c, d) { this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d) } return b.prototype.showSearch = function (b, c) { return a(c.data.results) < this.minimumResultsForSearch ? !1 : b.call(this, c) }, b }), b.define("select2/dropdown/selectOnClose", [], function () { function a() { } return a.prototype.bind = function (a, b, c) { var d = this; a.call(this, b, c), b.on("close", function (a) { d._handleSelectOnClose(a) }) }, a.prototype._handleSelectOnClose = function (a, b) { if (b && null != b.originalSelect2Event) { var c = b.originalSelect2Event; if ("select" === c._type || "unselect" === c._type) return } var d = this.getHighlightedResults(); if (!(d.length < 1)) { var e = d.data("data"); null != e.element && e.element.selected || null == e.element && e.selected || this.trigger("select", { data: e }) } }, a }), b.define("select2/dropdown/closeOnSelect", [], function () { function a() { } return a.prototype.bind = function (a, b, c) { var d = this; a.call(this, b, c), b.on("select", function (a) { d._selectTriggered(a) }), b.on("unselect", function (a) { d._selectTriggered(a) }) }, a.prototype._selectTriggered = function (a, b) { var c = b.originalEvent; c && c.ctrlKey || this.trigger("close", { originalEvent: c, originalSelect2Event: b }) }, a }), b.define("select2/i18n/en", [], function () { return { errorLoading: function () { return "The results could not be loaded." }, inputTooLong: function (a) { var b = a.input.length - a.maximum, c = "Please delete " + b + " character"; return 1 != b && (c += "s"), c }, inputTooShort: function (a) { var b = a.minimum - a.input.length, c = "Please enter " + b + " or more characters"; return c }, loadingMore: function () { return "Loading more resultsâ€¦" }, maximumSelected: function (a) { var b = "You can only select " + a.maximum + " item"; return 1 != a.maximum && (b += "s"), b }, noResults: function () { return "No results found" }, searching: function () { return "Searchingâ€¦" } } }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) { function D() { this.reset() } D.prototype.apply = function (l) { if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) { if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) { var C = b(l.amdBase + "compat/query"); l.dataAdapter = j.Decorate(l.dataAdapter, C) } if (null != l.initSelection) { var D = b(l.amdBase + "compat/initSelection"); l.dataAdapter = j.Decorate(l.dataAdapter, D) } } if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) { if (l.multiple) l.dropdownAdapter = u; else { var E = j.Decorate(u, v); l.dropdownAdapter = E } if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) { var F = b(l.amdBase + "compat/dropdownCss"); l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F) } l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y) } if (null == l.selectionAdapter) { if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) { var G = b(l.amdBase + "compat/containerCss"); l.selectionAdapter = j.Decorate(l.selectionAdapter, G) } l.selectionAdapter = j.Decorate(l.selectionAdapter, i) } if ("string" == typeof l.language) if (l.language.indexOf("-") > 0) { var H = l.language.split("-"), I = H[0]; l.language = [l.language, I] } else l.language = [l.language]; if (a.isArray(l.language)) { var J = new k; l.language.push("en"); for (var K = l.language, L = 0; L < K.length; L++) { var M = K[L], N = {}; try { N = k.loadPath(M) } catch (O) { try { M = this.defaults.amdLanguageBase + M, N = k.loadPath(M) } catch (P) { l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.'); continue } } J.extend(N) } l.translations = J } else { var Q = k.loadPath(this.defaults.amdLanguageBase + "en"), R = new k(l.language); R.extend(Q), l.translations = R } return l }, D.prototype.reset = function () { function b(a) { function b(a) { return l[a] || a } return a.replace(/[^\u0000-\u007E]/g, b) } function c(d, e) { if ("" === a.trim(d.term)) return e; if (e.children && e.children.length > 0) { for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) { var h = e.children[g], i = c(d, h); null == i && f.children.splice(g, 1) } return f.children.length > 0 ? f : c(d, f) } var j = b(e.text).toUpperCase(), k = b(d.term).toUpperCase(); return j.indexOf(k) > -1 ? e : null } this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: j.escapeMarkup, language: C, matcher: c, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, sorter: function (a) { return a }, templateResult: function (a) { return a.text }, templateSelection: function (a) { return a.text }, theme: "default", width: "resolve" } }, D.prototype.set = function (b, c) { var d = a.camelCase(b), e = {}; e[d] = c; var f = j._convertData(e); a.extend(this.defaults, f) }; var E = new D; return E }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (a, b, c, d) { function e(b, e) { if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) { var f = a(this.get("amdBase") + "compat/inputData"); this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f) } } return e.prototype.fromElement = function (a) { var c = ["select2"]; null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl"))); var e = {}; e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data(); var f = b.extend(!0, {}, e); f = d._convertData(f); for (var g in f) b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]); return this }, e.prototype.get = function (a) { return this.options[a] }, e.prototype.set = function (a, b) { this.options[a] = b }, e }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (a, b, c, d) { var e = function (a, c) { null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this); var d = a.attr("tabindex") || 0; a.data("old-tabindex", d), a.attr("tabindex", "-1"); var f = this.options.get("dataAdapter"); this.dataAdapter = new f(a, this.options); var g = this.render(); this._placeContainer(g); var h = this.options.get("selectionAdapter"); this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g); var i = this.options.get("dropdownAdapter"); this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g); var j = this.options.get("resultsAdapter"); this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown); var k = this; this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (a) { k.trigger("selection:update", { data: a }) }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this) }; return c.Extend(e, c.Observable), e.prototype._generateId = function (a) { var b = ""; return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b }, e.prototype._placeContainer = function (a) { a.insertAfter(this.$element); var b = this._resolveWidth(this.$element, this.options.get("width")); null != b && a.css("width", b) }, e.prototype._resolveWidth = function (a, b) { var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i; if ("resolve" == b) { var d = this._resolveWidth(a, "style"); return null != d ? d : this._resolveWidth(a, "element") } if ("element" == b) { var e = a.outerWidth(!1); return 0 >= e ? "auto" : e + "px" } if ("style" == b) { var f = a.attr("style"); if ("string" != typeof f) return null; for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) { var j = g[h].replace(/\s/g, ""), k = j.match(c); if (null !== k && k.length >= 1) return k[1] } return null } return b }, e.prototype._bindAdapters = function () { this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container) }, e.prototype._registerDomEvents = function () { var b = this; this.$element.on("change.select2", function () { b.dataAdapter.current(function (a) { b.trigger("selection:update", { data: a }) }) }), this.$element.on("focus.select2", function (a) { b.trigger("focus", a) }), this._syncA = c.bind(this._syncAttributes, this), this._syncS = c.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA); var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver; null != d ? (this._observer = new d(function (c) { a.each(c, b._syncA), a.each(c, b._syncS) }), this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1)) }, e.prototype._registerDataEvents = function () { var a = this; this.dataAdapter.on("*", function (b, c) { a.trigger(b, c) }) }, e.prototype._registerSelectionEvents = function () { var b = this, c = ["toggle", "focus"]; this.selection.on("toggle", function () { b.toggleDropdown() }), this.selection.on("focus", function (a) { b.focus(a) }), this.selection.on("*", function (d, e) { -1 === a.inArray(d, c) && b.trigger(d, e) }) }, e.prototype._registerDropdownEvents = function () { var a = this; this.dropdown.on("*", function (b, c) { a.trigger(b, c) }) }, e.prototype._registerResultsEvents = function () { var a = this; this.results.on("*", function (b, c) { a.trigger(b, c) }) }, e.prototype._registerEvents = function () { var a = this; this.on("open", function () { a.$container.addClass("select2-container--open") }), this.on("close", function () { a.$container.removeClass("select2-container--open") }), this.on("enable", function () { a.$container.removeClass("select2-container--disabled") }), this.on("disable", function () { a.$container.addClass("select2-container--disabled") }), this.on("blur", function () { a.$container.removeClass("select2-container--focus") }), this.on("query", function (b) { a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function (c) { a.trigger("results:all", { data: c, query: b }) }) }), this.on("query:append", function (b) { this.dataAdapter.query(b, function (c) { a.trigger("results:append", { data: c, query: b }) }) }), this.on("keypress", function (b) { var c = b.which; a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault()) }) }, e.prototype._syncAttributes = function () { this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {}) }, e.prototype._syncSubtree = function (a, b) { var c = !1, d = this; if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) { if (b) if (b.addedNodes && b.addedNodes.length > 0) for (var e = 0; e < b.addedNodes.length; e++) { var f = b.addedNodes[e]; f.selected && (c = !0) } else b.removedNodes && b.removedNodes.length > 0 && (c = !0); else c = !0; c && this.dataAdapter.current(function (a) { d.trigger("selection:update", { data: a }) }) } }, e.prototype.trigger = function (a, b) { var c = e.__super__.trigger, d = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting" }; if (void 0 === b && (b = {}), a in d) { var f = d[a], g = { prevented: !1, name: a, args: b }; if (c.call(this, f, g), g.prevented) return void (b.prevented = !0) } c.call(this, a, b) }, e.prototype.toggleDropdown = function () { this.options.get("disabled") || (this.isOpen() ? this.close() : this.open()) }, e.prototype.open = function () { this.isOpen() || this.trigger("query", {}) }, e.prototype.close = function () { this.isOpen() && this.trigger("close", {}) }, e.prototype.isOpen = function () { return this.$container.hasClass("select2-container--open") }, e.prototype.hasFocus = function () { return this.$container.hasClass("select2-container--focus") }, e.prototype.focus = function (a) { this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {})) }, e.prototype.enable = function (a) { this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]); var b = !a[0]; this.$element.prop("disabled", b) }, e.prototype.data = function () { this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'); var a = []; return this.dataAdapter.current(function (b) { a = b }), a }, e.prototype.val = function (b) { if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val(); var c = b[0]; a.isArray(c) && (c = a.map(c, function (a) { return a.toString() })), this.$element.val(c).trigger("change") }, e.prototype.destroy = function () { this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null; }, e.prototype.render = function () { var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'); return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b }, e }), b.define("select2/compat/utils", ["jquery"], function (a) { function b(b, c, d) { var e, f, g = []; e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function () { 0 === this.indexOf("select2-") && g.push(this) })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function () { 0 !== this.indexOf("select2-") && (f = d(this), null != f && g.push(f)) })), b.attr("class", g.join(" ")) } return { syncCssClasses: b } }), b.define("select2/compat/containerCss", ["jquery", "./utils"], function (a, b) { function c(a) { return null } function d() { } return d.prototype.render = function (d) { var e = d.call(this), f = this.options.get("containerCssClass") || ""; a.isFunction(f) && (f = f(this.$element)); var g = this.options.get("adaptContainerCssClass"); if (g = g || c, -1 !== f.indexOf(":all:")) { f = f.replace(":all:", ""); var h = g; g = function (a) { var b = h(a); return null != b ? b + " " + a : a } } var i = this.options.get("containerCss") || {}; return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e }, d }), b.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (a, b) { function c(a) { return null } function d() { } return d.prototype.render = function (d) { var e = d.call(this), f = this.options.get("dropdownCssClass") || ""; a.isFunction(f) && (f = f(this.$element)); var g = this.options.get("adaptDropdownCssClass"); if (g = g || c, -1 !== f.indexOf(":all:")) { f = f.replace(":all:", ""); var h = g; g = function (a) { var b = h(a); return null != b ? b + " " + a : a } } var i = this.options.get("dropdownCss") || {}; return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e }, d }), b.define("select2/compat/initSelection", ["jquery"], function (a) { function b(a, b, c) { c.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = c.get("initSelection"), this._isInitialized = !1, a.call(this, b, c) } return b.prototype.current = function (b, c) { var d = this; return this._isInitialized ? void b.call(this, c) : void this.initSelection.call(null, this.$element, function (b) { d._isInitialized = !0, a.isArray(b) || (b = [b]), c(b) }) }, b }), b.define("select2/compat/inputData", ["jquery"], function (a) { function b(a, b, c) { this._currentData = [], this._valueSeparator = c.get("valueSeparator") || ",", "hidden" === b.prop("type") && c.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), a.call(this, b, c) } return b.prototype.current = function (b, c) { function d(b, c) { var e = []; return b.selected || -1 !== a.inArray(b.id, c) ? (b.selected = !0, e.push(b)) : b.selected = !1, b.children && e.push.apply(e, d(b.children, c)), e } for (var e = [], f = 0; f < this._currentData.length; f++) { var g = this._currentData[f]; e.push.apply(e, d(g, this.$element.val().split(this._valueSeparator))) } c(e) }, b.prototype.select = function (b, c) { if (this.options.get("multiple")) { var d = this.$element.val(); d += this._valueSeparator + c.id, this.$element.val(d), this.$element.trigger("change") } else this.current(function (b) { a.map(b, function (a) { a.selected = !1 }) }), this.$element.val(c.id), this.$element.trigger("change") }, b.prototype.unselect = function (a, b) { var c = this; b.selected = !1, this.current(function (a) { for (var d = [], e = 0; e < a.length; e++) { var f = a[e]; b.id != f.id && d.push(f.id) } c.$element.val(d.join(c._valueSeparator)), c.$element.trigger("change") }) }, b.prototype.query = function (a, b, c) { for (var d = [], e = 0; e < this._currentData.length; e++) { var f = this._currentData[e], g = this.matches(b, f); null !== g && d.push(g) } c({ results: d }) }, b.prototype.addOptions = function (b, c) { var d = a.map(c, function (b) { return a.data(b[0], "data") }); this._currentData.push.apply(this._currentData, d) }, b }), b.define("select2/compat/matcher", ["jquery"], function (a) { function b(b) { function c(c, d) { var e = a.extend(!0, {}, d); if (null == c.term || "" === a.trim(c.term)) return e; if (d.children) { for (var f = d.children.length - 1; f >= 0; f--) { var g = d.children[f], h = b(c.term, g.text, g); h || e.children.splice(f, 1) } if (e.children.length > 0) return e } return b(c.term, d.text, d) ? e : null } return c } return b }), b.define("select2/compat/query", [], function () { function a(a, b, c) { c.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), a.call(this, b, c) } return a.prototype.query = function (a, b, c) { b.callback = c; var d = this.options.get("query"); d.call(null, b) }, a }), b.define("select2/dropdown/attachContainer", [], function () { function a(a, b, c) { a.call(this, b, c) } return a.prototype.position = function (a, b, c) { var d = c.find(".dropdown-wrapper"); d.append(b), b.addClass("select2-dropdown--below"), c.addClass("select2-container--below") }, a }), b.define("select2/dropdown/stopPropagation", [], function () { function a() { } return a.prototype.bind = function (a, b, c) { a.call(this, b, c); var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "text", "touchend", "touchstart"]; this.$dropdown.on(d.join(" "), function (a) { a.stopPropagation() }) }, a }), b.define("select2/selection/stopPropagation", [], function () { function a() { } return a.prototype.bind = function (a, b, c) { a.call(this, b, c); var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "text", "touchend", "touchstart"]; this.$selection.on(d.join(" "), function (a) { a.stopPropagation() }) }, a }), function (c) { "function" == typeof b.define && b.define.amd ? b.define("jquery-mousewheel", ["jquery"], c) : "object" == typeof exports ? module.exports = c : c(a) }(function (a) { function b(b) { var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0; if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) { if (1 === g.deltaMode) { var q = a.data(this, "mousewheel-line-height"); j *= q, m *= q, l *= q } else if (2 === g.deltaMode) { var r = a.data(this, "mousewheel-page-height"); j *= r, m *= r, l *= r } if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) { var s = this.getBoundingClientRect(); o = b.clientX - s.left, p = b.clientY - s.top } return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h) } } function c() { f = null } function d(a, b) { return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0 } var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice; if (a.event.fixHooks) for (var j = g.length; j;)a.event.fixHooks[g[--j]] = a.event.mouseHooks; var k = a.event.special.mousewheel = { version: "3.1.12", setup: function () { if (this.addEventListener) for (var c = h.length; c;)this.addEventListener(h[--c], b, !1); else this.onmousewheel = b; a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this)) }, teardown: function () { if (this.removeEventListener) for (var c = h.length; c;)this.removeEventListener(h[--c], b, !1); else this.onmousewheel = null; a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height") }, getLineHeight: function (b) { var c = a(b), d = c["offsetParent" in a.fn ? "offsetParent" : "parent"](); return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16 }, getPageHeight: function (b) { return a(b).height() }, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } }; a.fn.extend({ mousewheel: function (a) { return a ? this.bind("mousewheel", a) : this.trigger("mousewheel") }, unmousewheel: function (a) { return this.unbind("mousewheel", a) } }) }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (a, b, c, d) { if (null == a.fn.select2) { var e = ["open", "close", "destroy"]; a.fn.select2 = function (b) { if (b = b || {}, "object" == typeof b) return this.each(function () { var d = a.extend(!0, {}, b); new c(a(this), d) }), this; if ("string" == typeof b) { var d, f = Array.prototype.slice.call(arguments, 1); return this.each(function () { var c = a(this).data("select2"); null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."), d = c[b].apply(c, f) }), a.inArray(b, e) > -1 ? this : d } throw new Error("Invalid arguments for Select2: " + b) } } return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c }), { define: b.define, require: b.require }
    }(), c = b.require("jquery.select2"); return a.fn.select2.amd = b, c
});
