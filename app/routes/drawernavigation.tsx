import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNav from "./tabnavigation";
import CustomDrawer from "../views/customDrawer/customDrawer";
const Drawer = createDrawerNavigator()
const DrawerNavigation = ({ navigation }: any) => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            initialRouteName="Tab"
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name="Tab" component={TabNav} />
        </Drawer.Navigator>

    )

}

export default DrawerNavigation;