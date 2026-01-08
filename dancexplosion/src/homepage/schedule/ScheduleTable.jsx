import React from 'react';
import './ScheduleTable.css';

const scheduleData = [
    { day: "Luni", time: "19:00 - 20:00", name: "Bachata Beginner", level: "Beginner", link: "#bachata" },
    { day: "Luni", time: "20:00 - 21:00", name: "Salsa Improver", level: "Improver", link: "#salsa" },
    { day: "Marți", time: "18:00 - 19:00", name: "Clasă Mixtă", level: "Beginner", link: "#mixed" }, 
    { day: "Marți", time: "19:00 - 20:00", name: "Kizomba Beginner", level: "Beginner", link: "#kizomba" },
    { day: "Miercuri", time: "19:00 - 20:30", name: "Salsa Intermediate", level: "Intermediate", link: "#salsa" },
    { day: "Joi", time: "18:30 - 19:30", name: "Bachata Sensual", level: "Intermediate", link: "#bachata" },
    { day: "Joi", time: "19:30 - 20:30", name: "Urban Kizz Flow", level: "Improver", link: "#kizomba" },
    { day: "Vineri", time: "19:00 - 21:00", name: "Bachata", level: "Open", free: true },
];

function ScheduleTable({ openInscriere }) {
    const groupedSchedule = scheduleData.reduce((acc, current) => {
        (acc[current.day] = acc[current.day] || []).push(current);
        return acc;
    }, {});

    return (
        <section className="schedule-section">
            <h2 className="section-heading-dark">Orarul Claselor</h2>
            <p className="schedule-subtitle">Găsește-ți nivelul și rezervă o clasă de probă!</p>

            <div className="schedule-table-container">
                {Object.entries(groupedSchedule).map(([day, classes]) => (
                    <div key={day} className="day-column">
                        <h3 className="day-title">{day}</h3>
                        <div className="class-list">
                            {classes.map((item, index) => (
                                <div 
                                    key={index} 
                                    onClick={openInscriere}
                                    className={`class-card ${item.free ? 'card-free' : ''}`}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <span className="class-time">{item.time}</span>
                                    <p className="class-name">{item.name}</p>
                                    <span className={`class-level level-${item.level.toLowerCase()}`}>{item.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="schedule-cta-wrapper">
                <button className="cta-schedule-register" onClick={openInscriere}>
                    Înscrie-te la O Clasă de Proba
                </button>
            </div>
        </section>
    );
}

export default ScheduleTable;