import Link from 'next/link';
import { useRouter } from 'next/router';

const MainMenu = () => {
    const router = useRouter();
    const { locale } = router;

    // Import the menu data dynamically based on the selected language
    const MainMenuData = locale === 'fr' ? require('../../data/MainMenu-fr.json') : require('../../data/MainMenu.json');

    return (
        <ul className="mainmenu">
            {MainMenuData?.map((menu, menuIndex) => (
                <li
                    className={menu.hasChildren ? "has-dropdown" : ""}
                    key={`menu-item-${menuIndex}`}
                >
                    <Link href={menu.url}>{menu.title}</Link>
                    {menu.hasChildren && (
                        <ul className="axil-submenu">
                            {menu.children.map((submenuItem, submenuIndex) => (
                                <li key={`submenu-item-${submenuIndex}`}>
                                    <Link href={submenuItem.url}>{submenuItem.title}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default MainMenu;
