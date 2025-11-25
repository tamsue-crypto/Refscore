import "../styles/match-formatting.css";
import { matches } from "../data/matches.js";
import { teams } from "../data/teams.js";
import { referees } from "../data/referees.js";
import { championships } from "../data/championships.js";
import { Link } from "react-router-dom";

export default function TodayMatchesList({day, style}) {
    let matchesToDisplay = matches.filter(match => match.date === day);

    if (matchesToDisplay.length === 0) {
        // finding all available dates
        const availableDates = [...new Set(matches.map(match => match.date))].sort();

        // converting for comparation
        const dateFormatted = day.split('.').reverse().join('');
        const formattedDates = availableDates.map(d => d.split('.').reverse().join(''));

        // finding closest date
        let closestDate = formattedDates.reduce((prev, curr) => Math.abs(curr - dateFormatted) < Math.abs(prev - dateFormatted) ? curr : prev);

        // converting back to the xx.xx.xxxx system
        const closestDateFormatted = closestDate.substring(6, 8) + '.' + closestDate.substring(4, 6) + '.' + closestDate.substring(0, 4);

        // filtering to show the matches with closest date
        matchesToDisplay = matches.filter(match => match.date === closestDateFormatted);
    }

    function getTeam(id) {
        return teams.find(t => t.name === id);
    }

    function getRef(id) {
        return referees.find(r => r.name === id);
    }

    const groupedMatches = matchesToDisplay.reduce((acc, match) => {
        const { competition_name } = match;
        if (!acc[competition_name]) {
            acc[competition_name] = [];
        }
        acc[competition_name].push(match);
        return acc;
    }, {});

    return (
        <>
            <div id="matches-container" style={style}>
                {championships.map((competition) => {
                    const matchList = groupedMatches[competition.name];

                    // verify if there are matches for this championship before rendering
                    if (!matchList || matchList.length === 0) {
                        return null;
                    }

                    return (
                        <div key={competition.id} className="matches-championship-container">
                            <section className={`championship-header ${competition.className}`}>
                                <img src={process.env.PUBLIC_URL + `${competition.logo}`} className="championship-logo" alt={`${competition.name} logo`} />
                                <span className={`championship-name ${competition.className}`}>{competition.name}</span>
                            </section>

                            <section className="matches">
                                <ul className="list">
                                    {matchList.map((match) => {
                                        const home = getTeam(match.home_team.team_name);
                                        const away = getTeam(match.away_team.team_name);
                                        const ref = getRef(match.referee.referee_name);

                                        const goals = match.statistics?.item?.find((stat) => stat.group_name === "Gols");
                                        const homeGoals = goals?.home ?? "";
                                        const awayGoals = goals?.away ?? "";
                                        const matchWinner = match.statistics?.item?.find((stat) => stat.statistic_type).statistic_type

                                        return (
                                            <li key={match._id}>
                                                <Link to={`/match/${match._id}`}>
                                                    <div className="match-container">
                                                        <div className="match">
                                                            <div className="home-team">
                                                                <span>{home.team_code}</span>
                                                                <img src={process.env.PUBLIC_URL + `/images/club_badges/${home.badge}`} alt={`${home.team_code} badge`} />
                                                            </div>
                                                            {homeGoals === "" || awayGoals === "" ? (
                                                                <span className="scoreboard">
                                                                    {match.time}
                                                                    <small>{match.date}</small>
                                                                </span>
                                                            ) : (
                                                                <span className={`scoreboard ${matchWinner}`}>
                                                                    <span>{homeGoals}</span>
                                                                    -
                                                                    <span>{awayGoals}</span>
                                                                </span>
                                                            )}
                                                            <div className="away-team">
                                                                <img src={process.env.PUBLIC_URL + `/images/club_badges/${away.badge}`} alt={`${away.team_code} badge`} />
                                                                <span>{away.team_code}</span>
                                                            </div>
                                                        </div>

                                                        <small className="referee-name">
                                                            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1.97562 0.5C1.77586 0.5 1.51639 0.585588 1.14546 0.80822C1.29272 0.969153 1.4487 1.14119 1.757 1.4701C1.97169 1.69913 2.18838 1.92691 2.35205 2.09184C2.35346 2.09328 2.35409 2.09373 2.35547 2.09513L3.50257 1.47876L2.95854 0.992458C2.53926 0.669217 2.26628 0.515846 2.01476 0.501169C2.00195 0.500412 1.98895 0.5 1.97562 0.5ZM6.43424 1.01841C6.40138 1.01807 6.36863 1.0182 6.33611 1.01875C5.94772 1.02539 5.58607 1.0954 5.34317 1.20519L2.8457 2.54703C2.93667 2.56573 3.02708 2.58814 3.11627 2.61647C3.7577 2.82006 4.34503 3.24284 4.95675 3.8092L12.9933 11.1478L16 9.62049L8.09434 1.52902C7.77294 1.25953 7.25928 1.08533 6.73192 1.03426C6.63252 1.02463 6.53279 1.01947 6.4342 1.01844L6.43424 1.01841ZM0.655339 1.23204C0.00396015 1.94434 -0.108434 2.51022 0.0862783 3.19142C0.111972 3.28141 0.199786 3.40993 0.32291 3.5513C0.404411 3.44323 0.491854 3.33462 0.586016 3.22552C0.734167 3.05382 0.897355 2.90987 1.07187 2.79386L1.06793 2.78699L1.17071 2.73165C1.22098 2.70202 1.27208 2.67459 1.32406 2.6494L1.76472 2.41257C1.6097 2.25383 1.43278 2.06826 1.25221 1.8756C1.03106 1.63966 0.816559 1.40744 0.655339 1.23204ZM7.49079 1.69394L9.65976 3.8137C7.94857 3.64057 7.55113 4.26742 7.09676 4.98925L4.96793 2.95081L7.49079 1.69394ZM2.34514 3.10501C2.31863 3.10446 2.29205 3.10446 2.26531 3.10507C2.00629 3.11126 1.7378 3.17581 1.43909 3.30736C1.3264 3.38607 1.21668 3.48596 1.10826 3.61162C0.151405 4.72063 -0.0223654 5.64426 0.162024 6.48096C0.346377 7.31769 0.924534 8.08465 1.56986 8.7652C2.06422 9.28656 2.64144 9.58987 3.36965 9.72523C4.09792 9.86066 4.98252 9.81831 6.04229 9.60578C7.27673 9.3583 8.49327 9.8952 9.59976 10.5567C10.5695 11.1365 11.4814 11.8316 12.2353 12.2736L12.5617 11.6228L4.48504 4.24742L4.48423 4.24666C3.90781 3.71306 3.38647 3.35624 2.89943 3.20166C2.71303 3.14247 2.53091 3.10906 2.34514 3.10501ZM15.975 10.339L13.2477 11.7243L12.8586 12.5L15.4887 11.1797L15.9749 10.339L15.975 10.339Z" fill="black" />
                                                            </svg>
                                                            {ref.nationality === "Espanha" ? (
                                                                <span>{`: ${ref.second_name}`}</span>
                                                            ) : (
                                                                <span>{`: ${ref.name}`}</span>
                                                            )}
                                                            <img src={process.env.PUBLIC_URL + `/images/flag/${ref.nationality}.png`} alt={`${ref.nationality} flag`} />
                                                        </small>
                                                    </div>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className="btn-area">
                                    <button className="general-btn">
                                        <span>Ver todos os jogos</span>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6666 6.99998H2.33329M11.6666 6.99998L9.33329 9.33331M11.6666 6.99998L9.33329 4.66665" stroke="white" strokeWidth="1.83444" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </section>
                        </div>
                    );
                })}
            </div>
        </>
    );
}