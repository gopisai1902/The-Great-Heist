import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

const BarChart = (params) => {

    const [show, setShow] = useState(false)
    const [timeData, setTimeData] = useState([])
    const [trialData, setTrialData] = useState([])

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };

    useEffect(() => {
        let time = [0, 0, 0, 0]
        let trials = [0, 0, 0, 0]

        params.data.map((doc, id) => {
            if (doc.duration <= 10) time[0]++
            else if (doc.duration > 10 && doc.duration <= 25) time[1]++
            else if (doc.duration > 25 && doc.duration <= 35) time[2]++
            else if (doc.duration >= 35) time[3]++
        })

        params.data.map((doc, id) => {
            if (doc.trials <= 5) trials[0]++
            else if (doc.trials > 5 && doc.trials <= 10) trials[1]++
            else if (doc.trials > 10 && doc.trials <= 15) trials[2]++
            else if (doc.trials >= 15) trials[3]++
        })

        setTimeData({
            labels: ['<=10', '>10 && <=25', '>25 && <=35', '>35'],
            datasets: [
                {
                    label: "# of participants",
                    data: time,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ]
                }
            ]
        })
        setTrialData({
            labels: ['<=5', '>5 && <=10', '>10 && <=15', '>15'],
            datasets: [
                {
                    label: "# of participants",
                    data: trials,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ]
                }
            ]
        })
        setShow(true)
    }, [])

    return (
        <div>
            {
                show
                    ?
                    <span>
                        <Bar options={options} data={timeData} />
                        <p>X-Axis (time ranges in minutes)</p>

                        <Bar options={options} data={trialData} />
                        <p>X-Axis (trials count)</p>
                    </span>
                    :
                    <></>
            }
            
        </div>
    );
}

export default BarChart;
