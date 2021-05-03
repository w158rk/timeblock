
import { useSelector } from 'react-redux';
import LineView from './LineView';

const filter = (list, event) => {
    return list.filter(record => record.event.split()[0]==event);
}

const Statistics = (props) => {
    console.log('statistics');
    const records = useSelector(state => state.timeBlocks.records);
    console.log(records);
    const filtered = filter(records, 'Sleep');
    return <LineView records={filtered} />;
}

export default Statistics;
