import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";
import PlaceDetail from "../components/PlaceDetail";
import { getPlacesData } from "./api/getPlacesData";
import Head from "next/head";
//👇 Comment out if using API. Uncomment if using offline database.
import { places } from "../libs/offlineData.js";

const Home = () => {
  //👇 Comment out if using offline database. Uncomment if using API
  // const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [category, setCategory] = useState('') 
   const [type, setType] = useState("restaurants");
  const [ratings, setRatings] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  
  //👇 Comment out if using API. Uncomment if using offline database.

  // get the users current location on intial login
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  // updates the data to the users choice of rating
  useEffect(() => {
    const filteredData = places.filter((place) => place.rating > ratings);
    setFilteredPlaces(filteredData);
    console.log({ ratings });
  }, [ratings]);

  useEffect(() => {
    const filteredCategory = places.filter((place) => place.category === category);
    // setCategory(filteredCategory)
    console.log(filteredCategory);
  }, [category]);

  // updates the data to the users choice of category or location
  // 👇 Comment out if using offline database. Uncomment if using the API
  // useEffect(() => {
  //   setIsLoading(true);
  //   getPlacesData(type, bounds?.sw, bounds?.ne).then((data) => {
  //     console.log(`This is data: ${data}`);
  //     console.dir(data);
  //     setPlaces(data);
  //     setIsLoading(false);
  //   });
  // }, [type, coordinates, bounds]);

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxWidth={"100vw"}
      maxHeight={"100vh"}
      position={"relative"}
    >
      <Head>
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD93tjfea30qHGkuhHJWQ0vQB9FF-HYIZo"></script>
      </Head>

      <Header
        setType={setType}
        setRatings={setRatings}
        setCoordinates={setCoordinates}
        setCategory={setCategory}
        
      />

      <List
        places={filteredPlaces.length ? filteredPlaces : places}
        isLoading={isLoading}
      />

      <Map
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        setBounds={setBounds}
        places={filteredPlaces.length ? filteredPlaces : places}
      />
    </Flex>
  );
};

export default Home;
