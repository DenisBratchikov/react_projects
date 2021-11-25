import ChartBar, {IChartBarProps} from './ChartBar';

import './Chart.css';

type TChartElem = Omit<IChartBarProps, 'maxValue'>;

interface IChartProps {
    dataPoints: TChartElem[];
}

export default function Chart(props: IChartProps) {
    const maxValue = Math.max(...props.dataPoints.map((elem) => elem.value));
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maxValue}
                    label={dataPoint.label}/>
            ))}
        </div>
    );
}
