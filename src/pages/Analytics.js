import React, { useEffect, useState } from 'react';
import { db } from '../firebase/Firebase'
import { collection, query, orderBy } from 'firebase/firestore';
import loading from '../assets/images/loading.gif'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import BarChart from '../components/charts/BarChart'

const Analytics = () => {

    const [data, setData] = useState([])
    const [showBar, setShowBar] = useState(false)
    const [users, loading, err] = useCollectionData(
        query(collection(db, "users"), orderBy("trials"))
    );

    const prepareData = () => {
        let temp = []
        users.map((user, idx) => {
            temp.push({ duration: user.duration, trials: user.trials })
        })
        setData([...temp])
        setShowBar(true)
    }

    return (
        <div>
            {
                loading
                    ?
                    <></>
                    :
                    <button onClick={async () => await prepareData()}>Get Barchart</button>
            }
            {
                showBar
                    ?
                    <BarChart data={data} />
                    :
                    <></>
            }
        </div>
    );
}

export default Analytics;
