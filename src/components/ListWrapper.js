function StkList (props) {
    const SelectedTag = props.tag;
    return(
        <SelectedTag>
            {props.children}
        </SelectedTag>
    );
}

export default StkList;