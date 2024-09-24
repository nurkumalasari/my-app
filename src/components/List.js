import StkLink from "./Link";

function Item({ label, hasLink, href=""}) {
    if (hasLink) {
        return (
            <li className="item">
                <StkLink href={href} label={label}></StkLink>
            </li>
        );
    }
    return <li className="item">{label}</li>
}

function StkListItem(props) {
    const labelItem = props.label
    const itemhasLink = props.tujuan !== undefined ? true : false 
    const hrefItem = props.tujuan

    return (
        <Item 
            label={labelItem}
            hasLink={itemhasLink}
            href={hrefItem}
        />
    );
}

export default StkListItem;