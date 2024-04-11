import { DrawerNavigationProp, createDrawerNavigatior } from '@react-navigation/drawer';
import { Pag5, Pag6 } from "../screens";

type MenuDrawerParam = {
    Pag5: undefined
    Pag6: undefined
}
type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Pag5">
    export type MenuDrawerTypes = {
    navigation: MenuScreenNavigation
}
export function MenuDrawer() {
    const Drawer = createDrawerNavigatior<MenuDrawerParam>();
        return (
        <Drawer.Navigator>
            <Drawer.Screen name="Pag5" component={Pag5} />
            <Drawer.Screen name="Pag6" component={Pag6} />
        </Drawer.Navigator>
        );
}