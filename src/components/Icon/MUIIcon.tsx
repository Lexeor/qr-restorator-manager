import React, { FC } from 'react';
// import * as Icons from "@mui/icons-material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BarChartIcon from '@mui/icons-material/BarChart';
import StorefrontIcon from '@mui/icons-material/Storefront';

const Icons = {
  Dashboard: DashboardIcon,
  TableRestaurant: TableRestaurantIcon,
  RestaurantMenu: MenuBookIcon,
  BrunchDining: RestaurantMenuIcon,
  Stats: BarChartIcon,
  Storefront: StorefrontIcon,
};

export type IconNames = keyof typeof Icons;
export type IconProps = {
  iconName: IconNames;
};

export const IconComponent: FC<IconProps> = ({ iconName }) => {
  const Icon = Icons[iconName];
  return <Icon />;
};
