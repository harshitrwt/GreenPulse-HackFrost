import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      electricityUsageKwh,
      transportationUsagePerMonth,
      shortFlights,
      longFlight,
      wasteGenerationPerMonth,
      dietaryChoice,
    } = body;

    
    const totalElectricityUsage = electricityUsageKwh * 12 * 0.5; 
    const totalTransportationUsage = transportationUsagePerMonth * 12 * 0.17; 
    const totalWasteGeneration =  wasteGenerationPerMonth * 12 * 1.5;  
    const totalEmissionsFlight =
      shortFlights * 200 + longFlight * 1000; 
    const dietaryChoiceEmission =
      dietaryChoice === 'vegan'
        ? 100
        : dietaryChoice === 'vegetarian'
        ? 300
        : 500; 

    const totalYearlyEmissions =
      totalElectricityUsage +
      totalTransportationUsage +
      totalEmissionsFlight +
      totalWasteGeneration +
      dietaryChoiceEmission;

    
    return NextResponse.json({
      totalElectricityUsage: {
        value: totalElectricityUsage.toFixed(2),
        unit: 'Kg/year',
      },
      totalTransportationUsage: {
        value: totalTransportationUsage.toFixed(2),
        unit: 'Kg/year',
      },
      totalEmissionsFlight: {
        value: totalEmissionsFlight.toFixed(2),
        unit: 'Kg/year',
      },
      totalWasteGeneration:{
        value: totalWasteGeneration.toFixed(2),
        unit: 'kg/year',
      },
      dietaryChoiceEmission: {
        value: dietaryChoiceEmission.toFixed(2),
        unit: 'Kg/year',
      },
      totalYearlyEmissions: {
        value: totalYearlyEmissions.toFixed(2),
        unit: 'Kg/year',
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid input or calculation error' },
      { status: 400 }
    );
  }
}
