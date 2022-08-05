import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import List from "../components/List";
import Map from "../components/Map";
import PlaceDetail from "../components/PlaceDetail";
import { getPlacesData } from "./api/getPlacesData";
import Head from "next/head";
import LargeCard from "../components/LargeCard";


//👇 Comment out if using API. Uncomment if using offline database.
import { places } from "../libs/offlineData.js";




const Home = () => {
  //👇 Comment out if using offline database. Uncomment if using API
// const [places, setPlaces] = useState({});
const [filteredCategory, setFilteredCategory] = useState([])
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);
  const [category, setCategory] = useState('')
  const [accessibility, setAccessibility] = useState('')  
  
   const [type, setType] = useState("restaurants");
  const [ratings, setRatings] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // setPlaces(places)

  const [accessibilityFilter, setaccessibilityFilter] = useState({})

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

  // useEffect(() => {
  //   const userChoice = places.filter((place) => place.category === category);
  //   console.log(userChoice);
  // }, [category]);

  // useEffect(() => {
  //   const filteredCategory = places.filter((place) => place.category === category);
  //   setFilteredCategory(filteredCategory)
  //   console.log(filteredCategory)
  // }, [category]);

  // useEffect(() => {

  //   //re-render map
  // }, [places]);
  
  useEffect(() => {
    console.log(places.accessibility?.accessible)
    let filteredCategory = [];
    let filteredAccessibility = [];
    let finalFilter = []
    if (category !== '') {
       filteredCategory =  places.filter((place) => place.category === category)
    }
    let accessibleObject = {}
if (accessibility !== '') {
  switch(accessibility) {
    case 'Mobility':
      accessibleObject = {accessible: true}
    break;
    case 'Hearing':
      accessibleObject =  {hearing: true}
      break;
    case 'Vision':
      accessibleObject =  {eye: true}
        break;
    case 'Neurodivergent':
      accessibleObject =  {brain: true}
      break;
    default:
      console.log('default select case...')
      // code block
  }
  filteredAccessibility = places.filter((place) => place.acessibility === accessibleObject);
}
finalFilter = [...filteredCategory, ...filteredAccessibility]
    // const filteredCategory = places.filter((place) => place.category === category);
    setFilteredCategory(finalFilter)
    console.log(finalFilter)
  }, [category, accessibility]);

  // let placeFilter = {
  //   category: category,
  //   accessibility: accessibility,
  //   rating: ratings
  // };




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
        setAccessibility={setAccessibility}
      />

      <List
        places={filteredCategory.length ? filteredCategory : places}
        isLoading={isLoading}
      />

      <Map
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        setBounds={setBounds}
        places={filteredCategory.length ? filteredCategory : places}
      />
    </Flex>
  );
};

export default Home;
