import * as React from "react";
import { Grid, Skeleton } from "@mui/material";
import Chip from "@mui/joy/Chip";
import WineBar from "@mui/icons-material/WineBar";
import SmokingRoomsIcon from "@mui/icons-material/SmokingRooms";
import GenderIcon from "../icons/GenderIcon";
import RelationIcon from "../icons/RelationIcon";
import ReligionIcon from "../icons/ReligionIcon";import ImageContent from "./ImageContent";


function ChipsContent({isLoading,user}) {
  return (
    <div> <Chip
    startDecorator={<GenderIcon />}
    color="neutral"
    size="lg"
    variant="soft"
  >
    {isLoading ? <Skeleton /> : user?.gender}
  </Chip>
  <Chip
    startDecorator={<ReligionIcon />}
    color="neutral"
    size="lg"
    variant="soft"
  >
    {isLoading ? <Skeleton /> : user?.faith}
  </Chip>
  <Chip
    startDecorator={<RelationIcon />}
    color="neutral"
    size="lg"
    variant="soft"
  >
    {isLoading ? <Skeleton /> : user?.realationshipStatus}
  </Chip>
  <Chip
    startDecorator={<SmokingRoomsIcon />}
    color="neutral"
    size="lg"
    variant="soft"
  >
    {isLoading ? <Skeleton /> : user?.smoking}
  </Chip>
  <Chip
    startDecorator={<WineBar />}
    color="neutral"
    size="lg"
    variant="soft"
  >
    {isLoading ? (
      <Skeleton />
    ) : user?.drinking ? (
      user?.drinking
    ) : (
      ""
    )}
  </Chip></div>
  )
}

export default ChipsContent