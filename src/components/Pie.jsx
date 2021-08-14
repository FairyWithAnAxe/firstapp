import React from 'react'
import { Pie } from 'react-chartjs-2'

const PieChart = () => {
    return (
        <div>
            <Pie
                data={{
                    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
                    datasets: [
                        {
                            label: 'Dataset 1',
                            data: [12, 19, 10, 5, 8],
                            backgroundColor: ["red", 'orange', 'yellow', 'green', "blue"]
                        }
                    ]
                }}
                height={400}
                width={600}
                options={{ maintainAspectRatio: false }}
            />
        </div>
    )
}

export default PieChart