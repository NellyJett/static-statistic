import { useRef, useEffect, useState } from 'react';
import UserData from '../Data'; 
import { Line } from 'react-chartjs-2';
import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { Chart as ChartJS } from 'chart.js/auto';

const LineChart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    labels: UserData.map((data) => data.date),
    datasets: [
      {
        label: 'Profits',
        data: UserData.map((data) =>
          typeof data.profitGained === 'string' && data.profitGained.includes('M')
            ? null 
            : data.profitGained
        ),
        borderColor: '#B86500',
        tension: 0.2,
        fill: true, 
      },
    ],
  });

  const applyGradient = () => {
    const chart = chartRef.current;
    if (!chart) return;

    const ctx = chart.ctx;
    const chartArea = chart.chartArea; 

    // Create a gradient starting from the line down to the X-axis
    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
    gradient.addColorStop(0, 'rgba(161, 247, 247, 0.2)'); 
    gradient.addColorStop(1, 'rgba(255, 225, 255, 0.2)'); 

    // Update the dataset background with the gradient
    const newChartData = { ...chartData };
    newChartData.datasets[0].backgroundColor = gradient;
    setChartData(newChartData);
  };

  useEffect(() => {
    if (chartRef.current) {
      applyGradient(); 
    }
  }, );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false, 
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 25,
          callback: (value) => value,
        },
        grid: {
          color: '#e0e0e0', 
          lineWidth: 2, 
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
    <hr className='mt-4' />
      <div className="bg-white rounded-lg px-6 pt-6 w-full grid gap-12 grid-cols-1 lg:grid-cols-[2fr_1fr] mt-4 pb-6">
        
      {/* Left Section */}
      <div className="w-full place-content-center">        
        <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-4">
          <h1 className="text-2xl font-bold">Service Report</h1>

          {/* Buttons Container */}
          <div className="flex gap-2 mt-2 sm:mt-0">
            <button className="btn flex items-center gap-2 border border-[#dfaf36] rounded-full px-4 py-2">
              NGO
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="btn flex items-center gap-2 border border-[#dfaf36] rounded-full px-4 py-2">
              Last Months
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Commission Section */}
        <div className="mt-6 flex flex-col items-center text-center space-y-3">
          <div className="top">
            <p className="text-sm font-medium">Commission Received</p>
            <h1 className="btn text-xl font-bold">NGN10,000</h1>
          </div>
          <hr className="my-2 w-1/2 border-gray-300" />
          <div className="bottom">
            <p className="text-sm font-medium">Successful Request</p>
            <h1 className="btn text-xl font-bold">900</h1>
          </div>
        </div>
        <hr className='my-2 w-3/4 border-gray-300 place-content-center' />
        {/* Chart Container */}
        <div className="w-full h-[250px] sm:h-[500px] shadow-lg rounded-lg p-4 bg-white mt-6 overflow-hidden">
          <h2 className="text-xl font-semibold mb-4">Profits</h2>
          <div className="relative h-full">
            <Line ref={chartRef} data={chartData} />
          </div>

          {/* Legend */}
          <div className="flex items-center mt-4">
            <div className="w-3 h-3 bg-[#4bc0c0] mr-2 rounded-full"></div>
            <span className="text-sm font-medium">Profits</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-auto h-500px">
        <h1 className='text2 font-bold'>Activity</h1>
        <div className="mt-8 space-y-5 relative">
          {/* First Event */}
          <div className="flex items-start space-x-2">
            <div className="relative">
              <InformationCircleIcon className="w-4 h-8 btn" />
              <span className="absolute top-5 left-1/2 -ml-px h-11 w-px border-l border-dotted" style={{ borderColor: '#B86500' }}></span>
            </div>
            <div className="flex flex-col">
              <p>
                <strong>Ben</strong> paid for a booking session with <strong>Simi</strong>.
              </p>
              <p className="text-gray-400 font-thin text-sm">
                Oct 23rd, 2024 9:20AM
              </p>
            </div>
          </div>
          {/* second event */}
          <div className="flex items-start space-x-2">
            <div className="relative">
              <InformationCircleIcon className="w-4 h-8 btn" />
              <span className="absolute top-5 left-1/2 -ml-px h-11 w-px border-l border-dotted" style={{ borderColor: '#B86500' }}></span>
            </div>
            <div className="flex flex-col">
              <p>
                <strong>Ben</strong> paid for a booking session with <strong>Simi</strong>.
              </p>
              <p className="text-gray-400 font-thin text-sm">
                Oct 23rd, 2024 9:20AM
              </p>
            </div>
          </div>

          {/* third Event */}
          <div className="flex items-start space-x-2">
            <div className="relative">
              <InformationCircleIcon className="w-4 h-4 btn" />
              <span className="absolute top-5 left-1/2 -ml-px h-11 w-px border-l border-dotted" style={{ borderColor: '#B86500' }}></span>
            </div>
            <div className="flex flex-col">
              <p>
                <strong>Ben</strong> paid for a booking session with <strong>Simi</strong>.
              </p>
              <p className="text-gray-400 font-thin text-sm">
                Oct 23rd, 2024 9:20AM
              </p>
            </div>
          </div>

          {/* fouth Event */}
          <div className="flex items-start space-x-2">
            <div className="relative">
              <InformationCircleIcon className="w-4 h-4 btn" />
              <span className="absolute top-5 left-1/2 -ml-px h-12 w-px border-l border-dotted" style={{ borderColor: '#B86500' }}></span>
            </div>
            <div className="flex flex-col">
              <p>
                <strong>Ben</strong> paid for a booking session with <strong>Simi</strong>.
              </p>
              <p className="text-gray-400 font-thin text-sm">
                Oct 23rd, 2024 9:20AM
              </p>
            </div>
          </div>
          {/* fifth event */}
          <div className="flex items-start space-x-2">
            <div className="relative">
              <InformationCircleIcon className="w-4 h-8 btn" />
              <span className="absolute top-5 left-1/2 -ml-px h-12 w-px border-l border-dotted" style={{ borderColor: '#B86500' }}></span>
            </div>
            <div className="flex flex-col">
              <p>
                <strong>Ben</strong> paid for a booking session with <strong>Simi</strong>.
              </p>
              <p className="text-gray-400 font-thin text-sm">
                Oct 23rd, 2024 9:20AM
              </p>
            </div>
          </div>
          {/* sixth event */}
          <div className="flex items-start space-x-2">
            <div className="relative">
              <InformationCircleIcon className="w-4 h-8 btn" />
              {/* <span className="absolute top-5 left-1/2 -ml-px h-11 w-px border-l border-dotted border-gray-400"></span> */}
            </div>
            <div className="flex flex-col">
              <p>
                <strong>Ben</strong> paid for a booking session with <strong>Simi</strong>.
              </p>
              <p className="text-gray-400 font-thin text-sm">
                Oct 23rd, 2024 9:20AM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default LineChart;
