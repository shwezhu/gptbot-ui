import "../css/nav.css";

export default function Navigator() {
    return (
        <ul className="menu">
            <li>一级菜单
                <ul className="submenu">
                    <li>
                        <button>设置暗号</button>
                    </li>
                    <li>
                        <button>gpt-4</button>
                    </li>
                </ul>
            </li>
        </ul>
    )
}