import React from 'react';
import './ScheduleTable.css';

const WHATSAPP_LINK = "https://wa.me/40751327415"; // Înlocuiește cu numărul tău real

const scheduleData = [
    {
        hall: "Sala Mare - 1",
        days: {
            "Luni": [
                { time: "18:00", name: "Kizomba Beginner", instr: "Cris", level: "Începători" },
                { time: "19:00", name: "Kizomba Avansați", instr: "Cris", level: "Avansați" },
                { time: "20:00", name: "Kizomba Improver", instr: "Cris", level: "Intermediari" }
            ],
            "Marți": [
                { time: "18:00", name: "Copii 7-9 Ani (Grupa A)", instr: "Ady", level: "Copii" },
                { time: "19:00", name: "Salsa Intermediari - Avansați", instr: "Alex M - Cris", level: "Intermediari/Avansați" },
                { time: "20:00", name: "Bachata Improver", instr: "Alex L", level: "Intermediari" },
                { time: "21:00", name: "Trupa DXS", instr: "", level: "Performanță" }
            ],
            "Miercuri": [
                { time: "18:00", name: "Kizomba Beginner", instr: "Cris", level: "Începători" },
                { time: "19:00", name: "Kizomba Avansați", instr: "Cris", level: "Avansați" },
                { time: "20:00", name: "Kizomba Improver", instr: "Cris", level: "Intermediari" },
                { time: "21:00", name: "Trupa DXS", instr: "", level: "Performanță" }
            ],
            "Joi": [
                { time: "18:00", name: "Copii 7-9 Ani (Grupa A)", instr: "Ady", level: "Copii" },
                { time: "19:00", name: "Salsa Intermediari - Avansați", instr: "Alex M + Cris", level: "Intermediari/Avansați" },
                { time: "20:00", name: "Bachata Improver", instr: "Alex L", level: "Intermediari" },
                { time: "22:00", name: "Practice Party", instr: "", level: "Acces Liber" }
            ],
            "Vineri": []
        }
    },
    {
        hall: "Sala Mare - 2",
        days: {
            "Luni": [],
            "Marți": [
                { time: "20:00", name: "Începători Mixt - Grupa 1", instr: "Alex M + Cris", level: "Începători" }
            ],
            "Miercuri": [],
            "Joi": [
                { time: "20:00", name: "Începători Mixt - Grupa 1", instr: "Alex M + Cris", level: "Începători" },
                { time: "22:00", name: "Practice Party", instr: "", level: "Acces Liber" }
            ],
            "Vineri": []
        }
    },
    {
        hall: "Sala Mică",
        days: {
            "Luni": [
                { time: "17:00", name: "Copii 4-6 Ani", instr: "Cris", level: "Copii" },
                { time: "19:00", name: "Copii 10-14 Ani", instr: "Alex", level: "Copii" },
                { time: "20:00", name: "Curs Studenți", instr: "Ady + Allisor", level: "Acces Liber" }
            ],
            "Marți": [
                { time: "17:00", name: "Copii 7-9 Ani", instr: "Ady", level: "Copii" },
                { time: "18:00", name: "Copii 4-6 Ani", instr: "Allisor", level: "Copii" },
                { time: "19:00", name: "Începători Mixt", instr: "Alex L + Allisor", level: "Start 20 Ianuarie" },
                { time: "20:00", name: "Bachata Intermediari", instr: "Ady + Allisor", level: "Intermediari" },
                { time: "21:00", name: "Trupa DXS", instr: "", level: "Performanță" }
            ],
            "Miercuri": [
                { time: "17:00", name: "Copii 4-6 Ani", instr: "Cris", level: "Copii" },
                { time: "19:00", name: "Copii 10-14 Ani", instr: "Alex L", level: "Copii" },
                { time: "20:00", name: "Curs Studenți", instr: "Ady + Allisor", level: "Acces Liber" },
                { time: "21:00", name: "Trupa DXS", instr: "", level: "Performanță" }
            ],
            "Joi": [
                { time: "17:00", name: "Copii 7-9 Ani", instr: "Ady", level: "Copii" },
                { time: "18:00", name: "Copii 4-6 Ani", instr: "Allisor", level: "Copii" },
                { time: "19:00", name: "Începători Mixt", instr: "Alex L + Allisor", level: "Start 20 Ianuarie" },
                { time: "20:00", name: "Bachata Intermediari", instr: "Ady + Allisor", level: "Intermediari" },
                { time: "22:00", name: "Practice Party", instr: "", level: "Acces Liber" }
            ],
            "Vineri": []
        }
    }
];

function ScheduleTable() {
    const goToWhatsApp = () => {
        window.open(WHATSAPP_LINK, '_blank');
    };

    return (
        <section className="schedule-section">
            <h2 className="section-heading-dark">Program Cursuri</h2>

            {scheduleData.map((hallGroup) => (
                <div key={hallGroup.hall} className="hall-container">
                    <h3 className="hall-header">{hallGroup.hall}</h3>
                    <div className="schedule-table-container">
                        {Object.entries(hallGroup.days).map(([day, classes]) => (
                            <div key={day} className="day-column">
                                <h4 className="day-title">{day}</h4>
                                <div className="class-list">
                                    {classes.length > 0 ? (
                                        classes.map((item, index) => (
                                            <div 
                                                key={index} 
                                                onClick={goToWhatsApp}
                                                className="class-card"
                                                style={{ cursor: 'pointer' }}
                                            >
                                                <span className="class-time">{item.time}</span>
                                                <p className="class-name">{item.name}</p>
                                                <span className="class-instr">{item.instr}</span>
                                                <span className="class-level-tag">{item.level}</span>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="empty-day">Fără cursuri</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

    
        </section>
    );
}

export default ScheduleTable;