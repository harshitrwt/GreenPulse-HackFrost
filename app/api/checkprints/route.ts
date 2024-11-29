import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Destructure form data from the request body
    const {
      electricityUsageKwh,
      transportationUsagePerMonth,
      shortFlights,
      longFlight,
      wasteGenerationPerMonth,
      dietaryChoice,
    } = body;

    // Perform calculations
    const totalElectricityUsage = electricityUsageKwh * 12 * 0.5; // Assume 0.5 Kg CO2/Kwh
    const totalTransportationUsage = transportationUsagePerMonth * 12 * 0.17; // Assume 2.31 Kg CO2/km
    const totalWasteGeneration =  wasteGenerationPerMonth * 12 * 1.5;  //assuming perkg
    const totalEmissionsFlight =
      shortFlights * 200 + longFlight * 1000; // Sample values for flights
    const dietaryChoiceEmission =
      dietaryChoice === 'vegan'
        ? 100
        : dietaryChoice === 'vegetarian'
        ? 300
        : 500; // Sample values for dietary choices

    const totalYearlyEmissions =
      totalElectricityUsage +
      totalTransportationUsage +
      totalEmissionsFlight +
      totalWasteGeneration +
      dietaryChoiceEmission;

    // Return calculated results
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
