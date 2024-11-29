
"use client";

import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Chart.register(...registerables);

const Page = () => {
  const [formData, setFormData] = useState({
    electricityUsageKwh: "",
    transportationUsagePerMonth: "",
    shortFlights: "",
    longFlight: "",
    wasteGenerationPerMonth: "",
    dietaryChoice: "vegan",
  });

  const [result, setResult] = useState<any>(null);
  const [chartData, setChartData] = useState<any>({
    labels: ["Electricity", "Transportation", "Air Travel", "Waste Generation", "Dietary Choice"],
    datasets: [
      {
        label: "CO2 Emissions (Kg/year)",
        data: [0, 0, 0, 0, 0], 
        backgroundColor: [
          "rgba(255, 99, 132 , 0.6)",
          "rgba(56, 99, 132 , 0.6)",
          "rgba(25, 67, 222 , 0.6)",
          "rgba(155, 79, 132 , 0.6)",
          "rgba(25, 67, 222 , 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132 , 1)",
          "rgba(65, 99, 252 , 1)",
          "rgba(35, 29, 62 , 1)",
          "rgba(88, 89, 112 , 1)",
          "rgba(88, 89, 112 , 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
        const response = await fetch("/api/checkprints", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const data = await response.json();

        if (!response.ok || !data) {
            throw new Error("Invalid response from the backend");
        }

        // Ensure numeric data for the chart
        const chartValues = [
            parseFloat(data.totalElectricityUsage.value),
            parseFloat(data.totalTransportationUsage.value),
            parseFloat(data.totalEmissionsFlight.value),
            parseFloat(data.totalWasteGeneration.value),
            parseFloat(data.dietaryChoiceEmission.value),
        ];

        setChartData({
            labels: ["Electricity", "Transportation", "Air Travel", "Waste Generation", "Dietary Choice"],
            datasets: [
                {
                    label: "CO2 Emissions (Kg/year)",
                    data: chartValues,
                    backgroundColor: [
                        "rgba(255, 99, 132 , 0.6)",
                        "rgba(56, 99, 132 , 0.6)",
                        "rgba(25, 67, 222 , 0.6)",
                        "rgba(155, 79, 132 , 0.6)",
                        "rgba(25, 67, 22 , 0.6)",
                    ],
                    borderColor: [
                        "rgba(255, 99, 132 , 1)",
                        "rgba(65, 99, 252 , 1)",
                        "rgba(35, 29, 62 , 1)",
                        "rgba(88, 89, 112 , 1)",
                        "rgba(88, 89, 112 , 1)",
                    ],
                    borderWidth: 1,
                },
            ],
        });

        setResult(data);

        // Toast notification logic
        if (data.totalYearlyEmissions.value < 10000) {
            toast.success("You are making the planet a safe place for living, ThankYou!!", {
                position: "top-right",
                autoClose: 5000,
            });
        } else {
            toast.error("Danger: Please work on controlling your Carbon Emissions before it gets too late!! ⚠️ ", {
                position: "top-right",
                autoClose: 5000,
            });
        }
    } catch (err) {
        console.error("Error:", err);
    }
};


  const chartOptions = {
    scales: {
      y: {
       beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center p-5 flex-col"
        style={{
          backgroundImage: `url('https://t4.ftcdn.net/jpg/03/92/25/09/360_F_392250914_2Od8jNRBPgpMu8W29vCh4hiu5EUXbgGU.jpg')`,
        }}
      >
        
        <div className="relative bg-gray-200 p-10 w-[95%] overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            style={{ zIndex: 1 }}
            
          >
            <source src="/videos/bgvideo2.mp4" type="video/mp4" />
              <p>not support the video tag.</p>
          </video>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold m-6 text-center text-white">Carbon FootPrint Visualizer</h1>
            <p className="text-5xl font-bold m-6 text-center text-white">@harshit_rwt</p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-8 bg-gray-900 p-10 w-[95%]'>
        <div className='bg-white p-8 rounded-lg shadow-lg flex-1'>
         <h1 className='text-3xl font-bold m-6 text-center'>Check your Carbon FootPrints</h1>
         <form onSubmit={handleSubmit} className='space-y-5'>
           <div className='flex flex-col'>
              <label className='mb-2'
              >Electricity Usage Kwh/month:</label>
              <p className="text-gray-400">An avg person with a family uses in ~(800-900)Kwh of energy ideally /month, based on this idea you can enter your data</p>
              <input type='number' name='electricityUsageKwh' 
              value={formData.electricityUsageKwh} 
              onChange={handleChange}
              min="0"
              step="1"
              className='border border-gray-300 rounded-md p-2 mb-5'
              />
              <label className='mb-2'
              >TransportationUsage Kg/month:</label>
              <p className="text-gray-400">It includes all the cars bikes usage u have It ideally ranges b/w (350-400 kg/month for normal usage if u fall into this category fill that else if u use extensively enter your value)</p>
              <input type='number' name='transportationUsagePerMonth' 
              value={formData.transportationUsagePerMonth} 
              onChange={handleChange}
              min="0"
              step="1"
              className='border border-gray-300 rounded-md p-2 mb-5'
              />
              <label className='mb-2'
              >Short Flights Per/month:</label>
              <input type='number' name='shortFlights' 
              value={formData.shortFlights} 
              onChange={handleChange}
              min="0"
              step="1"
              className='border border-gray-300 rounded-md p-2 mb-5'
              />
              
              <label className='mb-2'
              >Long Flights Per/month:</label>
              <input type='number' name='longFlight' 
              value={formData.longFlight} 
              onChange={handleChange}
              min="0"
              step="1"
              className='border border-gray-300 rounded-md p-2 mb-5'
              />
              <label className='mb-2'
              >Waste Generation Kg/month:</label>
              <p className="text-gray-400">An avg person with a family produces 70 kg of waste per month, You can enter your data refrencing this</p>
              <input type='number' name='wasteGenerationPerMonth' 
              value={formData.wasteGenerationPerMonth} 
              onChange={handleChange}
              min="0"
              step="1"
              className='border border-gray-300 rounded-md p-2 mb-5'
              />
              
           </div>
           <div className='flex flex-col'>
              <label className='mb-2'>Dietary Choices</label>
              <select
                name='dietaryChoice'
                value={formData.dietaryChoice}
                onChange={handleChange}
                className='border border-gray-300 p-2 rounded-md'
              >
                <option value="vegan">vegan</option>
                <option value="vegetarian">vegetarian</option>
                <option value="Non-vegetarian">Non-Vegetarian</option>
                
              </select>
           </div>
           <br/>
           <div className='flex flex-col'>
            <button type='submit' className='bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors duration-300'>Check Emissions</button>
           </div>
         </form>
        </div>
        {/*Results*/}
        <div className='bg-white p-8 rounded-lg shadow-lg flex-1 '>
          <h1 className='text-3xl font-bold mb-2'>Your Yearly Emissions Statistics</h1>
          <Bar  data={chartData} options={chartOptions} />
          
          {
            result && (
              <div className='mt-8'>
                <p className='text-2xl font-bold'>Air Travels</p>
                <p>
                  {result.totalEmissionsFlight.value}{''}
                  {result.totalEmissionsFlight.unit}
                </p>
                <br/>
                <p className='text-2xl font-bold'>Electricity</p>
                <p>
                  {result.totalElectricityUsage.value}{" "}
                  {result.totalElectricityUsage.unit}
                </p>
                <br/>
                <p className='text-2xl font-bold'>Transportations</p>
                <p>
                  {result.totalTransportationUsage.value}{" "}
                  {result.totalTransportationUsage.unit}
                </p>
                <br/>
                <p className='text-2xl font-bold'>Waste Generation</p>
                <p>
                  {result.totalWasteGeneration.value}{" "}
                  {result.totalWasteGeneration.unit}
                </p>
                <br/>
                <p className='text-2xl font-bold'>Dietary Choices</p>
                <p>
                  {result.dietaryChoiceEmission.value}{" "}
                  {result.dietaryChoiceEmission.unit}
                </p>
                <br/>

                <p className='text-2xl font-bold'>
                  TOTAL : {result.totalYearlyEmissions.value}{" "}
                  {result.totalYearlyEmissions.unit}
                </p>
                <br/>
                
                {result.totalYearlyEmissions.value < 10000 && (
                  <p className='text-green-600 font-bold'>
                    Great job!🌟 Your total emissions are below 10,000 kg/year! Keep up the fantastic work and keep making a positive impact on our planet! 🌍💚
                  </p>
                )}
                {result.totalYearlyEmissions.value > 10000 && (
                  <p className='text-red-600 font-bold'>
                    ⚠️ Alert: Your annual carbon emissions have surpassed 10,000 kg! Time to take actions for a healthier planet.
                    <span className="text-red-400 font-semibold">We advice you to join some communities, you can find them in greenpulse join community section   <a href="/"><button className="text-green-600">visit back!</button></a></span>

                  </p>
                  
                )}
                

              </div>
            )
          }
          <br/>
        </div>
      </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Page;