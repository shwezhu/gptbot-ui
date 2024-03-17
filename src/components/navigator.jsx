import "../css/nav.css";

export default function Navigator() {
    return (
        <ul className="menu">
            <li className={"menu-li"}>一级菜单
                <ul className="submenu">
                    <li className={"menu-li"}>设置暗号</li>
                    <li className={"menu-li"}>设置模型</li>
                </ul>
            </li>
        </ul>
    )
}