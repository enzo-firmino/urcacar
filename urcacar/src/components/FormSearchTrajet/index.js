import {useState} from "react";

export function FormSearchTrajet(props) {


    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${depart}`)
    }

    let currentDate = new Date();

    const [depart, setDepart] = useState('');
    const [arrive, setArrive] = useState('');
    const [date, setDate] = useState(currentDate.getDate());
    const [heureDepart, setHeureDepart] = useState(currentDate.getHours());
    const [heureArrive, setHeureArrive] = useState(currentDate.getHours());
    const [nbPassager, setNbPassager] = useState(1);


    return ( <form onSubmit={handleSubmit}>
        <label>
            <input
                placeholder='Depart'
                type="text"
                value={depart}
                onChange={e => setDepart(e.target.value)}
            />
        </label>
        <label>
            <input
                placeholder='Arrivée'
                type="text"
                value={arrive}
                onChange={e => setArrive(e.target.value)}
            />
        </label>
        <label>
            <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
            />
        </label>
        <label>
            <input
                type="time"
                value={heureDepart}
                onChange={e => setHeureDepart(e.target.value)}
            />
        </label>
        <label>
            <input
                type="time"
                value={heureArrive}
                onChange={e => setHeureArrive(e.target.value)}
            />
        </label>
        <label>
            <input
                type="range"
                value={nbPassager}
                onChange={e => setNbPassager(e.target.value)}
            />
        </label>
        <input type="submit" value="Envoyer"/>
    </form>)
}
