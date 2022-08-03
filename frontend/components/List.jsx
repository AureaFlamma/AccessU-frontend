import React from "react";
import PlaceDetail from "./PlaceDetail";
import { Flex, Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faWheelchair } from '@fortawesome/free-solid-svg-icons'

const List = ({ places, isLoading }) => {
  if (isLoading)
    return (
      <Flex
        direction={"column"}
        bg={"whiteAlpha.900"}
        width={"37vw"}
        height="100vh" //may need {} around the ""
        position={"absolute"}
        left={0}
        top={0}
        zIndex={1}
        overflow="hidden" //may need {} around the ""
        px={2}
      >
        <Box padding="6" boxShadow="lg" bg="white" mt={16}>
          <SkeletonCircle size="10"  />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" mt={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" mt={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
        <Box padding="6" boxShadow="lg" bg="white" mt={3}>
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
      </Flex>
    );

  return (
    <Flex
      direction={"column"}
      bg={"whiteAlpha.900"}
      width={"37vw"}
      height="100vh" //may need {} around the ""
      position={"absolute"}
      left={0}
      top={0}
      zIndex={1}
      overflow="hidden" //may need {} around the ""
      px={2}
    >
     
     <FontAwesomeIcon className="fa-2xl" icon={faWheelchair} />
      <Flex flex={1} overflowY={"scroll"} mt={16} direction={"column"}>
        {places && 
        places.map((place, i) => <PlaceDetail place={place} key={i} />)}
      </Flex>
    </Flex>
  );
};

export default List;
