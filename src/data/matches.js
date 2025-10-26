export const matches = [
    /*{
        _id: "1",
        referee: {
            referee_name: "Chris Kavanagh",
            final_score: 7.3,
            scores: {
                criteria_consistency: 7.3,
                control_discipline: 7.3,
                technical_decisions: 7.3,
                var_use: 7.3,
                posture_communication: 7.3
            }
        },
        date: "13.04.2025",
        time: "17:30",
        stadium: "St. James' Park",
        competition_name: "Premier League",
        stage: "32. Rodada",
        statistics: {
            item: [
                {
                    group_name: "Gols",
                    home: "4",
                    away: "1",
                    statistic_type: "positive",
                },
                {
                    group_name: "Posse de bola (%)",
                    home: "48%",
                    away: "52%",
                    statistic_type: "negative",
                },
                {
                    group_name: "Chutes",
                    home: "13",
                    away: "9",
                    statistic_type: "positive",
                },
                {
                    group_name: "Chutes no alvo",
                    home: "6",
                    away: "5",
                    statistic_type: "positive",
                },
                {
                    group_name: "Escanteios",
                    home: "7",
                    away: "2",
                    statistic_type: "positive",
                },
                {
                    group_name: "Tiro de meta",
                    home: "3",
                    away: "12",
                    statistic_type: "negative",
                },
                {
                    group_name: "Impedimentos",
                    home: "2",
                    away: "1",
                    statistic_type: "positive",
                },
                {
                    group_name: "Faltas",
                    home: "7",
                    away: "9",
                    statistic_type: "positive",
                },
                {
                    group_name: "Cartões amarelos",
                    home: "0",
                    away: "2",
                    statistic_type: "positive",
                },
                {
                    group_name: "Cartões vermelhos",
                    home: "0",
                    away: "0",
                    statistic_type: null,
                }
            ],
        },
        home_team: {
            team_id: "1",
            team_name: "Newcastle United",
            formations: "4-3-3",
            players: [
                {
                    substitute: false,
                    player: {
                        name: "Nick Pope",
                        short_name: "N. Pope",
                        position: "G",
                        jersey_number: "22",
                        nationality: "england",
                    },
                    statistics: {
                        total_pass: 15,
                        accurate_pass: 9,
                        total_long_balls: 7,
                        accurate_long_balls: 1,
                        goal_assist: 0,
                        good_high_claim: 1,
                        saved_shots_from_inside_the_box: 2,
                        saves: 4,
                        minutesPlayed: 90,
                        touche: 26,
                        rating: 7,
                        possession_lost_ctrl: 6,
                    },
                },
                {
                    substitute: false,
                    player: {
                        name: "Kieran Trippier",
                        short_name: "K. Trippier",
                        position: "D",
                        jersey_number: "2",
                        nationality: "england",
                    },
                    statistics: {
                        total_pass: 49,
                        accurate_pass: 41,
                        total_long_balls: 4,
                        accurate_long_balls: 2,
                        goal_assist: 0,
                        total_cross: 8,
                        accurate_cross: 4,
                        aerial_won: 1,
                        duel_lost: 2,
                        duel_won: 7,
                        total_contest: 2,
                        total_tackle: 3,
                        was_fouled: 3,
                        total_offside: 1,
                        minutes_played: 78,
                        touches: 72,
                        rating: 7,
                        possession_lost_ctrl: 14,
                        key_pass: 2,
                    },
                },
                {
                    substitute: false,
                    player: {
                        name: "Fabian Schär",
                        short_name: "F. Schär",
                        position: "D",
                        jersey_number: "5",
                        nationality: "switzerland",
                    },
                    statistics: {
                        total_pass: 53,
                        accurate_pass: 44,
                        totalLong_balls: 7,
                        accurate_long_balls: 3,
                        goal_assist: 0,
                        aerial_lost: 3,
                        aerial_won: 4,
                        duel_lost: 10,
                        duel_won: 5,
                        challenge_lost: 3,
                        dispossessed: 1,
                        total_clearance: 3,
                        outfielder_block: 1,
                        interception_won: 3,
                        total_tackle: 1,
                        fouls: 3,
                        minutes_played: 90,
                        touches: 66,
                        rating: 6.7,
                        possession_lost_ctrl: 12,
                    },
                },
                {
                    substitute: false,
                    player: {
                        name: "Dan Burn",
                        short_name: "D. Burn",
                        position: "D",
                        jersey_number: "33",
                        nationality: "england",
                    },
                    statistics: {
                        total_pass: 46,
                        accurate_pass: 36,
                        totalLong_balls: 5,
                        accurate_long_balls: 2,
                        goal_assist: 0,
                        aerial_won: 9,
                        duel_won: 10,
                        big_chance_missed: 1,
                        shot_off_target: 2,
                        total_clearance: 4,
                        interception_won: 4,
                        total_tackle: 1,
                        minutes_played: 90,
                        touches: 59,
                        rating: 7.3,
                        possession_lost_ctrl: 11,
                        keyPass: 1,
                    },
                },
                {
                    substitute: false,
                    player: {
                        name: "Valentino Livramento",
                        short_name: "Tino Livramento",
                        position: "D",
                        jersey_number: "21",
                        nationality: "england",
                    },
                    statistics: {
                        total_pass: 34,
                        accurate_pass: 26,
                        total_long_balls: 5,
                        accurate_long_balls: 1,
                        goal_assist: 0,
                        total_cross: 2,
                        accurate_cross: 1,
                        duel_lost: 9,
                        duel_won: 6,
                        challenge_lost: 5,
                        dispossessed: 2,
                        total_contest: 3,
                        won_contest: 1,
                        total_clearance: 2,
                        total_tackle: 4,
                        was_fouled: 1,
                        minutes_played: 90,
                        touches: 57,
                        rating: 6.5,
                        possession_lost_ctrl: 16,
                        keyPass: 1,
                    },
                },
                {
                    substitute: false,
                    player: {
                        name: "Valentino Livramento",
                        short_name: "Tino Livramento",
                        position: "D",
                        jersey_number: "21",
                        nationality: "england",
                    },
                    statistics: {
                        total_pass: 34,
                        accurate_pass: 26,
                        total_long_balls: 5,
                        accurate_long_balls: 1,
                        goal_assist: 0,
                        total_cross: 2,
                        accurate_cross: 1,
                        duel_lost: 9,
                        duel_won: 6,
                        challenge_lost: 5,
                        dispossessed: 2,
                        total_contest: 3,
                        won_contest: 1,
                        total_clearance: 2,
                        total_tackle: 4,
                        was_fouled: 1,
                        minutes_played: 90,
                        touches: 57,
                        rating: 6.5,
                        possession_lost_ctrl: 16,
                        keyPass: 1,
                    },
                },
                {
                    substitute: false,
                    capitain: true,
                    player: {
                        name: "Bruno Guimarães",
                        short_name: "B. Guimarães",
                        position: "M",
                        jersey_number: "39",
                        nationality: "brazil",
                    },
                    statistics: {
                        total_pass: 43,
                        accurate_pass: 34,
                        totalLong_balls: 5,
                        accurate_long_balls: 2,
                        goal_assist: 0,
                        total_cross: 2,
                        accurate_cross: 1,
                        aerial_won: 1,
                        duel_lost: 5,
                        duel_won: 6,
                        challenge_lost: 1,
                        dispossessed: 2,
                        total_contest: 1,
                        won_contest: 1,
                        shot_off_target: 1,
                        on_target_scoring_attempt: 2,
                        goals: 1,
                        total_tackle: 3,
                        was_fouled: 1,
                        fouls: 2,
                        minutes_played: 85,
                        touches: 58,
                        rating: 7.8,
                        possession_lost_ctrl: 13,
                        key_pass: 1,
                    },
                },
                {
                    substitute: false,
                    player: {
                        name: "Sandro Tonali",
                        short_name: "S. Tonali",
                        position: "M",
                        jersey_number: "8",
                        nationality: "italy",
                    },
                    statistics: {
                        total_pass: 46,
                        accurate_pass: 42,
                        totalLong_balls: 1,
                        accurate_long_balls: 1,
                        goal_assist: 0,
                        total_cross: 1,
                        duel_lost: 1,
                        duel_won: 1,
                        total_contest: 1,
                        shot_off_target: 1,
                        on_target_scoring_attempt: 1,
                        goals: 1,
                        total_clearance: 1,
                        interception_won: 2,
                        total_tackle: 1,
                        minutes_played: 90,
                        touches: 63,
                        rating: 7.6,
                        possession_lost_ctrl: 7,
                    },
                },
                {
                    substitute: false,
                    player: {
                        name: "Joelinton",
                        short_name: "Joelinton",
                        position: "M",
                        jersey_number: "7",
                        nationality: "brazil",
                    },
                    statistics: {
                        total_pass: 28,
                        accurate_pass: 22,
                        total_long_balls: 1,
                        goal_assist: 1,
                        aerial_lost: 1,
                        aerial_won: 2,
                        duel_lost: 4,
                        duel_won: 3,
                        challenge_lost: 1,
                        total_contest: 1,
                        big_chance_created: 1,
                        blocked_scoring_attempt: 1,
                        was_fouled: 1,
                        fouls: 1,
                        minutes_played: 85,
                        touches: 36,
                        rating: 7,
                        possession_lost_ctrl: 9,
                        keyPass: 1,
                    },
                },
                {
                    substitute: false,
                    player: {
                        name: "Jacob Murphy",
                        short_name: "J. Murphy",
                        position: "F",
                        jersey_number: "23",
                        nationality: "england",
                    },
                    statistics: {
                        total_pass: 35,
                        accurate_pass: 26,
                        total_long_balls: 1,
                        accurate_long_balls: 1,
                        goal_assist: 1,
                        total_cross: 7,
                        accurate_cross: 1,
                        aerial_lost: 1,
                        duel_lost: 4,
                        duel_won: 6,
                        dispossessed: 2,
                        total_contest: 6,
                        won_contest: 5,
                        big_chance_created: 1,
                        shot_off_target: 1,
                        total_clearance: 1,
                        total_tackle: 1,
                        total_offside: 1,
                        minutes_played: 78,
                        touches: 59,
                        rating: 7.8,
                        possession_lost_ctrl: 19,
                        keyPass: 2,
                    },
                },
                {
                    substitute: false,
                    player: {
                        name: "Alexander Isak",
                        short_name: "A. Isak",
                        position: "F",
                        jersey_number: "14",
                        nationality: "sweden",
                    },
                    statistics: {
                        total_pass: 18,
                        accurate_pass: 13,
                        total_long_balls: 2,
                        accurate_long_balls: 2,
                        goal_assist: 1,
                        total_cross: 2,
                        accurate_cross: 1,
                        aerial_lost: 2,
                        aerial_won: 2,
                        duel_lost: 3,
                        duel_won: 5,
                        total_contest: 3,
                        won_contest: 2,
                        big_chance_created: 1,
                        big_chance_missed: 1,
                        shot_off_target: 1,
                        on_target_scoring_attempt: 1,
                        was_fouled: 1,
                        minutes_played: 78,
                        touches: 29,
                        rating: 7.3,
                        possession_lost_ctrl: 10,
                        keyPass: 1,
                    },
                },
                {
                    substitute: false,
                    player: {
                        name: "Harvey Barnes",
                        short_name: "H. Barnes",
                        position: "F",
                        jersey_number: "11",
                        nationality: "england",
                    },
                    statistics: {
                        total_pass: 20,
                        accurate_pass: 17,
                        goal_assist: 0,
                        total_cross: 2,
                        accurate_cross: 1,
                        aerial_lost: 2,
                        duel_lost: 7,
                        duel_won: 6,
                        challenge_lost: 1,
                        dispossessed: 1,
                        total_contest: 5,
                        won_contest: 2,
                        big_chance_created: 1,
                        on_target_scoring_attempt: 2,
                        goals: 2,
                        total_clearance: 1,
                        total_tackle: 2,
                        was_fouled: 2,
                        minutes_played: 90,
                        touches: 38,
                        rating: 8.8,
                        possession_lost_ctrl: 9,
                        keyPass: 1,
                    },
                },
                {
                    substitute: true,
                    player: {
                        name: "Emil Krafth",
                        short_name: "H. Krafth",
                        position: "D",
                        jersey_number: "17",
                        nationality: "sweden",
                    },
                    statistics: {
                        total_pass: 15,
                        accurate_pass: 14,
                        goal_assist: 0,
                        total_clearance: 1,
                        minutes_played: 12,
                        touches: 19,
                        rating: 6.6,
                        possession_lost_ctrl: 1,
                    },
                },
                {
                    substitute: true,
                    player: {
                        name: "Callum Wilson",
                        short_name: "C. Wilson",
                        position: "F",
                        jersey_number: "9",
                        nationality: "england",
                    },
                    statistics: {
                        goal_assist: 0,
                        minutes_played: 12,
                        rating: 6.3,
                    },
                },
                {
                    substitute: true,
                    player: {
                        name: "Anthony Gordon",
                        short_name: "A. Gordon",
                        position: "F",
                        jersey_number: "10",
                        nationality: "england",
                    },
                    statistics: {
                        total_pass: 6,
                        accurate_pass: 5,
                        total_long_balls: 1,
                        accurate_long_balls: 1,
                        goal_assist: 0,
                        duel_won: 2,
                        total_tackle: 2,
                        minutes_played: 12,
                        touches: 9,
                        rating: 6.7,
                    },
                },
                {
                    substitute: true,
                    player: {
                        name: "Sean Longstaff",
                        short_name: "S. Longstaff",
                        position: "N",
                        jersey_number: "36",
                        nationality: "england",
                    },
                    statistics: {
                        total_pass: 8,
                        accurate_pass: 7,
                        goal_assist: 0,
                        minutes_played: 11,
                        touches: 8,
                        rating: 6.6,
                        possession_lost_ctrl: 1,
                    },
                },
                {
                    substitute: true,
                    player: {
                        name: "Lews Miley",
                        short_name: "L. Miley",
                        position: "M",
                        jersey_number: "67",
                        nationality: "england",
                    },
                    statistics: {
                        total_pass: 4,
                        accurate_pass: 3,
                        goal_assist: 0,
                        duel_lost: 2,
                        duel_won: 2,
                        dispossessed: 1,
                        total_tackle: 2,
                        fouls: 1,
                        minutes_played: 11,
                        touches: 7,
                        rating: 6.7,
                        possession_lost_ctrl: 2,
                    },
                },
                {
                    substitute: true,
                    player: {
                        name: "Martin Dúbravka",
                        short_name: "M. Dúbravka",
                        position: "G",
                        jersey_number: "1",
                        nationality: "slovakia",
                    },
                    statistics: {},
                },
                {
                    substitute: true,
                    player: {
                        name: "Matt Targett",
                        short_name: "M. Targett",
                        position: "D",
                        jersey_number: "13",
                        nationality: "england",
                    },
                    statistics: {},
                },
                {
                    substitute: true,
                    player: {
                        name: "William Osula",
                        short_name: "W. Osula",
                        position: "F",
                        jersey_number: "18",
                        nationality: "denmark",
                    },
                    statistics: {},
                },
                {
                    substitute: true,
                    player: {
                        name: "Sean Neave",
                        short_name: "S. Neave",
                        position: "F",
                        jersey_number: "78",
                        nationality: "england",
                    },
                    statistics: {},
                },
            ],
            missing_players: [
                {
                    player: {
                        name: "Lewis Hall",
                        short_name: "L. Hall",
                        position: "D",
                        jersey_number: "3",
                        nationality: "england",
                        type: "missing",
                    }
                },
                {
                    player: {
                        name: "Sven Botman",
                        short_name: "S. Botman",
                        position: "D",
                        jersey_number: "4",
                        nationality: "netherlands",
                        type: "missing",
                    }
                },
                {
                    player: {
                        name: "Jamaal Lascelles",
                        short_name: "J. Lascelles",
                        position: "D",
                        jersey_number: "6",
                        nationality: "england",
                        type: "missing",
                    }
                },
                {
                    player: {
                        name: "Joe Willock",
                        short_name: "J. Willock",
                        position: "M",
                        jersey_number: "28",
                        nationality: "england",
                        type: "doubtful",
                    }
                },
                {
                    player: {
                        name: "Anthony Gordon",
                        short_name: "A. Gordon",
                        position: "F",
                        jersey_number: "10",
                        nationality: "england",
                        type: "doubtful",
                    }
                },
            ],
        },
        away_team: {
            team_id: "2",
            team_name: "Manchester United FC",
            formation: "3-4-2-1",
            players: [
                {
                    substitute: false,
                    player: {
                        name: "Altay Bayindir",
                        short_name: "A. Bayindir",
                        position: "G",
                        jersey_number: "1",
                        nationality: "turkey",
                    },
                    statistics: {
                        total_pass: 57,
                        accurate_pass: 28,
                        total_long_balls: 37,
                        accurate_long_balls: 10,
                        goal_assist: 0,
                        aerial_lost: 1,
                        aerial_won: 1,
                        duel_lost: 2,
                        duel_won: 1,
                        challenge_lost: 1,
                        total_clearance: 3,
                        error_lead_to_a_goal: 1,
                        good_high_claim: 2,
                        saved_shots_from_inside_the_box: 2,
                        saves: 2,
                        minutes_played: 90,
                        touches: 68,
                        rating: 5.5,
                        possession_lost_ctrl: 29,
                    },
                },
                {
                    substitute: false,
                    player: {
                        name: "Noussair Mazraoui",
                        short_name: "M. Mazraoui",
                        position: "D",
                        jersey_number: "3",
                        nationality: "morocco",
                    },
                    statistics: {
                        total_pass: 31,
                        accurate_pass: 27,
                        total_long_balls: 1,
                        goal_assist: 0,
                        aerial_lost: 4,
                        aerial_won: 1,
                        duel_lost: 5,
                        duel_won: 4,
                        challenge_lost: 1,
                        total_clearance: 1,
                        outfielder_block: 1,
                        total_tackle: 3,
                        error_lead_to_a_goal: 1,
                        minutes_played: 78,
                        touches: 38,
                        rating: 5.5,
                        possession_lost_ctrl: 5,
                    },
                },
                {
                    substitute: false,
                    player: {
                        name: "Victor Lindelöf",
                        short_name: "V. Lindelöf",
                        position: "D",
                        jersey_number: "2",
                        nationality: "sweden",
                    },
                    statistics: {
                        total_pass: 42,
                        accurate_pass: 40,
                        goal_assist: 0,
                        aerial_lost: 4,
                        duel_lost: 5,
                        duel_won: 1,
                        total_clearance: 4,
                        interception_won: 1,
                        total_tackle: 1,
                        fouls: 1,
                        minutes_played: 90,
                        touches: 49,
                        rating: 6.1,
                        possession_lost_ctrl: 2,
                    },
                },
                {
                    substitute: false,
                    player: {
                        name: "Leny Yoro",
                        short_name: "L. Yoro",
                        position: "D",
                        jersey_number: "15",
                        nationality: "france",
                    },
                    statistics: {
                        total_pass: 70,
                        accurate_pass: 65,
                        total_long_balls: 5,
                        accurate_long_balls: 3,
                        goal_assist: 0,
                        aerial_won: 1,
                        duel_lost: 1,
                        duel_won: 3,
                        total_contest: 1,
                        total_clearance: 7,
                        interception_won: 1,
                        total_tackle: 2,
                        minutes_played: 90,
                        touches: 86,
                        rating: 6.2,
                        possession_lost_ctrl: 6,
                    },
                },
                {
                    substitute: false,
                    player: {
                        name: "Diogo Dalot",
                        short_name: "D. Dalot",
                        position: "D",
                        jersey_number: "20",
                        nationality: "portugal",
                    },
                    statistics: {
                        total_pass: 32,
                        accurate_pass: 27,
                        total_long_balls: 2,
                        accurate_long_balls: 1,
                        goal_assist: 1,
                        total_cross: 1,
                        accurate_cross: 1,
                        duel_lost: 5,
                        duel_won: 5,
                        challenge_lost: 1,
                        dispossessed: 3,
                        total_contest: 3,
                        won_contest: 2,
                        total_clearance: 1,
                        interception_won: 1,
                        total_tackle: 3,
                        minutes_played: 90,
                        touches: 55,
                        rating: 6.8,
                        possession_lost_ctrl: 13,
                        key_pass: 1,
                    },
                },
                {
                    substitute: false,
                    player: {
                        name: "Christian Eriksen",
                        short_name: "C. Eriksen",
                        position: "M",
                        jersey_number: "14",
                        nationality: "denmark",
                    },
                    statistics: {
                        total_pass: 47,
                        accurate_pass: 42,
                        total_long_balls: 2,
                        accurate_long_balls: 1,
                        goal_assist: 0,
                        total_cross: 1,
                        duel_lost: 2,
                        duel_won: 2,
                        challenge_lost: 2,
                        total_tackle: 2,
                        minutes_played: 90,
                        touches: 54,
                        rating: 6.4,
                        possession_lost_ctrl: 8,
                    },
                },
                {
                    substitute: false,
                    player: {
                        name: "Harry Amass",
                        short_name: "H. Amass",
                        position: "M",
                        jersey_number: "41",
                        nationality: "england",
                    },
                    statistics: {
                        total_pass: 13,
                        accurate_pass: 11,
                        goal_assist: 0,
                        aerial_won: 1,
                        duel_lost: 2,
                        duel_won: 2,
                        dispossessed: 1,
                        total_wontest: 2,
                        won_contest: 1,
                        shot_off_target: 1,
                        total_clearance: 3,
                        minutes_played: 55,
                        touches: 31,
                        rating: 6.5,
                        possession_lost_ctrl: 6,
                    },
                },
                {
                    substitute: false,
                    player: {
                        name: "Manuel Ugarte",
                        short_name: "M. Ugarte",
                        position: "M",
                        jersey_number: "25",
                        nationality: "uruguay",
                    },
                    statistics: {
                        total_pass: 45,
                        accurate_pass: 40,
                        total_long_balls: 2,
                        accurate_long_balls: 1,
                        goal_assist: 0,
                        total_cross: 1,
                        aerial_lost: 1,
                        aerial_won: 2,
                        duel_lost: 5,
                        duel_won: 10,
                        challenge_lost: 1,
                        dispossessed: 1,
                        total_contest: 5,
                        won_contest: 4,
                        on_target_scoring_attempt: 1,
                        blocked_scoring_attempt: 1,
                        total_clearance: 2,
                        interception_won: 1,
                        total_tackle: 2,
                        was_fouled: 2,
                        fouls: 1,
                        minutes_played: 90,
                        touches: 65,
                        rating: 7,
                        possession_lost_ctrl: 9,
                    },
                },
                {
                    substitute: false,
                    player: {
                        name: "Alejandro Garnacho",
                        short_name: "A. Garnacho",
                        position: "F",
                        jersey_number: "17",
                        nationality: "argentina",
                    },
                    statistics: {
                        total_pass: 14,
                        accurate_pass: 9,
                        goal_assist: 0,
                        aerial_lost: 1,
                        duel_lost: 4,
                        duel_won: 2,
                        challenge_lost: 1,
                        total_contest: 2,
                        won_contest: 1,
                        on_target_scoring_attempt: 2,
                        goals: 1,
                        total_tackle: 1,
                        fouls: 1,
                        minutes_played: 55,
                        touches: 20,
                        rating: 7.3,
                        possession_lost_ctrl: 6,
                    },
                },
                {
                    substitute: false,
                    player: {
                        name: "Bruno Fernandes",
                        short_name: "B. Fernandes",
                        position: "M",
                        jersey_number: "8",
                        nationality: "portugal",
                    },
                    statistics: {
                        total_pass: 44,
                        accurate_pass: 32,
                        total_long_balls: 2,
                        accurate_long_balls: 1,
                        goal_assist: 0,
                        total_cross: 1,
                        aerial_lost: 1,
                        aerial_won: 1,
                        duel_lost: 6,
                        duel_won: 6,
                        challenge_lost: 2,
                        dispossessed: 2,
                        total_contest: 2,
                        won_contest: 1,
                        big_chance_created: 1,
                        total_clearance: 1,
                        interception_won: 1,
                        total_tackle: 3,
                        was_fouled: 1,
                        minutes_played: 82,
                        touches: 62,
                        rating: 7,
                        possession_lost_ctrl: 17,
                        keyPass: 2,
                    },
                },
                {
                    substitute: false,
                    player: {
                        name: "Joshua Zirkzee",
                        short_name: "J. Zirkzee",
                        position: "F",
                        jersey_number: "11",
                        nationality: "netherlands",
                    },
                    statistics: {
                        total_pass: 16,
                        accurate_pass: 10,
                        goal_assist: 0,
                        aerial_lost: 4,
                        aerial_won: 2,
                        duel_lost: 5,
                        duel_won: 5,
                        dispossessed: 1,
                        total_contest: 2,
                        won_contest: 2,
                        big_chance_missed: 1,
                        on_target_scoring_attempt: 1,
                        error_lead_to_a_shot: 1,
                        was_fouled: 1,
                        minutes_played: 55,
                        touches: 26,
                        rating: 6.3,
                        possession_lost_ctrl: 8,
                    },
                },
                {
                    substitute: true,
                    player: {
                        name: "Patrick Dorgu",
                        short_name: "P. Dorgu",
                        position: "D",
                        jersey_number: "13",
                        nationality: "denmark",
                    },
                    statistics: {
                        total_pass: 16,
                        accurate_pass: 15,
                        total_long_balls: 1,
                        accurate_long_balls: 1,
                        goal_assist: 0,
                        total_cross: 1,
                        duel_lost: 8,
                        duel_won: 3,
                        challenge_lost: 2,
                        dispossessed: 2,
                        total_clearance: 1,
                        total_tackle: 2,
                        was_fouled: 1,
                        fouls: 4,
                        total_offside: 1,
                        minutes_played: 35,
                        touches: 31,
                        rating: 6.2,
                        possession_lost_ctrl: 4,
                        keyPass: 1,
                    },
                },
                {
                    substitute: true,
                    player: {
                        name: "Mason Mount",
                        short_name: "M. Mount",
                        position: "M",
                        jersey_number: "7",
                        nationality: "england",
                    },
                    statistics: {
                        total_pass: 10,
                        accurate_pass: 6,
                        goal_assist: 0,
                        aerial_lost: 1,
                        duel_lost: 3,
                        duel_won: 2,
                        dispossessed: 2,
                        on_target_scoring_attempt: 1,
                        total_tackle: 1,
                        was_fouled: 1,
                        minutes_played: 35,
                        touches: 18,
                        rating: 6.5,
                        possession_lost_ctrl: 6,
                    },
                },
                {
                    substitute: true,
                    player: {
                        name: "Rasmus Højlund",
                        short_name: "R. Højlund",
                        position: "F",
                        jersey_number: "9",
                        nationality: "denmark",
                    },
                    statistics: {
                        total_pass: 11,
                        accurate_pass: 9,
                        goal_assist: 0,
                        total_cross: 1,
                        accurate_cross: 1,
                        aerial_lost: 2,
                        duel_lost: 3,
                        duel_won: 1,
                        total_contest: 1,
                        big_chance_missed: 1,
                        shot_off_target: 1,
                        blocked_scoring_attempt: 1,
                        was_fouled: 1,
                        minutes_played: 35,
                        touches: 16,
                        rating: 6.2,
                        possession_lost_ctrl: 3,
                    },
                },
                {
                    substitute: true,
                    player: {
                        name: "Luke Shaw",
                        short_name: "L. Shaw",
                        position: "D",
                        jersey_number: "23",
                        nationality: "england",
                    },
                    statistics: {
                        total_pass: 14,
                        accurate_pass: 12,
                        total_long_balls: 1,
                        accurate_long_balls: 1,
                        goal_assist: 0,
                        total_cross: 1,
                        accurate_cross: 1,
                        duel_lost: 1,
                        big_chance_created: 1,
                        fouls: 1,
                        minutes_played: 12,
                        touches: 15,
                        rating: 7,
                        possession_lost_ctrl: 2,
                        key_pass: 2,
                    },
                },
                {
                    substitute: true,
                    player: {
                        name: "Kobbie Mainoo",
                        short_name: "K. Mainoo",
                        position: "M",
                        jersey_number: "37",
                        nationality: "england",
                    },
                    statistics: {
                        total_pass: 10,
                        accurate_pass: 9,
                        goal_assist: 0,
                        duel_lost: 2,
                        dispossessed: 1,
                        fouls: 1,
                        minutes_played: 8,
                        touches: 15,
                        rating: 6.4,
                        possession_lost_ctrl: 4,
                    },
                },
                {
                    substitute: true,
                    player: {
                        name: "Tom Heaton",
                        short_name: "T. Heaton",
                        position: "G",
                        jersey_number: "22",
                        nationality: "england",
                    },
                    statistics: {},
                },
                {
                    substitute: true,
                    player: {
                        name: "Harry Maguire",
                        short_name: "H. Maguire",
                        position: "D",
                        jersey_number: "5",
                        nationality: "england",
                    },
                    statistics: {},
                },
                {
                    substitute: true,
                    player: {
                        name: "Ayden Heaven",
                        short_name: "A. Heaven",
                        position: "D",
                        jersey_number: "26",
                        nationality: "england",
                    },
                    statistics: {},
                },
                {
                    substitute: true,
                    player: {
                        name: "Casemiro",
                        short_name: "Casemiro",
                        position: "M",
                        jersey_number: "18",
                        nationality: "brazil",
                    },
                    statistics: {},
                },
            ],
            missing_players: [
                {
                    player: {
                        name: "Jonny Evans",
                        short_name: "J. Evans",
                        position: "D",
                        nationality: "northern ireland",
                        type: "missing",
                    }
                },
                {
                    player: {
                        name: "Toby Collyer",
                        short_name: "T. Collyer",
                        position: "M",
                        jersey_number: "13",
                        nationality: "england",
                        type: "missing",
                    }
                },
                {
                    player: {
                        name: "Amad Diallo",
                        short_name: "A. Diallo",
                        position: "M",
                        jersey_number: "16",
                        nationality: "côte d'ivoire",
                        type: "missing",
                    }
                },
                {
                    player: {
                        name: "Lisandro Martinez",
                        short_name: "L. Martinez",
                        position: "D",
                        jersey_number: "6",
                        nationality: "argentina",
                        type: "missing",
                    }
                },
                {
                    player: {
                        name: "Mathhijs de Ligt",
                        short_name: "M. De Ligt",
                        position: "D",
                        jersey_number: "4",
                        nationality: "netherlands",
                        type: "doubtful",
                    }
                },
                {
                    player: {
                        name: "André Onana",
                        short_name: "A. Onana",
                        position: "D",
                        jersey_number: "24",
                        nationality: "cameroon",
                        type: "missing",
                    }
                },
            ],
        }
    },
    {
        _id: "2",
        referee: {
            referee_name: "Stuart Attwell",
            final_score: 7.3,
            scores: {
                criteria_consistency: 7.3,
                control_discipline: 7.3,
                technical_decisions: 7.3,
                var_use: 7.3,
                posture_communication: 7.3
            }
        },
        date: "13.04.2025",
        time: "15:00",
        stadium: "Stamford Bridge",
        competition_name: "Premier League",
        stage: "32. Rodada",
        statistics: {
            item: [
                {
                    group_name: "Gols",
                    home: "2",
                    away: "2",
                    statistic_type: null,
                },
            ],
        },
        home_team: {
            team_id: "3",
            team_name: "Chelsea Football Club", 
            formations: "4-2-3-1" 
        },
        away_team: {
            team_id: "4",
            team_name: "Ipswich Town",
            formation: "4-2-3-1" 
        }
    },
    {
        _id: "3",
        referee: {
            referee_name: "Andrew Madley",
            final_score: 7.3,
            scores: {
                criteria_consistency: 7.3,
                control_discipline: 7.3,
                technical_decisions: 7.3,
                var_use: 7.3,
                posture_communication: 7.3
            }
        },
        date: "13.04.2025",
        time: "15:00",
        stadium: "Anfield",
        competition_name: "Premier League",
        stage: "32. Rodada",
        statistics: {
            item: [
                {
                    group_name: "Gols",
                    home: "2",
                    away: "1",
                    statistic_type: "positive",
                },
            ],
        },
        home_team: {
            team_id: "5",
            team_name: "FC Liverpool",
            formations: "4-2-3-1",
        },
        away_team: {
            team_id: "6",
            team_name: "Westham United",
            formation: "3-5-2" 
        }
    },
    {
        _id: "4",
        referee: {
            referee_name: "Anthony Taylor",
            final_score: 7.3,
            scores: {
                criteria_consistency: 7.3,
                control_discipline: 7.3,
                technical_decisions: 7.3,
                var_use: 7.3,
                posture_communication: 7.3
            }
        },
        date: "13.04.2025",
        time: "15:00",
        stadium: "Molineux Stadium",
        competition_name: "Premier League",
        stage: "32. Rodada",
        statistics: {
            item: [
                {
                    group_name: "Gols",
                    home: "2",
                    away: "2",
                    statistic_type: "positive",
                },
            ],
        },
        home_team: {
            team_id: "7",
            team_name: "Wolverhampton Wanderers FC",
            formations: "3-4-2-1",
        },
        away_team: {
            team_id: "8",
            team_name: "Tottenham Hotspur",
            formation: "4-3-3" 
        }
    },
    {
        _id: "5",
        referee: {
            referee_name: "Pablo González Fuertes",
            final_score: 7.3,
            scores: {
                criteria_consistency: 7.3,
                control_discipline: 7.3,
                technical_decisions: 7.3,
                var_use: 7.3,
                posture_communication: 7.3
            }
        },
        date: "13.04.2025",
        time: "09:00",
        stadium: "El Sadar",
        competition_name: "LaLiga",
        stage: "31. Rodada",
        statistics: {
            item: [
                {
                    group_name: "Gols",
                    home: "2",
                    away: "1",
                    statistic_type: "positive",
                },
            ],
        },
        home_team: {
            team_id: "9",
            team_name: "CA Osasuna",
            formations: "5-4-1",
        },
        away_team: {
            team_id: "10",
            team_name: "Girona FC",
            formation: "4-2-3-1" 
        }
    },
    {
        _id: "6",
        referee: {
            referee_name: "Cesar Soto Grado",
            final_score: 7.3,
            scores: {
                criteria_consistency: 7.3,
                control_discipline: 7.3,
                technical_decisions: 7.3,
                var_use: 7.3,
                posture_communication: 7.3
            }
        },
        date: "13.04.2025",
        time: "11:15",
        stadium: "Mendizorroza",
        competition_name: "LaLiga",
        stage: "31. Rodada",
        statistics: {
            item: [
                {
                    group_name: "Gols",
                    home: "0",
                    away: "1",
                    statistic_type: "negative"
                }
            ]
        },
        home_team: {
            team_id: "11",
            team_name: "Deportivo Alavés",
            formations: "4-2-3-1"
        },
        away_team: {
            team_id: "12",
            team_name: "Real Madrid CF",
            formation: "4-3-3"
        }
    },
    {
        _id: "7",
        referee: {
            referee_name: "Juan Luis Pulido Santana",
            final_score: 7.3,
            scores: {
                criteria_consistency: 7.3,
                control_discipline: 7.3,
                technical_decisions: 7.3,
                var_use: 7.3,
                posture_communication: 7.3
            }
        },
        date: "13.04.2025",
        time: "13:30",
        stadium: "Benito Villamarín",
        competition_name: "LaLiga",
        stage: "31. Rodada",
        statistics: {
            item: [
                {
                    group_name: "Gols",
                    home: "1",
                    away: "2",
                    statistic_type: "negative"
                }
            ]
        },
        home_team: {
            team_id: "13",
            team_name: "Real Betis Balompié",
            formation: "4-2-3-1"
        },
        away_team: {
            team_id: "14",
            team_name: "FC Villareal",
            formation: "4-4-2"
        }
    },
    {
        _id: "8",
        referee: {
            referee_name: "Adrian Cordero Vega",
            final_score: 7.3,
            scores: {
                criteria_consistency: 7.3,
                control_discipline: 7.3,
                technical_decisions: 7.3,
                var_use: 7.3,
                posture_communication: 7.3
            }
        },
        date: "13.04.2025",
        time: "16:00",
        stadium: "San Mamés",
        competition_name: "LaLiga",
        stage: "31. Rodada",
        statistics: {
            item: [
                {
                    group_name: "Gols",
                    home: "3",
                    away: "1",
                    statistic_type: "positive"
                }
            ]
        },
        home_team: {
            team_id: "15",
            team_name: "Athletic Club de Bilbao",
            formation: "4-2-3-1"
        },
        away_team: {
            team_id: "16",
            team_name: "Rayo Vallecano",
            formation: "4-3-3"
        }
    },
    {
        _id: "9",
        referee: {
            referee_name: "Daniel Schlager",
            referee_id: "10",
            final_score: 7.3,
            scores: {
                criteria_consistency: 7.3,
                control_discipline: 7.3,
                technical_decisions: 7.3,
                var_use: 7.3,
                posture_communication: 7.3
            }
        },
        date: "13.04.2025",
        time: "10:30",
        stadium: "MHPArena Stuttgart",
        competition_name: "Bundesliga",
        stage: "29. Rodada",
        statistics: {
            item: [
                {
                    group_name: "Gols",
                    home: "1",
                    away: "2",
                    statistic_type: "negative",
                }
            ]
        },
        home_team: {
            team_id: "17",
            team_name: "Vfb Stuttgart",
            formation: "4-2-3-1"
        },
        away_team: {
            team_id: "18",
            team_name: "Werder Bremen",
            formation: "3-5-2"
        }
    },
    {
        _id: "10",
        referee: {
            referee_name: "Timo Gerach",
            referee_id: "11",
            final_score: 7.3,
            scores: {
                criteria_consistency: 7.3,
                control_discipline: 7.3,
                technical_decisions: 7.3,
                var_use: 7.3,
                posture_communication: 7.3
            }
        },
        date: "13.04.2025",
        time: "12:30",
        stadium: "Commerzbank Arena",
        competition_name: "Bundesliga",
        stage: "29. Rodada",
        statistics: {
            item: [
                {
                    group_name: "Gols",
                    home: "3",
                    away: "0",
                    statistic_type: "positive",
                }
            ]
        },
        home_team: {
            team_id: "19",
            team_name: "SG Eintracht Frankfurt",
            formation: "4-2-3-1"
        },
        away_team: {
            team_id: "20",
            team_name: "1. FC Heidenheim 1846",
            formation: "3-5-2"
        }
    },
    {
        _id: "11",
        referee: {
            referee_name: "Maurizio Mariani",
            referee_id: "12",
            final_score: 7.3,
            scores: {
                criteria_consistency: 7.3,
                control_discipline: 7.3,
                technical_decisions: 7.3,
                var_use: 7.3,
                posture_communication: 7.3
            }
        },
        date: "13.04.2025",
        time: "7:30",
        stadium: "Gewiss Stadium",
        competition_name: "Serie A",
        stage: "32. Rodada",
        statistics: {
            item: [
                {
                    group_name: "Gols",
                    home: "2",
                    away: "0",
                    statistic_type: "positive",
                }
            ]
        },
        home_team: {
            team_id: "21",
            team_name: "Atalanta BC",
            formation: "3-4-2-1"
        },
        away_team: {
            team_id: "22",
            team_name: "Bologna FC",
            formation: "4-2-3-1"
        }
    },
    {
        _id: "12",
        referee: {
            referee_name: "Gianluca Manganiello",
            referee_id: "13",
            final_score: 7.3,
            scores: {
                criteria_consistency: 7.3,
                control_discipline: 7.3,
                technical_decisions: 7.3,
                var_use: 7.3,
                posture_communication: 7.3
            }
        },
        date: "13.04.2025",
        time: "10:00",
        stadium: "Artemio Franchi",
        competition_name: "Serie A",
        stage: "32. Rodada",
        statistics: {
            item: [
                {
                    group_name: "Gols",
                    home: "0",
                    away: "0",
                    statistic_type: null,
                }
            ]
        },
        home_team: {
            team_id: "23",
            team_name: "ACF Fiorentina",
            formation: "3-5-2"
        },
        away_team: {
            team_id: "24",
            team_name: "Parma Calcio 1913",
            formation: "3-5-2"
        }
    },
    {
        _id: "13",
        referee: {
            referee_name: "Matteo Marchetti",
            referee_id: "14",
            final_score: 7.3,
            scores: {
                criteria_consistency: 7.3,
                control_discipline: 7.3,
                technical_decisions: 7.3,
                var_use: 7.3,
                posture_communication: 7.3
            }
        },
        date: "13.04.2025",
        time: "10:00",
        stadium: "Marcantonio Bentegodi",
        competition_name: "Serie A",
        stage: "32. Rodada",
        statistics: {
            item: [
                {
                    group_name: "Gols",
                    home: "0",
                    away: "0",
                    statistic_type: null,
                }
            ]
        },
        home_team: {
            team_id: "25",
            team_name: "Hellas Verona",
            formation: "3-5-2"
        },
        away_team: {
            team_id: "26",
            team_name: "Genoa",
            formation: "3-4-2-1"
        }
    },
    {
        _id: "14",
        referee: {
            referee_name: "Matteo Marcenaro",
            referee_id: "15",
            final_score: 7.3,
            scores: {
                criteria_consistency: 7.3,
                control_discipline: 7.3,
                technical_decisions: 7.3,
                var_use: 7.3,
                posture_communication: 7.3
            }
        },
        date: "13.04.2025",
        time: "13:00",
        stadium: "Giuseppe Sinigaglia",
        competition_name: "Serie A",
        stage: "32. Rodada",
        statistics: {
            item: [
                {
                    group_name: "Gols",
                    home: "1",
                    away: "0",
                    statistic_type: "positive",
                }
            ]
        },
        home_team: {
            team_id: "27",
            team_name: "Como 1907",
            formation: "4-3-3"
        },
        away_team: {
            team_id: "28",
            team_name: "Torino FC",
            formation: "4-3-2-1"
        }
    },
    {
        _id: "15",
        referee: {
            referee_name: "Simone Sozza",
            referee_id: "16",
            final_score: 7.3,
            scores: {
                criteria_consistency: 7.3,
                control_discipline: 7.3,
                technical_decisions: 7.3,
                var_use: 7.3,
                posture_communication: 7.3
            }
        },
        date: "13.04.2025",
        time: "15:45",
        stadium: "Olimpico di Roma",
        competition_name: "Serie A",
        stage: "32. Rodada",
        statistics: {
            item: [
                {
                    group_name: "Gols",
                    home: "1",
                    away: "1",
                    statistic_type: null,
                }
            ]
        },
        home_team: {
            team_id: "29",
            team_name: "SS Lazio",
            formation: "4-2-3-1"
        },
        away_team: {
            team_id: "30",
            team_name: "AS Roma",
            formation: "4-3-2-1"
        }
    },
    {
        _id: "16",
        referee: {
            referee_id: "17",
            referee_name: "Harm Osmers",
            final_score: 7.2,
            scores: {
                criteria_consistency: 7.2,
                control_discipline: 7.2,
                technical_decisions: 7.2,
                var_use: 7.2,
                posture_communication: 7.2
            }
        },
        date: "14.09.2025",
        time: "10:30",
        stadium: "Millerntor-Stadion",
        competition_name: "Bundesliga",
        stage: "3. Rodada",
        statistics: {
            item: [
                {
                    group_name: "Gols",
                    home: "2",
                    away: "1",
                    statistic_type: "positive"
                }
            ]
        },
        home_team: {
            team_id: "33",
            team_name: "FC St. Pauli",
            formations: "3-4-1-2"
        },
        away_team: {
            team_name: "FC Augsburg",
            team_id: "34",
            formation: "3-4-2-1"
        }
    },
    {
        _id: "17",
        referee: {
            referee_id: "18",
            referee_name: "Dr. Matthias Jöllenbeck",
            final_score: 6.9,
            scores: {
                criteria_consistency: 6.9,
                control_discipline: 6.9,
                technical_decisions: 6.9,
                var_use: 6.9,
                posture_communication: 6.9
            }
        },
        date: "14.09.2025",
        time: "12:30",
        stadium: "Stadion im Borussia-Park",
        competition_name: "Bundesliga",
        stage: "3. Rodada",
        statistics: {
            item: [
                {
                    group_name: "Gols",
                    home: "0",
                    away: "4",
                    statistic_type: "negative"
                }
            ]
        },
        home_team: {
            team_id: "35",
            team_name: "Borussia Mönchengladbach",
            formations: "4-2-3-1"
        },
        away_team: {
            team_name: "Werder Bremen",
            team_id: "18",
            formation: "4-2-3-1"
        }
    },
    {
        _id: "18",
        referee: {
            referee_id: "x",
            referee_name: "Michael Oliver",
            final_score: 6.2,
            scores: {
                criteria_consistency: 6.2,
                control_discipline: 6.2,
                technical_decisions: 6.2,
                var_use: 6.2,
                posture_communication: 6.2
            }
        },
        date: "14.09.2025",
        time: "10:00",
        stadium: "Turf Moor",
        competition_name: "Premier League",
        stage: "4. Rodada",
        statistics: {
            item: [
                {
                    group_name: "Gols",
                    home: "0",
                    away: "1",
                    statistic_type: "negative"
                }
            ]
        },
        home_team: {
            team_id: "36",
            team_name: "FC Burnley",
            formations: "5-4-1"
        },
        away_team: {
            team_name: "FC Liverpool",
            team_id: "5",
            formation: "4-2-3-1"
        }
    },
    {
        _id: "19",
        referee: {
            referee_id: "x",
            referee_name: "Anthony Taylor",
            final_score: 7.2,
            scores: {
                criteria_consistency: 7.2,
                control_discipline: 7.2,
                technical_decisions: 7.2,
                var_use: 7.2,
                posture_communication: 7.2
            }
        },
        date: "14.09.2025",
        time: "12:30",
        stadium: "Etihad Stadium",
        competition_name: "Premier League",
        stage: "4. Rodada",
        statistics: {
            item: [
                {
                    group_name: "Gols",
                    home: "3",
                    away: "0",
                    statistic_type: "tbd"
                }
            ]
        },
        home_team: {
            team_id: "37",
            team_name: "Manchester City FC",
            formations: "4-1-4-1"
        },
        away_team: {
            team_name: "Manchester United FC",
            team_id: "2",
            formation: "3-4-2-1"
        }
    },
    {
        _id: "20",
        referee: {
            referee_id: "x",
            referee_name: "Anthony Taylor",
            final_score: 7.2,
            scores: {
                criteria_consistency: 7.2,
                control_discipline: 7.2,
                technical_decisions: 7.2,
                var_use: 7.2,
                posture_communication: 7.2
            }
        },
        date: "14.09.2025",
        time: "12:30",
        stadium: "Etihad Stadium",
        competition_name: "Premier League",
        stage: "4. Rodada",
        statistics: {
            item: [
                {
                    group_name: "Gols",
                    home: "3",
                    away: "0",
                    statistic_type: "positive"
                }
            ]
        },
        home_team: {
            team_id: "37",
            team_name: "Manchester City FC",
            formations: "4-1-4-1"
        },
        away_team: {
            team_name: "Manchester United FC",
            team_id: "2",
            formation: "3-4-2-1"
        }
    },*/
    {
        "_id": "1",
        "referee": {
            "referee_name": "Donatas Rumšas",
            "final_score": 7.6,
            "scores": {
                "criteria_consistency": 7.6,
                "control_discipline": 7.6,
                "technical_decisions": 7.6,
                "var_use": 7.6,
                "posture_communication": 7.6,
            }
        },
        "date": "16.09.2025",
        "time": "13:45",
        "stadium": "San Mamés",
        "competition_name": "Liga dos Campeões",
        "stage": "Fase de grupos",
        "statistics": {
            "item": [
                {
                    "group_name": "Gols",
                    "home": "0",
                    "away": "2",
                    "statistic_type": "negative"
                }
            ]
        },
        "home_team": {
            "team_name": "Athletic Club de Bilbao",
            "formations": "4-2-3-1"
        },
        "away_team": {
            "team_name": "FC Arsenal",
            "formation": "4-3-3"
        }
    },
    {
        "_id": "2",
        "referee": {
            "referee_name": "Anthony Taylor",
            "final_score": 7.8,
            "scores": {
                "criteria_consistency": 7.8,
                "control_discipline": 7.8,
                "technical_decisions": 7.8,
                "var_use": 7.8,
                "posture_communication": 7.8
            }
        },
        "date": "16.09.2025",
        "time": "13:45",
        "stadium": "Philips Stadion",
        "competition_name": "Liga dos Campeões",
        "stage": "Fase de grupos",
        "statistics": {
            "item": [
                {
                    "group_name": "Gols",
                    "home": "1",
                    "away": "3",
                    "statistic_type": "negative"
                }
            ]
        },
        "home_team": {
            "team_name": "PSV Eindhoven",
            "formations": "4-2-3-1"
        },
        "away_team": {
            "team_name": "Union Saint-Gilloise",
            "formation": "3-4-1-2"
        }
    },
    {
        "_id": "3",
        "referee": {
            "referee_name": "François Letexier",
            "final_score": 7.8,
            "scores": {
                "criteria_consistency": 7.8,
                "control_discipline": 7.8,
                "technical_decisions": 7.8,
                "var_use": 7.8,
                "posture_communication": 7.8
            }
        },
        "date": "16.09.2025",
        "time": "16:00",
        "stadium": "Allianz Stadium",
        "competition_name": "Liga dos Campeões",
        "stage": "Fase de grupos",
        "statistics": {
            "item": [
                {
                    "group_name": "Gols",
                    "home": "4",
                    "away": "4",
                    "statistic_type": "null"
                }
            ]
        },
        "home_team": {
            "team_name": "Juventus FC",
            "formations": "3-4-2-1",
            "players": [
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Michele Di Gregorio",
                        "jersey_number": "16",
                        "nationality": "italy"
                    },
                    "statistics": {
                        "minutes_played": 90
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Pierre Kalulu",
                        "jersey_number": "15",
                        "nationality": "france"
                    },
                    "statistics": {
                        "minutes_played": 90,
                        "goal_assist": 1
                    }
                },
                {
                    "substitute": false,
                    "captain": true,
                    "player": {
                        "name": "Bremer",
                        "jersey_number": "3",
                        "nationality": "brazil"
                    },
                    "statistics": {
                        "minutes_played": 90
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Lloyd Kelly",
                        "jersey_number": "6",
                        "nationality": "england"
                    },
                    "statistics": {
                        "minutes_played": 90,
                        "goals": 1
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Weston McKennie",
                        "jersey_number": "22",
                        "nationality": "united_states"
                    },
                    "statistics": {
                        "minutes_played": 60,
                        "hooked": 60
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Khéphren Thuram",
                        "jersey_number": "19",
                        "nationality": "france"
                    },
                    "statistics": {
                        "minutes_played": 90
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Teun Koopmeiners",
                        "jersey_number": "8",
                        "nationality": "netherlands"
                    },
                    "statistics": {
                        "minutes_played": 69,
                        "hooked": 69
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Andrea Cambiaso",
                        "jersey_number": "27",
                        "nationality": "italy"
                    },
                    "statistics": {
                        "minutes_played": 90
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Jonathan David",
                        "jersey_number": "30",
                        "nationality": "canada"
                    },
                    "statistics": {
                        "minutes_played": 60,
                        "hooked": 60
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Lois Openda",
                        "jersey_number": "20",
                        "nationality": "belgium"
                    },
                    "statistics": {
                        "minutes_played": 69,
                        "hooked": 69
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Kenan Yildiz",
                        "jersey_number": "10",
                        "nationality": "turkey"
                    },
                    "statistics": {
                        "minutes_played": 87,
                        "hooked": 87,
                        "goals": 1,
                        "goal_assist": 1
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "João Mário",
                        "jersey_number": "25",
                        "nationality": "portugal"
                    },
                    "statistics": {
                        "minutes_played": 30,
                        "entered": 60,
                        "goal_assist": 1
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Vasilije Adzic",
                        "jersey_number": "17",
                        "nationality": "montenegro"
                    },
                    "statistics": {
                        "minutes_played": 21,
                        "entered": 69
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Manuel Locatelli",
                        "jersey_number": "5",
                        "nationality": "italy"
                    },
                    "statistics": {
                        "minutes_played": 21,
                        "entered": 69
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Edon Zhegrova",
                        "jersey_number": "11",
                        "nationality": "kosovo"
                    },
                    "statistics": {
                        "minutes_played": 3,
                        "entered": 87
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Dusan Vlahovic",
                        "jersey_number": "9",
                        "nationality": "serbia"
                    },
                    "statistics": {
                        "minutes_played": 30,
                        "entered": 60,
                        "goals": 2,
                        "goal_assist": 1
                    }
                }
            ]
        },
        "away_team": {
            "team_name": "Borussia Dortmund",
            "formation": "3-4-2-1",
            "players": [
                {
                    "substitute": false,
                    "captain": true,
                    "player": {
                        "name": "Gregor Kobel",
                        "jersey_number": "1",
                        "nationality": "switzerland"
                    },
                    "statistics": {
                        "minutes_played": 90
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Julian Ryerson",
                        "jersey_number": "26",
                        "nationality": "norway"
                    },
                    "statistics": {
                        "minutes_played": 90
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Waldemar Anton",
                        "jersey_number": "3",
                        "nationality": "germany"
                    },
                    "statistics": {
                        "minutes_played": 90,
                        "yellow_card": true
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Ramy Bensebaini",
                        "jersey_number": "5",
                        "nationality": "algeria"
                    },
                    "statistics": {
                        "minutes_played": 90,
                        "goals": 1
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Yan Couto",
                        "jersey_number": "2",
                        "nationality": "brazil"
                    },
                    "statistics": {
                        "minutes_played": 90,
                        "goals": 1
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Marcel Sabitzer",
                        "jersey_number": "20",
                        "nationality": "austria"
                    },
                    "statistics": {
                        "minutes_played": 90,
                        "goal_assist": 1
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Felix Nmecha",
                        "jersey_number": "8",
                        "nationality": "germany"
                    },
                    "statistics": {
                        "minutes_played": 71,
                        "hooked": 71,
                        "goals": 1
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Daniel Svensson",
                        "jersey_number": "24",
                        "nationality": "sweden"
                    },
                    "statistics": {
                        "minutes_played": 90
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Karim Adeyemi",
                        "jersey_number": "27",
                        "nationality": "germany"
                    },
                    "statistics": {
                        "minutes_played": 90,
                        "goals": 1,
                        "goal_assist": 1
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Serhou Guirassy",
                        "jersey_number": "9",
                        "nationality": "guinea"
                    },
                    "statistics": {
                        "minutes_played": 90,
                        "hooked": 90,
                        "goal_assist": 1
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Maximilian Beier",
                        "jersey_number": "14",
                        "nationality": "germany"
                    },
                    "statistics": {
                        "minutes_played": 71,
                        "hooked": 71
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Julian Brandt",
                        "jersey_number": "10",
                        "nationality": "germany"
                    },
                    "statistics": {
                        "minutes_played": 19,
                        "entered": 71
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Jobe Bellingham",
                        "jersey_number": "7",
                        "nationality": "england"
                    },
                    "statistics": {
                        "minutes_played": 19,
                        "entered": 71
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Pascal Gross",
                        "jersey_number": "13",
                        "nationality": "germany"
                    },
                    "statistics": {
                        "minutes_played": 0,
                        "entered": 90
                    }
                }
            ]
        }
    },
    {
        "_id": "4",
        "referee": {
            "referee_name": "Irfan Peljto",
            "final_score": 7.8,
            "scores": {
                "criteria_consistency": 7.8,
                "control_discipline": 7.8,
                "technical_decisions": 7.8,
                "var_use": 7.8,
                "posture_communication": 7.8
            }
        },
        "date": "16.09.2025",
        "time": "16:00",
        "stadium": "Santiago Bernabéu",
        "competition_name": "Liga dos Campeões",
        "stage": "Fase de grupos",
        "statistics": {
            "item": [
                {
                    "group_name": "Gols",
                    "home": "2",
                    "away": "1",
                    "statistic_type": "positive"
                }
            ]
        },
        "home_team": {
            "team_name": "Real Madrid CF",
            "formations": "4-2-3-1",
            "players": [
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Courtois",
                        "jersey_number": "1",
                        "nationality": "belgium"
                    },
                    "statistics": {
                        "minutes_played": 90
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Trent",
                        "jersey_number": "12",
                        "nationality": "england"
                    },
                    "statistics": {
                        "minutes_played": 5,
                        "hooked": 5
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Huijsen",
                        "jersey_number": "24",
                        "nationality": "spain"
                    },
                    "statistics": {
                        "minutes_played": 90
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "É. Militão",
                        "jersey_number": "3",
                        "nationality": "brazil"
                    },
                    "statistics": {
                        "minutes_played": 90,
                        "yellow_card": true
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Á. Carreras",
                        "jersey_number": "18",
                        "nationality": "spain"
                    },
                    "statistics": {
                        "minutes_played": 90,
                        "yellow_card": true
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Tchouaméni",
                        "jersey_number": "14",
                        "nationality": "france"
                    },
                    "statistics": {
                        "minutes_played": 90,
                        "yellow_card": true
                    }
                },
                {
                    "substitute": false,
                    "captain": true,
                    "player": {
                        "name": "Valverde",
                        "jersey_number": "8",
                        "nationality": "uruguay"
                    },
                    "statistics": {
                        "minutes_played": 90
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Mastantuono",
                        "jersey_number": "30",
                        "nationality": "argentina"
                    },
                    "statistics": {
                        "minutes_played": 63,
                        "hooked": 63
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Arda Güler",
                        "jersey_number": "15",
                        "nationality": "turkey"
                    },
                    "statistics": {
                        "minutes_played": 73,
                        "hooked": 73
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "br_motm": true,
                    "player": {
                        "name": "Rodrygo",
                        "jersey_number": "11",
                        "nationality": "brazil",
                    },
                    "statistics": {
                        "minutes_played": 63,
                        "hooked": 63,
                        "penalty_suffered": 1,
                        "dribble_attempt": 3,
                        "successful_dribble_attempt": 2
                    },
                },
                {
                    "substitute": false,
                    "captain": false,
                    "motm": true,
                    "player": {
                        "name": "Mbappé",
                        "jersey_number": "10",
                        "nationality": "france",
                    },
                    "statistics": {
                        "minutes_played": 90,
                        "goals": 2,
                        "scoring_attempt": 10,
                        "on_goal_scoring_attempt": 5,
                        "dribble_attempt": 6,
                        "successful_dribble_attempt": 4
                    },
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Carvajal",
                        "jersey_number": "2",
                        "nationality": "spain"
                    },
                    "statistics": {
                        "minutes_played": 85,
                        "entered": 5,
                        "red_card": true
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Asencio",
                        "jersey_number": "17",
                        "nationality": "spain"
                    },
                    "statistics": {
                        "minutes_played": 17,
                        "entered": 73
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Brahim",
                        "jersey_number": "21",
                        "nationality": "morocco"
                    },
                    "statistics": {
                        "minutes_played": 27,
                        "entered": 63
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Vini Jr.",
                        "jersey_number": "7",
                        "nationality": "brazil"
                    },
                    "statistics": {
                        "minutes_played": 27,
                        "entered": 63
                    }
                }
            ]
        },
        "away_team": {
            "team_name": "Olympique Marselha",
            "formation": "4-2-3-1",
            "players": [
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Gerónimo Rulli",
                        "jersey_number": "1",
                        "nationality": "argentina"
                    },
                    "statistics": {
                        "minutes_played": 90
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Benjamin Pavard",
                        "jersey_number": "28",
                        "nationality": "france"
                    },
                    "statistics": {
                        "minutes_played": 88,
                        "hooked": 88,
                        "yellow_card": true
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Facundo Medina",
                        "jersey_number": "32",
                        "nationality": "argentina"
                    },
                    "statistics": {
                        "minutes_played": 90,
                        "yellow_card": true
                    }
                },
                {
                    "substitute": false,
                    "captain": true,
                    "player": {
                        "name": "Leonardo Balerdi",
                        "jersey_number": "5",
                        "nationality": "argentina"
                    },
                    "statistics": {
                        "minutes_played": 90
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Emerson Palmieri",
                        "jersey_number": "33",
                        "nationality": "italy"
                    },
                    "statistics": {
                        "minutes_played": 78,
                        "hooked": 78
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Geoffrey Kondogbia",
                        "jersey_number": "19",
                        "nationality": "central_african_republic"
                    },
                    "statistics": {
                        "minutes_played": 67,
                        "hooked": 67
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Pierre Hojbjerg",
                        "jersey_number": "23",
                        "nationality": "denmark"
                    },
                    "statistics": {
                        "minutes_played": 90
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Mason Greenwood",
                        "jersey_number": "10",
                        "nationality": "england"
                    },
                    "statistics": {
                        "minutes_played": 90,
                        "goal_assist": 1,
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Matt O'Riley",
                        "jersey_number": "17",
                        "nationality": "denmark"
                    },
                    "statistics": {
                        "minutes_played": 66,
                        "hooked": 66
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Timothy Weah",
                        "jersey_number": "22",
                        "nationality": "united_states"
                    },
                    "statistics": {
                        "minutes_played": 78,
                        "hooked": 78,
                        "goals": 1
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Pierre Aubameyang",
                        "jersey_number": "97",
                        "nationality": "gabon"
                    },
                    "statistics": {
                        "minutes_played": 90
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Michael Murillo",
                        "jersey_number": "62",
                        "nationality": "panama"
                    },
                    "statistics": {
                        "minutes_played": 12,
                        "entered": 78
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "CJ Egan-Riley",
                        "jersey_number": "4",
                        "nationality": "england"
                    },
                    "statistics": {
                        "minutes_played": 2,
                        "entered": 88
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Arthur Vermeeren",
                        "jersey_number": "18",
                        "nationality": "belgium"
                    },
                    "statistics": {
                        "minutes_played": 23,
                        "entered": 67
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Igor Paixão",
                        "jersey_number": "14",
                        "nationality": "brazil"
                    },
                    "statistics": {
                        "minutes_played": 24,
                        "entered": 66
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Amine Gouiri",
                        "jersey_number": "9",
                        "nationality": "algeria"
                    },
                    "statistics": {
                        "minutes_played": 12,
                        "entered": 78
                    }
                }
            ]
        }
    },
    {
        "_id": "5",
        "referee": {
            "referee_name": "Erik Lambrechts",
            "final_score": 7.8,
            "scores": {
                "criteria_consistency": 7.8,
                "control_discipline": 7.8,
                "technical_decisions": 7.8,
                "var_use": 7.8,
                "posture_communication": 7.8
            }
        },
        "date": "16.09.2025",
        "time": "16:00",
        "stadium": "Estádio da Luz",
        "competition_name": "Liga dos Campeões",
        "stage": "Fase de grupos",
        "statistics": {
            "item": [
                {
                    "group_name": "Gols",
                    "home": "2",
                    "away": "3",
                    "statistic_type": "negative"
                }
            ]
        },
        "home_team": {
            "team_name": "SL Benfica",
            "formations": "4-2-3-1"
        },
        "away_team": {
            "team_name": "Qarabağ FK",
            "formation": "4-2-3-1"
        }
    },
    {
        "_id": "6",
        "referee": {
            "referee_name": "Rade Obrenovic",
            "final_score": 7.8,
            "scores": {
                "criteria_consistency": 7.8,
                "control_discipline": 7.8,
                "technical_decisions": 7.8,
                "var_use": 7.8,
                "posture_communication": 7.8
            }
        },
        "date": "16.09.2025",
        "time": "16:00",
        "stadium": "Tottenham Hotspur Stadium",
        "competition_name": "Liga dos Campeões",
        "stage": "Fase de grupos",
        "statistics": {
            "item": [
                {
                    "group_name": "Gols",
                    "home": "1",
                    "away": "0",
                    "statistic_type": "positive"
                }
            ]
        },
        "home_team": {
            "team_name": "Tottenham Hotspur",
            "formations": "4-3-3",
            "players": [
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Guglielmo Vicario",
                        "jersey_number": "1",       
                        "nationality": "italy"      
                    },
                    "statistics": {
                        "minutes_played": 90        
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Djed Spence",      
                        "jersey_number": "24",      
                        "nationality": "england" 
                    },
                    "statistics": {
                        "minutes_played": 69,       
                        "hooked": 69
                    }
                },
                {
                    "substitute": false,
                    "captain": true,
                    "player": {
                        "name": "Cristián Romero",  
                        "jersey_number": "17",      
                        "nationality": "argentina"  
                    },
                    "statistics": {
                        "minutes_played": 90        
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Pedro Porro",
                        "jersey_number": "23",
                        "nationality": "spain"
                    },
                    "statistics": {
                        "minutes_played": 90
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Micky van de Ven",
                        "jersey_number": "37",
                        "nationality": "netherlands"
                    },
                    "statistics": {
                        "minutes_played": 90,
                        "yellow_card": true
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Xavi Simons",
                        "jersey_number": "7",
                        "nationality": "netherlands"
                    },
                    "statistics": {
                        "minutes_played": 77,
                        "hooked": 77,
                        "yellow_card": true
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Lucas Bergvall",
                        "jersey_number": "15",
                        "nationality": "sweden"
                    },
                    "statistics": {
                        "minutes_played": 90,
                        "hooked": 90
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Pape Sarr",
                        "jersey_number": "29",
                        "nationality": "senegal"
                    },
                    "statistics": {
                        "minutes_played": 69,
                        "hooked": 69
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Rodrigo Bentancur",
                        "jersey_number": "30",
                        "nationality": "uruguay"
                    },
                    "statistics": {
                        "minutes_played": 90
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Mohammed Kudus",
                        "jersey_number": "20",
                        "nationality": "ghana"
                    },
                    "statistics": {
                        "minutes_played": 90
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Richarlison",
                        "jersey_number": "9",
                        "nationality": "brazil"
                    },
                    "statistics": {
                        "minutes_played": 77,
                        "hooked": 77,
                        "yellow_card": true
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Kevin Danso",
                        "jersey_number": "4",
                        "nationality": "austria"
                    },
                    "statistics": {
                        "minutes_played": 0,
                        "entered": 90
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Destiny Udogie",
                        "jersey_number": "13",
                        "nationality": "italy"
                    },
                    "statistics": {
                        "minutes_played": 21,
                        "entered": 69
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "João Palhinha",
                        "jersey_number": "6",
                        "nationality": "portugal"
                    },
                    "statistics": {
                        "minutes_played": 21,
                        "entered": 69
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Randal Kolo Muani",
                        "jersey_number": "39",
                        "nationality": "france"
                    },
                    "statistics": {
                        "minutes_played": 13,
                        "entered": 77,
                        "yellow_card": true
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Brennan Johnson",
                        "jersey_number": "22",
                        "nationality": "wales"
                    },
                    "statistics": {
                        "minutes_played": 13,
                        "entered": 77
                    }
                }
            ]
        },
        "away_team": {
            "team_name": "FC Villarreal",
            "formation": "4-4-2",
            "players": [
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Luiz Júnior",
                        "jersey_number": "1",
                        "nationality": "brazil"
                    },
                    "statistics": {
                        "minutes_played": 90,
                        "own_goal": 1
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Santiago Mouriño",
                        "jersey_number": "15",
                        "nationality": "uruguay"
                    },
                    "statistics": {
                        "minutes_played": 90,
                        "yellow_card": true
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Renato Veiga",
                        "jersey_number": "12",
                        "nationality": "portugal"
                    },
                    "statistics": {
                        "minutes_played": 90,
                        "yellow_card": true
                    }
                },
                {
                    "substitute": false,
                    "captain": true,
                    "player": {
                        "name": "Juan Foyth",
                        "jersey_number": "8",
                        "nationality": "argentina"
                    },
                    "statistics": {
                        "minutes_played": 90
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Sergi Cardona",
                        "jersey_number": "23",
                        "nationality": "spain"
                    },
                    "statistics": {
                        "minutes_played": 75,
                        "hooked": 75
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Pape Gueye",
                        "jersey_number": "18",
                        "nationality": "senegal"
                    },
                    "statistics": {
                        "minutes_played": 78,
                        "hooked": 78
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Santi Comesaña",
                        "jersey_number": "14",
                        "nationality": "spain"
                    },
                    "statistics": {
                        "minutes_played": 78,
                        "hooked": 78,
                        "yellow_card": true
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Tajon Buchanan",
                        "jersey_number": "17",
                        "nationality": "canada"
                    },
                    "statistics": {
                        "minutes_played": 82,
                        "hooked": 82
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Nicolas Pépé",
                        "jersey_number": "19",
                        "nationality": "cote_divoire"
                    },
                    "statistics": {
                        "minutes_played": 90
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Georges Mikautadze",
                        "jersey_number": "9",
                        "nationality": "georgia"
                    },
                    "statistics": {
                        "minutes_played": 90
                    }
                },
                {
                    "substitute": false,
                    "captain": false,
                    "player": {
                        "name": "Ayoze Pérez",
                        "jersey_number": "22",
                        "nationality": "spain"
                    },
                    "statistics": {
                        "minutes_played": 75,
                        "hooked": 75
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Alfonso Pedraza",
                        "jersey_number": "24",
                        "nationality": "spain"
                    },
                    "statistics": {
                        "minutes_played": 15,
                        "entered": 75
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Thomas Partey",
                        "jersey_number": "16",
                        "nationality": "ghana"
                    },
                    "statistics": {
                        "minutes_played": 12,
                        "entered": 78
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Dani Parejo",
                        "jersey_number": "10",
                        "nationality": "spain"
                    },
                    "statistics": {
                        "minutes_played": 12,
                        "entered": 78
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Alberto Moleiro",
                        "jersey_number": "20",
                        "nationality": "spain"
                    },
                    "statistics": {
                        "minutes_played": 8,
                        "entered": 82
                    }
                },
                {
                    "substitute": true,
                    "captain": false,
                    "player": {
                        "name": "Ilias Akhomach",
                        "jersey_number": "11",
                        "nationality": "morocco"
                    },
                    "statistics": {
                        "minutes_played": 15,
                        "entered": 75
                    }
                }
            ]
        }
    },
];