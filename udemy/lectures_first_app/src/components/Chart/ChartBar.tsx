import './ChartBar.css';

export interface IChartBarProps {
    value: number;
    maxValue: number | null;
    label: string;
}

export default function ChartBar({label, maxValue, value}: IChartBarProps) {
    let barHeight = '0%';
    if (maxValue && maxValue > 0) {
        barHeight = `${Math.round((value / maxValue) * 100)}%`;
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barHeight}}></div>
            </div>
            <div className="chart-bar__label">{label}</div>
        </div>
    );
}
