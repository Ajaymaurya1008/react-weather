import axios from "axios";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState(false);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    temperature: "18",
    condition: "Hot",
    country: "India",
    city: "Virar",
    imgSrc:
      "https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png",
  });

  const handleWeather = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${city}&aqi=yes`,
      );
      const data = res.data;
      if (data) {
        setWeather({
          temperature: data.current.temp_c,
          condition: data.current.condition.text,
          country: data.location.country,
          city: data.location.name,
          imgSrc: "https:" + data.current.condition.icon,
        });
        console.log(weather);
      }
    } catch (error) {
      console.log(error);
    }
    setCity("");
    setState(false);
  };

  return (
    <div className="flex min-h-screen w-screen flex-col bg-gradient-to-l from-slate-800 to-violet-900 dark:from-gray-800 dark:to-gray-900 dark:text-gray-200">
      <div className="mx-auto px-4 py-16 sm:my-auto sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:mb-0 lg:max-w-lg lg:pr-5">
            <div className="mb-6 max-w-xl">
              <div>
                <p className="bg-teal-accent-400 mb-2 inline-block rounded-full px-3 text-xs font-semibold uppercase tracking-wider text-gray-50">
                  Weather Forecast
                </p>
              </div>
              <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold leading-snug tracking-tight text-white sm:text-5xl sm:leading-snug">
                Your reliable
                <span className="my-1 inline-block rounded bg-white px-2 text-violet-600">
                  weather companion
                </span>
                App
              </h2>
              <p className="text-base text-gray-200">
                Get accurate and up-to-date weather information for any location
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <button
                onClick={() => setState(true)}
                className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-violet-700 px-6 font-medium tracking-wide text-white shadow-md transition duration-200 hover:bg-violet-800 focus:outline-none md:mb-0 md:mr-4 md:w-auto"
              >
                Get Forecast{" "}
              </button>
            </div>
            {state ? (
              <div className="fixed inset-0 z-10 h-[700px]">
                <div
                  className="fixed inset-0 h-full w-full bg-black opacity-40"
                  onClick={() => setState(false)}
                ></div>
                <div className="flex min-h-screen items-center px-4 py-8">
                  <div className="relative mx-auto flex h-28 w-full max-w-lg items-center justify-center rounded-md bg-white shadow-lg">
                    <div className="mx-auto my-10 overflow-hidden rounded-2xl bg-white shadow-lg sm:w-[32rem] sm:max-w-lg">
                      <div className="relative bg-blue-600 py-6 pl-8 text-xl font-semibold uppercase tracking-wider text-white">
                        Enter city name
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute right-0 top-0 m-5 h-6 w-6 cursor-pointer"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          onClick={() => setState(false)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <div className="space-y-4 px-8 py-10">
                        <form onSubmit={handleWeather} className="join w-full">
                          <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Type here"
                            className="input join-item input-bordered w-full bg-slate-300 text-[16px] font-semibold text-black placeholder:text-gray-500"
                          />
                          <button
                            type="submit"
                            className="btn join-item bg-blue-500 text-[20px] text-white"
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div className="relative shadow-xl shadow-violet-700 lg:w-1/2">
            <div className="flex w-full flex-col rounded-lg bg-white p-4 text-black">
              <div>
                <h1 className="text-4xl font-semibold text-violet-700">
                  Weather Details
                </h1>
              </div>
              <div className="mt-4 flex items-center justify-center">
                <div>
                  <p className="text-lg font-medium">
                    <span className="font-semibold">City: </span> {weather.city}
                  </p>
                  <p className="text-lg font-medium">
                    <span className="font-semibold">Temperature:</span>{" "}
                    {weather.temperature} °C
                  </p>
                  <p className="text-lg font-medium">
                    <span className="font-semibold">Condition:</span>{" "}
                    {weather.condition}
                  </p>

                  <p className="text-lg font-medium">
                    <span className="font-semibold">Country:</span>{" "}
                    {weather.country}
                  </p>
                  <p className="text-lg font-medium">
                    <span className="font-semibold">Date:</span>{" "}
                    {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-lg font-medium">
                    <span className="font-semibold">Time:</span>{" "}
                    {new Date().toLocaleTimeString()}
                  </p>
                </div>
                <div className="flex items-center justify-center p-2">
                  <img
                    className="w-[150px] overflow-hidden rounded-lg"
                    src={weather.imgSrc}
                    alt="weather icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
