// export const getDepartures = async () => {
//   try {
//     const response = await fetch(
//       "https://hstc-api.testing.keyholding.com/gates",
//       {
//         method: "GET",
//         headers: {
//           "x-api-key": "94962B9A-966C-43FC-8E1A-145DEAA5970C",
//         },
//       }
//     );
//     if (!response.ok) {
//       throw new Error("Request failed!");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

// export const transportCost = async (fromAirport, toAirport) => {
//   try {
//     const response = await fetch(
//       `https://hstc-api.testing.keyholding.com/gates/${fromAirport}/to/${toAirport}`,
//       {
//         method: "GET",
//         headers: {
//           "x-api-key": "94962B9A-966C-43FC-8E1A-145DEAA5970C",
//         },
//       }
//     );
//     if (!response.ok) {
//       throw new Error("Cost Request failed!");
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };
